-- Create database
CREATE DATABASE uaslp_login;

-- Use the database
USE uaslp_login;

-- Create users table
CREATE TABLE users (
                       id INT AUTO_INCREMENT PRIMARY KEY,
                       email VARCHAR(255) NOT NULL UNIQUE,
                       password VARCHAR(255) NOT NULL,
                       role ENUM('admin', 'docente', 'estudiante') NOT NULL
);

-- Insert sample data (for testing)
INSERT INTO users (email, password, role) VALUES
                                              ('ejemplo@uaslp.mx', MD5('password123'), 'docente'),
                                              ('admin@uaslp.mx', MD5('admin123'), 'admin');