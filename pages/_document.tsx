import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="fi">
      <Head />

      <meta
        name="description"
        content="Kantoapu Kuopio tarjoaa laadukasta ja huolellista muuttopalvelua Kuopiosta käsin koko suomeen. Muuttojen lisäksi tarjoamme kierrätys- ja laatikoiden vuokrauspalveluita."
      />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
