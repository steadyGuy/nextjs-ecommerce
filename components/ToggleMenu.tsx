import styled from '@emotion/styled';
import LibPopup from 'reactjs-popup';
import { darken, rgba } from 'polished';
import React, { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import { useMediaQuery } from 'react-responsive';

import { getData } from '../utils/fetchData';
import mq from './_media';
import CloseIcon from '../public/icons/close.svg';
import { DataContext } from '../store/GlobalState';
import { addCategories } from '../store/actions';
import { useRouter } from 'next/router';
//import 'reactjs-popup/dist/index.css';

const ToggleMenu = ({ children }) => {
  const { state, dispatch } = useContext(DataContext);
  const router = useRouter();
  const isMobile = useMediaQuery({ maxWidth: 480 });
  useEffect(() => {
    if (!(state.categories.length === 0)) return;
    const getCategories = async () => {
      const { categories: cats } = await getData('categories');
      dispatch(addCategories(cats));
    };
    getCategories();
  }, []);

  return (
    <StyledPopup
      trigger={children}
      on="hover"
      position="bottom center"
      closeOnDocumentClick
      mouseLeaveDelay={300}
      mouseEnterDelay={0}
    >
      {(close) => (
        <div className="wrapper">
          {isMobile && <CloseIcon onClick={() => close()} className="close-icon" />}
          <ul className="menu">
            {state.categories.map((cat) => {
              return (
                <li className="menu-item" key={cat.id}><span>{cat.title}</span>
                  <ul>
                    {cat.subcategories.map((subcat) => (

                      <li className={router.query.slug === subcat.slug ? 'submenu-item sub-active' : 'submenu-item'} key={subcat.id}>
                        <Link href={`/category/${subcat.slug}`}>
                          <a onClick={() => close()}>{subcat.title}</a>
                        </Link>
                      </li>

                    ))}
                  </ul>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </StyledPopup>
  );
};

const StyledPopup = styled(LibPopup)`
  // use your custom style for ".popup-overlay"
&-content {
  width: 100%;
  left: 0 !important;
  ${mq[3]} {
      .wrapper {
        padding: 0;
      }
    }
  .wrapper {
    .close-icon {
      fill: ${({ theme }) => theme.colors.text};
      position: absolute;
      z-index: 100;
      width: 28px;
      height: 28px;
      right: 20px;
      top: 12px;
    }
  }
  .menu { 
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.background};
    box-shadow: 0px 1px 25px -6px #C5C5C5;
    border-radius: 5px;
    position: relative;
    display: flex;
    justify-content: space-between;
    list-style-type: none;
    margin: 0;
    padding: 40px 30px;
    top: 16px;
    ${mq[2]} {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr;
      gap: 30px 0px;
      justify-content: center;
      top: -8px;
      border-top: solid 1px #F5F5F5;
    }
    ${mq[1]} {
      display: flex;
      flex-direction: column;
    }
  }
  ul {
    display: block;
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
  .menu-item {
    padding: 5px;
    text-transform: uppercase;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.primary};
    span {
      display: block;
    }
    ${mq[2]} {
      text-align: center;
    }
    ${mq[1]} {
      text-align: left;
    }
  }
  .submenu-item {
    font-weight: normal;
    display: block;
    :first-of-type {
      margin-top: 18px;
      a {
        padding-top: 0;
        ${mq[2]} {
          padding-top: 8px;
        }
      }
    }
    a {
      padding-top: 8px;
      display: inline-block;
      font-size: 14px;
      line-height: 24px;
      text-transform: none;
      color: #808080;
      :hover {
        text-decoration: underline;
      }
      ${mq[2]} {
        display: block;
        transition: 0.3s;
        :hover {
          padding-bottom: 8px;
          text-decoration: none;
          background-color: ${({ theme }) => theme.colors.secondarySuperLight};
        }
      }
    }
  }

  .sub-active {
    a {
      background-color: ${({ theme }) => theme.colors.secondaryLight};
      padding: 0 6px;
      border-radius: 1px;
      color: ${({ theme }) => theme.colors.background};
    }
  }

  /* animation */
  @keyframes anvil {
    0% {
      transform: scale(1) translateY(0px);
      opacity: 0;
      box-shadow: 0 0 0 rgba(241, 241, 241, 0);
    }
    1% {
      transform: scale(0.96) translateY(10px);
      opacity: 0;
      box-shadow: 0 0 0 rgba(241, 241, 241, 0);
    }
    100% {
      transform: scale(1) translateY(0px);
      opacity: 1;
      box-shadow: 0 0 500px rgba(241, 241, 241, 0);
    }
  }
  -webkit-animation: anvil 0.3s cubic-bezier(0.38, 0.1, 0.36, 0.9) forwards;
}
`;

// backgroundColor: `${rgba(theme.colors.text, 0.97)}`,

export default ToggleMenu;
