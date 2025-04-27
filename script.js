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
          categoryClick();
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

          // Update button styles
          filterButtons.forEach((b) => {
            b.classList.remove("bg-blue-700", "text-white");
            b.classList.add("bg-white", "text-base");
          });
          btn.classList.add("bg-blue-700", "text-white");
          btn.classList.remove("bg-white", "text-base");

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