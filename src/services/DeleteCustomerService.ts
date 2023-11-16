import prismaClient from "../prisma/index";

interface DeleteCustomerProps{
    id: string; //aqui a gente puxa a id do prisma
}

class DeleteCustomerService{
    async execute({ id }: DeleteCustomerProps){ //e aqui a gente faz o {id}'dois pontos' e cita a DeleteCustomerProps
        if(!id){
            throw new Error("Solicitação inválida")
        }
        const findCustomer = await prismaClient.customer.findFirst({
            where: {
                id: id
            }//filtrar dos ids cadastro apenas o id que voce mandou, pra saber qual é pra deletar
        })
        if(!findCustomer){ //se não encontrou o id no find customer, ai esse erro aparece
            throw new Error("Cliente não existe!")
        }
        await prismaClient.customer.delete({ //se encontrou o id no banco então deleta
            where:{
                id: findCustomer.id
            }
        })

        return { message: "deu certoooooooooooooooooooo!!!1!!11!"}
    }

}


export {DeleteCustomerService}