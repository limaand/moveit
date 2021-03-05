import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/Profile.module.css";

export function Profile() {
  const { level } = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/limaand.png" alt="Anderson Lima"></img>
      <div>
        <strong>Anderson Lima</strong>
        <p>
          <img src="icons/level.svg" alt="level"></img>
          Level {level}
        </p>
      </div>
    </div>
  );
}
