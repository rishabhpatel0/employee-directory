#  Employee Directory Dashboard

This is a simple Employee Management Dashboard built using HTML, CSS, JavaScript, and FreeMarker as the templating engine. It supports searching, sorting, filtering, editing, deleting, and paginating employee data.


#Setup Instructions
Requirements
Java (JDK 8 or above)

FreeMarker JAR (freemarker-2.3.xx.jar)

A Java IDE (like IntelliJ or VS Code with Java Extension)

#Running the Project
Clone or download the project.

Place your index.ftl inside the templates folder.

Compile and run Main.java:

javac -cp freemarker-2.3.xx.jar Main.java
java -cp .:freemarker-2.3.xx.jar Main
The rendered output.html will be generated in the root directory. Open it in a browser to view the UI.

#Reflection
Challenges Faced:
Getting FreeMarker to correctly render embedded JavaScript and HTML together.

Ensuring that edit/delete works correctly without relying on external APIs.

Validating email formats and updating employee data cleanly.

Improvements for the Future:
Replace mock data with live data from a backend or database.

Add animations, form validation, and toasts for better UX.

Use local storage or REST API to persist data changes.

Make it fully responsive with mobile-first design.
