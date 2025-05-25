import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PlusCircle, Trash2, HelpCircle, CheckCircle } from 'lucide-react';

const JobDefinitionPage = () => {
  // 기업 정보 상태
  const [companyInfo, setCompanyInfo] = useState({
    name: '인사이트 컨설팅',
    industry: '경영 컨설팅업',
    teams: 10,
    jobsToDefine: true
  });

  // 팀 데이터 상태 (조직진단에서 가져온 것으로 가정)
  const [teamData, setTeamData] = useState([
    { id: 1, name: '영업팀', activityType: '본원적 활동', description: '', role: '', jobClassification: '' },
    { id: 2, name: '생산팀', activityType: '본원적 활동', description: '', role: '', jobClassification: '' },
    { id: 3, name: '품질팀', activityType: '본원적 활동', description: '', role: '', jobClassification: '' },
    { id: 4, name: '인사팀', activityType: '지원 활동', description: '', role: '', jobClassification: '' },
    { id: 5, name: '재무팀', activityType: '지원 활동', description: '', role: '', jobClassification: '' }
  ]);

  // NCS 직무 분류 데이터 (예시)
  const ncsJobCategories = {
    '영업 활동': '영업·마케팅',
    'B2B 판매': '영업·마케팅',
    '고객 관리': '영업·마케팅',
    '제조': '생산·제조',
    '품질 관리': '생산·제조',
    '공정 관리': '생산·제조',
    '채용': '인사·HR',
    '인사 관리': '인사·HR',
    '성과 평가': '인사·HR',
    '재무 관리': '재무·회계',
    '회계': '재무·회계',
    '예산 관리': '재무·회계'
  };

  // 역할 입력 처리
  const handleRoleChange = (id, value) => {
    const updatedTeams = teamData.map(team => {
      if (team.id === id) {
        // 역할 텍스트에 기반한 자동 직무 분류
        let jobClass = '';
        Object.keys(ncsJobCategories).forEach(keyword => {
          if (value.toLowerCase().includes(keyword.toLowerCase())) {
            jobClass = ncsJobCategories[keyword];
          }
        });
        
        return { ...team, role: value, jobClassification: jobClass };
      }
      return team;
    });
    setTeamData(updatedTeams);
  };

  // 새 직무 추가
  const addNewJob = () => {
    const newId = Math.max(...teamData.map(team => team.id)) + 1;
    setTeamData([...teamData, { 
      id: newId, 
      name: `신규 팀 ${newId}`, 
      activityType: '본원적 활동', 
      description: '', 
      role: '', 
      jobClassification: '' 
    }]);
  };

  // 직무 삭제
  const removeJob = (id) => {
    setTeamData(teamData.filter(team => team.id !== id));
  };

  // UI 렌더링
  return (
    <div className="p-6 max-w-7xl mx-auto bg-white">
      {/* 페이지 헤더 */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">직무 입력 및 역할 정의</h1>
        <div className="flex flex-wrap gap-4 text-sm bg-gray-50 p-4 rounded">
          <div><span className="font-semibold">기업명:</span> {companyInfo.name}</div>
          <div><span className="font-semibold">업종:</span> {companyInfo.industry}</div>
          <div><span className="font-semibold">입력된 팀:</span> 총 {teamData.length}개</div>
        </div>
      </div>

      {/* 설명 카드 */}
      <Card className="mb-6 bg-blue-50 border-blue-200">
        <CardContent className="pt-4">
          <div className="flex items-start gap-2">
            <HelpCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
            <p className="text-sm">
              조직진단에서 입력한 팀 데이터를 기반으로 각 팀의 주요 역할을 상세히 입력해주세요. 
              입력된 역할 설명을 바탕으로 NCS(국가직무능력표준) 기반 자동 직무 분류가 진행됩니다.
              이 데이터는 이후 직무별 역량 분석 및 최적 인력 배치 전략 도출에 활용됩니다.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* 직무 입력 테이블 */}
      <Card>
        <CardHeader>
          <CardTitle>직무 입력 테이블</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead className="bg-gray-50">
                <tr>
                  <th className="border p-2 text-left">팀명 (조직명)</th>
                  <th className="border p-2 text-left">본원적/지원 활동</th>
                  <th className="border p-2 text-left">주요 역할 (상세히 입력)</th>
                  <th className="border p-2 text-left">자동 직무 분류 (NCS 기반)</th>
                  <th className="border p-2 text-center w-16">삭제</th>
                </tr>
              </thead>
              <tbody>
                {teamData.map((team) => (
                  <tr key={team.id} className="hover:bg-gray-50">
                    <td className="border p-2">{team.name}</td>
                    <td className="border p-2">
                      <span className={`px-2 py-1 rounded text-xs ${
                        team.activityType === '본원적 활동' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
                      }`}>
                        {team.activityType}
                      </span>
                    </td>
                    <td className="border p-2">
                      <textarea 
                        className="w-full p-2 border rounded resize-none min-h-[70px]"
                        placeholder="팀의 주요 역할을 상세히 설명해주세요..."
                        value={team.role}
                        onChange={(e) => handleRoleChange(team.id, e.target.value)}
                      />
                    </td>
                    <td className="border p-2">
                      {team.jobClassification ? (
                        <div className="flex items-center gap-1.5">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span>{team.jobClassification}</span>
                        </div>
                      ) : (
                        <span className="text-gray-400 text-sm italic">역할 입력 필요</span>
                      )}
                    </td>
                    <td className="border p-2 text-center">
                      <button 
                        onClick={() => removeJob(team.id)}
                        className="text-red-500 hover:text-red-700 transition-colors"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 직무 추가 버튼 */}
          <div className="mt-4">
            <Button onClick={addNewJob} variant="outline" className="flex items-center gap-1">
              <PlusCircle className="w-4 h-4" />
              <span>직무 추가하기</span>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* 직무 입력 가이드 */}
      <div className="mt-6 bg-gray-50 p-4 rounded">
        <h3 className="font-semibold text-lg mb-2">직무 입력 가이드</h3>
        <ul className="list-disc pl-5 space-y-1 text-sm">
          <li>각 팀의 주요 역할을 가능한 구체적으로 설명해주세요. (예: 업무 범위, 책임, 주요 활동 등)</li>
          <li>입력된 역할 설명을 바탕으로 NCS 기반 직무 분류가 자동으로 이루어집니다.</li>
          <li>자동 분류된 직무가 적절하지 않은 경우, 역할 설명을 더 상세하게 수정해주세요.</li>
          <li>다음 단계에서 직무별 세부 활동과 역량을 선택하고 평가하게 됩니다.</li>
        </ul>
      </div>

      {/* 하단 네비게이션 */}
      <div className="mt-8 flex justify-between">
        <Button variant="outline">이전: 조직진단</Button>
        <Button className="bg-blue-600 text-white hover:bg-blue-700">다음: 직무별 세부 활동 선택</Button>
      </div>
    </div>
  );
};

export default JobDefinitionPage;