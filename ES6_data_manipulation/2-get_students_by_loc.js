export default function getStudentsByLocation(student, city) {
  // Vérifier si l'argument est un tableau
  if (!Array.isArray(student)) {
    return [];
  }
  // la fonction filter pour sélectionner les étudiants dans la ville spécifiée
  return student.filter((student) => student.location === city);
}
