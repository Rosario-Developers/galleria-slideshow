const paints = [
  {
    name: 'Starry Night',
    year: 1889,
    artist: 'Vincent Van Gogh',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/700px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg',
    description:
      'The Starry Night is an oil-on-canvas painting by the Dutch Post-Impressionist painter Vincent van Gogh. Painted in June 1889, it depicts the view from the east-facing window of his asylum room at Saint-Rémy-de-Provence, just before sunrise, with the addition of an imaginary village.',
    column: 1,
  },
  {
    name: 'The Storm on the Sea of Galilee',
    year: 1633,
    artist: 'Rembrandt',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/f/f3/Rembrandt_Christ_in_the_Storm_on_the_Lake_of_Galilee.jpg',
    description:
      'The Storm on the Sea of Galilee is a 1633 oil-on-canvas painting by the Dutch Golden Age painter Rembrandt van Rijn. It was previously in the Isabella Stewart Gardner Museum in Boston but was stolen in 1990 and remains missing.',
    column: 1,
  },
  {
    name: 'Lady with an Ermine',
    year: 1489,
    artist: 'Leonardo da Vinci',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Lady_with_an_Ermine_-_Leonardo_da_Vinci_-_Google_Art_Project.jpg/480px-Lady_with_an_Ermine_-_Leonardo_da_Vinci_-_Google_Art_Project.jpg',
    description:
      'The Lady with an Ermine is a portrait painting widely attributed to the Italian Renaissance artist Leonardo da Vinci. Dated to c. 1489–1491, the work is painted in oils on a panel of walnut wood. ',
    column: 1,
  },
  {
    name: 'The Boy in the Red Vest',
    year: 1882,
    artist: 'Edouard Manet',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Le_Gar%C3%A7on_au_gilet_rouge%2C_par_Paul_C%C3%A9zanne%2C_FWN_496.jpg/540px-Le_Gar%C3%A7on_au_gilet_rouge%2C_par_Paul_C%C3%A9zanne%2C_FWN_496.jpg',

    description:
      "The Boy in the Red Vest, also known as The Boy in the Red Waistcoat, is a painting by Paul Cézanne, painted in 1889 or 1890. It is a fine example of Cézanne's skilled, nuanced, and innovative mature work after 1880. ",
    column: 1,
  },

  {
    name: 'Girl with a Pearl Earring',
    year: 1665,
    artist: 'Johannes Vermeer',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/1665_Girl_with_a_Pearl_Earring.jpg/540px-1665_Girl_with_a_Pearl_Earring.jpg',
    description:
      'Girl with a Pearl Earring is an oil painting by Dutch Golden Age painter Johannes Vermeer, dated c. 1665. Going by various names over the centuries, it became known by its present title towards the end of the 20th century after the earring worn by the girl portrayed there. ',
    column: 2,
  },
  {
    name: 'The Great Wave off Kanagawa',
    year: 1831,
    artist: 'Katsushika Hokusai',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Tsunami_by_hokusai_19th_century.jpg/700px-Tsunami_by_hokusai_19th_century.jpg',
    description:
      'The Great Wave off Kanagawa is a woodblock print that was made by Japanese ukiyo-e artist Hokusai, probably in late 1831 during the Edo period of Japanese history. The print depicts three boats moving through a storm-tossed sea with a large wave forming a spiral in the centre and Mount Fuji visible in the background. ',
    column: 2,
  },
  {
    name: 'The Night Cafe',
    year: 1888,
    artist: 'Vincent Van Gogh',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Vincent_Willem_van_Gogh_076.jpg/540px-Vincent_Willem_van_Gogh_076.jpg',
    description: '',
    column: 2,
  },
  {
    name: 'Arnolfini Portrait',
    year: 1434,
    artist: 'Jan van Eyck',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/The_Arnolfini_portrait_%281434%29.jpg/540px-The_Arnolfini_portrait_%281434%29.jpg',
    description: '',
    column: 2,
  },

  {
    name: 'Guernica',
    year: 1937,
    artist: 'Pablo Picasso',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Mural_del_Gernika.jpg/660px-Mural_del_Gernika.jpg',
    description: '',
    column: 3,
  },
  {
    name: 'Van Gogh Self-Portrait',
    year: 1887,
    artist: 'Vincent Van Gogh',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project.jpg/540px-Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project.jpg',
    description: '',
    column: 3,
  },
  {
    name: 'Mona Lisa',
    year: 1503,
    artist: 'Leonardo da Vinci',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/540px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg',
    description: '',
    column: 3,
  },

  {
    name: 'Penitent Magdalene',
    year: '',
    artist: 'Artemisia Gentileschi',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Artemisia_Gentileschi_%E2%80%94_Conversione_della_Maddalena_%28Maria_Maddalena_penitente.jpg/540px-Artemisia_Gentileschi_%E2%80%94_Conversione_della_Maddalena_%28Maria_Maddalena_penitente.jpg',
    description: '',
    column: 4,
  },
  {
    name: 'The Sleeping Gypsy',
    year: 1889,
    artist: 'Henri Rousseau',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/La_Boh%C3%A9mienne_endormie.jpg/540px-La_Boh%C3%A9mienne_endormie.jpg',
    description: '',
    column: 4,
  },
  {
    name: 'The Basket of Apples',
    year: 1885,
    artist: 'Paul Cezanne',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Paul_C%C3%A9zanne_-_The_Basket_of_Apples_-_1926.252_-_Art_Institute_of_Chicago.jpg/540px-Paul_C%C3%A9zanne_-_The_Basket_of_Apples_-_1926.252_-_Art_Institute_of_Chicago.jpg',
    description: '',
    column: 4,
  },
  {
    name: 'The Swing',
    year: 1886,
    artist: 'Jean-Honore Fragonard',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Joean_Honor%C3%A9_Fragonard_-_The_Swing.jpg/600px-Joean_Honor%C3%A9_Fragonard_-_The_Swing.jpg',
    description: '',
    column: 4,
  },
];
