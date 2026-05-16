'use client'

import { useState } from "react";
import { useFilters } from "@/hooks/useFilters";
import { NumericFormat } from "react-number-format";
import styles from './Filters.module.css'
import { FilterValues, EMPTY_FILTERS } from "@/types/car";

interface FiltersProps {
    initialValues: FilterValues;
    onApply: (values: FilterValues) => void;
}

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
                <div className={styles.inputWrap}>
                    <span className={styles.prefix}>From</span>
                    <NumericFormat
                        isAllowed={(values) => values.value.length <= 6}
                        thousandSeparator=","
                        allowNegative={false}
                        decimalScale={0}
                        value={values.minMileage}
                        onValueChange={(v) =>
                            setValues((prev) => ({ ...prev, minMileage: v.value }))
                        }
                        id="mileage-from"
                        aria-label="Mileage from"
                        className={styles.input}
                    />
                </div>
                <div className={styles.inputWrap}>
                    <span className={styles.prefix}>To</span>
                    <NumericFormat
                        isAllowed={(values) => values.value.length <= 6}
                        thousandSeparator=","
                        allowNegative={false}
                        decimalScale={0}
                        value={values.maxMileage}
                        onValueChange={(v) =>
                            setValues((prev) => ({ ...prev, maxMileage: v.value }))
                        }
                        id="mileage-to"
                        aria-label="Mileage to"
                        className={styles.input}
                    />
                </div>
            </fieldset>
            <button type="submit">Search</button>
            <button type="button" onClick={() => { setValues(EMPTY_FILTERS); onApply(EMPTY_FILTERS); }}>
                Reset
            </button>
        </form>
    )
}