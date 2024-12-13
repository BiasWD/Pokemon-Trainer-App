import React from 'react'

export default function showtypeproperties({attacker}) {
  return (
    <div className="attacker-properties">
    <h4 style={{ color: attacker.color }}>{attacker.name} Properties</h4>
      <div>
      <h5>Super Effective against:</h5>
      <p>
        {attacker.superEffective.map((effect, index) => (
          <span key={index}>{effect}</span>
        ))}
      </p>
      </div>
      <div>
      <h5>Not Very Effective against:</h5>
      <p>
        {attacker.notVeryEffective.map((effect, index) => (
          <span key={index}>{effect}</span>
        ))}
      </p>
      </div>
      <div>
      <h5>No Effect on:</h5>
      <p>
        {attacker.noEffect.map((effect, index) => (
          <span key={index}>{effect}</span>
        ))}
      </p>
      </div>
<div>
      <h5>Weak to:</h5>
      <p>
        {attacker.weakTo.map((effect, index) => (
          <span key={index}>{effect}</span>
        ))}
      </p>
      </div>
<div>
      <h5>Resists:</h5>
      <p>
        {attacker.resists.map((effect, index) => (
          <span key={index}>{effect}</span>
        ))}
      </p>
      </div>
<div>
      <h5>Immune to:</h5>
      <p>
        {attacker.immuneTo.map((effect, index) => (
          <span key={index}>{effect}</span>
        ))}
      </p>
      </div>
    </div>
  )
}
