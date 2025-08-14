export class ReviewModel {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;

  constructor(data?: Partial<ReviewModel>) {
    this.rating = data?.rating ?? 0;
    this.comment = data?.comment ?? "";
    this.date = data?.date ?? "";
    this.reviewerName = data?.reviewerName ?? "";
    this.reviewerEmail = data?.reviewerEmail ?? "";
  }
}
export class AllProductModel {
  id? : number;
  title?: string;
  description? : string;
  category?: string;
  price?: number;
  rating?: number;
  thumbnail?: string;
  images?:string;
  reviews?:ReviewModel[];


  constructor (data?:Partial <AllProductModel>){
     this.id = data?.id ?? 0;
     this.title = data?.title ?? "";
     this.description = data?.description ?? "";
     this.category = data?.category ?? "";
     this.price = data?.price ?? 0;
     this.rating = data?.rating ?? 0;
     this.thumbnail = data?.thumbnail ?? "";
     this.images = data?.images ?? "[]";
     this.reviews = data?.reviews?.map(r => new ReviewModel(r)) ?? [];
  }
}