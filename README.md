# Wallet App

This is a simple wallet application built with Next.js. It allows users to manage their balance, contacts, and transactions.

## Technologies Used

- [Next.js](https://nextjs.org/) - React Framework
- [React](https://reactjs.org/) - UI Library
- [TypeScript](https://www.typescriptlang.org/) - Programming Language
- [Tailwind CSS](https://tailwindcss.com/) - CSS Framework
- [TanStack Query](https://tanstack.com/query/latest) - Data Fetching and State Management
- [Zustand](https://zustand-demo.pmnd.rs/) - State Management
- [React Hook Form](https://react-hook-form.com/) - Form Handling
- [Lucide React](https://lucide.dev/) - Icons
- [IndexedDB] - For storage some entities locally

## Architecture

### Folder Structure

The project follows a feature-based folder structure.

```
/src
|-- /app # Main folder for Next.js pages and layouts
|-- /components # Shared and reusable components
|-- /features # Contains all business logic, divided by feature
|   |-- /balance # Everything related to the user'''s balance
|   |-- /contacts # Everything related to the user'''s contacts
|   |-- /home # Components and hooks for the home page
|   |-- /transactions # Logic for handling transactions
|   `-- /user # User-related logic
|-- /lib # Core libraries and utilities
|-- /types # TypeScript type definitions
`-- /utils # Utility functions
```

### IndexedDB API

The application uses IndexedDB for local data storage. The `dbClient.ts` file provides a simple API to interact with the database.

- **`openDB()`**: Opens a connection to the IndexedDB database. It also handles database upgrades and preloads default data.
- **`dbClient.get(storeName, id)`**: Retrieves a single record from a store by its ID.
- **`dbClient.set(storeName, data)`**: Adds or updates a record in a store.
- **`dbClient.getAll(storeName)`**: Retrieves all records from a store.
- **`dbClient.getPaginated(storeName, page, limit)`**: Retrieves a paginated list of records from a store.
- **`dbClient.getDB()`**: Returns the database instance.

The `preloadIndexedDBDefaultData.ts` file is responsible for populating the database with initial data when the application is first loaded.

### API Client

The `apiClient.ts` file provides a simple wrapper around the `fetch` API for making requests to the Random User API.

- **`apiFetch(endpoint, options)`**: A generic fetch function that handles request configuration, JSON serialization, and error handling.
- **`apiClient.get(endpoint, options)`**: A convenience method for making GET requests.
- **`apiClient.post(endpoint, body, options)`**: A convenience method for making POST requests.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js (v20 or later)
- npm

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/rabsdevfe/wallet
   ```
2. Install NPM packages
   ```sh
   npm install
   ```

### Running the Application

To run the application in development mode, use the following command:

```sh
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Other Commands

- **Build for production:**
  ```sh
  npm run build
  ```
- **Run production build:**
  ```sh
  npm run start
  ```
- **Lint the code:**
  ```sh
  npm run lint
  ```