export default function getStudentIdsSum(students) {
  // la fonction reduce pour calculer la somme des IDs des étudiants
  return students.reduce((sum, student) => sum + student.id, 0);
}
