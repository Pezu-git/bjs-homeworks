'use strict'
class AlarmClock {
  constructor() {
    this.alarmCollection = [],
      this.timerId
  }

  //Добавляет новый звонок
  addClock(time, callback, id) {
    if (id === undefined) {
      throw new Error('Не задан id будильника');
    }
    const findId = this.alarmCollection.find(function (item) {
      return item.id === id;
    })
    if (findId === undefined) {
      this.alarmCollection.push({ id: id, time: time, callback: callback });
      console.log(this.alarmCollection);
    } else {
      console.error('Будильник уже поставлен');
    }
  }

  //Удаляет определённый звонок
  removeClock(id) {
    const filterId = this.alarmCollection.find(item => item.id === id);
      if (filterId) {
        this.alarmCollection.splice(this.alarmCollection.indexOf(filterId), 1) 
        console.log(this.alarmCollection);
        return true;
      }
    return false;
  } 
  
  //Текущее время string
  getCurrentFormatTime() {
    let dateNow = new Date();
    let hours = dateNow.getHours();
    let minutes = dateNow.getMinutes();
    if (hours < 10) {
      hours = '0' + hours;
    }
    if (minutes < 10) {
      minutes = '0' + minutes;
    }
    return `${hours}:${minutes}`;
  }

  //Запускает все звонки
  start() {
    function checkClock(ring) {
      if (ring.time === alarm.getCurrentFormatTime()) {
        ring.callback();
      }
    }
    if (this.timerId === undefined) {
      this.timerId = setInterval(() => {
        this.alarmCollection.forEach(item => checkClock(item))
      }, 5000);
    }
  }

  //Останавливает выполнение всех звонков
  stop() {
    if (this.timerId !== undefined) {
      clearInterval(this.timerId);
      this.timerId === undefined;
    }
  }

  //Печатает все звонки
  printAlarms() {
    this.alarmCollection.forEach(item => console.log(`Будильник №${item.id} заведён на ${item.time}`));
  }

  //Удаляет все звонки
  clearAlarms() {
    stop();
    this.alarmCollection.splice(0, this.alarmCollection.length);
  }

  //Тесты
  testCase() {
    console.log(alarm.getCurrentFormatTime())
    this.addClock('07:55', () => alert('Get up!'), 1);
    this.addClock('07:55', () => alert('Get up!'), 1);
    this.addClock('07:17', () => console.log('Qwickly!!'), 2);
    this.addClock('07:16', () => alert('Get up, Qwickly!!!'), 4);
    this.addClock('08:29', () => console.log('Get up for work!'), 3);
    // this.addClock('08:05', () => console.log('Get up for work!'));
    this.start();
    this.printAlarms();
    this.removeClock(4);
    this.removeClock(1);
    this.printAlarms();
    // this.stop();
    // this.clearAlarms();
  }
}
const alarm = new AlarmClock();
alarm.testCase();
  

