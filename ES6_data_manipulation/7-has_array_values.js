export default function hasValuesFromArray(set, array) {
  // Vérifier si tous les éléments du tableau existent dans l'ensemble
  return array.every((item) => set.has(item));
}
