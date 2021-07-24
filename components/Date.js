export default function Date({ dateString }) {
  if (!dateString) {
    return "No date";
  }
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, "LLLL	d, yyyy")}</time>;
}
