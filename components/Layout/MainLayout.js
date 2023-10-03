import { useMemo } from "react";

import Background from "components/Layout/Background";
import Content from "components/Layout/Content";
import Footer from "components/Layout/Footer";
import Header from "components/Layout/Header";
import Navbar from "components/Layout/Navbar";
import { ClassCombiner } from "utils";

const BLOB_NUMBER_MINIMAL = 6;
const BLOB_NUMBER_DEFAULT = 24;
const MainLayout = ({ children, className = "", bgMinimal = false }) => {
  const BackgroundRender = useMemo(
    () => (
      <Background
        shape="blob"
        number={bgMinimal ? BLOB_NUMBER_MINIMAL : BLOB_NUMBER_DEFAULT}
      />
    ),
    [bgMinimal]
  );
  return (
    <div
      className={ClassCombiner(
        "bg-primary text-white flex flex-col min-h-screen h-auto relative",
        className
      )}
    >
      {BackgroundRender}
      <Header />
      <Navbar />
      <Content className="z-50">{children}</Content>
      <Footer />
    </div>
  );
};

export default MainLayout;
