import styled from "styled-components";

export const StyledUpdateProductForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 14px;

 

  form {
    margin-top: 0px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color: var(--color-gray-400);
    border-radius: 4px;
    padding-top: 0;

    h3 {
      margin-top: 10px;
      align-self: center;
      color: var(--color-gray-900);
      font-size: 20px;
      color: var(--color-gray-900);
      font-size: 20px;
    }
    span{
      margin-top: 10px;
      color: var(--color-gray-900);
      font-size: 20px;
    }

    label {
      color: var(--color-gray-900);
      font-size: 0.7rem;
      margin: 10px 0;
      font-size: 15px;
    }

    input {
      width: 100%;
      background-color: var(--color-gray-400);
      color: var(--color-gray-700);
      border-radius: 4px;
      height: 40px;
      padding: 0 10px;
      font-size: 15px;
    }

    input::placeholder {
      color: var(--color-gray-600);
      font-size: 15px;
    }

    div {
      display: flex;
      width: 100%;
      align-items: center;
      border-radius: 4px;
      padding: 0;
      justify-content: space-between;

      span {
        cursor: pointer;
      }
    }

    .btnForm {
      width: 100%;
      background-color: #ff8d07;
      border-radius: 4px;
      color: white;
      margin-top: 10px;
      height: 40px;
      text-align: center;
      font-size: 15px;
    }
    p{
      color: red;
      font-size: 12px;
    }
  }

  @media (min-width: 500px) {
    form {
      max-width: 400px;
    }
  }
`;
