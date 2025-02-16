import styled from "styled-components";

export default styled.p<{ color?: string }>(({ color }) => ({
  lineHeight: "160%",
  color: color || "#fff",
  fontSize: "14px",

  "@media (min-width: 768px)": {
    fontSize: "16px",
  },

  "@media (min-width: 1024px)": {
    fontSize: "18px",
  },
}));
