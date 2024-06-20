import React, { useCallback, useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
  EmblaOptionsType,
  EmblaCarouselType,
  EmblaEventType,
} from "embla-carousel";
import {
  Embla,
  EmblaViewport,
  EmblaContainer,
  EmblaSlide,
  EmblaSlideNumber,
  EmblaControls,
  EmblaButtons,
} from "./ParallaxCarousel.styles";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./ParallaxArrowButtons";
import { useDotButton } from "./ParallaxDotButtons";
import SemiColonIcon from "../../../public/assets/svg/SemiColonIcon";
import StarIcon from "../../../public/assets/svg/StarIcon";
import { theme } from "@/constants/basetheme";

const TWEEN_FACTOR_BASE = 0.52;

const numberWithinRange = (number: number, min: number, max: number): number =>
  Math.min(Math.max(number, min), max);

type PropType = {
  slides: any[];
  options?: EmblaOptionsType;
};

const ParallaxCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const tweenFactor = useRef(0);
  const tweenNodes = useRef<HTMLElement[]>([]);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const setTweenNodes = useCallback((emblaApi: EmblaCarouselType): void => {
    tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
      return slideNode.querySelector(".embla__slide__number") as HTMLElement;
    });
  }, []);

  const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
  }, []);

  const tweenScale = useCallback(
    (emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
      const engine = emblaApi.internalEngine();
      const scrollProgress = emblaApi.scrollProgress();
      const slidesInView = emblaApi.slidesInView();
      const isScrollEvent = eventName === "scroll";

      emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
        let diffToTarget = scrollSnap - scrollProgress;
        const slidesInSnap = engine.slideRegistry[snapIndex];

        slidesInSnap.forEach((slideIndex) => {
          if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

          if (engine.options.loop) {
            engine.slideLooper.loopPoints.forEach((loopItem) => {
              const target = loopItem.target();

              if (slideIndex === loopItem.index && target !== 0) {
                const sign = Math.sign(target);

                if (sign === -1) {
                  diffToTarget = scrollSnap - (1 + scrollProgress);
                }
                if (sign === 1) {
                  diffToTarget = scrollSnap + (1 - scrollProgress);
                }
              }
            });
          }

          const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current);
          const scale = numberWithinRange(tweenValue, 0, 1).toString();
          const tweenNode = tweenNodes.current[slideIndex];
          tweenNode.style.transform = `scale(${scale})`;
        });
      });
    },
    []
  );

  useEffect(() => {
    if (!emblaApi) return;

    setTweenNodes(emblaApi);
    setTweenFactor(emblaApi);
    tweenScale(emblaApi);

    emblaApi
      .on("reInit", setTweenNodes)
      .on("reInit", setTweenFactor)
      .on("reInit", tweenScale)
      .on("scroll", tweenScale)
      .on("slideFocus", tweenScale);
  }, [emblaApi, tweenScale]);

  return (
    <Embla>
      <EmblaViewport ref={emblaRef}>
        <EmblaContainer>
          {slides.map((item, index) => (
            <EmblaSlide key={index}>
              <EmblaSlideNumber className="embla__slide__number">
                {/* Icon */}
                <StarIcon stars={item?.stars} />
                {/* testimonal */}
                {/* name */}
                <p
                  style={{
                    fontSize: "14px",
                    fontFamily: theme.fonts.lato,
                    fontWeight: 400,
                  }}
                >
                  {item?.testimony}
                </p>
                <p
                  style={{
                    fontSize: "24px",
                    fontFamily: theme.fonts.lato,
                    color: "#0173b0",
                    fontWeight: 600,
                  }}
                >
                  {item?.name}
                </p>
                <div style={{ position: "absolute", bottom: -45, right: 25 }}>
                  <SemiColonIcon />
                </div>
                {/* icon */}
              </EmblaSlideNumber>
            </EmblaSlide>
          ))}
        </EmblaContainer>
      </EmblaViewport>

      <EmblaControls>
        <EmblaButtons>
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </EmblaButtons>
        {/* 
 <EmblaDots>
 {scrollSnaps.map((_, index) => (
 <DotButton
 key={index}
 onClick={() => onDotButtonClick(index)}
 className={`embla__dot${index === selectedIndex ? ' embla__dot--selected' : ''}`}
 />
 ))}
 </EmblaDots> */}
      </EmblaControls>
    </Embla>
  );
};

export default ParallaxCarousel;
