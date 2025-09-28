//your JS code here. If required.
// Get form and table body
const bookForm = document.getElementById("book-form");
const bookList = document.getElementById("book-list");

// Handle form submission
bookForm.addEventListener("submit", function(e) {
  e.preventDefault();

  // Get input values
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const isbn = document.getElementById("isbn").value;

  // Create new row
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${title}</td>
    <td>${author}</td>
    <td>${isbn}</td>
    <td><button class="btn btn-danger btn-sm delete">Clear</button></td>
  `;

  // Append to table
  bookList.appendChild(row);

  // Clear input fields
  bookForm.reset();
});

// Handle delete row
bookList.addEventListener("click", function(e) {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.parentElement.remove(); // remove the row
  }
});
