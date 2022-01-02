import { LetterForm } from "./LetterForm.js"
import { Letters } from "./Letters.js"

export const PenPal = () => {
    return `
    <h1>Pen Pals Society</h1>
    <section class="LetterForm">
        ${LetterForm()}
    </section>

    <section class="serviceRequests">
        <h2>Letters</h2>
        ${Letters()}
    </section>
    `
}