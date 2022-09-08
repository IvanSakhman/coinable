import styled from 'styled-components';
import ArrowLeft from '@svg-components/arrow-left';

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  margin: 2.37rem auto 2.12rem;
`;

export const ArrowRight = styled(ArrowLeft)`
  transform: rotate(180deg);
`;

export const CurrentPage = styled.p`
  padding: 0 0.75rem;
  color: var(--blackColor);
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.19rem;
`;
