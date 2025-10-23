
import PageHeading from "./PageHeading"
import product from "../../data/product"
import ProductListing from "./ProductListing"
export default function Home(){
    return(
     
        <div className="home-container">
            <PageHeading title = "Explore Easy Stickers!" > 
                Add a touch of creativity to your space with our wide range of fun and unique stickers. Prefact for any occasion !
                </PageHeading>
                <ProductListing products={product} />
        </div>

   
    )
}