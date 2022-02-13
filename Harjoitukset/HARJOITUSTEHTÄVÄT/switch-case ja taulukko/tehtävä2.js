function lottoArvo() {
  const result = [];

 for(let count = 0; count < 6; count++) {
   let rand;
   do {
     rand = random(0, 69);
   } while(result.includes(random))
   result.push(rand);
 }

 return result;
}
