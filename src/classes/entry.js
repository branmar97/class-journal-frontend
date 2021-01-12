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
        entryDiv.id = `entry-${this.id}-container`
        entriesContainer.appendChild(entryDiv)

        // Entry Title
        const title = document.createElement("h3")
        title.className = "entry-title"
        entryDiv.appendChild(title)

        // Comment Container
        commentsDiv = document.createElement("div")
        commentsDiv.className = "entry-comment-container"
        commentDiv.id = `entry-${this.id}-comment-container`
        entryDiv.appendChild(commentDiv)

        // Delete Button
        const deleteBtn = document.createElement("button")
        deleteBtn.setAttribute("id", `delete-button-${this.id}`)
        deleteBtn.innerHTML = "Delete"
        entryDiv.appendChild(deleteBtn)

        deleteBtn.addEventListener("click", () => {
            entryDiv.remove()
            this.adapter.deleteEntry(`${this.id}`)
        })
    }
}