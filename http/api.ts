import type { Permission, Role, User } from '@/types';
import { api } from './client';

// Users API:
export const createUser = async (data: User) => {
  const response = await api.post('/users', data);
  return response.data;
};

export const getAllUsers = async () => {
  const response = await api.get('/users');
  return response.data;
};

export const updateUserDetails = async (data: User) => {
  const updatedData = { ...data, id: undefined };
  const response = await api.put(`/users/${data.id}`, updatedData);
  return response.data;
};

export const getUserById = async (id: string) => {
  const response = await api.get(`/users/${id}`);
  return response.data;
};

export const deleteUser = async (id: string) => {
  const response = await api.delete(`/users/${id}`);
  return response.data;
};

// Roles API:
export const createRole = async (data: Role) => {
  const response = await api.post('/roles', data);
  return response.data;
};

export const getAllRoles = async () => {
  const response = await api.get('/roles');
  return response.data;
};

export const getRoleById = async (id: string) => {
  const response = await api.get(`/roles/${id}`);
  return response.data;
};

export const updateRoleDetails = async (data: Role) => {
  const updatedData = { ...data, id: undefined };
  const response = await api.put(`/roles/${data.id}`, updatedData);
  return response.data;
};

export const deleteRole = async (id: string) => {
  const response = await api.delete(`/roles/${id}`);
  return response.data;
};

// Permissions API:
export const createPermission = async (data: Permission) => {
  const response = await api.post('/permissions', data);
  return response.data;
};

export const getAllPermissions = async () => {
  const response = await api.get('/permissions');
  return response.data;
};

export const getPermissionById = async (id: string) => {
  const response = await api.get(`/permissions/${id}`);
  return response.data;
};

export const updatePermissionDetails = async (data: Permission) => {
  const updatedData = { ...data, id: undefined };
  const response = await api.put(`/permissions/${data.id}`, updatedData);
  return response.data;
};

export const deletePermission = async (id: string) => {
  const response = await api.delete(`/permissions/${id}`);
  return response.data;
};
