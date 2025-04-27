function productList() {
    return {
      products: [],
      visibleCount: 8,
      categories: [],
      error: '',
      
      get visibleProducts() {
        return this.products.slice(0, this.visibleCount);
      },
  
      async loadProducts() {
        try {
          const res = await fetch('https://dummyjson.com/products?limit=100');
          const data = await res.json();
          this.products = data.products;
          categoryClick(); // Still your category system
        } catch (err) {
          this.error = 'Failed to load products.';
          console.error(err);
        } 
      },
  
      async loadCategories() {
        try {
          const res = await fetch('https://dummyjson.com/products/categories');
          const data = await res.json();
          this.categories = data;
        } catch (err) {
          this.error = 'Failed to load categories.';
          console.error(err);
        } 
      },
  
      loadMore() {
        this.visibleCount += 8;
      }
    }
  }
  