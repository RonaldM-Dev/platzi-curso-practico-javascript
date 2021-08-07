// const precioOriginal = 120;
// const descuento = 18;


function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const InputDiscount = document.getElementById("InputDiscount");
    const DiscountValue = InputDiscount.value;

    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;

    let descuento;
    switch(couponValue) {
        case "JuanDC_es_Batman":
        descuento = 15;
        break;
        case "pero_no_le_digas_a_nadie":
            descuento = 30;
        break;
         case "es_un_secreto":
        descuento = 25;
        break;
                
    }

    const precioConDescuento = calcularPrecioConDescuento(priceValue, DiscountValue, descuento);
    const Resulp = document.getElementById("Resulp");
    Resulp.innerText = "El precio con descuento son: $" + precioConDescuento;
}


// cupon de descuento
// const coupons = [
//     {
//         name: "JuanDC_es_Batman",
//         discount: 15,
//     },
//     {
//         name: "pero_no_le_digas_a_nadie",
//         discount: 30,
//     },
//     {
//         name: "es_un_secreto",
//         discount: 25,
//     },
// ];


// function onClickButtonPriceDiscount() {
//     const inputPrice = document.getElementById("InputPrice");
//     const priceValue = inputPrice.value;
    
//     const inputCoupon = document.getElementById("InputCoupon");
//     const couponValue = inputCoupon.value;
  
//     if (!userCoupon) {
//         alert("El cupón " + userCouponValue + "no es válido");
//     } else {
//         const descuento = userCoupon.discount;
//         const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
    
//         const resultP = document.getElementById("ResultP");
//         resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
//     }
  
  
//     const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
  
//     const resultP = document.getElementById("ResultP");
//     resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
//   }



//   // Base de datos de cupones
// const coupons = [
//     { name: "black_friday", discount: 35 },
//     { name: "cyber_monday", discount: 20 },
//     { name: "summer_vibes", discount: 15 },
//     { name: "quarantine", discount: 25 },
//     { name: "half_price", discount: 50 },
//   ];
  
//   // Calcular el cupón de descuento
//   function calculateCouponDiscount() {
//     const resultP = document.getElementById("ResultP");
  
//     const clientCoupon = document.getElementById("InputCoupon").value;
//     // couponValidator retorna un booleano para saber
//     // si el cupón existe en la base de datos.
//     const couponValidator = coupons.some((element) => {
//       return element.name == clientCoupon;
//     });
  
//     // Condicional para hacer el calculo o mandar mensaje de error
//     if (couponValidator) {
//       const priceValue = document.getElementById("InputPrice").value;
//       const coupon = coupons.find((element) => {
//         return element.name == clientCoupon;
//       });
//       const couponDiscount = coupon.discount;
  
//       const finalPrice = calcularPrecioConDescuento(priceValue, couponDiscount);
  
//       resultP.innerText = `El precio con cupón aplicado es de $${finalPrice}`;
//     } else {
//       resultP.innerText = "El cupón no es válido";
//     }
//   }

// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento
// });