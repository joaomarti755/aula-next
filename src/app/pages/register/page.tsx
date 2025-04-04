"use client"

import React, { useState } from "react";
import { zodValidation } from "@/utilities/zodvalidation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import { IMaskInput } from "react-imask";
import { handleAdd } from "../../../utilities/handleactions";
import { toast, Toaster } from 'react-hot-toast';

type FormData = {
    nome: string;
    email: string;
    cpf: string;
    telefone?: string;
};

export default function Register() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    
    const { control, register, handleSubmit, formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(zodValidation),
        defaultValues: { nome: "", email: "", cpf: "", telefone: "" },
    });

    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true);
        try {
            const response = await handleAdd(data);

            if (response) {
                toast.success("Cadastro realizado com sucesso!", {
                duration: 3000,
                position: "top-center",
                });
            }
            else {
                toast.error("Erro ao cadastrar, tente novamente.", {
                duration: 3000,
                position: "top-center",
                });
            }
            console.log("Resposta do Firebase:", response);
        } catch (error) {
            console.error("Erro ao adicionar o documento:", error);
        } finally {
            setIsSubmitting(false);
        }

    }

    return (
        <div className="container py-12 px-4 items-center h-screen">
            <Toaster position="top-right" reverseOrder={false} />
            <h1 className='text-4xl font-bold mb-6 text-center'>CADASTRE-SE</h1>
            <form className="flex flex-col bg-white shadow-md rounded-lg p-6 mx-auto w-full max-w-md" onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="Nome" className="border-2 border-blue-900 rounded-lg p-2 mt-2 w-full"
                    {...register("nome")} />
                {errors.nome && <span className="text-red-500">{errors.nome.message}</span>}
                <input type="text" placeholder="Email" className="border-2 border-blue-900 rounded-lg p-2 mt-2 w-full"
                    {...register("email")} />
                {errors.email && <span className="text-red-500">{errors.email.message}</span>}
    
                <Controller
                    control={control}
                    name="cpf"
                    render={({ field }) => (
                        <IMaskInput
                            {...field}
                            mask="000.000.000-00"
                            placeholder="CPF"
                            className="border-2 border-blue-900 rounded-lg p-2 mt-2 w-full"
                        />
                    )}
                />
    
                {errors.telefone && <span className="text-red-500">{errors.telefone.message}</span>}
    
                <Controller
                    control={control}
                    name="telefone"
                    render={({ field }) => (
                        <IMaskInput
                            {...field}
                            mask="(00) 00000-0000"
                            placeholder="Telefone"
                            className="border-2 border-blue-900 rounded-lg p-2 mt-2 w-full"
                        />
                    )}
                />
    
                {errors.telefone && <span className="text-red-500">{errors.telefone.message}</span>}
    
                <button type="submit" className="bg-blue-900 text-white rounded-lg p-2 mt-4">
                    {isSubmitting ? "Cadastrando..." : "Cadastrar"}
                </button>
            </form>
        </div>
    );
}