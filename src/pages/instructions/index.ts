import "../../router";

export function initInstructionsPage(){
    const div = document.createElement("div");
   
    div.innerHTML = `
    <p>Presioná jugar
    y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.</p>
    `;

    return div;
}