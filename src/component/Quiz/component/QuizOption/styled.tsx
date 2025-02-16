import styled from "styled-components";

export const QuizOptionContainer = styled.div<{ bgcolor?: string; selected?: boolean; submitted?: boolean }>(({ bgcolor, selected, submitted }) => ({
  width: "100%",
  background: bgcolor || "",
  padding: "8px 16px",
  borderRadius: "16px",
  ...(selected && {
    boxShadow: "0 0 5px rgba(231, 231, 231, 0.5)",
  }),
  ...(!submitted && {
    cursor: "pointer",
  }),
}));

export const HeaderElement = styled.div({
  display: "flex",
  justifyContent: "space-between",
  padding: "8px 16px",
  alignItems: "center",
});

export const BottomContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  gap: "24px",
  justifyContent: "space-between",
  padding: "8px 16px",
  alignItems: "center",
});

export const ButtonContainer = styled.div({
  display: "flex",
  width: "100%",
  flexDirection: "row",
  gap: "32px",
  justifyContent: "space-between",
  alignItems: "center",

  "@media (min-width: 768px)": {
    flexDirection: "row",
  },
});
