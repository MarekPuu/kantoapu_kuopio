import React from 'react';
import { IHinnasto } from '../../utils/Hinnasto';
import HinnastoCardItem from './HinnastoCardItem';
import classes from '../../styles/components/Hinnasto.module.scss';

const HinnastoCard = ({ title, items }: IHinnasto) => {
  return (
    <div className={classes.HinnastoCard}>
      <div className={classes.HinnastoCardTitleContainer}>
        <h1>{title}</h1>
      </div>
      <div className={classes.HinnastoItemsContainer}>
        {items.map((item, i) => {
          return <HinnastoCardItem key={i} {...item} />;
        })}
      </div>
    </div>
  );
};

export default HinnastoCard;
