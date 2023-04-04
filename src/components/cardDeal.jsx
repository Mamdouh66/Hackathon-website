import { card, moon, weirdElement} from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={`${layout.sectionInfo} sm:ml-[200px] ml-0`}>
      <h2 className={styles.heading2}>
        Challenge Details
      </h2>
      <p className={`${styles.paragraph} max-w-[480px] text-[20px]`}>
        <img src={moon} alt="moon" className="inline" /> Difficulty Level: Beginner/intermediate <br/> <br/>
        <img src={moon} alt="moon" className="inline" /> Constraints: Must use React or Flutter Framework <br/> <br/>
        <img src={moon} alt="moon" className="inline" /> Resources: Access to workshops and industry specialists <br/> <br/>
        <img src={moon} alt="moon" className="inline" /> Judged on: Working prototype (no need for a backend), idea, UI/UX,
creativity, innovation, impact, feasibility, and marketability.
      </p>
    </div>

    <div className={`flex-1 flex ${styles.flexCenter} md:ml-10 mr-10 md:mt-0 mt-10 relative`}>
      <img src={weirdElement} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;