import React, { useEffect, useState } from "react";
import axios from "axios";

const BASE_URL = window.location.pathname.replace(/\/+$/, '');

const ENTITIES = [
  { id: "sensor.hdc_bed_temp", label: "Bed Temp" },
  { id: "sensor.hdc_bed_humidity", label: "Bed Humidity" },
  { id: "sensor.hdc_garden_temp", label: "Garden Temp" },
  { id: "sensor.hdc_garden_humidity", label: "Garden Humidity" },
  { id: "sensor.hdc_roof_temp", label: "Roof Temp" },
  { id: "sensor.hdc_roof_humidity", label: "Roof Humidity" }
];
export default function HomeAssistantDashboard() {
    const [states, setStates] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${BASE_URL}/api/states`);
                setStates(Array.isArray(response.data) ? response.data : []);
            } catch (error) {
                console.error("Error fetching data from Home Assistant API", error);
            }
        };

        fetchData();
        const interval = setInterval(fetchData, 10000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {states.map((state) => (
                <div key={state.entity_id} className="bg-white rounded-2xl shadow p-4">
                    <h2 className="text-xl font-semibold mb-2">{state.entity_id}</h2>
                    <p className="text-3xl">
                        {state.state} {state.attributes?.unit_of_measurement ?? ""}
                    </p>
                </div>
            ))}
        </div>
    );
}
