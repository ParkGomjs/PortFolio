const logotext = "메인";
const meta = {
  title: "엘든링",
  description: "ㅇㅇㅇ",
};

const introdata = {
  title: "엘든링",
  animated: {
    first: "도전해라",
    second: "그 힘이야말로",
    third: "왕인 까닭이다",
  },
  description: "추방 당한 자여....야망의 불꽃에 불타는 자여",
  main_image: "image/main.webp",
};

const dataabout = {
  title: "게임의 난이도",
  aboutme:
    "끝 없이 도전해라..모든 것은 처음부터 잘못되었을지도 모른다....그렇다고 멈춰있을 순 없다.   추방당한자여.....그 힘이야말로 왕인 까닭이다.",
};
const worktimeline = [
  {
    jobtitle: "The game Awardes",
    where: "GAME OF THE YEAR",
    date: "2022",
  },
  {
    jobtitle: "Golden Joystick Awards",
    where: "Ultimate Game of the Year Award",
    date: "2022",
  },
  {
    jobtitle: "IGN",
    where: "GAME OF THE YEAR",
    date: "2022",
  },
];

const skills = [
  {
    name: "자유도",
    value: 90,
  },
  {
    name: "난이도",
    value: 100,
  },
  {
    name: "만족도",
    value: 85,
  },
  {
    name: "트리가드를 잡은 유저의 분포",
    value: 30,
  },
  {
    name: "엔딩을 본 유저의 분포",
    value: 55,
  },
];

const services = [
  {
    title: "시험하고",
    description: "다른 게임과는 다른 난이도, 하지만 결코 불가능하지 않은.",
  },
  {
    title: "선택하며",
    description: "재미를 찾는 것도 선택, 정해진 길로 가는것도 당신의 선택",
  },
  {
    title: "끝에 다다르라",
    description: "당신의 방식대로 최종을 맞이해라.",
  },
];
// 이미지 링크 가져오는 곳
const dataportfolio = [
  {
    img: "image/treeguard.webp",
    description: "트리가드",
    link: "https://www.eldenring.jp/",
  },
  {
    img: "image/Margit.webp",
    description: "끔찍한 흉조 멀키트",
    link: "https://www.eldenring.jp/",
  },
  {
    img: "image/Morgott.webp",
    description: "축복의 왕 모르고트",
    link: "https://www.eldenring.jp/",
  },
  {
    img: "image/Radan.webp",
    description: "별 부수는 라단",
    link: "https://www.eldenring.jp/",
  },
  {
    img: "image/Malenia.webp",
    description: "부패의 여신 말레니아",
    link: "https://www.eldenring.jp/",
  },
  {
    img: "image/Mohg.webp",
    description: "피의 군주 모그",
    link: "https://www.eldenring.jp/",
  },

  {
    img: "image/Maliketh.webp",
    description: "흑검 말리케스",
    link: "https://www.eldenring.jp/",
  },
  {
    img: "image/Godfrey.webp",
    description: "첫 왕 고드프리",
    link: "https://www.eldenring.jp/",
  },
  {
    img: "image/Rennala.webp",
    description: "만월의 여왕 레날라",
    link: "https://www.eldenring.jp/",
  },
  {
    img: "image/Radagon.webp",
    description: "황금률 라다곤",
    link: "https://www.eldenring.jp/",
  },
  {
    img: "image/Godrick.webp",
    description: "접목의 고드릭",
    link: "https://www.eldenring.jp/",
  },
  {
    img: "image/Rykard.webp",
    description: "모독의 군주 라이커드",
    link: "https://www.eldenring.jp/",
  },
];
//
const contactConfig = {
  YOUR_EMAIL: "name@domain.com",
  YOUR_FONE: "(010)1234-5678",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vehicula eu nunc et sollicitudin. Cras pulvinar, nisi at imperdiet pharetra. ",
  // creat an emailjs.com account
  // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
  YOUR_SERVICE_ID: "service_id",
  YOUR_TEMPLATE_ID: "template_id",
  YOUR_USER_ID: "user_id",
};
// 소설 관리 링크
const socialprofils = {
  github: "https://github.com",
  facebook: "https://facebook.com",
  linkedin: "https://linkedin.com",
  twitter: "https://twitter.com",
};
// 컴포넌트를 내보내는 export를 활용하여 쓰고 있다.
export {
  meta,
  dataabout,
  dataportfolio,
  worktimeline,
  skills,
  services,
  introdata,
  contactConfig,
  socialprofils,
  logotext,
};
