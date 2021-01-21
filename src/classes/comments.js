class Comments {
    constructor() {
        this.comments = []
        // this.adapter = new ApiAdapter()
        this.fetchAndLoadComments()
    }

    fetchAndLoadComments() {
        ApiAdapter.getComments()
        .then(comments => {
            comments.forEach(comment => this.comments.push(new Comment(comment)))
        })
        .then(() => {
            this.renderComments()
        })
    }

    renderComments() {
        this.comments.map(comment => comment.renderComment())
    }
}