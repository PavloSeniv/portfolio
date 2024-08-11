"use strict"

export function filterBadWords() {
    import Filter from 'bad-words';

    // Ініціалізація фільтра
    const filter = new Filter();

    // Додавання слухача подій до форми
    document.getElementById('myForm').addEventListener('submit', function (event) {
        const textInput = document.getElementById('message').value;

        if (filter.isProfane(textInput)) {
            event.preventDefault(); // Зупинити відправлення форми
            alert('Ваша форма містить нецензурні слова. Будь ласка, виправте це.');
        }
    });
}
