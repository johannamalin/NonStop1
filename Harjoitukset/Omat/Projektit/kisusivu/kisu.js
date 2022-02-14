//kuvat ei toimi oikein

document.addEventListener('DOMContentLoaded', () => {

  const cardArray = [
    {
      name: 'eka',
      img: 'kortit/kortti1.png'
    },
    {
      name: 'toka',
      img: 'kortit/kortti2.png'
    },
    {
      name: 'kolmas',
      img: 'kortit/kortti3.png'
    },
    {
      name: 'neljäs',
      img: 'kortit/kortti4.png'
    },
    {
      name: 'viides',
      img: 'kortit/kortti5.png'
    },
    {
      name: 'kuudes',
      img: 'kortit/kortti6.png'
    },
    {
      name: 'eka',
      img: 'kortit/kortti1.png'
    },
    {
      name: 'toka',
      img: 'kortit/kortti2.png'
    },
    {
      name: 'kolmas',
      img: 'kortit/kortti3.png'
    },
    {
      name: 'neljäs',
      img: 'kortit/kortti4.png'
    },
    {
      name: 'viides',
      img: 'kortit/kortti5.png'
    },
    {
      name: 'kuudes',
      img: 'kortit/kortti6.png'
    }
  ]

  cardArray.sort(() => 0.5 - Math.random())

  const peli = document.querySelector('.peli')
  const resultDisplay = document.querySelector('#result')
  let cardsChosen = []
  let cardsChosenId = []
  let cardsWon = []

  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement('img')
      card.setAttribute('src', 'kortit/korttitausta.png')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      peli.appendChild(card)
    }
  }

  function checkForMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]

    if(optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', 'kortit/korttitausta.png')
      cards[optionTwoId].setAttribute('src', 'kortit/korttitausta.png')
      alert('Painoit samaa kuvaa..')
    }
    else if (cardsChosen[0] === cardsChosen[1]) {
      alert('Löysit parin!')
      cards[optionOneId].setAttribute('src', 'kortit/white.png')
      cards[optionTwoId].setAttribute('src', 'kortit/white.png')
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      cardsWon.push(cardsChosen)
    } else {
      cards[optionOneId].setAttribute('src', 'kortit/korttitausta.png')
      cards[optionTwoId].setAttribute('src', 'kortit/korttitausta.png')
      alert('Kokeile uudestaan!')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if  (cardsWon.length === cardArray.length/2) {
      resultDisplay.textContent = 'Löysit kaikki!'
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

  createBoard()
  })
