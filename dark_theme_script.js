const color = document.getElementById('color');
const growing = document.getElementById('growing');
const round = document.getElementById('round');
const body = document.querySelector('#body');
const header = document.querySelector('#header')
const btn = document.querySelectorAll('.btns__complect')
const exampleModal = document.querySelector('#modal-dialog')
const result = document.querySelector('#result')

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
        body.style.color = "black";

        exampleModal.style.backgroundColor = "white";
        exampleModal.style.color = "black";
        result.style.backgroundColor = "white";
        result.style.color = "black";
        btn.forEach((element) => {
            element.style.color = "black"; 
        })

        header.style.backgroundColor = "white";
        // round.style.backgroundImage = "url('./img/darktheme/moon-fill.svg')";
        round.style.backgroundImage = "url('./img/broSunMoon/moon.svg')"
        round.style.transform = "rotateZ(3600deg)";
      
        return flag = false;
        
    }else{
        body.style.backgroundColor = "rgba(37, 40, 45, 1)";
        body.style.color = "white"; 
        btn.forEach((element) => {
            element.style.color = "white"; 
        })
        exampleModal.style.backgroundColor = "rgba(37, 40, 45, 1)";
        exampleModal.style.color = "white";
        result.style.backgroundColor = "rgba(37, 40, 45, 1)";
        result.style.color = "white";
        result.style.borderStyle = 'doted'
        header.style.backgroundColor = "rgba(37, 40, 45, 1)";
        

        round.style.backgroundColor = "";

        round.style.backgroundImage = "url('./img/broSunMoon/sun.svg')";
        round.style.transform = "rotateZ(-3600deg)";
        
        
        return flag = true;
        


    }
})

console.log('js dark theme');