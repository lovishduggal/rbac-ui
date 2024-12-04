# RBAC UI

## Project Overview

RBAC UI is a web application designed to facilitate the management of Role-Based Access Control (RBAC) roles and permissions. It provides a comprehensive interface for administrators to create, update, and manage user roles, permissions, and their associations, ensuring secure access to resources within an application. Built with Next.js and React, this application leverages modern web technologies to deliver a responsive and user-friendly experience.

## Features

- **User Management**: Administrators can view, create, and manage users within the application.
- **Role Management**: Create and manage roles that define user permissions and access levels.
- **Permission Management**: Define and manage permissions that can be assigned to roles.
- **Dynamic Search and Sorting**: Easily search and sort users, roles, and permissions using dynamic search fields and sorting dropdowns.
- **Pagination**: Navigate through large datasets with pagination controls.
- **Responsive Design**: The application is designed to be fully responsive, providing a seamless experience on both desktop and mobile devices.
- **Real-time Updates**: Changes made in the application are reflected in real-time, ensuring that users always see the most current data.
- **Dialog Forms**: Use modal dialogs for creating and editing roles and permissions, enhancing user experience by keeping the context intact.
- **Theming Support**: The application supports light and dark themes, allowing users to choose their preferred interface.

## Tech Stack

- **Frontend**: Next.js, React, TypeScript, Tailwind CSS
- **State Management**: React Query
- **Form Handling**: React Hook Form
- **Validation**: Zod
- **Icons**: Lucide React
- **API**: Axios for HTTP requests
- **Database**: JSON Server (for mock data)

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js (version 14 or later)
- npm, yarn, or pnpm (for package management)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/lovishduggal/rbac-ui.git
   cd rbac-ui
   ```

2. Install the dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

### Running the Development Server

To run the development server, use the following command:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application in action.

## Folder Structure

The project has the following folder structure:

```
rbac-ui/
├── app/                     # Application files
│   ├── (dashboard)/         # Dashboard layout and components
│   ├── globals.css          # Global styles
│   └── layout.tsx           # Main layout component
├── components/              # Reusable UI components
│   ├── dashboard/           # Dashboard related components
│   ├── permissions/         # Permission management components
│   ├── roles/               # Role management components
│   ├── users/               # User management components
│   └── ui/                  # UI components (buttons, forms, etc.)
├── db.json                  # Mock database for user roles and permissions
├── package.json             # Project metadata and dependencies
├── postcss.config.mjs       # PostCSS configuration
├── tailwind.config.ts       # Tailwind CSS configuration
└── tsconfig.json            # TypeScript configuration
```

## API Reference

The application interacts with a mock API defined in `db.json`. The following endpoints are available:

- **GET /users**: Retrieve a list of users.
- **GET /roles**: Retrieve a list of roles.
- **GET /permissions**: Retrieve a list of permissions.
- **POST /users**: Create a new user.
- **POST /roles**: Create a new role.
- **POST /permissions**: Create a new permission.
- **PUT /users/:id**: Update an existing user.
- **PUT /roles/:id**: Update an existing role.
- **PUT /permissions/:id**: Update an existing permission.
- **DELETE /users/:id**: Delete a user.
- **DELETE /roles/:id**: Delete a role.
- **DELETE /permissions/:id**: Delete a permission.

## Learn More

To learn more about Next.js, visit the [Next.js Documentation](https://nextjs.org/docs).

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License.
