SELECT students.name, cohort.name, cohort.start_date AS  cohort_start_date, students.start_date AS student_start_date
FROM students
JOIN cohort ON cohort_id = cohort.cohort_id
WHERE cohort.start_date != students.start_date;
