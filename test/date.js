(() => {
  const date = new Date(); // 현재 시간
  const clientOffset = date.getTimezoneOffset() * 60 * 1000; // 타임존 offset을 구하고 밀리초로 변환
  const clientTime = new Date(date - clientOffset); // offset 계산
  const isoTime = clientTime.toISOString();
  console.group('1. 클라이언트에 맞는 현재 시간 구하기');
  console.log(date.toISOString());
  console.log(isoTime);
  console.log(isoTime.slice(0, 10));
  console.log();
  console.groupEnd();
})();

(() => {
  const _date = '2023-02-28T19:03:24.748Z';
  const date = new Date(_date);
  // date.setHours(0);
  // date.setMinutes(0);
  // date.setSeconds(0);
  // date.setMilliseconds(0);
  // date.setDate(1);

  const newDate = new Date(`${date.getUTCMonth() + 1}/1/${date.getUTCFullYear()} 00:00:00.000Z`);
  console.group('2. 왜 안될까...');
  console.log(newDate);
  console.groupEnd();
})();
