import axios from 'axios';

const KEY = 'AIzaSyCdc8mpM7hSpFBrrZtDBmumbhK2IVLPyH0';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 6,
    key: KEY
  }
});
