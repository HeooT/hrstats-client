import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Save, Info } from 'lucide-react';

const OrganizationDetailsPage = () => {
  const [teamDetails, setTeamDetails] = useState([
    { id: 1, name: '영업팀', type: '본원적 활동', avgPeople: 15, avgWorkHours: 42, avgSalary: 450, avgYears: 3.5 },
    { id: 2, name: '생산팀', type: '본원적 활동', avgPeople: 35, avgWorkHours: 44, avgSalary: 380, avgYears: 4.2 },
    { id: 3, name: '인사팀', type: '지원활동', avgPeople: 8, avgWorkHours: 40, avgSalary: 420, avgYears: 5.1 },
    { id: 4, name: '재무팀', type: '지원활동', avgPeople: 7, avgWorkHours: 39, avgSalary: 440, avgYears: 4.8 },
  ]);

  const updateTeamDetail = (id, field, value) => {
    const numValue = parseFloat(value) || 0;
    const updatedDetails = teamDetails.map(team => 
      team.id === id ? { ...team, [field]: numValue } : team
    );
    setTeamDetails(updatedDetails);
  };

  // 요약 데이터 계산
  const totalPeople = teamDetails.reduce((sum, team) => sum + team.avgPeople, 0);
  const avgWorkHours = ((teamDetails.reduce((sum, team) => sum + (team.avgWorkHours * team.avgPeople), 0) / totalPeople) || 0).toFixed(1);
  const avgSalary = ((teamDetails.reduce((sum, team) => sum + (team.avgSalary * team.avgPeople), 0) / totalPeople) || 0).toFixed(1);
  const avgYears = ((teamDetails.reduce((sum, team) => sum + (team.avgYears * team.avgPeople), 0) / totalPeople) || 0).toFixed(1);

  return (
    <div className="w-full bg-gray-50 min-h-screen">
      {/* 헤더 */}
      <div className="bg-blue-50 py-4 mb-6 text-center border-b border-blue-100">
        <h1 className="text-xl font-bold text-blue-800">HR Stat - 조직 기능별 데이터 입력</h1>
        <p className="text-sm text-gray-600">조직진단 5-2</p>
      </div>

      {/* 요약 정보 */}
      <div className="max-w-6xl mx-auto px-4 mb-6">
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <div className="grid grid-cols-4 gap-4">
            <div>
              <p className="text-xs text-gray-500">총 인원</p>
              <p className="text-xl font-bold">{totalPeople}명</p>
            </div>
            <div>
              <p className="text-xs text-gray-500">평균 근로시간</p>
              <p className="text-xl font-bold">{avgWorkHours}시간</p>
            </div>
            <div>
              <p className="text-xs text-gray-500">평균 임금</p>
              <p className="text-xl font-bold">{avgSalary}만원</p>
            </div>
            <div>
              <p className="text-xs text-gray-500">평균 재직연수</p>
              <p className="text-xl font-bold">{avgYears}년</p>
            </div>
          </div>
        </div>
      </div>

      {/* 안내 메시지 */}
      <div className="max-w-6xl mx-auto px-4 mb-6">
        <div className="flex bg-white rounded-lg p-4 border border-gray-200 items-start">
          <Info className="text-blue-500 mt-0.5 mr-2 h-5 w-5 shrink-0" />
          <p className="text-sm text-gray-700">
            각 팀별 평균 인원, 근로시간, 임금, 재직연수를 입력해주세요. 입력된 데이터는 조직 효율성 분석 및 최적 인력 배치 전략 도출에 활용됩니다.
          </p>
        </div>
      </div>

      {/* 팀 세부 정보 테이블 */}
      <div className="max-w-6xl mx-auto px-4 mb-6">
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">팀명(조직명)</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">본원적/지원활동</th>
                <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border-b">평균 인원<br/>(명, 연평균)</th>
                <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border-b">평균 근로시간<br/>(시간/주)</th>
                <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border-b">평균 임금<br/>(만원/월, 연평균)</th>
                <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border-b">평균 재직연수<br/>(년)</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {teamDetails.map((team, index) => (
                <tr key={team.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-4 py-3 whitespace-nowrap text-sm font-medium">
                    {team.name}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm">
                    <span className={`py-1 px-2 rounded-full text-xs ${team.type === '본원적 활동' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}`}>
                      {team.type}
                    </span>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <input
                      type="number"
                      className="w-full px-2 py-1 border border-gray-300 rounded text-sm text-right"
                      value={team.avgPeople}
                      onChange={(e) => updateTeamDetail(team.id, 'avgPeople', e.target.value)}
                    />
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <input
                      type="number"
                      className="w-full px-2 py-1 border border-gray-300 rounded text-sm text-right"
                      value={team.avgWorkHours}
                      onChange={(e) => updateTeamDetail(team.id, 'avgWorkHours', e.target.value)}
                    />
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <input
                      type="number"
                      className="w-full px-2 py-1 border border-gray-300 rounded text-sm text-right"
                      value={team.avgSalary}
                      onChange={(e) => updateTeamDetail(team.id, 'avgSalary', e.target.value)}
                    />
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <input
                      type="number"
                      className="w-full px-2 py-1 border border-gray-300 rounded text-sm text-right"
                      value={team.avgYears}
                      onChange={(e) => updateTeamDetail(team.id, 'avgYears', e.target.value)}
                      step="0.1"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="bg-blue-50">
                <td colSpan="2" className="px-4 py-3 text-right font-medium text-sm">전체 평균:</td>
                <td className="px-4 py-3 text-center font-medium">{totalPeople}명</td>
                <td className="px-4 py-3 text-center font-medium">{avgWorkHours}시간</td>
                <td className="px-4 py-3 text-center font-medium">{avgSalary}만원</td>
                <td className="px-4 py-3 text-center font-medium">{avgYears}년</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

      {/* 버튼 영역 */}
      <div className="max-w-6xl mx-auto px-4 mb-6 flex justify-between">
        <button className="px-4 py-2 bg-white border border-gray-300 rounded text-gray-700 text-sm flex items-center">
          <ChevronLeft size={16} className="mr-1" />
          이전 단계
        </button>
        <div className="flex space-x-2">
          <button className="px-4 py-2 bg-green-600 text-white rounded text-sm flex items-center">
            <Save size={16} className="mr-1" />
            저장하기
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded text-sm flex items-center">
            다음 단계
            <ChevronRight size={16} className="ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrganizationDetailsPage;