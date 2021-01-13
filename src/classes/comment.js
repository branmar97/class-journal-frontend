class Comment {
    constructor(comment) {
        this.id = comment.id 
        this.author = comment.author
        this.text = comment.text 
        this.entryId = comment.entry_id
    }

    renderComment() {
        const entryCommentsDiv = document.getElementById(`entry-${this.entryId}-comment-container`)

        // Comment Container
        const commentDiv = document.createElement("div")
        commentDiv.className = "entry-comment"
        commentDiv.id = `entry-comment-${this.id}`
        entryCommentsDiv.appendChild(commentDiv)
    }
}