class ApiService {
    constructor(root) {
        this.root = root
    }

    getEntry(id) {
        fetch(this.root + "/entries/" + id).then(res => res.json())
    }

    getEntries() {
        fetch(this.root + "/entries").then(res => res.json())
    }
}