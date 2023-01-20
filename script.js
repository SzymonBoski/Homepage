{
    const welcome = () => {
        console.log("Cześć!");
    };

    const delteHeder = () => {
        const header = document.querySelector(".header");

        header.remove();
    };

    const init = () => {
        const button = document.querySelector(".js-button");

        button.addEventListener("click", delteHeder);

        welcome();

    };

    init();

};