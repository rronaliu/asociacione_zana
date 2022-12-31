
const a1 = document.querySelector('#a1')
const b1 = document.querySelector('#b1')
const c1 = document.querySelector('#c1')
const d1 = document.querySelector('#d1')
const a2 = document.querySelector('#a2')
const b2 = document.querySelector('#b2')
const c2 = document.querySelector('#c2')
const d2 = document.querySelector('#d2')
const a3 = document.querySelector('#a3')
const b3 = document.querySelector('#b3')
const c3 = document.querySelector('#c3')
const d3 = document.querySelector('#d3')
const a4 = document.querySelector('#a4')
const b4 = document.querySelector('#b4')
const c4 = document.querySelector('#c4')
const d4 = document.querySelector('#d4')

let startGame = false

getInput = {
    a1: '',
    b1: '',
    c1: '',
    d1: '',
    a2: '',
    b2: '',
    c2: '',
    d2: '',
    a3: '',
    b3: '',
    c3: '',
    d3: '',
    a4: '',
    b4: '',
    c4: '',
    d4: ''
}

// Get card element
const card = document.querySelectorAll('.card-one');

//first all active
for (let i = 0; i < card.length; i++) {
    card[i].classList.toggle("active");
 }

// Loop through cards. 
// This is so you can have multiple cards on a page.
// FLIP EACH CARD ON CLICK
for (let i = 0; i < card.length; i++) {
   // Add a click event listener to each card.
   card[i].addEventListener("click", function(event) {
     // Toggle active class on card
     console.log('cka po klikohet ',event.target, event.target.tagName)
     if(event.target.tagName.toUpperCase() === 'INPUT') {return}

     console.error(event.target.classList.contains('card-img'))
     if(event.target.classList.contains('card-img') && card[i].classList.contains('active')) {
        card[i].querySelector('input').focus()
        return
    }
     if(startGame) {
         card[i].classList.toggle("active");
        }
   });
}

const hideAll = document.querySelector('.btn-primary');
const showAll = document.querySelector('.showAll');

hideAll.addEventListener('click', function() {
    const card = document.querySelectorAll('.card-one');
    for (let i = 0; i < card.length; i++) {
        if(card[i].classList.contains('active')) {
            card[i].classList.toggle('active');
        }
        
        // add class display-none to input
        let input = card[i].querySelector('input') 
        if(input && input.value) {
            // add html to card-img-overlay
            let cardImgOverlay = card[i].querySelector('.card-img-overlay')
            cardImgOverlay.innerHTML = input.value

            input.classList.add('display-none')
        }
    }
    startGame = true;
    // for (let i = 0; i < Object.keys(getInput).length; i++) {
    //     console.log({len: Object.keys(getInput).length ,obj: Object.keys(getInput)[i]})
    //     let inputKey = Object.keys(getInput)[i]
    //     console.log({key: document.querySelector(`#${inputKey}`), i })
    //     if(document.querySelector(`#${inputKey}`)) {
    //         getInput[inputKey] = document.querySelector(`#${inputKey}`).value
    //     }
    //     // getInput[inputKey] = document.querySelector(`#${inputKey}`).value
    // }
    // console.log(startGame, a1.value, getInput)
    // localStorage.setItem("inputObject", JSON.stringify(getInput));
});

showAll.addEventListener('click', function() {
    const card = document.querySelectorAll('.card-one');
    for (let i = 0; i < card.length; i++) {
        if(!card[i].classList.contains('active') && startGame) {
            card[i].classList.toggle('active');
        }
    }
    startGame = false;
});

let setInputs = () => {

}


