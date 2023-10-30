import { DateRangeType } from '@leafygreen-ui/date-picker/shared/types';
import {
  addMonthsUTC,
  getFirstOfMonth,
  isDefined,
} from '@leafygreen-ui/date-picker/utils';

export const getInitialMonth = (
  value: DateRangeType | undefined,
  today: Date,
): Date => {
  if (isDefined(value)) {
    const [start, end] = value;
    // `start` if it exists,
    // otherwise one month before `end` if it exists,
    // fallback to today
    const initial = start ? start : end ? addMonthsUTC(end, -1) : today;

    return getFirstOfMonth(initial);
  }

  return getFirstOfMonth(today);
};
