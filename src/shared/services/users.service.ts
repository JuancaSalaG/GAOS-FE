import axios, { AxiosResponse } from 'axios';
import { User } from '@/shared/models/user.model';

const API_URL = process.env.VUE_APP_API_URL + '/api/v1/';

export async function createUser(model: User): Promise<any> {
  try {
    console.log('💡 ', API_URL, model);    
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