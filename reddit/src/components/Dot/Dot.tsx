import React from 'react';

import styles from './Dot.module.scss';

interface Props {
  width?: number;
  height?: number;
}
export function Dot({ width = 50, height = 50 }: Props) {
  return (
    <span className={styles.dotWrapper} style={{ width: width, height: height }}>
      <svg width={'100%'} height={'100%'} viewBox="0 0 100 100" fill="currentColor">
        <ellipse cx="50" cy="50" rx="50" ry="50"></ellipse>
      </svg>
    </span>
  );
}
