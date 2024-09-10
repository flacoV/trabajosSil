import CreateClientForm from "@/components/client/CreateClientForm";
import ClientModel from "@/models/clientModel";
import {deleteClient} from "@/lib/actions/clientActions";

export default async function ClientPage() {
    const clients = await ClientModel.find()

    return (
        <div>
            <CreateClientForm />
            <div className={'flex flex-col text-white'}>
                {clients.map(
                    client => {
                        return <div key={client._id} className={'flex flex-row w-full'}>
                            <span>{client.name}</span>
                            <span>{client.phone}</span>
                            <span>{client.email}</span>
                            <form action={deleteClient}>
                                <input
                                    hidden
                                    type="text"
                                    name="id"
                                    defaultValue={client._id.toString()}
                                />
                                <button className="border rounded p-2 bg-red-400">
                                    delete
                                </button>
                            </form>
                        </div>
                    }
                )}
            </div>
        </div>
    )
}