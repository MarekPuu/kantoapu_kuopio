import React, { useState } from 'react';
import Input from '../reusableComponents/Input';
import classes from '../../styles/components/MeidanTarinaForm.module.scss';
import Link from 'next/link';
import ReCAPTCHA from 'react-google-recaptcha';

const MeidanTarinaForm = () => {
  const [lOsoite, setLOsoite] = useState('');
  const [lAsunnonKoko, setLAsunnonKoko] = useState('');
  const [lKerros, setLKerros] = useState('');
  const [lOnHissi, setLOnHissi] = useState<boolean>(false);
  const [mOsoite, setMOsoite] = useState('');
  const [mAsunnonKoko, setMAsunnonKoko] = useState('');
  const [mKerros, setMKerros] = useState('');
  const [mOnHissi, setMOnHissi] = useState<boolean>(false);
  const [muuttopaiva, setMuuttopaiva] = useState('');
  const [viesti, setViesti] = useState('');
  const [sopimusehdot, setSopimusehdot] = useState<boolean>(false);

  const handleCheckBoxCheck = (e: any, name: String) => {
    if (name === 'lOnHissi')
      return e.target.checked ? setLOnHissi(true) : setLOnHissi(false);
    if (name === 'mOnHissi')
      return e.target.checked ? setMOnHissi(true) : setMOnHissi(false);
    if (name === 'mOnHissi')
      return e.target.checked ? setMOnHissi(true) : setMOnHissi(false);
    if (name === 'sopimusehdot')
      return e.target.checked ? setSopimusehdot(true) : setSopimusehdot(false);
  };

  return (
    <form action="">
      <div className={classes.formContainer}>
        <div className={classes.TitleContainer}>
          <h1>Pyydä tarjous!</h1>
        </div>
        <div className={classes.formInfo}>
          <p>Mistä</p>
        </div>
        <div className={classes.input_90}>
          <Input
            label="Lähtöosoite"
            onChange={setLOsoite}
            value={lOsoite}
            type="text"
          />
        </div>
        <div className={classes.input_90}>
          <div className={classes.input_60}>
            <Input
              label="Asunnon koko"
              onChange={setLAsunnonKoko}
              value={lAsunnonKoko}
              type="number"
            />
          </div>
          <div className={classes.input_45}>
            <Input
              label="Kerros"
              onChange={setLKerros}
              value={lKerros}
              type="number"
            />
          </div>
        </div>
        <div className={`${classes.input_90} ${classes.checkboxContainer}`}>
          <input
            type="checkbox"
            onChange={(e) => handleCheckBoxCheck(e, 'lOnHissi')}
          />
          <label htmlFor="checkboxL">Hissi käytettävissä</label>
        </div>
        <div className={classes.formInfo}>
          <p>Minne</p>
        </div>
        <div className={classes.input_90}>
          <Input
            label="Kohdeosoite"
            onChange={setMOsoite}
            value={mOsoite}
            type="text"
          />
        </div>
        <div className={classes.input_90}>
          <div className={classes.input_60}>
            <Input
              label="Asunnon koko"
              onChange={setMAsunnonKoko}
              value={mAsunnonKoko}
              type="number"
            />
          </div>
          <div className={classes.input_45}>
            <Input
              label="Kerros"
              onChange={setMKerros}
              value={mKerros}
              type="number"
            />
          </div>
        </div>
        <div className={`${classes.input_90} ${classes.checkboxContainer}`}>
          <input
            type="checkbox"
            onChange={(e) => handleCheckBoxCheck(e, 'mOnHissi')}
          />
          <label htmlFor="checkboxM">Hissi käytettävissä</label>
        </div>
        <div className={classes.formInfo}>
          <p>Lisätietoja</p>
        </div>
        <div className={classes.input_90}>
          <Input
            label="Toivottu muuttopäivä"
            onChange={setMuuttopaiva}
            value={muuttopaiva}
            type="date"
          />
        </div>
        <div className={classes.input_90}>
          <div className="textareaContainer">
            <label htmlFor="">Viesti</label>
            <textarea
              onChange={(e) => setViesti(e.target.value)}
              value={viesti}
            />
          </div>
        </div>
        <div className={`${classes.input_90} ${classes.checkboxContainer}`}>
          <input
            type="checkbox"
            onChange={(e) => handleCheckBoxCheck(e, 'sopimusehdot')}
          />
          <label htmlFor="checkbox">
            Hyväksyn kantoapu Kuopion{' '}
            <Link href={'/sopimusehdot'}>sopimusehdot</Link>
          </label>
        </div>
        <div className={`${classes.input_90} ${classes.margin_10}`}>
          <ReCAPTCHA
            sitekey={process.env.RECAPTCHA_KEY as string}
            onChange={(e) => console.log(e)}
          />
        </div>
        <div className={`${classes.input_90} ${classes.button}`}>
          <button type="submit">Lähetä</button>
        </div>
      </div>
    </form>
  );
};

export default MeidanTarinaForm;
