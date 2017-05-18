--Database Name: personal_site

CREATE TABLE contact_info (
	id SERIAL PRIMARY KEY,
	f_name VARCHAR(50) NOT NULL,
	l_name VARCHAR(50) NOT NULL,
	email VARCHAR(100) UNIQUE NOT NULL,
	city VARCHAR(50) NOT NULL,
	state VARCHAR(50) NOT NULL,
	state_abbr VARCHAR(3) NOT NULL
);

CREATE TABLE portfolio (
	id SERIAL PRIMARY KEY,
	project_name VARCHAR(100) UNIQUE NOT NULL,
	local_url VARCHAR(100) UNIQUE NOT NULL
);

CREATE TABLE portfolio_images (
	portfolio_id INT PRIMARY KEY,
	thumbnail VARCHAR(100) UNIQUE NOT NULL,
	url_array text[] UNIQUE NOT NULL;
);
