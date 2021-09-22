import axios from 'axios';
import store from '../state/store';
import { userSelectors } from '../state/features/user';

const baseUrl = 'https://prayer.herokuapp.com';

export const userApi = {
  signup: (data: { email: string, name: string, password: string }) => axios({
    method: 'POST',
    url: `${baseUrl}/auth/sign-up`,
    data,
  }),
  login: (data: { email: string, password: string }) => axios({
    method: 'POST',
    url: `${baseUrl}/auth/sign-in`,
    data,
  }),
};

export const columnsApi = {
  getAllColumns: () => {
    const token = userSelectors.getToken(store.getState());
    return axios({
      method: 'GET',
      url: `${baseUrl}/columns`,
      headers: { 'Authorization': `Bearer ${token}` },
    });
  },
  createColumn: (data: { title: string, description: string }) => {
    const token = userSelectors.getToken(store.getState());
    return axios({
      method: 'POST',
      url: `${baseUrl}/columns`,
      headers: { 'Authorization': `Bearer ${token}` },
      data,
    });
  },
  getColumnById: (columnId: number) => {
    const token = userSelectors.getToken(store.getState());
    return axios({
      method: 'GET',
      url: `${baseUrl}/columns/${columnId}`,
      headers: { 'Authorization': `Bearer ${token}` },
    });
  },
  updateColumnById: (data: { title: string, description: string }, columnId: number) => {
    const token = userSelectors.getToken(store.getState());
    return axios({
      method: 'PUT',
      url: `${baseUrl}/columns/${columnId}`,
      headers: { 'Authorization': `Bearer ${token}` },
      data,
    });
  },
  deleteColumnById: (columnId: number) => {
    const token = userSelectors.getToken(store.getState());
    return axios({
      method: 'DELETE',
      url: `${baseUrl}/columns/${columnId}`,
      headers: { 'Authorization': `Bearer ${token}` },
    });
  },
};
