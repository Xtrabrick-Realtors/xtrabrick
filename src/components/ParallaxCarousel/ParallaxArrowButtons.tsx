import React, {
  PropsWithChildren,
  useCallback,
  useEffect,
  useState,
} from "react";
import { EmblaCarouselType } from "embla-carousel";

type UsePrevNextButtonsType = {
  prevBtnDisabled: boolean;
  nextBtnDisabled: boolean;
  onPrevButtonClick: () => void;
  onNextButtonClick: () => void;
};

export const usePrevNextButtons = (
  emblaApi: EmblaCarouselType | undefined
): UsePrevNextButtonsType => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect).on("select", onSelect);
  }, [emblaApi, onSelect]);

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  };
};

type PropType = PropsWithChildren<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
>;

export const PrevButton: React.FC<PropType> = (props) => {
  const { children, ...restProps } = props;

  return (
    <button
      className="embla__button embla__button--prev"
      type="button"
      {...restProps}
    >
      <svg
        width="17"
        height="16"
        viewBox="0 0 17 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.626101 7.08C0.235577 7.47053 0.235577 8.10369 0.626101 8.49422L6.99006 14.8582C7.38059 15.2487 8.01375 15.2487 8.40428 14.8582C8.7948 14.4677 8.7948 13.8345 8.40428 13.444L2.74742 7.78711L8.40428 2.13025C8.7948 1.73973 8.7948 1.10656 8.40428 0.71604C8.01375 0.325515 7.38059 0.325515 6.99006 0.71604L0.626101 7.08ZM16.6055 6.78711L1.33321 6.78711V8.78711L16.6055 8.78711V6.78711Z"
          fill="#434343"
        />
      </svg>

      {children}
    </button>
  );
};

export const NextButton: React.FC<PropType> = (props) => {
  const { children, ...restProps } = props;

  return (
    <button
      className="embla__button embla__button--next"
      type="button"
      {...restProps}
    >
      <svg
        width="17"
        height="16"
        viewBox="0 0 17 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.3719 8.91804C16.7625 8.52752 16.7625 7.89435 16.3719 7.50383L10.008 1.13987C9.61746 0.749344 8.98429 0.749344 8.59377 1.13987C8.20324 1.53039 8.20324 2.16356 8.59377 2.55408L14.2506 8.21094L8.59377 13.8678C8.20324 14.2583 8.20324 14.8915 8.59377 15.282C8.98429 15.6725 9.61746 15.6725 10.008 15.282L16.3719 8.91804ZM0.392578 9.21094H15.6648V7.21094H0.392578V9.21094Z"
          fill="#434343"
        />
      </svg>

      {children}
    </button>
  );
};
