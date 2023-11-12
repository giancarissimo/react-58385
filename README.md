# TIENDA DE PRODUCTOS APPLE

## DESCRIPCIÓN:
Este proyecto será sobre una tienda online inspirada en Apple, donde los usuarios podrán explorar y comprar productos de Apple de manera ficticia. La tienda simulará ser oficial y ofrece una experiencia de compra virtual para productos como Mac, iPhone, iPad, Apple Watch, AirPods y Accesorios.

## CARACTERÍSTICAS
### Index
+   Explora una amplia gama de productos de Apple.
+   Filtra productos por categoría en el header.
### Product Detail
+   Mira el producto, conoce sus características y agregalo al carrito de compras.
### Cart
+   Maneja la cantidad del producto que quieres.
+   Elimina productos o vacia el carrito.
+   Contenido almacenado en el localStorage.
### Checkout
+   Finaliza tu compra completando un formulario en el checkout.

## SCREENSHOTS - Desktop
+   Screenshot tomado del Home:

![Home Screenshot.](/public/assets/images/screens/screen_home-page.png)

+   Screenshot tomado del ProductDetail:

![Item Detail Screenshot.](/public/assets/images/screens/screen_itemDetail-page.png)

+   Screenshot tomado del Cart:

![Cart Screenshot.](/public/assets/images/screens/screen_cart-page.png)

+   Screenshot tomado del Checkout:

![Checkout Screenshot 1.](/public/assets/images/screens/screen_checkout-page-1.png)

![Checkout Screenshot 2.](/public/assets/images/screens/screen_checkout-page-2.png)

## TECNOLOGÍAS UTILIZADAS
+ [React](https://es.react.dev/) + [Vite](https://vitejs.dev/)

## LIBRERÍAS UTILIZADAS
+ [react-loader-spinner](https://mhnpd.github.io/react-loader-spinner/)

## INSTRUCCIONES DE USO
Si lo deseas, puedes acceder al sitio [aquí](https://react-58385.vercel.app/).

## CHANGELOGS 1:
+   Se instaló React + Vite.

+   Se agregaron componentes para organizar mejor los archivos jsx.

+   Se estilizó el header y el greeting de la store.

## CHANGELOGS 2:
+   Se reemplazaron las imágenes del iphone 14 y 14 Pro por unas de mejor calidad.

+   Se reorganizaron los componentes: Ahora están ubicados en carpetas como Layuot, Common, Pages y Utils.

+   Se instaló react-router-dom: ahora gestionamos la navegación entre diferentes secciones de la aplicación implementando rutas personalizadas para mostrar diferentes componentes en función de la URL actual.

+   Se crearon componentes como Cart.jsx, ItemDetailContainer.jsx, y NotFound.jsx
    *   Cart.jsx : componente que mostrará la sección del carrito.

    *   ItemDetailContainer.jsx : componente cuya característica es mostrar el detalle del producto y poder agregarlo al carrito desde esa sección.

    *   NotFound.jsx : Si el usuario accede a una ruta de navegación inexistente, se le mostrará un "error de búsqueda" en la página con un boton para volver al inicio.

## CHANGELOGS 3:
+   Se instaló React Spinners: una librería que otorga diferentes tipos de 'loaders' para nuestro sitio web.

+   Se creó CartContext.jsx: Con éste, cualquier componente puede acceder al estado del carrito sin necesidad de pasar explícitamente la información a través de props. A su vez, facilita la manipulación del carrito desde cualquier componente que tenga acceso al contexto, simplificando la adición, eliminación o modificación de elementos en el carrito.

+   Se creó checkout.jsx : éste, va a ser la instancia final de nuestro sitio. Va a tener una especie de confirmación de lo que tenemos en el carrito para pasar al furmulario con los datos de compra del usuario.

+   Se integró Google Firebase: en ésta, están cargados nuestros productos en la nube. Ahora cuando completemos el formulario de compra (en el checkout), el carrito se vaciará y se restará el stock del producto por la cantidad del mismo que teniamos en el carrito.
A su vez, dentro de Firebase, se creará un apartado llamado "orders" que nos dice los datos del usuario (nombre, apellido, email y phone), los items que compró, el total de la compra y la fecha en la que realizó el pago.

+   Se crearon renderizados condicionales. Ej:

```Javascript JSX
{
    product.stock !== 0 ? <ButtonToBuy /> : <ButtonWithoutBuy />
}
```

![Conditional Render Example.](/public/assets/images/screens/screen_conditional-render-example.png)

## CHANGELOGS 4:
+   Se modificó el nombre del componente CounterContainer.jsx: ahora se llama ItemCountContainer.jsx

## FUTURAS FUNCIONALIDADES
* [ ]  Hacer funcionar la 'lupa' para buscar un producto.
* [x]  Crear un Counter para controlar la cantidad de un producto en el carrito.
* [x]  Estilizar, colocar y hacer funcionar el 'total' del carrito.
* [x]  Crear, estilizar y hacer funcional el checkout.
* [ ]  Mejorar las alerts.
* [x]  Aumentar la compatibilidad de la tipografía y de las animaciones.
* [ ]  Alternar entre Light & Dark Theme.
* [ ]  Maquetar el responsive.
* [ ]  Implementar SEO.