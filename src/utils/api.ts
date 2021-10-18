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

export const prayersApi = {
  getAllPrayers: () => {
    const token = userSelectors.getToken(store.getState());
    return axios({
      method: 'GET',
      url: `${baseUrl}/prayers`,
      headers: { 'Authorization': `Bearer ${token}` },
    });
  },
  getPrayerById: (prayerId: number) => {
    const token = userSelectors.getToken(store.getState());
    return axios({
      method: 'GET',
      url: `${baseUrl}/prayers/${prayerId}`,
      headers: { 'Authorization': `Bearer ${token}` },
    });
  },
  updatePrayerById: (data: { title: string, description: string, checked: boolean }, prayerId: number) => {
    const token = userSelectors.getToken(store.getState());
    return axios({
      method: 'PUT',
      url: `${baseUrl}/prayers/${prayerId}`,
      headers: { 'Authorization': `Bearer ${token}` },
      data,
    });
  },
  deletePrayerById: (prayerId: number) => {
    const token = userSelectors.getToken(store.getState());
    return axios({
      method: 'DELETE',
      url: `${baseUrl}/prayers/${prayerId}`,
      headers: { 'Authorization': `Bearer ${token}` },
    });
  },
  createPrayerByColumnId: (data: { title: string, description: string, checked: boolean }, columnId: number) => {
    const token = userSelectors.getToken(store.getState());
    return axios({
      method: 'POST',
      url: `${baseUrl}/columns/${columnId}/prayers`,
      headers: { 'Authorization': `Bearer ${token}` },
      data,
    });
  },
};

export const commentsApi = {
  getAllComments: () => {
    const token = userSelectors.getToken(store.getState());
    return axios({
      method: 'GET',
      url: `${baseUrl}/comments`,
      headers: { 'Authorization': `Bearer ${token}` },
    });
  },
  getCommentById: (commentId: number) => {
    const token = userSelectors.getToken(store.getState());
    return axios({
      method: 'GET',
      url: `${baseUrl}/comments/${commentId}`,
      headers: { 'Authorization': `Bearer ${token}` },
    });
  },
  createCommentByPrayerId: (data: { body: string }, prayerId: number) => {
    const token = userSelectors.getToken(store.getState());
    return axios({
      method: 'POST',
      url: `${baseUrl}/prayers/${prayerId}/comments`,
      headers: { 'Authorization': `Bearer ${token}` },
      data,
    });
  },
  deleteCommentById: (commentId: number) => {
    const token = userSelectors.getToken(store.getState());
    return axios({
      method: 'DELETE',
      url: `${baseUrl}/comments/${commentId}`,
      headers: { 'Authorization': `Bearer ${token}` },
    });
  },
  updateCommentById: (data: { body: string }, commentId: number) => {
    const token = userSelectors.getToken(store.getState());
    return axios({
      method: 'PUT',
      url: `${baseUrl}/comments/${commentId}`,
      headers: { 'Authorization': `Bearer ${token}` },
      data,
    });
  },
};
