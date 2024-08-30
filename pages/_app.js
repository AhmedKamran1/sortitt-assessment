import React from "react";

// Styles
import { ThemeContextProvider } from "@/context/theme-provider";
import "@/styles/globals.css";

// Layout
import Layout from "@/components/layout/layout";

export default function App({ Component, pageProps }) {
  return (
    <ThemeContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeContextProvider>
  );
}
