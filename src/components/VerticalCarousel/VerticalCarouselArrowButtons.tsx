import React from "react";
import { Button } from "./VerticalCarousel.styles";

type PropType = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export const PrevButton: React.FC<PropType> = (props) => {
  const { children, ...restProps } = props;

  return (
    <Button
      className="embla__button embla__button--prev"
      type="button"
      {...restProps}
    >
      <svg
        width="23"
        height="30"
        viewBox="0 0 23 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.6307 1.31485C12.0449 0.729067 11.0951 0.729067 10.5093 1.31485L0.963406 10.8608C0.377619 11.4466 0.377619 12.3963 0.963406 12.9821C1.54919 13.5679 2.49894 13.5679 3.08473 12.9821L11.57 4.49683L20.0553 12.9821C20.6411 13.5679 21.5908 13.5679 22.1766 12.9821C22.7624 12.3963 22.7624 11.4466 22.1766 10.8608L12.6307 1.31485ZM13.07 29.577L13.07 2.37551H10.07L10.07 29.577H13.07Z"
          fill="#434343"
        />
      </svg>

      {children}
    </Button>
  );
};

export const NextButton: React.FC<PropType> = (props) => {
  const { children, ...restProps } = props;

  return (
    <Button
      className="embla__button embla__button--next"
      type="button"
      {...restProps}
    >
      <svg
        width="23"
        height="29"
        viewBox="0 0 23 29"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.0314 28.2614C10.6172 28.8472 11.5669 28.8472 12.1527 28.2614L21.6986 18.7155C22.2844 18.1297 22.2844 17.18 21.6986 16.5942C21.1129 16.0084 20.1631 16.0084 19.5773 16.5942L11.092 25.0795L2.60676 16.5942C2.02097 16.0084 1.07123 16.0084 0.485439 16.5942C-0.100347 17.18 -0.100347 18.1297 0.485439 18.7155L10.0314 28.2614ZM9.59204 -0.000732422L9.59204 27.2008H12.592L12.592 -0.000732422L9.59204 -0.000732422Z"
          fill="#434343"
        />
      </svg>

      {children}
    </Button>
  );
};
