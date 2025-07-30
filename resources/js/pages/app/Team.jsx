import React from "react";
import { useParams } from "react-router-dom";

// Hooks
import { useGetData } from "../../hooks/useapi";

// Components
import LoadingComponent from "../../components/LoadingComponent";

export default function Team() {
    const { id } = useParams();
    const { data: team, loading: teamLoading } = useGetData(`/teams/${id}`);

    if (teamLoading) return <LoadingComponent />;

    return (
        <div>
            {/* Flag */}

            {/* Name */}

            {/* content */}
        </div>
    );
}
