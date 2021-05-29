import React from 'react';
import s from './Statistics.module.css';
import PropTypes from "prop-types";



const Statistics = ({ stats }) => {

  return (
    <section className={s.statistics}>
      <h2 className={s.title} style={{ backgroundColor: `${randomColor()}`}} >Upload stats</h2>

      <ul className={s.statList}>
        {stats.map(({ label, percentage, id }) => (
          <li key={id} className={s.item} style={{ backgroundColor: `${randomColor()}`}}>
            <span className={s.label}>{label}</span>
            <span className={s.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Statistics;

const randomColor = () => {
    let col = Math.round(255.0*Math.random());
    const r = col.toString(16);
    col = Math.round(255.0*Math.random());
    const g=col.toString(16);
    col = Math.round(255.0*Math.random());
    const b=col.toString(16);
    col=`#${r}${g}${b}`;
    return col;
}

Statistics.defaultProps = {
    title: 'Upload stats',
};

Statistics.propTypes = {
    label: PropTypes.string,
    percentage: PropTypes.number
};






