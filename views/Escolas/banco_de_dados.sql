DROP DATABASE CRI;
create database CRI;
use CRI;

create table membros (
	membros_id int auto_increment,
    nome varchar(100) NOT NULL,
	turma varchar(10),
	telefone int(9) NOT NULL,
	email varchar(100) NOT NULL,
    escola varchar(100),
	matricula varchar (10),
	cargo varchar (20),
	PRIMARY KEY(membros_id)
);

CREATE TABLE cargos (
    cargos_id INT AUTO_INCREMENT,
	membros_id int,
    presidente VARCHAR(45) NOT NULL,
    vice_presidente VARCHAR(45) NOT NULL,
    financeiro VARCHAR(45),
    comunicacao VARCHAR(45),
    designer VARCHAR(45),
    PRIMARY KEY (cargos_id),
    FOREIGN KEY (membros_id)
        REFERENCES membros (membros_id)
);


create table escolas (
	escolas_id int auto_increment,
	escola varchar(100) NOT NULL,
	endereco varchar(100),
	PRIMARY KEY(escolas_id)
);

create table orgaos (
	orgaos_id int auto_increment,
    CDH varchar(100),
    CNUDH varchar(100),
    ACNUR varchar(100),
    CSNU varchar(100),
    OEA varchar(100),
    OMS varchar(100),
    AC varchar(100),
    Gabinete varchar(100),
    PRIMARY KEY(orgaos_id)
);

create table comites (
	comites_id int auto_increment,
    delegados varchar(45),
    temas varchar(45),
    mesas varchar(45),
	escolas_id int not null,
	orgaos_id int not null,
    PRIMARY KEY(comites_id),
    FOREIGN KEY(escolas_id) REFERENCES escolas(escolas_id),
    FOREIGN KEY(orgaos_id) REFERENCES orgaos(orgaos_id)
);

create table alunos (
	alunos_id int auto_increment,
	nome varchar(100),
	turma varchar(30),
	telefone int(9),
	email varchar(100),
	curso varchar(100) NULL,
	endereco varchar(100),
	matricula varchar (10),
	ano int,
	escola varchar(100),
	escolas_id int not null,
	comites_id int not null,
	PRIMARY KEY(alunos_id),
    FOREIGN KEY(comites_id) REFERENCES comites(comites_id)
);

create table evento(
	id int auto_increment,
	nome varchar(100) NOT NULL,
	telefone int(9) NOT NULL,
	delegacao varchar(100) NOT NULL,
	justificativa varchar(100) NOT NULL,
	comites_id int not null,
	tipo enum("tib","mifres"),
	ano varchar(4),
	escolas_id int,
	PRIMARY KEY(id),
    FOREIGN KEY(comites_id) REFERENCES comites(comites_id),
	FOREIGN KEY(escolas_id) REFERENCES escolas(escolas_id)
);

create table alunosTIB(
	alunos_id int auto_increment,
    comites_id int,
	nome varchar(100) not null,
	turma varchar(30),
	telefone int(9) not null,
	matricula varchar (10) not null,
	email varchar(100),
	comite varchar (100) not null,
	delegacao  varchar (100) not null,
	PRIMARY KEY(alunos_id),
    FOREIGN KEY(comites_id) REFERENCES comites(comites_id)
);

create table alunosMIFRES (
	alunos_id int auto_increment,
    comites_id int,
	nome varchar(100),
	cpf int (11) not null,
	telefone int(9) not null,
	email varchar(100) not null,
	endereco varchar(100),
	escola varchar(100),
	escolas_id int not null,
	comite varchar (100) not null,
	delegacao  varchar (100) not null,
	PRIMARY KEY(alunos_id),
    FOREIGN KEY(escolas_id) REFERENCES escolas(escolas_id),
    FOREIGN KEY(comites_id) REFERENCES comites(comites_id)
);

INSERT INTO alunos (nome,turma,telefone,email,curso,ano,escola,matricula,endereco) VALUES ('eduardo','421',91840078,'10160099@restinga','lazer','rua alberto hoffman','10160099','2023','if');

CREATE USER 'root'@'localhost' IDENTIFIED BY '';
GRANT ALL PRIVILEGES ON *.* TO 'root'@'localhost';
FLUSH PRIVILEGES;


