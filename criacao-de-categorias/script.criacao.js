class Category {
    constructor (id, name) {
        this.id = id;
        this.name = name;
        this.products = [];
    }
}

class Product {
    constructor (id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }
}

class CategoryService {
    constructor() {
        this.categories = [];
        this.nextCategoryID = 1;
    }

    addCategory(name) {
        const id = this.nextCategoryID ++;
        const category = new Category(id, name);
        this.categories.push(category);
    }
}

class ProductServices {
    constructor() {
        this.products = [];
        this.nextProductId = 0;
    }

    addProduct(name, price, category) {
        const id = this.nextProductId ++;
        const product = new Product(id, name, price, category);
        category.products.push(product);
        this.products.push(product);
    }
}

const categoryList = new CategoryService();
const productList = new ProductServices();

function createCategory() {
    const categoryName = document.getElementById("categoryName").value;

    categoryList.addCategory(categoryName);

    document.getElementById("categoryName").value = "";
}

function createProduct() {
    const productName = document.getElementById("name-product").value;
    const price = document.getElementById("price-product").value;
    const category = categoryList.categories[0];
    let newProduct;

    productList.addProduct(productName, price, category);

    cleanFields();

    newProduct = document.getElementById("list");
    newProduct.classList.remove("style-list");
    newProduct.innerHTML += `
    <div class="style-list2">
    <h1>${productName}</h1>
    <p>Preço: ${price} $</p>
    <p>Categoria: ${category}</p>
    <div id="btn-edit-remove">
    <button type="button" onclick="edit" class="editButton"><i class="fa-solid fa-pencil" style="color: #ffffff;"></i></button>
    <button type="button" onclick="remove" class="removeButton"><i class="fa-solid fa-trash" style="color: #ffffff;"></i></button>
    </div>
    </div>
    <ul class="productsListByCategory">`;

    console.log(productList.products);
    console.log(categoryList);
    console.log(category);
}

function remove() {
    let removeProduct = document.getElementById("list");
    
}

function cleanFields() {
    document.getElementById("name-product").value = "";
    document.getElementById("price-product").value = "";
}