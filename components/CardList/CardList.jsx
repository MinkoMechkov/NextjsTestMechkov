import {
  StyledInnerTitle,
  StyledParagraph,
  StyledIconContainer,
  StyledCard,
  StyledCardContentContainer,
} from "../../collections/Card/elements";

export const CardList = (props) => {
  return props.cardItems.map((item) => (
    <StyledCard key={item.id} width={item.width}>
      <StyledIconContainer>
        <img
          src={item.iconImg.src}
          alt={item.iconImg.alt}
          height={item.iconImg.height}
          width={item.iconImg.width}
        />
      </StyledIconContainer>
      <StyledCardContentContainer>
        <StyledInnerTitle>{item.title}</StyledInnerTitle>
        <StyledParagraph>{item.description}</StyledParagraph>
      </StyledCardContentContainer>
    </StyledCard>
  ));
};
