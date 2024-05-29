'use client'
import React from 'react'
import Link from 'next/link'
import {useRouter} from 'next/navigation'
import {withRouter} from 'next/router'
import { useSelectedLayoutSegment } from "next/navigation";


function CustomerLink() {
  const segment = useSelectedLayoutSegment();
  console.log(segment)
  return (
    <Link href="/" color="blue">
    <p className={segment === null ? 'text-blue-500' : ''}>Customer</p>
    </Link>
  )
}

export default CustomerLink