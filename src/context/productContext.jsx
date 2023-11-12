import axios from "axios";
import { createContext, useEffect, useState } from "react";

/*Context API
- Uygulamada birden çok bileşenin ihtiyacı olan verileri,
  bileşenlerden bağımsız şekilde konumlanan merkezlerde yönetmeye yarar. 
- Verileri ve verileri değiştirmeye yarayan fonksiyonları tutarız. 
- Context, tuttuğumuz bu değişkenleri bileşenlere doğrudan aktarım yapabilen merkezi state yönetim aracıdır. */

//! Context yapısının temelini oluşturma
export const ProductContext = createContext();

//! Sağlayıcı(fonk şekilde oluşturulur, ürünleri sağlayan bir merkez gibi düşün) 
//! ve onun tuttuğu verileri tanımlama
//zorunluluk yok ama context yapılarına başlarken genelde büyük harfle başlarız
export function ProductProvider({ children }) {
    const [products, setProducts] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(null)

    useEffect(() => {
        // kategori yoksa sadece productsa, varsa devamına kategori ve kategori ismi yazarak istek atıcak
        axios
            .get(
                `https://fakestoreapi.com/products${selectedCategory ? '/category/' + selectedCategory : ''
                }`
            )
            .then((res) => setProducts(res.data));
    }, [selectedCategory]);


    // aşağıdaki yapı klasiktir. Context yapısında tuttuğumuz verilerin bileşenlere aktarımını sağlar.
    return (

        <ProductContext.Provider value={{ products, setSelectedCategory }}>
            {children}
        </ProductContext.Provider>
    )
}  