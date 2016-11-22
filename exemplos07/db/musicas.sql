create database musicas;

create table album(
	codigo serial not null primary key,
	nome	varchar(100),
	artista varchar(100)
);

