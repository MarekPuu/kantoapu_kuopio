import React from 'react';
import classes from '../../styles/components/Hinnasto.module.scss';

const HinnastoCard = ({ title, items }: any) => {
  return (
    <div className={classes.HinnastoCardContainer}>
      <div className="TitleContainer">
        <h1>{title}</h1>
      </div>
      {items.map((item: any, index: number) => {
        const { description, price } = item;
        return (
          <div
            key={index}
            className={`${classes.itemContainer} ${
              index % 2 === 0 && classes.grey
            }`}
          >
            <p>{description}</p>
            <p>{price}</p>
          </div>
        );
      })}
    </div>
  );
};

export default HinnastoCard;
