CREATE DATABASE time
use time
CREATE TABLE info
(
  codigo serial NOT NULL,
  nome character varying(255),
  info character varying(500),
  CONSTRAINT info_pkey PRIMARY KEY (codigo)
)

INSERT INTO info(nome,info) VALUES('ajax','<br>Nome :	Ajax
<br>Ano de Fundação :	1900teste_ajax
<br>Cidade :	Amsterdam  ver
<br>País :	 Holanda
<br>Estádio	: Amsterdam Arena
<br>Lotação: 52380
<br><a href=''http://www.ogol.com.br/equipa.php?id=143&epoca_id=141'' target=''_blank''>Fonte</a> 
');

INSERT INTO info(nome,info) VALUES('real','<br>Nome	Real Madrid
<br>Ano de Fundação	1902
<br>Cidade	Madrid  ver
<br>País	 Espanha
<br>Estado	Comunidad de Madrid
<br>Estádio	Santiago Bernabéu
<br>Lotação: 80354
<br><a href=''http://www.ogol.com.br/equipa.php?id=50&epoca_id=141'' target=''_blank''>Fonte</a> 
    ');

    SELECT * FROM info;