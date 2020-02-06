
var position = 0;
var playlist;
var video;

window.onload = function(){ // 세가지 비디오를 셋업하는 부분
    playlist = ["video/preroll.mp4",
                "video/areyoupopular.mp4",
                "video/destinationearth.mp4"];
video = document.getElementById("video"); // 비디오 엘레먼트 가져오는 부분
video.addEventListener("ended", nextVideo, false); // 비디오가 끝날때 핸들러
// ended 라는 이벤트가 호출되면 , nextVideo함수를 호출한다. 
}

function nextVideo(){
    position++;
    if(position >= playlist.length){ //리스트 끝에오면 다시 포지션을 0으로 바꿈
        position = 0;
    }
 video.src = playlist[position];// 첫번째 비디오를 set하는 것
video.load();
video.play(); // 로드하고 플레이하는것 

}
