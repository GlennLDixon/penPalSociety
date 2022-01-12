import { getLetters, getRecipients, getArthurs} from "./dataAccess.js";

const convertRequestToListElement = (request) => {
    const recipients = getRecipients()
    const arthurs = getArthurs()

    const sendingArthur = arthurs.find(
        (arthur) => {
            return parseInt(arthur.id) === request.arthurId
        }
        )
    const reciever = recipients.find(
        (recipient) => {
            return parseInt(recipient.id) === request.recipientId
        }
        )

    return  `<li class="listOfLetters">
    <p class="letter-sender">${sendingArthur.name} (${sendingArthur.email})</p>
    <p class="letter-letter">${request.letter}</p>
    <p class="letter-reciever">${reciever.name} (${reciever.email})</p> 
    <span class="letter-date">${request.date}</span>
    <p class="letter-topic">${request.topic}</p>
    </li>`
}

export const Letters = () => {
    const letters = getLetters()
    
    let html = `
    <ul class="letter">
    ${
        letters.map(convertRequestToListElement).join("")
    }
    </ul>
    `
    return html

}