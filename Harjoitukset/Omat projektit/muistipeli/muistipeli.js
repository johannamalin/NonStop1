document.addEventListener('DOMContentLoaded', () => {
}

const cardArray = [
   {
    name: 'kissa1',
    img: 'kuvat/kissa1.png'
   },
   {
    name: 'kissa1',
    img: 'kuvat/kissa1.png'
   },
   {
    name: 'kissa2',
    img: 'kuvat/kissa2.png'
   },
   {
    name: 'kissa2',
    img: 'kuvat/kissa2.png'
   },
   {
    name: 'kissa3',
    img: 'kuvat/kissa3.png'
   },
   {
    name: 'kissa3',
    img: 'kuvat/kissa3.png'
   },
   {
    name: 'kissa4',
    img: 'kuvat/kissa4.png'
   },
   {
    name: 'kissa4',
    img: 'kuvat/kissa4.png'
   },
   {
    name: 'kissa5',
    img: 'kuvat/kissa5.png'
   },
   {
    name: 'kissa5',
    img: 'kuvat/kissa5.png'
   },
   {
    name: 'kissa6',
    img: 'kuvat/kissa6.png'
   },
   {
    name: 'kissa6',
    img: 'kuvat/kissa6.png'
   }
 ]

cardArray.sort(() => 0.5 - Math.random())

 const grid = document.querySelector('.grid')
 const resultDisplay = document.querySelector('#result')
 let cardsChosen = []
 let cardsChosenId = []
 let cardsWon = []

 function createBoard() {
   for (let i = 0; i < cardArray.length; i++) {
     const card = document.createElement('img')
     card.setAttribute('src', 'kuvat/blank.png')
     card.setAttribute('data-id', i)
     card.addEventListener('click', flipCard)
     grid.appendChild(card)
   }
 }

 function checkForMatch() {
   const cards = document.querySelectorAll('img')
   const optionOneId = cardsChosenId[0]
   const optionTwoId = cardsChosenId[1]

   if(optionOneId == optionTwoId) {
     cards[optionOneId].setAttribute('src', 'kuvat/blank.png')
     cards[optionTwoId].setAttribute('src', 'kuvat/blank.png')
     alert('You have clicked the same image!')
   }
   else if (cardsChosen[0] === cardsChosen[1]) {
     alert('You found a match')
     cards[optionOneId].setAttribute('src', 'kuvat/paper.png')
     cards[optionTwoId].setAttribute('src', 'kuvat/paper.png')
     cards[optionOneId].removeEventListener('click', flipCard)
     cards[optionTwoId].removeEventListener('click', flipCard)
     cardsWon.push(cardsChosen)
   } else {
     cards[optionOneId].setAttribute('src', 'kuvat/blank.png')
     cards[optionTwoId].setAttribute('src', 'kuvat/blank.png')
     alert('Sorry, try again')
   }
   cardsChosen = []
   cardsChosenId = []
   resultDisplay.textContent = cardsWon.length
   if  (cardsWon.length === cardArray.length/2) {
     resultDisplay.textContent = 'Congratulations! You found them all!'
   }
 }

 function flipCard() {
   let cardId = this.getAttribute('data-id')
   cardsChosen.push(cardArray[cardId].name)
   cardsChosenId.push(cardId)
   this.setAttribute('src', cardArray[cardId].img)
   if (cardsChosen.length ===2) {
     setTimeout(checkForMatch, 500)
   }
 }
