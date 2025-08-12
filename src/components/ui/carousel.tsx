import * as React from "react";
import useEmblaCarousel, {
	type UseEmblaCarouselType,
} from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];

type CarouselProps = {
	opts?: CarouselOptions;
	plugins?: CarouselPlugin;
	orientation?: "horizontal" | "vertical";
	setApi?: (api: CarouselApi) => void;
};

type CarouselContextProps = {
	carouselRef: ReturnType<typeof useEmblaCarousel>[0];
	api: ReturnType<typeof useEmblaCarousel>[1];
	scrollPrev: () => void;
	scrollNext: () => void;
	canScrollPrev: boolean;
	canScrollNext: boolean;
} & CarouselProps;

const CarouselContext = React.createContext<CarouselContextProps | null>(null);

function useCarousel() {
	const context = React.useContext(CarouselContext);

	if (!context) {
		throw new Error("useCarousel must be used within a <Carousel />");
	}

	return context;
}

const Carousel = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement> & CarouselProps
>(
	(
		{
			orientation = "horizontal",
			opts,
			setApi,
			plugins,
			className,
			children,
			...props
		},
		ref
	) => {
		const [carouselRef, api] = useEmblaCarousel(
			{
				...opts,
				axis: orientation === "horizontal" ? "x" : "y",
			},
			plugins
		);
		const [canScrollPrev, setCanScrollPrev] = React.useState(false);
		const [canScrollNext, setCanScrollNext] = React.useState(false);

		const onSelect = React.useCallback((api: CarouselApi) => {
			if (!api) return;
			setCanScrollPrev(api.canScrollPrev());
			setCanScrollNext(api.canScrollNext());
		}, []);

		const scrollPrev = React.useCallback(() => {
			api?.scrollPrev();
		}, [api]);

		const scrollNext = React.useCallback(() => {
			api?.scrollNext();
		}, [api]);

		const handleKeyDown = React.useCallback(
			(event: React.KeyboardEvent<HTMLDivElement>) => {
				if (event.key === "ArrowLeft") {
					event.preventDefault();
					scrollPrev();
				} else if (event.key === "ArrowRight") {
					event.preventDefault();
					scrollNext();
				}
			},
			[scrollPrev, scrollNext]
		);

		React.useEffect(() => {
			if (!api || !setApi) {
				return;
			}

			setApi(api);
		}, [api, setApi]);

		React.useEffect(() => {
			if (!api) return;

			onSelect(api);
			api.on("reInit", onSelect);
			api.on("select", onSelect);

			return () => {
				api?.off("select", onSelect);
				api?.off("reInit", onSelect);
			};
		}, [api, onSelect]);

		return (
			<CarouselContext.Provider
				value={{
					carouselRef,
					api: api,
					opts,
					orientation:
						orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
					scrollPrev,
					scrollNext,
					canScrollPrev,
					canScrollNext,
				}}
			>
				<div
					ref={ref}
					// Enable pointer events on the root so child buttons receive proper pointer lifecycle
					onKeyDownCapture={handleKeyDown}
					className={cn("relative", className)}
					role="region"
					aria-roledescription="carousel"
					{...props}
				>
					{children}
				</div>
			</CarouselContext.Provider>
		);
	}
);
Carousel.displayName = "Carousel";

const CarouselContent = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
	const { carouselRef, orientation } = useCarousel();

	return (
		<div ref={carouselRef} className="overflow-hidden">
			<div
				ref={ref}
				className={cn(
					"flex",
					orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
					className
				)}
				{...props}
			/>
		</div>
	);
});
CarouselContent.displayName = "CarouselContent";

const CarouselItem = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
	const { orientation } = useCarousel();

	return (
		<div
			ref={ref}
			role="group"
			aria-roledescription="slide"
			className={cn(
				"min-w-0 shrink-0 grow-0 basis-full",
				orientation === "horizontal" ? "pl-4" : "pt-4",
				className
			)}
			{...props}
		/>
	);
});
CarouselItem.displayName = "CarouselItem";

function useHoldToScroll(direction: "prev" | "next") {
	const { api } = useCarousel();
	const rafIdRef = React.useRef<number | null>(null);
	const pressedRef = React.useRef(false);

	// Smooth velocity in pixels/second.
	const pxPerSec = 400;

	const frame = React.useCallback(() => {
		const embla = api;
		if (!embla || !pressedRef.current) return;

		// Invert to match visual movement with click: left button drags cards to right, right button drags to left
		const dir = direction === "next" ? -1 : 1;
		const now = performance.now();
		(frame as any).prev = (frame as any).prev ?? now;
		const dtMs = now - (frame as any).prev;
		(frame as any).prev = now;

		const deltaPx = dir * pxPerSec * (dtMs / 1000);

		// Use internal engine to move by distance smoothly without snapping.
		const engine = embla.internalEngine?.();
		if (engine) {
			engine.scrollTo.distance(deltaPx, false);
		}

		rafIdRef.current = requestAnimationFrame(frame);
	}, [api, direction]);

	const start = React.useCallback(() => {
		if (!api) return;
		if (pressedRef.current) return;
		pressedRef.current = true;
		(frame as any).prev = undefined;
		rafIdRef.current = requestAnimationFrame(frame);
	}, [api, frame]);

	const stop = React.useCallback(() => {
		pressedRef.current = false;
		if (rafIdRef.current != null) {
			cancelAnimationFrame(rafIdRef.current);
			rafIdRef.current = null;
		}
		// Snap to the nearest slide after releasing hold
		const embla = api;
		if (embla) {
			const index = embla.selectedScrollSnap();
			embla.scrollTo(index);
		}
	}, [api]);

	// Stop loop on reInit so we don't use a stale API
	React.useEffect(() => {
		const embla = api;
		if (!embla) return;
		const handle = () => {
			pressedRef.current = false;
			if (rafIdRef.current != null) {
				cancelAnimationFrame(rafIdRef.current);
				rafIdRef.current = null;
			}
		};
		embla.on("reInit", handle);
		return () => {
			embla.off("reInit", handle);
			handle();
		};
	}, [api]);

	return { start, stop };
}

const CarouselPrevious = React.forwardRef<
	HTMLButtonElement,
	React.ComponentProps<typeof Button>
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {
	const { orientation, scrollPrev, canScrollPrev } = useCarousel();
	const { start, stop } = useHoldToScroll("prev");

	const handlePointerDown = (e: React.PointerEvent) => {
		// Start for mouse left button, or for touch/pen (button is often -1)
		if (e.pointerType === "mouse" && e.button !== 0) return;
		e.currentTarget.setPointerCapture?.(e.pointerId);
		start();
	};
	const handlePointerUp = (e: React.PointerEvent) => {
		stop();
	};
	const handlePointerLeave = () => {
		stop();
	};
	const handlePointerCancel = () => {
		stop();
	};
	const handleKeyDown = (e: React.KeyboardEvent) => {
		if (e.key === " " || e.key === "Enter") {
			e.preventDefault();
			start();
		}
	};
	const handleKeyUp = (e: React.KeyboardEvent) => {
		if (e.key === " " || e.key === "Enter") {
			e.preventDefault();
			stop();
		}
	};
	const handleBlur = () => stop();

	return (
		<Button
			ref={ref}
			variant={variant}
			size={size}
			className={cn(
				"absolute  h-8 w-8 rounded-full",
				orientation === "horizontal"
					? "-left-12 top-1/2 -translate-y-1/2"
					: "-top-12 left-1/2 -translate-x-1/2 rotate-90",
				className
			)}
			// Keep enabled when looping; disable logic can be handled upstream if desired
			// Preserve click-to-step. If a hold occurred, Embla will have moved smoothly already.
			onClick={scrollPrev}
			onPointerDown={handlePointerDown}
			onPointerUp={handlePointerUp}
			onPointerLeave={handlePointerLeave}
			onPointerCancel={handlePointerCancel}
			onKeyDown={handleKeyDown}
			onKeyUp={handleKeyUp}
			onBlur={handleBlur}
			{...props}
		>
			<ArrowLeft className="h-4 w-4" />
			<span className="sr-only">Previous slide</span>
		</Button>
	);
});
CarouselPrevious.displayName = "CarouselPrevious";

const CarouselNext = React.forwardRef<
	HTMLButtonElement,
	React.ComponentProps<typeof Button>
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {
	const { orientation, scrollNext, canScrollNext } = useCarousel();
	const { start, stop } = useHoldToScroll("next");

	const handlePointerDown = (e: React.PointerEvent) => {
		if (e.pointerType === "mouse" && e.button !== 0) return;
		e.currentTarget.setPointerCapture?.(e.pointerId);
		start();
	};
	const handlePointerUp = (e: React.PointerEvent) => {
		stop();
	};
	const handlePointerLeave = () => {
		stop();
	};
	const handlePointerCancel = () => {
		stop();
	};
	const handleKeyDown = (e: React.KeyboardEvent) => {
		if (e.key === " " || e.key === "Enter") {
			e.preventDefault();
			start();
		}
	};
	const handleKeyUp = (e: React.KeyboardEvent) => {
		if (e.key === " " || e.key === "Enter") {
			e.preventDefault();
			stop();
		}
	};
	const handleBlur = () => stop();

	return (
		<Button
			ref={ref}
			variant={variant}
			size={size}
			className={cn(
				"absolute h-8 w-8 rounded-full",
				orientation === "horizontal"
					? "-right-12 top-1/2 -translate-y-1/2"
					: "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
				className
			)}
			// Keep enabled when looping; disable logic can be handled upstream if desired
			// Preserve click-to-step alongside hold behavior
			onClick={scrollNext}
			onPointerDown={handlePointerDown}
			onPointerUp={handlePointerUp}
			onPointerLeave={handlePointerLeave}
			onPointerCancel={handlePointerCancel}
			onKeyDown={handleKeyDown}
			onKeyUp={handleKeyUp}
			onBlur={handleBlur}
			{...props}
		>
			<ArrowRight className="h-4 w-4" />
			<span className="sr-only">Next slide</span>
		</Button>
	);
});
CarouselNext.displayName = "CarouselNext";

export {
	type CarouselApi,
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselPrevious,
	CarouselNext,
};
