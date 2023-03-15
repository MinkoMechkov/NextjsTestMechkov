import {
  StyledContainer,
  StyledTitle,
  StyledDescription,
  StyledTextContainer,
  StyledContentContainer,
  StyledImageContainer,
} from "./elements";

import { CardList } from "../../components/CardList/CardList";
import { StyledCardContainer } from "../../components/Containers/CardContainer/elements";

export const Agency = ({
  image,
  title,
  description,
  pTitle,
  cardDescription,
  iconImg,
  cardItems,
  ...props
}) => {
  return (
    <StyledContainer {...props}>
      <StyledTextContainer>
        <StyledTitle>{title}</StyledTitle>
        <StyledDescription>{description}</StyledDescription>
      </StyledTextContainer>
      <StyledContentContainer>
        <StyledImageContainer>
          <img
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
          />
        </StyledImageContainer>
        <StyledCardContainer>
          <CardList cardItems={cardItems} />
        </StyledCardContainer>
      </StyledContentContainer>
    </StyledContainer>
  );
};
