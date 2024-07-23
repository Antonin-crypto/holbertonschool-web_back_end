export default function guardrail(mathFunction) {
  // Créer le tableau queue
  const queue = [];

  try {
    // Exécuter mathFunction et ajouter le résultat à fin du résultat
    const result = mathFunction();
    queue.push(result);
  } catch (error) {
    // En cas d'erreur, ajouter le message d'erreur à la fin du résultat
    queue.push(error.message);
  } finally {
    // Ajouter le message final à la fin du résultat
    queue.push('Guardrail was processed');
  }
  // Retourner le tableau à la fin
  return queue;
}
