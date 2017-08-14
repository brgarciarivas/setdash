

const isProduction = process.env.NODE_ENV === 'production';

const API_BASE_URL = isProduction ? 'https://setdash-11.herokuapp.com' : 'http://localhost:3000';

export const API_ROOT = `${API_BASE_URL}`;

