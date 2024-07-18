/**
 * Calculates the user's sleep debt by comparing their actual sleep hours to the ideal sleep hours.
 * 
 * The function prompts the user to enter their sleep hours for each day of the week, calculates the total actual sleep hours,
 * and compares it to the ideal sleep hours. It then outputs whether the user has the perfect amount of sleep, slept too much,
 * or needs to catch up on sleep.
 */


const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const sleepHours = {};

function getSleepHoursInput(day) {
  return new Promise((resolve) => {
    rl.question(`Enter sleep hours for ${day}: `, (hours) => {
      sleepHours[day] = parseFloat(hours);
      resolve();
    });
  });
}

async function getActualSleepHours() {
  for (const day of daysOfWeek) {
    await getSleepHoursInput(day);
  }
  return Object.values(sleepHours).reduce((total, hours) => total + hours, 0);
}

const getIdealSleepHours = () => {
  const idealHours = 8;
  return idealHours * 7;
}

const calculateSleepDebt = async () => {
  const actualSleepHours = await getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();

  console.log(`\nActual sleep hours: ${actualSleepHours}`);
  console.log(`Ideal sleep hours: ${idealSleepHours}`);

  if (actualSleepHours === idealSleepHours) {
    console.log('Perfect amount of sleep');
  } else if (actualSleepHours > idealSleepHours) {
    const diff = actualSleepHours - idealSleepHours;
    console.log(`You slept a LOT. More than required. You slept ${diff} hours extra.`);
  } else {
    const diff = idealSleepHours - actualSleepHours;
    console.log(`You need to sleep more if you want to retain your beauty and brains. You need to catch up on ${diff} hours of sleep.`);
  }

  rl.close();
}

calculateSleepDebt();
