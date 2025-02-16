import styled, { css, keyframes } from "styled-components";

const spin = keyframes({
  "0%": { transform: "rotate(0deg)" },
  "100%": { transform: "rotate(360deg)" },
});

export const LoaderWrapper = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  backgroundColor: "rgba(0, 0, 0, 0.05)",
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  zIndex: 1000,
});

export const Spinner = styled.div(
  () => css`
  border: 6px solid #f3f3f3,
  border-top: 6px solid rgb(253, 254, 255),
  border-radius: 50%,
  width: 50px,
  height: 50px,
  animation: ${spin} 1s linear infinite,
  marginBottom: 20px,`,
);
