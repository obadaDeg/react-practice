import React from 'react'

export default function UpdatedSuccess({title, message, onConfirm}) {
  return (
    <div className="success">
      <h2>{title}</h2>
      <p>{message}</p>
      {onConfirm && (
        <div id="confirmation-actions">
          <button onClick={onConfirm} className="button">
            Okay
          </button>
        </div>
      )}
    </div>
  )
}
