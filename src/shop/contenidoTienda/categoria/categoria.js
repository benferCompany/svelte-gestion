export const categorias = [
    {
        "id": 1,
        "name": "Electricidad",
        "parentCategory": null,
        "subCategories": [
            {
                "id": 2,
                "name": "Termicas",
                "parentCategory": {
                    "id": 1,
                    "name": "Electricidad",
                    "parentCategory": null,
                    "subCategories": [],
                    "products": [{
                        "id": 1,
                        "idInternal": "1pro",
                        "title": "Tornillo autoperforante 14x2",
                        "description": "tornillo autoperforante 14x2 para techo",
                        "cost_price": 123.0,
                        "selling_price": 123.0,
                        "stores": [],
                        "image": "imgs/1.jpg",
                        "creation_date": null,
                        "storeSuppliers": []
                    }]
                },
                "subCategories": [],
                "products": []
            }
        ],
        "products": [{
            "id": 2,
            "idInternal": "1pro",
            "title": "Tornillo autoperforante 14x2",
            "description": "tornillo autoperforante 14x2 para techo",
            "cost_price": 123.0,
            "selling_price": 123.0,
            "stores": [],
            "image": "imgs/1.jpg",
            "creation_date": null,
            "storeSuppliers": []
        }]
    },

    {

        "name": "Termicas",
        "parentCategory": {
            "id": 3,
            "name": "Electricidad",
            "parentCategory": null,
            "subCategories": [
                {
                    "id": 2,
                    "name": "Termicas",
                    "parentCategory": {
                        "id": 1,
                        "name": "Electricidad",
                        "parentCategory": null,
                        "subCategories": [],
                        "products": [{
                            "id": 1,
                            "idInternal": "1pro",
                            "title": "Tornillo autoperforante 14x2",
                            "description": "tornillo autoperforante 14x2 para techo",
                            "cost_price": 123.0,
                            "selling_price": 123.0,
                            "stores": [],
                            "image": "imgs/1.jpg",
                            "creation_date": null,
                            "storeSuppliers": []
                        }]
                    },
                    "subCategories": [],
                    "products": []
                }
            ],
            "products": [{
                "id": 1,
                "idInternal": "1pro",
                "title": "Tornillo autoperforante 14x2",
                "description": "tornillo autoperforante 14x2 para techo",
                "cost_price": 123.0,
                "selling_price": 123.0,
                "stores": [],
                "image": "imgs/1.jpg",
                "creation_date": null,
                "storeSuppliers": []
            }]
        },
        "subCategories": [],
        "products": [{
            "id": 1,
            "idInternal": "1pro",
            "title": "Tornillo autoperforante 14x2",
            "description": "tornillo autoperforante 14x2 para techo",
            "cost_price": 123.0,
            "selling_price": 123.0,
            "stores": [],
            "image": "imgs/1.jpg",
            "creation_date": null,
            "storeSuppliers": []
        }]
    }
]


export const products = [
    {
        "id": 1,
        "idInternal": "1pro",
        "title": "Tornillo autoperforante 14x2",
        "description": "tornillo autoperforante 14x2 para techo",
        "cost_price": 123.0,
        "selling_price": 123.0,
        "stores": [],
        "image": "imgs/1.jpg",
        "creation_date": null,
        "storeSuppliers": [],
        "categories" :[
            
        ]
    },
    {
        "id": 2,
        "idInternal": "1pro",
        "title": "Tornillo autoperforante 14x2",
        "description": "tornillo autoperforante 14x2 para techo",
        "cost_price": 123.0,
        "selling_price": 123.0,
        "stores": [],
        "image": "imgs/1.jpg",
        "creation_date": null,
        "storeSuppliers": [],
        "categories" :[
            {
                "id": 1,
                "name": "Termicas",
                            
            }
        ]
    },
    {
        "id": 3,
        "idInternal": "1pro",
        "title": "Tornillo autoperforante 14x2",
        "description": "tornillo autoperforante 14x2 para techo",
        "cost_price": 123.0,
        "selling_price": 123.0,
        "stores": [],
        "image": "imgs/1.jpg",
        "creation_date": null,
        "storeSuppliers": [],
        "categories" :[
            {
                "id": 1,
                "name": "Electricidad",
                            
            }
        ]
    }
]