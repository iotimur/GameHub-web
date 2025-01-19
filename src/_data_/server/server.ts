const express = require('express');
const fs = require('fs');
const app = express();
app.use(express.json());

// Путь к файлу с комментариями
const commentsFilePath = "../../../stubs/json/gamepage/success.json";

// Функция для чтения данных из JSON файла
const readCommentsFromFile = () => {
  const data = fs.readFileSync(commentsFilePath, 'utf8');
  return JSON.parse(data);
};

// Функция для записи данных в JSON файл
const writeCommentsToFile = (comments) => {
  const data = JSON.stringify({ success: true, data: { comments } }, null, 2);
  fs.writeFileSync(commentsFilePath, data, 'utf8');
};

// Эндпоинт для получения всех комментариев
app.get('/comments', (req, res) => {
  const { comments } = readCommentsFromFile().data;
  res.status(200).send({ success: true, data: comments });
});

// Эндпоинт для добавления нового комментария
app.post('/add-comment', (req, res) => {
  const { username, text, rating } = req.body;

  // Проверка на наличие всех необходимых данных
  if (!username || !text || !rating) {
    return res.status(400).send({ success: false, message: 'Missing required fields' });
  }

  // Чтение текущих комментариев из файла
  const { comments } = readCommentsFromFile().data;

  // Создаем новый комментарий
  const newComment = {
    username,
    text,
    likes: 0, // Изначально лайков 0
    rating,
    date: new Date().toISOString(), // Текущая дата
  };

  // Добавляем комментарий в хранилище
  comments.push(newComment);

  // Записываем обновленные данные в файл
  writeCommentsToFile(comments);

  res.status(200).send({ success: true, data: newComment });
});

// Эндпоинт для обновления лайков
app.post('/update-like', (req, res) => {
  const { username, likes } = req.body;

  // Чтение текущих комментариев из файла
  const { comments } = readCommentsFromFile().data;

  const comment = comments.find(c => c.username === username);
  if (comment) {
    comment.likes = likes;

    // Записываем обновленные данные в файл
    writeCommentsToFile(comments);

    res.status(200).send({ success: true });
  } else {
    res.status(404).send({ success: false, message: 'Comment not found' });
  }
});

app.listen(8099, () => {
    console.log('Server is running on http://localhost:8099');
  });
  
