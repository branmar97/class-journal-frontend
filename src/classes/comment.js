class Comment {
    constructor(comment) {
        this.id = comment.id 
        this.author = comment.author
        this.text = comment.text 
        this.entryId = comment.entry_id
    }

    renderComment() {
        const entryCommentsDiv = document.getElementById(`entry-${this.entryId}-comment-container`)
        const entryCommentsCount = document.getElementById(`entry-${this.entryId}-comment-count`)
        // Comment Container
        const commentDiv = document.createElement("div")
        commentDiv.className = "entry-comment"
        commentDiv.id = `entry-comment-${this.id}`
        entryCommentsDiv.appendChild(commentDiv)

        // Comment Author
        const commentAuthor = document.createElement("h5")
        commentAuthor.className = "entry-comment-author"
        commentAuthor.id = `entry-comment-author-${this.id}`
        commentAuthor.innerText = this.author
        commentDiv.appendChild(commentAuthor)

        // Comment Text 
        const commentText = document.createElement("p")
        commentText.className = "entry-comment-text"
        commentText.id = `entry-comment-text-${this.id}`
        commentText.innerText = this.text
        commentDiv.appendChild(commentText)

        // Update Count
        const textArray = entryCommentsCount.innerText.split(" ")
        const updatedCount = parseInt(textArray[0]) + 1
        entryCommentsCount.innerText = `${updatedCount} Comments`
    }
}