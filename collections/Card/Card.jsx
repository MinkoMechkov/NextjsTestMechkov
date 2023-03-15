import React from "react";

import {
  StyledCard,
  StyledCardContentContainer,
  StyledIconContainer,
  StyledInnerTitle,
  StyledParagraph,
} from "./elements";

// The Card to be exported goes here
export const Card = ({ ...props }) => {
  return (
    <StyledCard {...props} >
      <StyledCardContentContainer>
        <StyledInnerTitle></StyledInnerTitle>
        <StyledParagraph></StyledParagraph>
      </StyledCardContentContainer>
      <StyledIconContainer></StyledIconContainer>
    </StyledCard>
  );
};
