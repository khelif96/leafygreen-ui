import { css, cx } from '@leafygreen-ui/emotion';
import { createUniqueClassName, Theme } from '@leafygreen-ui/lib';
import { palette } from '@leafygreen-ui/palette';
import {
  fontFamilies,
  fontWeights,
  spacing,
  transitionDuration,
  typeScales,
} from '@leafygreen-ui/tokens';

import { CalendarCellState } from './CalendarCell.types';

const CELL_SIZE = 28;
export const indicatorClassName = createUniqueClassName('calendar-cell');

const calendarCellFocusRing: Record<Theme, string> = {
  [Theme.Light]: `0 0 0 1px ${palette.white}, 0 0 0 3px ${palette.blue.light1}`,
  [Theme.Dark]: `0 0 0 1px ${palette.black}, 0 0 0 3px ${palette.blue.light1}`,
};

export const calendarCellStyles = css`
  position: relative;
  font-family: ${fontFamilies.default};
  font-size: ${typeScales.body1.fontSize}px;
  font-variant: tabular-nums;
  height: ${CELL_SIZE}px;
  width: ${CELL_SIZE}px;
  cursor: pointer;
  text-align: center;
  padding: 0;
  z-index: 0;
`;

type ThemedStateStyles = Record<Theme, Record<CalendarCellState, string>>;

const _baseActiveCellStyles: Record<Theme, string> = {
  [Theme.Light]: css`
    color: ${palette.white};

    & > .${indicatorClassName} {
      background-color: ${palette.blue.dark1};
    }
  `,
  [Theme.Dark]: css`
    color: ${palette.black};

    & > .${indicatorClassName} {
      background-color: ${palette.blue.light1};
    }
  `,
};

const _baseRangeStartStyles = css`
  &:before {
    content: '';
    position: absolute;
    width: 50%;
    left: 0;
    top: 0;
    bottom: 0;
    z-index: 0;
  }
`;

const _baseRangeEndStyles = css`
  &:after {
    content: '';
    position: absolute;
    width: 50%;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 0;
  }
`;

/**
 * Base styles for each state
 */
export const calendarCellStateStyles: ThemedStateStyles = {
  [Theme.Light]: {
    [CalendarCellState.Default]: css`
      color: ${palette.black};
    `,
    [CalendarCellState.Disabled]: css`
      color: ${palette.gray.light1};
      cursor: not-allowed;
      pointer-events: none;
    `,
    [CalendarCellState.Active]: _baseActiveCellStyles[Theme.Light],
    [CalendarCellState.Start]: cx(
      _baseActiveCellStyles[Theme.Light],
      _baseRangeStartStyles,
      css`
        &:before {
          background-color: ${palette.blue.light3};
        }
      `,
    ),
    [CalendarCellState.End]: cx(
      _baseActiveCellStyles[Theme.Light],
      _baseRangeEndStyles,
      css`
        &:after {
          background-color: ${palette.blue.light3};
        }
      `,
    ),
    [CalendarCellState.Range]: cx(
      _baseRangeStartStyles,
      _baseRangeEndStyles,
      css`
        color: ${palette.black};
        &:before,
        &:after {
          background-color: ${palette.blue.light3};
        }
      `,
    ),
  },
  [Theme.Dark]: {
    [CalendarCellState.Default]: css`
      color: ${palette.gray.light2};
    `,
    [CalendarCellState.Disabled]: css`
      color: ${palette.gray.dark1};
      cursor: not-allowed;
      pointer-events: none;
    `,
    [CalendarCellState.Active]: _baseActiveCellStyles[Theme.Dark],
    [CalendarCellState.Start]: cx(
      _baseActiveCellStyles[Theme.Dark],
      _baseRangeStartStyles,
      css`
        &:before {
          background-color: ${palette.blue.dark3};
        }
      `,
    ),
    [CalendarCellState.End]: cx(
      _baseActiveCellStyles[Theme.Dark],
      _baseRangeEndStyles,
      css`
        &:after {
          background-color: ${palette.blue.dark3};
        }
      `,
    ),
    [CalendarCellState.Range]: cx(
      _baseRangeStartStyles,
      _baseRangeEndStyles,
      css`
        color: ${palette.blue.light3};
        &:before,
        &:after {
          background-color: ${palette.blue.dark3};
        }
      `,
    ),
  },
};

/**
 * Styles for the current date
 */
export const calendarCellCurrentStyles: ThemedStateStyles = {
  [Theme.Light]: {
    [CalendarCellState.Default]: css`
      color: ${palette.blue.base};
    `,
    [CalendarCellState.Active]: css`
      color: ${palette.white};
    `,
    [CalendarCellState.Start]: css`
      color: ${palette.white};
    `,
    [CalendarCellState.End]: css`
      color: ${palette.white};
    `,
    [CalendarCellState.Range]: css`
      color: ${palette.blue.dark1};
    `,
    [CalendarCellState.Disabled]: css``, // No additional styles
  },
  [Theme.Dark]: {
    [CalendarCellState.Default]: css`
      color: ${palette.blue.light1};
    `,
    [CalendarCellState.Active]: css`
      color: ${palette.black};
    `,
    [CalendarCellState.Start]: css`
      color: ${palette.black};
    `,
    [CalendarCellState.End]: css`
      color: ${palette.black};
    `,
    [CalendarCellState.Range]: css`
      color: ${palette.blue.light1};
    `,
    [CalendarCellState.Disabled]: css``, // No additional styles
  },
};

/**
 * Highlighted / Focus styles
 */
const highlightSelector = '&:focus-visible, &[data-highlight="true"]'; // using a data selector lets us easily test these states

export const calendarCellHighlightStyles: Record<Theme, string> = {
  [Theme.Light]: css`
    ${highlightSelector} {
      outline: none;

      & > .${indicatorClassName} {
        box-shadow: ${calendarCellFocusRing.light};
        transition: ease-in-out ${transitionDuration.default}ms box-shadow;
      }
    }
  `,
  [Theme.Dark]: css`
    ${highlightSelector} {
      outline: none;

      & > .${indicatorClassName} {
        transition: ease-in-out ${transitionDuration.default}ms box-shadow;

        box-shadow: ${calendarCellFocusRing.dark};
      }
    }
  `,
};

/**
 * Hover Styles
 */
const hoverSelector = '&:hover, &[data-hover="true"]';
const _defaultThemeHoverStyles: Record<Theme, string> = {
  [Theme.Light]: css`
    ${hoverSelector} {
      color: ${palette.black};

      & > .${indicatorClassName} {
        background-color: ${palette.gray.light2};
      }
    }
  `,
  [Theme.Dark]: css`
    ${hoverSelector} {
      color: ${palette.white};

      & > .${indicatorClassName} {
        background-color: ${palette.gray.dark3};
      }
    }
  `,
};

const _activeHoverStyles: Record<Theme, string> = {
  [Theme.Light]: css`
    ${hoverSelector} {
      & > .${indicatorClassName} {
        background-color: ${palette.blue.dark2};
      }
    }
  `,
  [Theme.Dark]: css`
    ${hoverSelector} {
      & > .${indicatorClassName} {
        background-color: ${palette.blue.light2};
      }
    }
  `,
};

export const calendarCellHoverStyles: ThemedStateStyles = {
  [Theme.Light]: {
    [CalendarCellState.Default]: _defaultThemeHoverStyles[Theme.Light],
    [CalendarCellState.Active]: _activeHoverStyles[Theme.Light],
    [CalendarCellState.Start]: _activeHoverStyles[Theme.Light],
    [CalendarCellState.End]: _activeHoverStyles[Theme.Light],
    [CalendarCellState.Range]: css`
      ${hoverSelector} {
        & > .${indicatorClassName} {
          background-color: ${palette.blue.light2};
        }
      }
    `,
    [CalendarCellState.Disabled]: css``,
  },
  [Theme.Dark]: {
    [CalendarCellState.Default]: _defaultThemeHoverStyles[Theme.Dark],
    [CalendarCellState.Active]: _activeHoverStyles[Theme.Dark],
    [CalendarCellState.Start]: _activeHoverStyles[Theme.Dark],
    [CalendarCellState.End]: _activeHoverStyles[Theme.Dark],
    [CalendarCellState.Range]: css`
      ${hoverSelector} {
        & > .${indicatorClassName} {
          background-color: ${palette.blue.dark2};
        }
      }
    `,
    [CalendarCellState.Disabled]: css``,
  },
};

export const currentStyles: Record<Theme, string> = {
  [Theme.Light]: css`
    color: ${palette.blue.base};
    font-weight: ${fontWeights.bold};
  `,
  [Theme.Dark]: css`
    color: ${palette.blue.light1};
    font-weight: ${fontWeights.bold};
  `,
};

export const indicatorBaseStyles = css`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  border-radius: 100%;
  outline-offset: -1px;
`;

export const cellTextStyles = css`
  position: relative;
  z-index: 1;
`;
export const cellTextCurrentStyles = css`
  font-weight: ${fontWeights.medium};

  &:after {
    position: absolute;
    content: '';
    bottom: 0;
    left: 50%;
    transform: translate(-50%);
    height: 1px;
    width: ${spacing[2]}px;
    background-color: currentColor;
    border-radius: 1px;
  }
`;
