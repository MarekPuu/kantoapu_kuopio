import React from 'react';
import { IPalvelut } from '../../utils/Palvelut';
import classes from '../../styles/components/Palvelut.module.scss';

interface Props {
  title: IPalvelut['title'];
  text: IPalvelut['text'];
  icon: IPalvelut['icon'];
  index: number;
}

const PalvelutCard = ({ title, text, icon, index }: Props) => {
  return (
    <div className={`${classes.PalveluCard} ${getHover(index)}`}>
      <div className={classes.PalveluCardTitleContainer}>
        <h1>{title}</h1>
      </div>
      <div className={classes.PalveluCardTextContainer}>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default PalvelutCard;

const getHover = (index: number): any => {
  switch (index % 3) {
    case 0:
      return classes.hover1;
    case 1:
      return classes.hover2;
    case 2:
      return classes.hover3;
    default:
      return classes.hover1;
  }
};
