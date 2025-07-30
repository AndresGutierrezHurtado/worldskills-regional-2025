import React from "react";
import { useApi } from "../../hooks/useapi";
import { IdCardIcon, ImageIcon, UploadIcon } from "lucide-react";

export default function TeamManagement() {
    const handleSubmit = async (e) => {
        e.preventDefault();

        const formdata = new FormData(e.target);

        const response = await useApi(
            "POST",
            "/teams",
            formdata,
            true,
            "multipart/form-data"
        );

        if (!response.success) return;

        e.target.reset();
    };

    return (
        <div className="flex flex-col gap-8">
            {/* Title */}
            <h1
                className="text-center text-5xl font-bold z-10"
                style={{ marginTop: "5rem", color: "#f6c235" }}
            >
                Registrar selección
            </h1>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 z-10">
                <fieldset className="w-full flex flex-col gap-2">
                    <label
                        htmlFor="team_name"
                        className="opacity-80 after:content['*'] after:text-red-500 after:ml-1 z-10"
                    >
                        Nombre:
                    </label>
                    <label className="w-full flex items-center gap-2 p-2 rounded border">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="lucide lucide-earth"
                            aria-hidden="true"
                        >
                            <path d="M21.54 15H17a2 2 0 0 0-2 2v4.54" />
                            <path d="M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17" />
                            <path d="M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05" />
                            <circle cx="12" cy="12" r="10" />
                        </svg>
                        <input
                            type="text"
                            name="team_name"
                            id="team_name"
                            className="grow"
                            placeholder="Ingresa el nombre de la selección"
                            title="El campo es requerido"
                            required
                        />
                    </label>
                </fieldset>
                <fieldset className="w-full flex flex-col gap-2">
                    <label
                        htmlFor="team_code"
                        className="opacity-80 after:content['*'] after:text-red-500 after:ml-1 z-10"
                    >
                        Código:
                    </label>
                    <label className="w-full flex items-center gap-2 p-2 rounded border">
                        <IdCardIcon />
                        <input
                            type="text"
                            name="team_code"
                            id="team_code"
                            className="grow"
                            placeholder="Ingresa el código la selección"
                            pattern="[A-Z]{3}"
                            title="El código debe tener 3 letras mayúsculas"
                            minLength={3}
                            maxLength={3}
                            required
                        />
                    </label>
                    <label
                        htmlFor="team_code"
                        className="text-xs opacity-60 font-semibold"
                    >
                        El código debe tener 3 letras mayúsculas
                    </label>
                </fieldset>
                <fieldset className="w-full flex flex-col gap-2">
                    <label
                        htmlFor="team_flag"
                        className="opacity-80 after:content['*'] after:text-red-500 after:ml-1 z-10"
                    >
                        Imagen:
                    </label>
                    <label className="w-full flex items-center gap-2 p-2 rounded border">
                        <ImageIcon size={18} />
                        <input
                            type="file"
                            accept="image/*"
                            name="team_flag"
                            id="team_flag"
                            className="grow"
                            title="El campo es requerido"
                            required
                        />
                    </label>
                    <label
                        htmlFor="team_flag"
                        className="text-xs opacity-60 font-semibold"
                    >
                        La imagen debe pesar máximo 3MB y tener dimensiones
                        500px x 500px
                    </label>
                </fieldset>
                <fieldset className="pt-5">
                    <button
                        className="w-full text-white flex items-center justify-center cursor-pointer gap-2 rounded-lg p-1 active:scale-95 duration-100"
                        style={{ backgroundColor: "#01943b" }}
                    >
                        <UploadIcon size={18} />
                        Enviar
                    </button>
                </fieldset>
            </form>
        </div>
    );
}
