const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
const today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();

function renderCalendar() {
const calendarDates = document.getElementById("calendar-dates");
const monthYear = document.getElementById("month-year");
const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

calendarDates.innerHTML = "";
monthYear.textContent = `${monthNames[currentMonth]} ${currentYear}`;

// Add empty slots for days before the start of the month
for (let i = 0; i < firstDayOfMonth; i++) {
const emptyDiv = document.createElement("div");
emptyDiv.classList.add("empty-day");
calendarDates.appendChild(emptyDiv);
}

// Create day cells
for (let day = 1; day <= daysInMonth; day++) {
const dayDiv = document.createElement("div");
dayDiv.textContent = day;
dayDiv.classList.add("calendar-day");

// Highlight today's date
if (day === today.getDate() && currentMonth === today.getMonth() && currentYear === today.getFullYear()) {
dayDiv.classList.add("today");
}

calendarDates.appendChild(dayDiv);
}
}

document.getElementById("prev-month").addEventListener("click", () => {
currentMonth = currentMonth === 0 ? 11 : currentMonth - 1;
currentYear = currentMonth === 11 ? currentYear - 1 : currentYear;
renderCalendar();
});

document.getElementById("next-month").addEventListener("click", () => {
currentMonth = currentMonth === 11 ? 0 : currentMonth + 1;
currentYear = currentMonth === 0 ? currentYear + 1 : currentYear;
renderCalendar();
});

// Initial render
renderCalendar();
