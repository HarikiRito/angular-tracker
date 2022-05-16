import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board.component';
import { BoardColumnComponent } from './column/column.component';

@NgModule({
  declarations: [BoardComponent, BoardColumnComponent],
  imports: [CommonModule],
  exports: [BoardComponent],
})
export class BoardModule {}
