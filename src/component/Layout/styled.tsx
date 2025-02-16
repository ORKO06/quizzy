"use client";
import styled from "styled-components";

export const LayoutContainer = styled.div({
  padding: "16px",
  background: "#151515",
  fontFamily: "serif",
  minWidth: "100vw",
  minHeight: "100vh",

  "@media (max-width: 768px)": {
    padding: "16px",
  },
});
