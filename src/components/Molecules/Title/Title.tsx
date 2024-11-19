import React from 'react';
import styles from './Title.module.scss';

interface TitleProps {
  title: string;
  link?: string; // Optional link
}

export const Title: React.FC<TitleProps> = ({ title, link }: TitleProps) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      {link && (
        <a href={link} className={styles.seeButton}>
          Contact Us
        </a>
      )}
    </div>
  );
};
