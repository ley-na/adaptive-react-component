import React from 'react';

import './Article.scss';

const Article = ({data}) => {
  return (
    <>
      {data.map((item) => {
        const {id, name, image, alt} = item;
        return (
          <article key={id} className='article'>
            <img className='article__img' src={image} alt={alt}/>
            <h4 className='article__title'>{name}</h4>
            <button className='article__btn' type='button'>Learn more</button>
          </article>
        )
      })}
    </>
  );
};

export default Article;