// stores/isUserLogin.js
import axios from 'axios';
const apiUrl = import.meta.env.VITE_API_URL

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

    if (response.data.success) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error('Error validating token:', error);
    return false;
  }
}
