# Overview

As a software engineer, I developed this Notes Management Application to deepen my understanding of modern cloud-integrated web development. This project allowed me to explore the integration between React frontend applications and cloud-based NoSQL databases, specifically focusing on real-time data synchronization and scalable application architecture.

The Notes Management App is a web-based application built with React and TypeScript that integrates with Google Firebase Firestore as a cloud database backend. Users can create, edit, delete, and organize personal notes with real-time synchronization across devices. The application features persistent data storage in the cloud, a responsive user interface, and automatic data backup. To use the program, users simply open the web application, enter a note title and content in the form fields, click "Add Note" to save it to the cloud database, and can delete notes using the × button on each note card.

I wrote this software to gain hands-on experience with cloud database integration, modern React development patterns, and real-time web applications. This project helped me understand how to architect full-stack applications using Firebase as a Backend-as-a-Service (BaaS) solution, implement cloud data storage, and manage state in React applications that interact with external APIs. The goal was to build a practical application that demonstrates the power of cloud databases for modern web development.

[Software Demo Video](https://youtu.be/OqvNoHR8ZqE)

# Cloud Database

This application uses Google Firebase Firestore, a NoSQL cloud database that provides real-time synchronization, automatic scaling, and offline support. Firestore is a document-oriented database that stores data in collections and documents, making it ideal for applications that need flexible schema and real-time updates across multiple devices.

The database structure consists of one main collection:
- **notes**: Contains individual note documents with fields including title (string), content (string), category (string), createdAt (timestamp), and updatedAt (timestamp). Each note document is automatically assigned a unique ID by Firestore (such as "u3ST9UEH57FCCxzZfPqR"), ensuring proper data organization and retrieval.

# Development Environment

I used Visual Studio Code as my primary development environment with extensions for React, TypeScript, and Firebase development. The project was built using Node.js and npm for package management, with Git for version control and the integrated terminal for running commands.

The application is developed in TypeScript, a statically typed superset of JavaScript that provides enhanced code reliability and developer experience. Key libraries include React 19 for the user interface framework, Firebase SDK for cloud database integration (specifically firebase/firestore and firebase/app), and Create React App for build tooling and development server. Additional development dependencies include testing libraries (Jest, React Testing Library) and ESLint for code quality.

# Useful Websites

- [Firebase Documentation](https://firebase.google.com/docs) - Comprehensive guide for Firebase integration and Firestore setup
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/) - TypeScript patterns and best practices for React development
- [Firestore Data Modeling Guide](https://firebase.google.com/docs/firestore/data-model) - Best practices for NoSQL database design and structure
- [Create React App Documentation](https://create-react-app.dev/docs/getting-started/) - Setup and configuration for React applications
- [MDN Web Docs - JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - Reference for modern JavaScript features

# Future Work

- Implement user authentication to allow multiple users with private note collections
- Add note categorization and tagging system for better organization and filtering
- Develop advanced search functionality with full-text search across note content
- Create rich text editing capabilities with formatting options and image support
- Add collaborative features allowing users to share and collaborate on specific notes
- Implement offline support with local caching and automatic sync when connection is restored
- Add export functionality for notes in various formats (PDF, Markdown, plain text)

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
