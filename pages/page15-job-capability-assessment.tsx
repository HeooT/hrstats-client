import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { HelpCircle, CheckCircle, AlertCircle } from 'lucide-react';
import { Slider } from '@/components/ui/slider';

const JobCapabilityAssessment = () => {
  // 기업 정보 상태
  const [companyInfo, setCompanyInfo] = useState({
    name: '인사이트 컨설팅',
    industry: '경영 컨설팅업',
    teams: 5,
    jobsDefined: 5
  });

  // 직무 역량 데이터 상태 (이전 페이지에서 가져온 것으로 가정)
  const [jobCapabilityData, setJobCapabilityData] = useState([
    { 
      id: 1, 
      jobName: '영업 담당', 
      teamName: '영업팀',
      jobClass: '영업·마케팅',
      selectedActivities: [
        { id: 'a1', name: '고객 유치' },
        { id: 'a2', name: '계약 협상' },
        { id: 'a3', name: '시장 조사' }
      ],
      capabilityRatings: {
        internalCapabilityRate: 80,
        experienceLevel: 85,
        projectExperience: 75,
        internalExecutionRate: 90
      },
      isCapable: true
    },
    { 
      id: 2, 
      jobName: '생산 기술자', 
      teamName: '생산팀',
      jobClass: '생산·제조',
      selectedActivities: [
        { id: 'b1', name: '품질 관리' },
        { id: 'b2', name: '공정 설계' },
        { id: 'b3', name: '제품 개선' }
      ],
      capabilityRatings: {
        internalCapabilityRate: 65,
        experienceLevel: 60,
        projectExperience: 70,
        internalExecutionRate: 75
      },
      isCapable: true
    },
    { 
      id: 3, 
      jobName: '인사 관리자', 
      teamName: '인사팀',
      jobClass: '인사·HR',
      selectedActivities: [
        { id: 'c1', name: '채용 기획' },
        { id: 'c2', name: '인사 평가' },
        { id: 'c3', name: '조직 개발' }
      ],
      capabilityRatings: {
        internalCapabilityRate: 50,
        experienceLevel: 45,
        projectExperience: 40,
        internalExecutionRate: 60
      },
      isCapable: false
    },
    { 
      id: 4, 
      jobName: '재무 담당', 
      teamName: '재무팀',
      jobClass: '재무·회계',
      selectedActivities: [
        { id: 'd1', name: '재무 분석' },
        { id: 'd2', name: '비용 절감 전략' },
        { id: 'd3', name: '리스크 관리' }
      ],
      capabilityRatings: {
        internalCapabilityRate: 45,
        experienceLevel: 40,
        projectExperience: 30,
        internalExecutionRate: 50
      },
      isCapable: false
    },
    { 
      id: 5, 
      jobName: '품질 관리자', 
      teamName: '품질팀',
      jobClass: '생산·제조',
      selectedActivities: [
        { id: 'e1', name: '품질 검사' },
        { id: 'e2', name: '품질 시스템 관리' },
        { id: 'e3', name: '불량 분석' }
      ],
      capabilityRatings: {
        internalCapabilityRate: 70,
        experienceLevel: 65,
        projectExperience: 75,
        internalExecutionRate: 80
      },
      isCapable: true
    }
  ]);

  // 역량 평가 변경 처리
  const handleCapabilityChange = (jobId, field, value) => {
    setJobCapabilityData(prev => {
      return prev.map(job => {
        if (job.id === jobId) {
          const updatedRatings = {
            ...job.capabilityRatings,
            [field]: value
          };
          
          // 역량 점수에 따라 기능 수행 가능 여부 자동 계산
          // (내부 역량률 70% 이상이거나 내부 수행률 80% 이상이면 가능으로 판단)
          const isCapable = 
            updatedRatings.internalCapabilityRate >= 70 || 
            updatedRatings.internalExecutionRate >= 80;
          
          return { 
            ...job, 
            capabilityRatings: updatedRatings,
            isCapable
          };
        }
        return job;
      });
    });
  };

  // UI 렌더링
  return (
    <div className="p-6 max-w-7xl mx-auto bg-white">
      {/* 페이지 헤더 */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">직무 생산성 및 내부 역량 진단</h1>
        <div className="flex flex-wrap gap-4 text-sm bg-gray-50 p-4 rounded">
          <div><span className="font-semibold">기업명:</span> {companyInfo.name}</div>
          <div><span className="font-semibold">업종:</span> {companyInfo.industry}</div>
          <div><span className="font-semibold">직무 수:</span> 총 {jobCapabilityData.length}개</div>
        </div>
      </div>

      {/* 설명 카드 */}
      <Card className="mb-6 bg-blue-50 border-blue-200">
        <CardContent className="pt-4">
          <div className="flex items-start gap-2">
            <HelpCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
            <p className="text-sm">
              각 직무와 선택된 세부 활동에 대한 조직 내부의 역량을 진단합니다. 
              각 항목에 대해 현재 보유 역량 수준을 평가하여 입력해주세요.
              이 진단 결과는 내부 역량 개발 계획 및 인력 배치 최적화 전략 수립에 활용됩니다.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* 직무별 역량 진단 */}
      {jobCapabilityData.map((job) => (
        <Card key={job.id} className="mb-6">
          <CardHeader className="bg-gray-50 pb-3">
            <div className="flex justify-between items-center">
              <CardTitle className="text-lg">
                {job.teamName} - {job.jobName}
                <span className="ml-2 text-sm font-normal text-gray-500">({job.jobClass})</span>
              </CardTitle>
              <div className="flex items-center">
                {job.isCapable ? (
                  <span className="flex items-center gap-1 text-green-600 text-sm px-2 py-1 bg-green-50 rounded-full">
                    <CheckCircle className="w-4 h-4" />
                    <span>내부 역량 충분</span>
                  </span>
                ) : (
                  <span className="flex items-center gap-1 text-amber-600 text-sm px-2 py-1 bg-amber-50 rounded-full">
                    <AlertCircle className="w-4 h-4" />
                    <span>추가 역량 개발 필요</span>
                  </span>
                )}
              </div>
            </div>
            <div className="mt-2 text-sm text-gray-600">
              <span className="font-medium">선택된 세부 활동: </span>
              {job.selectedActivities.map((act, idx) => (
                <span key={act.id}>
                  {act.name}
                  {idx < job.selectedActivities.length - 1 ? ', ' : ''}
                </span>
              ))}
            </div>
          </CardHeader>
          <CardContent className="pt-5">
            <div className="grid grid-cols-1 gap-5">
              {/* 내부 역량 보유율 */}
              <div className="border rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-medium">내부 역량 보유율 (%)</label>
                  <span className="text-lg font-semibold">{job.capabilityRatings.internalCapabilityRate}%</span>
                </div>
                <p className="text-xs text-gray-500 mb-3">
                  해당 직무를 수행할 수 있는 필요 역량을 갖춘 내부 인력의 비율을 평가해주세요.
                </p>
                <Slider
                  value={[job.capabilityRatings.internalCapabilityRate]}
                  onValueChange={(value) => handleCapabilityChange(job.id, 'internalCapabilityRate', value[0])}
                  min={0}
                  max={100}
                  step={5}
                  className="my-3"
                />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>0%</span>
                  <span>50%</span>
                  <span>100%</span>
                </div>
              </div>

              {/* 경력 수준 */}
              <div className="border rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-medium">경력 수준 (%)</label>
                  <span className="text-lg font-semibold">{job.capabilityRatings.experienceLevel}%</span>
                </div>
                <p className="text-xs text-gray-500 mb-3">
                  해당 직무 담당 인력의 평균 경력 수준을 평가해주세요.
                </p>
                <Slider
                  value={[job.capabilityRatings.experienceLevel]}
                  onValueChange={(value) => handleCapabilityChange(job.id, 'experienceLevel', value[0])}
                  min={0}
                  max={100}
                  step={5}
                  className="my-3"
                />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>0%</span>
                  <span>50%</span>
                  <span>100%</span>
                </div>
              </div>

              {/* 프로젝트 경험 */}
              <div className="border rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-medium">프로젝트 경험 (%)</label>
                  <span className="text-lg font-semibold">{job.capabilityRatings.projectExperience}%</span>
                </div>
                <p className="text-xs text-gray-500 mb-3">
                  해당 직무 관련 프로젝트 경험 수준을 평가해주세요.
                </p>
                <Slider
                  value={[job.capabilityRatings.projectExperience]}
                  onValueChange={(value) => handleCapabilityChange(job.id, 'projectExperience', value[0])}
                  min={0}
                  max={100}
                  step={5}
                  className="my-3"
                />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>0%</span>
                  <span>50%</span>
                  <span>100%</span>
                </div>
              </div>

              {/* 내부 수행율 */}
              <div className="border rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-medium">내부 수행율 (%)</label>
                  <span className="text-lg font-semibold">{job.capabilityRatings.internalExecutionRate}%</span>
                </div>
                <p className="text-xs text-gray-500 mb-3">
                  해당 직무를 내부에서 자체적으로 수행하는 비율을 평가해주세요. (외주/아웃소싱 제외)
                </p>
                <Slider
                  value={[job.capabilityRatings.internalExecutionRate]}
                  onValueChange={(value) => handleCapabilityChange(job.id, 'internalExecutionRate', value[0])}
                  min={0}
                  max={100}
                  step={5}
                  className="my-3"
                />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>0%</span>
                  <span>50%</span>
                  <span>100%</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}

      {/* 역량 진단 가이드 */}
      <div className="mt-6 bg-gray-50 p-4 rounded">
        <h3 className="font-semibold text-lg mb-2">역량 진단 가이드</h3>
        <ul className="list-disc pl-5 space-y-1 text-sm">
          <li><strong>내부 역량 보유율</strong>: 직무에 필요한 역량을 보유한 인력의 비율 (70% 이상 권장)</li>
          <li><strong>경력 수준</strong>: 직무 담당자의 평균 경력 수준 (높을수록 전문성이 높음을 의미)</li>
          <li><strong>프로젝트 경험</strong>: 관련 프로젝트 수행 경험 수준 (실제 업무 적용 능력 평가)</li>
          <li><strong>내부 수행율</strong>: 외주 없이 내부에서 자체적으로 수행하는 비율 (80% 이상 권장)</li>
          <li>내부 역량 보유율이 70% 이상이거나 내부 수행율이 80% 이상인 경우 "내부 역량 충분"으로 평가됩니다.</li>
        </ul>
      </div>

      {/* 하단 네비게이션 */}
      <div className="mt-8 flex justify-between">
        <Button variant="outline">이전: 직무별 세부 활동 선택</Button>
        <Button className="bg-blue-600 text-white hover:bg-blue-700">
          다음: 진단 결과 요약
        </Button>
      </div>
    </div>
  );
};

export default JobCapabilityAssessment;