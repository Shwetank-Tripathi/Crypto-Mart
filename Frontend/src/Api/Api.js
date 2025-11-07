class Api {
        constructor(url) {
            this.baseUrl = url;
        }
        async getProducts() {
            return await fetch(`${this.baseUrl}/products`).then(r => r.json());
        }
        async makeOrder(productId, deliveryAdderss, transactionAddress, phone) {
            const body = JSON.stringify({ productId, deliveryAdderss, transactionAddress, phone });
            const res = await fetch(`${this.baseUrl}/makeOrder`, {
                method: "POST",
                headers: {
                    'content-type': 'application/json',
                },
                body,
            }).then(r => r.json());

            return res;
        }
    }


const api = new Api(import.meta.env.VITE_BACKEND_URL);

export default api;
