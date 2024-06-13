import { Frequency as TFrequency } from "../api/frequency/Frequency";

export const FREQUENCY_TITLE_FIELD = "name";

export const FrequencyTitle = (record: TFrequency): string => {
  return record.name?.toString() || String(record.id);
};
