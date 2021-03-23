import styled from '@emotion/styled';
import { FC } from 'react';
import CallIcon from '../../public/icons/sprite.svg';
import EmailIcon from '../../public/icons/email.svg';

import SocialIcon from '../SocialIcon';
import mq from '../_media';

interface RowDashBoardProps {
  isDark?: boolean;
}

const RowDashBoard: FC<RowDashBoardProps> = () => {
  return (
    <RowDashBoardStyled>
      <div className="container">
        <div className="information">
          <div className="text">
            <CallIcon />
            <span>(252) 555-0126</span>
          </div>
          <div className="delimiter hidden-xs" />
          <div className="text">
            <EmailIcon />
            <span>felicia.reid@example.com</span>
          </div>
        </div>
        <div className="socials">
          <SocialIcon iconName="twitter" />
          <SocialIcon iconName="facebook" />
          <SocialIcon iconName="youtube" />
          <SocialIcon iconName="vk" />
        </div>
      </div>
    </RowDashBoardStyled>
  );
};

const RowDashBoardStyled = styled.div<RowDashBoardProps>(({ theme }) => ({
  backgroundColor: theme.colors.primary,
  color: theme.colors.background,
  padding: '12px 0',
  '& .container': {
    display: 'flex',
    justifyContent: 'space-between',
    [mq[2]]: {
      padding: 0,
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  '& .information': {
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    [mq[2]]: {
      width: '100%',
      borderBottom: 'solid 1px #586FE4',
      paddingBottom: 8,
    },
  },
  '& .text': {
    display: 'flex',
    alignItems: 'center',
    fontWeight: 300,
    [mq[1]]: {
      marginLeft: 16,
      fontSize: 12,
      '& svg': {
        width: 12,
        height: 12,
      },
      '&:first-of-type': {
        marginLeft: 0,
      },
    },
    '& svg': {
      width: 13,
      height: 13,
      fill: theme.colors.background,
      marginRight: 10,
    },
  },
  '& .delimiter': {
    margin: '0 16px 0 16px',
    minHeight: 20,
    width: 1,
    backgroundColor: theme.colors.background,
  },
  '& .socials': {
    display: 'flex',
    '& div': {
      marginLeft: 16,
    },
    [mq[2]]: {
      marginTop: 8,
    },
  },
}));

export default RowDashBoard;
