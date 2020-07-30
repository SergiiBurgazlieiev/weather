export const getDate = str => {
    let arr = str.split(/[- :]/);

    const getMonth = monthNum => {
      let m ='';
      return monthNum === '01' ? m = 'Jan'
            :monthNum === '02' ? m = 'Feb'
            :monthNum === '03' ? m = 'Mar'
            :monthNum === '04' ? m = 'Apr'
            :monthNum === '05' ? m = 'May'
            :monthNum === '06' ? m = 'Jun'
            :monthNum === '07' ? m = 'Jul'
            :monthNum === '08' ? m = 'Aug'
            :monthNum === '09' ? m = 'Sept'
            :monthNum === '10' ? m = 'Oct'
            :monthNum === '11' ? m = 'Nov'
            :monthNum === '12' ? m = 'Dec'
            :m;
    }
    
    const getDay = dayNum => {
      return Number(dayNum) < 10 ? dayNum.replace('0',''): dayNum;
    }
    
    const getTime = timeNum => {
      let t = '';
      return timeNum === '00' ? t = '12AM'
            :timeNum === '03' ? t = '3AM'
            :timeNum === '06' ? t = '6AM'
            :timeNum === '09' ? t = '9AM'
            :timeNum === '12' ? t = '12PM'
            :timeNum === '15' ? t = '3PM'
            :timeNum === '18' ? t = '6PM'
            :timeNum === '21' ? t = '9PM'
            :t;
    }
    
  return `${getTime(arr[3])} ${getMonth(arr[1])} ${getDay(arr[2])}`;
};

export const nightOrDay = icon => {
  let timeOfTheDay ='';
  icon.split('')[2] === 'n' ? timeOfTheDay = 'night': timeOfTheDay = 'day';
  return timeOfTheDay;
};