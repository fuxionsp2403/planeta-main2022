export interface Cards {
  nameTitle: string;
  nameImage: string;
  id?: string;
}

export const Planetas: Cards[] = [
  {
    nameTitle: 'mercury',
    nameImage: 'mercurio.jpg'
 },
  {
    nameTitle: 'venus',
    nameImage: 'venus.jpg'
  },
  {
    nameTitle: 'earth',
    nameImage: 'tierra.jpg',
   },
  {
    nameTitle: 'mars',
    nameImage: 'marte.jpg',
  },
  {
    nameTitle: 'saturn',
    nameImage: 'saturno.jpg',
  },
  {
    nameTitle: 'uranus',
    nameImage: 'urano.jpg',
  },
  {
    nameTitle: 'neptune',
    nameImage: 'neptuno.jpg',
  },
  {
    nameTitle: 'jupiter',
    nameImage: 'jupiter.jpg',
  }
];
