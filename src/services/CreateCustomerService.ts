import prismaClient from "../prisma";

interface CreateCustomerProps{
    name: string;
    email: string;
}

class CreateCustomerService{
    async execute({name, email}: CreateCustomerProps){

       if(!name || !email) {
        throw new Error("Preencha todos os campos")
       }

       const custumer = await prismaClient.customer.create({
        data:{
            name,
            email,
            status: true
        }
       })

        return custumer
        
    }
}

export { CreateCustomerService }