'use client';

import { css } from 'styled-components';

const distanceHorizontal = ({
  top = '0px',
  bottom = '0px',
  isFullScreen = false,
}: {
  top?: string;
  bottom?: string;
  isFullScreen?: boolean;
}) => css`
  max-width: ${isFullScreen ? '100%' : '1440px'};
  padding: ${`${top} 120px ${bottom} 120px`};

  @media ${(props) => props.theme.breakpoints.xxlMax} {
    padding: ${`${top} 64px ${bottom} 64px`};
  }

  @media ${(props) => props.theme.breakpoints.xlMax} {
    padding: ${`${top} 32px ${bottom} 32px`};
  }

  @media ${(props) => props.theme.breakpoints.mdMax} {
    padding: ${`${top} 24px ${bottom} 24px`};
  }

  @media ${(props) => props.theme.breakpoints.smMax} {
    padding: ${`${top} 16px ${bottom} 16px`};
  }
`;

const distanceVertical = () => css`
  @media ${({ theme }) => theme.breakpoints.xlMax} {
    ${distanceHorizontal({ top: '60px', bottom: '60px', isFullScreen: false })}
  }

  @media ${({ theme }) => theme.breakpoints.lgMax} {
    ${distanceHorizontal({ top: '50px', bottom: '50px', isFullScreen: false })}
  }

  @media ${({ theme }) => theme.breakpoints.mdMax} {
    ${distanceHorizontal({ top: '40px', bottom: '40px', isFullScreen: false })}
  }

  @media ${({ theme }) => theme.breakpoints.smMax} {
    ${distanceHorizontal({ top: '30px', bottom: '30px', isFullScreen: false })}
  }
`;

export { distanceHorizontal, distanceVertical };
