import React, { useState } from "react";
import FormItems from "./FormItems";
export default function FormAssets() {
    const [asset, setAsset] = useState("");
    return (
        <div>
            <form action="">
                <input
                    type="radio"
                    name="waluta"
                    id="waluta"
                    value={asset}
                    checked={asset === "waluta"}
                    onChange={(e) => setAsset(e.target.value)}
                />
                <input
                    type="radio"
                    name="nieruchomosc"
                    id="nieruchomosc"
                    value={asset}
                    checked={asset === "nieruchomosc"}
                    onChange={(e) => setAsset(e.target.value)}
                />
            </form>
            <FormItems asset={asset} />
        </div>
    );
}
