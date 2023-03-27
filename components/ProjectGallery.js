// components/ProjectGallery.js
import React from "react";
import styles from '@/styles/ProjectGallery.module.css'

const ProjectGallery = () => {
  return (
    <div className={styles.container}>
      <div className={styles.gallery}>
        <div className={styles.project}>
          <img src="/img/Oceeco.png" alt="Project 1" width="350" height="333" />
          <div className={styles.overlay}>
            <h3>Oceeco</h3>
            <p>Oceeco provides easy-to-understand and detailed knowledge about plastics in the ocean.</p>
          </div>
        </div>

        <div className={styles.project}>
          <img src="/img/BuddingWriters.png" alt="Project 2" width="350" height="330" />
          <div className={styles.overlay}>
            <h3>Budding Writers</h3>
            <p>Budding Writers is a book cafe that offers a comfy place for people to enjoy coffee and read books</p>
          </div>
        </div>

        <div className={styles.project}>
          <img src="/img/MEnU.png" alt="Project 3" width="320" height="330" />
          <div className={styles.overlay}>
            <h3>MEnU</h3>
            <p>MEnU helps single parents find balance through meditation and bonding activities.</p>
          </div>
        </div>

        <div className={styles.project}>
          <img src="/img/FLIPP3D.png" alt="Project 4" width="350" height="332" />
          <div className={styles.overlay}>
            <h3>FLIPP3D</h3>
            <p>FLIPP3D is a web filp card game</p>
          </div>
          </div>
        </div>
      </div>
  );
};

export default ProjectGallery;
