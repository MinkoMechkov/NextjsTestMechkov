// Styled elements for the Card go here
import styled from "styled-components";
import { SectionParagraph, SectionInnerHeading } from "~/components";

export const StyledInnerTitle = styled((props) => (
  <SectionInnerHeading {...props} />
))`
  font-size: 1.2rem;
  font-weight: 700;
  margin: 0;
`;

export const StyledParagraph = styled((props) => (
  <SectionParagraph {...props} />
))`
  margin: 0;
  p {
    margin: 5px 0;
  }
`;

export const StyledIconContainer = styled(({ ...props }) => <div {...props} />)`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 4rem;
  width: 100%;
  height: 100%;
  padding: 0 20px;
`;

export const StyledCardContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  justify-content: center;
`;

export const StyledCard = styled(({ ...props }) => <div {...props} />)`
  display: flex;
  gap: 10px;
  background-color: #f0f0f0;
  border-radius: 0.5rem;
  height: 150px;
  width: ${(props) => (props.width ? props.width : "400px")};

  &:hover {
    border: 3px solid #1f7efb;
  }

  &:hover ${StyledInnerTitle} {
    color: #1f7efb;
    text-decoration: underline;
  }
`;
