'use client'

import { submitBooking } from "@/lib/api/api";
import { useMutation } from "@tanstack/react-query";
import { useForm, type SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import styles from './RentForm.module.css';
import { BookingPayload } from "@/types/car";

interface RentFormValues {
    name: string;
    email: string;
    comment?: string;
}

interface RentFormProps {
    carId: string;
}

export default function RentForm({ carId }: RentFormProps) {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<RentFormValues>({ mode: 'onBlur' });

    const mutation = useMutation({
        mutationFn: (payload: BookingPayload) => submitBooking(carId, payload),
        onSuccess: () => {
            toast.success("Booking request sent! We'll contact you soon.");
            reset();
        },
    });

    const onSubmit: SubmitHandler<RentFormValues> = (values) => {
        const payload: BookingPayload = {
            name: values.name,
            email: values.email,
        };

        if (values.comment?.trim()) {
            payload.comment = values.comment.trim();
        }
        mutation.mutate(payload);
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)} noValidate>
            <h2>Book your car now</h2>
            <p>Stay connected! We are always ready to help you.</p>
            <input
                type="text"
                placeholder="Name*"
                aria-invalid={Boolean(errors.name)}
                {...register("name", {
                    required: "Please enter your name",
                    minLength: { value: 2, message: "Min 2 characters" },
                })}
            />
            {errors.name && <span className={styles.error}>{errors.name.message}</span>}

            <input
                type="email"
                placeholder="Email*"
                aria-invalid={Boolean(errors.email)}
                {...register("email", {
                    required: "Please enter your email",
                    pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Invalid email"
                    },
                })}
            />
            {errors.email && <span className={styles.error}>{errors.email.message}</span>}
            
            <textarea
                placeholder="Comment"
                rows={3}
                {...register("comment", { maxLength: 500 })}
            />

            <button type="submit" disabled={mutation.isPending}>
                {mutation.isPending ? "Sending..." : "Send"}
            </button>
        </form>
    );
}


