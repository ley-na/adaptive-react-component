import React from 'react';

import './Catalog.scss';

import photoKatrine from '../../assets/img/pets-katrine.png';
import photoJennifer from '../../assets/img/pets-jennifer.png';
import photoWoody from '../../assets/img/pets-woody.png';
import photoSophia from '../../assets/img/pets-sophia.png';
import photoTimmy from '../../assets/img/pets-timmy.png';
import photoCharly from '../../assets/img/pets-charly.png';
import photoScarlett from '../../assets/img/pets-scarlett.png';
import photoFreddie from '../../assets/img/pets-freddie.png';

const Catalog = () => {
  return <>
    <section className='section'>
      <div className='container'>
        <h3 className='section__title'>Our friends who are looking for a house</h3>
        <div className='section__content'>
          <article className='section__article article'>
            <img className='article__img' src={photoKatrine} alt=""/>
            <h4 className='article__title'>Katrine</h4>
            <button className='article__btn' type='button'>Learn more</button>
          </article>
          <article className='section__article article'>
            <img className='article__img' src={photoJennifer} alt=""/>
            <h4 className='article__title'>Jennifer</h4>
            <button className='article__btn' type='button'>Learn more</button>
          </article>
          <article className='section__article article'>
            <img className='article__img' src={photoWoody} alt=""/>
            <h4 className='article__title'>Woody</h4>
            <button className='article__btn' type='button'>Learn more</button>
          </article>
          <article className='section__article article'>
            <img className='article__img' src={photoSophia} alt=""/>
            <h4 className='article__title'>Sophia</h4>
            <button className='article__btn' type='button'>Learn more</button>
          </article>
          <article className='section__article article'>
            <img className='article__img' src={photoTimmy} alt=""/>
            <h4 className='article__title'>Timmy</h4>
            <button className='article__btn' type='button'>Learn more</button>
          </article>
          <article className='section__article article'>
            <img className='article__img' src={photoCharly} alt=""/>
            <h4 className='article__title'>Charly</h4>
            <button className='article__btn' type='button'>Learn more</button>
          </article>
          <article className='section__article article'>
            <img className='article__img' src={photoScarlett} alt=""/>
            <h4 className='article__title'>Scarlett</h4>
            <button className='article__btn' type='button'>Learn more</button>
          </article>
          <article className='section__article article'>
            <img className='article__img' src={photoFreddie} alt=""/>
            <h4 className='article__title'>Freddie</h4>
            <button className='article__btn' type='button'>Learn more</button>
          </article>
        </div>
      </div>

    </section>
  </>;
};

export default Catalog;