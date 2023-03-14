// Styled elements for the Card go here
import styled from "styled-components";
import { Card } from "./Card";

export const StyledCard = styled(({ ...props }) => <Card {...props} />)`
  background-color: gray;
`;
