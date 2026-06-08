import { AuthContent } from '@/widgets/authContent'
import React from 'react'

type Props = {}

function ResetPassword({}: Props) {
  return (
    <AuthContent type='RESET_PASSWORD' />
  )
}

export default ResetPassword