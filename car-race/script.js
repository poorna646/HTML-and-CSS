function start(){
    // console.log("started");
    for (let i = 0; i < 5; i++) {
        var ele = document.getElementById("car-" + (i + 1))
        ele.style.animationName = '';
        ele.style.marginLeft = '0vw';
    }
    setTimeout(() => {
        watch();
        for (let i = 0; i < 5; i++) {
            var ele = document.getElementById("car-" + (i + 1))
            ele.style.animationName = 'move';
            ele.style.animationFillMode = "forwards";
            // ele.style.animationDuration = "1s";
            // var  arr = [2,2.5,3,2.4,4.2];
            var time = ((Math.random()*10)%2)+2;
            ele.style.animationDuration = time + "s";
        }
    }, 1000);   
}
Math.random()
function watch()
{
    //car id base. store in a array
    var cars=[];
    var finalist=[];
    for (let i = 0; i < 5; i++) {
        const element = document.getElementById("car-" + (i + 1));
        cars.push(element);
    }
    var interval = setInterval(function() {
        for (let i = 0; i < 5; i++) {
            var coordinate = cars[i].getBoundingClientRect();
            var carName = "car-"+(i+1);
            if(coordinate.left>240 && !finalist.includes(carName))
            {
                // finalist.push("cars="+(i+1));
                finalist.push(carName);
            }            
        }
        
    },500 );
}
setTimeout(() => {
    console.log("race result", finalList);
    clearInterval(interval);  
}, 5000);