export default function updateStudentGradeByCity(students, city, newGrades) {
  // Filtrer les étudiants par ville
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      // Trouver la nouvelle note de l'étudiant
      const gradeObj = newGrades.find((grade) => grade.studentId === student.id);
      // Retourner l'étudiant avec la nouvelle note, ou "N/A" si pas de note trouvée
      return {
        ...student,
        grade: gradeObj ? gradeObj.grade : 'N/A',
      };
    });
}
