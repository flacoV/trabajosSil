'use client';

import {useRef} from "react";
import {createClient} from "@/lib/actions/clientActions";

export default function CreateClientForm() {
    const formRef = useRef<HTMLFormElement>(null);
    return (
        <div>
            <form
                ref={formRef}
                action={async (FormData) => {
                    formRef.current?.reset();
                    await createClient(FormData);
                }}
                className={'flex flex-col gap-1'} method={'POST'}
            >
                <input type="text" name={"name"} placeholder={"name"}/>
                <input type="text" name={"phone"} placeholder={"phone"}/>
                <input type="text" name={"email"} placeholder={"email"}/>
                <input type="submit" value={'Agregar Client'} className={'text-white'}/>
            </form>
        </div>
    )
}