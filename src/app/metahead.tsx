import Head from "next/head";

export default function MetaHead() {
  return (
    <Head>
      <meta property="og:type" content="website" />
      <meta property="og:title" content="LAHIBA SCHOOL MANAGEMENT SYSTEM" />
      <meta
        property="og:image"
        content="http://lahibah-system.vercel.app/image/Lahiba.png"
      />  <meta
        property="og:description"
        content="Lahibah System is an all-in-one platform designed to streamline and enhance the management of educational institutions. It offers a comprehensive suite of tools and features that cater to the needs of administrators, teachers, students, and parents alike."
      />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
    </Head>
  );
}
