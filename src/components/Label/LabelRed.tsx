import React from 'react';
import styles from './LabelRed.module.css';
type Props = {
   children: string | React.ReactNode;
   fontSize?: string ;
};

const LabelRed = ({ children, fontSize="" }: Props) => {
   return <p className={`${styles['label']} pl-2 ${fontSize}`}>{children}</p>;
};

export default LabelRed;
