import { useQuery,UseQueryOptions } from "@tanstack/react-query";
const API_URL = 'https://bikeindex.org/api/v3';
const onError = () => Promise.reject('An error has occurred. Please try again ')
const fetcher = async (url:string, options?:RequestInit) =>{
   try {
    const res = await  fetch(`${API_URL}${url}`,{
    method:'get',
    ...options
   })
   if(!res.ok){
    console.error(res)
    onError();
    
   }
   return await res.json()
   } catch (error) {
    console.error(error);
     onError();
   }
}

export const useFetch = (queryName:string,path:string, queryConfig?:Omit<UseQueryOptions<any, unknown, any, string[]>, "initialData" | "queryFn" | "queryKey"> & { initialData?: (() => undefined) | undefined; }) =>{

    return useQuery([queryName], () => fetcher(path),queryConfig);
}


