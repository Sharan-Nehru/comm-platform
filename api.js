import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000',
  withCredentials: true
});

export const sendEmail = (emailData) => api.post('/emails/send', emailData);
export const getEmailHistory = () => api.get('/emails/history');
export const googleLogin = () => window.location.href = 'http://localhost:5000/auth/google';
