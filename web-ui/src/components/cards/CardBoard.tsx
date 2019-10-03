import React from 'react';
import Card from "./Card";
import Container from "../utils/Container";
import {Trick} from "../../pages/MainGame/types";
import cards, {CardValue} from "../../assets/cards";

type Props = Trick;

const CardBoard = ({top, left, right, bottom}: Props) => {
  return (
    <Container direction="column">
      <Card
          // @ts-ignore
          src={top ? cards[top] : cards[CardValue.card_placeholder]}
          rotationDegrees={180}
          disableHoverTransformation
      />
      <Container direction="row" justifyContent="space-between">
        <Card
            // @ts-ignore
            src={left ? cards[left] : cards[CardValue.card_placeholder]}
            rotationDegrees={90}
            disableHoverTransformation
        />
        <Card
            // @ts-ignore
            src={right ? cards[right] : cards[CardValue.card_placeholder]}
            rotationDegrees={-90}
            disableHoverTransformation
        />
      </Container>
      <Card
          // @ts-ignore
          src={bottom ? cards[bottom] : cards[CardValue.card_placeholder]}
          rotationDegrees={0}
          disableHoverTransformation
      />
    </Container>
  );
};

export default CardBoard;
