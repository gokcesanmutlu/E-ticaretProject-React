import { createContext, useState } from "react";

export const BasketContext = createContext();

export function BasketProvider({ children }) {
    const [basket, setBasket] = useState([]);

    const addToBasket = (product) => {
        //sepette bu üründen daha önce eklenip eklenmediğini kontrol etme
        const found = basket.find((i) => i.id === product.id);

        if (found) {
            //sepette varsa ; miktarını 1 artır
            const updated = { ...found, amount: found.amount + 1 }

            //dizi güncellemek için ya bunu ya splice'i kullanıyoruz
            //sepet dizisinden eski elemanı update'ı ekle
            const newBasket = basket.map((item) =>
                item.id === updated.id ? updated : item
            );

            //state'i güncelle
            setBasket(newBasket);
        } else {
            //sepette yoksa ; sepete ekle
            console.log("sepete ekleme çalıştı")
            setBasket([...basket, { ...product, amount: 1 }]);
        }
    };

    const removeFromBasket = (delete_id) => {
        const found = basket.find((i) => i.id === delete_id)

        console.log(delete_id)

        if (found.amount > 1) {
            //miktarı bir azalt
            const updated = { ...found, amount: found.amount - 1 }

            //sepet dizisinden eski elemanı update'i ekle
            const newBasket = basket.map((item) =>
                item.id === updated.id ? updated : item)
            setBasket(newBasket)
        } else {
            //sepetten kaldır
            const filtred = basket.filter(() => i.id !== delete_id);
            setBasket(filtred)
        }
    };

    return (
        <BasketContext.Provider value={{ basket, addToBasket, removeFromBasket }}>
            {children}
        </BasketContext.Provider>
    )
}