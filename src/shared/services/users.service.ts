import axios, { AxiosResponse } from 'axios';
import { User } from '@/shared/models/user.model';

const API_URL = process.env.VUE_APP_API_URL + '/api/v1/';

export async function createUser(model: User): Promise<any> {
  try {   
    const response: AxiosResponse<any> = await axios.post(API_URL + 'persons/create-users', model);
    console.log('Respuesta:', response);
    return response;    
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Error en la solicitud:', error.message);      
    }else {
      console.error('Error inesperado:', error);
    }
    throw error;
  }
}

export async function login(model: { email: string, password: string }): Promise<any> {
  try {   
    const response: AxiosResponse<any> = await axios.post(API_URL + 'auths/login', model);
    console.log('Respuesta:', response);
    return response;    
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Error en la solicitud:', error.message);      
    }else {
      console.error('Error inesperado:', error);
    }
    throw error;
  }
}

export async function getUsers(): Promise<any> {
  try {   
    const response: AxiosResponse<any> = await axios.get(API_URL + 'persons');
    console.log('Respuesta:', response);
    return response;    
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Error en la solicitud:', error.message);      
    }else {
      console.error('Error inesperado:', error);
    }
    throw error;
  }
}

export async function deleteUserById(id: number): Promise<any> {
  try { 
    console.log('id:', API_URL + 'persons/' + id);    
    const response: AxiosResponse<any> = await axios.delete(API_URL + 'persons/' + id);
    console.log('Respuesta:', response);
    return response;    
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Error en la solicitud:', error.message);      
    }else {
      console.error('Error inesperado:', error);
    }
    throw error;
  }
}

export async function updateUserById(id: number, model: any): Promise<any> {
  try {   
    const response: AxiosResponse<any> = await axios.put(API_URL + 'persons/' + id, model);
    console.log('Respuesta:', response);
    return response;    
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Error en la solicitud:', error.message);      
    }else {
      console.error('Error inesperado:', error);
    }
    throw error;
  }
}