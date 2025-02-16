"use client";
import StyledComponentsRegistry from "../lib/registry";
import "../global.css";
import Layout from "../component/Layout/Layout";
import { Roboto } from "next/font/google";
import QuizContext from "../context/quizContext";
import { useReducer } from "react";
import { initialState } from "../context";
import { QuizReducer } from "../context/quizReducer";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-roboto",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(QuizReducer, initialState);

  return (
    <html>
      <body className={roboto.className}>
        <StyledComponentsRegistry>
          <Layout>
            <QuizContext.Provider value={{ state, dispatch }}>{children}</QuizContext.Provider>
          </Layout>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
