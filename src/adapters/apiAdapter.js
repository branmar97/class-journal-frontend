class ApiAdapter {
    static getEntry(id) {
        return fetch(root + "/entries/" + id).then(res => res.json())
    }

    static getEntries() {
        return fetch(root + "/entries").then(res => res.json())
    }

    static createEntry(entryTitle, entryAuthor, entryText) {
        const entry = {
            title: entryTitle,
            author: entryAuthor,
            text: entryText
        }

        return fetch(root + "/entries", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(entry)
        })
        .then(res => (res.json()))
        .catch(error => console.log("Error: " + error))
    }

    static deleteEntry(id) {
        return fetch(root + `/entries/${id}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
    }

    static getComments() {
        return fetch(root + "/comments").then(res => res.json())
    }

    static createComment(commentEntry, commentAuthor, commentText) {
        const comment = {
            entry_id: commentEntry,
            author: commentAuthor,
            text: commentText
        }

        return fetch(root + "/comments", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(comment)
        })
        .then(res => (res.json()))
        .catch(error => console.log("Error: " + error))
    }
}