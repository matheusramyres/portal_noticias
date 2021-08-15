CREATE TABLE noticia (
    id SERIAL NOT NULL PRIMARY KEY,
    titulo VARCHAR(100) NOT NULL,
    autor VARCHAR(30) NOT NULL,
    resumo VARCHAR NOT NULL,
    data_noticia DATE NOT NULL,
    noticia TEXT NOT NULL
)