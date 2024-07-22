export default function cleanSet(set, startString) {
  // Vérifier la validité de startString
  if (!startString || typeof startString !== 'string') return '';
  // Convertir le Set en tableau
  return Array.from(set)
    // Filtrer les valeurs qui commencent par startString
    .filter((value) => typeof value === 'string' && value.startsWith(startString))
    // Extraire la partie après startString
    .map((value) => value.slice(startString.length))
    // Joindre les valeurs avec le séparateur '-'
    .join('-');
}
