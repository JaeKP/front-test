import React, { useState, useEffect } from 'react';
import { Body, Header, Input } from './Components';
import { makeStyles } from '@material-ui/core';
import data from './data';
import moment from 'moment';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
    width: '100%',
  },
}));

const Calendar = () => {
  const classes = useStyles();
  const [month, setMonth] = useState(moment().format('YYYY-MM'));

  return (
    <section className={classes.root}>
      <Input month={month} setMonth={setMonth} />
      <Header />
      <Body data={data} month={month} />
    </section>
  );
};

export default Calendar;
