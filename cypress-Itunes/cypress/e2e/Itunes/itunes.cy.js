import HomePage from "../../Pages/Home/home"

describe('Casos de pruebas buscar banda por Itunes', () => {

    //Prime Casos de pruebas
    it('Ingresar a la página http://localhost:8080/', () => {

        HomePage.ingresarHome()

    })

    //Segundo Caso de pruebas
    it('Ingresar texto en el input “ingrese nombre de la banda”', () => {
        
        HomePage.ingresarHome()
        HomePage.ingresarTexto()
    })

    //Tercer Caso de pruebas
    it('Ingresar texto en el input con números y símbolos “ingrese nombre de la banda”', () => {

        HomePage.ingresarHome()
        HomePage.ingresarTextoSimbolos()
    })

    //Cuarto Caso de prueba
    it('Buscar la banda con la palabra exacta Radiohead', () => {
        HomePage.ingresarHome()
        HomePage.ingresarTexotExacto()
        HomePage.clicBotonBuscar()
    })
})