import axios from "axios";
import { BookingPayload, Car, CarsFilters, CarsQueryParams, CarsResponse } from "@/types/car";

export const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL ?? 'https://car-rental-api.goit.study',
});

export const getAllCars = async (params?: CarsQueryParams): Promise<CarsResponse> => {
    const { data } = await api.get<CarsResponse>('/cars', {params});
    return data;
}

export const getCarById = async (carId: string): Promise<Car> => {
    const { data } = await api.get<Car>(`/cars/${carId}`);
    return data;
}

export const getCarsFilters = async (): Promise<CarsFilters> => {
    const { data } = await api.get<CarsFilters>('/cars/filters');
    return data;
}

export const submitBooking = async (carId: string, payload: BookingPayload): Promise<void> => {
    await api.post(`/cars/${carId}/booking-requests`, payload);
};