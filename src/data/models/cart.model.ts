export class CartProductModel {
  id:number;
  title: string;
  price: number;
  total: number;
  quantity: number;
  discountPercentage: number;
  discountedPrice: number;
  thumbnail:string

  constructor(data?: Partial<CartProductModel>){
    this.id = data?.id ?? 0;
    this.title = data?.title ?? "";
    this.price = data?.price ?? 0;
    this.total = data?.total ?? 0;
    this.quantity = data?.quantity ?? 0;
    this.discountPercentage = data?.discountPercentage ?? 0;
    this.discountedPrice = data?.discountedPrice ?? 0;
    this.thumbnail = data?.thumbnail ?? "";
  }
}
export class CartModel {
  id: number;
  userId: number;
  products: CartProductModel[];
  total: number;
  discountedTotal: number;
  totalProducts: number;
  totalQuantity: number;

  constructor(data?: Partial<CartModel>) {
    this.id = data?.id ?? 0;
    this.userId = data?.userId ?? 0;
    this.products = data?.products?.map(p => new CartProductModel(p)) ?? [];
    this.total = data?.total ?? 0;
    this.discountedTotal = data?.discountedTotal ?? 0;
    this.totalProducts = data?.totalProducts ?? 0;
    this.totalQuantity = data?.totalQuantity ?? 0;
  }
}