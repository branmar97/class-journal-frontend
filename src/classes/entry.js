class Entry {
    constructor(entry) {
        this.id = entry.id
        this.title = entry.title
        this.author = entry.author 
        this.text = entry.text
        this.comments = entry.comments
        this.adapter = new ApiAdapter()
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

        newCommentEntry = document.createElement("input")
        newCommentEntry.id = `new-${this.id}-comment-entry`
        newCommentEntry.type = "hidden"
        newCommentEntry.value = `${this.id}`

        newCommentAuthor = document.createElement("input")
        newCommentAuthor.id = `new-${this.id}-comment-author`
        newCommentAuthor.type = "text"
        newCommentAuthor.setAttribute("placeholder", "Your name here")
        newCommentForm.appendChild(newCommentAuthor)

        newCommentText = document.createElement("textarea")
        newCommentText.id = `new-${this.id}-comment-text`
        newCommentText.type = "text"
        newCommentText.setAttribute("placeholder", "Your message here")
        newCommentForm.appendChild(newCommentText)

        newCommentBtn = document.createElement("button")
        newCommentBtn.id = `new-comment-button-${this.id}`)
        newCommentBtn.innerHTML = "Add Comment"
        newCommentForm.appendChild(newCommentBtn)

        newCommentBtn.addEventListener("click", (event) => {
            event.preventDefault()
            commentEntry = document.getElementById(`new-${this.id}-comment-entry`).value
            commentAuthor = document.getElementById(`new-${this.id}-comment-author`).value
            commentText = document.getElementById(`new-${this.id}-comment-text`).value

            this.adapter.createComment(commentEntry, commentAuthor, commentText)
            .then(comment => {
                const newComment = new Comment(comment)
                this.comments.push(newComment)
                commentAuthor = " "
                commentText = " "
                newComment.renderComment()
            })
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