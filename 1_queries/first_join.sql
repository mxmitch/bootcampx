SELECT students.name as student_name, email, cohort.name as cohort_name
FROM students FULL OUTER JOIN cohort ON cohort.id = cohort_id;
