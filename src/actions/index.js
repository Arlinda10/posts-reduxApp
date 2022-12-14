import axios from "axios";

export const FETCH_POSTS = 'FETCH_POSTS';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=dfjgkdlfjglidx';

export function fetchPosts() {
  const  request =  axios.get(`${ROOT_URL}/posts`)

    return {
       type: FETCH_POSTS,
       payload: request
    }
}