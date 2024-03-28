var value=10;
function game(key){
    if(key.code == "ArrowLeft"){
        var ele = document.getElementById('player');
        value=value-10;
        ele.style.marginLeft=value+'px';
    }
    else if(key.code == "ArrowRight")
    {
        var ele = document.getElementById('player');
        value = value+10;
        ele.style.marginLeft=value+'px';
    }
}
document.addEventListener('keyup',game);