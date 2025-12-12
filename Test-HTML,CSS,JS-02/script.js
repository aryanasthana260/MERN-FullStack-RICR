
function buyProduct(name, brand, price, description) {
  console.log("Buy Button Clicked");
  alert("Buy button clicked");

  console.log("Product : " + name);
  console.log("Brand : " + brand);
  console.log("Price : " + price);
  console.log("Description : " + description);

  // show values in checkout fields
  document.getElementById("checkoutProduct").textContent = name;
  document.getElementById("checkoutBrand").textContent = brand;
  document.getElementById("checkoutPrice").textContent = price;
  document.getElementById("checkoutDesc").textContent = description;

  // show checkout section
  document.getElementById("checkout").style.display = "block";
  // hide products
  document.getElementById("products").style.display = "none";
}

function cancelCheckout() {
  console.log("Cancel Button Clicked");
  alert("Checkout cancelled");

  
  document.getElementById("checkout").style.display = "none";
  // show products again
  document.getElementById("products").style.display = "block";
}


document.getElementById("checkoutForm").addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("Checkout Submit Clicked");
  alert("Checkout submit clicked");

  const nm = document.getElementById("customerName").value;
  const ad = document.getElementById("customerAddress").value;
  const ph = document.getElementById("customerPhone").value;
  const em = document.getElementById("customerEmail").value;
  const pm = document.getElementById("paymentMode").value;
  const qt = document.getElementById("quantity").value;

  console.log("Name : " + nm);
  console.log("Address : " + ad);
  console.log("Phone : " + ph);
  console.log("Email : " + em);
  console.log("Payment : " + pm);
  console.log("Quantity : " + qt);

  alert("Purchase Completed");

  document.getElementById("checkoutForm").reset();
  cancelCheckout();
});

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("Contact Submit Clicked");
  alert("Contact submit clicked");

  const nm = document.getElementById("name").value;
  const em = document.getElementById("email").value;
  const me = document.getElementById("message").value;

  console.log("Name : " + nm);
  console.log("Email : " + em);
  console.log("Message : " + me);

  alert("Message Sent");

  document.getElementById("contactForm").reset();
});
