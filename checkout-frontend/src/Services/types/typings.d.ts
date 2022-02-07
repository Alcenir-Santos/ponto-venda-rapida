declare namespace API {
    type ProdutosItem ={
        id: number;
        name: string;
        unitMeasure: string;
        unitaryValue: number;
        quantity: number;
        amount: number;
    }
    
    type UserItem ={
        id: number;
        name: string;
        username: string;
        email: string;
        password: string;
    }
}