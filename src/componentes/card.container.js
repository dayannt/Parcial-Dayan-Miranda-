import Card from "./card.js" ;
import getCards from "./getcard.js"; 

class CardContainer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    async connectedCallback() {
        this.render();
    }

    async render() {
        const cards = getCards(); 

        console.log(" Datos obtenidos de getCards():", cards); 

        this.shadowRoot.innerHTML = `
            <style>
                    :host {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 20px;
                    justify-content: center;
                    padding: 0px;
                }
                .grid-travel {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
                    gap: 20px;
                    max-width: 1200px;
                }

            </style>
            <div class="grid-travel">
                ${cards.map(card => `
                    <card-element 
                     id=""${card.id}"
                     destino=""${card.destino}"
                     duracion=""${card.duracion}"
                     costo=""${card.costo}"
                     descripcion=""${card.descripcion}"
                     actividades="${card.actividaes}"
                     reservado="${card.reservado}"
                     imagen="${card.imagen}"
                     calificacion="${card.calificacion}" 
                     alojamiento=""${card.alojamiento}
                     guia_incluido="${card["guia-incluido"]}" 

                    ></card-element>
                `).join("")}
            </div>
        `;
    }
}

customElements.define("card-container", CardContainer);
export default CardContainer;