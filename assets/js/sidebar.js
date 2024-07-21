let button = document.querySelector("#nav-icon");
let canvas = document.querySelector("#side-bar");
let header = document.querySelector(".primary-header-main");



button.addEventListener( 'click', () => {
    button.classList.toggle("open")
    if (canvas.classList.contains('show')) {
        canvas.classList.remove('show');
        canvas.classList.add('hide');
        if (header && !header.classList.contains("primary-header-main")) {
            header.classList.add("primary-header-main");
        }
    } else {

        console.log(0);
        canvas.classList.remove("hide");
        canvas.classList.add('show');
        if (header) {
            header.classList.remove("primary-header-main");
        }
        
    }
}
)
