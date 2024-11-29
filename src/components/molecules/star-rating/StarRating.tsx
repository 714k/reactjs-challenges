import React from 'react';
import styled from 'styled-components';
import './StarRating.css';

interface StarRatingI {
  size: number;
  ratingText: string;
  numberOfStars: number;
}

type StarsContainerProps = {
  'data-size': number;
  'data-number-of-stars': number;
};

const Stars = styled('div')<StarsContainerProps>`
  position: relative;
  height: ${(props) => props['data-size']}px;
  width: calc(
    ${(props) => props['data-size'] * props['data-number-of-stars']}px
  );
  background-image: var(--unchecked-image);
  background-size: ${(props) => props['data-size']}px
    ${(props) => props['data-size']}px;

  label {
    position: absolute;
    height: 100%;
    background-size: ${(props) => props['data-size']}px
      ${(props) => props['data-size']}px;
  }
`;

type LabelProps = {
  'data-index': number;
  'data-number-of-stars': number;
};

const Label = styled('label')<LabelProps>`
  &:nth-child(${(props) => props['data-index']}) {
    z-index: 7;
    width: calc(
      100% / ${(props) => props['data-number-of-stars'] * props['data-index']}
    );
  }
`;

type InputProps = { 'data-index': number; 'data-number-of-stars': number };

const Input = styled('input')<InputProps>`
  width: calc(
    100% / ${(props) => props['data-number-of-stars'] * props['data-index']}
  );
`;

export default function StarRating({
  ratingText = 'Rating',
  numberOfStars = 5,
  size = 30,
}: StarRatingI) {
  const stars = [...Array(numberOfStars).keys()];

  return (
    <fieldset className="star-rating">
      <legend>{ratingText}:</legend>
      <Stars data-size={size} data-number-of-stars={numberOfStars}>
        {stars.map((star) => {
          const starIndex = star + 1;
          const id = `rating${starIndex}`;

          return (
            <Label
              key={id}
              htmlFor={id}
              data-index={starIndex}
              data-number-of-stars={numberOfStars}
            >
              <input
                type="radio"
                name="rating"
                value={starIndex}
                id={id}
                data-index={starIndex}
                data-number-of-stars={numberOfStars}
              />
              <span>{starIndex}</span>
            </Label>
          );
        })}
      </Stars>
    </fieldset>
  );
}
