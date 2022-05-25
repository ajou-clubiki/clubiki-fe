import { rest } from "msw";

export const BASE_URL_1 = "http://3.37.201.213:8080/club";
export const BASE_URL_2 = "http://3.37.201.213:8080";

export const handlers = [
  rest.get(`${BASE_URL_1}/list`, (req, res, ctx) => {
    return res(
      ctx.json({
        message: "동아리 조회를 완료했습니다.",
        clubInfos: [
          {
            clubId: 1,
            name: "알고알고",
            imageURL:
              "https://clubiki.s3.ap-northeast-2.amazonaws.com/test_logo.jpg",
            introduction:
              "들어오기만 한다면, 당신도 네카라쿠배 합격! 백준 티어 다이아몬드 회장님이 알려드립니다.",
          },
          {
            clubId: 2,
            name: "미라클모닝",
            imageURL:
              "https://clubiki.s3.ap-northeast-2.amazonaws.com/test_logo.jpg",
            introduction:
              "아직도 누워계세요? 일어나서 생산적인 하루를 함께합니다 :)",
          },
        ],
      })
    );
  }),

  rest.get(`${BASE_URL_2}/wikiBoard/2`, (req, res, ctx) => {
    return res(
      ctx.json({
        count: 2,
        data: [
          {
            wikiBoardId: 4,
            wikiName: "활동",
            isLock: true,
          },
          {
            wikiBoardId: 5,
            wikiName: "MT",
            isLock: false,
          },
        ],
      })
    );
  }),

  rest.get(`${BASE_URL_2}/wikiBoard/page/4`, (req, res, ctx) => {
    return res(
      ctx.json({
        wikiName: "활동 게시판",
        wikiIntro: "2022년 1학기 동아리 활동기록용",
        cpAnnouncement:
          "이 게시판은 저희의 동아리 관련 활동에 대한 기록을 하시면 됩니다",
        articleCount: 1,
        articleList: [
          {
            articleId: 1,
            text: "백준 10000번 풀이법 by 배수지",
            imageCount: 1,
            imageFileList: [
              {
                imageUrl:
                  "https://clubiki.s3.ap-northeast-2.amazonaws.com/code.jpg",
              },
            ],
            createdTime: "2022-05-17T02:55:32.000+00:00",
          },
        ],
        lock: true,
      })
    );
  }),

  rest.get(`${BASE_URL_2}/wikiBoard/page/5`, (req, res, ctx) => {
    return res(
      ctx.json({
        wikiName: "MT 게시판",
        wikiIntro: "2022년 1학기 동아리 MT",
        cpAnnouncement: "MT에서 놀러간 것을 모았습니다",
        articleCount: 1,
        articleList: [
          {
            articleId: 1,
            text: "박상준",
            imageCount: 1,
            imageFileList: [
              {
                imageUrl:
                  "https://clubiki.s3.ap-northeast-2.amazonaws.com/code.jpg",
              },
            ],
            createdTime: "2022-05-17T02:55:32.000+00:00",
          },
        ],
        lock: true,
      })
    );
  }),

  rest.get(`${BASE_URL_1}/2/joinList`, (req, res, ctx) => {
    return res(
      ctx.json({
        message: "한개 동아리 신청 목록 조회를 완료했습니다.",
        clubJoinInfos: [
          {
            clubName: "알고알고",
            memberName: "서강준",
            status: "대기",
          },
          {
            clubName: "알고알고",
            memberName: "배수지",
            status: "대기",
          },
          {
            clubName: "알고알고",
            memberName: "우기",
            status: "가입 거절",
          },
        ],
      })
    );
  }),

  rest.post(`${BASE_URL_2}/wikiBoard/2`, (req, res, ctx) => {
    return res("정상적으로 작동되었습니다!");
  }),

  rest.post(`${BASE_URL_2}/wikiBoard/lock/:wikiBoardId`, (req, res, ctx) => {
    const { isLock } = req.body;

    return res(
      ctx.json({
        isLock,
      })
    );
  }),
];
