import { css } from 'styled-components';
import breakpoints from '@constants/breakpoints';

export default css`
  max-width: 46.5rem;
  width: 100%;
  padding: 0 0.87rem;
  margin: 0 auto;

  @media (max-width: ${breakpoints.md}) {
    max-width: 24.37rem;
  }
`;
