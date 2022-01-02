applicationState = {
    recipients: [],
    arthurs: [],
    letters: []
}

const API = "http://localhost:8088"

export const fetchRecipient = () => {
    return fetch(`${API}/recipient`)
        .then(response => response.json())
        .then(
            (serviceRecipient) => {
                // Store the external state in application state
                applicationState.recipients = serviceRecipient

            }
        )
}

export const fetchArthurs = () => {
    return fetch(`${API}/arthur`)
        .then(response => response.json())
        .then(
            (servicePlumbers) => {
                // Store the external state in application state
                applicationState.arthurs = servicePlumbers
            }
        )
}

// getting the requests that is stored within applicationState and exporting the data
export const getRequest = () => {
    return applicationState.recipients.map(recipient => ({...recipient}))
}

export const getArthurs = () => {
    return applicationState.arthurs.map(arthur => ({...arthur}))
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
export const deleteLetter = (id) => {
    return fetch(`${API}/letter/${id}`, { method: "DELETE" })
        .then(
            () => {
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}


export const saveCompletion = (saveCompletion) => {
    const fetchCompletions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(saveCompletion)
    }
    const mainContainer = document.querySelector("#container")


    return fetch(`${API}/completions/`, fetchCompletions)
        .then(response => response.json())
        .then(() => {
            //userServiceRequest.POST -> PHP not JS 
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))

        })
}

export const fetchCompletions = () => {
        return fetch(`${API}/completions/`)
        .then(response => response.json())
        .then(
            (completedRequests) => {
                // Store the external state in application state
                applicationState.completions = completedRequests
                
            }
        )
}