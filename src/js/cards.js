class CardsHandler{
    constructor(){

    }

    run(){
        document.querySelectorAll(".card .image").forEach(img => this.#fix_image_size(img));
    }

    /**
     * @param {Element} image_container
     */
    #fix_image_size(image_container){
        const image = image_container.querySelector("img");
        
        if(image.height < image_container.clientHeight){
            image.style.height = `${image_container.clientHeight}px`;
            console.log(image)
        }
    }
}

const cards_handler = new CardsHandler()

export { CardsHandler, cards_handler };