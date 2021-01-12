class ApiAdapter {
    constructor() {
        this.root = root
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

        return fetch(this.baseUrl, {
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

    getComments() {
        fetch(this.root + "/comments").then(res => res.json())
    }
}