import React, { useEffect, useState } from "react";

export default function FormItems({ asset }) {
    const [data, setData] = useState([]);
    useEffect(() => {
        const API = "http://localhost:3000";
        fetch(`${API}/db`)
            .then((resp) => {
                if (resp.ok) {
                    return resp.json();
                } else {
                    throw new Error("Błąd sieci!");
                }
            })
            .then((data) => setData(data))
            .catch((err) => console.log("Błąd!", err));
    }, [asset]);
    return (
        <select>
            {data.length ? (
                data.map((el) => {
                    return <option value={el.value}>{el.name}</option>;
                })
            ) : (
                <p>loading...</p>
            )}
        </select>
    );
}


