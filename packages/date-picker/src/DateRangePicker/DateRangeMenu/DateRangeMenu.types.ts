import { PopoverProps, PortalControlProps } from '@leafygreen-ui/popover';

import { DateRangeComponentProps } from '../DateRangeComponent';

export type DateRangeMenuProps = PortalControlProps &
  Pick<PopoverProps, 'refEl'> &
  Pick<
    DateRangeComponentProps,
    'value' | 'setValue' | 'showQuickSelection' | 'handleValidation' // TODO: Setter
  > & {};
