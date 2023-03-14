import styled from "styled-components";

export const StyledContentContainer = styled(({ ...props }) => (
  <div {...props} />
))`
  display: flex;
  gap: 30px;
  max-width: 1920px;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: auto;
`;
