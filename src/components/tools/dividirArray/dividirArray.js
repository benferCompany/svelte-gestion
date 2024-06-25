export function dividirArray(arrayOriginal, tamanoTrozo) {
    var arrayDividido = [];
    for (var i = 0; i < arrayOriginal.length; i += tamanoTrozo) {
      arrayDividido.push(arrayOriginal.slice(i, i + tamanoTrozo));
    }
    return arrayDividido;
  }