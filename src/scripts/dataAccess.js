const applicationState = {
    recipients: [],
    arthurs: [],
    letters: []
}

const API = "http://localhost:8088"

export const fetchRecipient = () => {
    return fetch(`${API}/recipients`)
        .then(response => response.json())
        .then(
            (receivingRecipient) => {
                // Store the external state in application state
                applicationState.recipients = receivingRecipient
            }
        )
}

export const fetchArthurs = () => {
    return fetch(`${API}/arthurs`)
        .then(response => response.json())
        .then(
            (sendingArthur) => {
                // Store the external state in application state
                applicationState.arthurs = sendingArthur
            }
        )
}

export const fetchLetters = () => {
    return fetch(`${API}/letters`)
        .then(response => response.json())
        .then(
            (newLetter) => {
                // Store the external state in application state
                applicationState.letters = newLetter
            }
        )
}

// getting the requests that is stored within applicationState and exporting the data
export const getRecipients = () => {
    return applicationState.recipients.map(recipient => ({...recipient}))
}

export const getArthurs = () => {
    return applicationState.arthurs.map(arthur => ({...arthur}))
}

export const getLetters = () => {
    return applicationState.letters.map(letter => ({...letter}))
}

// sending a request that will take in some data and display in on the screen
export const sendLetters = (userLetter) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userLetter)
    }


    return fetch(`${API}/letters`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged")) 
        })
}

// fetch method that would deleted the request with the selected id
export const deleteLetters = (id) => {
    return fetch(`${API}/letter/${id}`, { method: "DELETE" })
        .then(
            () => {
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}


// export const saveLetters = (saveCompletion) => {
//     const fetchCompletions = {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(saveCompletion)
//     }
//     const mainContainer = document.querySelector("#container")


//     return fetch(`${API}/letters/`, fetchCompletions)
//         .then(response => response.json())
//         .then(() => {
//             //userServiceRequest.POST -> PHP not JS 
//             mainContainer.dispatchEvent(new CustomEvent("stateChanged"))

//         })
// }

// export const fetchLetters= () => {
//         return fetch(`${API}/letters/`)
//         .then(response => response.json())
//         .then(
//             (completedLetters) => {
//                 // Store the external state in application state
//                 applicationState.completions = completedLetters
                
//             }
//         )
// }