// Define a list of available pages (without the `.html` extension)
const pages = [
    "About", "Mission", "core", "Timeline", "Alumni", "Academic", "Admission", 
    "Calendar", "Students", "Library", "E-book", "Accommodation", "Happiness", 
    "Clubs", "Student", "Games", "Examination", "Research", "researchs", "Annual", 
    "Business", "Announcement", "News", "Events", "Vacancy", "Tender", "Contact", 
    "Location", "write"
];

// JavaScript for Search Button Functionality
document.querySelector('.srch-btn').addEventListener('click', function() {
    // Get the query from the search input
    const query = document.querySelector('.srch').value.trim();

    if (query) {
        // Check if the query matches any page in the list
        const matchedPage = pages.find(page => page.toLowerCase() === query.toLowerCase());

        if (matchedPage) {
            // Redirect to the matched page
            window.location.href = `${matchedPage}.html`;
        } else {
            // Show an alert if no match is found
            alert("No matching page found. Please try again.");
        }
    } else {
        alert("Please enter a search term.");
    }
});