import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { StringConvertPipe } from '../pipes/string-convert.pipe';
import { ArraySplicePipe } from '../pipes/array-splice.pipe';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';

@NgModule({
  declarations: [ProductComponent, StringConvertPipe],
  imports: [CommonModule, SharedModule, FormsModule, InputNumberModule],
  exports: [ProductComponent],
})
export class ProductModule {}
