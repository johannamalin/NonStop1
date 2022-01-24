function monthName(mon) {
   return ['Tammikuu', 'Helmikuu', 'Maaliskuu', 'Huhtikuu', 'Toukokuu', 'Kesäkuu', 'Heinäkuu', 'Elokuu', 'Syyskuu', 'Lokakuu', 'Marraskuu', 'Joulukuu'][mon - 1];
}

console.log(monthName(8)); //Numeroa vaihtamalla saat sen kuukauden.
