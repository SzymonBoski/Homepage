{
    const welcome = () => {
        console.log("Cześć!");
    }

    const delteheder = () => {
        const header = document.querySelector(".header");
        header.remove();
    };

    const init = () => {
        const button = document.querySelector(".js-button");
        button.addEventListener("click", delteheder);

        welcome();

    };

    init();

};