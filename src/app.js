document.addEventListener("DOMContentLoaded", function() {
    new Entries().fetchAndLoadEntries().then(() => {
        new Comments()
    })
})

const root = "https://boiling-caverns-05103.herokuapp.com"