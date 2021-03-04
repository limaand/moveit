import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/ChallengeBox.module.css";

export function ChallengeBox() {
  
  
  const {activeChallenge} = useContext(ChallengesContext)
    
  //const hasActiveChallenge = true;
  
  

  return (
    <div className={styles.challengeBoxContainer}>
      {activeChallenge ? (
        <div className={styles.challengeActive}>
          <header>Ganhe 480 xp</header>
          <main>
            <img src="icons/body.svg" />
            <strong>Novo desafio</strong>
            <p>levante e faça uma caminha de 3 min</p>
          </main>
          <footer>
            <button type="button" className={styles.challengeFailedButton}>
              Falhei
            </button>
            <button type="button" className={styles.challengeSucceededButton}>
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengeNotActive}>
          <strong>Finalize um ciclo para receber desafios.</strong>
          <p>
            <img src="icons/level-up.svg" alt="Level Up" />
            Avance de level completando desafios.
          </p>
        </div>
      )}
    </div>
  );
}
