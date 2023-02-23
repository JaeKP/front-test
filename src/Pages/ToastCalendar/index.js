import React, { useRef, useEffect } from 'react';
import { Button } from '@material-ui/core';
import Calendar from '@toast-ui/react-calendar';
import '@toast-ui/calendar/dist/toastui-calendar.min.css';

const ToastCalendar = () => {
  const instance = useRef();
  const calendarRef = useRef();
  const initialEvents = [
    {
      id: '1',
      start: '2023-02-21T12:00:00',
      end: '2023-02-21T13:30:00',
    },
    {
      id: '2',
      start: '2023-02-22T15:00:00',
      end: '2023-02-22T15:30:00',
    },
    {
      id: '3',
      start: '2023-02-21T12:00:00',
      end: '2023-02-21T13:30:00',
    },
    {
      id: '4',
      start: '2023-02-22T15:00:00',
      end: '2023-02-22T15:30:00',
    },
  ];

  const handlePrevButton = (event) => {
    instance.current.prev();
  };

  // @ 서버로부터 받은 데이터를 수정하여 새로운 일정 생성
  const eventFilter = (initialEvents) => {
    const eventCount = {};
    initialEvents.forEach((event) => {
      if (!eventCount[event.start]) {
        eventCount[event.start] = {
          start: event.start,
          end: event.start,
          count: 1,
          attendees: [event.id],
        };
      } else {
        eventCount[event.start].count += 1;
        eventCount[event.start].attendees.push(event.id);
      }
    });

    const newEvents = Object.values(eventCount);
    newEvents.forEach((obj) => {
      obj.title = `클래스 일정 ${obj.count} 개`;
      obj.category = 'allday';
      obj.backgroundColor = '#FEF9F3';
      obj.borderColor = '#FEF9F3';
      obj.customStyle = {
        padding: '2px 4px',
        border: '1px solid #F28316',
        borderRadius: '4px',
        color: '#515B60',
        backgroundColor: '#FEF9F3',
        fontSize: '14px',
      };
    });

    return newEvents;
  };

  useEffect(() => {
    instance.current = calendarRef.current.getInstance();
    instance.current.on('clickEvent', ({ event }) => {
      console.log(event); // EventObject
    });
  }, []);

  return (
    <section style={{ diplay: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Button onClick={handlePrevButton}>Prev</Button>
        <Button onClick={() => instance.current.next()}>Next</Button>
      </div>
      <Calendar
        ref={calendarRef}
        height="900px"
        view="month"
        events={eventFilter(initialEvents)}
        gridSelection={false}
        usageStatistics={false}
        onAfterRenderEvent={() => console.log('dd')}
      />
    </section>
  );
};
export default ToastCalendar;
