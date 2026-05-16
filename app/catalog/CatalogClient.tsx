'use client'

import { getAllCars } from "@/lib/api/api";
import { useInfiniteQuery } from "@tanstack/react-query";
import { CarsResponse, FilterValues, EMPTY_FILTERS } from "@/types/car";
import CarCard from "@/components/CarCard/CarCard";
import styles from './CatalogClient.module.css';
import { useState } from "react";
import Filters from "@/components/Filters/Filters";

export function CatalogClient() {
    const [filters, setFilters] = useState<FilterValues>(EMPTY_FILTERS);
    const {
        data,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        isLoading,
        isError,
    } = useInfiniteQuery<CarsResponse, Error>({
    queryKey: ['cars', filters],
    queryFn: ({ pageParam }) => {
        const min = filters.minMileage ? Number(filters.minMileage) : undefined;
        const max = filters.maxMileage ? Number(filters.maxMileage) : undefined;

        return getAllCars({
            page: pageParam as number,
            perPage: 12,
            brand: filters.brand || undefined,
            price: filters.price ? Number(filters.price) : undefined,
            minMileage: max !== undefined && min === undefined ? 0 : min,
            maxMileage: max,
        });
        },
        
    initialPageParam: 1,
    getNextPageParam: (lastPage) =>
        lastPage.page < lastPage.totalPages ? lastPage.page + 1 : undefined,
});

    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Something went wrong...</p>;

    const cars = data?.pages.flatMap((page) => page.cars) ?? [];

    return (
        <section className="container">
            <Filters initialValues={filters} onApply={setFilters} />
            {cars.length === 0 ? (
                <p>No cars match your filters.</p>
            ) : (
            <ul className={styles.catalogGrid}>
                {cars.map((car) => (
                    <li key={car.id}>
                        <CarCard car={car} />
                    </li>
                ))}
                    </ul>
            )}

            {hasNextPage && (
                <button className={styles.loadMore} type="button" onClick={() => fetchNextPage()}
                    disabled={isFetchingNextPage}>
                    {isFetchingNextPage ? 'Loading...' : 'Load more'}
                </button>
            )}
        </section>
    );
}