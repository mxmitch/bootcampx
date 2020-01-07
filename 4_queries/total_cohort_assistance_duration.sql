SELECT cohort.name, sum(completed_at - started_at) as total_duration
FROM assistance_requests 
JOIN students ON students.id = assistance_requests.student_id
JOIN cohort ON cohort.id = cohort_id
GROUP BY cohort.name
ORDER BY total_duration;