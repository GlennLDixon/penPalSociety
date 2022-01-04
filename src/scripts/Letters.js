import { getLetters, deleteLetters, getArthurs} from "./dataAccess.js";

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("request--")) {
        const [,requestId] = click.target.id.split("--")
        deleteLetters(parseInt(requestId))
    }
})


const convertRequestToListElement = (request) => {
    const arthurs = getArthurs()

    return  `
    <li>
        ${request.description}
        <select class="plumbers" id="plumbers">
        <option value="">Choose</option>
        ${
            arthurs.map(
                arthur => {
                    return `<option value="${request.id}--${arthur.id}">${arthur.name}</option>`
                }
            ).join("")
        }
        </select>
        <button class="request_delete"
            id="request--${request.id}">
            Delete
        </button>
    </li>`
}

export const Letters = () => {
    const letters = getLetters()
    
    let html = `
    <ul>
    ${
        letters.map(convertRequestToListElement).join("")
    }
    </ul>
    `
    return html

}