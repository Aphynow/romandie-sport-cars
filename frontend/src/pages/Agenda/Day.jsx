export default function Day({ day }) {
  const curentDate = new Date();

  return <div className={`day`}>{day.getDate()}</div>;
}
