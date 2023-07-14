import React from 'react'
import Button from '../components/buttons/Button'
import Typography from '../components/typography/typography'

function Components() {
  return (
    <div>
        <Button>Get started</Button>
        <Button variant="outline">Outline</Button>
        <Typography >Hello typography</Typography>
        <Typography variant="h1">Leverage the <span className="text-secondary">power</span> of <span className="text-secondary">latest</span> Technologies</Typography>
        <Typography variant="h2">Hello typography</Typography>
        <Typography variant="small">Hello typography</Typography>
        <Typography variant="h3" className="font-thin">Hello typography</Typography>
    </div>
  )
}

export default Components