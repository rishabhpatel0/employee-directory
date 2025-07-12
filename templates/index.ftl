<#assign employees = [
  {"id": "E001", "firstName": "Alice", "lastName": "Smith", "email": "alice@example.com", "department": "HR", "role": "Manager"},
  {"id": "E002", "firstName": "Bob", "lastName": "Johnson", "email": "bob@example.com", "department": "IT", "role": "Developer"},
  {"id": "E003", "firstName": "Charlie", "lastName": "Lee", "email": "charlie@example.com", "department": "Finance", "role": "Analyst"},
  {"id": "E004", "firstName": "Diana", "lastName": "Brown", "email": "diana@example.com", "department": "Marketing", "role": "Executive"},
  {"id": "E005", "firstName": "Ethan", "lastName": "Clark", "email": "ethan@example.com", "department": "IT", "role": "DevOps Engineer"},
  {"id": "E006", "firstName": "Fiona", "lastName": "Davis", "email": "fiona@example.com", "department": "HR", "role": "Recruiter"},
  {"id": "E007", "firstName": "George", "lastName": "Miller", "email": "george@example.com", "department": "Finance", "role": "Accountant"},
  {"id": "E008", "firstName": "Hannah", "lastName": "Wilson", "email": "hannah@example.com", "department": "Design", "role": "UI/UX Designer"},
  {"id": "E009", "firstName": "Ian", "lastName": "Moore", "email": "ian@example.com", "department": "IT", "role": "QA Engineer"},
  {"id": "E010", "firstName": "Julia", "lastName": "Taylor", "email": "julia@example.com", "department": "Sales", "role": "Sales Lead"},
  {"id": "E011", "firstName": "Kevin", "lastName": "Anderson", "email": "kevin@example.com", "department": "Sales", "role": "Sales Manager"},
  {"id": "E012", "firstName": "Laura", "lastName": "Thomas", "email": "laura@example.com", "department": "Support", "role": "Support Executive"}
]>


<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Employee Dashboard</title>
  <link rel="stylesheet" href="css/styles.css" />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap" rel="stylesheet" />
</head>
<body>
  <main> 
  <div class="search-container"> 
    <h1>Employee Directory</h1>
    <input type="text" id="search" placeholder="Search by name or email">
    <button id="filterBtn">Filter</button>
    <button id="addEmployeeBtn">Add Employee</button>
  </div>

  <div class="sort-container">
    <label for="sort">Sort</label>
    <select id="sort" onchange="sortBy(this.value)">
      <option value="">-- Select --</option>
      <option value="firstName">First Name</option>
      <option value="department">Department</option>
    </select>

    <div class="pagination-controls">
      <label for="pageSize">Show</label>
      <select id="pageSize">
        <option value="10">10</option>
        <option value="25">25</option>
        <option value="50">50</option>
        <option value="100">100</option>
      </select>
      <button id="prevPage">Previous</button>
      <span id="pageInfo"></span>
      <button id="nextPage">Next</button>
    </div>
  </div>

  <div class="card-container">
    <#list employees as emp>
      <div class="employee-card" data-id="${emp.id}">
        <h2>${emp.firstName} ${emp.lastName}</h2>
        <p><strong>ID:</strong> ${emp.id}</p>
        <p><strong>Email:</strong> ${emp.email}</p>
        <p><strong>Department:</strong> ${emp.department}</p>
        <p><strong>Role:</strong> ${emp.role}</p>
        <div class="card-actions">
            <button onclick="editEmployee('${emp.id}')" class="editBtn">Edit</button>
            <button onclick="deleteEmployee('${emp.id}')" class="deleteBtn">Delete</button>
        </div>

      </div>
    </#list>
  </div>
  
  <!-- popup for addition of employee -->

  <div id="popup" class="popup hidden">
    <div class="popup-content">
      <h2>Add Employee</h2>
      <form id="employeeForm" onsubmit="submitForm(event)">
        <input type="text" id="firstName" placeholder="First Name" required />
        <input type="text" id="lastName" placeholder="Last Name" required />
        <input type="email" id="email" placeholder="Email" required />
        <input type="text" id="department" placeholder="Department" required />
        <input type="text" id="role" placeholder="Role" required />
        <div class="popup-actions">
          <button type="submit">Save</button>
          <button type="button" onclick="closePopup()">Cancel</button>
        </div>
      </form>
    </div>
  </div>

<!-- sidebar when clicked on filter -->

  <div id="filterSidebar" class="filter-sidebar">
    <h3>Filter Employees</h3>
    <form id="filterForm">
      <label for="filterFirstName">First Name</label>
      <input type="text" id="filterFirstName" />

      <label for="filterDepartment">Department</label>
      <input type="text" id="filterDepartment" />

      <label for="filterRole">Role</label>
      <input type="text" id="filterRole" />

      <div class="sidebar-actions">
        <button type="button" onclick="applyFilter()">Apply</button>
        <button type="button" onclick="closeFilter()">Cancel</button>
      </div>
    </form>
  </div>
</main>

  <footer class="footer">
    &copy; 2025 Employee Directory App. All rights reserved.
  </footer>

  <script src="js/dashboard.js"></script>
</body>
</html>
