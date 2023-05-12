async function init() {
  var word = "고경희 웹"; // 네이버 도서 검색 키워드
  var query = encodeURI(word); // 키워드(한글)을 웹주소로 인코딩하여 인식할 수 있도록 변환
  let xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    `http://localhost:8090/https://openapi.naver.com/v1/search/book.json?query=${query}&display=10&start=1`
  );
  // 네이버데이터서버에게 도서검색("고경희"와 "웹" 키워드가 존재하는 도서정보 찾기)을 하여 확보한 도서정보들 중
  //   10권 분량의 첫번째 페이지를 요청하는 메시지로 설정함
  // 프록시서버(포트:8090)를 사용하여 브라우저의 CORS 보안장벽(Live Server와 네이버데이터서버 간 연계가 보안상 취약요소로 판정됨)을 우회 통과함
  xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest"); // 프록시서버가 요구하는 보안통과용 정보 설정
  xhr.setRequestHeader("X-Naver-Client-Id", "OpGozHIIuozGX64b7xNm"); // 네이버 데이터 서버가 요구하는 개발자용 어플리케이션 등록 ID
  xhr.setRequestHeader("X-Naver-Client-Secret", "C3IzeonwmV"); // 네이버 데이터 서버가 요구하는 개발자용 어플리케이션 등록 PW
  xhr.send();

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      let users = JSON.parse(xhr.responseText);
      console.log(users);
      // 응답결과(xhr.responseText)를 객체형태(users)로 변환한 값을 브라우저의 콘솔창에 디버깅 용도로 출력함.
      // 객체 내부의 키 이름들(name, username, email,...)을 확인함.

      users.items.sort((a, b) => a.pubdate.localeCompare(b.pubdate));

      display(users.items);
    }
  };
}

function display(users) {
  const result = document.querySelector("#result");
  let string = "";
  users.forEach((user) => {
    string += `<table><tr><th>제목</th><td>${user.title}</td></tr>
                <tr><th>저자</th><td>${user.author}</td></tr>
                <tr><th>발행일</th><td>${user.pubdate}</td></tr>
              </table>`;
  });
  result.innerHTML = string;
}

init();
