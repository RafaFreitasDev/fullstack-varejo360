import styled from "styled-components";

export const StyledCreateProductForm = styled.div`
  width: 100%;
  padding: 20px;
  h3 {
    font-size: 16px;
  }
  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    z-index: 5;
    section {
      width: 100%;
      display: flex;
      justify-content: space-between;

      div {
        display: flex;
        flex-direction: column;
        label {
          font-size: 14px;
        }
        input {
          font-size: 16px;
          width: 100%;
          padding: 5px;
          border: 2px solid var(--color-gray-400);
          border-radius: 6px;
        }
        input::placeholder {
          font-size: 16px;
          padding: 5px;
        }
      }
    }
    button {
      font-size: 18px;
      margin-top: 10px;
      height: 30px;
      background-color: var(--color-blue-300);
      color: var(--color-gray-100);
    }
    button:hover {
      background-color: var(--color-blue-900);
    }
    p {
      font-size: 12px;
      color: red;
    }
  }
`;
