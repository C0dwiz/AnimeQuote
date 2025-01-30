const quoteButton = document.querySelector('.quote-button');
const animeElement = document.querySelector('.anime-title');
const characterElement = document.querySelector('.character-name');
const quoteElement = document.querySelector('.quote-text');
const quoteArea = document.querySelector('.quote-area');

async function fetchQuote() {
    const loadingElement = document.createElement('p');
    loadingElement.classList.add('loading');
    loadingElement.innerText = 'Загрузка...';

    animeElement.innerText = '';
    characterElement.innerText = '';
    quoteElement.innerText = '';
    quoteArea.appendChild(loadingElement);
    try {
        const url = "https://animechan.io/api/v1/quotes/random";
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        const quoteContent = data.data.content;
        const characterName = data.data.character.name;
        const animeName = data.data.anime.name;

        animeElement.innerText = animeName;
        characterElement.innerText = characterName;
        quoteElement.innerText = quoteContent;
        loadingElement.remove();

    } catch (error) {
        handleError(error);
    }
}

function handleError(error) {
    console.error(`Ошибка при загрузке цитаты: ${error}`);
    animeElement.innerText = 'Ошибка загрузки цитаты';
    characterElement.innerText = '';
    quoteElement.innerText = '';
    const loadingElement = quoteArea.querySelector('.loading');
    if (loadingElement) {
        loadingElement.remove();
    }
}

quoteButton.addEventListener('click', fetchQuote);

fetchQuote();