import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'HR Stat - 인사 진단 플랫폼',
  description: '기업 인사 진단 및 분석 서비스',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <nav className="bg-blue-600 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-xl font-bold">HR Stat</Link>
            <div className="space-x-4">
              <Link href="/pages/company-info">기업정보</Link>
              <Link href="/pages/hr-index-analysis">HR 분석</Link>
              <Link href="/pages/org-diagnosis/input">조직진단</Link>
              <Link href="/pages/job-diagnosis/definition">직무진단</Link>
              <Link href="/pages/survey/conflict">설문진단</Link>
              <Link href="/pages/dashboard">대시보드</Link>
            </div>
          </div>
        </nav>
        <main className="container mx-auto py-8">
          {children}
        </main>
      </body>
    </html>
  )
}