import { z } from 'zod';

const createValidationSchema = z.object({
    facility_name: z
        .string({ error: 'Facility name is required!' })
        .trim()
        .min(1, { error: 'Facility name is required!' })
        .max(100, { error: 'Facility name less than 100 characters!' }),
    facility_type: z
        .string({ error: 'Facility type is required!' })
        .min(1, 'Facility type is required!')
        .pipe(
            z.enum(
                [
                    'football-turf',
                    'cricket-turf',
                    'badminton-court',
                    'tennis-court',
                    'basketball-court',
                    'marathon-track',
                    'swimming-pool',
                ],
                {
                    message: 'Please select a facility type',
                }
            )
        ),
    description: z
        .string({ error: 'Description is required!' })
        .trim()
        .min(1, { error: 'Description is required!' })
        .pipe(z.string().min(10, { error: 'Description must be at least 10 characters' })),
    location: z.string({ error: 'Location is required!' }).trim().min(1, 'Location  is required!'),
    capacity: z
        .string({ error: 'Capacity is required!' })
        .min(1, 'Capacity is required!')
        .pipe(z.string().regex(/^\d+$/, 'Capacity must be a valid number')),
    image: z
        .string({ error: 'Image is required!' })
        .trim()
        .min(1, { error: 'Image is required!' })
        .pipe(z.url({ error: 'Invalid URL!' })),
    price: z
        .string({ error: 'Price per hour is required!' })
        .min(1, 'Price is required!')
        .pipe(z.string().regex(/^\d+$/, 'Price must be a valid number')),
    available_slots: z
        .string({ error: 'Available time is required!' })
        .trim()
        .min(1, { error: 'Available time is required!' }),
});

export default createValidationSchema;
