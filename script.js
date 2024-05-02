// Проектирование игры
// 1. Создай страницу игры с картинкой – карта сокровищ и местом, куда будут выводиться сообщение для игрока.
// 2. Выбрать на карте случайную точку где спрятан клад.
// 3. Создать обработчик кликов каждый раз когда игрок кликает по карте обработчик кликов должен:
// — увеличивать счётчик кликов на 1
// — вычислить насколько далеко место клика от места где спрятан клад.
// — отобразить на странице сообщения для игрока горячо или холодно.
// — поздравить игрока если он кликнул по укладу или вблизи и сообщить сколько криков условно поиске

$(document).ready(function () {
  // Задаем координаты клада
  let width = 400;
  let height = 400;
  let clicks = 0;

  let target = {
    x: getRandomNumber(width),
    y: getRandomNumber(height),
  };

  // Получение случайных значений
  function getRandomNumber(size) {
    return Math.floor(Math.random() * size);
  }

  // Вычисляем расстояние от клирика до клада
  function getDistance(event, target) {
    let diffX = event.offsetX - target.x;
    let diffY = event.offsetY - target.y;
    return Math.sqrt(diffX * diffX + diffY * diffY);
  }

  // Сообщаем игроку насколько он близок к цели
  function getDistanceHint(distance) {
    if (distance < 10) {
      return "Fire";
    } else if (distance < 20) {
      return "Very hot";
    } else if (distance < 40) {
      return "Hot";
    } else if (distance < 80) {
      return "Warm";
    } else if (distance < 160) {
      return "Cold";
    } else if (distance < 320) {
      return "Very Cold";
    } else {
      return "Iceberg";
    }
  }

  // Обработчик кликов
  $("#map").click(function (event) {
    clicks++;
    let distance = getDistance(event, target);
    let distanceHint = getDistanceHint(distance);
    $("#distance").text(distanceHint);

    if (distance < 8) {
      alert("Treasure is here! Clicks made: " + clicks);
      // Optionally reset the game or make further UI updates here
    }
  });
});
