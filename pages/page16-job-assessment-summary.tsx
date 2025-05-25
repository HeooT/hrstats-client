import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, CheckCircle, AlertCircle, HelpCircle, TrendingUp, TrendingDown } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

const JobAssessmentSummary = () => {
  // 기업 정보 상태
  const [companyInfo] = useState({
    name: '인사이트 컨설팅',
    industry: '경영 컨설팅업',
    jobsAssessed: 5,
    activitiesAssessed: 15
  });

  // 직무 역량 요약 데이터
  const [summaryData] = useState({
    overallCapability: 62, // 전체 내부 역량 보유율 평균
    capableJobs: 3, // 역량 충분 직무 수
    needsDevelopmentJobs: 2, // 추가 개발 필요 직무 수
    criticalGaps: [
      { id: 1, jobName: '인사 관리자', teamName: '인사팀', gap: '역량 보유율 50%', recommendation: '전문 교육 프로그램 도입' },
      { id: 2, jobName: '재무 담당', teamName: '재무팀', gap: '프로젝트 경험 30%', recommendation: '외부 전문가 영입 고려' }
    ],
    jobCapabilities: [
      { id: 1, jobName: '영업 담당', teamName: '영업팀', capability: 80, status: 'good' },
      { id: 2, jobName: '생산 기술자', teamName: '생산팀', capability: 65, status: 'medium' },
      { id: 3, jobName: '인사 관리자', teamName: '인사팀', capability: 50, status: 'poor' },
      { id: 4, jobName: '재무 담당', teamName: '재무팀', capability: 45, status: 'poor' },
      { id: 5, jobName: '품질 관리자', teamName: '품질팀', capability: 70, status: 'good' }
    ],
    developmentStrategies: [
      { id: 1, strategy: '인사 관리자 역량 강화 교육 프로그램 도입', impact: '높음', timeline: '단기' },
      { id: 2, strategy: '재무 분석 전문가 신규 채용', impact: '높음', timeline: '중기' },
      { id: 3, strategy: '생산 관련 직무 역량 강화 내부 워크숍 실시', impact: '중간', timeline: '단기' },
      { id: 4, strategy: '영업-마케팅 직무 통합을 통한 시너지 창출', impact: '중간', timeline: '장기' }
    ],
    industryComparison: {
      internalCapabilityRate: { company: 62, industry: 73 },
      experienceLevel: { company: 59, industry: 68 },
      projectExperience: { company: 58, industry: 65 },
      internalExecutionRate: { company: 71, industry: 75 }
    }
  });

  // 역량 상태에 따른 스타일 지정
  const getCapabilityStatusStyle = (status) => {
    switch (status) {
      case 'good':
        return 'bg-green-100 text-green-800';
      case 'medium':
        return 'bg-amber-100 text-amber-800';
      case 'poor':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  // 진행 상태에 따른 색상 지정
  const getProgressColor = (value) => {
    if (value >= 70) return 'bg-green-500';
    if (value >= 50) return 'bg-amber-500';
    return 'bg-red-500';
  };

  // UI 렌더링
  return (
    <div className="p-6 max-w-7xl mx-auto bg-white">
      {/* 페이지 헤더 */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">직무진단 결과 요약</h1>
        <div className="flex flex-wrap gap-4 text-sm bg-gray-50 p-4 rounded">
          <div><span className="font-semibold">기업명:</span> {companyInfo.name}</div>
          <div><span className="font-semibold">업종:</span> {companyInfo.industry}</div>
          <div><span className="font-semibold">진단 직무:</span> {companyInfo.jobsAssessed}개</div>
          <div><span className="font-semibold">진단 세부활동:</span> {companyInfo.activitiesAssessed}개</div>
        </div>
      </div>

      {/* 전체 요약 대시보드 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col items-center text-center">
              <div className="text-3xl font-bold mb-1">{summaryData.overallCapability}%</div>
              <div className="text-sm text-gray-500 mb-4">전체 내부 역량 보유율</div>
              <Progress 
                value={summaryData.overallCapability} 
                className={`h-2 w-full ${getProgressColor(summaryData.overallCapability)}`} 
              />
              <div className="flex justify-between w-full text-xs text-gray-500 mt-1">
                <span>0%</span>
                <span>50%</span>
                <span>100%</span>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-gray-500">역량 충분 직무</div>
                <div className="flex items-center mt-1">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span className="text-2xl font-bold">{summaryData.capableJobs}개</span>
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-500">추가 개발 필요 직무</div>
                <div className="flex items-center mt-1">
                  <AlertCircle className="w-5 h-5 text-amber-500 mr-2" />
                  <span className="text-2xl font-bold">{summaryData.needsDevelopmentJobs}개</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col h-full justify-center">
              <div className="text-sm text-gray-500 mb-2">산업 평균 대비 역량 수준</div>
              <div className="flex items-center">
                <TrendingDown className="w-5 h-5 text-red-500 mr-2" />
                <span className="text-lg font-semibold">산업 평균보다 11% 낮음</span>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                귀사의 전체 내부 역량 보유율(62%)은 동종 업계 평균(73%)보다 낮은 수준입니다.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* 직무별 역량 요약 */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>직무별 내부 역량 보유 현황</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {summaryData.jobCapabilities.map(job => (
              <div key={job.id} className="flex items-center">
                <div className="w-40 md:w-48 truncate">
                  <span className="font-medium">{job.jobName}</span>
                  <span className="text-gray-500 text-sm ml-1">({job.teamName})</span>
                </div>
                <div className="flex-1 mx-4">
                  <div className="flex items-center">
                    <Progress value={job.capability} className={`h-3 flex-1 ${getProgressColor(job.capability)}`} />
                    <span className="ml-3 w-8 text-right font-medium">{job.capability}%</span>
                  </div>
                </div>
                <div className={`px-2 py-1 rounded-full text-xs ${getCapabilityStatusStyle(job.status)}`}>
                  {job.status === 'good' && '역량 충분'}
                  {job.status === 'medium' && '보통'}
                  {job.status === 'poor' && '역량 부족'}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* 주요 역량 격차 및 개선 방향 */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>주요 역량 격차 및 개선 방향</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="p-3 text-left border">직무명</th>
                  <th className="p-3 text-left border">소속팀</th>
                  <th className="p-3 text-left border">역량 격차</th>
                  <th className="p-3 text-left border">개선 방향</th>
                </tr>
              </thead>
              <tbody>
                {summaryData.criticalGaps.map(gap => (
                  <tr key={gap.id} className="hover:bg-gray-50">
                    <td className="p-3 border">{gap.jobName}</td>
                    <td className="p-3 border">{gap.teamName}</td>
                    <td className="p-3 border">{gap.gap}</td>
                    <td className="p-3 border">{gap.recommendation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* 산업 평균과의 비교 */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>산업 평균과의 역량 비교</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="mb-2 font-medium">내부 역량 보유율</div>
              <div className="flex items-center">
                <div className="w-20 text-sm text-gray-500">우리 기업</div>
                <div className="flex-1 mx-2">
                  <Progress 
                    value={summaryData.industryComparison.internalCapabilityRate.company} 
                    className={`h-3 ${getProgressColor(summaryData.industryComparison.internalCapabilityRate.company)}`}
                  />
                </div>
                <div className="w-10 text-right font-medium">{summaryData.industryComparison.internalCapabilityRate.company}%</div>
              </div>
              <div className="flex items-center mt-2">
                <div className="w-20 text-sm text-gray-500">산업 평균</div>
                <div className="flex-1 mx-2">
                  <Progress 
                    value={summaryData.industryComparison.internalCapabilityRate.industry} 
                    className="h-3 bg-blue-500" 
                  />
                </div>
                <div className="w-10 text-right font-medium">{summaryData.industryComparison.internalCapabilityRate.industry}%</div>
              </div>
            </div>
            
            <div>
              <div className="mb-2 font-medium">경력 수준</div>
              <div className="flex items-center">
                <div className="w-20 text-sm text-gray-500">우리 기업</div>
                <div className="flex-1 mx-2">
                  <Progress 
                    value={summaryData.industryComparison.experienceLevel.company} 
                    className={`h-3 ${getProgressColor(summaryData.industryComparison.experienceLevel.company)}`}
                  />
                </div>
                <div className="w-10 text-right font-medium">{summaryData.industryComparison.experienceLevel.company}%</div>
              </div>
              <div className="flex items-center mt-2">
                <div className="w-20 text-sm text-gray-500">산업 평균</div>
                <div className="flex-1 mx-2">
                  <Progress 
                    value={summaryData.industryComparison.experienceLevel.industry} 
                    className="h-3 bg-blue-500" 
                  />
                </div>
                <div className="w-10 text-right font-medium">{summaryData.industryComparison.experienceLevel.industry}%</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* AI 기반 역량 개발 전략 */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span>AI 기반 역량 개발 전략</span>
            <span className="px-2 py-0.5 bg-blue-100 text-blue-800 rounded text-xs font-normal">자동 생성</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="p-3 text-left border">전략</th>
                  <th className="p-3 text-left border w-28">실행 기간</th>
                  <th className="p-3 text-left border w-28">기대 효과</th>
                </tr>
              </thead>
              <tbody>
                {summaryData.developmentStrategies.map(strategy => (
                  <tr key={strategy.id} className="hover:bg-gray-50">
                    <td className="p-3 border">{strategy.strategy}</td>
                    <td className="p-3 border">{strategy.timeline}</td>
                    <td className="p-3 border">{strategy.impact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* 종합 인사이트 */}
      <Card className="mb-6 bg-blue-50 border-blue-200">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-blue-500" />
            <span>종합 인사이트</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <p>
              직무진단 결과, 귀사의 전체 내부 역량 보유율은 62%로 산업 평균(73%)에 비해 낮은 수준으로 나타났습니다. 
              특히 인사 관리자(50%)와 재무 담당(45%) 직무에서 역량 격차가 크게 발생하고 있습니다.
            </p>
            <p>
              단기적으로는 인사 관리자 대상 교육 프로그램 도입과 생산 관련 직무 역량 강화를 위한 내부 워크숍을 
              추진하는 것이 효과적일 것으로 분석됩니다. 중장기적으로는 재무 분석 전문가 신규 채용과 
              영업-마케팅 직무 통합을 통한 시너지 창출을 검토할 필요가 있습니다.
            </p>
            <p>
              귀사의 직무별 역량 강화를 위한 우선순위는 다음과 같습니다:
            </p>
            <ol className="list-decimal pl-5 space-y-1">
              <li>인사 관리자 역량 강화를 위한 전문 교육 도입</li>
              <li>재무 분석 전문가 영입 검토</li>
              <li>생산 기술자 대상 역량 강화 프로그램 개발</li>
            </ol>
          </div>
        </CardContent>
      </Card>

      {/* 하단 네비게이션 */}
      <div className="mt-8 flex justify-between">
        <Button variant="outline">이전: 직무 생산성 및 내부 역량 진단</Button>
        <Button className="bg-blue-600 text-white hover:bg-blue-700 flex items-center gap-2">
          <Download className="w-4 h-4" />
          <span>진단 결과 보고서 다운로드</span>
        </Button>
      </div>
    </div>
  );
};

export default JobAssessmentSummary;