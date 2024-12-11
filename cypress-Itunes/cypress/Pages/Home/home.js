

//Se parametris los objetos para que se puedan reutilizar en distintos metodos que lo neseciten 
const inputIngresarNombre = '.form-control'
const btnBuscar = '.btn'

class homePage {

    //Metodo para poder ingresar al home
    ingresarHome(){

        //Se ingresa '/' ya que la URL esta definida en la variables de entorno en el archivo cypress.config.js
        cy.visit('/')
        //Se valdia que un elemento de la pagina web se visualize con un assert que es el .should('be.visible') 
        //El timeout lo agrego para indicar cuanto tiempo de espera en milisegundos tiene que esperar por el elmentos
        cy.get(inputIngresarNombre, {timeout: 10000}).should('be.visible');
    }

    ingresarTexto(){

        //Se llama una variable de dato para metrizable del archivo cypress.env.json
        const banda = Cypress.env('bandaBuscar')
        //Con .should('have.value', banda['nombreBanda'].banda1) valido de que el texto fue escrito correctamente
        cy.get(inputIngresarNombre).type(banda['nombreBanda'].banda1).should('have.value', banda['nombreBanda'].banda1);
    }

    ingresarTextoSimbolos(){
        
        //Se llama una variable de dato para metrizable del archivo cypress.env.json
        const banda = Cypress.env('bandaBuscar');
        //con .should('have.value', banda['nombreBanda'].banda2) valido de que el texto fue escrito correctamente
        cy.get(inputIngresarNombre).type(banda['nombreBanda'].banda2).should('have.value', banda['nombreBanda'].banda2);
    }
    
    ingresarTexotExacto(){
        //Se llama una variable de dato para metrizable del archivo cypress.env.json
        const banda = Cypress.env('bandaBuscar');
        //con .should('have.value', banda['nombreBanda'].banda3) valido de que el texto fue escrito correctamente
        cy.get(inputIngresarNombre).type(banda['nombreBanda'].banda3).should('have.value', banda['nombreBanda'].banda3);
    }

    clicBotonBuscar(){

        //Se intercepta la solicitud 
        cy.intercept('GET', 'https://itunes.apple.com/search_tracks?name=Radiohead').as('buttonRequest');
        //Se hace clic en el boton buscar
        cy.get(btnBuscar).click();
        cy.wait('@buttonRequest').its('response.statusCode')//Se espera la solicitud
        .should('eq', 200)//Verifica que la respuesta sea exitosa
        
    }
}

const HomePage = new homePage()
export default HomePage;