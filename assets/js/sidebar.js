
let button = document.querySelector("#nav-icon");
let canvas = document.querySelector("#side-bar");

button.addEventListener( 'click', () => {
    button.classList.toggle("open")
    body.classList.toggle("modal-opened")
    if (canvas.classList.contains('show')) {
        canvas.classList.remove('show');
        canvas.classList.add('hide');
        if (header) {
            header.classList.add("primary-header-main");
            logoImage.src="assets/media/logo_light.png";
        }
    } else {
        canvas.classList.remove("hide");
        canvas.classList.add('show');
        if (header) {
            header.classList.remove("primary-header-main");
            logoImage.src = "assets/media/logo.png";
            console.log(logoImage);
            
        }
        
    }
}
)
