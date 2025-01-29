const router = require("express").Router();

router.get("/game-page", (request, response) => {
  response.send(require("../json/gamepage/success.json"));
});

router.get("/update-like", (request, response) => {
  response.send(require("../json/gamepage/success.json"));
});

router.get("/categories", (request, response) => {
  response.send(require("../json/home-page-data/all-games.json"));
});

// router.get("/shopping-cart", (request, response) => {
//   response.send(require("../json/shopping-cart/success.json"));
// });

router.get("/shopping-cart", (request, response) => {
  response.send(require("../json/home-page-data/games-in-cart.json"));
});

// Добавляем поддержку разных ответов для /home
router.get("/home", (req, res) => {
  if (stubs.home === "success") {
    res.send(require("../json/home-page-data/success.json"));
  } else if (stubs.home === "empty") {
    res.send({ data: [] }); // Отправляем пустой массив
  } else {
    res.status(500).json({ success: false, message: "Server error" });
  }
});

router.get("/all-games", (request, response) => {
  response.send(require("../json/home-page-data/all-games.json"));
});

const stubs = {
  home: "success",
};

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
  console.log("Прочитанные данные:", parsedData); // Логируем полученные данные
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

// Путь к JSON-файлу с корзиной
const cartFilePath = path.join(
  __dirname,
  "../json/home-page-data/games-in-cart.json"
);

// Функция для чтения JSON-файла
async function readCart() {
  const data = await fs.readFile(cartFilePath, "utf-8");
  return JSON.parse(data);
}

// Функция для записи в JSON-файл
async function writeCart(data) {
  await fs.writeFile(cartFilePath, JSON.stringify(data, null, 2), "utf-8");
}

// Маршрут для добавления/удаления товара в корзине
router.post("/add-to-cart", async (req, res) => {
  const { id, action } = req.body;

  // Проверка наличия id и action
  if (id === undefined || action === undefined) {
    return res
      .status(400)
      .json({ success: false, message: "Invalid id or action" });
  }

  try {
    const cartData = await readCart();
    let ids = cartData.data.ids;

    if (action === "add") {
      // Если action "add", добавляем товар, если его нет в корзине
      if (!ids.includes(id)) {
        ids.push(id);
      }
    } else if (action === "remove") {
      // Если action "remove", удаляем товар, если он есть в корзине
      if (ids.includes(id)) {
        ids = ids.filter((item) => item !== id);
      }
    } else {
      // Если action невалиден
      return res
        .status(400)
        .json({ success: false, message: "Invalid action" });
    }

    // Записываем обновленные данные обратно в файл
    cartData.data.ids = ids;
    await writeCart(cartData);

    res.status(200).json({
      success: true,
      message: "Cart updated successfully",
      data: cartData.data, // Возвращаем обновленные данные
    });
  } catch (error) {
    console.error("Error updating cart:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

module.exports = router;

const createElement = (key, value, buttonTitle) => `
    <label>
        <input name="${key}" type="radio" ${
  stubs[key] === value ? "checked" : ""
} onclick="fetch('/api/admin/set/${key}/${value}')"/>
        ${buttonTitle || value}
    </label>
`;

router.get("/admin/home", (request, response) => {
  response.send(`
        <div>
            <fieldset>
                <legend>Настройка данных для /home</legend>
                ${createElement("home", "success", "Отдать успешный ответ")}
                ${createElement("home", "empty", "Отдать пустой массив")}
                ${createElement("home", "error", "Отдать ошибку")}
            </fieldset>
        </div>    
    `);
});

router.get("/admin/set/:key/:value", (request, response) => {
  const { key, value } = request.params;
  stubs[key] = value;
  response.send("Настройки обновлены!");
});
