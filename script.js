const round = document.getElementById('round');
// const round = document.getElementsByClassName('round');
const slider = document.getElementsByClassName('slider');
const theme = document.querySelector('#theme');
const switchh = document.querySelector('#switchh');
const body = document.querySelector('body');
let flag = 0;
let flagForBtnComplect = [0, 0, 0, 0, 0, 0]



const nameOfComplects = ['Бухгалтер', 'Бухгалтер госсектора', 'Юрист', 'Главный Бухгалтер', 'Главный Бухгалтер госсектора', 'Предприятие']

round.addEventListener('click', () => {
    round.classList.toggle("round");
    round.classList.toggle("round2");
    body.classList.toggle('body');

})



function darklight() {
    // console.log(flag);
    // if(round.style.backgroundImage == 'url(./img/darktheme/brightness-high.svg)'){        

    //     round.style.backgroundImage = 'url(./img/darktheme/mask.svg)';

    //     flag = 1;

    // }else{
    //     round.style.backgroundImage = 'url(./img/darktheme/brightness-high.svg)';
    //     // round.style.backgroundRepeat = noRepeat;
    //     //slider.style.backgroundPosition = right;
    //     flag = 0;
    // }
}

function myFunction() {

}




//кнопки

//todo - если кнопку нажали изменяется значение outline
//если еще раз нажали - обратно
const btnComplect = document.querySelectorAll('.btns__complect')
let outline = '-outline'
let btnComplectFlag = false
let colorOfBtnComplect = ['rgba(14, 201, 111, 1)', 'rgba(255, 113, 33, 1)', 'rgba(14, 201, 111, 1)', 'rgba(255, 113, 33, 1)', 'rgba(46, 121, 234, 1)', 'rgba(151, 103, 200, 1)', 'rgba(14, 201, 111, 1)', 'rgba(255, 113, 33, 1)', 'rgba(14, 201, 111, 1)', 'rgba(255, 113, 33, 1)', 'rgba(46, 121, 234, 1)', 'rgba(151, 103, 200, 1)']


// btnComplect.forEach((element, index) => {

//     element.className = `btn btn${outline}-${colorOfBtnComplect[index]}`

// })

console.log(btnComplect)

btnComplect.forEach((element, index) => {

    element.addEventListener('click', () => {
        // window.alert('btn')
        btnComplect.forEach((el) => {
            el.style.backgroundColor = 'white'
            el.style.color = 'black'
        })
        
        element.style.backgroundColor = colorOfBtnComplect[index]
        element.style.color = 'white'


    })
})

// var myModal = document.getElementById('modal')
// var myInput = document.getElementById('input')

// myModal.addEventListener('shown.bs.modal', function () {
//   myInput.focus()
// })