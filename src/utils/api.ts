/* eslint-disable */
import axios from 'axios';

const baseUrl = 'https://prayer.herokuapp.com';

export const userApi = {
  signup: (data: { email: string, name: string, password: string }) => axios({
    method: 'post',
    url: `${baseUrl}/auth/sign-up`,
    data,
  }),
  login: (data: { email: string, password: string }) => axios({
    method: 'post',
    url: `${baseUrl}/auth/sign-in`,
    data,
  }),
};
