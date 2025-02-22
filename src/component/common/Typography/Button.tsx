import { memo, ReactNode } from "react";
import styled from "styled-components";

const ButtonContainer = styled.button<{ background?: string; disabled?: boolean; hoverbackground?: string }>(
  ({ background, disabled, hoverbackground }) => ({
    border: "none",
    padding: "16px 24px",
    background: disabled ? "#D3D3D3" : background,
    borderRadius: "40px",
    minWidth: "120px",
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: disabled ? "not-allowed" : "pointer",
    ...(hoverbackground && {
      "&:hover": {
        background: hoverbackground,
        boxShadow: "0 0 8px rgba(255, 255, 255, 0.2)",
        outline: "2px solid rgba(255, 255, 255, 0.3)",
      },
    }),
    "@media (max-width: 524px)": {
      borderRadius: "36px",
      padding: "12px 20px",
    },
  }),
);

export interface IButton {
  children?: ReactNode;
  background?: string;
  hoverbackground?: string;
  disabled?: boolean;
  onClick?: VoidFunction;
}

const Button = (props: IButton) => {
  return (
    <ButtonContainer onClick={props.onClick} disabled={props.disabled} background={props.background} hoverbackground={props.hoverbackground}>
      <>{props.children}</>
    </ButtonContainer>
  );
};
export default memo(Button);
