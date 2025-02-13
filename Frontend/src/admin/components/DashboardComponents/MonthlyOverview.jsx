import React from 'react'
import {TrendingUp, AccountCircle } from'@mui/icons-material'
import SettingsCellIcon from '@mui/icons-material/SettingsCell'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'

const salesData = [
    {stats: '245k', title: 'Sales', color: 'bg-indigo-800', icon: <TrendingUp sx={{fontSize:"1.75rem"}}/>},
    {stats: '212.5k', title: 'Customers', color: 'bg-green-600', icon: <AccountCircle sx={{fontSize:"1.75rem"}}/>},
    {stats: '1.54k', title: 'Products', color: 'bg-yellow-600', icon: <SettingsCellIcon sx={{fontSize:"1.75rem"}}/>},
    {stats: '88k', title: 'Revenue', color: 'bg-blue-700', icon: <AttachMoneyIcon sx={{fontSize:"1.75rem"}}/>}
]

const MonthlyOverview = () => {
    return (
        <div className='flex flex-col bg-gray-900 text-white rounded-md p-5 h-full space-y-2'>
            <p className='text-xl'>Monthly Overview</p>
            <p className='text-sm'>Total 100% growth this month</p>
            <div className='flex space-x-5'>
                {salesData.map((item, index) => (
                    <div key={index} className="flex p-2 mt-7 w-40 items-center">
                        <div className={`mr-2 p-1 rounded-md ${item.color}`}>{item.icon}</div>
                        <div className="flex flex-col ml-2">
                            <p className='text-sm'>{item.title}</p>
                            <p className='text-xl'>{item.stats}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MonthlyOverview