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

        // New Comment Container
        newCommentDiv = document.createElement("div")
        newCommentDiv.className = "new-comment-container"
        newCommentDiv.id = `new-${this.id}-comment-container`
        commentsDiv.appendChild(newCommentDiv)

        // New Comment Form
        newCommentForm = document.createElement("form")
        newCommentForm.className = "new-comment-form"
        newCommentForm.id = `new-${this.id}-comment-form`
        newCommentDiv.appendChild(newCommentForm)

        newCommentText = document.createElement("input")
        newCommentText.id = "new-comment-text"
        newCommentText.type = "text"
        newCommentText.setAttribute("placeholder", "Your message here")
        newCommentForm.appendChild(newCommentText)

        newCommentBtn = document.createElement("button")
        newCommentBtn.id = `new-comment-button-${this.id}`)
        newCommentBtn.innerHTML = "Add Comment"
        newCommentForm.appendChild(newCommentBtn)

        newCommentBtn.addEventListener("click", () => {
            
        })

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