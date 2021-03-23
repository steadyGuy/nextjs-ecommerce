import styled from '@emotion/styled';
import { FC } from 'react';
import FacebookIcon from '../../public/icons/facebook.svg';
import TwitterIcon from '../../public/icons/twitter.svg';
import VkIcon from '../../public/icons/vk.svg';
import YoutubeIcon from '../../public/icons/youtube.svg';

interface SocialIconProps {
  iconName: string;
  width?: number;
  height?: number;
}

const renderSwitch = (socialMedia) => {
  switch (socialMedia) {
    case 'vk':
      return <VkIcon />;
    case 'facebook':
      return <FacebookIcon />;
    case 'twitter':
      return <TwitterIcon />;
    case 'youtube':
      return <YoutubeIcon />;
    default:
      return <VkIcon />;
  }
};

const SocialIcon: FC<SocialIconProps> = ({ iconName, width = 26, height = 26 }:
  SocialIconProps): React.ReactElement => {
  return (
    <SocialIconStyled className="unselectable" width={width} height={height}>
      {renderSwitch(iconName)}
    </SocialIconStyled>
  );
};

const tranValue = 'all 0.2s ease-in-out';

const SocialIconStyled = styled.div(({ theme, width, height }) => ({
  backgroundColor: theme.colors.background,
  borderRadius: 20,
  width,
  height,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  border: 'solid 1px #fff',
  transition: tranValue,
  position: 'relative',
  '& svg': {
    width: 15,
    height: 15,
    fill: theme.colors.primary,
    transition: tranValue,
  },
  ':hover': {
    backgroundColor: 'transparent',
    '& svg': {
      fill: '#fff',
    },
  },
  ':active': {
    top: 1,
  },
}));

export default SocialIcon;
