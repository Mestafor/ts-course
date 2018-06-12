import { AxiosPromise } from "axios";
import { axiosInstance } from "../config/axios.config";


export const api = {
  getItems(key: string): AxiosPromise {
    return axiosInstance()
      .get(`participants?key=${key}`)
  }
}