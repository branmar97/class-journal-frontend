class Entry {
    constructor(entry) {
        this.id = entry.id
        this.title = entry.title
        this.author = entry.author 
        this.text = entry.text
        this.comments = entry.comments
    }

    renderEntry() {
        const entriesContainer = document.getElementById("entries-container")

        // Build Entry Div
        const entryDiv = document.createElement("div")
        entryDiv.className = "entry-container"
        entriesContainer.appendChild(entryDiv)
    }
}