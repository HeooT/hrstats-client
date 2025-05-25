import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { HelpCircle, CheckCircle, AlertCircle } from 'lucide-react';

const JobActivitySelection = () => {
  // 기업 정보 상태
  const [companyInfo, setCompanyInfo] = useState({
    name: '인사이트 컨설팅',
    industry: '경영 컨설팅업',
    teams: 5,
    jobsDefined: 5
  });

  // 직무 데이터 상태 (이전 페이지에서 가져온 것으로 가정)
  const [jobData, setJobData] = useState([
    { 
      id: 1, 
      teamName: '영업팀', 
      jobName: '영업 담당', 
      jobClass: '영업·마케팅',
      activities: [
        { id: 'a1', name: '고객 유치', selected: false },
        { id: 'a2', name: '계약 협상', selected: false },
        { id: 'a3', name: '시장 조사', selected: false },
        { id: 'a4', name: '광고 기획', selected: false },
        { id: 'a5', name: '고객 분석', selected: false },
        { id: 'a6', name: 'CRM 운영', selected: false }
      ],
      selectedCount: 0
    },
    { 
      id: 2, 
      teamName: '생산팀', 
      jobName: '생산 기술자', 
      jobClass: '생산·제조',
      activities: [
        { id: 'b1', name: '품질 관리', selected: false },
        { id: 'b2', name: '공정 설계', selected: false },
        { id: 'b3', name: '제품 개선', selected: false },
        { id: 'b4', name: '생산 계획', selected: false },
        { id: 'b5', name: '작업 공정 최적화', selected: false },
        { id: 'b6', name: '설비 유지보수', selected: false }
      ],
      selectedCount: 0
    },
    { 
      id: 3, 
      teamName: '인사팀', 
      jobName: '인사 관리자', 
      jobClass: '인사·HR',
      activities: [
        { id: 'c1', name: '채용 기획', selected: false },
        { id: 'c2', name: '인사 평가', selected: false },
        { id: 'c3', name: '조직 개발', selected: false },
        { id: 'c4', name: '성과 관리', selected: false },
        { id: 'c5', name: '인재 육성', selected: false },
        { id: 'c6', name: '보상 기획', selected: false }
      ],
      selectedCount: 0
    },
    { 
      id: 4, 
      teamName: '재무팀', 
      jobName: '재무 담당', 
      jobClass: '재무·회계',
      activities: [
        { id: 'd1', name: '재무 분석', selected: false },
        { id: 'd2', name: '비용 절감 전략', selected: false },
        { id: 'd3', name: '리스크 관리', selected: false },
        { id: 'd4', name: '예산 기획', selected: false },
        { id: 'd5', name: '투자 검토', selected: false },
        { id: 'd6', name: '세무 전략', selected: false }
      ],
      selectedCount: 0
    },
    { 
      id: 5, 
      teamName: '품질팀', 
      jobName: '품질 관리자', 
      jobClass: '생산·제조',
      activities: [
        { id: 'e1', name: '품질 검사', selected: false },
        { id: 'e2', name: '품질 시스템 관리', selected: false },
        { id: 'e3', name: '불량 분석', selected: false },
        { id: 'e4', name: '개선활동 추진', selected: false },
        { id: 'e5', name: '공정 모니터링', selected: false },
        { id: 'e6', name: 'ISO 인증 관리', selected: false }
      ],
      selectedCount: 0
    }
  ]);

  // 세부 활동 선택 처리
  const handleActivitySelection = (jobId, activityId) => {
    setJobData(prev => {
      return prev.map(job => {
        if (job.id === jobId) {
          // 현재 선택된 활동 수 계산
          const currentSelected = job.activities.filter(act => act.selected).length;
          
          // 이미 3개 선택된 상태에서 새로운 항목 선택 시도하는 경우
          if (currentSelected >= 3 && !job.activities.find(act => act.id === activityId).selected) {
            return job; // 변경하지 않고 리턴
          }
          
          // 선택 상태 토글 및 선택 수 업데이트
          const updatedActivities = job.activities.map(activity => {
            if (activity.id === activityId) {
              return { ...activity, selected: !activity.selected };
            }
            return activity;
          });
          
          const newSelectedCount = updatedActivities.filter(act => act.selected).length;
          
          return { 
            ...job, 
            activities: updatedActivities,
            selectedCount: newSelectedCount
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
        <h1 className="text-2xl font-bold mb-2">직무별 주요 세부 활동 선택</h1>
        <div className="flex flex-wrap gap-4 text-sm bg-gray-50 p-4 rounded">
          <div><span className="font-semibold">기업명:</span> {companyInfo.name}</div>
          <div><span className="font-semibold">업종:</span> {companyInfo.industry}</div>
          <div><span className="font-semibold">직무 수:</span> 총 {jobData.length}개</div>
        </div>
      </div>

      {/* 설명 카드 */}
      <Card className="mb-6 bg-blue-50 border-blue-200">
        <CardContent className="pt-4">
          <div className="flex items-start gap-2">
            <HelpCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
            <p className="text-sm">
              각 직무별로 NCS(국가직무능력표준) 기반 세부 활동(능력단위) 중 해당 직무에서 가장 중요한 활동을 최대 3개 선택해주세요. 
              선택한 세부 활동은 이후 직무별 역량 진단 및 인력 배치 최적화 전략 도출에 활용됩니다.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* 직무별 세부 활동 선택 */}
      {jobData.map((job) => (
        <Card key={job.id} className="mb-6">
          <CardHeader className="bg-gray-50">
            <div className="flex justify-between items-center">
              <CardTitle className="text-lg">
                {job.teamName} - {job.jobName}
                <span className="ml-2 text-sm font-normal text-gray-500">({job.jobClass})</span>
              </CardTitle>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">선택된 활동: {job.selectedCount}/3</span>
                {job.selectedCount === 3 && (
                  <span className="flex items-center gap-1 text-green-600 text-sm">
                    <CheckCircle className="w-4 h-4" />
                    <span>완료</span>
                  </span>
                )}
                {job.selectedCount < 3 && (
                  <span className="flex items-center gap-1 text-amber-600 text-sm">
                    <AlertCircle className="w-4 h-4" />
                    <span>진행중</span>
                  </span>
                )}
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {job.activities.map((activity) => (
                <div 
                  key={activity.id} 
                  className={`border p-3 rounded-lg flex items-start gap-2 cursor-pointer hover:bg-gray-50 transition-colors ${
                    activity.selected ? 'bg-blue-50 border-blue-200' : ''
                  } ${
                    job.selectedCount >= 3 && !activity.selected ? 'opacity-50' : ''
                  }`}
                  onClick={() => handleActivitySelection(job.id, activity.id)}
                >
                  <Checkbox 
                    id={activity.id}
                    checked={activity.selected}
                    onCheckedChange={() => handleActivitySelection(job.id, activity.id)}
                    className="mt-0.5"
                  />
                  <label htmlFor={activity.id} className="cursor-pointer flex-1">
                    {activity.name}
                  </label>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}

      {/* 직무 활동 선택 가이드 */}
      <div className="mt-6 bg-gray-50 p-4 rounded">
        <h3 className="font-semibold text-lg mb-2">직무 활동 선택 가이드</h3>
        <ul className="list-disc pl-5 space-y-1 text-sm">
          <li>각 직무별로 <strong>가장 중요한 세부 활동 3개</strong>를 선택해주세요.</li>
          <li>선택한 세부 활동은 해당 직무의 핵심 업무로 간주되어 역량 진단에 활용됩니다.</li>
          <li>모든 직무에 대해 세부 활동을 선택해야 다음 단계로 진행할 수 있습니다.</li>
          <li>다음 단계에서는 선택한 세부 활동에 대한 내부 역량 진단이 이루어집니다.</li>
        </ul>
      </div>

      {/* 하단 네비게이션 */}
      <div className="mt-8 flex justify-between">
        <Button variant="outline">이전: 직무 입력 및 역할 정의</Button>
        <Button 
          className="bg-blue-600 text-white hover:bg-blue-700"
          disabled={jobData.some(job => job.selectedCount < 3)}
        >
          다음: 직무 생산성 및 내부 역량 진단
        </Button>
      </div>
    </div>
  );
};

export default JobActivitySelection;