

export function stringToNumber(str : string) {
  let resultat = '';
  for (const caractere of str) {
    if (caractere >= '0' && caractere <= '9') { resultat += caractere; } // conserve les chiffres
    if (caractere === ',') { resultat += '.'} // transforme les virgules en points
  }
  return Number(resultat);
}
