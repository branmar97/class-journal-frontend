document.addEventListener("DOMContentLoaded", function() {
    new Entries().fetchAndLoadEntries().then(() => {
        new Comments()
    })
})