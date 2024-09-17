<template>
  <div class="container mt-5">
    <h2 class="text-center mb-4">Product List</h2>
    <div class="row">
      <div v-for="product in products" :key="product.id" class="col-md-4 mb-4">
        <div class="card h-100 shadow-sm">
          <img :src="product.image" class="card-img-top" :alt="product.title" />
          <div class="card-body">
            <h5 class="card-title">{{ product.title }}</h5>
            <p class="card-text">{{ product.category }}</p>
            <p class="text-muted">{{ formatCurrency(product.price) }}</p> <!-- Método en lugar de filtro -->
            <div class="d-flex justify-content-between align-items-center">
              <span class="badge bg-primary">{{ product.rating.rate }} ★</span>
              <small class="text-muted">{{ product.rating.count }} reviews</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'listProducts',
  data() {
    return {
      products: [],
    };
  },
  mounted() {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => {
        this.products = data;
      });
  },
  methods: {
    // Método para formatear el precio como moneda
    formatCurrency(value) {
      return '$' + parseFloat(value).toFixed(2);
    },
  },
};
</script>

<style scoped>
.card-title {
  font-size: 1.1rem;
  font-weight: bold;
}
.card-text {
  font-size: 0.9rem;
  color: #555;
}
.badge {
  font-size: 0.8rem;
}
</style>
