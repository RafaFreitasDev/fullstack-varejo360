import styled from "styled-components";

export const StyledSearchInput = styled.div`
  input {
    margin-top: 10px;
    padding: 5px;
    border: 2px solid var(--color-gray-400);
    border-radius: 6px;
    font-size: 16px;
  }

  input::placeholder {
    padding: 5px;
    font-size: 16px;
  }
`;
