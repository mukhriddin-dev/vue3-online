import { reactive } from "vue";


export function useFetch() {


    const state = reactive({
        isPending: true,
        isError: '',
        data: null,
    });

    async function useQuery<T>(URL: string): Promise<T | void> {
        try {
            const req = await fetch(URL);
            state.data = await req.json();
            state.isPending = false;
            console.log(req)

            if (!req.ok) {
                state.isError = "Error fetching data..."
                throw new Error(req.statusText);
            }
        } catch (err: any) {

            state.isError = err
        }
        finally {
            console.log("fetching... Finished")
        }
    }


    return {
        state,
        useQuery,
    }

}