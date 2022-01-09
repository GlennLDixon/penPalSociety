import { getLetters, getRecipients, getArthurs} from "./dataAccess.js";

// this section will display the letter which will have an list of the letters that will display
// the full name of recipients
// the info of the letter
// the full name of arthurs
// the date it was sent on and
// the topic

// const mainContainer = document.querySelector("#container")

// mainContainer.addEventListener("click", click => {
//     if (click.target.id.startsWith("request--")) {
//         const [,requestId] = click.target.id.split("--")
//         deleteLetters(parseInt(requestId))
//     }
// })

const convertRequestToListElement = (request) => {
    const recipients = getRecipients()
    const arthurs = getArthurs()

    const sendingArthur = recipients.find(arthur => {return arthur})
    const reciever = arthurs.find(recipient => {return recipient})

    console.log(reciever)
    console.log(sendingArthur)

    return  `<li class="letter">
    <p>${sendingArthur.name} ${sendingArthur.email}<p>
    <p>${request.letter}</p>
    <p>${reciever.name} ${reciever.email}</p> 
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