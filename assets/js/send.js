document.addEventListener("DOMContentLoaded", () => {
    const ajaxSend = async (formData) => {
        const response = await fetch("mail.php", {
            method: "POST",
            body: formData
        });
        return await response.text();
    };
    if (document.querySelector(".book-form")) {
        const forms = document.querySelectorAll(".book-form");
        forms.forEach(form => {
            form.addEventListener("submit", function(e) {
                e.preventDefault();
                const formData = new FormData(this);

                ajaxSend(formData)
                    .then((response) => {
                        alert("Success!");
                        form.reset()
                    })
                    .catch((err) => alert("Bad"))
            });
        });
    }
});

