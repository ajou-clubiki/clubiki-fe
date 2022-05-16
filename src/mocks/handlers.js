import axios from "axios";
import { rest } from "msw";

export const handlers = [
  rest.get("http://localhost:8000/clublist", (req, res, ctx) => {
    return res(
      ctx.json([
        {
          name: "아주대학교 코딩 동아리",
          imagePath:
            "https://www.lighthouselabs.ca/uploads/post/open_graph_image/459/Coding-vs-programming.jpg",
          description:
            "안녕하세요! 저희 동아리는 아주대학교 코딩 동아리입니다 :)",
          cp: "나회장",
          vcp: "나부회장",
          loc: "우리 집",
        },
        {
          name: "아주대학교 알고리즘 동아리",
          imagePath:
            "https://www.lighthouselabs.ca/uploads/post/open_graph_image/459/Coding-vs-programming.jpg",
          description:
            "안녕하세요! 저희 동아리는 아주대학교 알고리즘 동아리입니다 :)",
          cp: "나회장",
          vcp: "나부회장",
          loc: "우리 집",
        },
        {
          name: "아주대학교 빅데이터동아리",
          imagePath:
            "https://www.lighthouselabs.ca/uploads/post/open_graph_image/459/Coding-vs-programming.jpg",
          description:
            "안녕하세요! 저희 동아리는 아주대학교 빅데이터 동아리입니다 :)",
          cp: "나회장",
          vcp: "나부회장",
          loc: "우리 집",
        },
        {
          name: "아주대학교 웹 동아리",
          imagePath:
            "https://www.lighthouselabs.ca/uploads/post/open_graph_image/459/Coding-vs-programming.jpg",
          description:
            "안녕하세요! 저희 동아리는 아주대학교 웹 동아리입니다 :)",
          cp: "나회장",
          vcp: "나부회장",
          loc: "우리 집",
        },
        {
          name: "아주대학교 인공지능 동아리",
          imagePath:
            "https://www.lighthouselabs.ca/uploads/post/open_graph_image/459/Coding-vs-programming.jpg",
          description:
            "안녕하세요! 저희 동아리는 아주대학교 인공지능 동아리입니다 :)",
          cp: "나회장",
          vcp: "나부회장",
          loc: "우리 집",
        },
        {
          name: "아주대학교 메타버스 동아리",
          imagePath:
            "https://www.lighthouselabs.ca/uploads/post/open_graph_image/459/Coding-vs-programming.jpg",
          description:
            "안녕하세요! 저희 동아리는 아주대학교 메타버스 동아리입니다 :)",
          cp: "나회장",
          vcp: "나부회장",
          loc: "우리 집",
        },
      ])
    );
  }),
];
