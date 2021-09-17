import React from 'react'

export default function FillOptions() {
    const kplt = [];
    for (let i = 1;i <=24;i++) {
        kplt.push(i);
    }

    return (
        kplt.map(kpl => {
            return <option value={kpl}>{kpl}</option>
        })
    )
}
