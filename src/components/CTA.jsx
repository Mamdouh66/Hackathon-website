import styles from "../style";
import Button from "./Button";

const CTA = () => (
  <section id="CTA" className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-[#A5A58D] rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Innovate with FastHacks NOW!</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      FastHacks is a unique opportunity
      for creative minds and tech
      enthusiasts.
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button />
    </div>
  </section>
);

export default CTA;