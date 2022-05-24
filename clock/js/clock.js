const clock = document.querySelector("h2#clock");


function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2,"0");
  const minutes = String(date.getMinutes()).padStart(2,"0");
  const seconds = String(date.getSeconds()).padStart(2,"0"); 
  //padStart(문자열개수,빈공간채울거), padEnd는 뒤로 채움
  clock.innerText=(`${hours}:${minutes}:${seconds}`);
}

getClock(); //처음에 바로, 새로고침하고 바로 볼 수 있음
setInterval(getClock, 1000);






//setInterval 간격 설정, 뒤에는 ms 단위
//setTimeout 위와 동일, 단 1번만 실행
//const date = new Date()  date.get구하는거

