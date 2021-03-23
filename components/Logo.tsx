import styled from '@emotion/styled';
import Link from 'next/link';
import mq from './_media';

const Logo = ({ position = 'top' }) => {
  return (
    <LogoStyled>
      <Link href="/">
        <a>
          <div className={`logo ${position === 'top' ? 'primary' : 'white'}`}>
            <span>MedEquip</span>
          </div>
        </a>
      </Link>
    </LogoStyled>
  );
};

const LogoStyled = styled.div(({ theme }) => ({
  '& a': {
    textDecoration: 'none',
  },
  '& .logo': {
    fontFamily: 'Hind',
    width: 200,
    height: 48,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [mq[3]]: {
      width: 159,
      height: 38,
    },
  },
  '& .white': {
    backgroundColor: theme.colors.background,
    '& span': {
      color: theme.colors.primary,
    },
  },
  '& .primary': {
    backgroundColor: theme.colors.primary,
    '& span': {
      color: theme.colors.background,
    },
  },
  '& span': {
    display: 'block',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: 34,
    [mq[3]]: {
      fontSize: 28,
    },
  },
}));

export default Logo;
