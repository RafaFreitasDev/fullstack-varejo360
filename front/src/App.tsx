import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { RoutesMain } from "./routes";
import GlobalStyle from "./styles/GlobalStyle";
import { ResetStyle } from "./styles/reset";

export const App = () => {
  return (
    <>
      <ResetStyle />
      <GlobalStyle />
      <RoutesMain />
      <ToastContainer
        position="top-right"
        autoClose={500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};
