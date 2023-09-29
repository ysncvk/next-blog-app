import React from 'react'
import styles from './authLinks.module.css'
import Link from 'next/link'

export default function AuthLinks() {

  //temporary

  const status = "notauthenticated"
  return (
    <>
      {status === "notauthenticated" ? (
        <Link href="/login">Login</Link>
      ) : (
        <>
        <Link href="/write">Write </Link>
        <span className={styles.link}>Logout</span>
        </>
      )}
    </>
  )
}
