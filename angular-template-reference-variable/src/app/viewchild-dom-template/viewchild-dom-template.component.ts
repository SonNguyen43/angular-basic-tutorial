import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-viewchild-dom-template',
  templateUrl: './viewchild-dom-template.component.html',
  styleUrls: ['./viewchild-dom-template.component.scss']
})
export class ViewchildDomTemplateComponent implements OnInit, AfterViewInit {

  @ViewChild('demoInput') demoInput: ElementRef
  data: string

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.demoInput.nativeElement.value = ''
  }

  getData() {
    console.log(this.demoInput);

    this.data = this.demoInput.nativeElement.value
  }

}
