import React from 'react'
export default function SentimentChart({ text = '' }){
  return (
    <div>
      <p className="text-sm">{text}</p>
    </div>
  )
}