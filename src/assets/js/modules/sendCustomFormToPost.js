import Filter from "bad-words";

const ENDPOINT =
    "https://script.google.com/macros/s/AKfycbzpxb6Ysi-DUhdg3C1Kma6FrNF_cJWAkxCR-059Gib5fXYnuvkXkRyTkuCosNfFMr3X/exec";

export function sendCustomFormToPost() {
    const form = document.getElementById("myForm");
    if (!form) return; // форма є лише на головній сторінці

    const responseEl = document.getElementById("responseMessage");
    const submitBtn = form.querySelector('button[type="submit"]');
    const filter = new Filter();

    const showResponse = (text, ok) => {
        if (!responseEl) return;
        responseEl.textContent = text;
        responseEl.className =
            "contact__response " +
            (ok ? "contact__response--success" : "contact__response--error");
        responseEl.style.display = "block";
    };

    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        // Honeypot: боти заповнюють приховане поле — тихо ігноруємо
        if (form.website && form.website.value.trim() !== "") return;

        // Фільтр лайки (тепер реально блокує відправку)
        const message = form.message ? form.message.value : "";
        if (message && filter.isProfane(message)) {
            showResponse("Please remove profanity from your message.", false);
            return;
        }

        if (submitBtn) submitBtn.disabled = true;

        try {
            const res = await fetch(ENDPOINT, {
                method: "POST",
                body: new FormData(form),
            });
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
