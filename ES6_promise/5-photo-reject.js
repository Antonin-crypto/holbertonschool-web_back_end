export default function uploadPhoto(filename) {
  // return a Promise rejecting with an Error and the string $fileName cannot be processed
  return Promise.reject(new Error(`${filename} cannot be processed`));
}
