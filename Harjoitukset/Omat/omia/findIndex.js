const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

//ettii tietyn sanan
const foundAnimal = animals.findIndex (animal => {
  return animal == 'elephant';
})

console.log(foundAnimal)

//ettii s alkavalla
const startsWithS = animals.findIndex (animal => {
  return animal[0] === 's';
})

console.log(startsWithS)
