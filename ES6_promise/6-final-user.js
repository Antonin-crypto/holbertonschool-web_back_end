import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  // Utiliser await pour attendre que toutes les promesses soient résolues ou rejetées
  const result = await Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)]);
  return result.map((result) => ({
    status: result.status,
    // Mapper les résultats pour retourner un tableau avec le statut etla valeur,le message d'erreur
    value: result.status === 'fulfilled' ? result.value : `Error: ${result.reason.message}`,
  }));
}
