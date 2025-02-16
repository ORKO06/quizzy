"use client";
import styled from "styled-components";

export default styled.h1<{ color?: string }>(({ color }) => ({
  lineHeight: "140%",
  fontWeight: "700",
  color: color || "#fff",
  textAlign: "justify",
  fontSize: "48px",

  "@media (min-width: 768px)": {
    fontSize: "64px",
  },

  "@media (min-width: 1024px)": {
    fontSize: "84px",
  },
}));
