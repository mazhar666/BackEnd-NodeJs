class Product {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
}

class ProductUi {
  static products = [];
  static total = 0;

  static updateTotalPrice() {
    const totalPriceElement = document.getElementById("totalPrice");
    totalPriceElement.textContent = this.total.toFixed(2);
  }

  static displayProductsIntoTable(product) {
    const tbody = document.querySelector("tbody");
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${product.id}</td>
      <td>${product.name}</td>
      <td>${product.price.toFixed(2)}</td>
    `;
    tbody.appendChild(row);
  }

  static addProduct(product) {
    this.products.push(product);
    this.total += product.price;
    this.displayProductsIntoTable(product);
    this.updateTotalPrice();
  }

  static clearInputs() {
    document.querySelector("#name").value = "";
    document.querySelector("#price").value = "";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  ProductUi.updateTotalPrice();
});

document.querySelector("#add-product").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.querySelector("#name").value;
  const price = parseFloat(document.querySelector("#price").value);

  if (name === "" || isNaN(price) || price <= 0) {
    alert("Please enter valid product name and price.");
    return;
  }

  const id = ProductUi.products.length + 1; // Simple incremental ID

  const product = new Product(id, name, price);
  ProductUi.addProduct(product);
  ProductUi.clearInputs();
});
