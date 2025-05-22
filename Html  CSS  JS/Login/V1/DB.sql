-- Create database
CREATE DATABASE uaslp;


-- Use the database
USE uaslp;


-- Create users table
CREATE TABLE users (
   id INT AUTO_INCREMENT PRIMARY KEY,
   email VARCHAR(255) NOT NULL UNIQUE,
   password VARCHAR(255) NOT NULL,
   role ENUM('admin', 'docente', 'estudiante') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


-- Insert sample data (for testing)
INSERT INTO users (email, password, role) VALUES
    ('Admin@uaslp.mx', MD5('admin'), 'admin'),
    ('Docente@uaslp.mx', MD5('docente'), 'docente'),
    ('Estudiante@uaslp.mx', MD5('estudiante'), 'estudiante');