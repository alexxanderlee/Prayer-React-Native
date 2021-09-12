/* eslint-disable */
import axios from 'axios';

const baseUrl = 'https://prayer.herokuapp.com';

export const userApi = {
  signup: (email: string, name: string, password: string) => axios({
    method: 'post',
    url: baseUrl + '/auth/sign-up',
    data: { email, name, password },
  }),
  login: (email: string, password: string) => axios({
    method: 'post',
    url: baseUrl + '/auth/sign-in',
    data: { email, password },
  }),
};
