export class TimetableLesson{
  day:String;
  class:String
  subject:String
  startTime:String
  endTime:String
  firstName:String
  surname:String
  initial:String
  
  constructor(_day:String , _class:String , _subject:String 
    , _startTime:String , _endTime:String , _firstName:String , _surname:String , _initial:String){
        this.class = _class
        this.day = _day
        this.endTime = _endTime
        this.firstName = _firstName
        this.surname = _surname
        this.initial = _initial
        this.subject = _subject
        this.startTime = _startTime
    }
}