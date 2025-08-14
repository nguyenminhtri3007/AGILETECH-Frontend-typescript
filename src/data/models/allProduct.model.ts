export class AllProductModel {
  id? : number;
  title?: string;
  description? : string;
  category?: string;
  price?: number;
  rating?: number;
  thumbnail?: string;

  constructor (data?:Partial <AllProductModel>){
     this.id = data?.id ?? 0;
     this.title = data?.title ?? "";
     this.description = data?.description ?? "";
     this.category = data?.category ?? "";
     this.price = data?.price ?? 0;
     this.rating = data?.rating ?? 0;
     this.thumbnail = data?.thumbnail ?? ""
  }
}