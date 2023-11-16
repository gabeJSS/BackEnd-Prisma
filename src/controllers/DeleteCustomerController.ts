import { FastifyRequest, FastifyReply } from "fastify";
import { DeleteCustomerService } from '../services/DeleteCustomerService'

class DeleteCustomerController{
    async handle(request: FastifyRequest, reply: FastifyReply){
        const { id } = request.query as { id:string } // aqui ele pega o id que esta escrito na query, no thunderclient na aba query vc põe primeiro id e dps o id q vc quer deletar

        const CustomerService = new DeleteCustomerService();

        const customer = await CustomerService.execute({ id })

        reply.send(customer);
    }
}

export { DeleteCustomerController }