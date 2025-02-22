"use client";
import React, { ReactNode, useCallback, useEffect, useState } from "react";
import { LayoutContainer } from "./styled";
import { useRouter } from "next/navigation";

export interface ILayout {
  children: ReactNode;
}

const Layout = ({ children }: ILayout) => {
  return <LayoutContainer>{children}</LayoutContainer>;
};

export default Layout;
