"use client";
import React from "react";
import { useRouter } from "next/navigation";
import styled from "styled-components";

export const BackContainer = styled.div({
  marginBottom: "16px",
  color: "#fff",
  padding: "4px",
  fontSize: "16px",
  width: "max-content",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const Back = (props: { text: string }) => {
  const router = useRouter();
  const handleBackClick = () => {
    router.push("/");
  };

  return <BackContainer onClick={handleBackClick}>{props.text}</BackContainer>;
};

export default Back;
