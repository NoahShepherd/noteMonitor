const currentTime = ()=>{
    const currentTime: Date = new Date();
    const options: Intl.DateTimeFormatOptions = {
      year:'numeric',
      month:'2-digit',
      day:'2-digit',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: false,
      timeZone: 'Asia/Taipei'
    };
    return currentTime.toLocaleTimeString('zh-TW', options);
}
export {currentTime}