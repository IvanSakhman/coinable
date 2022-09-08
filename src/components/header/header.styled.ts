import styled from 'styled-components';
import searchIcon from '@images/search-icon.svg';
import breakpoints from '@constants/breakpoints';
import wrapperStyle from '@components/wrapper-style';
import { SVGType } from '@interfaces/image';

const { src } = searchIcon as SVGType;

export const StyledHeader = styled.header`
  position: sticky;
  z-index: 5;
  top: 0;
  padding: 0.75rem 0;
  border-bottom: 1px solid var(--additionalColor);
  background-color: var(--whiteColor);
`;

export const Container = styled.div`
  ${wrapperStyle};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.62rem;

  @media (max-width: ${breakpoints.md}) {
    gap: 0.87rem;
  }
`;

export const Logo = styled.p`
  color: var(--blackColor);
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1.81rem;
`;

export const StyledInput = styled.input`
  max-width: 22.62rem;
  width: 100%;
  padding: 0.56rem 0 0.56rem 2.37rem;
  border: none;
  border-radius: 1.87rem;
  background: var(--lightColor) url(${src}) no-repeat 0.87rem center;
  font-family: var(--mainFont);
  font-size: 0.87rem;
  line-height: 1.06rem;
  outline: none;
  cursor: pointer;

  &::placeholder {
    color: var(--lightMediumColor);
  }

  @media (max-width: ${breakpoints.md}) {
    max-width: 16.62rem;
  }
`;

export const DateContainer = styled.p`
  color: var(--darkColor);
  font-size: 0.87rem;
  font-weight: 500;
  line-height: 1.06rem;
  white-space: nowrap;

  @media (max-width: ${breakpoints.md}) {
    display: none;
  }
`;

export const StyledDate = styled.span`
  padding-bottom: 3px;
  border-bottom: 1px solid var(--secondaryColor);
`;

export const DateMobileContainer = styled(DateContainer)`
  display: none;

  @media (max-width: ${breakpoints.md}) {
    display: block;
  }
`;
