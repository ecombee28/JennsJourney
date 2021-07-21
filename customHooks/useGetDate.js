import { useEffect, useState } from "react";

export default function useGetDate(date) {
  const [formattedDate, setFormattedDate] = useState("");

  useEffect(() => {
    let year, day, month;
    const monthsArr = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
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
