import styles from "./GlowingText.module.css";
const MovingBgText = ({ text, style }) => {
  return (
    <div className={styles.wrapper}>
      <h1 className={style}>{text}</h1>
    </div>
  );
};
export default MovingBgText;
