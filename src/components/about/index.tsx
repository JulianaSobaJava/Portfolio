import styles from "./styles.module.scss";

const About = (): JSX.Element => {
  return (
    <div className={styles.about} id="about">
      <div className={styles.info}>
      <h1>About Me</h1>
      <p>
        Here you will find more information about me, what I do, and my current
        skills mostly in terms of programming and <span>technology</span> 
      </p>
      </div>
      <div className={styles.content}>
        <div className="left">
          <h2>Who Am I?</h2>
          <p>
            I&apos;m a Frontend Web Developer with a passion for creating beautiful
            and functional websites. I also like sharing content related to the
            stuff that I have learned over the years in Web Development so it
            can help other people of the Dev Community. Feel free to Connect or
            Follow me on my Linkedin where I post useful content related to Web
            Development and Programming I&apos;m open to Job opportunities where I
            can contribute, learn and grow. If you&apos;re looking for a web
            developer who is dedicated, skilled, and passionate about her work,
            look no further than Me. Contact today to learn more about my
            services and to discuss your project
          </p>
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
};

export default About;
