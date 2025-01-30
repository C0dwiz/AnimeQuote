
// Получаем элементы DOM один раз для эффективности
const quoteButton = document.querySelector('button');
const animeElement = document.querySelector('h3');
const characterElement = document.querySelector('h4');
const quoteElement = document.querySelector('h2');

// Функция для загрузки цитаты асинхронно
async function fetchQuote() {
  // Обновляем текст перед запросом
  animeElement.innerText = 'Загрузка...';
  characterElement.innerText = '';
  quoteElement.innerText = '';

  try {
    // Выполняем запрос
    const response = await fetch('https://animechan.io/api/v1/quotes/random');

    // Проверяем, был ли запрос успешным
    if (!response.ok) {
      throw new Error(HTTP error! Status: ${response.status});
    }

    // Преобразуем ответ в JSON
    const quoteData = await response.json();

    // Обновляем элементы DOM с полученными данными
    animeElement.innerText = quoteData.anime; // Прямой доступ к полю "anime"
    characterElement.innerText = quoteData.character; // Прямой доступ к полю "character"
    quoteElement.innerText = quoteData.quote; // Прямой доступ к полю "quote"
  
  } catch (error) {
    // Обрабатываем ошибки запроса
    handleError(error);
  }
}

// Функция обработки ошибок
function handleError(error) {
  console.error(Ошибка при загрузке цитаты: ${error});
  animeElement.innerText = "Ошибка загрузки цитаты";
  characterElement.innerText = "";
  quoteElement.innerText = "";
}

// Назначаем обработчик событий кнопке
quoteButton.addEventListener('click', fetchQuote);
