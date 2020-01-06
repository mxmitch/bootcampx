CREATE TABLE cohort (
  id SERIAL PRIMARY KEY NOT NULL,
  name varchar(255) NOT NULL,
  start_date date,
  end_date date
);


CREATE TABLE students (
  id SERIAL PRIMARY KEY NOT NULL,
  name varchar(255) NOT NULL,
  email varchar(255),
  phone varchar(32),
  github varchar(255),
  start_date date,
  end_date date,
  cohort_id integer REFERENCES cohort(id) ON DELETE CASCADE
);

