const puppeteer = require('puppeteer');

//Crear un navegador o browser
//Lounch es la accion de abrir el navegador
//Utilizaremos siempre promesas "await"
//Crearemos una funcion autoejecutada "async await"

(async () => {
    const browser = await puppeteer.launch({
        //headless pregunta si se va a ver el navegador o no
        headless: false,
        //viewport define el tamaño del navegador
        defaultViewport: {
            width: 1920,
            height: 1080
        },
        //args son los argumentos que se le pasan al navegador
        args: [
            '--window-size=1920,1080'
        ]
    });
    //Crearemos un nuevo elemento page para interactuar con el navegador
    const page = await browser.newPage();
    //Accedemos a la url del navegador con "goto"
    await page.goto('https://www.youtube.com');
})();