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
        const category = new Category('id', 'name');
    }
}







