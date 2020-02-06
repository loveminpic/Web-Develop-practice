window.onload = init;

function init(){

    var button = document.getElementById("add_button");
    button.onclick = createSticky;
   var stickiesArray = getStickiesArray();

    
    for (var i = 0; i < stickiesArray.length; i++){
        var key = stickiesArray[i];
        var value = stickiesArray[key];
        addStickyToDOM(value);
    }
}

function addStickyToDOM(value){
    var stickies = document.getElementById("stickies");
    var sticky = document.createElement("li");
    var span = document.createElement("span");
    span.setAttribute("class", "sticky");
    span.innerHTML = value;
    sticky.appendChild(span);
    stickies.appendChild(sticky);
}

function createSticky(){
    var value = document.getElementById("note_text").value;
    var key = "sticky_"  + localStorage.length;
    localStorage.setItem(key,value);

    addStickyToDOM(value);

}

var currentData = new Date();
var time = currentData.getTime();
var key = "sticky_" + time;

var stickiesArray = getStickiesArray();
localStorage.setItem(key, value);
stickiesArray.push(key);
localStorage.setItem("stickiesArray", JSON.stringify(stickiesArray));



function getStickiesArray(){
    var stickiesArray = localStorage.getItem("stickiesArray");
    if(!stickiesArray){
        stickiesArray = [];
        localStorage.setItem("stickyesArray", stickiesArray);
    }else {
        stickiesArray = JSON.parse(stickiesArray)
    }
    return stickiesArray;
}

function createSticky(){
    var stickiesArray = getStickiesArray();
    var currentDate = new Date();
    var key = "sticky_" + currentDate.getTime();
    var value = document.getElementById("note_text").value;
    localStorage.setItem(key, value);
    stickiesArray.push(key);
    localStorage.setItem("stickiesArray",JSON.stringify(stickiesArray));
    addStickyToDOM(value);
}