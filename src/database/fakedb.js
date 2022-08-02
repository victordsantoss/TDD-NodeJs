const initialFakeDb = {
    users: [
        {   
            id: 0,
            name: "Victor Samuel dos Santos Lucas",
            email: "victor@gmail.com",
            phone: "+5561900000000",
            birth_date: "08-08-1999",
            status: 1
        },
    ],
    address: [
        {   
            id: 0,
            country: "Brasil",
            state: "DF",
            city: "Brasília",
            address: "SBN Q 1 - Asa Norte, Brasília - DF",
            complement: null
        },
    ]
};


module.exports = initialFakeDb;