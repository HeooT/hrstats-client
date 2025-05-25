'use client'

import * as React from 'react'

export function Button({ children }: { children: React.ReactNode }) {
  return (
    <button style={{ padding: '8px 16px', background: '#222', color: '#fff' }}>
      {children}
    </button>
  )
}
