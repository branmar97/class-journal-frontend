class Entries {
    constructor() {
        this.entries = [];
    }

    newEntryBindings() {
        this.newEntryForm = document.getElementById("new-entry-form")
        this.newEntryTitle = document.getElementById("new-entry-title")
        this.newEntryAuthor = document.getElementById("new-entry-author")
        this.newEntryText = document.getElementById("new-entry-text")
        this.newEntryForm.addEventListener('submit', this.createNewEntry.bind(this));
    }

    createNewEntry(event) {
        event.preventDefault()
        const entryTitle = this.newEntryTitle.value
        const entryAuthor = this.newEntryAuthor.value 
        const entryText = this.newEntryText.value
    }
}