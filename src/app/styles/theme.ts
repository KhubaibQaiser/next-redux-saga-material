import { pxToRem } from '../../common/utils/styles';
import { createMuiTheme, Theme } from '@material-ui/core/styles';

import { BaseColorPalette } from './palette';

const theme: Theme = createMuiTheme({
  palette: {
    ...BaseColorPalette,
    primary: {
      main: BaseColorPalette.brand.main,
    },
    error: {
      main: BaseColorPalette.red.main,
    },
  },
  typography: {
    fontFamily: 'Inter',
    allVariants: {
      color: BaseColorPalette.neutral.dark,
      lineHeight: pxToRem(20),
      fontSize: pxToRem(14),
    },
    button: {
      height: pxToRem(36),
      fontWeight: 600,
      textTransform: 'none',
    },
    h1: {
      fontSize: pxToRem(20),
      fontWeight: 500,
    },
    h2: {
      fontSize: pxToRem(16),
      fontWeight: 500,
    },
  },
  props: {
    MuiButton: {
      disableElevation: true,
    },
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        a: {
          color: 'inherit',
          textDecoration: 'none',
        },
      },
    },
    MuiButton: {
      root: {
        '&$disabled': {
          backgroundColor: `${BaseColorPalette.neutral.light} !important`,
          color: BaseColorPalette.neutral.secondary,
        },
      },
      containedPrimary: {
        backgroundColor: BaseColorPalette.teal.main,
        color: BaseColorPalette.white,
        '&:hover': {
          backgroundColor: BaseColorPalette.teal.dark,
          color: BaseColorPalette.white,
        },
      },
      containedSecondary: {
        backgroundColor: BaseColorPalette.teal.light,
        color: BaseColorPalette.teal.dark,
        '&:hover': {
          backgroundColor: BaseColorPalette.teal.secondary,
          color: BaseColorPalette.teal.dark,
        },
      },
      contained: {
        backgroundColor: BaseColorPalette.neutral.light,
        color: BaseColorPalette.neutral.dark,
        '&:hover': {
          backgroundColor: BaseColorPalette.neutral.light,
          color: BaseColorPalette.teal.main,
        },
      },
      startIcon: {
        marginRight: pxToRem(6),
      },
    },
  },
});

export default theme;
