import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Swal from "sweetalert2";

const API_URL = "http://localhost:8000/api";

async function useFetch(
    method,
    endpoint,
    body = null,
    contentType = "application/json"
) {
    try {
        const options = {
            headers: {
                "Content-type": contentType,
                Accept: "application/json",
            },
            method,
        };

        if (contentType === "multipart/form-data") {
            delete options.headers;
        }

        if (body) {
            options.body =
                contentType === "multipart/form-data"
                    ? body
                    : JSON.stringify(body);
        }

        const response = await fetch(API_URL + endpoint, options);
        const data = await response.json();

        return data;
    } catch (error) {
        console.error(error);
        return {
            success: !1,
            message: "Hubo un error al hacer la petición: " + error.message,
        };
    }
}
export function useGetData(endpoint) {
    const pathname = useLocation().pathname;

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(!0);
    const [trigger, setTrigger] = useState(!0);

    const reload = () => setTrigger((prev) => !prev);

    useEffect(() => {
        (async () => {
            const response = await useFetch("get", endpoint);
            if (response) setLoading(!1);
            setData(response);
        })();
    }, [endpoint, trigger, pathname]);

    return { data: data?.data, total: data?.total, loading, reload };
}
export async function useApi(
    method,
    endpoint,
    body = null,
    notify = !0,
    contentType = "application/json"
) {
    try {
        const response = await useFetch(method, endpoint, body, contentType);

        if (notify) {
            Swal.fire({
                title: response.message,
                icon: response.success ? "success" : "error",
                timer: 1500,
            });
        }

        return response;
    } catch (error) {
        console.error(error);

        if (notify) {
            Swal.fire({ title: error.message, icon: "error", timer: 1500 });
        }

        return {
            success: !1,
            message: "Hubo un error al hacer la petición: " + error.message,
        };
    }
}
