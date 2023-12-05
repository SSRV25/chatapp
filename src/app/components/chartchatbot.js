"use client"

import {  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area, BarChart, Bar } from 'recharts';
const pdata = [
  {
    date:'02/12/2023',
    chats: 250,
    leads: 80,
    answers: 50
  },
  {
    day:'01/12/2023',
    chats: 300,
    leads: 60,
    answers: 30
  },
  {
    day:'30/11/2023',
    chats: 330,
    leads: 20,
    answers: 90
  },
  {
    day:'29/11/2023',
    chats: 200,
    leads: 80,
    answers: 50
  },
  {
    day:'28/11/2023',
    chats: 300,
    leads: 180,
    answers: 150
  },
  
];

export default function Chart() {
  return (
    <>
      <ResponsiveContainer width="100%" aspect={2}>
        <AreaChart
          width={800}
          height={410}
          data={pdata}
          margin={{
            top: 15,
            right: 5,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="chats" stroke="#03A9F4" fill="#03A9F4" />
          <Area type="monotone" dataKey="leads" stroke="#009688" fill="#009688" />
          <Area type="monotone" dataKey="answers" stroke="#EC407A" fill="#EC407A" />
        </AreaChart>
      </ResponsiveContainer>
    </>
  );
}
