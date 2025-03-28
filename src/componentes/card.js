class Card extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    static get observedAttributes() {
        return ["id", "destino", "duracion", "costo", "descripcion", "actividades", "calificacion", "alojamiento"];
    }

    attributeChangedCallback() {
        this.render();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        const id = this.getAttribute("id") || "Título de la Noticia";
        const fecha = this.getAttribute("fecha") || "Fecha no disponible";
        const descripcion = this.getAttribute("descripcion") || "Descripción breve de la noticia.";
        const autor = this.getAttribute("autor") || "Autor desconocido";
        const imagenPerfil = this.getAttribute("imagen-perfil") || "https://source.unsplash.com/100x100/?person";

        this.shadowRoot.innerHTML = `
            <style>
                .tarjeta-noticia {
                    width: 450px;
                    height: 250px;
                    margin: 5px;
                    padding: 10px;
                    
                    border-radius: 10px;
                    overflow: hidden;
                    box-shadow: 4px 4px 15px rgba(0, 188, 125, 0.56);
                    transition: transform 0.3s ease-in-out;
                    background: rgba(197, 193, 193, 0.71); 
                }
                .tarjeta-noticia:hover {
                    transform: scale(1.05);
                }
                .contenido-noticia {
                    padding: 15px;
                }
                .contenido-noticia h2 {
                    font-size: 1.2em;
                    margin: 0;
                    color: #ffff;
                }
                .contenido-noticia p {
                    font-size: 0.9em;
                    color: #000;
                    margin: 10px 0;
                }
                .fecha-noticia {
                    font-size: 0.8em;
                    color: #999;
                    margin-bottom: 10px;
                }
                .autor-noticia {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                }
                .autor-noticia img {
                    width: 30px;
                    height: 30px;
                    border-radius: 50%;
                    padding: 15px;
                }
            </style>
            <div class="tarjeta-noticia">
                <div class="contenido-noticia">
                    <h2>${titulo}</h2>
                    <p class="fecha-noticia">Publicado el: ${fecha}</p>
                    <p>${descripcion}</p>
                </div>
                <div class="autor-noticia">
                    <img src="${imagenPerfil}" alt="Autor">
                    <span>${autor}</span>
                </div>
            </div>
        `;
    }
}


export default Card;