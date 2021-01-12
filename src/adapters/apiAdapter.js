class ApiService {
    constructor(root) {
        this.root = root
    }

    getEntries() {
        fetch(this.root + "/entries").then(res => res.json())
    }
}