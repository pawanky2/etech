import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { CartComponent } from './cart/cart.component';
import {InputTextModule} from 'primeng/inputtext';
import {DataViewModule} from 'primeng/dataview';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {ProductService} from './../services/product.service'
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import { FileSelectDirective } from 'ng2-file-upload';
import { FormsModule } from '@angular/forms';
import {TabViewModule} from 'primeng/tabview';
import {FileUploadModule} from 'primeng/fileupload';
import {TableModule} from 'primeng/table';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {ToastModule} from 'primeng/toast';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {DialogModule} from 'primeng/dialog';
import {InputNumberModule} from 'primeng/inputnumber';
@NgModule({
  declarations: [
    AppComponent,
    ProductlistComponent,
    CartComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputTextModule,
    DataViewModule,
    ScrollingModule,
    HttpClientModule,
    CardModule,
    ButtonModule,
    FormsModule,
    TabViewModule,
    FileUploadModule,
    TableModule,
    MessageModule,
    MessagesModule,
    ToastModule,
    BrowserAnimationsModule,
    ConfirmDialogModule,
    DialogModule,
    InputNumberModule
    
    
  ],
  providers: [ProductService,MessageService,ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
