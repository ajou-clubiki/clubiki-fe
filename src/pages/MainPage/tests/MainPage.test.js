import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import MainNavigation from "../MainNavigation";
import ClubList from "../ClubList";
import ClubDetail from "../ClubDetail";
import ClubInfoPageModal from "../../ClubInfoPage/ClubInfoPageModal";
import { BrowserRouter } from "react-router-dom";

// 1. 메인 페이지의 네비게이션에 텍스트가 존재해야 한다.
describe("main-navigation", () => {
  it("show every texts normally", () => {
    render(<MainNavigation />);

    // 1-1. 메인 페이지 네비게이션의 타이틀
    const mainPageTitle = screen.getByRole("heading", {
      name: "CLUBIKI",
    });
    expect(mainPageTitle).toBeInTheDocument();

    // 1-2. 메인 페이지 네비게이션의 보조 타이틀
    const mainPageSubtitle = screen.getByRole("heading", {
      name: "동아리의 모든 것,",
    });
    expect(mainPageSubtitle).toBeInTheDocument();
  });
});

// 2. 동아리와 관련된 데이터가 전부 완전하게 도착해야 하고, 완전하게 랜더링되어 있어야 한다.
describe("data about club-list", () => {
  it("arrived and rendered it perfectly", async () => {
    render(<ClubList />);
    // 2-1. 데이터를 불러온 뒤에는 해당 데이터가 랜더링 되어 있어야 한다.
    const completeClubTitle = await screen.findByRole("heading", {
      name: "동아리 목록",
    });
    // 2-1-1. 먼저 동아리 목록의 타이틀이 들어있는 지 확인한다.
    expect(completeClubTitle).toBeInTheDocument();
  });
});

// 3. 그 다음에는 제대로 description이 출력되는 지 확인한다.
describe("club item's info", () => {
  it("rendered perfectly", () => {
    render(<ClubDetail describe="동아리" />);

    const text = screen.getByText("동아리");
    expect(text).toBeInTheDocument();
  });
});

// 4. 동아리 정보란을 클릭했을 때, 모달창이 나타나야 한다.
describe("modal should appear", () => {
  it("when clicked club info", async () => {
    render(
      <BrowserRouter>
        <ClubInfoPageModal name={"동아리 정보"} />
      </BrowserRouter>
    );
    const list = await screen.findByRole("heading", {
      name: "동아리 정보",
    });
    expect(list).toBeInTheDocument();

    // 동아리 사진이 들어있어야 한다.
  });
});
