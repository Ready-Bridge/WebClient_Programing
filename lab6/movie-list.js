async function init() {
  //fetch 는 두개의 매개변수를 받고있음 (주소, 옵션)
  const response =
    await /*fetch를 통해 네이버 상영영화의 html을 request 하고 그것을 response 에 저장*/ fetch(
      "http://localhost:8090/https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=%EC%83%81%EC%98%81%EC%98%81%ED%99%94",
      {
        headers: {
          "X-Requested-With": "XMLHttpRequest",
        }, // 보안을 위해 추가한 headers
      }
    );
  //.text를 통해 순수한 html만 받음(프로미스로) 이게 확보가 되면 then 을 실행
  const body = response.text().then(function (html) {
    // json 대신에 문자열의 format은 html 이라는것을 매개변수로 넘겨주고 그것을 parse 해서 변수에 넣음
    var html_dom = new DOMParser().parseFromString(html, "text/html");
    console.log(html_dom.body);
    var movies = html_dom.querySelectorAll(".data_area"); // dom 에 저장된 수많은 정보들중 data_area 값을 가진 태그 안쪽에 있는 정보만 신경쓰겠다.
    console.log(movies);
    display(movies); // 아직 json 포맷이 아니라 html 포맷임
  });
}

function display(movie) {
  const result = document.querySelector("#result");
  let string = "";
  movie.forEach((movies) => {
    var title = movies.querySelector(".area_text_box > a").innerText; //.innerText 로 a 태그안에 있는 content(문자열) 을 가져올 수 있음.
    var info_group = movies.querySelectorAll(".info_group");
    var genre = info_group[0].querySelectorAll("dd")[0].innerText;
    var runtime = info_group[0].querySelectorAll("dd")[1].innerText;
    var date = info_group[1].querySelector("dd").innerText;
    var score = info_group[1].querySelector(".num").innerText;
    if (info_group[2].querySelector("._text") == null) {
      var inf = " ";
    } else {
      var inf = info_group[2].querySelector("._text").innerText;
    }
    var character = inf;
    var poster = movies.querySelector(".img_box > img").src; // .src 로 attribute를 확보할 수 있음.

    string += `<table><tr><th>영화</th><td>${title}</td></tr>
                <tr><th>장르</th><td>${genre}</td></tr>
                <tr><th>상영시간</th><td>${runtime}</td></tr>
                <tr><th>개봉일</th><td>${date}</td></tr>
                <tr><th>평점</th><td>${score}</td></tr>
                <tr><th>출연</th><td>${character}</td></tr>
                <tr><th>포스터</th><td><img width="178" height="260" src="${poster}"></td></tr></table>`;
  });
  result.innerHTML = string;
}

init();
