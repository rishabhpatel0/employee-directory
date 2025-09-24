  "use strict";
  let currentPage = 1;
  let pageSize = 10;
  let employees=[];

  // On DOM ready
  document.addEventListener("DOMContentLoaded", () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => {
        employees = data.map(user => ({
          id: user.id.toString(),
          firstName: user.name.split(" ")[0],
          lastName: user.name.split(" ")[1] || "",
          email: user.email,
          department: user.company?.name || "General",
          role: user.company.bs 
        }));
        renderCards(employees);
      })
      .catch(err => {
        console.error("Error fetching users:", err);
        alert("Could not load users");
      });

    document.getElementById("addEmployeeBtn").addEventListener("click", () =>
      document.getElementById("popup").classList.remove("hidden")
    );

    document.getElementById("filterBtn").addEventListener("click", () =>
      document.getElementById("filterSidebar").classList.add("show")
    );

    document.getElementById("search").addEventListener("input", filterEmployees);

    document.getElementById("pageSize").addEventListener("change", function () {
      pageSize = parseInt(this.value);
      currentPage = 1;
      renderCards(employees);
    });

    document.getElementById("prevPage").addEventListener("click", () => {
      if (currentPage > 1) {
        currentPage--;
        renderCards(employees);
      }
    });

    document.getElementById("nextPage").addEventListener("click", () => {
      const totalPages = Math.ceil(employees.length / pageSize);
      if (currentPage < totalPages) {
        currentPage++;
        renderCards(employees);
      }
    });

    renderCards(employees); 
  });

  // Form for edit or delete
  function submitForm(e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const emailRegex = /^[^@]+@[^@]+\.[^@]+$/;

    if (!emailRegex.test(email)) {
      alert("❌ Invalid email format!");
      return;
    }

    const form = document.getElementById("employeeForm");
    const editingId = form.dataset.editingId;

    const newEmployee = {
      id: editingId || "E" + Math.floor(1000 + Math.random() * 9000),
      firstName: document.getElementById("firstName").value.trim(),
      lastName: document.getElementById("lastName").value.trim(),
      email,
      department: document.getElementById("department").value.trim(),
      role: document.getElementById("role").value.trim()
    };

    if (editingId) {
      const index = employees.findIndex(emp => emp.id === editingId);
      if (index !== -1) employees[index] = newEmployee;
    } else {
      employees.push(newEmployee);
    }

    renderCards(employees);
    closePopup();
    delete form.dataset.editingId;
  }

  // Render Cards 
  function renderCards(data) {
    const container = document.querySelector(".card-container");
    container.innerHTML = "";

    const start = (currentPage - 1) * pageSize;
    const end = start + pageSize;
    const pageData = data.slice(start, end);

    pageData.forEach(emp => {
      const card = document.createElement("div");
      card.className = "employee-card";
      card.dataset.id = emp.id;
      card.innerHTML = `
        <h2>${emp.firstName} ${emp.lastName}</h2>
        <p><strong>ID:</strong> ${emp.id}</p>
        <p><strong>Email:</strong> ${emp.email}</p>
        <p><strong>Department:</strong> ${emp.department}</p>
        <p><strong>Role:</strong> ${emp.role}</p>
        <div class="card-actions">
          <button onclick="editEmployee('${emp.id}')">Edit</button>
          <button onclick="deleteEmployee('${emp.id}')">Delete</button>
        </div>
      `;
      container.appendChild(card);
    });

    const totalPages = Math.ceil(data.length / pageSize);
    document.getElementById("pageInfo").textContent = `Page ${currentPage} of ${totalPages}`;
  }

  function deleteEmployee(id) {
    employees = employees.filter(emp => emp.id !== id);
    renderCards(employees);
  }


  function editEmployee(id) {
    const emp = employees.find(e => e.id === id);
    if (!emp) return;

    document.getElementById("firstName").value = emp.firstName;
    document.getElementById("lastName").value = emp.lastName;
    document.getElementById("email").value = emp.email;
    document.getElementById("department").value = emp.department;
    document.getElementById("role").value = emp.role;

    const form = document.getElementById("employeeForm");
    form.dataset.editingId = id;
    document.getElementById("popup").classList.remove("hidden");
  }

  function closePopup() {
    document.getElementById("popup").classList.add("hidden");
    document.getElementById("employeeForm").reset();
  }


  function filterEmployees() {
    const query = document.getElementById("search").value.trim().toLowerCase();
    const filtered = employees.filter(emp =>
      emp.firstName.toLowerCase().includes(query) ||
      emp.lastName.toLowerCase().includes(query) ||
      emp.email.toLowerCase().includes(query)
    );
    currentPage = 1;
    renderCards(filtered);
  }

  function sortBy(key) {
    if (!key) return;
    employees.sort((a, b) => a[key].localeCompare(b[key]));
    renderCards(employees);
  }

  function applyFilter() {
    const fname = document.getElementById("filterFirstName").value.trim().toLowerCase();
    const dept = document.getElementById("filterDepartment").value.trim().toLowerCase();
    const role = document.getElementById("filterRole").value.trim().toLowerCase();

    const filtered = employees.filter(emp =>
      (!fname || emp.firstName.toLowerCase().includes(fname)) &&
      (!dept || emp.department.toLowerCase().includes(dept)) &&
      (!role || emp.role.toLowerCase().includes(role))
    );

    currentPage = 1;
    renderCards(filtered);
    closeFilter();
  }


  function closeFilter() {
    document.getElementById("filterSidebar").classList.remove("show");
    document.getElementById("filterForm").reset();
  }

  function resetFilter() {
  document.getElementById("filterForm").reset(); 
  currentPage = 1;
  renderCards(employees); 
  closeFilter();
}
