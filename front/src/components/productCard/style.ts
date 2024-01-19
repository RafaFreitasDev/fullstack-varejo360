import styled from "styled-components";

export const StyledProductCard = styled.li`
  display: flex;
  text-align: center;
  max-width: 100%;
  background-color: var(--color-gray-200);
  border: 1.5px solid var(--color-gray-400);

  div {
    width: 100%;
    text-align: center;
  }
  .info {
    display: flex;
    align-items: center;
    div {
      font-size: 14px;
      color: var(--color-gray-900);
      border-left: 1px solid var(--color-gray-400);
      align-items: center;
    }
  }

  .btn {
    width: 62px;
    justify-content: space-around;
    display: flex;
  
    div{
      display: flex;
      align-items: center;
      justify-content: center;
      border-left: 1px solid var(--color-gray-400);
    }
    button {
      width: 100%;
      height: 100%;
      background-color: var(--color-gray-200);
      display: flex;
      align-items: center;
      justify-content: center;
      
    }
    div:hover {
      background-color: var(--color-blue-300);
    }
    button:hover{
      background-color: var(--color-blue-300);
    }
  }

  
`;
