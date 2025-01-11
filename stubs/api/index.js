const router = require("express").Router();

router.get("/game-page", (request, response) => {
  response.send(require("../json/gamepage/success.json"));
});

router.get("/update-like", (request, response) => {
  response.send(require("../json/gamepage/success.json"));
});

router.get("/categories", (request, response) => {
  response.send(require("../json/categories/success.json"));
});

router.get("/shopping-cart", (request, response) => {
  response.send(require("../json/shopping-cart/success.json"));
});

router.get("/home", (request, response) => {
  response.send(require("../json/home-page-data/success.json"));
});

router.get("/all-games", (request, response) => {
  response.send(require("../json/home-page-data/all-games.json"));
});


// // Маршрут для обновления лайков
// router.post("/update-like", (request, response) => {
//   const { username, likes } = request.body;

//   // Эмулируем успешное обновление лайков
//   console.log(`Лайки для пользователя ${username} обновлены до ${likes}`);

//   response.status(200).json({
//     success: true,
//     message: `Лайки для пользователя ${username} обновлены до ${likes}`,
//   });
// });


const fs = require("fs").promises;
const path = require("path");

// Path to JSON file
const commentsFilePath = path.join(__dirname, "../json/gamepage/success.json");

// Read JSON file
async function readComments() {
  const data = await fs.readFile(commentsFilePath, "utf-8");
  const parsedData = JSON.parse(data);
  console.log("Прочитанные данные:", parsedData);  // Логируем полученные данные
  return parsedData;
}
// Write to JSON file
async function writeComments(data) {
  await fs.writeFile(commentsFilePath, JSON.stringify(data, null, 2), "utf-8");
}

// Update likes route
router.post("/update-like", async (req, res) => {
  const { username, likes } = req.body;

  if (!username || likes === undefined) {
    return res.status(400).json({ success: false, message: "Invalid input" });
  }

  try {
    const data = await readComments();
    const comment = data.data.comments.find((c) => c.username === username);

    if (comment) {
      comment.likes = likes;
      await writeComments(data); // Сохраняем обновленные данные в файл

      // Возвращаем актуализированные данные
      res.status(200).json({
        success: true,
        message: "Likes updated successfully",
        data: data.data, // Возвращаем актуализированные данные
      });
    } else {
      res.status(404).json({ success: false, message: "Comment not found" });
    }
  } catch (error) {
    console.error("Error updating likes:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});


module.exports = router;
