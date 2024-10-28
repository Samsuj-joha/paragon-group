import Cookies from 'js-cookie';

const TOKEN_NAME = 'auth_token';
const JWT_EXPIRY = 1; // 1 day

// Mock token creation function
export function createToken(userData) {
  // JSON.stringify to mimic token generation (not secure, just for example purposes)
  return JSON.stringify(userData);
}

// Save the token to cookies
export function setToken(token) {
  Cookies.set(TOKEN_NAME, token, { expires: JWT_EXPIRY, sameSite: 'Strict' });
}

// Retrieve the token from cookies
export function getToken() {
  const token = Cookies.get(TOKEN_NAME);
  return token ? JSON.parse(token) : null; // Parse token to retrieve user data
}

// Remove token to log out the user
export function removeToken() {
  Cookies.remove(TOKEN_NAME);
}


export function decodeToken(token) {
  try {
    const parts = token.split('.');
    if (parts.length !== 3) {
      throw new Error('Invalid token structure');
    }

    const base64Url = parts[1]; // The payload is the second part
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    
    // Decode the payload
    const jsonPayload = decodeURIComponent(
      Array.from(atob(base64))
        .map(c => '%' + c.charCodeAt(0).toString(16).padStart(2, '0'))
        .join('')
    );

    return JSON.parse(jsonPayload);
  } catch (error) {
    console.error('Failed to decode token:', error);
    return null;
  }
}

