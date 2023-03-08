const voice = document.getElementById("voice");

alert("Select the voice first, otherwise the voice won't play.")

const selectVoice = (event) =>{

    for(i=0 ; i<26 ; i++){
        var btn = document.querySelectorAll(".myButton")[i].addEventListener("click",function(){
            
             var text = this.innerHTML;
            if(event.target.value == "Male"){
                Male(text);
            }
            if(event.target.value == "Female"){
                Female(text);
            }
            animation(text);
        
        })
    }
    
}
voice.addEventListener("change",selectVoice);


document.addEventListener("keypress",function(event){
    var text = event.key;
    audioMalePlay(text);
    animation(text);
})


function Male(text){
    
    var aray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    for(i=0 ; i < aray.length ; i++){
        switch (text) {
            case aray[i]:
                var audio = new Audio("audio/male/"+aray[i]+".mp3");
                audio.play();
                break;
            
        }
    }
    
}

function Female(text){
    
    var aray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    for(i=0 ; i < aray.length ; i++){
        switch (text) {
            case aray[i]:
                var audio = new Audio("audio/"+aray[i]+".mp3");
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
    },1000);
}
