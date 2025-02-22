"use client";
import { styled } from "styled-components";
import Header1 from "../common/Typography/Header1";
import Header3 from "../common/Typography/Header3";

export const HomeContainer = styled.div({
  display: "flex",
  gap: "32px",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

export const HomeContentContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  maxWidth: "600px",

  "@media (max-width: 768px)": {
    textAlign: "center",
    gap: "8px",
  },
});

export const HomeTitle = styled(Header1)({
  background: "linear-gradient(90deg, #F09FFD 36%, #1494F1 100%)",
  "-webkit-background-clip": "text",
  "-webkit-text-fill-color": "transparent",
});

export const HomeDescription = styled(Header3)({
  textAlign: "center",
});

export const Seperator = styled.div({
  width: "80%",
  maxWidth: "420px",
  border: "1px solid white",
  height: "2px",
  margin: "32px 0",
  "@media (max-width: 768px)": {
    margin: "16px 0",
  },
});

export const ButtonContainer = styled.div({
  width: "100%",
  display: "flex",
  gap: "32px",
  justifyContent: "space-evenly",
});
