import { getLetters, deleteLetters, getArthurs} from "./dataAccess.js";

// this section will display the letter which will have an list of the letters that will display
// the full name of recipients
// the info of the letter
// the full name of arthurs
// the date it was sent on and
// the topic

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("request--")) {
        const [,requestId] = click.target.id.split("--")
        deleteLetters(parseInt(requestId))
    }
})


const convertRequestToListElement = (request) => {
    let arthurs = getArthurs()

    return  `
    <li>
        ${request.description}
        <select class="arthurs" id="arthurs">
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