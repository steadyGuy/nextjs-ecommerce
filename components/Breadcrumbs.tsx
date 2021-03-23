import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styled from '@emotion/styled';
import mq from './_media';

interface BreadcrumbsProps {
  crumbs: Object;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ crumbs }): React.ReactElement => {
  const crumbsNameList = Object.keys(crumbs);

  return (
    <BreadcrumbsStyled aria-label="breadcrumbs">
      <div className="container">
        <BreadCrumbHeader>
          {crumbsNameList[crumbsNameList.length - 1]}
        </BreadCrumbHeader>
        <Crumbs>
          {crumbsNameList.map((crumb: string) => {
            return (
              <CrumbItem key={crumb + Math.random().toString()}>
                <Link href={crumbs[crumb]}>
                  <a>{crumb}</a>
                </Link>
              </CrumbItem>
            );
          })}
        </Crumbs>
      </div>
    </BreadcrumbsStyled>
  );
};

const BreadcrumbsStyled = styled.nav({
  padding: '26px 0',
  display: 'block',
  backgroundColor: '#F7F7F7',
  [mq[1]]: {
    textAlign: 'center',
  },
});

const CrumbItem = styled.li(({ theme }) => ({
  color: '#9E9E9E',
  [mq[1]]: {
    paddingTop: 12,
  },
  '&::after': {
    content: '"/"',
    padding: '0 8px',
  },
  '&:last-child': {
    '&::after': {
      display: 'none',
    },
    '& a': {
      color: '#B8B8B8',
      fontSize: 18,
    },
  },
  '& a': {
    textDecoration: 'none',
    color: 'inherit',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
}));

const Crumbs = styled.ul(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  listStyleType: 'none',
  padding: 0,
  [mq[1]]: {
    justifyContent: 'center',
    flexDirection: 'column',
  },
}));

const BreadCrumbHeader = styled.h3(({ theme }) => ({
  fontSize: theme.typography.h3,
  color: theme.colors.text,
  marginBottom: 12,
}));

export default Breadcrumbs;
