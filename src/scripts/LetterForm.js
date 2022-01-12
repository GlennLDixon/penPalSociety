import {getArthurs, getRecipients, sendLetters} from "./dataAccess.js"

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "sendLetter") {
        // Get what the user typed into the form fields
        const userArthur = document.getElementById("arthurs").value
        const userLetter = document.querySelector("textarea[name='letter']").value
        const userTopics = document.querySelector("input[name='topic']:checked").value
        const userRecipient = document.getElementById("recipients").value

        // Make an object out of the user input
        const dataToSendToAPI = {
            arthurId: parseInt(userArthur),
            letter: userLetter,
            topic: userTopics,
            recipientId: parseInt(userRecipient),
            date: new Date().toLocaleDateString()
        }

        // Send the data to the API for permanent storage
        sendLetters(dataToSendToAPI)
    }
})

mainContainer.addEventListener('change', ()=> {


})

export const LetterForm = () => {
    const arthurs = getArthurs()
    const recipients = getRecipients()
    let html = `
        <div class="field">
        <label class="label" for="letterArthur">Arthur</label>
        <select name="arthurs" id="arthurs" class="input-box">
        <option value="">choose</option>
        ${
            arthurs.map(
                arthur => {
                    return `<option name="arthur" value="${arthur.id}">${arthur.name}</option>`
                }
            ).join("")}
        </select>
        </div>
        <div class="field">
            <label class="label" for="letterInput">Letter</label>
            <textarea name="letter" class="input-box"> </textarea>
        </div>
        <div class="topic-section">
            <label class="label" for="letterTopics">Topics</label>
            <ul class="topic-list">
            <li><input class="list-item" type="radio" name="topic" value="Business"/>Business</li>
            <li><input class="list-item" type="radio" name="topic" value="Friendly"/>Friendly</li>
            <li><input class="list-item" type="radio" name="topic" value="Family"/>Family</li>
            <li><input class="list-item" type="radio" name="topic" value="Congratulations"/>Congratulations</li>
            <li><input class="list-item" type="radio" name="topic" value="Condolences"/>Condolences</li>
            </ul>
        </div>
        <div class="field">
        <label class="label" for="Arthur">Recipient</label>
        <select name="recipient" id="recipients" class="input-box">
        <option value="">choose</option>
        ${
            recipients.map(
                recipient => {
                    return `<option name="recipient" value="${recipient.id}">${recipient.name}</option>`
                }
            ).join("")}
            </select>
        </div>
        

        <button class="button" id="sendLetter">Send Letter</button>
    `

    return html
}