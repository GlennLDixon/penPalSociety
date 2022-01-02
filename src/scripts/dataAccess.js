applicationState = {
    recipients: []
}

const API = "http://localhost:8088"

export const fetchRequests = () => {
    return fetch(`${API}/recipient`)
    .then(Response => Response.json())
    .then(
        (serviceRecipient) => {
            // Storing the External state in application state
            applicationState.recipients = serviceRecipient
        }
    )
}