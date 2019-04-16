var Counter = function (countercount) {
    var count=0;
    var node = document.getElementById('ques1');
    var elem=document.getElementsByClassName("counter")[0].cloneNode(true);
    elem.classList.remove('d-none');
    var tmp = elem.getElementsByTagName('button');
    var inp = elem.getElementsByTagName('input')[0];
    elem.getElementsByClassName('countercount')[0].innerHTML=countercount;
    inp.value=count;
    for(var i=0;i<tmp.length;i++){
        var arr=tmp[i].className.split(" ")
        if(arr.includes('delete')){
            tmp[i].addEventListener('click',function(){
                node.removeChild(elem);
            });
        }
        if(arr.includes('increment')){
            tmp[i].addEventListener('click',function(){
                inp.value = ++count;
            });
        }
        if(arr.includes('decrement')){
            tmp[i].addEventListener('click',function(){
                inp.value = --count;
            });
        }
    }
    node.appendChild(elem)
     
}

var addNewCounter = function(){
    var countercount=0;
    return function(){
        Counter(++countercount);
    }    
}();

