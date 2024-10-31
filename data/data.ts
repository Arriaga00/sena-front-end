export interface AdditionalProduct {
  name: string;
  quantity: number;
  price: number;
}

export type Categories =
  | "Pizza"
  | "Taco"
  | "Hamburguesa"
  | "Sandwich"
  | "Bebida";
export interface Product {
  id: number;
  nombre: string;
  ingredientes: string[];
  precio: number;
  category: Categories;
  imagen: string;
  descripcion: string;
  adiccion?: AdditionalProduct[];
}

export interface Category {
  id: number;
  nombre: string;
  icon: string;
}

export const CategoryMenu: Category[] = [
  {
    id: 1,
    nombre: "Pizza",
    icon: "https://img.icons8.com/ios/50/salami-pizza.png",
  },
  {
    id: 2,
    nombre: "Hamburguesa",
    icon: "https://img.icons8.com/ios/50/hamburger.png",
  },
  {
    id: 3,
    nombre: "Taco",
    icon: "https://img.icons8.com/ios/50/taco.png",
  },
  {
    id: 4,
    nombre: "Sandwich",
    icon: "https://img.icons8.com/ios/50/sandwich.png",
  },
  {
    id: 5,
    nombre: "Bebida",
    icon: "https://img.icons8.com/windows/32/martini-glass.png",
  },
];

export const pizzas: Product[] = [
  {
    id: 1,
    nombre: "Margarita",
    ingredientes: ["Salsa de tomate", "Mozzarella", "Albahaca fresca"],
    precio: 22500,
    category: "Pizza",
    imagen:
      "https://mandolina.co/wp-content/uploads/2023/10/pizza-margarita-1080x550-1-1200x900.jpg",
    descripcion:
      "La Pizza Margarita es un clásico atemporal que destaca por su simplicidad y frescura. Preparada con una base de salsa de tomate jugosa, cubierta con mozzarella derretida y adornada con hojas de albahaca fresca, cada bocado es un viaje a Italia. Su masa crujiente y aireada, combinada con el sabor vibrante de los ingredientes frescos, hace que esta pizza sea perfecta para cualquier ocasión.",
  },
  {
    id: 2,
    nombre: "Pepperoni",
    ingredientes: ["Salsa de tomate", "Mozzarella", "Pepperoni"],
    precio: 20000,
    category: "Pizza",

    imagen:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOsYDLi9PxxmoULADBIoFcsiujNAwlDhANnw&s",
    descripcion:
      "La Pizza Pepperoni es un favorito indiscutible entre los amantes de la pizza. Con su deliciosa salsa de tomate y una generosa capa de mozzarella, esta pizza se corona con rodajas de pepperoni que se vuelven crujientes en el horno, liberando su sabor picante y ahumado. Cada rebanada es una explosión de sabor que te hará querer más.",
  },
  {
    id: 3,
    nombre: "Vegetariana",
    ingredientes: [
      "Salsa de tomate",
      "Mozzarella",
      "Pimientos",
      "Champiñones",
      "Cebolla",
      "Aceitunas",
    ],

    category: "Pizza",
    precio: 25000,
    imagen:
      "https://yayaya.com.ec/wp-content/uploads/2021/07/pizza-vegetariana.jpg",
    descripcion:
      "La Pizza Vegetariana es un festín para los sentidos, repleta de colores y sabores frescos. Con una base de salsa de tomate vibrante y mozzarella fundida, esta pizza está adornada con pimientos crujientes, champiñones terrosos, cebolla dulce y aceitunas saladas. Es una opción deliciosa y saludable que satisface incluso a los más exigentes.",
  },
  {
    id: 4,
    nombre: "Hawaiana",
    ingredientes: ["Salsa de tomate", "Mozzarella", "Jamón", "Piña"],
    precio: 25000,
    category: "Pizza",

    imagen:
      "https://media-cdn.tripadvisor.com/media/photo-s/1a/be/44/de/pizza-hawaiana-pina-jamon.jpg",
    descripcion:
      "La Pizza Hawaiana combina lo mejor de dos mundos: el salado del jamón y el dulce de la piña. Con su rica salsa de tomate y mozzarella fundida, cada bocado ofrece un contraste perfecto entre sabores que te transporta a una isla tropical. Esta pizza es ideal para quienes buscan algo diferente y refrescante.",
  },
  {
    id: 5,
    nombre: "Cuatro Quesos",
    ingredientes: [
      "Salsa de tomate",
      "Mozzarella",
      "Gorgonzola",
      "Parmesano",
      "Provolone",
    ],
    category: "Pizza",

    precio: 23999,
    imagen: "https://assets.unileversolutions.com/recipes-v2/216503.jpg",
    descripcion:
      "La Pizza Cuatro Quesos es un verdadero deleite para los amantes del queso. Con una base cremosa de salsa de tomate y una mezcla irresistible de mozzarella, gorgonzola, parmesano y provolone, cada rebanada es rica y satisfactoria. Su textura suave y su sabor intenso hacen que esta pizza sea un lujo en cada bocado.",
  },
  {
    id: 6,
    nombre: "Pollo y Barbacoa",
    ingredientes: [
      "Salsa barbacoa",
      "Mozzarella",
      "Pollo",
      "Cebolla",
      "Cilantro",
    ],
    category: "Pizza",

    precio: 25000,
    imagen:
      "https://prodmelt.s3.us-east-2.amazonaws.com/pizza/jjt97ACQf3CXom8kW/1.webp",
    descripcion:
      "La Pizza Pollo y Barbacoa es una combinación perfecta para quienes aman los sabores ahumados. Con su salsa barbacoa dulce y picante como base, se cubre con tiernos trozos de pollo, mozzarella derretida, cebolla caramelizada y un toque fresco de cilantro. Este plato ofrece un sabor robusto que te hará volver por más.",
  },
  {
    id: 7,
    nombre: "Suprema",
    ingredientes: [
      "Salsa de tomate",
      "Mozzarella",
      "Pepperoni",
      "Salchicha",
      "Pimientos",
      "Cebolla",
    ],
    category: "Pizza",
    precio: 20000,

    imagen:
      "https://telediario.tv/wp-content/uploads/2022/10/PIZZAS-SUPREMA.jpg",
    descripcion:
      "La Pizza Suprema es la elección definitiva para los amantes de la carne. Con una base jugosa de salsa de tomate y mozzarella derretida, esta pizza está cargada con pepperoni picante, salchicha sabrosa, pimientos frescos y cebolla dulce. Cada bocado está lleno de sabor intenso y texturas variadas que la convierten en una experiencia culinaria inigualable.",
  },
];

export const hamburguesas: Product[] = [
  {
    id: 1,
    nombre: "Hamburguesa Clásica",
    ingredientes: [
      "Carne de res",
      "Queso cheddar",
      "Lechuga",
      "Tomate",
      "Cebolla",
      "Salsa ketchup",
    ],

    category: "Hamburguesa",
    precio: 15000,
    imagen: "https://elantojo.co/wp-content/uploads/2023/11/clasica.png",
    descripcion:
      "La Hamburguesa Clásica es un ícono de la comida rápida. Con una jugosa carne de res a la parrilla, cubierta con queso cheddar derretido y acompañada de frescas verduras, es perfecta para cualquier ocasión. Su combinación de sabores y texturas hace que cada bocado sea una experiencia deliciosa.",
  },
  {
    id: 2,
    nombre: "Hamburguesa BBQ",
    ingredientes: [
      "Carne de res",
      "Queso gouda",
      "Cebolla caramelizada",
      "Salsa barbacoa",
    ],

    category: "Hamburguesa",
    precio: 18000,
    imagen:
      "https://www.recetasnestlecam.com/sites/default/files/srh_recipes/74e1a2dfe688f08eedf86a3711c8e4fb.png",
    descripcion:
      "La Hamburguesa BBQ es ideal para los amantes de los sabores ahumados. La carne se cocina a la perfección y se complementa con queso gouda y cebolla caramelizada, todo bañado en una deliciosa salsa barbacoa que realza su sabor.",
  },
  {
    id: 3,
    nombre: "Hamburguesa Vegetariana",
    ingredientes: [
      "Hamburguesa de garbanzos",
      "Aguacate",
      "Lechuga",
      "Tomate",
      "Salsa de yogur",
    ],

    category: "Hamburguesa",
    precio: 16000,
    imagen:
      "https://img2.rtve.es/imagenes/receta-hamburguesa-vegetariana/1625253901763.jpg",
    descripcion:
      "La Hamburguesa Vegetariana es una opción deliciosa y saludable. Hecha con una hamburguesa de garbanzos, se sirve con aguacate cremoso y frescas verduras, todo aderezado con una ligera salsa de yogur que aporta frescura.",
  },
  {
    id: 4,
    nombre: "Hamburguesa Picante",
    ingredientes: [
      "Carne de res",
      "Jalapeños",
      "Queso pepper jack",
      "Salsa picante",
    ],

    category: "Hamburguesa",
    precio: 19000,
    imagen:
      "https://vidapicante.com/wp-content/uploads/2023/09/receta-hamburguesa-chipotle.jpg",
    descripcion:
      "La Hamburguesa Picante es para quienes disfrutan del calor en sus comidas. Con jalapeños frescos y queso pepper jack, esta hamburguesa está diseñada para ofrecer un golpe de sabor intenso, complementado con una salsa picante que hará vibrar tus papilas gustativas.",
  },
  {
    id: 5,
    nombre: "Hamburguesa Hawaiana",
    ingredientes: [
      "Carne de res",
      "Piña a la parrilla",
      "Jamón",
      "Queso suizo",
    ],

    category: "Hamburguesa",
    precio: 20000,
    imagen:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7hLeuTT-p_YwF80HtUwJZz8140OrltRZ69g&s",
    descripcion:
      "La Hamburguesa Hawaiana combina lo dulce y lo salado. Con una jugosa carne, piña a la parrilla, jamón y queso suizo, cada bocado es un viaje a la playa, perfecto para quienes buscan algo diferente.",
  },
  {
    id: 6,
    nombre: "Hamburguesa Deluxe",
    ingredientes: [
      "Carne de res doble",
      "Queso cheddar",
      "Bacon crujiente",
      "Cebolla frita",
    ],
    category: "Hamburguesa",
    precio: 22000,

    imagen:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtitsrz-F0QO9sPJozmF4Yg0Y57EdajndnEg&s",
    descripcion:
      "La Hamburguesa Deluxe es el sueño hecho realidad para los amantes de la carne. Con dos jugosas porciones de carne, queso cheddar derretido, bacon crujiente y cebolla frita, esta hamburguesa es pura indulgencia.",
  },
  {
    id: 7,
    nombre: "Hamburguesa Mediterránea",
    ingredientes: [
      "Carne de cordero",
      "Feta desmenuzado",
      "Aceitunas negras",
      "Tzatziki",
    ],

    category: "Hamburguesa",
    precio: 21000,
    imagen: "https://www.hazteveg.com/img/recipes/full/201905/R30-88051.jpg",
    descripcion:
      "La Hamburguesa Mediterránea ofrece un giro único con carne de cordero sazonada, feta desmenuzado y aceitunas negras. Servida con tzatziki fresco, esta hamburguesa transportará tus sentidos a las costas del Mediterráneo.",
  },
];

export const tacos: Product[] = [
  {
    id: 1,
    nombre: "Taco al Pastor",
    ingredientes: [
      "Carne de cerdo",
      "Piña",
      "Cebolla",
      "Cilantro",
      "Salsa roja",
    ],

    category: "Taco",
    precio: 12000,
    imagen:
      "https://iamafoodblog.b-cdn.net/wp-content/uploads/2021/05/al-pastor-3507w.jpg",
    descripcion:
      "El Taco al Pastor es una delicia mexicana que combina carne de cerdo marinada, piña fresca, cebolla y cilantro, todo envuelto en una tortilla de maíz. Su sabor ahumado y dulce lo convierte en un favorito entre los amantes de la comida mexicana.",
  },
  {
    id: 2,
    nombre: "Taco de Pescado",
    ingredientes: ["Pescado empanizado", "Col morada", "Salsa de aguacate"],
    precio: 14000,
    category: "Taco",

    imagen:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4a-Vr9_hKTk69mok74ZnoVJpnh70AV4Dwxw&s",
    descripcion:
      "El Taco de Pescado es una opción fresca y ligera. Con pescado empanizado crujiente, col morada y una suave salsa de aguacate, cada bocado es una explosión de sabores del mar.",
  },
  {
    id: 3,
    nombre: "Taco Vegano",
    ingredientes: [
      "Frijoles negros",
      "Aguacate",
      "Tomate",
      "Cebolla",
      "Cilantro",
    ],

    category: "Taco",
    precio: 11000,
    imagen:
      "https://healthysimpleyum.com/wp-content/uploads/2021/07/IMG_5042-1024x897.jpg",
    descripcion:
      "El Taco Vegano es una opción saludable y deliciosa. Hecho con frijoles negros, aguacate fresco, tomate y cebolla, es perfecto para quienes buscan disfrutar de la comida mexicana sin carne.",
  },
  {
    id: 4,
    nombre: "Taco de Carnitas",
    ingredientes: ["Carne de cerdo", "Cebolla", "Cilantro", "Lima"],
    precio: 13000,

    category: "Taco",
    imagen: "https://www.goya.com/media/3193/carnitas.jpg?quality=80",
    descripcion:
      "El Taco de Carnitas es un clásico mexicano. Con carne de cerdo tierna y jugosa, acompañada de cebolla y cilantro fresco, cada bocado es pura felicidad.",
  },
  {
    id: 5,
    nombre: "Taco de Barbacoa",
    ingredientes: ["Carne de res", "Cebolla", "Cilantro", "Salsa verde"],
    precio: 14000,
    category: "Taco",

    imagen:
      "https://theurbenlife.com/wp-content/uploads/2023/04/homemade-chipotle-barbacoa-tacos.jpg",
    descripcion:
      "El Taco de Barbacoa es ideal para los amantes de la carne. Con carne de res cocida a fuego lento, cebolla y cilantro, todo bañado en salsa verde, es un plato lleno de sabor.",
  },
  {
    id: 6,
    nombre: "Taco de Chicharrón Prensado",
    ingredientes: ["Chicharrón prensado", "Cebolla", "Cilantro", "Salsa roja"],
    precio: 12000,

    category: "Taco",
    imagen:
      "https://mojo.generalmills.com/api/public/content/8vqkXKYMEEegYk2VA6I4VQ_gmi_hi_res_jpeg.jpeg?v=81ff2817&t=16e3ce250f244648bef28c5949fb99ff",
    descripcion:
      "El Taco de Chicharrón Prensado es una opción deliciosa y crujiente. Con chicharrón prensado, cebolla y cilantro fresco, cada bocado ofrece una experiencia única.",
  },
];

export const sandwiches: Product[] = [
  {
    id: 1,
    nombre: "Sándwich Club",
    ingredientes: [
      "Pan tostado",
      "Pechuga de pollo",
      "Bacon",
      "Lechuga",
      "Tomate",
      "Mayonesa",
    ],
    precio: 18000,

    category: "Sandwich",
    imagen: "https://i.ytimg.com/vi/9Jm4M9qhFT0/maxresdefault.jpg",
    descripcion:
      "El Sándwich Club es un clásico que nunca pasa de moda. Con capas de pechuga de pollo, bacon crujiente, lechuga fresca y tomate jugoso, todo aderezado con mayonesa, es un plato abundante y satisfactorio.",
  },
  {
    id: 2,
    nombre: "Sándwich Caprese",
    ingredientes: [
      "Pan ciabatta",
      "Mozzarella fresca",
      "Tomate",
      "Albahaca",
      "Aceite de oliva",
    ],
    category: "Sandwich",

    precio: 16000,
    imagen:
      "https://images.cookforyourlife.org/wp-content/uploads/2018/08/Grilled-Cheese-Caprese.jpg",
    descripcion:
      "El Sándwich Caprese es una opción ligera y sabrosa. Con mozzarella fresca, tomate maduro y albahaca, todo rociado con aceite de oliva, este sándwich es un festín para los sentidos.",
  },
  {
    id: 3,
    nombre: "Sándwich Vegetariano",
    ingredientes: [
      "Pan integral",
      "Hummus",
      "Pepino",
      "Zanahoria rallada",
      "Lechuga",
    ],

    category: "Sandwich",
    precio: 15000,
    imagen:
      "https://storage.googleapis.com/avena-recipes/2019/10/1571779824382.jpeg",
    descripcion:
      "El Sándwich Vegetariano está lleno de frescura. Hecho con hummus cremoso, pepino crujiente, zanahoria rallada y lechuga fresca, es una opción saludable que no sacrifica el sabor.",
  },
  {
    id: 4,
    nombre: "Sándwich de Pollo a la Parrilla",
    ingredientes: [
      "Pan ciabatta",
      "Pechuga a la parrilla",
      "Lechuga",
      "Tomate",
      "Mayonesa",
    ],

    precio: 17000,
    category: "Sandwich",
    imagen:
      "https://www.recetasnestle.com.ec/sites/default/files/srh_recipes/0e6d2f1d32c02301139758e2f35d3b18.jpg",
    descripcion:
      "El Sándwich de Pollo a la Parrilla es jugoso y lleno de sabor. Con pechuga a la parrilla, lechuga fresca y tomate jugoso en pan ciabatta tostado, es perfecto para cualquier momento del día.",
  },
  {
    id: 5,
    nombre: "Sándwich Reuben",
    ingredientes: [
      "Pan centeno",
      "Carne en conserva",
      "Queso suizo",
      "Repollo",
      "Salsa rusa",
    ],

    category: "Sandwich",
    precio: 18000,
    imagen:
      "https://www.allrecipes.com/thmb/G-xhxjG51mXIRWMpr-VQ6WdEUoo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/47717-reuben-sandwich-ii-mike-phillips-b77c676e6aaf45e280d34e0c668d8f2f.jpeg",
    descripcion:
      "El Sándwich Reuben es un clásico americano. Con carne en conserva salada, queso suizo derretido y repollo crujiente en pan centeno tostado, cada bocado es una explosión de sabor.",
  },
  {
    id: 6,
    nombre: "Sándwich BLT",
    ingredientes: ["Pan tostado", "Bacon", "Lechuga", "Tomate", "Mayonesa"],
    precio: 16000,
    category: "Sandwich",

    imagen:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQao-d9xU7aeavyhYTsertTcORp8kavSzz-aw&s",
    descripcion:
      "El Sándwich BLT combina bacon crujiente con lechuga fresca y tomate jugoso en pan tostado. Es simple pero delicioso.",
  },
];

export const bebidas: Product[] = [
  {
    id: 1,
    nombre: "Limonada Clásica",
    ingredientes: ["Limón fresco", "Agua", "Azúcar"],
    precio: 5000,
    category: "Bebida",
    imagen:
      "https://www.clubchefman.com/upload/recipe-images/limonada_clasica-1-1000x600.jpg",
    descripcion:
      "La Limonada Clásica es refrescante y perfecta para cualquier día caluroso. Hecha con limones frescos y un toque de azúcar, es la bebida ideal para acompañar tus comidas.",
  },
  {
    id: 2,
    nombre: "Té Helado",
    ingredientes: ["Té negro", "Limón", "Azúcar"],
    precio: 6000,
    category: "Bebida",
    imagen:
      "https://t1.uc.ltmcdn.com/es/posts/5/8/3/como_preparar_te_helado_15385_orig.jpg",
    descripcion:
      "El Té Helado es una bebida refrescante que combina té negro con limón y un toque de azúcar. Perfecto para disfrutar en cualquier momento del día.",
  },
  {
    id: 3,
    nombre: "Batido de Fresa",
    ingredientes: ["Fresas frescas", "Leche", "Azúcar"],
    precio: 8000,
    category: "Bebida",
    imagen:
      "https://enrilemoine.com/wp-content/uploads/2014/09/Batido-de-fresas-y-avena-SAVOIR-FAIRE-by-enrilemoine-scaled.webp",
    descripcion:
      "El Batido de Fresa es cremoso y delicioso. Hecho con fresas frescas y leche, este batido es un placer indulgente que satisface tu antojo por algo dulce.",
  },
  {
    id: 4,
    nombre: "Agua Fresca de Jamaica",
    ingredientes: ["Flor de jamaica", "Agua", "Azúcar"],
    precio: 7000,
    category: "Bebida",
    imagen:
      "https://lomaculinaria.com/wp-content/uploads/2022/10/Agua-de-jamaica-08-500x500.jpg",
    descripcion:
      "El Agua Fresca de Jamaica es refrescante y ligeramente ácida. Hecha con flores secas de jamaica, agua y azúcar.",
  },
  {
    id: 5,
    nombre: "Smoothie Tropical",
    ingredientes: ["Mango", "Piña", "Leche", "Yogur"],
    precio: 9000,
    category: "Bebida",
    imagen:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHNeWu03yRAGtQe_TsG1mIrHI9w4BjONwduw&s",
    descripcion:
      "El Smoothie Tropical combina mango dulce y piña jugosa con leche y yogur para un sabor refrescante.",
  },
  {
    id: 6,
    nombre: "Cerveza Artesanal",
    ingredientes: ["Malta", "Lúpulo", "Agua", "Levadura"],
    precio: 12000,
    category: "Bebida",
    imagen:
      "https://www.portafolio.co/files/article_new_multimedia/uploads/2016/02/05/56b54b7ade9ae.jpeg",
    descripcion:
      "La Cerveza Artesanal ofrece un sabor único gracias a su proceso elaborado. Ideal para acompañar tus comidas.",
  },
];
