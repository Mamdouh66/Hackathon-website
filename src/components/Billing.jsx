import { moon, apple, bill, google, weirdElement} from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={weirdElement} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

      {/* gradient start */}
      {/* <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full blue__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" /> */}
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Goals of FastHacks
      </h2>
      <p className={`${styles.paragraph} max-w-[480px] mt-5 text-[20px]`}>
        <img src={moon} alt="moon" className="inline" /> Encourage innovation and creativity within the context of Ramadan <br/> <br/>
        <img src={moon} alt="moon" className="inline" /> Foster a collaborative and inclusive environment for
        participants of all backgrounds and skill levels <br/> <br/>
        <img src={moon} alt="moon" className="inline" /> Promote entrepreneurship and startup culture in the
Muslim community <br/> <br/>
        <img src={moon} alt="moon" className="inline" /> Develop solutions that address challenges or
        opportunities related to Ramadan and its observance
      </p>

    </div>
  </section>
);

export default Billing;