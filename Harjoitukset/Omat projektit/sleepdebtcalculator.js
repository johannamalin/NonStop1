const getSleepHours = day => {

  switch(day) {
    case 'maanantai':
    return 9
    break;
    case 'tiistai':
    return 7
    break;
    case 'keskiviikko':
    return 6
    break;
    case 'torstai':
    return 8
    break;
    case 'perjantai':
    return 10
    break;
    case 'lauantai':
    return 7
    break;
    case 'sunnuntai':
    return 9
    break;

    default:
    return "Error!"
  }
};

//testi tiettyyn päivään
//console.log(getSleepHours('maanantai'));

const getActualSleepHours = () => {
  return getSleepHours('maanantai') +
  getSleepHours('tiistai') +
  getSleepHours('keskiviikko') +
  getSleepHours('torstai') +
  getSleepHours('perjantai') +
  getSleepHours('lauantai') +
  getSleepHours('sunnuntai')
};

// viikon tunnit nukuttuna
//console.log(getActualSleepHours());

const getIdealSleepHours = () => {
 let idealHours = 8;
 return idealHours * 7;
};

const calculateSleepDept = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();

  if (actualSleepHours === idealSleepHours)
  {
    console.log("You've got the perfect amount of sleep!")
  }

  else if (actualSleepHours > idealSleepHours) {
    console.log("You've got more " + (idealSleepHours - actualSleepHours) + " more hours of sleep this week.");
  }

  else if (actualSleepHours < idealSleepHours) {
    console.log("Get some rest because you've slept " (idealSleepHours - actualSleepHours) + " hours less than you should have this week.");
  }
  else {
    console.log("Error! beep boop")
  }
};

calculateSleepDept();
