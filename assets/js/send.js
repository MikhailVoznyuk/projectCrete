document.addEventListener("DOMContentLoaded", () => {
    const ajaxSend = async (formData) => {
        const response = await fetch("mail.php", {
            method: "POST",
            body: formData
        });
        return await response.text();
    };
    if (document.querySelector(".book-form")) {
       
        form.addEventListener("submit", function(e) {
            e.preventDefault();
            const formData = new FormData(this);

            ajaxSend(formData)
                .then((response) => {
                    form.classList.add('hide');
                    modalBackground.classList.add('hide');
                    successSubmit.classList.add('show');
                    form.reset()
                })
        });
        
    }
});

