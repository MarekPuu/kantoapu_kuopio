import React from 'react';
import { IPalvelut } from '../../utils/Palvelut';
import classes from '../../styles/components/Palvelut.module.scss';
import { BiPlusMedical } from 'react-icons/bi';
import { FaMinus } from 'react-icons/fa';

interface Props {
  title: IPalvelut['title'];
  text: IPalvelut['text'];
  icon: IPalvelut['icon'];
  index: number;
  activeIndex: number | null;
  setActive: Function;
}

const PalvelutCard = ({
  title,
  text,
  icon,
  index,
  activeIndex,
  setActive,
}: Props) => {
  return (
    <div className={`${classes.PalveluCard} ${getHover(index)}`}>
      <div className={classes.PalveluCardTitleContainer}>
        <h1>{title}</h1>
        <button
          className={classes.mobileButtons}
          onClick={() => setActive(index)}
        >
          {activeIndex === index ? (
            <FaMinus color="white" size={20} />
          ) : (
            <BiPlusMedical color="white" size={20} />
          )}
        </button>
      </div>
      <div
        className={`${classes.PalveluCardTextContainer} ${
          activeIndex === index && classes.active
        }`}
      >
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
