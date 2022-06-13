import diaries from "../../data/diaries";
import { DairyEntry, NonSensitiveEntry } from "../types";


const getEntires = (): Array<DairyEntry> => {
  return diaries;
};


const getNonSensitiveEntries = (): NonSensitiveEntry[] => {
  return diaries.map(({ id, date, weather, visibility }) => ({
    id,
    date,
    weather,
    visibility
  }));
};


const addDiary = () => {
  return [];
};


export default {
  getEntires,
  addDiary,
  getNonSensitiveEntries
};

