import React from "react";
import { useApi, useGetData } from "../../hooks/useapi";
import LoadingComponent from "../../components/LoadingComponent";
import {
    ArrowUpIcon,
    CalendarIcon,
    ClockIcon,
    UploadIcon,
    UserIcon,
} from "lucide-react";

export default function ResultManagement() {
    const { data: teams, loading: teamsLoading } = useGetData("/teams");

    if (teamsLoading) return <LoadingComponent />;

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formdata = new FormData(e.target);
        const data = Object.fromEntries(formdata);

        const response = await useApi("POST", "/plays", data);

        if (!response.success) return;

        e.target.reset();
    };

    return (
        <div className="flex flex-col gap-8">
            {/* Title */}
            <h1
                className="text-center text-5xl text-yellow-500 font-bold"
                style={{ marginTop: "5rem" }}
            >
                Registrar resultado
            </h1>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="flex gap-2 w-full">
                    <fieldset className="w-full flex flex-col gap-2">
                        <label
                            htmlFor="play_date"
                            className="opacity-80 after:content['*'] after:text-red-500 after:ml-1"
                        >
                            Fecha:
                        </label>
                        <label className="w-full flex items-center gap-2 p-2 rounded border">
                            <CalendarIcon size={18} />
                            <input
                                type="date"
                                name="play_date"
                                id="play_date"
                                className="grow"
                                placeholder="Ingresa la fecha del partido"
                                title="El campo es requerido"
                                required
                            />
                        </label>
                    </fieldset>
                    <fieldset className="w-full flex flex-col gap-2">
                        <label
                            htmlFor="play_start"
                            className="opacity-80 after:content['*'] after:text-red-500 after:ml-1"
                        >
                            Hora:
                        </label>
                        <label className="w-full flex items-center gap-2 p-2 rounded border">
                            <ClockIcon size={18} />
                            <input
                                type="time"
                                name="play_start"
                                id="play_start"
                                className="grow"
                                placeholder="Ingresa la hora de inicio del partido"
                                title="El campo es requerido"
                                required
                            />
                        </label>
                    </fieldset>
                </div>
                <hr className="my-2" />
                <fieldset className="w-full flex flex-col gap-2">
                    <label
                        htmlFor="local_id"
                        className="opacity-80 after:content['*'] after:text-red-500 after:ml-1"
                    >
                        Equipo local:
                    </label>
                    <label className="w-full flex items-center gap-2 p-2 rounded border">
                        <UserIcon size={18} />
                        <select
                            name="local_id"
                            id="local_id"
                            className="w-full"
                            title="El capo es requerido"
                            required
                        >
                            <option value="" disabled selected>
                                Selecciona el equipo local
                            </option>
                            {teams.map((t) => (
                                <option key={t.team_id} className="text-black" value={t.team_id}>
                                    {t.team_name} ({t.team_code})
                                </option>
                            ))}
                        </select>
                    </label>
                </fieldset>
                <fieldset className="w-full flex flex-col gap-2">
                    <label
                        htmlFor="local_goals"
                        className="opacity-80 after:content['*'] after:text-red-500 after:ml-1"
                    >
                        Goles:
                    </label>
                    <label className="w-full flex items-center gap-2 p-2 rounded border">
                        <ArrowUpIcon size={18} />
                        <input
                            type="number"
                            name="local_goals"
                            id="local_goals"
                            className="grow"
                            placeholder="Ingresa los goles del equipo local"
                            title="El campo es requerido"
                            required
                        />
                    </label>
                </fieldset>
                <div className="flex flex-wrap gap-2 w-full">
                    <fieldset className="grow flex flex-col gap-2">
                        <label
                            htmlFor="local_red"
                            className="opacity-80 after:content['*'] after:text-red-500 after:ml-1"
                        >
                            Tarjetas rojas:
                        </label>
                        <label className="grow flex items-center gap-2 p-2 rounded border">
                            <ArrowUpIcon size={18} />
                            <input
                                type="number"
                                name="local_red"
                                id="local_red"
                                className="grow"
                                placeholder="Ingresa las tarjetas rojas recibidas"
                                title="El campo es requerido"
                                required
                            />
                        </label>
                    </fieldset>

                    <fieldset className="grow flex flex-col gap-2">
                        <label
                            htmlFor="local_yellow"
                            className="opacity-80 after:content['*'] after:text-red-500 after:ml-1"
                        >
                            Tarjetas amarillas:
                        </label>
                        <label className="grow flex items-center gap-2 p-2 rounded border">
                            <ArrowUpIcon size={18} />
                            <input
                                type="number"
                                name="local_yellow"
                                id="local_yellow"
                                className="grow"
                                placeholder="Ingresa las tarjetas amarillas recibidas"
                                title="El campo es requerido"
                                required
                            />
                        </label>
                    </fieldset>
                </div>
                <hr className="my-2" />
                <fieldset className="w-full flex flex-col gap-2">
                    <label
                        htmlFor="team_id"
                        className="opacity-80 after:content['*'] after:text-red-500 after:ml-1"
                    >
                        Equipo visitante:
                    </label>
                    <label className="w-full flex items-center gap-2 p-2 rounded border">
                        <UserIcon size={18} />
                        <select
                            name="team_id"
                            id="team_id"
                            className="w-full"
                            title="El capo es requerido"
                            required
                        >
                            <option value="" disabled selected>
                                Selecciona el equipo visitante
                            </option>
                            {teams.map((t) => (
                                <option key={t.team_id} value={t.team_id} className="text-black">
                                    {t.team_name} ({t.team_code})
                                </option>
                            ))}
                        </select>
                    </label>
                </fieldset>
                <fieldset className="w-full flex flex-col gap-2">
                    <label
                        htmlFor="team_goals"
                        className="opacity-80 after:content['*'] after:text-red-500 after:ml-1"
                    >
                        Goles:
                    </label>
                    <label className="w-full flex items-center gap-2 p-2 rounded border">
                        <ArrowUpIcon size={18} />
                        <input
                            type="number"
                            name="team_goals"
                            id="team_goals"
                            className="grow"
                            placeholder="Ingresa los goles del equipo visitante"
                            title="El campo es requerido"
                            required
                        />
                    </label>
                </fieldset>
                <div className="flex flex-wrap gap-2 w-full">
                    <fieldset className="grow flex flex-col gap-2">
                        <label
                            htmlFor="team_red"
                            className="opacity-80 after:content['*'] after:text-red-500 after:ml-1"
                        >
                            Tarjetas rojas:
                        </label>
                        <label className="w-full flex items-center gap-2 p-2 rounded border">
                            <ArrowUpIcon size={18} />
                            <input
                                type="number"
                                name="team_red"
                                id="team_red"
                                className="grow"
                                placeholder="Ingresa las tarjetas rojas recibidas"
                                title="El campo es requerido"
                                required
                            />
                        </label>
                    </fieldset>
                    <fieldset className="grow flex flex-col gap-2">
                        <label
                            htmlFor="team_yellow"
                            className="opacity-80 after:content['*'] after:text-red-500 after:ml-1"
                        >
                            Tarjetas amarillas:
                        </label>
                        <label className="w-full flex items-center gap-2 p-2 rounded border">
                            <ArrowUpIcon size={18} />
                            <input
                                type="number"
                                name="team_yellow"
                                id="team_yellow"
                                className="grow"
                                placeholder="Ingresa las tarjetas amarillas recibidas"
                                title="El campo es requerido"
                                required
                            />
                        </label>
                    </fieldset>
                </div>
                <fieldset className="pt-5">
                    <button className="w-full text-white flex items-center justify-center cursor-pointer gap-2 bg-[green] rounded-lg p-2 active:scale-95 duration-100">
                        <UploadIcon size={18} />
                        Enviar
                    </button>
                </fieldset>
            </form>
        </div>
    );
}
