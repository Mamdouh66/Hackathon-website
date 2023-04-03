import styles, { layout } from "../style";
import Button from "./Button";
import { DarkCard } from "../assets";

const Business = () =>  (
  <section id="features" className={layout.section}>

    <div className={`${layout.sectionImg}`}>
      <img src={DarkCard} alt="Logo mark" className="w-[100%]"/>
    </div> 

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        About FastHacks
      </h2>
      <p className={`${styles.paragraph} max-w-[450px] mt-5`}>
      FastHacks (Fast meaning to fast, and Hacks from
      "hackathon") aims to encourage participants to think outside
      the box and produce innovative ideas that can make a real
      difference in people's lives during Ramadan and after the holy
      month has finished.
      </p>
    </div>

  </section>
);

export default Business;