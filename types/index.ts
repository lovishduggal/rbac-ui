export interface User {
  id?: string; // Unique identifier for the user
  username: string; // Username of the user
  email: string; // Email address of the user
  role: string; // Role of the user (e.g., Admin, Editor, Viewer)
  status: string; // Status of the user (e.g., Active, Inactive)
}

// Define the Users type as an array of User
export type Users = User[];

export interface Role {
  id?: string; // Unique identifier for the role
  rolename: string; // Name of the role
  description: string; // Description of the role
  permissions: string[]; // Permissions associated with the role
}
export type Roles = Role[];
