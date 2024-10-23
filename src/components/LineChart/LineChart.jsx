import { LineChart as LChart, Line, XAxis,YAxis } from 'recharts';

const LineChart = () => {

    const studentSubjectMarks = [
        { id: 1, name: 'Alice', math: 85, physics: 78, chemistry: 92 },
        { id: 2, name: 'Bob', math: 78, physics: 74, chemistry: 88 },
        { id: 3, name: 'Charlie', math: 92, physics: 88, chemistry: 81 },
        { id: 4, name: 'David', math: 74, physics: 82, chemistry: 76 },
        { id: 5, name: 'Eve', math: 88, physics: 85, chemistry: 89 },
        { id: 6, name: 'Frank', math: 81, physics: 79, chemistry: 84 },
        { id: 7, name: 'Grace', math: 90, physics: 91, chemistry: 86 },
        { id: 8, name: 'Hannah', math: 76, physics: 80, chemistry: 77 },
        { id: 9, name: 'Isaac', math: 83, physics: 86, chemistry: 91 },
        { id: 10, name: 'Jack', math: 95, physics: 92, chemistry: 94 }
    ];
    
      

    return (
        <div>
            <LChart width={800} height={400} data={studentSubjectMarks}>
            <XAxis dataKey="/name"></XAxis>
            <YAxis></YAxis>
            <Line dataKey="math" stroke='red'></Line>
            <Line dataKey="physics" stroke='yellow'></Line>
            </LChart>
            
        
        </div>
    );
};

export default LineChart;