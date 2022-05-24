import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ClubMemberListPage from "../ClubMemberListPage";
import RegularMemberList from "../MemberList";

// describe("Club list member page", () => {
//   it("should render correct heading tag", () => {
//     render(<ClubMemberListPage />);

//     const title = screen.getByRole("heading", {
//       name: "동아리 회원 목록",
//     });
//     expect(title).toBeInTheDocument();
//   });

//   it("should have data about club member list", async () => {
//     render(<RegularMemberList />);

//     const membersList = await screen.findAllByRole("heading", {
//       name: /님$/,
//     });

//     expect(membersList).toHaveLength(3);

//     const mappingMembersList = membersList.map((el) => el.name);
//     expect(mappingMembersList).toEqual(["서강준", "배수지", "우기"]);
//   });
// });
