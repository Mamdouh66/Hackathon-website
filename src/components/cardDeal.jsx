import { card, moon} from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Challenge Details
      </h2>
      <p className={`${styles.paragraph} max-w-[480px] mt-5 text-[20px]`}>
        <img src={moon} alt="moon" className="inline" /> Difficulty Level: Beginner/intermediate <br/> <br/>
        <img src={moon} alt="moon" className="inline" /> Constraints: Must use React or Flutter Framework <br/> <br/>
        <img src={moon} alt="moon" className="inline" /> Resources: Access to workshops and industry specialists <br/> <br/>
        <img src={moon} alt="moon" className="inline" /> Judged on: Working prototype (no need for a backend), idea, UI/UX,
creativity, innovation, impact, feasibility, and marketability.
      </p>
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;