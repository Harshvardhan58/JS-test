document.getElementById('move').addEventListener('click',function(){
    var start = Date.now();
    var box = document.getElementById('box');
    var timer = setInterval(function() {
    var timePassed = Date.now() - start;
    box.style.left = timePassed / 2 + 'px';
    if (timePassed > 2000){
        clearInterval(timer);
    } 

    }, 10);
});