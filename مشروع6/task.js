let count=0;
function increase(){
    document.getElementById("counter").innerHTML=++count;
    if (count>=33){
    alert("please again");
    count=0;
}
    document.getElementById("counter").innerHTML=count;
}

function reset(){
    count=0;
    document.getElementById("counter").innerHTML=count;}
