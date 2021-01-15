class Comment {
    constructor(comment) {
        this.id = comment.id 
        this.author = comment.author
        this.text = comment.text 
        this.entryId = comment.entry_id
    }

    renderComment() {
        const entryCommentsUl = document.getElementById(`new-${this.entryId}-comment-ul`) // change to ul
        const entryCommentsCount = document.getElementById(`entry-${this.entryId}-comment-count`)
        // Comment Li
        const commentLi = document.createElement("li")
        commentLi.className = "entry-comment"
        commentLi.id = `entry-comment-${this.id}`
        entryCommentsUl.prepend(commentLi)

        // Comment Author
        const commentAuthor = document.createElement("h5")
        commentAuthor.className = "entry-comment-author"
        commentAuthor.id = `entry-comment-author-${this.id}`
        commentAuthor.innerText = this.author
        commentLi.appendChild(commentAuthor)

        // Comment Text 
        const commentText = document.createElement("p")
        commentText.className = "entry-comment-text"
        commentText.id = `entry-comment-text-${this.id}`
        commentText.innerText = this.text
        commentLi.appendChild(commentText)

        // Update Count
        const textArray = entryCommentsCount.innerText.split(" ")
        const updatedCount = parseInt(textArray[0]) + 1
        if (updatedCount === 1) {
            entryCommentsCount.innerText = `${updatedCount} Comment`
        } else {
            entryCommentsCount.innerText = `${updatedCount} Comments`
        }
    }
}