import { getLetters, deleteLetters, getArthurs} from "./dataAccess.js";

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("request--")) {
        const [,requestId] = click.target.id.split("--")
        deleteRequest(parseInt(requestId))
    }
})

mainContainer.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "plumbers") {
            const [requestId, plumberId] = event.target.value.split("--")

            /*
                This object should have 3 properties
                1. requestId
                2. plumberId
                3. date_created
            */
            // change name to requests    
            const completion = {
                requestId: requestId,
                plumberId: plumberId,
                date_created: Date.now()
            }

            
            saveCompletion(completion)
            /*
                Invoke the function that performs the POST request
                to the `completions` resource for your API. Send the
                completion object as a parameter.
             */

        }
    }
)


const convertRequestToListElement = (request) => {
    const arthurs = getArthurs()

    return  `
    <li>
        ${request.description}
        <select class="plumbers" id="plumbers">
        <option value="">Choose</option>
        ${
            arthurs.map(
                plumber => {
                    return `<option value="${request.id}--${plumber.id}">${plumber.name}</option>`
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

export const Requests = () => {
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

export const completed = () => {
    const completed = getCompletions

    let html = `
    <ul> 
        ${
            completed.map(convertRequestToListElement).join("")
        }
    </ul>
    `

    return html
}