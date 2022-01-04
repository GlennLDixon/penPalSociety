import { getArthurs, getRecipients } from "./dataAccess.js"

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener('click', () => {

})

mainContainer.addEventListener('chainge', ()=> {
    

})

export const LetterForm = () => {
    let arthurs = getArthurs()
    let recipients = getRecipients()
    let html = `
        <div class="field">
        <label class="label" for="Arthur">Arthur</label>
        <select name="arthurs" id="arthurs"><option value="${arthurs.id}"><${arthurs.name}</option></select>
        </div>
        <div class="field">
            <label class="label" for="serviceAddress">Address</label>
            <input type="text" name="serviceAddress" class="input" />
        </div>
        <div class="field">
        <label class="label" for="Arthur">Arthur</label>
        <select name="arthurs" id="arthurs"><option value="${recipients.id}"><${recipients.name}</option></select>
        </div>
        

        <button class="button" id="sendLetter">Send Letter</button>
    `

    return html
}