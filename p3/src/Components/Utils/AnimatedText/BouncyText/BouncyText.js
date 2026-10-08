import styles from "./BouncyText.module.css";
const BouncyText = ({ text }) => {
  return (
    <div className={styles.waviy}>
      <span className={`${styles.span}`}>{text}</span>
    </div>
  );
};

export default BouncyText;
