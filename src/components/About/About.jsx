import styles from "./About.module.css";
import cn from "classnames";
import Title2 from "../Title2/Title2";

const About = () => {
  return (
    <div className={styles.about} id="about">
      <Title2 className={styles.title} text="Генератор Казок" />
      <div className={styles.wrapper}>
        <div className={cn(styles.decorationTop, styles.decoration)}></div>
        <p className={styles.text}>
          Брати Грім для вас надто жорстокі? Чи ви втомилися від геніальних
          Андерсена та Гессе? А може вам просто хочеться відчути себе
          найкрутішими батьками і прочитати для дітей казку, що наче була
          написана особисто для них? Не гайте часу, переходьте до короткої
          інструкції чи одразу пірнайте у вирій. На вас чекають пригоди!
        </p>
        <div className={cn(styles.imgTop, styles.img)}></div>
      </div>
      <div className={styles.wrapper}>
        <div className={cn(styles.img, styles.imgBottom)}></div>
        <div className={cn(styles.decorationBottom, styles.decoration)}></div>
        <p className={styles.text}>
          Тут можна створити оригінальну казку і при цьому не треба нічого
          писати. Хто б з нас у віці п'яти років відмовився послухати, як герой,
          якого ми обрали, названий на нашу честь, іде вказаним нами шляхом і
          досягає своєї мети? Подаруйте своїй дитині віру в казку, над якою вона
          теж має владу.
        </p>
      </div>
    </div>
  );
};

export default About;
