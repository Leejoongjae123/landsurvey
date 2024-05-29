'use client'
import React from 'react'
import Link from 'next/link'
import { useSelectedLayoutSegment } from "next/navigation";

function AgencyLink() {
  const segment = useSelectedLayoutSegment();

  return (
    <Link href="/agency" aria-current="page" color="foreground">
    <p className={segment === 'agency' ? 'text-blue-500' : ''}>Agency</p>
    </Link>
  )
}

export default AgencyLink