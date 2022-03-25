var express = require("express");
var router = express.Router();

const generateRandomDate = (start = new Date(), end = new Date()) => {
  if (!start || !end) return new Date();

  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
};

const tasks = new Array(30)
  .fill({
    id: null,
    text: "Todo Item"
  })
  .map((item, index) => ({
    ...item,
    id: Math.random(),
    text: `${item.text} ${index + 1}`,
    createdAt: generateRandomDate(new Date(2022, 2, 1)),
    isDone: Math.random() * 10 > 5
  }));

const response = {
  tasks
};

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.type("json");
  res.send(JSON.stringify(response));
});

module.exports = router;
