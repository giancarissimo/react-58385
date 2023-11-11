import ItemListContainer from "../components/pages/itemListContainer/ItemListContainer"
import ItemDetailContainer from "../components/pages/itemDetailContainer/ItemDetailContainer"
import CartContainer from "../components/pages/cart/CartContainer"
import CheckoutContaier from "../components/pages/checkout/CheckoutContaier"
import NotFound from "../components/pages/notFound/NotFound"

export const routes = [
    {
        id: "home",
        path: "/",
        Element: ItemListContainer
    },
    {
        id: "category",
        path: "/category/:categoryName",
        Element: ItemListContainer
    },
    {
        id: "detail",
        path: "/item/:id",
        Element: ItemDetailContainer
    },
    {
        id: "cart",
        path: "/cart",
        Element: CartContainer
    },
    {
        id: "checkout",
        path: "/checkout",
        Element: CheckoutContaier
    },
    {
        id: "notFound",
        path: "*",
        Element: NotFound
    }
]
