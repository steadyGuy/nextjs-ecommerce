/* eslint-disable max-len */
/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from '@emotion/react';
import { useState, useContext } from 'react';
import Head from 'next/head';
import Slider from 'react-slick';
import styled from '@emotion/styled';

import { useRouter } from 'next/router';
import Breadcrumbs from '../../components/Breadcrumbs';
import Button from '../../components/Button';
import ArrowRightIcon from '../../public/icons/arrowRight.svg';
import ArrowLeftIcon from '../../public/icons/arrowLeft.svg';
import ShoppingCartIcon from '../../public/icons/shopping-cart.svg';

import { getData } from '../../utils/fetchData';
import SocialIcon from '../../components/SocialIcon';
import CategoriesSlider from '../../components/CategoriesSlider';
import { DataContext } from '../../store/GlobalState';
import { addToCart } from '../../store/actions';
import SectionLanding from '../../components/SectionLanding';
import Newsletter from '../../components/Newsletter';
import mq from '../../components/_media';

const DetailProduct = (props) => {
  const [detailProduct, setDetailProduct] = useState(props.product);
  const [productsCollection, setProductsCollection] = useState(props.featuredCollection);
  const { state, dispatch } = useContext(DataContext);

  const handleAddToCart = () => {
    dispatch(addToCart(props.product, state.cart));
  };

  const sliderSettings = {
    dots: true,
    customPaging(i) {
      return <div css={{ backgroundImage: `url('${detailProduct.images[i]}')` }} />;
    },
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Head>
        <title>{detailProduct.title}</title>
      </Head>

      <Breadcrumbs crumbs={{
        Главная: '/',
        Категория: `/category/${detailProduct.subcategory}`,
        [detailProduct.title]: detailProduct.slug,
      }}
      />

      <div className="wrapper">
        <MainStyled>
          <SliderStyled>
            <Slider {...sliderSettings} className="slider">

              {detailProduct.images.map((image) => {
                return <div key={image} className="image-slide" css={{ backgroundImage: `url('${image}')` }} />;
              })}

            </Slider>
          </SliderStyled>
          <TextContentStyled>
            <h1>{detailProduct.title}</h1>
            <div className="price"><span>{`$${detailProduct.price}`}</span></div>
            <div className="additional-info">
              <p>В наличии: <span>{detailProduct.inStock}</span></p>
              <p>Продано: <span>{detailProduct.sold}</span></p>
            </div>
            <p className="description">
              {detailProduct.description}
            </p>
            <div className="buttons">
              <Button clickHandler={handleAddToCart}><ShoppingCartIcon /> Добавить</Button>
              <Button>Купить сейчас</Button>
            </div>
            <div className="socials-data">
              <h4>Поделись: </h4>
              <div className="socials">
                <SocialIcon iconName="twitter" />
                <SocialIcon iconName="facebook" />
                <SocialIcon iconName="youtube" />
                <SocialIcon iconName="vk" />
              </div>
            </div>
          </TextContentStyled>
        </MainStyled>

        <div className="wrapper">
          <TabsStyled>
            <input type="radio" name="tab-btn" id="tab-btn-1" data-content-index="1" checked readOnly />
            <label htmlFor="tab-btn-1">Полное описание</label>
            <input type="radio" name="tab-btn" id="tab-btn-2" data-content-index="2" readOnly />
            <label htmlFor="tab-btn-2">Детали доставки</label>

            <div id="content-1" className="content">
              <article className="content-wrapper">
                <div>
                  <h5>Политика возврата</h5>
                  <br />
                  <p>
                    Вы можете вернуть большинство новых неоткрытых товаров
                    в течение 30 дней с момента доставки и получить полный возврат средств.
                    Мы также оплатим стоимость обратной
                    доставки, если возврат является результатом нашей ошибки
                    (вы получили неправильный или бракованный товар и т. Д.).
                  </p>
                  <br />
                  <p>
                    Вы должны рассчитывать на получение возмещения в течение четырех недель с
                    момента передачи посылки отправителю, однако во многих случаях вы получите
                    возмещение быстрее. Этот период времени включает в себя транзитное время, в
                    течение которого мы получим ваш возврат от отправителя (от 5 до 10 рабочих дней),
                    время, необходимое нам для обработки вашего возврата после его получения (от 3 до 5 рабочих дней),
                    и время, необходимое ваш банк для обработки нашего запроса на возврат (от 5 до 10 рабочих дней).
                  </p>
                  <br />
                  <p>
                    Если вам нужно вернуть товар, просто войдите в свою учетную запись, просмотрите заказ, используя ссылку «Завершить заказы» в меню «Моя учетная запись», и нажмите кнопку «Вернуть товар (ы)». Мы сообщим вам по электронной почте о вашем возмещении, как только мы получим и обработаем возвращенный товар.
                  </p>
                </div>
                <div>
                  <h5>Отгрузочные реквизиты</h5>
                  <br />
                  <p>
                    Мы можем отправить товар практически по любому адресу
                    в мире. Обратите внимание, что существуют ограничения
                    на некоторые продукты, и некоторые продукты не могут быть отправлены в международные пункты назначения.
                  </p>
                  <br />
                  <p>
                    Когда вы размещаете заказ, мы рассчитываем для вас сроки доставки и доставки в зависимости от наличия ваших товаров
                    и выбранных вами вариантов доставки. В зависимости от выбранного вами поставщика доставки, приблизительные даты доставки могут отображаться на странице сметы доставки.
                  </p>
                  <br />
                  <p>
                    Также обратите внимание, что стоимость доставки для многих товаров, которые мы продаем, зависит от веса. Вес любого такого предмета можно узнать на соответствующей странице. Чтобы отразить политику используемых нами транспортных компаний, все веса будут округлены до следующего полного фунта.
                  </p>
                </div>
              </article>
            </div>
            <div id="content-2" className="content">
              <article>
                <h5>Политика возврата</h5>
                <br />
                <p>
                  Вы можете вернуть большинство новых неоткрытых товаров
                  в течение 30 дней с момента доставки и получить полный возврат средств.
                  Мы также оплатим стоимость обратной
                  доставки, если возврат является результатом нашей ошибки
                  (вы получили неправильный или бракованный товар и т. Д.).
                </p>
                <br />
                <p>
                  Вы должны рассчитывать на получение возмещения в течение четырех недель с
                  момента передачи посылки отправителю, однако во многих случаях вы получите
                  возмещение быстрее. Этот период времени включает в себя транзитное время, в
                  течение которого мы получим ваш возврат от отправителя (от 5 до 10 рабочих дней),
                  время, необходимое нам для обработки вашего возврата после его получения (от 3 до 5 рабочих дней),
                  и время, необходимое ваш банк для обработки нашего запроса на возврат (от 5 до 10 рабочих дней).
                </p>
                <br />
                <p>
                  Если вам нужно вернуть товар, просто войдите в свою учетную запись, просмотрите заказ, используя ссылку «Завершить заказы» в меню «Моя учетная запись», и нажмите кнопку «Вернуть товар (ы)». Мы сообщим вам по электронной почте о вашем возмещении, как только мы получим и обработаем возвращенный товар.
                </p>
              </article>
            </div>
          </TabsStyled>
        </div>

        <SectionLanding title="Из этой коллекции">
          <CategoriesSlider products={productsCollection} />
        </SectionLanding>
      </div>
      <Newsletter />
    </div>
  );
};

export async function getServerSideProps({ params: { slug } }) {
  const productData = await getData(`product/${slug}`);
  const categoriesData = await getData(`products?subcategory=${productData.product.subcategory}`);

  return {
    props: {
      product: productData.product,
      featuredCollection: categoriesData.products,
      key: productData.product.id,
    },
  };
}

const TabsStyled = styled.div(({ theme }) => ({
  margin: '0 auto',
  marginTop: theme.indent.section,
  textAlign: 'center',
  width: '100%',
  '& .content': {
    textAlign: 'left',
    display: 'none',
    position: 'relative',
    '& h5': {
      fontSize: theme.typography.p,
      fontWeight: 'bold',
    },
    '& ::before': {
      content: '""',
      width: '100%',
      height: 1,
      backgroundColor: '#D3D3D3',
      position: 'absolute',
      top: -2,
      left: 0,
      zIndex: -1,
    },
  },
  '& #tab-btn-1:checked~#content-1, #tab-btn-2:checked~#content-2': {
    paddingTop: 43,
    opacity: 1,
    display: 'block',
  },
  '& #content-1': {
    '& .content-wrapper': {
      display: 'flex',
      [mq[2]]: {
        flexDirection: 'column',
      },
      '&>div': {
        width: '100%',
      },
      '&>:last-child': {
        marginLeft: 30,
        [mq[2]]: {
          marginLeft: 0,
          marginTop: 36,
        },
      },
    },
  },
  '& input[type=radio]': {
    display: 'none',
  },
  '&>label': {
    cursor: 'pointer',
    paddingLeft: 24,
    zIndex: 100,
    fontSize: theme.typography.h3,
    paddingBottom: 22,
    display: 'inline-block',
    [mq[2]]: {
      display: 'flex',
      paddingLeft: 0,
      justifyContent: 'center',
      borderBottom: 'solid 1px #D3D3D3',
    },
  },
  [mq[2]]: {
    '& label[for=tab-btn-2]': {
      paddingTop: 12,
    },
  },
  '& #tab-btn-1:checked~label[for=tab-btn-1], #tab-btn-2:checked~label[for=tab-btn-2]': {
    borderBottom: `solid 3px ${theme.colors.primary}`,
  },
}));

const MainStyled = styled.div(({ theme }) => ({
  display: 'grid',
  gap: 30,
  gridTemplateColumns: '6fr 6fr',
  gridTemplateRows: '1fr',
  marginTop: theme.indent.section,
  '& h1': {
    fontSize: theme.typography.h2,
    marginTop: 12,
  },
  [mq[3]]: {
    gridTemplateColumns: '1fr',
  },
}));

const SliderStyled = styled.div(({ theme }) => ({
  overflowX: 'hidden',
  overflowY: 'hidden',
  cursor: 'pointer',
  '& .slick-dots': {
    position: 'static',
    // Тут директива important из-за недальновидности разработчиков slick-carousel
    // Которые установили для .slick-dots (ul) инлайн-стиль, что очень-очень плохо(
    // Issue уже есть
    display: 'flex !important',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    flexShrink: 1,
    '& li': {
      height: 105,
      [mq[1]]: {
        height: 80,
      },
      [mq[0]]: {
        height: 70,
      },
      position: 'relative',
      border: 'solid 2px #F7F7F7',
      borderRadius: 5,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexGrow: 1,
      '& > div': {
        width: 105,
        height: '100%',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      },
    },
    '& .slick-active': {
      border: `solid 2px ${theme.colors.primary}`,
    },
  },
  '& .image-slide': {
    minHeight: 500,
    width: '100%',
    position: 'relative',
    backgroundSize: 'cover',
    backgroundPosition: 'top center',
    [mq[1]]: {
      minHeight: 400,
    },
    '&:before': {
      content: '""',
      position: 'absolute',
      width: '100%',
      height: '100%',
      backgroundColor: theme.colors.text,
      opacity: 0.15,
    },
  },
  '& .slick-arrow': {
    zIndex: 10,
    width: 32,
    height: 32,
    position: 'absolute',
    top: '38%',
    transform: 'translateY(0)',
  },
  '& .slick-prev:before, .slick-next:before': {
    color: theme.colors.primary,
    fontSize: 32,
    opacity: 1,
  },
  // '& .slick-next:before': {
  //   content: 'url(../../public/icons/arrowRight.svg)',
  // },
  '& .slick-prev': {
    left: 18,
  },
  '& .slick-next': {
    position: 'absolute',
    right: 18,
  },
}));

const TextContentStyled = styled.div(({ theme }) => ({
  width: '100%',
  '& .buttons': {
    display: 'flex',
    marginTop: 25,
    [mq[1]]: {
      flexDirection: 'column',
      alignItems: 'center',
      '& button': {
        width: '65%',
      },
    },
    '&>:last-child': {
      marginLeft: 28,
      padding: '0 60px',
      [mq[2]]: {
        marginLeft: 14,
        padding: '14px 42px',
      },
      [mq[1]]: {
        marginLeft: 0,
        marginTop: 30,
        width: '80%',
      },
      boxShadow: '0px 1px 25px -6px #2C3D98',
      border: 'none',
    },
    [mq[2]]: {
      '& button': {
        padding: '14px 32px',
      },
    },
  },
  '& .price': {
    color: theme.colors.primary,
    fontSize: theme.typography.h3,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 12,
  },
  '& .additional-info': {
    display: 'flex',
    marginBottom: 30,
    fontSize: 18,
    '& > :last-child': {
      marginLeft: 20,
    },
    '& span': {
      fontWeight: 'bold',
      color: theme.colors.primary,
    },
  },
  '& .socials-data': {
    marginTop: 24,
    [mq[2]]: {
      textAlign: 'center',
    },
    '& h4': {
      fontSize: theme.typography.h4,
    },
    '& .socials': {
      marginTop: 10,
      display: 'flex',
      [mq[2]]: {
        justifyContent: 'center',
      },
      '&>div': {
        backgroundColor: '#DADADA',
        width: 33,
        height: 33,
        marginLeft: 12,
        '& svg': {
          fill: theme.colors.background,
        },
        '&:hover': {
          backgroundColor: theme.colors.primary,
        },
      },
      '&>:first-of-type': {
        marginLeft: 0,
      },
    },
  },
}));

export default DetailProduct;
