"use client";
import styled from "styled-components";

export default styled.h3<{ color?: string }>(({ color }) => ({
  lineHeight: "24px",
  letterSpacing: "2%",
  color: color || "#fff",
  fontSize: "16px",

  "@media (min-width: 768px)": {
    fontSize: "18px",
  },

  "@media (min-width: 1024px)": {
    fontSize: "20px",
  },
}));
