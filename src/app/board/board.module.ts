import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board.component';
import { BoardColumnComponent } from './column/column.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { BoardCardComponent } from './card/board-card.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [BoardComponent, BoardColumnComponent, BoardCardComponent],
  imports: [CommonModule, MatIconModule, MatButtonModule, DragDropModule],
  exports: [BoardComponent],
})
export class BoardModule {}
