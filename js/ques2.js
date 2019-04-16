
function move(duartion){
    var element = document.getElementById("box");
    element.style.left="0px";
    var finalPos = 1000;
    var pos=0;
    var curPos=element.offsetLeft;
    finalPos+=curPos
    duartion = Math.floor((duartion*1000)/(finalPos-curPos));
    if(duartion<10){
        var inc = Math.ceil(10/duartion);
    }
    else{
        var inc = 1;
    }
    var id = setInterval(function(){
        if (pos >= finalPos-curPos) {
            clearInterval(id);
          }
        pos+=inc; 
        element.style.left = pos + "px"; 
    },duartion);

}
