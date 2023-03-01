for(i=0 ; i<30 ; i++){
    var btn = document.querySelectorAll(".myButton")[i].addEventListener("click",function(){

        var text = this.innerHTML;
        console.log(text);
        audioPlay(text);
        animation(text);
    
    })
}
function audioPlay(text){
    
    var aray = ["ا","ب","ت","ث","ج","ح","خ","د","ذ","ر","ز","س","ش","ص","ض","ط","ظ","ع","غ","ف","ق","ك","ل","م","ن","و","ه","ء","ي"];
    for(i=0 ; i < aray.length ; i++)
    switch (text) {
        case aray[i]:
            var audio = new Audio("arabic/"+aray[i]+".m4a");
            audio.play();
            break;
        
    }
}


function animation(text){
    var selectbtn = document.querySelector("."+text);
    selectbtn.classList.add("anim");

    setTimeout(function(){
        selectbtn.classList.remove("anim");
    },2000);
}
