const {
  Pool
} = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

pool.query(`
SELECT DISTINCT teachers.name as teacher, cohort.name as cohort
FROM teachers
JOIN assistance_requests ON teacher_id = teachers.id
JOIN students ON student_id = students.id
JOIN cohort ON cohort_id = cohort.id
WHERE cohort.name LIKE '%${process.argv[2]}%'
ORDER BY teacher;
`)
  .then(res => {
    console.log('connected');
    res.rows.forEach(user => {
      console.log(`${user.cohort}:${user.teacher}`);
    });
  }).catch(err => console.error('query error', err.stack));