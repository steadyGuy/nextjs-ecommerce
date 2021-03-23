import styled from '@emotion/styled';
import LibPopup from 'reactjs-popup';
import { darken, rgba } from 'polished';
import { useContext } from 'react';
// import 'reactjs-popup/dist/index.css';

import CloseIcon from '../public/icons/close.svg';
import Button from './Button';
import { removeFromCart } from '../store/actions';
import { DataContext } from '../store/GlobalState';
import mq from './_media';
import Notify from './Notify';

const Popup = ({ children, title, id }) => {
  const { state, dispatch } = useContext(DataContext);

  const handleSubmit = () => {
    dispatch(removeFromCart(id, state.cart));
  };

  return (
    <StyledPopup
      trigger={children}
      modal
      nested
    >
      {(close) => (
        <div className="modal">
          <div className="header">
            <div><span>{title}</span></div>
            <div className="close" onClick={close} tabIndex={-1}>
              <CloseIcon />
            </div>
          </div>
          <div className="content">
            <p>Вы уверенны, что хотите удалить этот продукт из вашей корзины?</p>
          </div>
          <div className="actions">
            <Button clickHandler={handleSubmit}>
              Да
                </Button>
            <Button clickHandler={() => { close(); }}>
              Отмена
                </Button>
          </div>
        </div>
      )}
    </StyledPopup>
  );
};

const StyledPopup = styled(LibPopup)`
  // use your custom style for ".popup-overlay"
&-overlay {
  background-color: ${({ theme }) => rgba(theme.colors.text, 0.5)};
  .modal {
    width: 634px;
    font-size: 16px;
    background-color: ${({ theme }) => theme.colors.background};
    ${mq[2]} {
      width: 480px;
    }
    ${mq[1]} {
      width: 320px;
    }
  }
  .modal > .header {
    width: 100%;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 22px 18px;
    .close {
      cursor: pointer;
      display: block;
      padding: 2px 5px;
      line-height: 20px;
      font-size: 24px;
      outline: none;
      svg {
        width: 20px;
        height: 20px;
        fill: ${({ theme }) => theme.colors.text};
      }
    }
    span {
      color: ${({ theme }) => theme.colors.text};
      font-size: 18px;
      font-weight: bold;
    }
  }
  .modal > .content {
    width: 100%;
    padding: 18px 18px;
    border-top: 1px solid ${({ theme }) => theme.colors.secondarySuperLight};
    border-bottom: 1px solid ${({ theme }) => theme.colors.secondarySuperLight};
  }
  .modal > .actions {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding-top: 24px;
    padding-bottom: 30px;
    padding-right: 18px;
    button {
      :first-of-type {
        background-color: #C4C4C4;
        border: solid 1px #C4C4C4;
        margin-right: 12px;
        :hover {
          background: ${darken(0.05, '#C4C4C4')};
        }
        :focus {
          border: solid 1px ${darken(0.2, '#C4C4C4')};
        }
      }
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
.popup-content {
  -webkit-animation: anvil 0.3s cubic-bezier(0.38, 0.1, 0.36, 0.9) forwards;
}
}
`;

// backgroundColor: `${rgba(theme.colors.text, 0.97)}`,

export default Popup;
