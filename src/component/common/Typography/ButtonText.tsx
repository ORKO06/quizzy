"use client";
import styled from "styled-components";

export default styled.p<{ color?: string; fontWeight?: string }>(({ color, fontWeight }) => ({
  fontSize: "18px",
  lineHeight: "24px",
  fontWeight: fontWeight,
  color: color || "#fff",
}));
