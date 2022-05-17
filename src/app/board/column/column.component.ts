import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Required } from 'src/decorator/common';

@Component({
  selector: 'app-board-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss'],
})
export class BoardColumnComponent implements OnInit {
  @Input() @Required title!: string;
  constructor() {}

  ngOnInit(): void {}
}
