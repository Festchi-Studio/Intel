import React from 'react'
export default function ConfidenceMeter({ value = 0.5 }){
  const pct = Math.round(Number(value) * 100)
  return (
    <div>
      <div className="font-medium">Overall Confidence: {pct}%</div>
      <div className="w-full bg-slate-100 h-4 rounded mt-2">
        <div style={{ width: `${pct}%`}} className="h-4 rounded bg-emerald-500" />
      </div>
    </div>
  )
}