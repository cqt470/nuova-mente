class Links{
    constructor(){

    }

    run(){
        document.querySelectorAll("[redirect]").forEach(element => {
            element.addEventListener("click", (ev) => this.#catch_click(ev, element));
        })
    }

    /**
     * @param {PointerEvent} click
     * @param {Element} element
     */
    #catch_click(click, element){
        const page = element.getAttribute("redirect");
        window.location = page;
    }
}

const links = new Links()

export {links, Links}