for(i=0 ; i<26 ; i++){
    var btn = document.querySelectorAll(".myButton")[i].addEventListener("click",function(){

        var text = this.innerHTML;
        console.log(text);
        audioPlay(text);
        animation(text);
    
    })
}
function audioPlay(text){
    
    var aray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    for(i=0 ; i < aray.length ; i++){
        switch (text) {
            case aray[i]:
                var audio = new Audio("audio/"+aray[i]+".m4a");
                audio.play();
                break;
            
        }
    }
    
}


function animation(text){
    var selectbtn = document.querySelector("."+text);
    selectbtn.classList.add("anim");

    setTimeout(function(){
        selectbtn.classList.remove("anim");
    },2000);
}