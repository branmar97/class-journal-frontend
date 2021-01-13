class Comments {
    constructor() {
        this.comments = []
        this.adapter = new ApiAdapter()
        this.fetchAndLoadComments()
    }
}