import Head from "next/head";

import ChangeCategory from "../components/ChangeCategory";
import Navbar from "../components/Navbar";

export default function Lagerbestand() {
  return (
    <>
      <Head>
        <title>Lagerbestand - Jaklhof Logistics</title>
      </Head>
      <Navbar />
      <div className="container">
        <ChangeCategory />
      </div>
    </>
  );
}
