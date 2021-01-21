document.addEventListener("DOMContentLoaded", function() {
    new Entries().fetchAndLoadEntries().then(() => {
        new Comments()
    })
})

const root = "http://localhost:3000"