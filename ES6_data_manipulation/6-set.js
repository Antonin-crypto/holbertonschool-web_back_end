export default function setFromArray(array) {
  // Crée et retourne un nouvel ensemble (Set) contenant les éléments du tableau donné.
  // Les doublons dans le tableau sont automatiquement supprimés
  // Car un Set ne peut contenir que des valeurs uniques.
  return new Set(array);
}
