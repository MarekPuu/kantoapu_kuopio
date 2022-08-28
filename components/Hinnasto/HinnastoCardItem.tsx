import React from 'react';
import classes from '../../styles/components/Hinnasto.module.scss';

interface IHinnastoCardItem {
  price: string;
  description: string;
}

const HinnastoCardItem = ({ price, description }: IHinnastoCardItem) => {
  return (
    <div className={`${classes.HinnastoCardItems} ${classes.hover}`}>
      <div className={classes.HinnastoCardItemPrice}>
        <h1>{price}</h1>
      </div>
      <div className={classes.HinnastoCardItemDesc}>
        <h1>{description}</h1>
      </div>
    </div>
  );
};

export default HinnastoCardItem;
