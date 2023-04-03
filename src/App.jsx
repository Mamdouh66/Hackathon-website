import styles from "./style";

import {
  Navbar,
  Hero,
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
    <div className="bg-[#6B705C] w-full overflow-hidden">
      {/*This is the navbar section*/}
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      {/*This is the hero section*/}
      <div className={`bg-[#A5A58D] ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-[#B7B7A4] ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Business /> <Billing /> <CardDeal /> <Testimonials />{" "}
        </div>
      </div>
      <div className={`bg-[#26281E] ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Clients /> <CTA /> <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
