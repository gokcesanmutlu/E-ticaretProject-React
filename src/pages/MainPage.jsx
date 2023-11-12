import Loading from "../components/Loading";
import Card from "../components/Card";
import { useContext } from "react";
import { ProductContext } from "../context/productContext";


const MainPage = () => {
    // context yapısına abone olma
    // context yapısında value olarak belirlenen verilere erişim sağlarız.
    const { products } = useContext(ProductContext);
    console.log(products)
    return (
        <div className="container d-flex flex-wrap justify-content-center justify-content-md-between gap-3 gap-md-4">

            {!products && <Loading />}
            {/* null yerine boş dizi yaparsak state initial değerini, optional chaininge gerek kalmaz 
            ama o zaman da loading için dizinin uzunluğu sıfır ise şeklinde düzenlene yapılması gerekir*/}

            {/* Reactta her map'leme de ürünlere key vermeyi unutma. Bu apide id var */}
            {products?.map((product) => (
                <Card key={product.id} product={product} />
            ))}
        </div>
    )
}

export default MainPage