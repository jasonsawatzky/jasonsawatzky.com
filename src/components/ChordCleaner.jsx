import React from 'react'
import Tool from './Tool'

export default function({ close }) {
  return (
    <Tool close={close}>
      <h2>Chord Cleaner</h2>
      <p>
        A tool to display guitar chords from popular sites in a clean, consistent format.
      </p>
    </Tool>
  )
}
