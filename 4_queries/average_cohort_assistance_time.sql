SELECT cohort.name, avg(completed_at - started_at) as average_assistance_time
FROM assistance_requests 
JOIN students ON students.id = assistance_requests.student_id
JOIN cohort ON cohort.id = cohort_id
GROUP BY cohort.name
ORDER BY average_assistance_time;
