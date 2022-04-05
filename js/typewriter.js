var texts = [
    "Made Using",
    "JavaScript",
    "HTML",
    "CSS",
    "For Learning Project In",
    "Sri Lanka's #1",
    "Code Academy",
    "IJSE",
    "Direct Entry Program"
];

var elmStage = document.getElementById('stage');
var i = 0;
var j = 0;
var k = 0;
var reverse = false;

var sT = null;

function animateText(stamp){
    if(!sT){
        sT = stamp;
    }

    var interval = stamp - sT;

    if(interval>=70 && reverse){
        var text1 = texts[j];
        elmStage.innerText = text1.substring(0,k--);

        if(k === 0){
            reverse = false;
            j++;
            if(j>=texts.length){
                j=0;
            }
        }
    }

    if(interval>=250 && !reverse){
        sT=stamp;

        var text = texts[j];
        elmStage.innerText = text.substring(0,i++);
        if(i>(text.length+10)){
            reverse = true;
            k = text.length;
            i = 0;
            
            
        }
        
    }

    requestAnimationFrame(animateText);
}




requestAnimationFrame(animateText);