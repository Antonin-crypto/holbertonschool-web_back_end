export default function loadBalancer(chinaDownload, USDownload) {
  // Utiliser Promise.race pour retourner la première promesse qui se résout
  return Promise.race([chinaDownload, USDownload]);
}
