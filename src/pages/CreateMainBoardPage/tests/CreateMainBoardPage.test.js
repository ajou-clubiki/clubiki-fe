import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import CreateMainBoardForm from "../CreateMainBoardForm";

// 게시판을 개설했을 때 양식이 전부 존재하는 지 확인한다.
describe("does form has everything that we need", () => {
  it("about the form of main board", () => {
    render(
      <BrowserRouter>
        <CreateMainBoardForm />
      </BrowserRouter>
    );

    const mainBoardTitle = screen.getByLabelText("게시판 제목:");
    expect(mainBoardTitle).toBeInTheDocument();

    const mainBoardIntro = screen.getByLabelText("게시판 소개:");
    expect(mainBoardIntro).toBeInTheDocument();

    const isLocked = screen.getByLabelText("게시판 잠금 여부:");
    expect(isLocked).toBeInTheDocument();

    const isLockedCheckbox = screen.getByRole("checkbox");
    expect(isLockedCheckbox).toBeInTheDocument();

    const category = screen.getByLabelText("카테고리:");
    expect(category).toBeInTheDocument();

    const categorySelect = screen.getByTestId("select-option");
    expect(categorySelect).toBeInTheDocument();

    const cpAnnounce = screen.getByText("회장의 말씀:");
    expect(cpAnnounce).toBeInTheDocument();

    const checkLock = screen.getByRole("checkbox");
    expect(checkLock).toBeInTheDocument();

    const inputLength = screen.getAllByRole("textbox");
    expect(inputLength).toHaveLength(3);

    const textAreaLength = screen.getAllByRole("textbox");
    expect(textAreaLength).toHaveLength(3);
  });
});

// 데이터를 보낸 직후, 데이터에 제대로 도작하는 지 확인해본다.
