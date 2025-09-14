import React, { useEffect, useState } from 'react'
import Dashboard from './components/Dashboard'
import API, { setToken } from './services/api'

export default function App(){
  const [token, setLocalToken] = useState(null)
  useEffect(()=>{
    const t = localStorage.getItem('idh_token')
    if (t) { setLocalToken(t); setToken(t);} 
  },[])

  if (!token) return (<div className="p-8">Please log in (use auth endpoints)</div>)
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="p-4 bg-white shadow">Intelligent Delivery Hub</header>
      <main className="p-6">
        <Dashboard />
      </main>
    </div>
  )
}