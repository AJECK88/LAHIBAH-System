import Head from "next/head";
export default function MetaHead(
) {
  return (
    <Head>
    <meta property="og:image" content="/Lahiba.png" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
   </Head>
  );
}