export default function getListStudentIds(students) {
  // Vérifier si l'argument est un tableau
  if (!Array.isArray(students)) {
    return [];
  }
  // la fonction map pour extraire les IDs des étudiants
  return students.map((student) => student.id);
}
