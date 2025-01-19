import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCamperById, searchCampers } from "../../api/api-campers";
import { defaultParams } from "../../utils/params";

export const fetchCampers = createAsyncThunk(
  "campers/fetchCampers",
  async ({ params, page } = { params: defaultParams, page: 1 }, thunkAPI) => {
    try {
      const campers = await searchCampers(params, page);
      return campers;
    } catch (error) {
      return thunkAPI.rejectWithValue({
        message: error.message,
        status: error.status,
      });
    }
  }
);

export const fetchCamper = createAsyncThunk(
  "campers/fetchById",
  async (id, thunkAPI) => {
    try {
      const camper = await getCamperById(id);
      return camper;
    } catch (error) {
      return thunkAPI.rejectWithValue({
        message: error.message,
        status: error.status,
      });
    }
  }
);
