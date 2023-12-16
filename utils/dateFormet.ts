export const formatDateTime = (date: any, hideTime?: boolean) => {
  let options: any = {
    dateStyle: "full",
    timeStyle: "short",
    hour12: true,
  };
  let options2: any = {
    dateStyle: "long",
    hour12: true,
  };
  return new Date(date).toLocaleString(`en-BD`, hideTime ? options2 : options);
};
