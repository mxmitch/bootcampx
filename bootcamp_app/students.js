const {
  Pool
} = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

// pool.query(`
// SELECT students.id as student_id, students.name as name, cohort.name as cohort
// FROM students
// JOIN cohort ON cohort.id = cohort_id
// LIMIT 5;
// `)
//   .then(res => {
//     res.rows.forEach(user => {
//       console.log(`${user.name} has an id of ${user.student_id} and was in the ${user.cohort} cohort`);
//     });
//   });

// const cohortName = process.argv.slice(2)[0];
// const limit = process.argv.slice(2)[1];

// pool.query(`
// SELECT students.id as student_id, students.name as name, cohort.name as cohort
// FROM students
// JOIN cohort ON cohort.id = cohort_id
// WHERE cohort.name = '${cohortName}'
// LIMIT ${limit};
// `)
//   .then(res => {
//     res.rows.forEach(user => {
//       console.log(`${user.name} has an id of ${user.student_id} and was in the ${user.cohort} cohort`);
//     });
//   });


pool.query(`
SELECT students.id as student_id, students.name as name, cohort.name as cohort
FROM students
JOIN cohort ON cohort.id = cohort_id
WHERE cohort.name LIKE '%${process.argv[2]}%'
LIMIT ${process.argv[3] || 5};
`)
  .then(res => {
    res.rows.forEach(user => {
      console.log(`${user.name} has an id of ${user.student_id} and was in the ${user.cohort} cohort`);
    });
  }).catch(err => console.error('query error', err.stack));