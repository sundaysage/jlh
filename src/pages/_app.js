import { serverSideTranslations } from "next-i18next/pages/serverSideTranslations";

import "@/styles/globals.css";
import { appWithTranslation } from "next-i18next/pages";
import Layout from "../../component/Layout";
// Importing the hook and banner (Make sure you've created these files in these paths!)
import { useLanguageBanner } from "../hooks/useLanguageBanner";
import LanguageBanner from "../components/layout/LanguageBanner";

function App({ Component, pageProps }) {
  const { showBanner, accept, dismiss } = useLanguageBanner();

  return (
    <>
      <LanguageBanner
        show={showBanner}
        onAccept={accept}
        onDismiss={dismiss}
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default appWithTranslation(App);
export async function getStaticProps({ locale }) {
  return { props: { ...(await serverSideTranslations(locale, ["common"])) } };
}