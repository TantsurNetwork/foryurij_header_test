// Загружаем модуль http
const http = require('http');
const fs = require('fs')


// Создаем web-сервер с обработчиком запросов
const server = http.createServer((req, res) => {
    if (req.url === '/img/logo.png')
        res.end(fs.readFileSync('img/logo.png'));
    else if (req.url === '/img/main-banner2.jpg')
        res.end(fs.readFileSync('img/main-banner2.jpg'));
    else if (req.url === '/img/burger.png')
        res.end(fs.readFileSync('img/burger.png'));
    else
        res.end(fs.readFileSync('index.html', 'utf8'));
});

// Запускаем web-сервер
server.listen(process.env.PORT || 3000);
