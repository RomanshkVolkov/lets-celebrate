export const dateFormater = {
   string: (date: Date) => {
      const day = date.getDate();
      const dayWS = new Intl.DateTimeFormat('es-MX', { weekday: 'long' }).format(date);
      const monthS = new Intl.DateTimeFormat('es-MX', { month: 'long' }).format(date);
      const year = date.getFullYear();
      const dayWeek = dayWS.charAt(0).toUpperCase() + dayWS.slice(1);
      const month = monthS.charAt(0).toUpperCase() + monthS.slice(1);
      const hours = date.getHours();
      const minutes = date.getMinutes().toFixed().padStart(2, '0');
      const seconds = date.getSeconds().toFixed().padStart(2, '0');
      return {
         day,
         dayWeek,
         month,
         year,
         hours,
         minutes,
         seconds,
      };
   },
};
