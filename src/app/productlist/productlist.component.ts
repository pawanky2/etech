import { Component, OnInit } from '@angular/core';
import {Product} from '../../model/product.model';
import {ProductService} from '../../services/product.service';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import {Item} from '../../model/item.model';
@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  products: Product[]=[];
  product :Product={} 
  submitted: boolean= false;
  productDialog: boolean= false;

  item :Item ={}
  selectedItem : Item[] =[];

  selectedFile : any = null;
  onFileSelected(event:any){
    console.log(event);
    this.selectedFile = <File>event.target.files[0];
  }

  constructor(private productService : ProductService , private messageService: MessageService, private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    

    this.productService.getProducts().subscribe((data)=>{this.products = data;
    console.log(this.products)});
    
  }

  onUpload(){
 this.productService.onupload(this.selectedFile).subscribe((data)=>console.log(data.file));
  }

  myUploader(event:any){
    console.log(this.productService.onupload(this.selectedFile).subscribe((data)=>{console.log(data);
    
    console.log(data.file)}));
  }

  fn(event: any){
    this.product.imgurl = event.originalEvent.body.file;

    console.log(this.product);
    
  }

  editProduct(product: Product){
    this.product = {...product};
    this.productDialog = true;
  }
  deleteProduct(product : Product){
    alert("Product deleted");

    this.products = this.products.filter(val => val.id !== product.id);
          this.product = {};
          console.log('deleted', this.products);

    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + product.itemname + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
          this.products = this.products.filter(val => val.id !== product.id);
          this.product = {};
          console.log('deleted', this.products);
          this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Deleted', life: 3000});
      }

      
  });
  }

  openNew() {
    this.product = {};
    this.submitted = false;
    
}

handleChange(event:any){
  if (event.index ===0){
    console.log("product add");
    this.openNew();
  }else{
    console.log("dislplay product list ");
  }
}

saveProduct(){

  this.submitted = true;
  console.log(this.product);

        if (this.product.itemname) {
            if (this.product.id) {
                this.products[this.findIndexById(this.product.id)] = this.product;                
                this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Updated', life: 3000});
            }
            else {
                this.product.id = this.createId();
                // this.product.Imgurl = this.product.Imgurl;
                this.products.push(this.product);
                this.productService.addProduct(this.product).subscribe((data) => {console.log(data);})
                this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Created', life: 3000});
            }

            this.products = [...this.products];
            
            this.product = {};
        }

}

findIndexById(id: string): number {
  let index = -1;
  for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id === id) {
          index = i;
          break;
      }
  }

  return index;
}

createId(): string {
  let id = '';
  var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for ( var i = 0; i < 5; i++ ) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return id;
}

hideDialog(){
  this.productDialog = false;
  this.submitted = false;
}

addItem(item:any){
console.log("item",item);
this.selectedItem.push(item);

this.selectedItem.forEach(value =>{ console.log('value',value)

if(value.id ===item.id){
  // item.qutantity =  parseInt(item.qutantity) + parseInt(value.qutantity) ;
}
console.log(value.id);
});




}

}


