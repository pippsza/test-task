import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://cyberpioneersinc.com/api";

export const fetchAll = createAsyncThunk(
  "cases/fetchAll",
  async (_, thunkAPI) => {
    try {
      console.log("fetching");
      const res = await axios.get("/cases");
      //   console.log(res.data);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
