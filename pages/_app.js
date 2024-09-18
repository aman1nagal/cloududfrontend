import "../styles/globals.css";
import { Provider } from "react-redux";
import { store } from "../stores";
import Sidebar from "../Components/Sidebar/Sidebar";
import Layout from "../Components/Layout";
import { BrowserRouter } from "react-router-dom";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      {/* <BrowserRouter> */}
      <Layout>
        <Component {...pageProps} />
      </Layout>
      {/* </BrowserRouter> */}
    </Provider>
  );
}

export default MyApp;


