import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
  },
  item: {
    width: 'calc( 100% / 7)',
    flexShrink: 0,
    textAlign: 'center',
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <section className={classes.root}>
      <div className={classes.item}>일</div>
      <div className={classes.item}>월</div>
      <div className={classes.item}>화</div>
      <div className={classes.item}>수</div>
      <div className={classes.item}>목</div>
      <div className={classes.item}>금</div>
      <div className={classes.item}>토</div>
    </section>
  );
};

export default Header;
