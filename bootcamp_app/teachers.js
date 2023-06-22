const {
  Pool
} = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

const cohortName = process.argv[2];
const values = [`%${cohortName}%`];

const queryString = `
SELECT DISTINCT teachers.name as teacher, cohort.name as cohort
FROM teachers
JOIN assistance_requests ON teacher_id = teachers.id
JOIN students ON student_id = students.id
JOIN cohort ON cohort_id = cohort.id
WHERE cohort.name LIKE $1
ORDER BY teacher;
`;

pool.query(queryString, values)
  .then(res => {
    console.log('connected');
    res.rows.forEach(user => {
      console.log(`${user.cohort}:${user.teacher}`);
    });
  }).catch(err => console.error('query error', err.stack));