function productList() {
    return {
      products: [],
      categories: [],
      error: '',
      async loadProducts() {
        try {
          const res = await fetch('https://dummyjson.com/products?limit=100');
          const data = await res.json();
          this.products = data.products;
          categoryClick();
        } catch (err) {
          this.error = 'Failed to load products.';
          console.error(err);
        } 
       },
      //'https://dummyjson.com/products/categories'
      async loadCategories() {
        try {
          const res = await fetch('https://dummyjson.com/products/categories');
          const data = await res.json();
          this.categories = data;
        } catch (err) {
          this.error = 'Failed to load categories.';
          console.error(err);
        } 
      }
    }
}

function categoryClick() {
    const filterButtons = document.querySelectorAll(".filter-btn");
    
    filterButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
            
            const filter = btn.getAttribute("data-filter");
            
            // Filter items
            const galleryItems = document.querySelectorAll(".gallery-item");
            // console.log(galleryItems);
            galleryItems.forEach((item) => {
              if (filter === "all" || item.classList.contains(filter)) {
                item.classList.remove("hidden");
              } else {
                item.classList.add("hidden");
              }
            });
        });
    });
}