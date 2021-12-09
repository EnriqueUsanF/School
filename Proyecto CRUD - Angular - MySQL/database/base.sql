CREATE DATABASE proyecto_segundo_parcial;
USE proyecto_segundo_parcial;

CREATE TABLE asignatura(
    codigo INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(30),
    creditos INT,
    horas INT,
    horaRegistro TIME
);

CREATE TABLE alumno(
    cuenta INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(30),
    paterno VARCHAR(30),
    fechaNacimiento DATE,
    sexo VARCHAR(30),
    edad INT,
    celular BIGINT,
    codigo INT,
    FOREIGN KEY(codigo) REFERENCES
    asignatura(codigo) ON DELETE CASCADE ON UPDATE CASCADE
);
