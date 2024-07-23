export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    // si c'est vrai la promesse est excécuté
    if (success) {
      resolve({ status: 200, body: 'Success' });
      // si c'est faux la promesse est refusé
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });
}
