// stores/loginUser.js
import axios from 'axios';
const apiUrl = import.meta.env.VITE_API_URL

export async function loginUser(username, password) {
  try {
    const response = await axios.post(`${apiUrl}/wp-json/jwt-auth/v1/token`, {
      username,
      password
    });

    if (response.data.token) {
      localStorage.setItem('wpToken', response.data.token);
      return response.data.token;
    } else {
      throw new Error('Login failed. No token received.');
    }
  } catch (error) {
    console.error('Error logging in:', error);
    return null;
  }
}
