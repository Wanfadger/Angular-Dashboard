import { Subject } from 'rxjs';
import { TimetableLesson } from '../../content/uploading/model/timetablelesson.model';
import { EventEmitter, HostListener, Output } from '@angular/core';
import { Directive, ElementRef } from '@angular/core';
 import * as XLSX from 'xlsx' 

@Directive({
  selector: '[appExcelParser]'
})
export class ExcelParserDirective {
@Output() excelEvent:EventEmitter<TimetableLesson[]> = new EventEmitter<TimetableLesson[]>()

  constructor(private _el:ElementRef) { 
    _el.nativeElement.style.backgroundColor = 'yellow';
  }

  @HostListener('change') onChange() {
    const fileList :FileList|null = this._el.nativeElement.files;
    const file:File|null|undefined = fileList?.item(0)
if (file) 
 this.readFile(file)
  }

  readFile(file:File){
    console.log(file)
    const fileReader:FileReader = new FileReader()
    fileReader.readAsArrayBuffer(file)
    //onload returns data from the file as arraybuffer

    fileReader.onload = ((event: ProgressEvent<FileReader>) => {
      const arrayBuffer = event.target?.result;
    //  console.log()
   
    const wb:XLSX.WorkBook =  XLSX.read(arrayBuffer , {"type":"buffer" , cellDates:true})
    const wsname:string = wb.SheetNames[2]

     //console.log("SHEETS "+wb.SheetNames.length)
     const sheet:XLSX.WorkSheet =  wb.Sheets[wsname]
    
     const data = XLSX.utils.sheet_to_json(sheet)

     const ts:TimetableLesson[] = data.map(d => {
      const dd:{"DAY":String, CLASS:String, "SUBJECT":String, "START_TIME":String, "ENDING_TIME":String,
       "FIRST_NAME":String , "SURNAME":String , "INITIAL":String} = JSON.parse(JSON.stringify(d));      
      return new TimetableLesson(dd.DAY , dd.CLASS , dd.SUBJECT , dd.START_TIME , dd.ENDING_TIME , dd.FIRST_NAME , dd.SURNAME , dd.INITIAL)
     })
  
   //  console.log(ts)
    this.excelEvent.emit(ts)
    })

  }
  

}
