import { db } from "@/app/lib/firebaseconfig";
import { collection, addDoc } from "firebase/firestore";

type FormData = {
    nome: string;
    email: string;
    cpf: string;
    telefone?: string;
};

const COLLECTION_NAME = "usuarios";

export const handleAdd = async (data: FormData) => {
    try {
        const docRef = await addDoc(collection(db, COLLECTION_NAME), data)
        console.log("Documento registrado com o ID: ", docRef.id);
        return docRef.id;
    } catch (e) {
        console.error("Erro ao adicionar documento: ", e);
        return null;
    }
}