var Counter = function (countercount,node) {
    var count=0;
    var elem=document.getElementsByClassName("counter")[0].cloneNode(true);
    elem.classList.remove('d-none');
    var tmp = elem.getElementsByTagName('button');
    var inp = elem.getElementsByTagName('input')[0];
    elem.getElementsByClassName('countercount')[0].innerHTML=countercount;
    inp.value=count;
    tmp[2].addEventListener('click',function(){
        node.removeChild(elem);
    });
    tmp[1].addEventListener('click',function(){
        inp.value = ++count;
    });
    tmp[0].addEventListener('click',function(){
        inp.value = --count;
    });
    node.appendChild(elem)
     
}

var addNewCounter = function(){
    var countercount=0;
    var node = document.getElementById('ques1');
    return function(){
        Counter(++countercount,node);
    }    
}();

