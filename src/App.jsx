import styles from "./style";

import {
  Navbar,
  Hero,
  Stats,
  Business,
  Billing,
  CardDeal,
  CTA,
  Clients,
  Testimonials,
  Footer,
} from "./components";
const App = () => {
  return (
    <div className="bg-[#F0EAD6] w-full overflow-hidden">
      {/*This is the navbar section*/}
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      {/*This is the hero section*/}
      <div className={`bg-[#F0EAD6] ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-[#F0EAD6] ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats /> <Business /> <Billing /> <CardDeal /> <Testimonials />{" "}
          <Clients /> <CTA /> <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
