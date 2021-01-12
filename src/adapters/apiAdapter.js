class ApiAdapter {
    constructor() {
        this.root = "http://localhost:3000"
    }

    getEntry(id) {
        fetch(this.root + "/entries/" + id).then(res => res.json())
    }

    getEntries() {
        fetch(this.root + "/entries").then(res => res.json())
    }

    createEntry(entryTitle, entryAuthor, entryText) {
        const entry = {
            title: entryTitle,
            author: entryAuthor,
            text: entryText
        }

        return fetch(this.root + "/entries", {
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

    deleteEntry(id) {
        return fetch(this.root + `/entries/${id}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
    }

    getComments() {
        fetch(this.root + "/comments").then(res => res.json())
    }

    createComment(commentEntry, commentAuthor, commentText) {
        const comment = {
            entry_id: commentEntry,
            author: commentAuthor,
            text: commentText
        }

        return fetch(this.root + "/comments", {
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