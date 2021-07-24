export default function useGetAvatarColor() {
  const colors = [
    "#08a131",
    "#a17308",
    "#e61300",
    "#00a8e6",
    "#434ff7",
    "#9d43f7",
    "#c709d9",
    "#d9091d",
  ];
  const randomNumber = Math.floor(Math.random() * colors.length - 1);

  return {
    color: colors[randomNumber],
  };
}
