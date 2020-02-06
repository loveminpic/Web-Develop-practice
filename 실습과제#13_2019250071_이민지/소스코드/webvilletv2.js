
var position = 0;
var playlist;
var video;

window.onload = function(){ // 세가지 비디오를 셋업하는 부분
    playlist = ["video/preroll","video/areyoupopular","video/destinationearth"];
video = document.getElementById("video"); // 비디오 엘레먼트 가져오는 부분
video.addEventListener("ended", nextVideo, false); // 비디오가 끝날때 핸들러
// ended 라는 이벤트가 호출되면 , nextVideo함수를 호출한다. 
video.src = playlist[position] + getFormatExtension();
video.load();
video.play();
alert("Playing" + video.currentSrc);
}

function nextVideo(){
    position++;
    if(position >= playlist.length){ //리스트 끝에오면 다시 포지션을 0으로 바꿈
        position = 0;
    }
video.src = playlist[position] + getFormatExtension();// 첫번째 비디오를 set하는 것
video.load();
video.play(); // 로드하고 플레이하는것 
alert("Playing" + video.currentSrc);
}


function getFormatExtension(){
    if(video.canPlayType("video/mp4") != " "){
        return ".mp4";
    } else if (video.canPlayType("video/webm") != " "){
        return ".webm";
    } else if (video.canPlayType("video/ogg") != " "){
        return ".ogv";
    }
}

