export class ProductsService {

    constructor(private myHttpClient: HttpClient) { }

    public getAllProducts1(): Promise<ProductModel[]> {
        return new Promise<ProductModel[]>(async (resolve, reject) => {
            try {
                const response = await axios.get<ProductModel[]>("http://localhost:3000/products");
                resolve(response.data);
            }
            catch (err) {
                reject(err);
            }
        });
    }

    public getAllProducts2(): Observable<ProductModel[]> {
        return Observable.create(async (observer: Observer<ProductModel[]>)=>{
            try {
                const response = await axios.get<ProductModel[]>("http://localhost:3000/products");
                observer.next(response.data);
                observer.complete();
            }
            catch (err) {
                observer.error(err);
            }
        });
    }

    public getAllProducts3(): Promise<ProductModel[]> {
        return Observable.create(async (observer: Observer<ProductModel[]>)=>{
            try {
                const response = await axios.get<ProductModel[]>("http://localhost:3000/products");
                observer.next(response.data);
                observer.complete();
            }
            catch (err) {
                observer.error(err);
            }
        }).toPromise();
    }

    public getAllProducts4(): Observable<ProductModel[]> {
        return this.myHttpClient.get<ProductModel[]>("http://localhost:3000/products");
    }

    public getAllProducts5(): Promise<ProductModel[]> {
        return this.myHttpClient.get<ProductModel[]>("http://localhost:3000/products").toPromise();
    }

    public getOneProduct(id: number): Promise<ProductModel> {
        return this.myHttpClient.get<ProductModel>("http://localhost:3000/products/" + id).toPromise();
    }

}