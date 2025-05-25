import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { BarChart, FileText, Users, Briefcase, LineChart } from 'lucide-react'

export default function Home() {
  return (
    <div className="space-y-10">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-blue-800">HR Stat</h1>
        <p className="text-xl text-gray-600">기업 인사 진단 및 분석 서비스</p>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Link href="/pages/company-info">시작하기</Link>
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart className="h-5 w-5" />
              경영진단
            </CardTitle>
            <CardDescription>기업의 재무와 인력 현황 분석</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-500">재무제표와 인원 구성을 기반으로 HR Index를 측정합니다.</p>
            <Button variant="outline" className="w-full mt-4">
              <Link href="/pages/financial-statement">진단하기</Link>
            </Button>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              조직진단
            </CardTitle>
            <CardDescription>조직 구조 및 효율성 분석</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-500">본원적 활동과 지원활동의 균형을 분석합니다.</p>
            <Button variant="outline" className="w-full mt-4">
              <Link href="/pages/org-diagnosis/input">진단하기</Link>
            </Button>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Briefcase className="h-5 w-5" />
              직무진단
            </CardTitle>
            <CardDescription>직무별 역량 및 성과 분석</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-500">NCS 기반으로 직무 역량을 진단합니다.</p>
            <Button variant="outline" className="w-full mt-4">
              <Link href="/pages/job-diagnosis/definition">진단하기</Link>
            </Button>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <LineChart className="h-5 w-5" />
              설문진단
            </CardTitle>
            <CardDescription>갈등 및 커뮤니케이션 분석</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-500">조직 내 갈등과 소통 수준을 측정합니다.</p>
            <Button variant="outline" className="w-full mt-4">
              <Link href="/pages/survey/conflict">진단하기</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}