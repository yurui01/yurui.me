import dayjs from "dayjs";

export function formatDate(date: string, format = "MMM D, YYYY") {
  return dayjs(date).format(format);
}
export function getYear(date: string) {
  return dayjs(date).year();
}

export function isFirstDate(post: any, posts: any[]) {
  const { date, _raw } = post;
  // get year
  const year = dayjs(date).year();
  const filterList = posts.filter(
    (item) => dayjs(item.date).year() === year
  );
  if (filterList.length === 1) return true;
  return filterList[0].raw.flattenedPath === _raw.flattenedPath;
}
