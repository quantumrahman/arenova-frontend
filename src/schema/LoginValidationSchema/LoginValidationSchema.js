import { z } from 'zod';

const loginValidationSchema = z.object({
    email: z
        .string({ error: 'Email is required!' })
        .trim()
        .min(1, { error: 'Email is required!' })
        .pipe(z.email({ error: 'Invalid email!' })),
    password: z
        .string({ error: 'Password is required!' })
        .min(1, { error: 'Password is required' }),
});

export default loginValidationSchema;
