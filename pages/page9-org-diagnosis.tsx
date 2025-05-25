import React, { useState } from 'react';
import { Info, Plus, Trash, ChevronRight, ChevronLeft, Save } from 'lucide-react';

const OrganizationInputPage = () => {
  const [teams, setTeams] = useState([
    { id: 1, name: '영업팀', type: '본원적 활동', description: '영업 매출 증대' },
    { id: 2, name: '생산팀', type: '본원적 활동', description: '제조 및 품질관리' },
    { id: 3, name: '인사팀', type: '지원활동', description: 'HR 운영 및 지원' },
    { id: 4, name: '재무팀', type: '지원활동', description: '비용 관리 및 예산' },
  ]);

  const addTeam = () => {
    const newId = teams.length > 0 ? Math.max(...teams.map(team => team.id)) + 1 : 1;
    const newTeam = { id: newId, name: '', type: '', description: '' };
    setTeams([...teams, newTeam]);
  };

  const removeTeam = (id) => {
    setTeams(teams.filter(team => team.id !== id));
  };

  const updateTeam = (id, field, value) => {
    const updatedTeams = teams.map(team => 
      team.id === id ? { ...team, [field]: value } : team
    );
    setTeams(updatedTeams);
  };

  const primaryCount = teams.filter(team => team.type === '본원적 활동').length;
  const supportCount = teams.filter(team => team.type === '지원활동').length;

  return (
    <div className="w-full bg-gray-50 min-h-screen">
      {/* 헤더 */}
      <div className="bg-blue-50 py-4 mb-6 text-center border-b border-blue-100">
        <h1 className="text-xl font-bold text-blue-800">HR Stat - 인원현황 입력</h1>
        <p className="text-sm text-gray-600">조직진단 5-1</p>
      </div>

      {/* 안내 메시지 */}
      <div className="max-w-6xl mx-auto px-4 mb-6">
        <div className="flex bg-white rounded-lg p-4 border border-gray-200 items-start">
          <Info className="text-blue-500 mt-0.5 mr-2 h-5 w-5 shrink-0" />
          <p className="text-sm text-gray-700">
            각 팀(부서)의 정보를 입력하고 본원적 활동과 지원활동을 구분하여 주세요. 본원적 활동은 직접 매출에 영향을 주는 활동(영업, 생산 등)을, 지원활동은 내부 지원 및 관리 기능(인사, 재무 등)을 의미합니다.
          </p>
        </div>
      </div>

      {/* 팀 정보 테이블 */}
      <div className="max-w-6xl mx-auto px-4 mb-6">
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">구분</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">팀명(조직명)</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">본원적/지원활동</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">설명</th>
                <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border-b w-20">삭제</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {teams.map((team, index) => (
                <tr key={team.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
                    {index + 1}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <input
                      type="text"
                      className="w-full px-2 py-1 border border-gray-300 rounded text-sm"
                      value={team.name}
                      onChange={(e) => updateTeam(team.id, 'name', e.target.value)}
                      placeholder="팀명 입력"
                    />
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <select
                      className="w-full px-2 py-1 border border-gray-300 rounded text-sm"
                      value={team.type}
                      onChange={(e) => updateTeam(team.id, 'type', e.target.value)}
                    >
                      <option value="">선택</option>
                      <option value="본원적 활동">본원적 활동</option>
                      <option value="지원활동">지원활동</option>
                    </select>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <input
                      type="text"
                      className="w-full px-2 py-1 border border-gray-300 rounded text-sm"
                      value={team.description}
                      onChange={(e) => updateTeam(team.id, 'description', e.target.value)}
                      placeholder="설명 입력"
                    />
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-center">
                    <button
                      className="text-red-500 hover:text-red-700"
                      onClick={() => removeTeam(team.id)}
                    >
                      <Trash size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="bg-blue-50">
                <td colSpan="5" className="px-4 py-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-sm text-blue-800">
                      총 팀수: {teams.length}개 (본원적 활동: {primaryCount}개, 지원활동: {supportCount}개)
                    </span>
                    <button
                      className="flex items-center text-blue-600 hover:text-blue-800 text-sm"
                      onClick={addTeam}
                    >
                      <Plus size={16} className="mr-1" />
                      팀 추가하기
                    </button>
                  </div>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

      {/* 버튼 영역 */}
      <div className="max-w-6xl mx-auto px-4 mb-6 flex justify-between">
        <button className="px-4 py-2 bg-white border border-gray-300 rounded text-gray-700 text-sm flex items-center">
          <ChevronLeft size={16} className="mr-1" />
          이전
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

export default OrganizationInputPage;