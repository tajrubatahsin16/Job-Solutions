import React from "react";
import { AreaChart, Area, XAxis, YAxis, Tooltip } from 'recharts';

const AssignmentMarks = () => {
    const marksArray = [
        {
            id: 1,
            name: 'Assignment-1',
            mark: 55
        },
        {
            id: 2,
            name: 'Assignment-2',
            mark: 60
        },
        {
            id: 3,
            name: 'Assignment-3',
            mark: 50
        },
        {
            id: 4,
            name: 'Assignment-4',
            mark: 57
        },
        {
            id: 5,
            name: 'Assignment-5',
            mark: 56
        },
        {
            id: 6,
            name: 'Assignment-6',
            mark: 47
        },
        {
            id: 7,
            name: 'Assignment-7',
            mark: 60
        },
        {
            id: 8,
            name: 'Assignment-8',
            mark: 41
        },
    ]
    return (
        <div className="chart">
            <AreaChart
                width={1100}
                height={500}
                data={marksArray}
                margin={{
                top: 50, right: 30, bottom: 20, left: 60,
                }}
>
                <XAxis dataKey="name" />
                <YAxis />
                <Area dataKey="mark" stroke="#8884d8" fill="#8884d8" />
                <Tooltip />
            </AreaChart>
        </div>
    );
};

export default AssignmentMarks;