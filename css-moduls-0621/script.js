const color = document.getElementById('color');
const growing = document.getElementById('growing');
const round = document.getElementById('round');
const body = document.getElementById('body');
var flag = false;

// color.addEventListener('click', function(){

//     if(!flag){
//         body.style.backgroundColor = 'red';
//         return flag = true;
//     }else{

//         body.style.backgroundColor = 'green';
//         return flag = false;

//     }

// })

// growing.addEventListener('click', function(){

//     if(!flag){
//         body.style.fontSize='36px';
//         body.style.color ='red';
//         return flag = true;
//     }else{

//         body.style.fontSize='22px';
//         body.style.color ='blue';
//         return flag = false;

//     }
// })

round.addEventListener('click', () => {

    if(flag){
        round.style.backgroundColor = "white";
        body.style.backgroundColor = "white";
        round.style.backgroundImage = "url('./img/dark_mode_black_24dp.svg')";
        round.style.transform = "rotateZ(3600deg)";
      
        return flag = false;
        
    }else{
        body.style.backgroundColor = "black";

        round.style.backgroundColor = "yellow";

        round.style.backgroundImage = "url('./img/wb_sunny_black_24dp.svg')";
        round.style.transform = "rotateZ(-3600deg)";
        
        
        return flag = true;
        


    }
})