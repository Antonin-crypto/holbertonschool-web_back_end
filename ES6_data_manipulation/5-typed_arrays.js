export default function createInt8TypedArray(length, position, value) {
  // Vérifier si la position est en dehors de la plage autorisée
  if (position >= length) {
    throw Error('Position outside range');
  }
  // Créer un nouvel ArrayBuffer avec la taille spécifiée
  const token = new ArrayBuffer(length);
  // Créer un DataView pour manipuler les données du ArrayBuffer
  const dataView = new DataView(token);
  // Définir la valeur au niveau de la position spécifiée
  dataView.setInt8(position, value);
  return dataView;
}
