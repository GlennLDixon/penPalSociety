import { fetchRequests, fetchCompletions, fetchPlumbers } from "./dataAccess.js"
import { PenPal } from "./PenPal"


const mainContainer = document.querySelector("#container")

const render = () => {
    fetchRecipe().then(
        () => {
            fetchPlumbers().then(
        ()=> {
            fetchCompletions().then(
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