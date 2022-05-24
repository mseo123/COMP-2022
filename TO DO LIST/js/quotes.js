const quotes = [
  {
    quote: "승자는 시간을 관리하며 살고 패자는 시간에 끌려 산다.",
    author: "J.하비스",
  },
  {
    quote: "인생에 뜻을 세우는데 적당한 때는 없다.",
    author: "볼드윈",
  },
  {
    quote: "우리는 행복하기 때문에 웃는 게 아니라, 웃기 때문에 행복하다.",
    author: "윌리엄 제임스",
  },
  {
    quote: "일단 시작해라. 나중에 완벽해지면 된다.",
    author: "론 무어",
  },
  {
    quote: "붓이 정녕 칼보다 강하다면, 그 책임 또한 더 무거워야 한다.",
    author: "이영도",
  },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = (quotes[Math.floor(Math.random() * quotes.length)]);

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

//Math.random() -> 0~1사이 랜덤 숫자 round 반올림 ceil 올림 floor 내림
//array.length 길이 세기