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
        title.innerText = this.title
        entryDiv.appendChild(title)

        // Entry Author
        const author = document.createElement("p")
        author.className = "entry-author"
        author.innerHTML = `<i>${this.author}</i>`
        entryDiv.appendChild(author)

        // Entry Text
        const text = document.createElement("p")
        text.className = "entry-text"
        text.innerText = this.text
        entryDiv.appendChild(text)

        // Comment Container
        const commentsDiv = document.createElement("div")
        commentsDiv.className = "entry-comment-container"
        commentsDiv.id = `entry-${this.id}-comment-container`
        commentsDiv.style.display = "none"

        // Show/Hide Comments
        const showCommentsBtn = document.createElement("button")
        showCommentsBtn.id = `entry-show-button-${this.id}`
        showCommentsBtn.innerHTML = "Comments"
        showCommentsBtn.addEventListener("click", showHideComments.bind(this))
        entryDiv.appendChild(showCommentsBtn)
        entryDiv.appendChild(commentsDiv)

        function showHideComments() {
            const commentsDiv = document.getElementById(`entry-${this.id}-comment-container`)
            if (commentsDiv.style.display === "none") {
                commentsDiv.style.display = "block"
            } else {
                commentsDiv.style.display = "none"
            }
        }

        // New Comment Container
        const newCommentDiv = document.createElement("div")
        newCommentDiv.className = "new-comment-container"
        newCommentDiv.id = `new-${this.id}-comment-container`
        commentsDiv.appendChild(newCommentDiv)

        // New Comment Form
        const newCommentForm = document.createElement("form")
        newCommentForm.className = "new-comment-form"
        newCommentForm.id = `new-${this.id}-comment-form`
        newCommentDiv.appendChild(newCommentForm)

        const newCommentEntry = document.createElement("input")
        newCommentEntry.id = `new-${this.id}-comment-entry`
        newCommentEntry.type = "hidden"
        newCommentEntry.value = `${this.id}`

        const newCommentAuthor = document.createElement("input")
        newCommentAuthor.id = `new-${this.id}-comment-author`
        newCommentAuthor.type = "text"
        newCommentAuthor.setAttribute("placeholder", "Your name here")
        newCommentForm.appendChild(newCommentAuthor)

        const newCommentText = document.createElement("textarea")
        newCommentText.id = `new-${this.id}-comment-text`
        newCommentText.setAttribute("placeholder", "Your message here")
        newCommentForm.appendChild(newCommentText)

        const newCommentBtn = document.createElement("button")
        newCommentBtn.id = `new-comment-button-${this.id}`
        newCommentBtn.innerHTML = "Submit"
        newCommentForm.appendChild(newCommentBtn)

        newCommentBtn.addEventListener("click", (event) => {
            event.preventDefault()
            let commentEntry = document.getElementById(`new-${this.id}-comment-entry`).value
            let commentAuthor = document.getElementById(`new-${this.id}-comment-author`).value
            let commentText = document.getElementById(`new-${this.id}-comment-text`).value

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