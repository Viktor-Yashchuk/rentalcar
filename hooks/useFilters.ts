import { getCarsFilters } from "@/lib/api/api";
import { useQuery } from "@tanstack/react-query";


export function useFilters() {
    return useQuery({
        queryKey: ['carsFilters'],
        queryFn: getCarsFilters,
        staleTime: Infinity,
    });
}