export default function updateUniqueItems(map) {
  // Vérifier si l'argument est une instance de Map
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }
  // Itérer sur les entrées du Map
  map.forEach((quantity, name) => {
    // Si la quantité est 1, la mettre à jour à 100
    if (quantity === 1) {
      map.set(name, 100);
    }
  });
  // Retourner le Map mis à jour
  return map;
}
