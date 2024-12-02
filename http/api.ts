import type { User } from '@/types';
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
