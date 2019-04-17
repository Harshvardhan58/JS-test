
document.getElementById('link1').addEventListener('click',function(){
    document.getElementById('ques2').classList.add('d-none');
    document.getElementById('ques1').classList.remove('d-none');
    document.getElementById('link1').classList.add('active');
    document.getElementById('link2').classList.remove('active');
});

document.getElementById('link2').addEventListener('click',function(){
    document.getElementById('ques1').classList.add('d-none');
    document.getElementById('ques2').classList.remove('d-none');
    document.getElementById('link2').classList.add('active');
    document.getElementById('link1').classList.remove('active');
});
