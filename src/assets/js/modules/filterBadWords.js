import Filter from 'bad-words';

export function filterBadWords(idForm, inputSelector) {

    // Ініціалізація фільтра
    const filter = new Filter();

    // Додавання слухача подій до форми
    document.getElementById(idForm).addEventListener('submit', function (event) {
        const textInput = document.getElementById(inputSelector).value;

        if (filter.isProfane(textInput)) {
            event.preventDefault(); // Зупинити відправлення форми
            alert('Your form contains profanity. Please fix this.');
        }
    });
}
