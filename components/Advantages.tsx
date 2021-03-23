// @ts-nocheck
import styled from '@emotion/styled';
import React from 'react';

import DeliveryIcon from '../public/icons/advantages/delivery.svg';
import GuaranteeIcon from '../public/icons/advantages/guarantee.svg';
import SupportIcon from '../public/icons/advantages/support.svg';
import RefundIcon from '../public/icons/advantages/refund.svg';
import mq from './_media';

const Advantages = ({ indent = 0 }) => {
  return (
    <AdvantagesSection indent={indent}>
      <Item
        iconCallback={() => <DeliveryIcon />}
        title="Бесплатная доставка"
        description="Бесплатная доставка для всех украинских и российских заказов или заказов от $150"
      />
      <Item
        iconCallback={() => <GuaranteeIcon />}
        title="100% гарантия оплаты"
        description="Мы обеспечиваем безопасную оплату через Paypal, Mastercard и другие системы"
      />
      <Item
        iconCallback={() => <SupportIcon />}
        title="Поддержка 24/7"
        description="Связывайтесь с нашими сотрудниками 24 часа в сутки. 7 дней в неделю"
      />
      <Item
        iconCallback={() => <RefundIcon />}
        title="30 дней возврата"
        description="Просто верните ваш заказ в течении 30 дней для обмена или покупки другого"
      />
    </AdvantagesSection>
  );
};

const Item = ({ iconCallback, title, description }) => {
  return (
    <ItemStyled>
      <div className="icon-wrapper">
        {iconCallback()}
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </ItemStyled>
  );
};

const AdvantagesSection = styled.div(({ theme, indent }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr 1fr',
  gap: '40px 30px',
  gridTemplateRows: '1fr',
  marginTop: indent,
  [mq[2]]: {
    gridTemplateColumns: '1fr 1fr',
    textAlign: 'center',
  },
  [mq[1]]: {
    gridTemplateColumns: '1fr',
  },
}));

const ItemStyled = styled.div(({ theme }) => ({
  '& .icon-wrapper': {
    backgroundColor: theme.colors.primary,
    width: 68,
    height: 68,
    borderRadius: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '-2px 3px 25px -9px #1E2A69',
    [mq[2]]: {
      margin: '0 auto',
    },
    // '& svg': {

    // },
  },
  '& h3': {
    marginTop: 22,
    marginBottom: 9,
  },
}));

export default Advantages;
