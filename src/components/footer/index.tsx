import React from 'react';
import SimpleArrow from '@svg-components/simple-arrow';
import Button from '@components/button';
import { StyledFooter, Container, Content, Title, Description } from './footer.styled';

const isBrowser = typeof window !== 'undefined';

const Footer: React.FC = () => {
  const backToTop = (): void => {
    if (isBrowser) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  return (
    <StyledFooter>
      <Container>
        <Content>
          <Title>Ivan Sakhman</Title>
          <Description>
            I have found the position in the AngelList.
            The task was nice.
          </Description>
        </Content>
        <Button handleClick={backToTop} direction="top">
          <SimpleArrow />
        </Button>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
