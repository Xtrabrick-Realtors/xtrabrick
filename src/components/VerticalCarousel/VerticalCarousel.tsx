import React, { useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaOptionsType } from "embla-carousel";
import {
  PrevButton,
  NextButton,
} from "./VerticalCarouselArrowButtons";
import {
  CarouselContainer,
  CarouselViewport,
  CarouselItemContainer,
  CarouselItem,
  ButtonWrapper,
} from "./VerticalCarousel.styles";

type PropType = {
  slides: any[];
  options?: EmblaOptionsType;
};
import { usePrevNextButtons } from "@/hooks/usePrevNextButton";
import { theme } from "@/constants/basetheme";


const VerticalCarousel: React.FC<PropType> = ({ slides, options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    axis: "y",
    loop: false,
    align: "center",
    // align: 0.5,
    ...options,
  });

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  useEffect(() => {
    if (emblaApi) {
      console.log("Embla initialized:", emblaApi);
      emblaApi.reInit();
    }
  }, [emblaApi]);

  return (
    <CarouselContainer>
      <CarouselViewport ref={emblaRef}>
        <CarouselItemContainer>
          {slides.map((item, index) => (
            <CarouselItem key={index}>
              <div className="embla__slide__number">
                <p
                  style={{
                    fontSize: 22,
                    fontFamily: theme.fonts.lato,
                    fontWeight: 700,
                  }}
                >
                  {item.name}
                </p>
                <p
                  style={{
                    fontSize: 18,
                    fontFamily: theme.fonts.lato,
                    fontWeight: 400,
                    color: '#434343',
                    marginTop: 45,
                  }}
                >
                  {item.testimony}
                </p>
              </div>
            </CarouselItem>
          ))}
        </CarouselItemContainer>
      </CarouselViewport>
      <div className="embla__controls">
        <ButtonWrapper className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} /> 
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </ButtonWrapper>
      </div>
    </CarouselContainer>
  );
};

export default VerticalCarousel;
