export default function groceriesList() {
  // Créer une nouvelle Map pour stocker les articles de course
  const groceries = new Map();

  // Ajouter des articles avec leurs quantités à la Map
  groceries.set('Apples', 10);
  groceries.set('Tomatoes', 10);
  groceries.set('Pasta', 1);
  groceries.set('Rice', 1);
  groceries.set('Banana', 5);

  return groceries;
}
