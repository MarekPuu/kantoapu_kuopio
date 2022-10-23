/**
 * @param object values that needs to have specific value
 * @returns array of errors or null
 */

function handleReqBody(values) {
  const errors = [];
  for (const [key, value] of Object.entries(values)) {
    if (typeof value === 'undefined') {
      errors.push(`${key} has no value`);
      continue;
    }
    if (key === 'email') {
      if (!value.toLowerCase().match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
        errors.push('Sähköposti on virheellinen');
    }
    if (key === 'password') {
      if (value.length > 15) errors.push('Salasana on liian pitkä');
      if (value.length < 6) errors.push('Salasana on liian lyhyt');
    }
    if (key === 'phone') {
      // valid numbers: 0442388271 || 442388271
      if (!value.match(/^[0]{1}[0-9]{9}$/) && !value.match(/^[0-9]{9}$/))
        errors.push('Virheellinen puhelinnumero');
    }
  }
  return errors.length > 0 ? errors : null;
}

module.exports = handleReqBody;
