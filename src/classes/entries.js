class Entries {
    constructor() {
        this.entries = [];
        this.adapter = new ApiAdapter()
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

        this.adapter.createEntry(entryTitle, entryAuthor, entryText)
        .then(entry => {
            const newEntry = new Entry(entry)
            this.entries.push(newEntry)
            this.newEntryTitle.value = " "
            this.newEntryAuthor.value = " "
            this.newEntryText.value = " "
            newEntry.renderEntry()
        })
    }

    fetchAndLoadEntries() {
        this.adapter.getEntries()
        .then(entries => {
            entries.forEach(entry => this.entries.push(new Entry(entry)))
        })
        .then(() => {
            this.renderEntries()
        })
    }

    renderEntries() {
        this.entries.map(entry => entry.renderEntry)
    }
}