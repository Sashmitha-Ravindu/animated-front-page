var elmCircle = document.createElement('div');
var tmrId = null;

elmCircle.classList.add('pointer');
elmCircle.classList.add('hide');

document.body.append(elmCircle);
var anime;

addEventListener('mousemove',function(e){

    if(tmrId){
        this.clearTimeout(tmrId);
        tmrId=null;
    }

    tmrId = setTimeout(function(){
        elmCircle.classList.add('hide');
    },2000)

    var xPos = e.pageX;
    var yPos = e.pageY;

    if(elmCircle.classList.contains('hide')){
        elmCircle.classList.remove('hide');
    }

    elmCircle.style.top = yPos + 'px';
    elmCircle.style.left = xPos + 'px';

    
});

addEventListener('mouseout',function(){
    elmCircle.classList.add('hide');
});