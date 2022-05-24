import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Button from "../../../components/Button";
import MainBoardList from "../MainBoardList";

describe("ClubikiMainPage needs", () => {
  // 1. 버튼이 들어있어야 한다.
  it("buttons", () => {
    render(<Button btnName={"게시물 업로드"} />);
    const uploadBtn = screen.getByRole("button", {
      name: "게시물 업로드",
    });

    expect(uploadBtn).toBeInTheDocument();
  });
});

// MainBoardList 내부에는 'MT'와 '활동'이라는 이름을 가진 게시판이 들어있어야 한다.
describe("MainboardList has two things", () => {
  it("MT & 활동", () => {
    render(
      <MainBoardList
        clubList={[
          {
            wikiBoardId: 4,
            wikiName: "활동",
          },
          {
            wikiBoardId: 5,
            wikiName: "MT",
          },
        ]}
      />
    );

    const name1 = screen.getByText("MT");
    const name2 = screen.getByText("활동");

    expect(name1).toBeInTheDocument();
    expect(name2).toBeInTheDocument();
  });
});
