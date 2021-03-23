import { Head } from 'next/document';
import React, { useState } from 'react';
import CategoriesSection from '../components/CategoriesSection';
import HeaderSlider from '../components/HeaderSlider';
import CategoriesSlider from '../components/CategoriesSlider';
import OffersSection from '../components/OffersSection';

import { getData } from '../utils/fetchData';
import Advantages from '../components/Advantages';
import LastProductsSection from '../components/LastProductsSection'
import Newsletter from '../components/Newsletter';

const Home = ({ products }) => {
  //  const [products, setProducts] = useState(props.products);
  return (
    <div>
      <HeaderSlider />
      <CategoriesSection />
      <CategoriesSlider products={products} />
      <OffersSection />
      <LastProductsSection products={products} />
      <Newsletter />
      <div className="wrapper">
        <Advantages indent={80} />
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  const data = await getData('products');
  return {
    props: {
      products: data.products,
    },
  };
}

export default Home;
