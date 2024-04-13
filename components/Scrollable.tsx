'use client';
import { useEffect, useRef, useState } from 'react';
import styles from './styles.module.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const Home = () => {
  const imageViewer = useRef(null);
  const imageScene = useRef(null);
  console.log('imageID', imageViewer);

  useEffect(() => {
    let frame_count = 9;
    let offset_value = 100;

    const t = gsap.to(imageViewer.current, {
      scrollTrigger: {
        trigger: imageScene.current,
        start: 'top top',
        end: '+=' + frame_count * offset_value,
        pin: true,
        scrub: true,
      },
    });
    // Clean up before unmounting the component/page
    return () => {
      t.kill();
      ScrollTrigger.getAll().forEach((e) => e.kill());
    };
  }, []);

  gsap.registerPlugin(ScrollTrigger);

  let frame_count = 9;
  let offset_value = 100;

  gsap.to(imageViewer.current, {
    scrollTrigger: {
      trigger: imageScene.current,
      start: 'top top',
      end: '+=' + frame_count * offset_value,
      pin: true,
      scrub: true,
    },
  });

  if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
  }

  return (
    <>
      <div className={`${styles.header} ${styles.section}`}>
        <div className={styles.center}>&darr;START</div>
      </div>

      <p className={styles.bgText}>Discover</p>
      <div
        ref={imageScene}
        className={`${styles.scene} ${styles.section}`}
        id="sticky">
        <div ref={imageViewer} className={styles.viewer}></div>
      </div>

      <div className={styles.section}>
        <div className={styles.center}>End</div>
      </div>

      <div className={styles.canvas}></div>

      <div className={styles.body}></div>
    </>
  );
};

export default Home;
