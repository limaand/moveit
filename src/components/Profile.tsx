import styles from "../styles/components/Profile.module.css";

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/limaand.png" alt="Anderson Lima"></img>
      <div>
        <strong>Anderson Lima</strong>
        <p>
          <img src="icons/level.svg"  alt="level"></img>
          Level 1
        </p>
      </div>
    </div>
  );
}
