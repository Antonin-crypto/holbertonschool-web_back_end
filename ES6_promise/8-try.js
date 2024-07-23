export default function divideFunction(numerator, denominator) {
  // Vérifier si le dénominateur est égal à 0
  if (denominator === 0) {
    // Lever une nouvelle erreur avec un message spécifique
    throw new Error('cannot divide by 0');
  }
  // Retourner le résultat de la division
  return numerator / denominator;
}
