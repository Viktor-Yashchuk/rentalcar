'use client'

import { useState } from "react";
import { useFilters } from "@/hooks/useFilters";
import { NumericFormat } from "react-number-format";
import styles from './Filters.module.css'
import { FilterValues, EMPTY_FILTERS } from "@/types/car";
import CustomSelect from "../CustomSelect/CustomSelect";

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

    const brandOptionsList = brandOptions.map((b) => ({ value: b, label: b }));
    const priceOptionsList = priceOptions.map((p) => ({ value: String(p), label: String(p),
    }));
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onApply(values);
    };

    const hasActiveFilters = Boolean(
        values.brand || values.price || values.minMileage || values.maxMileage
    );
    
    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.brandWrap}>
                <label className={styles.label} htmlFor="brand">Car brand</label>
                <CustomSelect
                    id="brand"
                    value={values.brand}
                    isDisabled={isLoading}
                    placeholder="Choose a brand"
                    options={brandOptionsList}
                    onChange={(v) => setValues((prev) => ({ ...prev, brand: v }))}
                />
            </div>
            <div className={styles.priceWrap}>
                <label className={styles.label} htmlFor="price">Price/ 1 hour</label>
                <CustomSelect
                    id="price"
                    value={values.price}
                    isDisabled={isLoading} 
                    placeholder="Choose a price"
                    options={priceOptionsList}
                    onChange={(v) => setValues((prev) => ({ ...prev, price: v }))}
                    formatOptionLabel={(option, meta) =>
                        meta.context === "value" ? `$${option.label}` : option.label
                    }
                />
            </div>
            <fieldset className={styles.mileageGroup}>
                <legend className={styles.legend}>Car mileage / km</legend>
                <div className={styles.mileageBox}>
                    <div className={styles.mileageHalf}>
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
                    <div className={styles.divider} aria-hidden="true" />
                    <div className={styles.mileageHalf}>
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
                </div>
            </fieldset>
            <div className={styles.btnWrap}>
                <button type="submit" className={styles.searchBtn}>
                    Search
                </button>
                {hasActiveFilters && (
                    <button
                        type="button"
                        className={styles.clearBtn}
                        onClick={() => {
                            setValues(EMPTY_FILTERS);
                            onApply(EMPTY_FILTERS);
                        }}
                    >
                        Clear filters
                    </button>
                )}
            </div>
        </form>
    )
}
