import React, { useState } from "react";
import { Dropdown } from 'primereact/dropdown';

export default function EditableDemo() {
    const [selectedLoc, setSelectedLoc] = useState(null);
    const locs = [
        
    ];

    return (
        <div className="card flex justify-content-center">
            <Dropdown value={selectedLoc} onChange={(e) => setSelectedLoc(e.value)} options={locs} optionLabel="name" 
                editable placeholder="Select a Location" className="w-full md:w-14rem" />
        </div>
    )
}