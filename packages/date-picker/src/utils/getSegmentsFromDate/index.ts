import { DateSegmentsState } from '../../hooks/useDateSegments/DateSegments.types';

/** Returns a single object with day, month & year segments */
export const getSegmentsFromDate = (date: Date | null): DateSegmentsState => {
  return {
    day: date ? date.getUTCDate() : undefined,
    month: date ? date.getUTCMonth() + 1 : undefined,
    year: date ? date.getUTCFullYear() : undefined,
  } as DateSegmentsState;
};
