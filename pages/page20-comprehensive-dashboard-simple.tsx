import React, { useState } from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  PieChart, Pie, Cell
} from 'recharts';

const ComprehensiveDashboard = () => {
  const [selectedYear, setSelectedYear] = useState('2024');
  const [selectedTab, setSelectedTab] = useState('summary');

  // 종합 진단 결과 - 주요 지표
  const summaryIndicators = [
    { name: '노동생산성(부가가치/인원)', 우리조직: 85.2, 업종평균: 92.3, 평가: '낮음' },
    { name: '지원 활동 비율(%)', 우리조직: 29.8, 업종평균: 35.5, 평가: '좋음' },
    { name: '내부 역량 보유율(%)', 우리조직: 60, 업종평균: 75, 평가: '부족' },
    { name: '갈등 지수(1~5)', 우리조직: 3.8, 업종평균: 2.5, 평가: '높음' },
    { name: '커뮤니케이션 지수(1~5)', 우리조직: 2.5, 업종평균: 3.9, 평가: '낮음' }
  ];

  // HR Index 주요 지표
  const hrIndexData = [
    { name: '노동소득분배율', 우리회사: 44.9, 산업평균: 54.7 },
    { name: 'HCROI', 우리회사: 1.87, 산업평균: 1.22 }
  ];

  // 갈등-커뮤니케이션 지수 데이터
  const communicationData = [
    { name: '갈등 지수', 우리회사: 3.8, 업종평균: 2.5 },
    { name: '커뮤니케이션 지수', 우리회사: 2.5, 업종평균: 3.9 }
  ];

  // 활동 비율 데이터
  const activityRatioData = [
    { name: '본원적 활동', value: 70.2 },
    { name: '지원 활동', value: 29.8 }
  ];

  // 직무 진단 데이터
  const jobCapabilityData = [
    { name: '영업', value: 80 },
    { name: '생산', value: 65 },
    { name: '인사', value: 50 },
    { name: '재무', value: 45 },
    { name: 'IT', value: 55 }
  ];

  // 전략 추천 데이터
  const strategicRecommendations = [
    {
      category: '조직 구조 최적화',
      strategies: [
        '본원적 활동 인력 비율 강화 (현 70.2% → 목표 75%)',
        '지원 조직 통합 및 효율화를 통한 비율 조정 (현 29.8% → 목표 25%)',
        '팀별 역할과 책임(R&R) 명확화'
      ]
    },
    {
      category: '인적 자원 역량 강화',
      strategies: [
        '인사 및 재무 직무 역량 집중 개발 프로그램 시행',
        '핵심 직무 대상 내부 교육 체계 구축',
        '필수 역량 보유 인재 전략적 채용'
      ]
    },
    {
      category: '조직 문화 개선',
      strategies: [
        '리더십 코칭 프로그램 시행',
        '부서 간 협업 강화를 위한 크로스 펑셔널 팀 구성',
        '투명한 정보 공유 및 의사소통 채널 확대'
      ]
    }
  ];
  
  // 차트 색상 정의
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];
  
  // 진단 영역별 탭 선택 처리
  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };
  
  // 연도 선택 처리
  const handleYearChange = (year) => {
    setSelectedYear(year);
  };
  
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-blue-800">HR Stats - 종합 진단 대시보드</h1>
      
      {/* 기업 정보 및 연도 선택 */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-700">주식회사 A</h2>
          <p className="text-gray-500">제조업 | 중소기업</p>
        </div>
        <div className="flex space-x-2">
          <button 
            className={`px-4 py-2 rounded ${selectedYear === '2022' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
            onClick={() => handleYearChange('2022')}
          >
            2022년
          </button>
          <button 
            className={`px-4 py-2 rounded ${selectedYear === '2023' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
            onClick={() => handleYearChange('2023')}
          >
            2023년
          </button>
          <button 
            className={`px-4 py-2 rounded ${selectedYear === '2024' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
            onClick={() => handleYearChange('2024')}
          >
            2024년
          </button>
        </div>
      </div>
      
      {/* 진단 영역 탭 */}
      <div className="flex mb-6 border-b">
        <button 
          className={`px-6 py-3 font-medium ${selectedTab === 'summary' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
          onClick={() => handleTabChange('summary')}
        >
          종합 요약
        </button>
        <button 
          className={`px-6 py-3 font-medium ${selectedTab === 'management' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
          onClick={() => handleTabChange('management')}
        >
          경영 진단
        </button>
        <button 
          className={`px-6 py-3 font-medium ${selectedTab === 'organization' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
          onClick={() => handleTabChange('organization')}
        >
          조직 진단
        </button>
        <button 
          className={`px-6 py-3 font-medium ${selectedTab === 'strategy' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
          onClick={() => handleTabChange('strategy')}
        >
          전략 도출
        </button>
      </div>
      
      {/* 종합 요약 대시보드 */}
      {selectedTab === 'summary' && (
        <>
          <div className="mb-8">
            <h2 className="text-lg font-semibold mb-4">주요 진단 지표 요약</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white rounded-lg shadow">
                <thead>
                  <tr className="bg-gray-100 text-gray-700">
                    <th className="py-3 px-4 text-left">진단 항목</th>
                    <th className="py-3 px-4 text-right">우리 조직</th>
                    <th className="py-3 px-4 text-right">업종 평균</th>
                    <th className="py-3 px-4 text-center">평가</th>
                  </tr>
                </thead>
                <tbody>
                  {summaryIndicators.map((indicator, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="py-3 px-4 text-left">{indicator.name}</td>
                      <td className="py-3 px-4 text-right font-semibold">{indicator.우리조직}</td>
                      <td className="py-3 px-4 text-right">{indicator.업종평균}</td>
                      <td className="py-3 px-4 text-center">
                        <span 
                          className={`px-2 py-1 rounded text-white font-medium ${
                            indicator.평가 === '좋음' ? 'bg-green-500' : 'bg-red-500'
                          }`}
                        >
                          {indicator.평가}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-4 rounded-lg shadow">
              <h2 className="text-lg font-semibold mb-4">HR Index</h2>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={hrIndexData}
                    layout="vertical"
                    margin={{ top: 20, right: 30, left: 100, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" />
                    <YAxis dataKey="name" type="category" />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="우리회사" fill="#0088FE" />
                    <Bar dataKey="산업평균" fill="#00C49F" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h2 className="text-lg font-semibold mb-4">갈등 지수 및 커뮤니케이션 지수</h2>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={communicationData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis domain={[0, 5]} />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="우리회사" fill="#0088FE" />
                    <Bar dataKey="업종평균" fill="#00C49F" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow mb-8">
            <h2 className="text-lg font-semibold mb-4">조직 활동 비율</h2>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={activityRatioData}
                    cx="50%"
                    cy="50%"
                    labelLine={true}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {activityRatioData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg mb-8">
            <h2 className="text-lg font-semibold mb-2">종합 진단 요약</h2>
            <p className="text-gray-700">
              종합 진단 결과, 다음과 같은 핵심 이슈가 확인되었습니다:
            </p>
            <ul className="list-disc pl-6 mt-2 text-gray-700">
              <li>본원적 활동 인력 비율은 70.2%로 양호하나, 업종 평균과 비교하여 개선 여지가 있음</li>
              <li>인사 및 재무 부문의 내부 역량이 부족하여 역량 강화가 필요함</li>
              <li>갈등 지수가 높고(3.8) 커뮤니케이션 지수가 낮아(2.5) 조직 문화 개선이 시급함</li>
              <li>노동생산성이 업종 평균 대비 낮아 인적자원 배치 및 운영 최적화가 필요함</li>
            </ul>
          </div>
        </>
      )}
      
      {/* 전략 도출 대시보드 */}
      {selectedTab === 'strategy' && (
        <>
          <div className="mb-8">
            <h2 className="text-lg font-semibold mb-4">AI 기반 맞춤형 전략 추천</h2>
            <div className="space-y-6">
              {strategicRecommendations.map((recommendation, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow">
                  <h3 className="font-semibold text-blue-700 text-lg mb-3">{recommendation.category}</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    {recommendation.strategies.map((strategy, strategyIndex) => (
                      <li key={strategyIndex} className="text-gray-700">{strategy}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6 mb-8">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h2 className="text-lg font-semibold mb-3">단기 실행 계획 (3개월)</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>조직별 R&R 명확화 및 중복 기능 식별</li>
                <li>핵심 직무 역량 진단 및 교육 계획 수립</li>
                <li>리더십 코칭 프로그램 설계 및 시범 운영</li>
                <li>부서 간 협업 활성화를 위한 프로젝트 팀 구성</li>
              </ul>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h2 className="text-lg font-semibold mb-3">중장기 실행 계획 (6~12개월)</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>지원 조직 통합 및 본원적 활동 인력 비율 점진적 조정</li>
                <li>직무별 맞춤형 교육 체계 구축 및 운영</li>
                <li>전략적 인재 채용 및 배치 계획 실행</li>
                <li>조직 문화 개선을 위한 소통 채널 확대 및 정착</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg mb-8">
            <h2 className="text-lg font-semibold mb-2">기대 효과</h2>
            <div className="grid grid-cols-3 gap-4 mt-3">
              <div className="bg-white p-3 rounded shadow-sm">
                <h3 className="font-semibold text-blue-700">인적자원 효율성</h3>
                <p className="text-gray-700 mt-1">인력 구조 최적화와 역량 강화를 통해 노동생산성 15% 향상 예상</p>
              </div>
              <div className="bg-white p-3 rounded shadow-sm">
                <h3 className="font-semibold text-blue-700">조직 문화 개선</h3>
                <p className="text-gray-700 mt-1">갈등 지수 감소 및 커뮤니케이션 지수 향상으로 직원 만족도 20% 증가 예상</p>
              </div>
              <div className="bg-white p-3 rounded shadow-sm">
                <h3 className="font-semibold text-blue-700">재무적 성과</h3>
                <p className="text-gray-700 mt-1">인력 운영 효율화를 통한 영업이익 10% 개선 및 HCROI 지수 향상 예상</p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-end">
            <button className="px-6 py-2 bg-blue-600 text-white rounded">
              종합 HR 전략 보고서 다운로드
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ComprehensiveDashboard;