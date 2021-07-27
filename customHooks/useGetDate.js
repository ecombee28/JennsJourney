import { useEffect, useState } from "react";

export default function useGetDate(date) {
  const [formattedDate, setFormattedDate] = useState("");

  useEffect(() => {
    let year, day, month;
    const monthsArr = [
      "Jan.",
      "Feb.",
      "March",
      "April",
      "May",
      "June",
      "July",
      "Aug.",
      "Sept.",
      "Oct.",
      "Nov.",
      "Dec.",
    ];

    year = date.substr(0, 4);
    month = date.substr(5, 2).replace(/^0+/, "");
    day = date.substr(8, 2).replace(/^0+/, "");
    month = monthsArr[month - 1];

    setFormattedDate(`${month} ${day}, ${year}`);
  }, [date]);

  return {
    date: formattedDate,
  };
}
