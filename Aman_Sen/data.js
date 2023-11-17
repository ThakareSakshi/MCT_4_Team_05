const products = [
  {
    color: "grey",
    image: "product1.jpg",

    title: "Bestor USB Hub Multiport Adapter for MacBook Pro Air M1...",

    rating: 4.5,

    flipkartAssured: true,

    price: 499.99,

    deliveryIn1Day: true,

    noCostEMI: true,

    specialPrice: 449.99,

    discountPrice: 50.0,

    popularity: 200,
  },

  {
    image: "product2.jpg",

    title: "Bestor 3 Port USB Hub High Speed Splitter Plug ,Data US...",

    rating: 4.2,

    flipkartAssured: false,

    price: 299.99,

    deliveryIn1Day: false,

    noCostEMI: true,

    specialPrice: 279.99,

    discountPrice: 20.0,
    popularity: 100,
    color: "black",
  },

  {
    image: "product3.jpg",

    title: "PHILIPS 6 in 1 USB DLK5526CG/11 USB Hub",

    rating: 3.9,

    flipkartAssured: true,

    price: 699.99,

    deliveryIn1Day: true,

    noCostEMI: false,

    specialPrice: 599.99,

    discountPrice: 100.0,
    popularity: 500,

    color: "grey",
  },

  {
    image: "product4.jpg",

    title: "Portronics Mport 4C USB 2.0 Hub with 4USB Ports POR-15",

    rating: 4.7,

    flipkartAssured: true,

    price: 199.99,

    deliveryIn1Day: false,

    noCostEMI: true,

    specialPrice: 179.99,

    discountPrice: 20.0,
    popularity: 900,

    color: "black",
  },

  {
    image: "product5.jpg",

    title: "Portronics Mport 31 USB Hub (4-in-1) Multiport Adapter",

    rating: 4.3,

    flipkartAssured: true,

    price: 899.99,

    deliveryIn1Day: true,

    noCostEMI: true,

    specialPrice: 849.99,

    discountPrice: 50.0,
    popularity: 10,
    color: "black",
  },

  {
    image: "product6.jpg",

    title: "ZEBRONICS 100HB High Speed ZEB-100HB USB Hub",

    rating: 4.0,

    flipkartAssured: false,

    price: 399.99,

    deliveryIn1Day: true,

    noCostEMI: false,

    specialPrice: 359.99,

    discountPrice: 40.0,

    popularity: 50,
    color: "black",
  },

  {
    image: "product7.jpg",

    title: "ZEBRONICS 4 Port ZEB-90HB USB Hub",

    rating: 4.8,

    flipkartAssured: true,

    price: 599.99,

    deliveryIn1Day: true,

    noCostEMI: true,

    specialPrice: 549.99,

    discountPrice: 50.0,
    popularity: 1000,
    color: "grey",
  },

  {
    image: "product8.jpg",

    title: "Bestor 7-in-1 USB-C Hub Multiport Adapter with HDMI, 10.",

    rating: 4.1,

    flipkartAssured: true,

    price: 349.99,

    deliveryIn1Day: false,

    noCostEMI: false,

    specialPrice: 329.99,

    discountPrice: 20.0,
    popularity: 2,
    color: "black",
  },

  {
    image: "product9.jpg",

    title: "Portronics MPORT 31C Type C to 4 USB-A Ports POR-1485 U...",

    rating: 3.8,

    flipkartAssured: true,

    price: 799.99,

    deliveryIn1Day: true,

    noCostEMI: true,

    specialPrice: 749.99,

    discountPrice: 50.0,
    popularity: 34634,
    color: "black",
  },

  {
    image: "product10.jpg",

    title: "Portronics Mport 4D MPORT4D, POR 1634 USB Hub",

    rating: 4.6,

    flipkartAssured: false,

    price: 249.99,

    deliveryIn1Day: false,

    noCostEMI: true,

    specialPrice: 229.99,

    discountPrice: 20.0,
    popularity: 9800,
    color: "grey",
  },

  {
    image: "product11.jpg",

    title: "Bestor USB C Hub Multiport Adapter for MacBook Pro Air 1",

    rating: 4.4,

    flipkartAssured: true,

    price: 599.99,

    deliveryIn1Day: true,

    noCostEMI: false,

    specialPrice: 579.99,

    discountPrice: 20.0,
    popularity: 201,
    color: "black",
  },

  {
    image: "product12.jpg",

    title: "Honeywell 4in1 Ultra Slim Multiport Type C Hub to 1xUSB..",

    rating: 4.9,

    flipkartAssured: true,

    price: 179.99,

    deliveryIn1Day: false,

    noCostEMI: true,

    specialPrice: 169.99,

    discountPrice: 10.0,
    popularity: 199,
    color: "grey",
  },

  {
    image: "product13.jpg",

    title: "TP-Link UH400 Portable 4-Port USB 3.0 Hub",

    rating: 4.2,

    flipkartAssured: true,

    price: 899.99,

    deliveryIn1Day: true,

    noCostEMI: true,

    specialPrice: 849.99,

    discountPrice: 50.0,
    popularity: 2300,
    color: "black",
  },

  {
    image: "product14.jpg",

    title: "AMKETTE 4 Port SuperSpeed 3.0 with charging function US...",

    rating: 4.3,

    flipkartAssured: false,

    price: 449.99,

    deliveryIn1Day: true,

    noCostEMI: false,

    specialPrice: 429.99,

    discountPrice: 20.0,
    popularity: 990,
    color: "black",
  },

  {
    image: "product15.jpg",

    title: "TP-Link 3.0 7-Port UH700 USB Hub",

    rating: 4.7,

    flipkartAssured: true,

    price: 299.99,

    deliveryIn1Day: false,

    noCostEMI: true,

    specialPrice: 269.99,

    discountPrice: 30.0,
    popularity: 1000,
    color: "black",
  },

  {
    image: "product16.jpg",

    title: "ZEBRONICS 4 in 1 USB Type C Multiport Adapter Zeb TA500...",

    rating: 4.0,

    flipkartAssured: true,

    price: 699.99,

    deliveryIn1Day: true,

    noCostEMI: true,

    specialPrice: 649.99,

    discountPrice: 50.0,
    popularity: 0,
    color: "grey",
  },

  {
    image: "product17.jpg",

    title: "Oneclickshopping Mini Portable USB Vacuum Cleaner OCS-0...",

    rating: 3.9,

    flipkartAssured: true,

    price: 549.99,

    deliveryIn1Day: true,

    noCostEMI: false,

    specialPrice: 499.99,

    discountPrice: 50.0,
    popularity: 240,
    color: "grey",
  },

  {
    image: "product18.jpg",

    title: "Cezo Charging Station Charging Station USB Charger",

    rating: 4.5,

    flipkartAssured: false,

    price: 499.99,

    deliveryIn1Day: true,

    noCostEMI: true,

    specialPrice: 469.99,

    discountPrice: 30.0,
    popularity: 560,
    color: "black",
  },

  {
    image: "product19.jpg",

    title: "Zoook Type c to USB 3.0 hub/4 port/1 USB 3.0 port/3 USB...",

    rating: 4.6,

    flipkartAssured: true,

    price: 349.99,

    deliveryIn1Day: true,

    noCostEMI: false,

    specialPrice: 329.99,

    discountPrice: 20.0,
    popularity: 299,
    color: "grey",
  },

  {
    image: "product20.jpg",

    title: "ZEBRONICS Zeb-150HB with 4 USB Ports and LED Indicator ...",

    rating: 3.8,

    flipkartAssured: true,

    price: 649.99,

    deliveryIn1Day: false,

    noCostEMI: true,

    specialPrice: 599.99,

    discountPrice: 50.0,
    popularity: 200,
    color: "grey",
  },
];
