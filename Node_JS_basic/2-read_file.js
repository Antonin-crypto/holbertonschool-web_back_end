const fs = require('fs');

function countStudents(path) {
    try {
        const data = fs.readFileSync(path, 'utf8');

        const lines = data.trim().split('\n');

        if (lines.length <= 1) {
            throw new Error('Cannot load the database');
        }

        const header = lines[0].split(',');

        const students = lines.slice(1).map(line => line.split(','));

        const validStudents = students.filter(student => student.length === header.length && student.join('').trim() !== '');

        console.log(`Number of students: ${validStudents.length}`);

        const fields = {};

        validStudents.forEach((student) => {

            const firstName = student[0];

            const field = student[3];

            if (!fields[field]) {
                fields[field] = [];
            }

            fields[field].push(firstName);
        });
        for (const field in fields) {
            console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
        }

    } catch (err) {
        throw new Error('Cannot load the database');
    }
}

module.exports = countStudents;
