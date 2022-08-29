import Head from "next/head";
import A from "../components/A";

const MainContainer = ({ children, keywords }) => {
  return (
    <>
      <Head>
        <meta name="keywords" content={"Nikita, NextJS," + keywords} />
        <title>Next fast course</title>
      </Head>

      <nav className="nav">
        <A href="/" text="Main" />
        <A href="/users" text="Users" />
      </nav>
      <div>{children}</div>
      <style jsx>
        {`
          .nav {
            width: 100%;
            background: #0ae4c7;
            padding: 10px;
          }
        `}
      </style>
    </>
  );
};

export default MainContainer;
