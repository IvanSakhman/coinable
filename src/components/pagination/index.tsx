import React from 'react';
import { useRouter } from 'next/router';
import Button from '@components/button';
import ArrowLeft from '@svg-components/arrow-left';
import { Container, CurrentPage, ArrowRight } from './pagintation.styled';

interface PaginationProps {
  currentPage: number;
  hasNextPage: boolean;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, hasNextPage }) => {
  const router = useRouter();

  const handleChangePage = (isNext: boolean) => {
    const newPage = isNext ? currentPage + 1 : currentPage - 1;
    router.push(`/?page=${newPage}`).catch((err) => console.error(err));
  };

  return (
    <Container>
      <Button
        handleClick={() => handleChangePage(false)}
        isDisabled={currentPage === 1}
        direction="left"
      >
        <ArrowLeft />
      </Button>
      <CurrentPage>{currentPage}</CurrentPage>
      <Button
        handleClick={() => handleChangePage(true)}
        isDisabled={!hasNextPage}
        direction="right"
      >
        <ArrowRight />
      </Button>
    </Container>
  );
};

export default Pagination;
