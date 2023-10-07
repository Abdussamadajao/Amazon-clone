import styles from '../styles/Home.module.css';
import Product from './Product';

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.container}>
        <img src='/BleedingHero.jpg' alt='' className={styles.image} />
      </div>
      <h2 className={styles.title}>Top Sellers</h2>
      <div className={styles.home__row}>
        <Product
          id='492181094'
          title='The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback'
          image='/startup.jpg'
          price={11.96}
          rating={5}
        />
        <Product
          id='177267341'
          title='Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl'
          image='/mixer.jpg'
          price={239}
          rating={4}
        />
        <Product
          id='12321341'
          title='Fjallraven - Kanken Classic Backpack for Everyday'
          image='/bag.jpg'
          price={239}
          rating={4}
        />
      </div>
      <div className={styles.home__row}>
        <Product
          id='90363332'
          title="Samsung LC49RG90SSUXEN '49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
          image='/tv.jpg'
          price={1094.98}
          rating={4}
        />
         <Product
          id='23445930'
          title='Amazon Echo (3rd generation)'
          image='/speaker.jpg'
          price={98.99}
          rating={5}
        />
      <Product
          id='9037374332'
          title="Innovative Technology VSC-550BT-TQ Victrola Vintage"
          image='/MU.jpg'
          price={399.98}
          rating={4}
        />        
      </div>
      <div className={styles.home__row}>
      <Product
          id='903454332'
          title="Mi Earphone Basic with Ultra deep bass and mic (Black)"
          image='/ear.jpg'
          price={399}
          rating={4}
        /> 
      <Product
          id='911212332'
          title="Kasa Smart Light Switch by TP-Link"
          image='/HH.jpg'
          price={19.98}
          rating={4}
        /> 
      <Product
          id='907776776332'
          title="React.js Essentials Paperback – Import, 27 August 2015"
          image='/book.jpg'
          price={1490}
          rating={4}
        /> 
      </div>
      <h2 className={styles.title}> Computers and Accessories </h2>
      <div className={styles.home__row}>
      <Product
          id='90666332'
          title="Smartphone Xiaomi Redmi Note 8 64gb Moonlight (White)"
          image='/Xio.jpg'
          price={1094.98}
          rating={4}
        />
        <Product
          id='9088532'
          title="iPhone XR Apple Black"
          image='/Iphone.jpg'
          price={1094.98}
          rating={4}
        />
        <Product
          id='3254354345'
          title='New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)'
          image='/ipad.jpg'
          price={598.99}
          rating={4}
        />
      </div>
      <div className={styles.home__row}>
        <Product
          id='90829332'
          title="Xiaomi Amazfit Bip A1608 Original Band"
          image='/Xp.jpg'
          price={1094.98}
          rating={4}
        />
          <Product
          id='4903850'
          title='Samsung LC49RG90SSUXEN (49)'
          image='/watch.jpg'
          price={199.99}
          rating={3}
        />
        <Product
          id='90829332'
          title="Acer Aspire 5 Slim Laptop"
          image='/laptop.jpg'
          price={1094.98}
          rating={4}
        />
      </div>
      <h2 className={styles.title}> Video Games </h2>
      <div className={styles.home__row}>
        <Product
          id='90669332'
          title="SONY PLAYSTATON Ps4 FIFA21- Playstation Fifa 21"
          image='/ffi.jpg'
          price={1800}
          rating={5}
        />
        <Product
          id='90828876632'
          title="SONY PLAYSTATON PLAY STATION 5"
          image='/ps5-d.jpg'
          price={2000}
          rating={4}
        />
          <Product
          id='49883850'
          title='DualShock 4 Wireless Controller for PlayStation 4 - Magma Red'
          image='/control.jpg'
          price={199.99}
          rating={3}
        />
        </div>
      <div className={styles.home__row}>
        <Product
          id='908777777'
          title="Konami PES 2021 - Pro Evolution Soccer- PS4 PES21"
          image='/pes.jpg'
          price={14.98}
          rating={5}
        />
        <Product
          id='908298798'
          title="Nintendo eShop Gift Card [Digital Code]"
          image='/mario.jpg'
          price={20}
          rating={4}
        />
          <Product
          id='497888787'
          title='Sony PS4 1TB Slim Console + 2 Wireless Pad'
          image='/ps4-d.jpg'
          price={1000}
          rating={3}
        />
        </div>
      <div className={styles.home__row}>
        <Product
          id='90888888'
          title="Naughty Dog Playstation 4 The Last Of Us Part 2 PS4 Game"
          image='/part.jpg'
          price={1094.98}
          rating={4}
        />
        <Product
          id='88444666'
          title="Xbox One S 1TB  Console"
          image='/xb.jpg'
          price={3000.98}
          rating={5}
        />
          <Product
          id='556498944'
          title='X7 Game Console Handheld Video Games For Kids Adults Large Screen Portable Video Games Console With Built In Games Handheld Video Games (red, ABS, Boxed)'
          image='/psp.jpg'
          price={100.99}
          rating={4}
        />
      </div>
      <h2 className={styles.title}>Clothes</h2>
      <div className={styles.home__row}>
        <Product
          id='9048492'
          title="Outdoor Sunshade Sleeves Ice Silk Sunscreen Cuff- Black"
          image='/arm.jpg'
          price={40.98}
          rating={4}
        />
        <Product
          id='09878776'
          title="Jones Wears Black Utility Combat Short Black"
          image='/short.jpg'
          price={30.98}
          rating={5}
        />
          <Product
          id='484846850'
          title='Chrysolite Designs My Africa Print TShirt - NavyBlue'
          image='/africa.jpg'
          price={200.99}
          rating={3}
        />
      </div>
      <div className={styles.home__row}>
        <Product
          id='908293'
          title="Jones Wears Drew Printed Hoodie (BLACK)"
          image='/hd.jpg'
          price={20.98}
          rating={4}
        />
        <Product
          id='9032'
          title="Four In One Corporate Bundle Shirts For Men"
          image='/shirt.jpg'
          price={70.98}
          rating={5}
        />
          <Product
          id='4850'
          title="4 In1 Quality Men's Plain T-Shirts"
          image='/polo.jpg'
          price={40.99}
          rating={3}
        />
      </div>
    </div>
  );
};

export default Home;
