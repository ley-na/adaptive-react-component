import React from 'react';

import Article from "../Article";
import data from "../../data";

import './Catalog.scss';

const Catalog = () => {
  return <>
    <section className='section'>
      <div className='container'>
        <h3 className='section__title'>Our friends who are looking for a house</h3>
        <div className='section__content'>
          <Article data={data} />
        </div>
      </div>

    </section>
  </>;
};

export default Catalog;