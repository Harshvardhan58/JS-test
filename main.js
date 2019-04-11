var Counter = function (countercount) {
    var that ={}
    that.countercount=countercount;
    that.count=0;
    var elem='<div class="row" id="row-'+countercount+'" style="margin:2%;">'+
        '<div class="col-md-1">'+countercount+'</div>'+
        '<div class="col-md-1">'+
            '<button id="decrement-'+countercount+'"  type="button" class="btn btn-secondary btn-sm">'+
                '&#8722;'+                           
            '</button>'+
        '</div>'+
        '<div class="col-md-2">'+
            '<div class="form-group">'+
                '<input value="0" id="counter-'+countercount+'" type="number" disabled class="form-control">'+
            '</div>'+
        '</div>'+
        '<div class="col-md-1">'+
            '<button id="increment-'+countercount+'" type="button" class="btn btn-secondary btn-sm">'+
            '&#x2b;'+
            '</button>'+
        '</div>'+
        '<div class="col-md-1">'+
            '<button id="delete-'+countercount+'" type="button" class="btn btn-danger btn-sm">'+
                'Delete'+
            '</button>'+
        '</div>'+
     '</div>';
     var node = document.getElementById('ques1');
     node.insertAdjacentHTML( 'beforeend',elem);

     document.getElementById('increment-'+countercount).onclick=function(){
            document.getElementById("counter-"+that.countercount).value=++that.count;
     };
     document.getElementById('decrement-'+countercount).onclick= function(){
        document.getElementById("counter-"+that.countercount).value=--that.count;
    }
    document.getElementById('delete-'+countercount).onclick=function(){
        var element =  document.getElementById("row-"+countercount);
        element.parentElement.removeChild(element);
    }
}
var countercount=1;
function addNewCounter(){
    Counter(countercount);
    countercount++;
}
function navbar(active){
    if(active=='ques1'){
        document.getElementById('ques2').classList.add('d-none');
        document.getElementById('ques1').classList.remove('d-none');
    }
    else{
        document.getElementById('ques1').classList.add('d-none');
        document.getElementById('ques2').classList.remove('d-none');
    }
}

function move(duartion){
    var element = document.getElementById("box");
    element.style.left="0px";
    var finalPos = 1000;
    var pos=0;
    curPos=element.offsetLeft;
    duartion = Math.floor((duartion*1000)/(finalPos-curPos));
    if(duartion<10){
        var inc = Math.ceil(10/duartion);
    }
    else{
        var inc = 1;
    }
    var id = setInterval(function(){
        if (pos == finalPos-curPos) {
            clearInterval(id);
          }
        pos+=inc; 
        element.style.left = pos + "px"; 
    },duartion);

}