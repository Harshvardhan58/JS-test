function navbar(active){
    if(active=='ques1'){
        document.getElementById('ques2').classList.add('d-none');
        document.getElementById('ques1').classList.remove('d-none');
        document.getElementById('link1').classList.add('active');
        document.getElementById('link2').classList.remove('active');
    }
    else{
        document.getElementById('ques1').classList.add('d-none');
        document.getElementById('ques2').classList.remove('d-none');
        document.getElementById('link2').classList.add('active');
        document.getElementById('link1').classList.remove('active');
    }
}