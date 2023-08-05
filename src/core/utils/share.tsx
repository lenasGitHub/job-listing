export function objectToUrlParams(obj: Record<string, any>): string  {
    const params = new URLSearchParams();
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        params.append(key, obj[key]);
      }
    }
    return params.toString();
  }
  

  export const formatDate = (inputDate: Date): string => {
    const date = new Date(inputDate);
    
    const day = date.toLocaleString('en-us', { weekday: 'long' });
    const month = date.toLocaleString('en-us', { month: 'long' });
    const dayNumber = date.getDate();
    const year = date.getFullYear();
  
    let suffix = 'th';
    if (dayNumber === 1 || dayNumber === 21 || dayNumber === 31) {
      suffix = 'st';
    } else if (dayNumber === 2 || dayNumber === 22) {
      suffix = 'nd';
    } else if (dayNumber === 3 || dayNumber === 23) {
      suffix = 'rd';
    }
  
    const formattedDate = `${day}, ${month} ${dayNumber}${suffix}, ${year}`;
    return formattedDate;
  };
  