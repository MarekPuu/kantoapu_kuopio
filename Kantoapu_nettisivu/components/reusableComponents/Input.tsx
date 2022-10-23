import React, { useId } from 'react';
import classes from '../../styles/components/reusableComponents/Input.module.scss';

interface Props {
  label: string;
  onChange: Function;
  value: string;
  type: string;
}

// eslint-disable-next-line react/display-name
const Input = React.memo(({ label, onChange, value, type = 'text' }: Props) => {
  const ID = useId();
  return (
    <div className={classes.InputContainer}>
      <label htmlFor={ID}>{label}</label>
      <input
        onChange={(e) => onChange(e.target.value)}
        value={value}
        type={type}
        id={ID}
        name={ID}
        required
      />
    </div>
  );
});

export default Input;
