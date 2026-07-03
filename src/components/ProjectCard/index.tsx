import React, { ReactNode } from 'react';
import styles from './styles.module.css';

interface ProjectCardProps {
  title: string;
  href?: string;
  authorName: string;
  authorUrl?: string;
  description: string;
  children?: ReactNode;
}

export default function ProjectCard({
  title,
  href,
  authorName,
  authorUrl,
  description,
  children,
}: ProjectCardProps) {
  return (
    <article className={styles.card}>
      <h3 className={styles.title}>{href ? <a href={href}>{title}</a> : title}</h3>

      <p className={styles.author}>
        by {authorUrl ? <a href={authorUrl}>{authorName}</a> : authorName}
      </p>

      <p className={styles.description}>{description}</p>

      {children ? <div className={styles.badges}>{children}</div> : null}
    </article>
  );
}
