# Employee Directory Dashboard

A simple **Employee Management Dashboard** built using **HTML**, **CSS**, **JavaScript**, and **FreeMarker** as the templating engine. It supports **searching**, **sorting**, **filtering**, **editing**, **deleting**, and **paginating** employee data.

## ⚙️ Setup Instructions

### ✅ Requirements

- Java (JDK 8 or above)
- FreeMarker JAR (`freemarker-2.3.xx.jar`)
- Java IDE (e.g., IntelliJ IDEA or VS Code with Java extensions)

## 🚀 Running the Project

1. Clone or download the project.

2. Place your `index.ftl` file inside the `templates/` folder.

3. Compile and run `Main.java`:

   ```bash
   # On Linux/macOS
   javac -cp freemarker-2.3.xx.jar Main.java
   java -cp .:freemarker-2.3.xx.jar Main
   ```

   ```bash
   # On Windows
   javac -cp freemarker-2.3.xx.jar Main.java
   java -cp .;freemarker-2.3.xx.jar Main
   ```

4. The rendered file `output.html` will be generated in the root directory.

5. Open `output.html` in a browser to view the UI.

## 🧠 Reflection

### 💡 Challenges Faced

- Getting FreeMarker to correctly render embedded JavaScript and HTML together.
- Ensuring that Edit/Delete actions work correctly without relying on external APIs.
- Validating email formats and updating employee data smoothly.

### 🚀 Improvements for the Future

- Replace mock data with live data from a backend or database.
- Add animations, form validation, and toast notifications for better UX.
- Use LocalStorage or REST API to persist data changes.
- Make it fully responsive with a mobile-first design.