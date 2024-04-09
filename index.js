let shopGoods = [  
    
    {
      "store_name": "Moda Dünyası",
      "store_address": "Bakı şəhəri, Nizami kuçəsi 5",
      "products": [
        {"product_name": "Kişi köynəyi", "product_description": "Mavi rəngdə, 100% pamuk", "product_price": 50},
        {"product_name": "Qadın bluzası", "product_description": "Dəri detallı, qara rəngdə", "product_price": 60},
        {"product_name": "Kişi pantolonu", "product_description": "Qəhvəyi rəng, kənar cebi", "product_price": 75},
        {"product_name": "Qadın eteyi", "product_description": "Qırmızı rəng, mini", "product_price": 40},
        {"product_name": "Kişi dəsmalı", "product_description": "Nəqşdar dizayn", "product_price": 20},
        {"product_name": "Qadın çantası", "product_description": "Əlgötürən, dəri", "product_price": 90},
        {"product_name": "Kişi botları", "product_description": "Qış üçün, suya davamlı", "product_price": 120},
        {"product_name": "Qadın ayaqqabıları", "product_description": "Yüksək tapan, lacivərt", "product_price": 85},
        {"product_name": "Kişi papağı", "product_description": "Qara rəngdə, dəri", "product_price": 45},
        {"product_name": "Qadın şalvarı", "product_description": "Göy rəngdə, kaşmir", "product_price": 70}
      ]
    },
    {
      "store_name": "Zərif Moda",
      "store_address": "Bakı şəhəri, 28 May kuçəsi 12",
      "products": [
        {"product_name": "Kişi palto", "product_description": "Süət dəri, qara rəngdə", "product_price": 250},
        {"product_name": "Qadın jaketi", "product_description": "Uzun, qaşqır", "product_price": 200},
        {"product_name": "Kişi kəməri", "product_description": "Dəri, metal tokalı", "product_price": 40},
        {"product_name": "Qadın badlonu", "product_description": "Retro stil, qızıl rəngdə", "product_price": 180},
        {"product_name": "Kişi şortu", "product_description": "Spor stil, elastik", "product_price": 60},
        {"product_name": "Qadın maykası", "product_description": "Boyalı nəqş, pamuklu", "product_price": 45},
        {"product_name": "Kişi saatı", "product_description": "Qara rəngdə, analog", "product_price": 150},
        {"product_name": "Qadın bəzək", "product_description": "Qızıl, komplekt", "product_price": 220},
        {"product_name": "Kişi atkısı", "product_description": "Xəzəl rəng, uzun", "product_price": 35},
        {"product_name": "Qadın bantı", "product_description": "Metal detallı, elastik", "product_price": 50}
      ]
    },
    {
      "store_name": "Əliyev Moda Mərkəzi",
      "store_address": "Bakı şəhəri, Azadlıq prospekti 89",
      "products": [
        {"product_name": "Kişi kostyumu", "product_description": "İki parçalı, qara rəngdə", "product_price": 320},
        {"product_name": "Qadın kombinezonu", "product_description": "Yaz üçün, açıq rəng", "product_price": 150},
        {"product_name": "Kişi sviteri", "product_description": "Düz rəng, yüngül", "product_price": 70},
        {"product_name": "Qadın ziyafət geyimi", "product_description": "Düzənşən, yaz üçün", "product_price": 95},
        {"product_name": "Kişi sport formaları", "product_description": "Spandex, idman üçün", "product_price": 55},
        {"product_name": "Qadın bikini", "product_description": "Tropik nəqş, elastik", "product_price": 45},
        {"product_name": "Kişi çantası", "product_description": "Dizayner, əsas bölməsi", "product_price": 100},
        {"product_name": "Qadın ətri", "product_description": "Gül ətri, uzunömürlü", "product_price": 80},
        {"product_name": "Kişi şalı", "product_description": "Səliqəli, çoxrəngli", "product_price": 25},
        {"product_name": "Qadın sutyeni", "product_description": "Destəklənmiş, rahat", "product_price": 65}
      ]
    }
] 
 let shoppingCart = [];

        function showAllProducts() {
            shopGoods.forEach(shop => {
                console.log(`Mağaza: ${shop.store_name}, Ünvan: ${shop.store_address}`);
                shop.products.forEach(product => {
                    console.log(`Məhsul adi: ${product.product_name}, Təsvir: ${product.product_description}, Qiymət: ${product.product_price}`);
                });
                console.log("\n");
            });
        }

        function searchProduct(productName) {
            let found = false;
            shopGoods.forEach(shop => {
                shop.products.forEach(product => {
                    if (product.product_name.toLowerCase() === productName.toLowerCase()) {
                        console.log(`Məhsul adi : ${product.product_name}, Təsvir: ${product.product_description}, Qiymət: ${product.product_price}, Mağaza: ${shop.store_name}`);
                        found = true;
                    }
                });
            });
            if (!found) {
                console.log("Axtardiginiz məhsul tapilmadi.");
            }
        }

        function deleteProduct(productName) {
            shopGoods.forEach(shop => {
                shop.products = shop.products.filter(product => product.product_name.toLowerCase() !== productName.toLowerCase());
            });
            console.log(`${productName} adli məhsul müvəffəqiyyətlə silindi.`);
        }

        function changeProductPrice(productName, newPrice) {
            shopGoods.forEach(shop => {
                shop.products.forEach(product => {
                    if (product.product_name.toLowerCase() === productName.toLowerCase()) {
                        product.product_price = newPrice;
                        console.log(`${productName} məhsulunun yeni qiyməti: ${newPrice}`);
                    }
                });
            });
        }
        function addProductToStore(storeIndex, newProduct) {
        
            if (shopGoods && shopGoods.length > storeIndex && shopGoods[storeIndex].hasOwnProperty("products")) {
                shopGoods[storeIndex].products.push(newProduct);
                console.log("Məhsul mağazaya əlavə edildi.");
            } else {
                console.log("Mağaza bulunamadı veya ürünler dizisi tanımsız.");
            }
        }
        function sortProductsByPrice(order) {
            let sortedProducts = [];
            shopGoods.forEach(shop => {
                sortedProducts = sortedProducts.concat(shop.products);
            });

            switch (order) {
                case "artan":
                    sortedProducts.sort((a, b) => a.product_price - b.product_price);
                    break;
                case "azalan":
                    sortedProducts.sort((a, b) => b.product_price - a.product_price);
                    break;
                default:
                    console.log("Yanlis siralama qaydasi seçildi.");
                    break;
            }
            console.log("Siralanmis məhsullar:");
            sortedProducts.forEach(product => {
                console.log(`Məhsul adi: ${product.product_name}, Təsvir: ${product.product_description}, Qiymət: ${product.product_price}`);
            });
        }

        function showAllProductsForBuyer() {
            shopGoods.forEach(shop => {
                console.log(`Mağaza: ${shop.store_name}, Ünvan: ${shop.store_address}`);
                shop.products.forEach(product => {
                    console.log(`Məhsul adi: ${product.product_name}, Təsvir: ${product.product_description}, Qiymət: ${product.product_price}`);
                });
                console.log("\n");
            });
        }

        function searchProductForBuyer(productName) {
            let found = false;
            shopGoods.forEach(shop => {
                shop.products.forEach(product => {
                    if (product.product_name.toLowerCase() === productName.toLowerCase()) {
                        console.log(`Məhsul adi: ${product.product_name}, Təsvir: ${product.product_description}, Qiymət: ${product.product_price}, Mağaza: ${shop.store_name}`);
                        found = true;
                    }
                });
            });
            if (!found) {
                console.log("Axtardiginiz məhsul tapilmadi.");
            }
        }

        function sortProductsByPriceForBuyer(order) {
            let sortedProducts = [];
            shopGoods.forEach(shop => {
                sortedProducts = sortedProducts.concat(shop.products);
            });

            switch (order) {
                case "artan":
                    sortedProducts.sort((a, b) => a.product_price - b.product_price);
                    break;
                case "azalan":
                    sortedProducts.sort((a, b) => b.product_price - a.product_price);
                    break;
                default:
                    console.log("Yanlis siralama qaydasi seçildi.");
                    break;
            }
            console.log("Siralanmis məhsullar:");
            sortedProducts.forEach(product => {
                console.log(`Məhsul adi: ${product.product_name}, Təsvir: ${product.product_description}, Qiymət: ${product.product_price}`);
            });
        }

        function addToCart(product) {
            shoppingCart.push(product);
            console.log("Məhsul səbətə əlavə edildi.");
        }

        function viewCart() {
            console.log("Səbət məhsulları:");
            console.table(shoppingCart);
        }

        while (true) {
            let role = prompt("Daxil olmaq üçün Admin və ya alıcı seçin:");

            if (role.toLowerCase() === "admin") {
                 showAllProducts();
                 searchProduct("kişi köynəyi")
                 deleteProduct("kişi köynəyi");
                 changeProductPrice("kişi köynəyi ", 50);
                 let storeIndex = 4 ; 
        let newProduct = {"product_name": "Yeni product", "product_description": "Yeni product", "product_price": 100}; 

                 addProductToStore(storeIndex, newProduct);
                 sortProductsByPrice("artan");
                 addToCart("kişi köynəyi ");
                 viewCart() 
            } else if (role.toLowerCase() === "alici") {
                showAllProductsForBuyer(); 
             
                searchProductForBuyer("kişi köynəyi ") ;
                sortProductsByPriceForBuyer('alici');


                alert("Yalnis rol daxil edildi!");
                continue;
            }

            let exit = prompt("Proqramdan cixmaq istəyirsinizmi? (Bəli/Xeyr)");
            if (exit.toLowerCase() === "beli") {
                break;
            }
        }