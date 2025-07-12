Employee Directory Dashboard
A simple Employee Management Dashboard built using HTML, CSS, JavaScript, and FreeMarker as the templating engine. It supports searching, sorting, filtering, editing, deleting, and paginating employee data.
 Setup Instructions
 Requirements

Java (JDK 8 or above)
FreeMarker JAR (freemarker-2.3.xx.jar)
Java IDE (e.g., IntelliJ IDEA or VS Code with Java extensions)

 Running the Project

Clone or download the project.

Place your index.ftl file inside the templates/ folder.

Compile and run Main.java:
On Linux/macOS:
javac -cp freemarker-2.3.xx.jar Main.java
java -cp .:freemarker-2.3.xx.jar Main

On Windows:
javac -cp freemarker-2.3.xx.jar Main.java
java -cp .;freemarker-2.3.xx.jar Main


The rendered file output.html will be generated in the root directory.

 Open output.html in a browser to view the UI.


 Reflection
 Challenges Faced

Getting FreeMarker to correctly render embedded JavaScript and HTML together.
Ensuring that Edit/Delete actions work correctly without relying on external APIs.
Validating email formats and updating employee data smoothly.

Improvements for the Future

Replace mock data with live data from a backend or database.
Add animations, form validation, and toast notifications for better UX.
Use LocalStorage or REST API to persist data changes.
Make it fully responsive with a mobile-first design.
