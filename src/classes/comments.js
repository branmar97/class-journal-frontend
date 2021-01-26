class Comments {
    constructor() {
        this.comments = []
        this.fetchAndLoadComments()
    }

    fetchAndLoadComments() {
        ApiAdapter.getComments()
        .then(comments => {
            comments.forEach(comment => this.comments.push(new Comment(comment)))
        })
        .then(() => {
            this.forEach(comment => {
                const entry = Entry.find(comment.entryId)
                entry.comments.push(comment)
            })
            this.renderComments()
        })
    }

    renderComments() {
        this.comments.map(comment => comment.renderComment())
    }
}