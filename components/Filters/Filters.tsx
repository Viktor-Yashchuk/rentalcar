'use client'

import { useState } from "react";
import { useFilters } from "@/hooks/useFilters";

interface FilterValues {
    brand: string;
    price: string;
    minMileage: string;
    maxMileage: string;
}

interface FiltersProps {
    initialValues: FilterValues;
    onApply: (values: FilterValues) => void;
}

const EMPTY: FilterValues = { brand: "", price: "", minMileage: "", maxMileage: "" };

export default function Filters({initialValues, onApply}: FiltersProps) {
    const [values, setValues] = useState<FilterValues>(initialValues);
    const { data: filtersData, isLoading } = useFilters();
    const brandOptions = filtersData?.brands ?? [];
    const priceOptions: number[] = [];

    if (filtersData?.price) {
        for (let p = filtersData.price.min; p <= filtersData.price.max; p += 10){
            priceOptions.push(p);
        }
    }

    const handleChange = (field: keyof FilterValues) =>
        (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
            setValues((prev) => ({ ...prev, [field]: e.target.value }));
        };
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onApply(values);
    };

    const handleNumericChange = (field: "minMileage" | "maxMileage") =>
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const onlyDigits = e.target.value.replace(/\D/g, "");
            setValues((prev) => ({ ...prev, [field]: onlyDigits }));
        };
    
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="brand">Car brand</label>
            <select
                id="brand" disabled={isLoading}
                value={values.brand}
                onChange={handleChange('brand')}>
                <option value="">Choose a brand</option>
                {brandOptions.map((brand) => (
                    <option key={brand} value={brand}>{brand}</option>
                ))}
            </select>
            <label htmlFor="price">Price/ 1 hour</label>
            <select
                id="price"
                value={values.price}
                onChange={handleChange('price')}>
                <option value="">Choose a price</option>
                {priceOptions.map((price) => (
                    <option key={price} value={price}>${price}</option>
                ))}
            </select>
            <fieldset>
                <legend>Car mileage / km</legend>
                <input
                    id="mileage-from"
                    type="text"
                    inputMode="numeric"
                    aria-label="From"
                    value={values.minMileage}
                    onChange={handleNumericChange('minMileage')}
                    placeholder="From" />
                <input
                    id="mileage-to"
                    type="text"
                    inputMode="numeric"
                    aria-label="To"
                    value={values.maxMileage}
                    onChange={handleNumericChange('maxMileage')}
                    placeholder="To" />
            </fieldset>
            <button type="submit">Search</button>
            <button type="button" onClick={() => { setValues(EMPTY); onApply(EMPTY); }}>
                Reset
            </button>
        </form>
    )
}