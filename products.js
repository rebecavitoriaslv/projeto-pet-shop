const products = [
    { name: "Ração para Cachorro", category: "Rações", price: 79.90, img: "img/racao.jpg" },
    { name: "Coleira para Cachorro", category: "Acessórios", price: 39.90, img: "img/coleira-cachorro.jpg" },
    { name: "Brinquedos para Cachorro", category: "Brinquedos", price: 29.90, img: "img/dog-toys.jpg" },
    { name: "Caminha para Cachorro", category: "Acessórios", price: 149.90, img: "img/caminha-cachorro.jpg" },
    { name: "Almofada Soneca", category: "Acessórios", price: 160.90, img: "img/caminha-cachorro2.jpg" },
    { name: "Casinha para Cachorro", category: "Acessórios", price: 200.90, img: "img/casinha-cachorro.jpg" },
    { name: "Casinha para Cachorro Camp", category: "Acessórios", price: 250.90, img: "img/casinha-cachorro2.jpg" },
    { name: "Coleira Patinhas", category: "Acessórios", price: 20.90, img: "img/coleira.jpg" },
    { name: "Coleira Gatinha", category: "Acessórios", price: 25.90, img: "img/coleira-sino.jpg" },
    { name: "Tigela AuAu", category: "Acessórios", price: 85.90, img: "img/tigela-cachorro2.jpg" },
    { name: "Tigela Bigodinho de Leite", category: "Acessórios", price: 80.90, img: "img/tigela-gato.jpg" },
    { name: "Tigela Fish", category: "Acessórios", price: 23.90, img: "img/tigela-gato2.jpg" },
    { name: "Tigela Meow", category: "Acessórios", price: 45.90, img: "img/tigela-gato3.jpg" },
    { name: "Coleira-gravatinha Girls", category: "Acessórios", price: 62.90, img: "img/coleira2.jpg" },
    { name: "Toquinhas AuKiMia Pets", category: "Acessórios", price: 22.90, img: "img/touquinhas.jpg" },
    { name: "Coleira Lady Dog Girl", category: "Acessórios", price: 84.90, img: "img/coleira3.jpg" },
    { name: "Tigela para Cachorro", category: "Acessórios", price: 29.90, img: "img/tigela-cachorro.jpg" },
    { name: "Caixa-Areia de Gato", category: "Acessórios", price: 50.90, img: "img/caixa-areia.jpg" },
    { name: "Saco de areia pipi de Gato", category: "Acessórios", price: 90.00, img: "img/saco-areia-gato.jpg" },
    { name: "Areia pips do Gatinho", category: "Acessórios", price: 30.90, img: "img/saco-areia-gato2.jpg" },
    { name: "Ossinho para Cachorro", category: "Rações", price: 12.90, img: "img/ossinho-cachorro.jpg" },
    { name: "Comidinhas para Cachorro", category: "Rações", price: 15.00, img: "img/comidinhas-cachorro.jpg" },
    { name: "Ração para Cachorro", category: "Rações", price: 70.90, img: "img/racao2.jpg" },
    { name: "Saco de ração Pet", category: "Rações", price: 120.90, img: "img/racao3.jpg" },
    { name: "Ração para Gato", category: "Rações", price: 80.90, img: "img/racao4.jpg" },
    { name: "Ração Ronronar", category: "Rações", price: 100.90, img: "img/racao-gato.jpg" },
    { name: "Ração Felino", category: "Rações", price: 95.90, img: "img/racao-gato2.jpg" },
    { name: "Ração AdeDOG", category: "Rações", price: 75.90, img: "img/racao5.jpg" }
];

function displayProducts(filteredProducts) {
    const productsSection = document.getElementById('products-list');
    productsSection.innerHTML = filteredProducts.map(product => `
        <div class="product">
            <div class="product-image">
                <img src="${product.img}" alt="${product.name}">
            </div>
            <h2>${product.name}</h2>
            <p class="price">R$ ${product.price.toFixed(2)}</p>
            <button class="buy-btn">Comprar</button>
        </div>
    `).join('');
}

function filterProducts(category) {
    const filteredProducts = category === 'Todas'
        ? products
        : products.filter(product => product.category === category);
    
    displayProducts(filteredProducts);
}

// Exibe todos os produtos por padrão
displayProducts(products);
