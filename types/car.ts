export interface Car {
    id: string;
    year: number;
    brand: string;
    model: string;
    type: string;
    img: string;
    description: string;
    fuelConsumption: number;
    engine: string;
    features: string[];
    rentalPrice: string;
    rentalCompany: string;
    location: {
        country: string;
        city: string;
        address: string;
    };
    rentalConditions: string[];
    mileage: number;
    stockNumber: number;
}

export interface CarsResponse {
    cars: Car[];
    totalCars: number;
    page: number;
    perPage: number;
    totalPages: number;
}

export interface CarsQueryParams {
    brand?: string;
    price?: number;
    minMileage?: number;
    maxMileage?: number;
    page?: number;
    perPage?: number;
}

export interface CarsFilters {
    brands: string[];
    price: {
        min: number;
        max: number;
    };
}

export interface BookingPayload {
    name: string;
    email: string;
    comment?: string;
}

export interface FilterValues {
    brand: string;
    price: string;
    minMileage: string;
    maxMileage: string;
}

export const EMPTY_FILTERS: FilterValues = {
    brand: "",
    price: "",
    minMileage: "",
    maxMileage: ""
};