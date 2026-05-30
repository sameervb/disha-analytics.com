import type { Metadata } from 'next'
import InstitutionsContent from '@/components/InstitutionsPage'

export const metadata: Metadata = {
  title: 'Disha for Institutions — Built for the Luxembourg Ecosystem',
  description:
    'Disha plugs into existing advisory channels to turn referral relationships into measurable digital transformation outcomes for restaurant members across Luxembourg.',
}

export default function InstitutionsPage() {
  return <InstitutionsContent />
}
