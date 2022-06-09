import dairyData from "../../data/diaries";
import { DairyEntry } from "../types";


const diaries: Array<DairyEntry> = dairyData;

const getEntires = (): Array<DairyEntry> => {
  return diaries;
};


const addDiary = () => {
  return null;
};


export default {
  getEntires,
  addDiary
};

