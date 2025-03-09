export const loadJST = (isoDate: string): string => {
  const date = new Date(isoDate);
  date.setHours(date.getHours() + 9);
  const jstDate = date.toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });
  return jstDate.replace(/\//g, '-');
};
