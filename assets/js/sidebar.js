let button = document.querySelector("#nav-icon");
let canvas = document.querySelector("#side-bar");



button.addEventListener( 'click', () => {
    button.classList.toggle("open")
    if (canvas.classList.contains('show')) {
        console.log(1);
        canvas.classList.remove('show');
        canvas.classList.add('hide');
    } else {

        console.log(0);
        canvas.classList.remove("hide");
        canvas.classList.add('show');
    }
}
)
