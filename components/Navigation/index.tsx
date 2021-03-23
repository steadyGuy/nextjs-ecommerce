import styled from '@emotion/styled';
import { useMediaQuery } from 'react-responsive';

import { useRouter } from 'next/router';
import Logo from '../Logo';
import SearchPopup from '../SearchPopup';

import mq from '../_media';
import Nav from '../Nav';
import RightIcons from '../RightIcons';

const Navigation = () => {
  const router = useRouter();
  const isActive = (route) => route === router.pathname ? 'active' : '';

  const isTabletOrMobile = useMediaQuery({ maxWidth: 768 });

  //через useState м
  return (
    <NavigationStyled>
      <div className="container">
        <Logo />

        {isTabletOrMobile ? <Nav isActive={isActive} />
          : <Nav isActive={isActive} />}
        {!isTabletOrMobile && <RightIcons isActive={isActive} />}
      </div>
    </NavigationStyled>
  );
};

const alignRule = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const NavigationStyled = styled.div(({ theme }) => ({
  //position: 'sticky',
  top: -1,
  // padding: '10px 0 10px 0',
  height: 64,
  backgroundColor: theme.colors.background,
  zIndex: 100,
  borderBottom: 'solid 1px #EAEAEA',
  '& .container': {
    display: 'grid',
    gridTemplateRows: '1fr',
    gridTemplateColumns: '3fr 6fr 3fr',
    gap: '30px',
    alignItems: 'center',
    height: '100%',
    [mq[3]]: {
      gridTemplateColumns: '3fr 7fr 2fr',
    },
    [mq[2]]: {
      display: 'flex',
      justifyContent: 'space-between',
      position: 'relative',
    },
  },
}));

export default Navigation;
