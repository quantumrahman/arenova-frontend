import { z } from 'zod';

const registerValidationSchema = z.object({
    name: z
        .string({ error: 'Name is required!' })
        .trim()
        .min(1, { error: 'Name is required!' })
        .pipe(z.string().min(2, { error: 'Name at least 2 chars!' })),
    photo: z
        .string({ error: 'Photo is required!' })
        .trim()
        .min(1, { error: 'Photo is required!' })
        .pipe(z.url({ error: 'Invalid URL!' })),
    email: z
        .string({ error: 'Email is required!' })
        .trim()
        .min(1, { error: 'Email is required!' })
        .pipe(z.email({ error: 'Invalid email!' })),
    password: z
        .string({ error: 'Password is required!' })
        .min(1, { error: 'Password is required:' })
        .pipe(
            z
                .string()
                .min(8, { error: 'Password must be 8+ chars' })
                .regex(/[A-Z]/, { error: 'Need 1 uppercase!' })
                .regex(/(?:.*[a-z]){2}/, { error: 'Need 2 lowercase!' })
                .regex(/\d/, { error: 'Need 1 digit!' })
                .regex(/[^A-Za-z0-9]/, { error: 'Need 1 special char!' })
        ),
});

export default registerValidationSchema;
