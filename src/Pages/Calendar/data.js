const data = {
  scheduleCount: 6,
  montlySchedule: [
    {
      month: '2022-12',
      scheduleCount: 2,
      dailySchedule: [
        {
          date: '2022-12-01',
          type: 'OPEN',
          schedule: [
            {
              id: '1',
              classStartTime: '오전 7시',
              classEndTime: '오전 10시',
              paidClassPaymentIds: [],
            },
            {
              id: '2',
              classStartTime: '오후 5시',
              classEndTime: '오후 8시',
              paidClassPaymentIds: [],
            },
          ],
        },
      ],
    },
    {
      month: '2023-2',
      scheduleCount: 2,
      dailySchedule: [
        {
          date: '2023-02-20',
          type: 'OPEN',
          schedule: [
            {
              id: '3',
              classStartTime: '오후 5시',
              classEndTime: '오후 8시',
              paidClassPaymentIds: [],
            },
            {
              id: '4',
              classStartTime: '오전 7시',
              classEndTime: '오전 10시',
              paidClassPaymentIds: [],
            },
          ],
        },
      ],
    },
    {
      month: '2023-12',
      scheduleCount: 2,
      dailySchedule: [
        {
          date: '2023-12-31',
          type: 'OPEN',
          schedule: [
            {
              id: '5',
              classStartTime: '오전 7시',
              classEndTime: '오전 10시',
              paidClassPaymentIds: [],
            },
            {
              id: '6',
              classStartTime: '오후 5시',
              classEndTime: '오후 8시',
              paidClassPaymentIds: [],
            },
          ],
        },
      ],
    },
  ],
};

export default data;
