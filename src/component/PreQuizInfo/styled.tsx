import styled from "styled-components";
import ButtonText from "../common/Typography/ButtonText";

export const PreQuizContainer = styled.div({
  display: "flex",
  gap: "32px",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minWidth: "288px",
  minHeight: "400px",
  border: "1px solid white",
  padding: "16px",
  marginBottom: "24px",

  "@media (max-width: 768px)": {
    margin: "16px",
    marginBottom: "24px",
  },
});

export const PreQuizDescriptionContainer = styled.div({
  display: "flex",
  gap: "8px",
  flexDirection: "column",
  textAlign: "justify",
  flexGrow: 1,
});

export const PreQuizConsentContainer = styled.div({
  display: "flex",
  gap: "8px",
  textAlign: "justify",
  width: "100%",
  cursor: "pointer",
});

export const PreQuizConsentTermsText = styled(ButtonText)({
  cursor: "pointer",
});
