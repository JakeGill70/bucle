-- Database: bucle

-- DROP DATABASE bucle;

CREATE DATABASE bucle
    WITH 
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'English_United States.1252'
    LC_CTYPE = 'English_United States.1252'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;

COMMENT ON DATABASE bucle
    IS 'Development SQL server for online agenda and meeting management webapp - BUCLE.';