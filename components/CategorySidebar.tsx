/* @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';
import styled from '@emotion/styled';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

import PlusIcon from '../public/icons/plus.svg';
import mq from './_media';

const CategorySidebar = ({ category, subcategory, categories }) => {
  const [activeIndex, setActiveIndex] = useState(category._id);
  const router = useRouter();
  return (
    <SidebarStyled>
      <h2>Категории</h2>
      <aside>
        <ul className="category-menu">
          {
            categories.map((cat) => (
              <li key={cat.id}>
                <ItemStyled activeIndex={activeIndex} catId={cat.id} className="category-item" onClick={() => setActiveIndex(cat.id)}>
                  <span>
                    {cat.title} <span className="count">({cat.subcategories.length})</span>
                  </span>
                  {cat.subcategories.length !== 0 ? <PlusIcon css={css`${activeIndex === cat.id ? 'transform: rotate(135deg); fill: #687EF0;' : 'tansform: rotate(0deg); fill: #B8B8B8;'}`} /> : ''}
                </ItemStyled>
                <SubmenuStyled type="disc" activeIndex={activeIndex} catId={cat.id} className="subcategory-menu">
                  {cat.subcategories.length !== 0 ? cat.subcategories.map((subcat) => {
                    return (
                      <SubmenuItemStyled
                        key={subcat.id}
                        rSlug={router.query.slug}
                        slug={subcat.slug}
                      >
                        <Link key={subcat.id} href={`/category/${subcat.slug}`}>
                          <a>{subcat.title}</a>
                        </Link>
                      </SubmenuItemStyled>
                    );
                  }) : ''}
                </SubmenuStyled>
              </li>
            ))
          }
        </ul>
      </aside>
    </SidebarStyled>
  );
};

const SidebarStyled = styled.div(({ theme }) => ({
  '& .category-menu': {
    listStyleType: 'none',
    padding: 0,
    margin: 0,
  },
  '& h2': {
    marginBottom: 12,
    marginTop: 8,
    textTransform: 'uppercase',
    [mq[3]]: {
      marginTop: 28,
      textAlign: 'center',
    },
  },
}));

const SubmenuStyled = styled.ul(({ theme, activeIndex, catId }) => ({
  marginLeft: 12,
  height: '100%',
  maxHeight: `${activeIndex === catId ? '500px' : '0px'}`,
  transition: 'max-height 0.3s ease-in-out',
  overflow: 'hidden',
  '& li': {
    padding: 10,
  },
}));

const ItemStyled = styled.span(({ theme, activeIndex, catId }) => ({
  border: `${catId === activeIndex ? '1px solid #F2F2F2' : 'none'}`,
  borderRadius: 49,
  padding: '13px 18px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  cursor: 'pointer',
  transition: '0.3s',
  [mq[4]]: {
    paddingRight: 12,
  },
  [mq[3]]: {
    paddingRight: 18,
  },
  '& svg': {
    transition: 'transform 0.3s ease-in-out',
    display: 'block',
  },
  '&:hover': {
    color: theme.colors.primary,
    borderColor: theme.colors.primary,
    '& svg': {
      fill: theme.colors.primary,
    },
    '& .count': {
      color: theme.colors.primary,
    },
  },
  '& .count': {
    transition: 'transform 0.3s ease-in-out',
    color: '#B8B8B8',
    marginLeft: 3,
  },
}));

const SubmenuItemStyled = styled.li(({ theme, slug, rSlug }) => ({
  color: `${slug === rSlug ? theme.colors.primary : theme.colors.text}`,
  cursor: 'pointer',
  transition: '0.3s',
  '& a': {
    display: 'block',
    position: 'relative',
    marginLeft: -18,
    paddingLeft: 6,
    color: 'inherit',
    fontSize: 15,
    lineHeight: '19.69px',
  },
  '&:hover': {
    color: theme.colors.primary,
  },
}));

export default CategorySidebar;
