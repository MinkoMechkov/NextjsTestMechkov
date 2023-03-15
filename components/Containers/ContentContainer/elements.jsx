import styled from "styled-components";

export const StyledContentContainer = styled(({ ...props }) => (
  <div {...props} />
))`
  display: flex;
  gap: 70px;
  max-width: 1920px;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: auto;
  margin-top: 40px;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;
