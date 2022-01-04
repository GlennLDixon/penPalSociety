import { fetchRecipient, fetchLetters, fetchArthurs } from "./dataAccess.js"
import { PenPal } from "./PenPal.js"


const mainContainer = document.querySelector("#container")

const render = () => {
    fetchRecipient().then(
        () => {
            fetchArthurs().then(
        ()=> {
            fetchLetters().then(
        ()=> {
            mainContainer.innerHTML = PenPal()
        }
    )
    }
    )
}
)

}
render()

mainContainer.addEventListener(
    "stateChanged",
    customElement => {
        render()
    }
)