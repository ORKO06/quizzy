import React from "react";
import Header2 from "../Typography/Header2";
import Header3 from "../Typography/Header3";
import { LoaderWrapper, Spinner } from "./styled";

const Loader = () => {
  return (
    <LoaderWrapper>
      <Spinner />
      <Header2>Loading...</Header2>
      <Header3 color='#757575'>Please wait while we prepare your quiz</Header3>
    </LoaderWrapper>
  );
};

export default Loader;
