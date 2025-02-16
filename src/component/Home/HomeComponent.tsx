import React from "react";

// styled components
import { ButtonContainer, HomeContainer, HomeContentContainer, HomeDescription, HomeTitle, Seperator } from "./styled";
import Button from "../common/Typography/Button";

// typograpgy
import Header2 from "../common/Typography/Header2";
import ButtonText from "../common/Typography/ButtonText";

export interface IHomeComponentProps {
  title?: boolean;
  preTitle?: boolean;
  description?: boolean;
  primaryCtaText?: boolean;
  secondaryCtaText?: boolean;
  onPrimaryCtaClick?: VoidFunction;
  onSecondaryCtaClick?: VoidFunction;
}

const HomeComponent = ({
  title,
  preTitle,
  description,
  primaryCtaText,
  secondaryCtaText,
  onPrimaryCtaClick,
  onSecondaryCtaClick,
}: IHomeComponentProps) => {
  return (
    <HomeContainer>
      <HomeContentContainer>
        <Header2>{preTitle || "Unlock Knowledge with"}</Header2>
        <HomeTitle>{title || "Quizzy"}</HomeTitle>
        <Seperator />
        <HomeDescription color='#a6aab2'>
          {description ||
            "Where Every Question Unveils a World of Wisdom, Sparking the Flames of Learning and Illuminating the Path to Intellectual Brilliance!"}
        </HomeDescription>
      </HomeContentContainer>
      <ButtonContainer>
        <Button background={"linear-gradient(90deg, #F09FFD 0%, #1494F1 100%)"} onClick={onPrimaryCtaClick}>
          <ButtonText fontWeight='bold'>{primaryCtaText || "Start"}</ButtonText>
        </Button>
        <Button background={"linear-gradient(90deg, #F09FFD 0%, #1494F1 100%)"} onClick={onSecondaryCtaClick}>
          <ButtonText fontWeight='bold'>{secondaryCtaText || "Past Result"}</ButtonText>
        </Button>
      </ButtonContainer>
    </HomeContainer>
  );
};

export default HomeComponent;
