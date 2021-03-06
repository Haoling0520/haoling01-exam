import { Component, OnInit } from '@angular/core';

interface Prodoct{
  product_code:string,
  product_description:string,
  shop_code:string,
  dataset_code:string,
  quantities:number,
  ramdom?:number
}

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  products:Array<any>;
  firstLine:string;
  constructor() {
   this.getProducts()
  }
  
  getProducts(){
     this.products = [
      {product_code:"600100",product_description:"vc",shop_code:"3020",dataset_code:"05K00X00",quantities:210},
      {product_code:"600101",product_description:"lip",shop_code:"1314",dataset_code:"03Z00M00",quantities:213},
      {product_code:"600102",product_description:"cream",shop_code:"3020",dataset_code:"02Z00X00",quantities:89},
      {product_code:"600103",product_description:"toothbrush",shop_code:"3020",dataset_code:"01D001001",quantities:194},
    ]
  }

  addProduct(){
    let newProduct = {
     product_code:"600106",
     product_description:"lip",
     shop_code:"3489",
     dataset_code:"03Z00M00",
     quantities:322

    }
    this.products.push(newProduct)
  }

  asc(){
    // 正序排列
    // 数组操作API，https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
    this.products.sort((a,b)=>{
      if(a.dataset_code>b.dataset_code){
        return 1
      }else{
        return -1
      }
    })
}


  desc(){
    // 逆序排列    
    this.products.sort((a,b)=>{
      if(a.quantities<b.quantities){
        return 1
      }else{
        return -1
      }
    })

  }
  random(){
    // 随机排列
    // 常用数学计算API，https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
  
    this.products.sort((a,b)=>{
      return Math.random()
  })

  }
  ngOnInit() {
  }

}
