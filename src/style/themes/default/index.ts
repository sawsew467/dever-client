import 'styled-components';

import colors from './colors';
import fontSize from './fontSize';
import fontWeight from './fontWeight';
import breakpoints from './breakpoints';
import radius from './radius';
import shadow from './shadow';

export const defaultTheme = {
  colors,
  fontSize,
  fontWeight,
  breakpoints,
  radius,
  shadow,
} as const;

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: typeof colors;
    fontSize: typeof fontSize;
    fontWeight: typeof fontWeight;
    breakpoints: typeof breakpoints;
    radius: typeof radius;
    shadow: typeof shadow;
  }
}
