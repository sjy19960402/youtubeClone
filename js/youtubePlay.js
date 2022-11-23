//youtube API 불러오는 부분
var tag = document.createElement('script'); 

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

//  after the API code downloads.

var player; // player 란 변수를 만들어서 이 안에 영상에 대한 값과 이벤트를 삽입
function onYouTubeIframeAPIReady() {
	 player = new YT.Player('player', { 
     // html에 부여한 id 값도 동일하게
		videoId: 'TUo_XGiPmvI', // 동영상 ID 삽입
		width : "270", 
		height : "150", // 플레이어의 가로세로값 지정
		playerVars:{ // 아래는 해당 플레이어의 기본 속성들 지정
		  'modestbranding': 1,
		  'autoplay' : 1, // 자동재생
		  'controls' : 0, // 컨트롤러의 유무
		  'showinfo' : 0, // 재생영상에 대한 정보 유무
		  'rel': 0, // 해당 영상이 종류 된 후, 관련 동영상을 표시할지의 여부
		  'loop': 1, // 반복 재생의 여부
		  'playlist': 'TUo_XGiPmvI' 
          // 단일 동영상을 반복재생하기 위해서 해당 매개변수가 필요
          // 같은 동영상 id를 넣어줌으로써 반복 재생
		 },
		events: {
		  'onReady': onPlayerReady, // 해당 이벤트는 동영상이 준비되면 발생하는 함수를 뜻합니다. 1)과 연결
		  'onStateChange': onPlayerStateChange 
          // 해당 이벤트는 상태가 변함에 따라 해당 함수가 발생하는 것을 뜻합니다. (재생/정지/준비 등등) 2)와 연결
		 }
	 });
};

// 1) 동영상이 준비되면 발생하는 함수
function onPlayerReady(event) {
  event.target.playVideo(); // 준비된 동영상을 재생합니다.
 // 그런데 위에서 autuplay 매개변수를 설정해두었다면 onReady 이벤트를 통해 재생을 명시할 필요는 없습니다.
 // 다만, 재생시 음소거를 원하는 등의 이벤트를 원한다면 해당 이벤트를 씀으로써 가능합니다. 
}

// 2) 플레이어의 상태에 따른 이벤트 
function onPlayerStateChange() {
  if(player.getPlayerState() == 1) console.log("재생중");
  else if(player.getPlayerState() == 2) console.log("일시중지");
/* ----------------------------------------------------
 -1 –시작되지 않음 / 0 – 종료 / 1 – 재생 중 / 2 – 일시중지 / 3 – 버퍼링 / 5 – 동영상 신호
---------------------------------------------------- */
}
