import React, { useEffect, useState } from 'react'
import API from '../services/api'
import ConfidenceMeter from './ConfidenceMeter'
import SentimentChart from './SentimentChart'

export default function Dashboard(){
  const [analysis, setAnalysis] = useState(null)
  const [loading, setLoading] = useState(true)

  async function load(){
    setLoading(true)
    const res = await API.get('/jira/analysis')
    setAnalysis(res.data.analysis)
    setLoading(false)
  }

  useEffect(()=>{ load() }, [])

  if (loading) return <div>Loading...</div>

  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="col-span-2">
        <h2 className="text-xl font-semibold">Project Health</h2>
        <div className="mt-2 p-4 bg-white rounded shadow">
          <ConfidenceMeter value={analysis.overall_confidence} />
          <div className="mt-4">
            <h3 className="font-bold">Top Risks</h3>
            <ul>
              {analysis.top_risks?.map((r,i)=> <li key={i}>{r.title} — score {r.score}</li>)}
            </ul>
          </div>
        </div>
      </div>

      <aside className="p-4 bg-white rounded shadow">
        <h3 className="font-semibold">Team Sentiment</h3>
        <SentimentChart text={analysis.sentiment_summary} />
      </aside>
    </div>
  )
}