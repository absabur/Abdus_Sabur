for(i=0 ; i<60 ; i++){
    var btn = document.querySelectorAll(".myButton")[i].addEventListener("click",function(){

        var text = this.innerHTML;
        console.log(text);
        audioPlay(text);
        animation(text);
    
    })
}



function audioPlay(text){
    var aray = ["অ", "আ", "ই", "ঈ", "উ", "ঊ", "ঋ", "এ", "ঐ", "ও", "ঔ","ক", "খ", "গ", "ঘ", "ঙ", "চ", "ছ", "জ", "ঝ", "ঞ", "ট", "ঠ", "ড", "ঢ", "ণ", "ত", "থ", "দ", "ধ", "ন", "প", "ফ", "ব", "ভ", "ম", "য", "র", "ল", "শ", "ষ", "স", "হ", "য়", "ড়", "ঢ়", "ৎ", "ং", "ঃ", "ঁ"];
    for(i=0 ; i < aray.length ; i++){
        switch (text) {
            case aray[i]:
                var audio = new Audio("banglaaudio/"+aray[i]+".m4a");
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
    },3000);
}
