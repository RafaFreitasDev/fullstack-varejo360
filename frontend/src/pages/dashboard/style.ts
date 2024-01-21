import styled from "styled-components";

export const StyledDashboard = styled.div`
  width: 100vw;
  max-width: 460px;
  height: 100vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

  .darkMode{
    display: flex;
    align-items: center;
    h4{
      font-size: 12px;
    }
  }

  .perfil {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 20px;

    h3 {
      font-size: 18px;
    }
    h4 {
      font-size: 14px;
    }

    button {
      border-radius: 8px;
      height: 30px;
      padding: 5px;
      background-color: var(--color-blue-300);
      color: var(--color-gray-200);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 16px;
    }
    button:hover {
      background-color: var(--color-blue-900);
    }
  }

  .titles {
    display: flex;
    text-align: center;
    max-width: 100%;
    border: 1px solid var(--color-gray-400);
    background-color: var(--color-gray-300);
    div {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      text-align: center;
      font-size: 15px;
      color: var(--color-gray-900);
      border: 2px solid var(--color-gray-400);
      align-items: center;
      position: relative;
      cursor: pointer;

      span {
        position: absolute;
        right: 5px;
        top: 8px;
        z-index: 5;
      }
      span:hover {
        color: var(--color-blue-400);
      }
    }
    .action {
      width: 100px;
      padding: 5px;
    }
  }

  .code:hover{
    background-color: var(--color-gray-400);
  }

  .name:hover{
    background-color: var(--color-gray-400);
  }

  h1{
    font-size: 18px;
  }

  ul {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 20px;
  }

  .btnList {
    display: flex;
    min-width: 80px;
    justify-content: space-between;
    button {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid var(--color-gray-400);
      color: var(--color-gray-700);
    }
    button:hover {
      color: var(--color-blue-700);
      border: 1px solid var(--color-blue-700);
    }
  }
`;
