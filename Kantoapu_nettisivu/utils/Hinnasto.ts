const Hinnasto: IHinnasto[] = [
  {
    title: 'Kuorma-auto 52m³',
    items: [
      { price: '85€/h', description: '1 muuttomiehellä' },
      { price: '115€/h', description: '2 muuttomiehellä' },
      { price: '40€/h', description: 'Lisämies muutolle' },
    ],
  },
  {
    title: 'Pakettiauto 15m³',
    items: [
      { price: '70€/h', description: '1 muuttomiehellä' },
      { price: '85€/h', description: '2 muuttomiehellä' },
      { price: '115€/h', description: '3 muuttomiehellä' },
    ],
  },
  {
    title: 'Kantoapu',
    items: [
      { price: '40€/h', description: '1 muuttomiehellä' },
      { price: '80€/h', description: '2 muuttomiehellä' },
      { price: '120€/h', description: '3 muuttomiehellä' },
    ],
  },
];

export interface IHinnasto {
  title: string;
  items: IHinnastoItems[];
}

interface IHinnastoItems {
  price: string;
  description: string;
}

export default Hinnasto;
