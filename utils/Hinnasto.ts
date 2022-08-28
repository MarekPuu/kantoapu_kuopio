const Hinnasto: IHinnasto[] = [
  {
    title: 'Kuorma-auto 52m³',
    items: [
      { price: '85€/h', description: '1 muuttomies ja kuorma-auto' },
      { price: '120€/h', description: '2 muuttomiestä ja kuorma-auto' },
      { price: '40€/h', description: 'Lisämies muutolle' },
    ],
  },
  {
    title: 'Pakettiauto 15m³',
    items: [
      { price: '70€/h', description: '1 muuttomies ja kuorma-auto' },
      { price: '85€/h', description: '2 muuttomiestä ja pakettiauto' },
      { price: '115€/h', description: '1 muuttomies ja kuorma-auto' },
    ],
  },
  {
    title: 'Kantoapu',
    items: [
      { price: '40€/h', description: '1 muuttomies ilman autoa' },
      { price: '80€/h', description: '2 muuttomiestä ilman autoa' },
      { price: '120€/h', description: '3 muuttomiestä ilman autoa' },
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
