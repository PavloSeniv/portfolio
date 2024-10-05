export function sendCustomFormToPost() {

    document.getElementById("myForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Запобігаємо стандартній поведінці форми

        // Збираємо дані з форми
        const formData = new FormData(this);

        // Відправляємо форму через fetch
        fetch("https://script.google.com/macros/s/AKfycbzpxb6Ysi-DUhdg3C1Kma6FrNF_cJWAkxCR-059Gib5fXYnuvkXkRyTkuCosNfFMr3X/exec", {
            method: "POST",
            body: formData,
        })
            .then(response => response.text())
            .then(data => {
                // Відображаємо повідомлення про успішну відправку
                const responseMessage = document.getElementById("responseMessage");
                responseMessage.style.display = "block";

                // Приховуємо форму
                document.getElementById("myForm").style.display = "none";

                // Прибираємо повідомлення через 15 секунд
                setTimeout(() => {
                    responseMessage.style.display = "none";
                    document.getElementById("myForm").style.display = "block";
                    document.getElementById("myForm").reset(); // Очищуємо форму
                }, 15000);
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Something went wrong! Try again.');
            });
    });
}
