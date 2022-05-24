import { render, screen } from "@testing-library/react";
import ClubInfoPageModal from "../../ClubInfoPage/ClubInfoPageModal";
import ClubInfoDetailContents from "../ClubInfoDetailContents";
import Button from "../../../components/Button";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import "@testing-library/react";
import "@testing-library/user-event";

// 모달을 클릭했을 경우 사라져야 한다.
// describe("modal should be disappeared", () => {
//   it("when clicked if modal appeared", async () => {
//     const { container } = render(<ClubInfoPageModal />);

//     const testModal = screen.getByTestId("club-info-modal");
//     fireEvent.click(testModal);

//     await waitFor(() => {
//       // eslint-disable-next-line no-unused-expressions
//       expect(testModal).toBeEmptyDOMElement();
//     });
//   });
// });

// 모달 내부에 데이터들이 들어있어야 한다.
describe("modal should render a data", () => {
  it("about picture", () => {
    render(
      <BrowserRouter>
        <ClubInfoPageModal name={"동아리 이름"} />
      </BrowserRouter>
    );
    expect(screen.getByText("동아리 이름")).toBeInTheDocument();
  });

  it("about detail", () => {
    render(<ClubInfoDetailContents intro="안녕하세요" />);

    expect(screen.getByText("안녕하세요")).toBeInTheDocument();
  });

  it("about button", () => {
    render(<Button btnName={"버튼입니다"} />);
    const btn = screen.getByRole("button", {
      name: "버튼입니다",
    });
    expect(btn).toBeInTheDocument();
  });
});
