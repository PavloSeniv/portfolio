import Filter from "bad-words";

const ENDPOINT =
    "https://script.google.com/macros/s/AKfycbzpxb6Ysi-DUhdg3C1Kma6FrNF_cJWAkxCR-059Gib5fXYnuvkXkRyTkuCosNfFMr3X/exec";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Показ / прибирання помилки під конкретним полем (кастомна валідація замість браузерної)
function setFieldError(input, message) {
    const field = input.closest(".contact__form-field");
    if (!field) return !message;
    let errEl = field.querySelector(".contact__form-error");
    if (message) {
        input.classList.add("contact__form-input--error");
        input.setAttribute("aria-invalid", "true");
        if (!errEl) {
            errEl = document.createElement("small");
            errEl.className = "contact__form-error";
            field.appendChild(errEl);
        }
        errEl.textContent = message;
        return false;
    }
    input.classList.remove("contact__form-input--error");
    input.removeAttribute("aria-invalid");
    if (errEl) errEl.remove();
    return true;
}

export function sendCustomFormToPost() {
    const form = document.getElementById("myForm");
    if (!form) return; // форма є лише на головній сторінці

    const responseEl = document.getElementById("responseMessage");
    const submitBtn = form.querySelector('button[type="submit"]');
    const filter = new Filter();

    const name = form.querySelector("#name");
    const email = form.querySelector("#email");
    const message = form.querySelector("#message");

    const showResponse = (text, ok) => {
        if (!responseEl) return;
        responseEl.textContent = text;
        responseEl.className =
            "contact__response " +
            (ok ? "contact__response--success" : "contact__response--error");
        responseEl.style.display = "block";
    };

    const validate = () => {
        const okName = setFieldError(name, name.value.trim() ? "" : "Please enter your name.");
        const okEmail = setFieldError(
            email,
            EMAIL_RE.test(email.value.trim()) ? "" : "Please enter a valid email address."
        );
        const okMsg = setFieldError(message, message.value.trim() ? "" : "Please enter a message.");
        return okName && okEmail && okMsg;
    };

    // Прибираємо помилку поля, щойно користувач починає його виправляти
    [name, email, message].forEach((el) => {
        if (el) el.addEventListener("input", () => setFieldError(el, ""));
    });

    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        // Honeypot: боти заповнюють приховане поле — тихо ігноруємо
        if (form.website && form.website.value.trim() !== "") return;

        // Кастомна валідація полів
        if (!validate()) {
            const firstInvalid = form.querySelector(".contact__form-input--error");
            if (firstInvalid) firstInvalid.focus();
            return;
        }

        // Фільтр лайки
        if (message.value && filter.isProfane(message.value)) {
            setFieldError(message, "Please remove profanity from your message.");
            message.focus();
            return;
        }

        if (submitBtn) submitBtn.disabled = true;

        try {
            const res = await fetch(ENDPOINT, {method: "POST", body: new FormData(form)});
            if (!res.ok) throw new Error("HTTP " + res.status);

            form.style.display = "none";
            showResponse("The form has been sent!", true);

            setTimeout(() => {
                if (responseEl) responseEl.style.display = "none";
                form.style.display = "block";
                form.reset();
            }, 15000);
        } catch (err) {
            console.error("Form submit failed:", err);
            showResponse("Something went wrong. Please try again.", false);
        } finally {
            if (submitBtn) submitBtn.disabled = false;
        }
    });
}
