import axios from "axios";
import { axiosInstance } from "./axiosConfig";

export const uploadPost = (data: FormData) => {
  return axiosInstance.post('/api/v1/post-datas', data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    }
  })
}
  
  //axios.post('/post-datas', data);