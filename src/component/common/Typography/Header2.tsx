"use client";
import styled from "styled-components";

export default styled.h2<{ color?: string }>(({ color }) => ({
  lineHeight: "140%",
  fontWeight: "400",
  letterSpacing: "2%",
  color: color || "#fff",
  fontSize: "32px",

  "@media (min-width: 768px)": {
    fontSize: "40px",
  },

  "@media (min-width: 1024px)": {
    fontSize: "48px",
  },
}));
