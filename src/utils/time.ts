import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

export const getRelativeTime = {
  from: (date: string) => dayjs().from(dayjs(date)),
  to: (date: string) => dayjs().to(dayjs(date)),
};
