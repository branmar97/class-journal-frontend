class Entry {
    constructor(entry) {
        this.id = entry.id
        this.title = entry.title
        this.author = entry.author 
        this.text = entry.text
        this.comments = []
    }

    renderEntry() {
        const entriesContainer = document.getElementById("entries-container")

        // Build Entry Div
        const entryDiv = document.createElement("div")
        entryDiv.className = "entry-container mt-3 mb-5"
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
        commentsDiv.className = "entry-comment-container mt-5 mb-5"
        commentsDiv.id = `entry-${this.id}-comment-container`
        commentsDiv.style.display = "none"

        // Show/Hide Comments
        const showCommentsBtn = document.createElement("button")
        showCommentsBtn.id = `entry-show-button-${this.id}`
        showCommentsBtn.className = "btn btn-secondary me-1"
        showCommentsBtn.innerHTML = "Comments"
        showCommentsBtn.addEventListener("click", showHideComments.bind(this))
        entryDiv.appendChild(showCommentsBtn)

        // Delete Button
        const deleteBtn = document.createElement("button")
        deleteBtn.setAttribute("id", `delete-button-${this.id}`)
        deleteBtn.className = "btn btn-danger me-1"
        deleteBtn.innerHTML = "Delete"
        entryDiv.appendChild(deleteBtn)
        entryDiv.appendChild(commentsDiv)

        deleteBtn.addEventListener("click", () => {
            entryDiv.remove()
            ApiAdapter.deleteEntry(`${this.id}`)
        })

        function showHideComments() {
            const commentsDiv = document.getElementById(`entry-${this.id}-comment-container`)
            if (commentsDiv.style.display === "none") {
                commentsDiv.style.display = "block"
            } else {
                commentsDiv.style.display = "none"
            }
        }

        // New Comment List
        const commentsUl = document.createElement("ul")
        commentsUl.className = "new-comment-container list-unstyled"
        commentsUl.id = `new-${this.id}-comment-ul`
        commentsDiv.appendChild(commentsUl)

        // New Comment Form
        const newCommentForm = document.createElement("form")
        newCommentForm.className = "new-comment-form mb-5"
        newCommentForm.id = `new-${this.id}-comment-form`
        commentsDiv.appendChild(newCommentForm)

        const newCommentHeader = document.createElement("h4")
        newCommentHeader.id = `new-${this.id}-comment-header`
        newCommentHeader.className = "mb-3"
        newCommentHeader.innerText = "Add Comment"
        newCommentForm.appendChild(newCommentHeader)

        const newCommentEntry = document.createElement("input")
        newCommentEntry.id = `new-${this.id}-comment-entry`
        newCommentEntry.type = "hidden"
        newCommentEntry.value = `${this.id}`

        const newCommentAuthor = document.createElement("input")
        newCommentAuthor.id = `new-${this.id}-comment-author`
        newCommentAuthor.className = "form-control mb-3"
        newCommentAuthor.type = "text"
        newCommentAuthor.setAttribute("placeholder", "Your name here")
        newCommentForm.appendChild(newCommentAuthor)

        const newCommentText = document.createElement("textarea")
        newCommentText.id = `new-${this.id}-comment-text`
        newCommentText.className = "form-control mb-3"
        newCommentText.setAttribute("placeholder", "Your message here")
        newCommentForm.appendChild(newCommentText)

        const newCommentBtn = document.createElement("button")
        newCommentBtn.id = `new-comment-button-${this.id}`
        newCommentBtn.className = "btn btn-success"
        newCommentBtn.innerHTML = "Submit"
        newCommentForm.appendChild(newCommentBtn)

        newCommentBtn.addEventListener("click", (event) => {
            event.preventDefault()
            let commentAuthor = document.getElementById(`new-${this.id}-comment-author`)
            let commentText = document.getElementById(`new-${this.id}-comment-text`)


            ApiAdapter.createComment(this.id, commentAuthor.value, commentText.value)
            .then(comment => {
                const newComment = new Comment(comment)
                console.log(this)
                this.comments.push(newComment)
                commentAuthor.value = " "
                commentText.value = " "
                newComment.renderComment()
            })
        })

        // Comment Count 
        const commentCount = document.createElement("h5")
        commentCount.id = `entry-${this.id}-comment-count`
        commentCount.className = "mt-5 mb-3"
        if (commentsUl.childElementCount === 1) {
            commentCount.innerText = `${commentsUl.childElementCount} Comment`
        } else {
            commentCount.innerText = `${commentsUl.childElementCount} Comments`
        }
        
        commentsDiv.prepend(commentCount)
    }
}