const fs = require('fs').promises;

function countStudents(path) {
  return fs.readFile(path, 'utf8')
    .then((data) => {
      const lines = data.split('\n').filter(line => line.trim() !== '');
      if (lines.length <= 1) {
        throw new Error('Cannot load the database');
      }

      const students = {};
      const headers = lines[0].split(',');
      const fieldIndex = headers.indexOf('field');
      const firstNameIndex = headers.indexOf('firstname');

      if (fieldIndex === -1 || firstNameIndex === -1) {
        throw new Error('Cannot load the database');
      }


      lines.slice(1).forEach((line) => {
        const studentData = line.split(',');
        if (studentData.length >= headers.length) {
          const field = studentData[fieldIndex];
          const firstName = studentData[firstNameIndex];

          if (field && firstName) {
            if (!students[field]) {
              students[field] = [];
            }
            students[field].push(firstName);
          }
        }
      });

      const totalStudents = Object.values(students).reduce((sum, arr) => sum + arr.length, 0);
      console.log(`Number of students: ${totalStudents}`);

      for (const [field, names] of Object.entries(students)) {
        console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
      }
    })
    .catch(() => {
      throw new Error('Cannot load the database');
    });
}

module.exports = countStudents;
