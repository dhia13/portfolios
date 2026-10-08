import styles from "./BouncyText.module.css";
const BouncyText = ({ text }) => {
  return (
    <div className={styles.waviy}>
      <span
        className={`${styles.span} font-bold text-2xl xl:2xl:lg:text-6xl md:text-5xl sm:text-4xl`}
      >
        {text}
      </span>
    </div>
  );
};

export default BouncyText;
