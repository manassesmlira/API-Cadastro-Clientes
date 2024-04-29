import prismaClient from "../prisma";

interface DeleCustomerProps{
    id: string;
}

class DeleteCustomerService{
    async execute({id}: DeleCustomerProps){

        if(!id){
            throw new Error("Solicitacao Invalida")
        }

        const findCustomer = await prismaClient.customer.findFirst({
            where:{
                id: id
            }
        })

        if(!findCustomer){
            throw new Error("Cliente nao existe")
        }

        await prismaClient.customer.delete({
            where:{
                id: findCustomer.id
            }
        })

        return {message: "Deletado com sucesso!"}
    }
}

export{ DeleteCustomerService }