'use server';

import Client from "@/models/clientModel";
import { revalidatePath } from "next/cache";
import {connectToMongoDB} from "@/lib/db";

export const createClient = async (formData: FormData) => {
    await connectToMongoDB();
    const name = formData.get("name");
    const phone = formData.get("phone");
    const email = formData.get("email");
    try {
        const newClient = await Client.create({
            name,
            phone,
            email,
        });
        await newClient.save();
        revalidatePath("/");
        return newClient.toString();
    } catch (error) {
        console.log(error);
        return {message: 'error creating client'};
    }
};

export const deleteClient = async (id: FormData) => {
    const todoId = id.get("id");
    try {
        await Client.deleteOne({_id: todoId});
        revalidatePath("/");
        return ('todo deleted');
    } catch (error) {
        return {message: 'error deleting client'};
    }
}