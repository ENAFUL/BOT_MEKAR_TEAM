// src/services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // আপনার সার্ভার লিঙ্ক
});

export const getVideos = () => api.get('/videos');
export const postComment = (id, data) => api.post(`/videos/${id}/comment`, data);
export default api;
