import React, { useState } from 'react';
import SearchPopUp from '@components/search-pop-up';
import {
  StyledHeader,
  Container,
  Logo,
  StyledInput,
  DateContainer,
  StyledDate,
  DateMobileContainer,
} from './header.styled';

const Header: React.FC = () => {
  const [isSearchActive, setIsSearchActive] = useState<boolean>(false);

  const dateOrdinal = (day: string) => {
    const numberDay = +day;
    if (numberDay > 3 && numberDay < 21) return `${numberDay}th `;
    switch (numberDay % 10) {
      case 1:
        return `${numberDay}st `;
      case 2:
        return `${numberDay}nd `;
      case 3:
        return `${numberDay}rd `;
      default:
        return `${numberDay}th `;
    }
  };

  const today = new Date();
  const month = new Intl.DateTimeFormat('en', { month: 'long' }).format(today);
  const shortMonth = new Intl.DateTimeFormat('en', { month: 'short' }).format(today);
  const day = new Intl.DateTimeFormat('en', { day: 'numeric' }).format(today);

  const displayedDay = dateOrdinal(day);

  const date = `${displayedDay} of ${month}`;
  const mobileDate = `${shortMonth} ${displayedDay}`;

  const handleClick = (e: React.MouseEvent<HTMLInputElement>): void => {
    setIsSearchActive(true);
    e?.currentTarget?.blur();
  };

  return (
    <>
      {isSearchActive && <SearchPopUp isOpen={isSearchActive} setIsOpen={setIsSearchActive} />}
      <StyledHeader>
        <Container>
          <Logo>Anime</Logo>
          <StyledInput type="text" placeholder="Search..." onClick={handleClick} />
          <DateContainer>
            Today is the <StyledDate>{date}</StyledDate>
          </DateContainer>
          <DateMobileContainer>{mobileDate}</DateMobileContainer>
        </Container>
      </StyledHeader>
    </>
  );
};

export default Header;
