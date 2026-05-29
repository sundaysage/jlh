import "@/styles/globals.css";
import Layout from "../../component/Layout";
import Nav from "../../component/Nav";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />;
    </Layout>
  );
}
