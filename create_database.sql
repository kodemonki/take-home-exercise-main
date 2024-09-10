ATTACH DATABASE 'database.db' AS db;

CREATE TABLE IF NOT EXISTS db.Media (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    year TEXT,
    poster TEXT,
    genre TEXT,
    type TEXT
);

INSERT INTO db.Media (title, year, poster, genre, type)
VALUES (
    'Raiders of the Lost Ark',
    '1981',
    'https://ia.media-imdb.com/images/M/MV5BMjA0ODEzMTc1Nl5BMl5BanBnXkFtZTcwODM2MjAxNA@@._V1_SY1000_CR0,0,664,1000_AL_.jpg',
    'action, adventure',
    'movie'
);
