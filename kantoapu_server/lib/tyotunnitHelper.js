const throwError = require('./throwError');

/**
 * @param {string} aloitus
 * @param {string} lopetus
 * @returns {number} työtunnit yhteensä
 */

function calculateHours(aloitus, lopetus) {
  const aloitusAika = isValidDate(new Date(aloitus));
  const lopetusAika = isValidDate(new Date(lopetus));

  const tyotunnitYhteensä = (lopetusAika - aloitusAika) / 36e5;

  if (tyotunnitYhteensä < 0.25)
    return throwError(400, 'Työaika täytyy olla vähintään 15min');

  return tyotunnitYhteensä;
}

/**
 * @param {string} aloitus
 * @param {string} lopetus
 * @param {number} peruspalkka
 * @param {boolean} pyhapaiva
 * @param {number} tauko
 * @returns {number} palkka yhteensä
 */

function calculateSalary(aloitus, lopetus, peruspalkka, pyhapaiva, tauko) {
  const aloitusAika = isValidDate(new Date(aloitus));
  const lopetusAika = isValidDate(new Date(lopetus));

  const tyotunnitYhteensä = (lopetusAika - aloitusAika) / 36e5 - tauko / 60;
  if (tyotunnitYhteensä < 0.25)
    return throwError(400, 'Työaika täytyy olla vähintään 15min');

  if (lopetusAika.getDay() === aloitusAika.getDay()) {
    if (String(pyhapaiva) === 'true')
      return (tyotunnitYhteensä * (peruspalkka * 2)).toFixed(2);
    return (
      tyotunnitYhteensä * salaryMultiplier(peruspalkka, aloitusAika).toFixed(2)
    );
  }
  return throwError(400, 'Merkkaa työtunnit erikseen jokaiselle päivälle');
}

function isValidDate(d) {
  if (d instanceof Date && !isNaN(d)) return d;
  return throwError(400, 'Päivämäärä on virheellinen');
}

function salaryMultiplier(palkka, paiva) {
  console.log(palkka);
  if (paiva.getDay() === 0) return palkka * 2;
  if (paiva.getDay() === 6) return palkka * 1.1;
  return palkka;
}

module.exports = { calculateHours, calculateSalary };
