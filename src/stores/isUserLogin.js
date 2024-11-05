// stores/isUserLogin.js
import axios from 'axios';
const apiUrl = import.meta.env.VITE_API_URL;

export async function isUserLogin() {
  const token = localStorage.getItem('wpToken');

  if (!token) {
    return false;
  }

  try {
    const response = await axios.post(`${apiUrl}/wp-json/jwt-auth/v1/token/validate`, null, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    return response.data.success;
  } catch (error) {
    console.error('Error validating token:', error);
    return false;
  }
}
