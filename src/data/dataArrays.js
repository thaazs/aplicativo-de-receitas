export const categories = [
  {
    id: 3,
    name: 'Cookies',
    photo_url:
    'https://www.telegraph.co.uk/content/dam/Travel/2019/January/france-food.jpg?imwidth=1400'
  },
  {
    id: 1,
    name: 'Comida Mexicana',
    photo_url: 'https://ak1.picdn.net/shutterstock/videos/19498861/thumb/1.jpg'
  },
  {
    id: 2,
    name: 'Comida Italiana',
    photo_url:
      'https://images.unsplash.com/photo-1533777324565-a040eb52facd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
  },
  {
    id: 4,
    name: 'Vitaminas',
    photo_url:
    'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/still-life-of-three-fresh-smoothies-in-front-of-royalty-free-image-561093647-1544042068.jpg?crop=0.715xw:0.534xh;0.0945xw,0.451xh&resize=768:*'
  },
  {
    id: 0,
    name: 'Pizza',
    photo_url: 'https://amp.businessinsider.com/images/5c084bf7bde70f4ea53f0436-750-563.jpg'
  },
];

export const recipes = [
  {
    recipeId: 122,
    categoryId: 3,
    title: 'Biscoitos de Aveia', 
    photo_url: 'https://www.texanerin.com/content/uploads/2019/06/nobake-chocolate-cookies-1-650x975.jpg',
    photosArray: [
      'https://www.texanerin.com/content/uploads/2019/06/nobake-chocolate-cookies-1-650x975.jpg',
      "https://namelymarly.com/wp-content/uploads/2018/04/20180415_Beet_Lasagna_10.jpg",
      'https://advancelocal-adapter-image-uploads.s3.amazonaws.com/image.al.com/home/bama-media/width600/img/news_impact/photo/burger-fijpg-57e7e5907630c2ad.jpg',
      'https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1439,w_2560,x_0,y_0/dpr_1.5/c_limit,w_1044/fl_lossy,q_auto/v1492718105/articles/2013/09/24/burger-king-s-new-french-fries-took-ten-years-to-develop/130923-gross-burger-tease_izz59e',
      'https://aht.seriouseats.com/images/2012/02/20120221-193971-fast-food-fries-Burger-King-fries-2.jpg'
    ],
    time: '15',
    ingredients: [[0, '200ml'], [1, '5g'], [2, '300g']],
    description:
      '-- Comece com batatas russet limpas e descascadas que você cortou em palitos de 3/8 de polegada. Coloque em uma tigela com água bem gelada: continue enxaguando e trocando a água até que ela fique clara; escorra completamente e seque com toalhas de papel ou um pano de cozinha limpo sem fiapos.\n\n -- Enquanto isso, aqueça seu óleo a 177ºC (350ºF). Coloque as batatas preparadas no óleo e cozinhe por cerca de 5 minutos. Elas terão aquela cor de tom loiro. \n\n -- Nota: Quando você adicionar batatas frias ao óleo quente, a temperatura do óleo vai cair - você quer que fique entre 165ºC e 163ºC (330-325ºF).\n\n -- Retire do óleo; escorra e deixe esfriar. Agora - ou refrigere até estar pronto para terminar de cozinhar, ou deixe esfriar completamente e congele por até 3 meses. Para congelar corretamente - coloque as batatas completamente frias em uma única camada em uma bandeja e coloque no congelador até congelar. Depois, embale.\n\n -- Para finalizar o cozimento - pré-aqueça seu óleo a 204ºC (400ºF). Adicione suas batatas frias (o que vai baixar a temperatura do óleo - o que é bom porque você quer que fique perto dos 190ºC). Cozinhe por mais alguns minutos até ficar pronto. Adicione sal levemente e agite bem para que o sal se distribua uniformemente e elas não fiquem salgadas demais.'
  },

  {
    {
      recipeId: 3,
      categoryId: 4,
      title: 'Smoothie de Três Frutas', // Título traduzido
      photo_url:
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-how-to-make-a-smoothie-horizontal-1542310071.png?crop=0.803xw:0.923xh;0.116xw,0.00510xh&resize=768:*',
      photosArray: [
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-how-to-make-a-smoothie-horizontal-1542310071.png?crop=0.803xw:0.923xh;0.116xw,0.00510xh&resize=768:*',
        'https://www.vitamix.com/media/other/images/xVitamix-Triple-Berry-Smoothie-square-crop__1.jpg.pagespeed.ic.OgTC3ILD3R.jpg',
        'http://images.media-allrecipes.com/userphotos/960x960/3798204.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrzui8MM6W66I29VZwVvcjpGv99JW3O1owgupc3KwB65rhAyrZ'
      ],
      time: '10',
      ingredients: [
        [59, '1'],
        [60, '225g'], // Convertido para gramas
        [61, '500ml'], // Convertido para mililitros
      ],
      description: 'Em um liquidificador, combine todos os ingredientes e bata até ficar homogêneo. Em seguida, divida entre 2 copos e decore com amoras, se desejar.'
    },
    {
      recipeId: 2,
      categoryId: 3,
      title: 'Biscoitos Veganos', // Título traduzido
      photo_url: 'https://www.texanerin.com/content/uploads/2018/06/no-bake-lactation-cookies-1-650x975.jpg',
      photosArray: [
        'https://www.texanerin.com/content/uploads/2018/06/no-bake-lactation-cookies-1-650x975.jpg',
        'https://ichef.bbci.co.uk/news/660/cpsprodpb/B2C0/production/_106106754_vegnuggets976.jpg',
        'https://pixel.nymag.com/imgs/daily/grub/2017/11/22/22-mcds-chicken-tenders.w330.h330.jpg',
        'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fcdn-img.health.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Flarge_16_9%2Fpublic%2Fstyles%2Fmain%2Fpublic%2Fgettyimages-508510211.jpg%3Fitok%3Dh-Uryi8r&w=400&c=sc&poi=face&q=85'
      ],
      time: '30',
      ingredients: [
        [0, '2 litros'], // Convertido para litros
        [16, '1'],
        [12, '1 xícara'], // Mantido em português
        [18, '1 xícara'], // Mantido em português
        [19, '1 colher de chá'], // Mantido em português
        [1, '2 colheres de chá'], // Mantido em português
        [4, '1/4 colher de chá'], // Mantido em português
        [7, '1/8 colher de chá'], // Mantido em português
        [20, '1/2 colher de chá'], // Mantido em português
        [21, '4']
      ],
      description:
        '-- Bata o ovo e depois combine-o com água em uma tigela. Misture. Combine a farinha, sal, MSG, pimenta, cebola em pó e alho em pó em um saco zip lock de tamanho galão. Bata cada filé de peito até ficar com cerca de 0,6 cm de espessura. Em seguida, corte em pedaços do tamanho de mordidas. Cubra cada pedaço com a mistura de farinha, sacudindo no saco zip lock. Retire e cubra na mistura de ovo. Depois cubra novamente na mistura de farinha. Agite para cobrir. Frite em óleo a 190 graus Celsius por 10-12 minutos, até dourar e ficar crocante.'
    },
    {
      recipeId: 3,
      categoryId: 3,
      title: 'Biscoitos de Especiarias de Abóbora', // Título traduzido
      photo_url:
        'https://www.texanerin.com/content/uploads/2018/11/pumpkin-spice-cookies-4-650x975.jpg',
      photosArray: [
        'https://www.texanerin.com/content/uploads/2018/11/pumpkin-spice-cookies-4-650x975.jpg',
        'https://cdn.junglecreations.com/wp/junglecms/2018/07/4164c5bd-wide-thumbnail.jpg',
        'https://pinchofyum.com/wp-content/uploads/Crunchwrap-Inside.jpg',
        'https://monsonmadethis.com/wp-content/uploads/2017/10/IMG_20171015_161017_025-e1533869302263.jpg'
      ],
      time: '45',
      ingredients: [
        [0, '2 colheres de sopa'], // Mantido em português
        [22, '1/2'], // Mantido em português, mas pode ser específico
        [23, '2 colheres de sopa'], // Mantido em português
        [7, '2 dentes'], // Mantido em português
        [3, '1 colher de chá'], // Mantido em português
        [24, '1 colher de sopa'], // Mantido em português
        [25, '450g'], // Convertido para gramas
        [1, '2 colheres de chá'], // Mantido em português
        [4, '2 colheres de chá'], // Mantido em português
        [26, '425g'], // Convertido para gramas
        [27, '8'], // Mantido em português
        [28, '2'], // Mantido em português
        [29, '1 xícara'] // Mantido em português
      ],
      description:
        '-- Em uma panela média em fogo médio, aqueça 1 colher de sopa de óleo. Adicione a cebola e cozinhe até ficar macia, cerca de 5 minutos. Adicione o alho e cozinhe até ficar perfumado, mais 1 minuto. Adicione o extrato de tomate e mexa para cobrir a cebola e o alho. Adicione a carne moída e cozinhe, quebrando a carne com uma colher de pau, até que não esteja mais rosa, cerca de 6 minutos. Escorra a gordura.\n\n -- Retorne a carne para a panela e tempere com pimenta em pó, páprica, sal e pimenta. Adicione o molho de tomate e os feijões kidney. Deixe ferver, depois reduza o fogo e cozinhe por 15 minutos. Adicione um pouco de chili ao centro de cada tortilla, deixando espaço para dobrar as bordas. Cubra com Fritos e depois com cheddar. Dobre as bordas das tortillas em direção ao centro, criando pregas. Invertê-las para que as pregas fiquem na parte inferior e fiquem unidas.\n\n -- Em uma frigideira média em fogo médio, aqueça a colher de sopa restante de óleo. Adicione uma Crunchwrap com a costura voltada para baixo e cozinhe até que a tortilla esteja dourada, de 3 a 5 minutos de cada lado. Repita com as Crunchwraps restantes.'
    },
    
    {
      recipeId: 1,
      categoryId: 3,
      title: 'Brownies',
      photo_url: 'https://www.texanerin.com/content/uploads/2018/01/coconut-flour-brownies-1-650x975.jpg',
      photosArray: [
        'https://www.texanerin.com/content/uploads/2018/01/coconut-flour-brownies-1-650x975.jpg',
        'https://images-gmi-pmc.edge-generalmills.com/6fbc6859-e2b1-499d-b0fa-ada600c9cc3f.jpg',
        'http://www.recipe4living.com/assets/itemimages/400/400/3/83c29ac7418067c2e74f31c8abdd5a43_477607049.jpg',
        'https://www.franchisechatter.com/wp-content/uploads/2014/08/KFC-Photo-by-James.jpg'
      ],
      time: '30',
      ingredients: [
        [1, '2 colheres de sopa'],
        [3, '1 colher de sopa'],
        [4, '1 colher de chá'],
        [5, '1/2 colher de chá'],
        [6, '1/2 colher de chá'],
        [7, '1/2 colher de chá'],
        [8, '1/2 colher de chá'],
        [9, '1/2 colher de chá'],
        [10, '1/2 colher de chá'],
        [11, '1/2 colher de chá'],
        [12, '1/2 xícaras'],
        [13, '1 colher de sopa'],
        [14, '1 colher de sopa'],
        [15, '2 peitos, 2 coxas, 2 coxinhas, 2 asas'],
        [16, '1'],
        [17, '2 litros']
      ],
      description:
        '-- Pré-aqueça a fritadeira a 350°F. Misture bem todas as especiarias. Combine as especiarias com farinha, açúcar mascavo e sal. Mergulhe os pedaços de frango na clara de ovo para cobri-los levemente e, em seguida, transfira para a mistura de farinha. Vire algumas vezes e certifique-se de que a mistura de farinha está bem grudada no frango.\n\n -- Repita com todos os pedaços de frango. Deixe os pedaços de frango descansarem por 5 minutos para que a crosta tenha a chance de secar um pouco. Frite o frango em lotes. Peitos e asas devem levar de 12 a 14 minutos, e pernas e coxas precisarão de alguns minutos a mais. Os pedaços de frango estão prontos quando um termômetro de carne inserido na parte mais grossa lê 165°F. Deixe o frango escorrer sobre alguns papéis toalha quando sair da fritadeira. Sirva quente.'
    },
    {
      recipeId: 4,
      categoryId: 1,
      title: 'Tacos de Peixe Perfeitos',
      photo_url: 'https://hips.hearstapps.com/hmg-prod/images/190307-fish-tacos-112-1553283299.jpg',
      photosArray: [
        'http://d2814mmsvlryp1.cloudfront.net/wp-content/uploads/2014/04/WGC-Fish-Tacos-copy-2.jpg',
        'https://thecozyapron.com/wp-content/uploads/2018/03/baja-fish-tacos_thecozyapron_1.jpg',
        'https://www.simplyrecipes.com/wp-content/uploads/2017/06/2017-07-22-FishTacos-6.jpg'
      ],
      time: '35',
      ingredients: [
        [30, 'suco de 1'],
        [24, '2 colheres de chá'],
        [0, '3 colheres de sopa'],
        [3, '1 colher de chá'],
        [31, '1/2 colher de chá'],
        [32, '1/2 colher de chá'],
        [4, '2 colheres de chá'],
        [33, '1/2 lb'],
        [27, '8'],
        [14, '2 colheres de chá'],
        [34, '1']
      ],
      description:
        '-- Em uma tigela rasa média, misture o azeite, o suco de limão, a páprica, o pó de chili, o cominho e a pimenta caiena. Adicione o bacalhau, mexendo até que fique uniformemente coberto. Deixe marinar por 15 minutos. Enquanto isso, prepare o slaw: em uma tigela grande, misture a maionese, o suco de limão, o coentro e o mel. Misture o repolho, o milho e o jalapeño. Tempere com sal e pimenta.\n\n -- Em uma frigideira grande e antiaderente em fogo médio-alto, aqueça o óleo vegetal. Retire o bacalhau da marinada e tempere os dois lados de cada filé com sal e pimenta. Adicione o peixe com o lado da carne voltado para baixo. Cozinhe até que fique opaco e cozido, de 3 a 5 minutos de cada lado.\n\n -- Deixe descansar por 5 minutos antes de desfiar com um garfo. Monte os tacos: sirva o peixe sobre tortilhas grelhadas com slaw de milho e abacate. Esprema suco de limão por cima e decore com creme azedo.'
    },
    {
      recipeId: 5,
      categoryId: 1,
      title: 'Fajitas de Frango',
      photo_url:
        'https://tmbidigitalassetsazure.blob.core.windows.net/secure/RMS/attachments/37/1200x1200/Flavorful-Chicken-Fajitas_EXPS_GHBZ18_12540_B08_15_8b.jpg',
      photosArray: [
        'https://dadwithapan.com/wp-content/uploads/2015/07/Spicy-Chicken-Fajitas-22-1200x480.jpg',
        'https://3.bp.blogspot.com/-X-dHj7ORF9Q/XH4ssgTuSZI/AAAAAAAAEig/E46HP9wCfdsvyJFcMTX30cw-ICep8lF9ACHMYCw/s1600/chicken-fajitas-mexican-food-id-149559-buzzerg.jpg',
        'https://cdn-image.foodandwine.com/sites/default/files/styles/medium_2x/public/201403-xl-chipotle-chicken-fajitas.jpg?itok=ghVcI5SQ'
      ],
      time: 35,
      ingredients: [
        [9, '1/2 colher de chá'],
        [0, '4 colheres de sopa'],
        [1, '1/2 colher de chá'],
        [30, '2 colheres de sopa'],
        [31, '1 colher de chá'],
        [7, '1 colher de chá'],
        [24, '1/2 colher de chá'],
        [3, '1/2 colher de chá'],
        [21, '1 libra'],
        [22, '1/2 xícara'],
        [27, '6'],
        [36, '4'],
        [37, '1/2'],
        [38, '1/2']
      ],
      description:
        '-- Em uma tigela grande, combine 2 colheres de sopa de óleo, suco de limão e temperos; adicione o frango. Vire para cobrir; cubra. Refrigere por 1 a 4 horas. Em uma frigideira grande, refogue pimentões e cebolas no restante do óleo até que fiquem crocantes e macios. Retire e mantenha aquecido. Escorra o frango, descartando a marinada. Na mesma frigideira, cozinhe o frango em fogo médio-alto por 5 a 6 minutos ou até que não esteja mais rosado.\n\n -- Retorne a mistura de pimentão para a panela; aqueça. Coloque o recheio no centro das tortilhas; dobre ao meio. Sirva com os acompanhamentos desejados.'
    },
  
  [
  {
    "recipeId": 6,
    "categoryId": 2,
    "title": "Pizza Buffalo",
    "photo_url": "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
    "photosArray": [
      "https://www.tablefortwoblog.com/wp-content/uploads/2019/01/buffalo-chicken-pizza-recipe-photos-tablefortwoblog-3-500x500.jpg",
      "http://pizzachoicema.com/wp-content/uploads/2018/08/Buffalo-Chicken-Pizza.jpg",
      "https://static1.squarespace.com/static/565bb41ae4b0509ba9fdf769/t/5b9a8e80aa4a998b0be0fcf4/1536855690622/pizza.gif"
    ],
    "time": 50,
    "ingredients": [
      [39, "1 lb"],
      [40, "1 xícara"],
      [41, "1/2 xícara"],
      [42, "1/4 xícara"],
      [43, "2 colheres de sopa"],
      [44, "1/2 xícara"],
      [7, "1/4 colher de chá"],
      [5, "1/4 colher de chá"],
      [30, "1/4 colher de chá"],
      [45, "2 oz"],
      [12, "para polvilhar"],
      [4, "1/2 colher de chá"],
      [47, "2"],
      [46, "9 oz"]
    ],
    "description":
      "-- Coloque uma grade na parte superior do forno. Coloque uma frigideira grande de ferro fundido na grade e pré-aqueça o forno a 500° (ou o máximo que seu forno permitir). Coloque a massa da pizza em uma tigela grande, despeje um pouco de óleo por cima e vire para cobrir. Cubra a tigela com plástico e deixe a massa descansar em temperatura ambiente enquanto a frigideira e o forno aquecem.\n\n -- Enquanto isso, cozinhe o molho picante, o molho marinara e a manteiga em uma panela média em fogo médio, mexendo ocasionalmente, até que a manteiga derreta. Adicione o creme, reduza o fogo para baixo e cozinhe em fogo brando, mexendo ocasionalmente, até que o molho engrosse levemente e esteja aquecido, cerca de 10 minutos. Aqueça 1 colher de sopa de óleo em uma frigideira grande em fogo médio-alto. Adicione o frango, mexa para cobrir, e depois adicione ¼ de xícara do molho Buffalo.\n\n -- Cozinhe o frango, mexendo ocasionalmente, até que esteja aquecido, cerca de 2 minutos. Reduza o fogo e cozinhe em fogo brando, mexendo frequentemente, até que o frango esteja bem coberto e o molho tenha engrossado levemente, cerca de 5 minutos. Enquanto isso, misture o iogurte, o suco de limão, o sal de aipo, o alho em pó, ¼ de xícara de queijo azul, ½ colher de chá de pimenta e 2 colheres de sopa de água em uma tigela pequena, adicionando mais água se o molho parecer muito grosso (deve ser líquido); reserve.\n\n -- Coloque a massa em uma superfície de trabalho levemente enfarinhada. Modele com as mãos em um círculo que seja um pouco maior do que a frigideira de ferro fundido que você está usando. Retire a frigideira quente do forno (cuidado com a alça!) e coloque em uma superfície resistente ao calor. Adicione um pouco de farinha na panela. Coloque a massa na frigideira e, em seguida, trabalhe as bordas da massa pelas laterais da frigideira com as pontas dos dedos (use uma espátula de borracha ou colher de madeira se estiver nervoso em tocar na panela quente). Regue um pouco de óleo ao longo da borda interna da panela para que escorra atrás e por baixo da massa, o que ajudará a dourar e a soltar.\n\n -- Espalhe cerca de ⅓ de xícara de molho Buffalo sobre a massa. Arrume a mussarela por cima e, em seguida, adicione a ¼ de xícara restante de queijo azul. Coloque a mistura de frango por cima. Asse a pizza na prateleira superior até que a crosta e o queijo estejam bem dourados, de 15 a 20 minutos. Transfira a frigideira para o fogão (novamente, cuidado com a alça!) e deixe a pizza descansar por alguns minutos. Usando uma espátula, deslize a pizza para uma tábua ou prato de corte. Coloque o aipo por cima e finalize com o molho de queijo azul reservado. Tempere com pimenta e regue com um pouco de óleo."
  },
  {
    "recipeId": 0,
    "categoryId": 0,
    "title": "Lasanha Clássica",
    "photo_url": "https://namelymarly.com/wp-content/uploads/2018/04/20180415_Beet_Lasagna_10.jpg",
    "photosArray": [
      "https://namelymarly.com/wp-content/uploads/2018/04/20180415_Beet_Lasagna_10.jpg",
      "https://advancelocal-adapter-image-uploads.s3.amazonaws.com/image.al.com/home/bama-media/width600/img/news_impact/photo/burger-fijpg-57e7e5907630c2ad.jpg",
      "https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1439,w_2560,x_0,y_0/dpr_1.5/c_limit,w_1044/fl_lossy,q_auto/v1492718105/articles/2013/09/24/burger-king-s-new-french-fries-took-ten-years-to-develop/130923-gross-burger-tease_izz59e",
      "https://aht.seriouseats.com/images/2012/02/20120221-193971-fast-food-fries-Burger-King-fries-2.jpg"
    ],
    "time": "15",
    "ingredients": [
      [0, "200ml"],
      [1, "5g"],
      [2, "300g"]
    ],
    "description":
      "-- Comece com batatas russet limpas e descascadas que você cortou em palitos de 3/8 de polegada. Coloque em uma tigela com água bem fria: continue enxaguando e trocando a água até que ela fique clara; escorra bem e seque com toalhas de papel ou um pano de cozinha sem fiapos.\n\n -- Enquanto isso, pré-aqueça seu óleo quente a 350 graus F. Coloque as batatas preparadas no óleo e cozinhe por cerca de 5 minutos. Elas devem ter uma cor dourada.\n\n -- Nota: Assim que você adicionar as batatas frias ao óleo quente, a temperatura do seu óleo cairá - você quer que ela fique entre 330 e 325 graus F.\n\n -- Retire do óleo; escorra e resfrie. Agora - ou refrigere até que esteja pronto para finalizar o cozimento, ou resfrie completamente e congele por até 3 meses. Para congelar adequadamente - coloque as batatas fritas completamente resfriadas em uma única camada em uma bandeja e coloque no congelador até que estejam congeladas. Depois, coloque-as em um saco.\n\n -- Para finalizar o cozimento - pré-aqueça seu óleo a 400° F. Adicione suas batatas fritas frias (o que fará a temperatura do óleo cair - o que é normal, pois você quer que fique próximo de 375 graus F) e cozinhe por alguns minutos até ficarem prontas. Polvilhe levemente com sal e agite bem para que o sal se distribua bem e não fiquem salgadas."
  },
  {
    "recipeId": 7,
    "categoryId": 2,
    "title": "Espaguete à Carbonara",
    "photo_url": "https://truffle-assets.imgix.net/655ce202-862-butternutsquashcarbonara-land.jpg",
    "photosArray": [
      "https://ak3.picdn.net/shutterstock/videos/10431533/thumb/10.jpg",
      "https://www.kcet.org/sites/kl/files/styles/kl_image_large/public/thumbnails/image/square_hero_desktop_2x_sfs_spaghetti_carbonara_clr-3.jpg?itok=T-rsBDIZ",
      "https://cdn-image.foodandwine.com/sites/default/files/HD-201104-r-spaghetti-with-anchovy.jpg"
    ],
    "time": 15,
    "ingredients": [
      [48, "50g"],
      [49, "100g"],
      [50, "350g"],
      [51, "2 gordinhos"],
      [42, "50g"],
      [16, "3"],
      [1, "2 colheres de chá"],
      [4, "2 colheres de sopa"]
    ],
    "description":
      "-- Em uma tigela grande, misture a gema, 1/2 colher de chá de sal e 1/4 colher de chá de pimenta. Junte o queijo parmesão e misture. Cozinhe o espaguete até ficar al dente em uma panela grande de água salgada fervente. Reserve 1/2 xícara da água do cozimento e escorra o restante do espaguete. Enquanto o espaguete cozinha, cozinhe o bacon em uma frigideira grande em fogo médio até que esteja crocante. Se houver muita gordura no fundo da panela, retire um pouco, mas deixe pelo menos 1 colher de sopa. Retire do fogo.\n\n -- Adicione o espaguete escorrido e a água do cozimento reservada à frigideira e misture bem. A temperatura do espaguete e da frigideira deve ser alta o suficiente para cozinhar levemente os ovos e formar um molho. Adicione a mistura de gema de ovo e misture bem para cobrir o espaguete, adicionando um pouco mais de água do cozimento se necessário. Sirva imediatamente, polvilhado com mais queijo parmesão e pimenta do reino a gosto."
  }
];

export const ingredients = [
  {
    "ingredientId": 0,
    "name": "Óleo",
    "photo_url": "https://ak7.picdn.net/shutterstock/videos/27252067/thumb/11.jpg"
  },
  {
    "ingredientId": 1,
    "name": "Sal",
    "photo_url": "https://image.freepik.com/free-photo/sea-salt-wooden-bowl-isolated-white-background_29402-416.jpg"
  },
  {
    "ingredientId": 2,
    "name": "Batatas russet",
    "photo_url": "http://www.valleyspuds.com/wp-content/uploads/Russet-Potatoes-cut.jpg"
  },
  {
    "ingredientId": 3,
    "name": "Páprica",
    "photo_url": "https://image.freepik.com/free-photo/red-chilli-pepper-powder-isolated-white-background_55610-28.jpg"
  },
  {
    "ingredientId": 4,
    "name": "Pimenta do Reino",
    "photo_url": "https://ak0.picdn.net/shutterstock/videos/26741680/thumb/1.jpg"
  },
  {
    "ingredientId": 5,
    "name": "Sal de aipo",
    "photo_url": "https://www.hasiroglugurme.com/images/urunler/Koftelik-Esmer-Bulgur-resim-297.jpg"
  },
  {
    "ingredientId": 6,
    "name": "Sálvia seca",
    "photo_url": "https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/Esxjvv7/super-slow-motion-dried-sage-falling-on-white-background_n1xg2gxzg__F0000.png"
  },
  {
    "ingredientId": 7,
    "name": "Alho em pó",
    "photo_url": "https://us.123rf.com/450wm/belchonock/belchonock1808/belchonock180818180/106007144-bowl-of-dry-garlic-powder-on-white-background.jpg?ver=6"
  },
  {
    "ingredientId": 8,
    "name": "Pimenta da Jamaica moída",
    "photo_url": "https://www.savoryspiceshop.com/content/mercury_modules/cart/items/2/6/9/2695/allspice-berries-jamaican-ground-1.jpg"
  },
  {
    "ingredientId": 9,
    "name": "Orégano seco",
    "photo_url": "https://frutascharito.es/886-large_default/oregano.jpg"
  },
  {
    "ingredientId": 10,
    "name": "Manjericão seco",
    "photo_url": "https://www.honeychop.com/wp-content/uploads/2015/09/Dried-Mint.png"
  },
  {
    "ingredientId": 11,
    "name": "Manjerona seca",
    "photo_url": "https://images-na.ssl-images-amazon.com/images/I/71YATIBqBYL._SX355_.jpg"
  },
  {
    "ingredientId": 12,
    "name": "Farinha de trigo",
    "photo_url": "https://images.assetsdelivery.com/compings_v2/seregam/seregam1309/seregam130900036.jpg"
  },
  {
    "ingredientId": 13,
    "name": "Açúcar mascavo",
    "photo_url": "https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/BALQTtekliuc6iu4u/rotating-brown-sugar-in-a-white-container-on-white-background_sis0xtbyl_thumbnail-full01.png"
  },
  {
    "ingredientId": 14,
    "name": "Sal kosher",
    "photo_url": "https://d1yn1kh78jj1rr.cloudfront.net/image/preview/r64-6MxPQjlatyfjp/storyblocks-top-view-of-ceramic-salt-cellar-with-coarse-grained-sea-salt-isolated-on-white-background_SPzKionPuV_SB_PM.jpg"
  },
  {
    "ingredientId": 15,
    "name": "Frango inteiro",
    "photo_url": "https://image.shutterstock.com/image-photo/two-raw-chicken-drumsticks-isolated-260nw-632125991.jpg"
  },
  {
    "ingredientId": 16,
    "name": "Ovos",
    "photo_url": "https://image.shutterstock.com/image-photo/egg-whites-yolk-cup-isolated-260nw-1072453787.jpg"
  },
  {
    "ingredientId": 17,
    "name": "Quartos de óleo neutro",
    "photo_url": "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_-_1200x900%2Fpublic%2Fgettyimages-464433694_0.jpg%3Fitok%3DK42YR2GV&w=400&c=sc&poi=face&q=85"
  },
  {
    "ingredientId": 18,
    "name": "Água",
    "photo_url": "https://ak1.picdn.net/shutterstock/videos/829561/thumb/11.jpg"
  },
  {
    "ingredientId": 19,
    "name": "Alho em pó",
    "photo_url": "https://image.shutterstock.com/image-photo/mixed-spices-isolated-on-white-260nw-662383828.jpg"
  },
  {
    "ingredientId": 20,
    "name": "MSG",
    "photo_url": "https://img.freepik.com/free-photo/monosodium-glutamate-wood-spoon-white-background_55883-399.jpg?size=626&ext=jpg"
  },
  {
    ingredientId: 21,
    name: 'Peito de Frango',
    photo_url:
      'https://us.123rf.com/450wm/utima/utima1602/utima160200063/53405187-raw-chicken-breast-fillets.jpg?ver=6'
  },
  {
    ingredientId: 22,
    name: 'Cebola picada',
    photo_url: 'https://s3.envato.com/files/246703499/IMG_1752_5.jpg'
  },
  {
    ingredientId: 23,
    name: 'Extrato de tomate',
    photo_url:
      'http://d3e1m60ptf1oym.cloudfront.net/45bab59a-363c-11e1-ab4e-bf4c2e0bb026/PANELA_xgaplus.jpg'
  },
  {
    ingredientId: 24,
    name: 'Pó de pimenta',
    photo_url:
      'https://us.123rf.com/450wm/nuttapong/nuttapong1505/nuttapong150500009/40458002-paprika-powder-isolated-on-white-background.jpg?ver=6'
  },
  {
    ingredientId: 25,
    name: 'Carne moída',
    photo_url:
      'https://images.radio.com/kmoxam/s3fs-public/styles/nts_image_cover_tall_775x425/public/dreamstime_s_39607998.jpg?XCM.w1UGOp9sVKkWGQZe7_JIsRddxoIK&itok=3M6KcFLH&c=73fb6497175b4c1a5c79e3ede816656a'
  },
  {
    ingredientId: 26,
    name: 'Feijão vermelho enlatado, enxaguado e escorrido',
    photo_url:
      'https://www.seriouseats.com/images/2014/04/20140414-pile-of-beans-primary-1500x1125.jpg'
  },
  {
    ingredientId: 27,
    name: 'Tortilhas grandes',
    photo_url: 'https://upload.wikimedia.org/wikipedia/commons/5/56/NCI_flour_tortillas.jpg'
  },
  {
    ingredientId: 28,
    name: 'Fritos',
    photo_url:
      'https://previews.123rf.com/images/ksena32/ksena321510/ksena32151000090/45863494-fried-fish-on-a-white-background.jpg'
  },
  {
    ingredientId: 29,
    name: 'Cheddar ralado',
    photo_url:
      'https://image.shutterstock.com/image-photo/top-view-small-bowl-filled-260nw-284460308.jpg'
  },
  {
    ingredientId: 30,
    name: 'Limão',
    photo_url: 'https://ak8.picdn.net/shutterstock/videos/23271748/thumb/1.jpg'
  },

  {
    ingredientId: 31,
    name: 'Cominho moído',
    photo_url:
      'https://image.shutterstock.com/image-photo/pile-cumin-powder-isolated-on-260nw-1193262853.jpg'
  },
  {
    ingredientId: 32,
    name: 'Pimenta caiena',
    photo_url: 'https://ak7.picdn.net/shutterstock/videos/11461337/thumb/1.jpg'
  },
  {
    ingredientId: 33,
    name: 'Peixe branco em flocos',
    photo_url:
      'https://image.shutterstock.com/image-photo/roach-river-fish-isolated-on-260nw-277764143.jpg'
  },
  {
    ingredientId: 34,
    name: 'Abacate',
    photo_url:
      'https://www.redwallpapers.com/public/redwallpapers-large-thumb/avocado-cut-stone-leaves-white-background-free-stock-photos-images-hd-wallpaper.jpg'
  },
  {
    ingredientId: 35,
    name: 'Flocos de pimenta vermelha',
    photo_url:
      'https://as1.ftcdn.net/jpg/02/06/55/10/500_F_206551074_mVczUrAWOSMaw8kR48FQDQBqDw47jCtL.jpg'
  },
  {
    ingredientId: 36,
    name: 'Cebolas',
    photo_url: 'http://www.allwhitebackground.com/images/2/2650.jpg'
  },
  {
    ingredientId: 37,
    name: 'Pimenta verde',
    photo_url: 'https://ak9.picdn.net/shutterstock/videos/4055509/thumb/1.jpg'
  },
  {
    ingredientId: 38,
    name: 'Pimenta vermelha',
    photo_url: 'https://ak9.picdn.net/shutterstock/videos/10314179/thumb/1.jpg'
  },
  {
    ingredientId: 39,
    name: 'Massa de pizza',
    photo_url:
      'https://image.shutterstock.com/image-photo/fresh-raw-dough-pizza-bread-260nw-518950903.jpg'
  },
  {
    ingredientId: 40,
    name: 'Molho de ketchup',
    photo_url:
      'https://st2.depositphotos.com/5262887/11050/i/950/depositphotos_110501208-stock-photo-ketchup-bowl-isolated-on-white.jpg'
  },
  {
    ingredientId: 41,
    name: 'Molho picante',
    photo_url:
      'https://media.istockphoto.com/photos/opened-can-of-spaghetti-sauce-on-a-white-background-picture-id497704752?k=6&m=497704752&s=612x612&w=0&h=JnL54buYu1Z3fGtd8uNdjFxiAKwlxoDluD6jbIfSaZI='
  },
  {
    ingredientId: 42,
    name: 'Manteiga',
    photo_url: 'https://redrockstoffee.com/media/2016/11/AdobeStock_76417550.jpeg'
  },
  {
    ingredientId: 43,
    name: 'Creme de leite',
    photo_url:
      'https://media.istockphoto.com/photos/mayonnaise-in-bowl-isolated-on-white-background-picture-id614981116?k=6&m=614981116&s=612x612&w=0&h=LtbsI2HQXOTERYuP9YJ2PJfRF3W6DcyZ798fxMcQWC0='
  },
  {
    ingredientId: 44,
    name: 'Iogurte natural integral',
    photo_url:
      'https://st.depositphotos.com/2757384/3317/i/950/depositphotos_33170129-stock-photo-pouring-a-glass-of-milk.jpg'
  },
  {
    ingredientId: 45,
    name: 'Queijo',
    photo_url: 'https://ak7.picdn.net/shutterstock/videos/3619997/thumb/1.jpg'
  },
  {
    ingredientId: 46,
    name: 'Mozzarella',
    photo_url:
      'https://t3.ftcdn.net/jpg/02/06/73/98/500_F_206739841_suPu6qDPHlowFqx9qo8fLqV8sNevL2g3.jpg'
  },
  {
    ingredientId: 47,
    name: 'Talos de aipo',
    photo_url:
      'https://cdn4.eyeem.com/thumb/6d1b3957c7caa9b73c3e0f820ef854b931808139-1538043742765/w/750'
  },
  {
    ingredientId: 48,
    name: 'Queijo Parmesão',
    photo_url: 'https://ak7.picdn.net/shutterstock/videos/3721877/thumb/1.jpg'
  },
  {
    ingredientId: 49,
    name: 'Pancetta',
    photo_url:
      'https://previews.123rf.com/images/onlyfabrizio/onlyfabrizio1606/onlyfabrizio160600002/60198502-raw-stripes-of-pancetta-stesa-on-a-white-background.jpg'
  },
  {
    ingredientId: 50,
    name: 'Espaguete',
    photo_url:
      'https://previews.123rf.com/images/mfron/mfron1204/mfron120400098/13306773-bunch-of-spaghetti-nudeln-isoliert-auf-wei%C3%9Fem-hintergrund.jpg'
  },
  {
    ingredientId: 51,
    name: 'Alho',
    photo_url: 'https://image.freepik.com/free-photo/fresh-garlic-white-background_1339-17012.jpg'
  },
  {
    ingredientId: 52,
    name: 'Massa para Lasanha',
    photo_url:
      'https://previews.123rf.com/images/velkol/velkol1110/velkol111000004/11083085-an-image-of-raw-lasagna-on-white-background.jpg'
  },
  {
    ingredientId: 53,
    name: 'Molho Italiano',
    photo_url:
      'https://previews.123rf.com/images/arinahabich/arinahabich1504/arinahabich150400858/38827029-raw-italian-sausage-on-a-white-background-.jpg'
  },
  {
    ingredientId: 54,
    name: 'Tomates Amassados',
    photo_url:
      'https://previews.123rf.com/images/merkulovnik/merkulovnik1406/merkulovnik140600100/28751626-crushed-tomato-isolated-on-white-background.jpg'
  },
  {
    ingredientId: 55,
    name: 'Açúcar',
    photo_url:
      'https://previews.123rf.com/images/sommai/sommai1411/sommai141100034/33199985-sugar-cubes-in-a-bowl-isolated-on-white-background.jpg'
  },
  {
    ingredientId: 56,
    name: 'Salsa Fresca Picada',
    photo_url:
      'https://t4.ftcdn.net/jpg/02/15/78/05/240_F_215780551_Eid0xpP1M2fokvuEcvJj8uqhROLJkb3p.jpg'
  },
  {
    ingredientId: 57,
    name: 'Queijo Ricota',
    photo_url:
      'https://previews.123rf.com/images/barkstudio/barkstudio1608/barkstudio160800351/61418602-ricotta-cheese-into-a-bowl-in-white-background.jpg'
  },
  {
    ingredientId: 58,
    name: 'Semente de Funcho',
    photo_url:
      'https://previews.123rf.com/images/pinkomelet/pinkomelet1710/pinkomelet171000227/88851299-close-up-the-fennel-seed-on-white-background.jpg'
  },
  {
    ingredientId: 59,
    name: 'Banana',
    photo_url:
      'https://www.conservationmagazine.org/wp-content/uploads/2013/04/sterile-banana.jpg'
  },
  {
    ingredientId: 60,
    name: 'Morango Congelado',
    photo_url:
      'https://www.cascadianfarm.com/wp-content/uploads/2018/12/Strawberries_Main_0218.png'
  },
  {
    ingredientId: 61,
    name: 'Iogurte',
    photo_url:
      'http://images.media-allrecipes.com/userphotos/960x960/3758635.jpg'
  },

