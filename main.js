class MyDate {
  constructor(day, month, year) {
    this.day = day;
    this.month = month;
    this.year = year;
  }
  getDay() {
    return this.day;
  }
  setDay(day) {
    this.day = day;
  }
  getMonth() {
    return this.month;
  }
  setMonth(month) {
    this.month = month;
  }
  getYear() {
    return this.year;
  }
  setYear(year) {
    this.year = year;
  }
  setDate(day, month, year) {
    this.day = day;
    this.month = month;
    this.year = year;
  }
  toString() {
    var formattedDay = ("0" + this.day).slice(-2);
    var formattedMonth = ("0" + this.month).slice(-2);
    return formattedDay + "/" + formattedMonth + "/" + this.year;
  }
}
let date = new MyDate(2, 2, 2002);

// date.setDay(27);
// date.setMonth(9);
// date.setYear(2023);
date.setDate(27,9,2023);
let day = date.getDay();
let month = date.getMonth();
let year = date.getYear();
let date2 = date.toString();
console.log(date2);