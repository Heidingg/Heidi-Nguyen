import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import AnimationPage from '../components/AnimationPage';
import ProjectGallery from "../components/ProjectGallery";
export default function Home() {
  return (
    <>
      <Head>
        <title>Heidi Nguyen</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/HDLG.svg" />
      </Head>
      <main className={styles.main}>
       <div className={styles.header}>
       <div className={styles.logo}>
          <img src='../img/HDLG.svg' alt="Logo" />
          </div>
        <div className={styles.hearera}>
          <a>Home</a>
          <a>About</a>
          <a href="https://heiditnguyen.ca/">Portfolio</a>
          <a href="mailto:heidinguyen161@gmail.com">Contact</a>
        </div>
       </div>
       <div className={styles.home}>
        <div className={styles.homect}>
          <h1>Hi, my name is</h1>
          <h1>Heidi Nguyen.</h1>
          <div className={styles.icon}>
          
          </div>
        </div>
        <div className={styles.animation}><AnimationPage/></div>
       </div>
       <div className={styles.about}>
        <div className={styles.aboutct}>
          <h1>About Me</h1>
          <div className={styles.parent}>
  		    <h2>I am a <span></span>.</h2>
  	</div>
          <br />
          <br />
          
          <p>I love art, design, photography and working with an upbeat, positive attitude. 
                I am a quick learner who is ambitious to learn techniques and skills to produce the most beautiful and meaningful works.
              </p>

              <br />
              <br />
              <br />

              <p> With a solid understanding of design principles and a keen eye for detail, I am committed to providing clients with high-quality work that meets their requirements.
                My expertise is designing intuitive, user-friendly interfaces that incorporate form and function flawlessly.
              </p>

              <br />
              <br />
              <br />

              <p>Whether planning a website or an app, I prioritize understanding the requirements and expectations of users to deliver a design that looks great, improves usability, and increases user engagement.
                I am well-versed in Adobe Creative Suite, Sketch, and Figma, among other design software and tools. It enables me to rapidly move a project from conception to completion, from wireframing and prototyping to designing and implementing a final product.
              </p>

              <br />
              <br />
              <br />
          
        </div>
        <div className={styles.aboutimg}>
          <img src='../img/heidi.png' className={styles.item1}></img>
        </div>
       </div>

       <div className={styles.contact}>
       <div className={styles.center}>
      <div className={styles.bord}>
        <div className={styles.screenCorner}>
          <div className={styles.screen}>
        <p>Let's create something fabulous together. </p>
        </div>
      </div>
    </div>
  </div>
</div>
       
        <div className={styles.container}>
        <h1 className={styles.title} style={{ textAlign: "center" }}>
        <a href="https://heiditnguyen.ca/">My Portfolio</a>
        </h1>


        <p className={styles.description}style={{ textAlign: "center" }}>
          Check out some of my projects below.
        </p>

        <ProjectGallery />

        <div className={styles.wrapper}>
        <a onClick={() => window.location.href = "https://heiditnguyen.ca/"}>
          <span>See More &#10132;</span>
        </a>
      </div>



        <div className={styles.footer}>
    <span>Made with &#9829; by Heidi </span> 
        <div>
  <ul>
    <li><a href="https://instagram.com/1601.mfoto">Instagram</a></li>
    <li><a href="https://www.linkedin.com/in/heidi-nguyen-8355a322a/">LinkedIn</a></li>
    <li><a href="mailto:heidinguyen161@gmail.com">Email</a></li>
    <li><a href="https://github.com/Heidingg">Github</a></li>
    <li>
      <p>👋</p>
    </li>
  </ul>
</div>
        </div>
        </div>
        



      </main>
    </>
  )
}
