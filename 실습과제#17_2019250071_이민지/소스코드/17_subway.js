

window.onload = function(){
    var url = "http://openapi.seoul.go.kr:8088/787651484d6d696e34316d6c636563/json/CardSubwayStatsNew/1/20/20190620";
    var request = new XMLHttpRequest();
    request.open("GET", url);        
    
    request.onload = function () {
        if (request.status == 200){
            updateSalse(request.responseText);
        }
        };

request.send(null);
}

function updateSalse(responseText){
    var sales = JSON.parse(responseText);
    var traffic = sales.CardSubwayStatsNew.row;
    var salesDiv = document.getElementById("subway");
   
    for (var i = 0; i < traffic.length; i++){
        var div = document.createElement("div");
        div.setAttribute("class", "saleItem");
        div.innerHTML = traffic[i].USE_DT + "일자" + traffic[i].SUB_STA_NM + "," +traffic[i].RIDE_PASGR_NUM +"명 탑승" + traffic[i].ALIGHT_PASGR_NUM + "명 하차"; 
        salesDiv.appendChild(div);
    }
}
