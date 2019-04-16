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

