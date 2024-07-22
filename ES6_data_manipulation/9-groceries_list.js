export default function groceriesList() {
  // Créer une nouvelle Map pour stocker les articles de course
  const groceries = new Map();

  // Ajouter des articles avec leurs quantités à la Map
  groceries.set('Apples', 10);
  groceries.set('Bananas', 5);
  groceries.set('Carrots', 7);
  groceries.set('Tomatoes', 3);
  groceries.set('Milk', 2);

  return groceries;
}
