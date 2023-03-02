import React, { useEffect, useState } from 'react';
import moment from 'moment';

import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 1fr)',
    rowGap: '2rem',
  },

  item: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    textAlign: 'center',
  },
}));

const Body = ({ data, month }) => {
  const classes = useStyles();
  const date = moment(month, 'YYYY-MM');
  const [calendarList, setCalendarList] = useState([]);

  useEffect(() => {
    const startDate = date.clone().startOf('M').startOf('week');
    const endDate = date.clone().endOf('M').endOf('week');
    const _calendarList = [];

    // 해당월의 달력 만들기
    while (startDate.isSameOrBefore(endDate, 'day')) {
      _calendarList.push({ date: startDate.format('YYYY-MM-DD') });
      startDate.add(1, 'day');
    }

    // 해당 월의 스케쥴 찾기
    const montlySchedule = data.montlySchedule;
    if (!montlySchedule) {
      return setCalendarList(_calendarList);
    }
    const currentMontlySchedule = montlySchedule
      .filter((item) => date.isSame(moment(item.month, 'YYYY-MM')))
      .flatMap((item) => item.dailySchedule);

    // 스케쥴이 있는 달력 데이터 수정
    const eventList = _calendarList.map((date) => {
      const matchingItem = currentMontlySchedule.find((item) => date.date === item.date);
      if (matchingItem) {
        console.log(matchingItem);
        return matchingItem;
      } else {
        return date;
      }
    });

    console.log(eventList);
    return setCalendarList(eventList);
  }, [month]);

  return (
    <section className={classes.root}>
      {calendarList.map((item, index) => (
        <div className={classes.item} key={index}>
          <p>{item.date}</p>
          <p>{item?.schedule?.length && `${item?.schedule?.length}개의 일정`}</p>
        </div>
      ))}
    </section>
  );
};

export default Body;
