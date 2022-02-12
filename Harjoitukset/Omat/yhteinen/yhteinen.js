
const pieniKuvat = ""

const keskiKuvat = ""

const isoKuvat = ""


const korttiPakka = document.getElementById('korttiPakka')
let shuffledKuvat = []
let avatutKortit = []
let matchedKortit = []
let alusta = []

function luoKortit(level) {
  if (level === 'pieni') {
    shuffledKuvat = shuffle(pieniKuvat)
  } else if (level === 'keski') {
    shuffledKuvat = shuffle(keskiKuvat)
  } else if (level === 'iso') {
    shuffledKuvat = shuffle(isoKuvat)
  }

  for (let i = 0; i < shuffledKuvat.length; i++) {
    const kortti = document.createElement('div')
    kortti.classList.add('kortti')
    kortti.innerHTML = '<div class="back"><i class="${shuffledKuvat[i]}"></i></div><div class="front"></div>'
    korttiPakka.appendChild(kortti)
    click(kortti)
  }
}


function click(kortti) {
  kortti.addEventListener('click', function () {
    const kortti2 = this
    const kortti1 = avatutKortit[0]

    if (avatutKortit.length === 1 && !kortti.classList.contains('flipped')) {
      kortti.classList.add('back', 'flipped')
      avatutKortit.push(this)
      compare(kortti2, kortti1)
    } else if (!kortti.classList.contains('flipped')) {
      kortti2.classList.add('back', 'flipped')
      avatutKortit.push(this)
    }
  })
}


function vertaus(kortti2, kortti1) {
  if (kortti2.innerHTML === kortti1.innerHTML) {

    kortti2.classList.add('match')
    kortti1.classList.add('match')

    matchedKortit.push(kortti2, kortti1)

    avatutKortit = []


    if (matchedKortit.length === shuffledKuvat.length) {

      setTimeout(function () {
        const boksi = document.getElementById('boksi')
        boksi.classList.add('voitto')
      }, 300)
      setTimeout(function () {
        const boksi = document.getElementById('boksi')
        boksi.classList.remove('voitto')
      }, 2000)

      setTimeout(function () {
        const kortit = document.getElementsByClassName('kortti')
        for (const kortti of kortit) {
          kortti.classList.add('bounce-out')
        }
      }, 2000)
      setTimeout(function () {
        alusta.classList.remove('pieni', 'keski', 'iso')
      }, 4000)
    }

  } else {
    setTimeout(function () {
      kortti2.classList.remove('flipped')
      kortti1.classList.remove('flipped')
      avatutKortit = []
    }, 500)
  }
}


const pieni = document.getElementById('pieni')
pieni.addEventListener('click', function () {
  korttiPakka.classList.add('pieni')
  korttiPakka.classList.remove('keski')
  korttiPakka.classList.remove('iso')
  korttiPakka.innerHTML = ''
  luoKortit('pieni')
  matchedKortit = []
})

const keski = document.getElementById('keski')
keski.addEventListener('click', function () {
  korttiPakka.classList.add('keski')
  korttiPakka.classList.remove('pieni')
  korttiPakka.classList.remove('iso')
  korttiPakka.innerHTML = ''
  luoKortit('medium')
  matchedKortit = []
})

const iso = document.getElementById('iso')
iso.addEventListener('click', function () {
  korttiPakka.classList.add('iso')
  korttiPakka.classList.remove('keski')
  korttiPakka.classList.remove('pieni')
  korttiPakka.innerHTML = ``
  luoKortit('iso')
  matchedKortit = []
})

luoKortit()


function shuffle(src) {
  const copy = [...src]

  const length = copy.length
  for (let i = 0; i < length; i++) {
    const x = copy[i]
    const y = Math.floor(Math.random() * length)
    const z = copy[y]
    copy[i] = z
    copy[y] = x
  }

  return copy
}
