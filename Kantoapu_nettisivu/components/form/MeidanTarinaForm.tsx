import React, { useEffect, useState } from 'react';
import Input from '../reusableComponents/Input';
import classes from '../../styles/components/MeidanTarinaForm.module.scss';
import Link from 'next/link';
import ReCAPTCHA from 'react-google-recaptcha';
import { toast } from 'react-toastify';
import LoadingSpinner from '../reusableComponents/LoadingSpinner/LoadingSpinner';
import emailjs from '@emailjs/browser';

const MeidanTarinaForm = () => {
  const [nimi, setNimi] = useState('');
  const [sposti, setSposti] = useState('');
  const [puhelin, setPuhelin] = useState('');
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

  const [loading, setLoading] = useState(false);

  const [recaptha, setRecaptha] = useState({
    value: '',
    load: false,
    expired: 'false',
  });

  const [errorArray, setErrorArray] = useState<Array<string>>([]);

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

  const handleRecapthaChange = (value: string) => {
    setRecaptha((r) => {
      return { ...r, expired: 'false', value: value };
    });
    if (value === null)
      setRecaptha((r) => {
        return { ...r, expired: 'true' };
      });
  };

  const onHissi = (val: boolean) => {
    if (val === true) return 'Kyllä';
    return 'Ei';
  };

  const resetForm = () => {
    setNimi('');
    setSposti('');
    setPuhelin('');
    setLOsoite('');
    setLKerros('');
    setLAsunnonKoko('');
    setMOsoite('');
    setMAsunnonKoko('');
    setMKerros('');
    setMuuttopaiva('');
    setViesti('');
  };

  const handleFormSubmit = async (e: any) => {
    e.preventDefault();
    const errors = [];
    if (!sopimusehdot) errors.push('sopimusehdot');
    if (!recaptha.value) errors.push('recaptha');
    if (errors.length > 0) return setErrorArray(errors);

    try {
      setLoading(true);
      emailjs
        .send(
          process.env.EMAILJS_SERVICE_ID as string,
          'KantoapuKuopioForm',
          {
            nimi,
            sposti,
            puhelin,
            lOsoite,
            lAsunnonKoko,
            lKerros,
            lOnHissi: onHissi(lOnHissi),
            mOsoite,
            mAsunnonKoko,
            mKerros,
            mOnHissi: onHissi(mOnHissi),
            muuttopaiva,
            viesti,
            'g-recaptcha-response': recaptha.value,
          },
          process.env.EMAILJS_PUBLIC_KEY as string
        )
        .then(
          (result) => {
            setLoading(false);
            resetForm();
            toast.success('Tarjouspyyntö lähetetty!', {
              position: 'top-center',
              autoClose: 5000,
              closeOnClick: true,
            });
          },
          (error) => {
            setLoading(false);
            toast.error('Jotain meni vikaan!', {
              position: 'top-center',
              autoClose: 5000,
              closeOnClick: true,
            });

            console.log(error.text);
          }
        );
      setErrorArray([]);
    } catch (error) {
      console.log('form error', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    setRecaptha((r) => {
      return { ...r, load: true };
    });
  }, []);

  return (
    <form id="form" onSubmit={handleFormSubmit}>
      <div className={classes.formContainer}>
        {loading && (
          <div className={classes.loadingOverlay}>
            <LoadingSpinner />
          </div>
        )}
        <div className={classes.TitleContainer}>
          <h1>Pyydä tarjous!</h1>
        </div>
        <div className={classes.formInfo}>
          <p>Tiedot</p>
        </div>
        <div className={classes.input_90_wrap}>
          <div className={classes.input_60_grow}>
            <Input label="Nimi" onChange={setNimi} value={nimi} type="text" />
          </div>
          <div className={classes.input_45_grow}>
            <Input
              label="Puhelinnumero"
              onChange={setPuhelin}
              value={puhelin}
              type="text"
            />
          </div>
        </div>
        <div className={classes.input_90}>
          <Input
            label="Sähköposti"
            onChange={setSposti}
            value={sposti}
            type="text"
          />
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
            id="checkboxL"
            name="checkboxL"
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
            id="checkboxM"
            name="checkboxM"
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
            <label htmlFor="textareaEtusivu">Viesti</label>
            <textarea
              onChange={(e) => setViesti(e.target.value)}
              value={viesti}
              id="textareaEtusivu"
              name="textareaEtusivu"
            />
          </div>
        </div>
        <div className={`${classes.input_90} ${classes.checkboxContainer} `}>
          {errorArray.includes('sopimusehdot') && (
            <p className={classes.error}>Hyväksy sopimusehdot jatkaaksesi</p>
          )}

          <input
            id="checkbox"
            name="checkbox"
            type="checkbox"
            onChange={(e) => handleCheckBoxCheck(e, 'sopimusehdot')}
          />
          <label htmlFor="checkbox">
            Hyväksyn kantoapu Kuopion{' '}
            <Link
              href={{
                pathname: '/',
                query: { modal: 'sopimusehdot' },
              }}
            >
              sopimusehdot
            </Link>
          </label>
        </div>
        <div
          className={`${classes.recaptcha} ${
            errorArray.includes('recaptha') && classes.errorBorder
          }`}
        >
          {recaptha.load && (
            <ReCAPTCHA
              sitekey={process.env.RECAPTCHA_KEY as string}
              onChange={(e) => handleRecapthaChange(e as string)}
            />
          )}
        </div>
        <div className={`${classes.input_90} ${classes.button}`}>
          <button disabled={loading} type="submit">
            Lähetä
          </button>
        </div>
      </div>
    </form>
  );
};

export default MeidanTarinaForm;
