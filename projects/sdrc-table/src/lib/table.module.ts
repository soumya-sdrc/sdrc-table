import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { NgxPaginationModule, PaginatePipe } from 'ngx-pagination';
import { Ng2SearchPipeModule} from 'ng2-search-filter'; 
import { FormsModule } from '@angular/forms';
import { SearchPipePipe } from './search-pipe.pipe';
import { PDFExportModule } from '@progress/kendo-angular-pdf-export';
import { SortPipePipe } from './sort-pipe.pipe';
import { ExcludeElementPipe } from './excludeElement.pipe';
// import { MatIconModule, MatTooltipModule, MatSelectModule, MatButtonModule, MatCardModule, MatSlideToggleModule, MatCheckboxModule } from '@angular/material';
import { ModifyColumnsPipe } from './modify-columns.pipe';
import {MatIconModule} from '@angular/material/icon'
import {MatTooltipModule} from '@angular/material/tooltip'
import {MatSelectModule} from '@angular/material/select'
import {MatButtonModule} from '@angular/material/button'
import {MatCardModule} from '@angular/material/card'
import {MatCheckboxModule} from '@angular/material/checkbox'
import {MatSlideToggleModule} from '@angular/material/slide-toggle'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    PDFExportModule,
    MatIconModule,
    MatTooltipModule,
    MatSelectModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatSlideToggleModule,
  ],
  declarations: [TableComponent, SearchPipePipe,SortPipePipe, ExcludeElementPipe, ModifyColumnsPipe],

  providers: [],
  exports: [TableComponent, SearchPipePipe, SortPipePipe, ExcludeElementPipe]
})
export class TableModule {
  // public static forRoot(config): ModuleWithProviders {
  //   return {
  //     ngModule: TableModule,
  //     providers: [
  //       TableService,
  //       { provide: 'config', useValue: config }
  //     ]
  //   };
  // }
}
