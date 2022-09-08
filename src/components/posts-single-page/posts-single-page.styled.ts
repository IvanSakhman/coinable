import styled, { keyframes } from 'styled-components';
import wrapperStyle from '@components/wrapper-style';
import breakpoints from '@constants/breakpoints';
import SimpleArrow from '@svg-components/simple-arrow';

export const Container = styled.div`
  ${wrapperStyle};
  margin: 6.38rem auto 6.75rem;
`;

export const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 3.2rem 0;
  cursor: pointer;
`;

const borderAnimation = keyframes`
  0%{
    width: 0%;
  }
  100%{
    width: 100%;
  }
`;

export const StyledHref = styled.a`
  position: relative;
  margin: 0 0 0 1rem;
  color: var(--blackColor);
  font-family: var(--mainFont);
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.21rem;
  text-decoration: none;
  transition: all 0.3s;

  &:hover {
    &:before {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 0;
      border-bottom: 1px solid var(--blackColor);
      animation: ${borderAnimation} 0.3s linear forwards;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  margin: 0 0 2.13rem;

  @media (max-width: ${breakpoints.md}) {
    display: block;
  }
`;

export const MovieTypeContent = styled.div`
  width: 100%;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 3.3rem 1.19rem;

  @media (max-width: ${breakpoints.md}) {
    margin: 1rem 0 3.3rem 0;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  max-width: 16.88rem;
  height: 20.6rem;
  border-radius: 0.63rem;

  @media (max-width: ${breakpoints.md}) {
    max-width: 100%;
  }
`;

export const IconContainer = styled.div`
  width: 100%;
  max-width: 1.5rem;
  height: 1.5rem;
  margin: 0 0 0 0.7rem;
`;

export const Title = styled.h3`
  margin: 0;
  color: var(--blackColor);
  font-family: var(--mainFont);
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.8rem;
`;

export const ScoreContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 0 1.4rem 1.19rem;

  @media (max-width: ${breakpoints.md}) {
    margin: 0 0 1.4rem 0;
  }
`;

export const RankContainer = styled(ScoreContainer)`
  margin: 3rem 0 0 1.19rem;

  @media (max-width: ${breakpoints.md}) {
    margin: 0 0 1.4rem 0;
  }
`;

export const RankTitle = styled(Title)`
  color: var(--lightMediumColor);
  font-weight: 600;
`;

export const Rank = styled(Title)`
  font-weight: 600;
  text-align: end;
`;

export const TypeText = styled.h4`
  margin: 0;
  color: var(--lightMediumColor);
  font-family: var(--mainFont);
  font-size: 0.88rem;
  font-weight: 600;
  line-height: 1.06rem;
`;

export const TypeDescription = styled(TypeText)`
  color: var(--blackColor);
  white-space: nowrap;
`;

export const Description = styled(TypeText)`
  margin: 1rem 0 0 0;
  color: var(--blackColor);
  font-weight: 400;
`;

export const Line = styled.div`
  width: 100%;
  border-bottom: 1px solid var(--secondaryColor);
  margin: 0 0.7rem;
`;

export const Arrow = styled(SimpleArrow)`
  transform: rotate(270deg);
`;
