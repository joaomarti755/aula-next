import { z } from 'zod';

export const zodValidation = z.object({
    nome: z.string()
        .min(1, { message: 'Nome é obrigatório' })
        .min(3, { message: 'Nome deve ter no máximo 3 caracteres' })
})