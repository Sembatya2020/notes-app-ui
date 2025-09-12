# Overview

As a software engineer, I developed this Notes Management Application to deepen my understanding of modern cloud-integrated web development. This project allowed me to explore the integration between React frontend applications and cloud-based NoSQL databases, specifically focusing on real-time data synchronization and user authentication patterns.

The Notes Management App is a web-based application built with React and TypeScript that integrates with Google Firebase as a cloud database backend. Users can create, edit, delete, and organize personal notes with real-time synchronization across devices. The application features user authentication, persistent data storage, and a responsive user interface. To use the program, users simply need to sign up or log in, then they can start creating and managing their notes through an intuitive web interface.

I wrote this software to gain hands-on experience with cloud database integration, modern React development patterns, and real-time web applications. This project helped me understand how to architect full-stack applications using Firebase as a Backend-as-a-Service (BaaS) solution, implement user authentication flows, and manage state in React applications that interact with external APIs.

[Software Demo Video](http://youtube.link.goes.here)

# Cloud Database

This application uses Google Firebase Firestore, a NoSQL cloud database that provides real-time synchronization and offline support. Firestore is a document-oriented database that stores data in collections and documents, making it ideal for applications that need flexible schema and real-time updates.

The database structure consists of two main collections:
- **users**: Stores user profile information and authentication data
- **notes**: Contains individual note documents with fields including title, content, createdDate, lastModified, userId (for associating notes with users), and tags for organization

Each note document is automatically assigned a unique ID by Firestore, and the userId field creates the relationship between users and their notes, ensuring data security and proper access control.

# Development Environment

I used Visual Studio Code as my primary development environment with extensions for React, TypeScript, and Firebase development. The project was built using Node.js and npm for package management, with Git for version control and GitHub for repository hosting.

The application is developed in TypeScript, a statically typed superset of JavaScript that provides enhanced code reliability and developer experience. Key libraries include React 19 for the user interface framework, Firebase SDK for cloud database integration and authentication, React Router for navigation, and Create React App for build tooling and development server. Additional development dependencies include testing libraries (Jest, React Testing Library) and ESLint for code quality.

# Useful Websites

- [Firebase Documentation](https://firebase.google.com/docs) - Comprehensive guide for Firebase integration
- [React TypeScript Documentation](https://react-typescript-cheatsheet.netlify.app/) - TypeScript patterns for React development
- [Firestore Data Modeling](https://firebase.google.com/docs/firestore/data-model) - Best practices for NoSQL database design
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) - Testing strategies for React components

# Future Work

- Implement rich text editing capabilities with formatting options and image support
- Add note categorization and tagging system for better organization
- Develop advanced search functionality with full-text search across note content
- Create mobile-responsive design improvements and consider a React Native mobile app
- Add collaborative features allowing users to share and collaborate on notes
- Implement offline support with local caching and sync when connection is restored
- Add export functionality for notes in various formats (PDF, Markdown, etc.)

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

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
