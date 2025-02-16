import React, { ReactNode } from "react";
import { LayoutContainer } from "./styled";

export interface ILayout {
  children: ReactNode;
}

const Layout = ({ children }: ILayout) => {
  return <LayoutContainer>{children}</LayoutContainer>;
};

export default Layout;
