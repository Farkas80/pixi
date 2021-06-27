/**
 * 
 * @param {number} id lorem ipsum
 * @param {number} left 
 * @param {number} top 
 */

const placePicture = (id, left, top) => {
    console.log(id, left, top)
};

const placeBackground = (left, top) => {
    
};

const draw = (idArray, size) => {
idArray.forEach( (id ,index) => {
    const left = index % size;
    const top = Math.floor(index / size);     
    placePicture(id, left, top);
   }) 
};

const pixiInit = (domId) => {


    let type = "WebGL"
    if (!PIXI.utils.isWebGLSupported()) {
        type = "canvas"
    }
    PIXI.utils.sayHello(type)
    //Create a PIXI application
    /*let app = new PIXI.Application({
        width: 1024,
        height: 768,
        backgroundColor: 0xff0000,
        resizeTo: document.body
    });

    document.body.appendChild(app.view); */
    let pixi_element = document.getElementById(domId);
    let app = new PIXI.Application({
        backgroundColor: 0xbada55,
        resizeTo: pixi_element
    });

    pixi_element.appendChild(app.view);
    //Add canvas that Pixi will automatically create to HTML
    return app;
}

const createImage = (imageId, imageSize) => {
    const icon = new PIXI.Sprite.from(`assets/images/icon${imageId}.png`);
        icon.width = imageSize;
        icon.height = imageSize;
        return icon;
}

const createBackground = (imageSize) => {
    const icon = new PIXI.Sprite.from("assets/images/background.jpg");
        icon.width = imageSize;
        icon.height = imageSize;
        return icon;
}





