import axios from 'axios';

axios.defaults.headers.common['X-CSRF-Token'] = 
  document.querySelector('[name="csrf-token"]')?.getAttribute('content');

export default axios;