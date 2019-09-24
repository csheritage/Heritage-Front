import React from "react";
import { render, RenderResult } from "@testing-library/react";
import Footer from "./index";
import GlobalThemeProvider from "../../Components/GlobalTheme";

describe("<Footer />", () => {
  it("shows the props correctly", () => {
    let utils: RenderResult = render(
      <GlobalThemeProvider>
        <Footer></Footer>
      </GlobalThemeProvider>
    );
    utils.getByText("무단 배포를 엄금합니다."); // 무단배포를 엄금합니다 라는 텍스트를 가진 엘리먼트가 있는지 확인
  });
});
