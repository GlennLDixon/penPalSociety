import { getArthurs, getRecipients } from "./dataAccess.js"

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "sendLetter") {
        // Get what the user typed into the form fields
        const userDescription = document.querySelector("input[name='serviceDescription']").value
        const userAddress = document.querySelector("input[name='letter']").value
        const userBudget = document.querySelector("input[name='serviceBudget']").value
        const userDate = document.querySelector("input[name='serviceDate']").value

        // Make an object out of the user input
        const dataToSendToAPI = {
            description: userDescription,
            address: userAddress,
            budget: userBudget,
            neededBy: userDate
        }

        // Send the data to the API for permanent storage
        sendRequest(dataToSendToAPI)
    }
})

mainContainer.addEventListener('change', ()=> {


})

export const LetterForm = () => {
    let arthurs = getArthurs()
    let recipients = getRecipients()
    let html = `
        <div class="field">
        <label class="label" for="letterArthur">Arthur</label>
        <select name="arthurs" id="arthurs">
        <option value="">choose</option>
        ${
            arthurs.map(
                arthur => {
                    return `<option value="${arthur.id}">${arthur.name}</option>`
                }
            ).join("")}
        </select>
        </div>
        <div class="field">
            <label class="label" for="letterInput">Letter</label>
            <input type="text" name="letter" class="input" />
        </div>
        <div>
            <label class="label" for="letterTopics">Topics</label>
            <ul>
            <li><input type="radio" name="Business"/>Business</li>
            <li><input type="radio" name="Friendly"/>Friendly</li>
            <li><input type="radio" name="Family"/>Family</li>
            <li><input type="radio" name="Congratulations"/>Congratulations</li>
            <li><input type="radio" name="Condolences"/>Condolences</li>
            </ul>
        </div>
        <div class="field">
        <label class="label" for="Arthur">Recipient</label>
        <select name="recipient" id="recipient">
        <option value="">choose</option>
        ${
            recipients.map(
                recipient => {
                    return `<option value="${recipient.id}"><${recipient.name}</option>`
                }
            ).join("")}
            </select>
        </div>
        

        <button class="button" id="sendLetter">Send Letter</button>
    `

    return html
}