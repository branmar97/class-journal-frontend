class Comments {
    constructor() {
        this.comments = []
        this.fetchAndLoadComments()
    }

    fetchAndLoadComments() {
        ApiAdapter.getComments()
        .then(comments => {
            comments.forEach(comment => {
                const newComment = new Comment(comment)
                Entry.findById(newComment.entryId).comments.push(newComment)
                this.comments.push(newComment)
            })
        })
        .then(() => {
            this.renderComments()
        })
    }

    renderComments() {
        this.comments.map(comment => comment.renderComment())
    }
}