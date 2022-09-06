const Palvelut: IPalvelut[] = [
  {
    title: 'Muutot',
    text: [
      'Meiltä löytyy muuttoapu jokaiseen kotimuuttoon, olipa kyse yksiön tai omakotitalon muutosta. Yhdessä löydämme sinulle sopivan ratkaisun',
    ],
    icon: null,
  },
  {
    title: 'Kantoapu',
    text: [
      'Onko sinulla muuttoauto varattuna, mutta puuttuu kantajat? Ei hätääme tarjoamme kantoapua jokaiseen tilanteeseen.',
    ],
    icon: null,
  },
  {
    title: 'Kierrätyspalvelu',
    text: [
      'Kierrätämme puolestasi vanhat huonekalusi ja irtoimiston, maksat vain tuntihinnan mukaisen veloituksen ja kaatopaikkamaksun',
    ],
    icon: null,
  },
  {
    title: 'Muuttolaatikoiden vuokraus',
    text: [
      'Meiltä saat vuorkattua helposti ja edullisesti muuttolaatikot muuttoasi varten. ',
      'Hinta: 0,2€/kpl/päivä',
      'Toimitus: 10€/suunta',
    ],
    icon: null,
  },
  {
    title: 'Pakkauspalvelu',
    text: [
      'Pakkaaminen on usein muuton aikaa vievin vaihe. Uuteen kotiin muuttamisessa on paljon muutakin huolehdittavaa, joten miksipä et säästäisi aikaa ja antaisi meidän ammattilaisten pakata kotisi irtaimiston',
    ],
    icon: null,
  },
  {
    title: 'Kalusteasennukset',
    text: [
      'Oli sitten kyseessä pieni kantoapu keikka tai iso työmaa urakka, me tarjoamme luotettavan apumiehen teille. Ota yhteyttä ja kysy tarjous.',
    ],
    icon: null,
  },
];

export interface IPalvelut {
  title: string;
  text: string[];
  icon: string | null;
}

export default Palvelut;
