export default function handleResponseFromAPI(promise) {
  // retourne la promesse
  return promise
    .then(() => ({ status: 200, body: 'success' }))
  // Cette méthode est utilisée pour gérer la résolution de la promesse.
  // Si la promesse est résolue avec succès
  // nous retournons un objet avec status: 200 et body: 'success'
    .catch(() => Error())
  // Cette méthode est utilisée pour gérer le rejet de la promesse.
  // Si la promesse est rejetée, nous retournons un objet d'erreur vide.
    .finally(() => console.log('Got a response from the API'));
  // Cette méthode est exécutée après que la promesse soit résolue ou rejetée, peu importe l'issue.
  // Cela garantit que le message "Got a response from the API" est toujours affiché
  // dans la console après la résolution ou le rejet de la promesse
}
