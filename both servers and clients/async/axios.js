   
   // react

       public componentDidMount() {


        setTimeout(async () => {

            try {
                const response = await axios.get<ProductModel[]>("http://localhost:3001/products");
                const products = response.data;
                this.setState({ products });
            }
            catch (err) {
                alert("Error: " + err.message);
            }

        }, 2000);

    }
    
    
   
   
   
   
   
   
   
   
   
   
______________________________________________________________________________________________________________________________________________________________________________________________
   
   
   
    
    // angular
    
    ngOnInit() {
        try {
            this.products = await this.myProductsService.getAllProducts();
        }
        catch (err) {
            alert(err.message);
        }
    }
    
    
  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    
    export class ProductsService {

    constructor() { }

    public getAllProducts(): Promise<ProductModel[]> {
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

    
}
