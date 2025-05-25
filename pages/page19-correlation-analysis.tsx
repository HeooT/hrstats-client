import React, { useState } from 'react';
import { 
  ScatterChart, Scatter, XAxis, YAxis, ZAxis, CartesianGrid, 
  Tooltip, Legend, ResponsiveContainer, BarChart, Bar, LineChart, 
  Line, PieChart, Pie, Cell 
} from 'recharts';

const CorrelationAnalysis = () => {
  const [selectedYear, setSelectedYear] = useState('2024');
  
  // 다양한 부서와 팀에 대한 상관관계 데이터
  const correlationData = [
    { name: '영업팀', 갈등지수: 3.8, 커뮤니케이션지수: 3.1, 생산성: 82, 직원만족도: 68 },
    { name: '생산팀', 갈등지수: 4.2, 커뮤니케이션지수: 2.4, 생산성: 75, 직원만족도: 58 },
    { name: '인사팀', 갈등지수: 2.6, 커뮤니케이션지수: 3.8, 생산성: 88, 직원만족도: 85 },
    { name: '재무팀', 갈등지수: 3.1, 커뮤니케이션지수: 3.2, 생산성: 84, 직원만족도: 72 },
    { name: 'IT팀', 갈등지수: 3.5, 커뮤니케이션지수: 2.7, 생산성: 79, 직원만족도: 65 },
    { name: '마케팅팀', 갈등지수: 3.2, 커뮤니케이션지수: 3.4, 생산성: 86, 직원만족도: 75 },
    { name: '연구개발팀', 갈등지수: 2.9, 커뮤니케이션지수: 3.5, 생산성: 90, 직원만족도: 82 },
  ];

  // 연도별 데이터
  const yearlyData = {
    '2022': [
      { name: '조직 A', 갈등지수: 3.5, 커뮤니케이션지수: 2.8, 생산성: 78, 직원만족도: 65 },
      { name: '조직 B', 갈등지수: 2.3, 커뮤니케이션지수: 4.1, 생산성: 92, 직원만족도: 88 },
    ],
    '2023': [
      { name: '조직 A', 갈등지수: 3.7, 커뮤니케이션지수: 2.6, 생산성: 76, 직원만족도: 62 },
      { name: '조직 B', 갈등지수: 2.2, 커뮤니케이션지수: 4.0, 생산성: 91, 직원만족도: 86 },
    ],
    '2024': [
      { name: '조직 A', 갈등지수: 3.8, 커뮤니케이션지수: 2.5, 생산성: 75, 직원만족도: 60 },
      { name: '조직 B', 갈등지수: 2.1, 커뮤니케이션지수: 4.2, 생산성: 93, 직원만족도: 89 },
    ],
  };

  // 산업별 비교 데이터
  const industryComparisonData = [
    { name: '제조업', 갈등지수: 3.2, 커뮤니케이션지수: 3.1, 생산성: 80, 직원만족도: 72 },
    { name: 'IT/서비스업', 갈등지수: 2.8, 커뮤니케이션지수: 3.6, 생산성: 86, 직원만족도: 78 },
    { name: '금융업', 갈등지수: 3.0, 커뮤니케이션지수: 3.4, 생산성: 84, 직원만족도: 75 },
    { name: '유통/판매업', 갈등지수: 3.3, 커뮤니케이션지수: 3.0, 생산성: 78, 직원만족도: 70 },
    { name: '우리 회사', 갈등지수: 3.8, 커뮤니케이션지수: 2.6, 생산성: 75, 직원만족도: 65 },
  ];

  // 산업군별 평균 통계
  const industryAverages = [
    { name: '갈등 지수 (낮을수록 좋음)', 우리회사: 3.8, 산업평균: 2.5 },
    { name: '커뮤니케이션 지수', 우리회사: 2.6, 산업평균: 3.9 },
    { name: '생산성 지수', 우리회사: 75, 산업평균: 85 },
    { name: '직원 만족도', 우리회사: 65, 산업평균: 78 },
  ];

  // HR Index 영향 데이터
  const hrIndexData = [
    { name: '노동소득분배율', 우리회사: 44.9, 산업평균: 54.7 },
    { name: 'HCROI', 우리회사: 1.87, 산업평균: 1.22 },
  ];

  // 원인 분석 데이터
  const causeAnalysisData = [
    { name: '의사소통 문제', value: 35 },
    { name: '역할 불명확', value: 25 },
    { name: '리더십 스타일', value: 20 },
    { name: '업무 프로세스', value: 12 },
    { name: '기타 요인', value: 8 },
  ];
  
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#A4DE6C'];

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-blue-800">HR Stats - 갈등 지수와 커뮤니케이션 지수 상관관계 분석</h1>
      
      {/* 개요 정보 */}
      <div className="bg-blue-50 p-4 rounded-lg mb-8">
        <h2 className="text-lg font-semibold mb-2">상관관계 분석 개요</h2>
        <p className="text-gray-700">
          갈등 지수와 커뮤니케이션 지수의 상관관계를 분석하여 조직 내 소통 문제가 갈등에 미치는 영향과
          이러한 요소들이 생산성 및 직원 만족도에 어떤 영향을 미치는지 파악합니다.
          데이터 기반 분석을 통해 인적자원 관리와 조직 문화 개선을 위한 전략적 의사결정을 지원합니다.
        </p>
      </div>
      
      {/* 비교 연도 선택 */}
      <div className="mb-6 bg-gray-50 p-4 rounded-lg">
        <h2 className="text-lg font-semibold mb-3">비교 연도 선택</h2>
        <div className="flex space-x-4">
          <button 
            className={`px-4 py-2 rounded ${selectedYear === '2022' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
            onClick={() => setSelectedYear('2022')}
          >
            2022년
          </button>
          <button 
            className={`px-4 py-2 rounded ${selectedYear === '2023' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
            onClick={() => setSelectedYear('2023')}
          >
            2023년
          </button>
          <button 
            className={`px-4 py-2 rounded ${selectedYear === '2024' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
            onClick={() => setSelectedYear('2024')}
          >
            2024년
          </button>
        </div>
      </div>
      
      {/* 주요 지표 개요 */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        <div className="bg-blue-50 p-4 rounded-lg">
          <h2 className="text-md font-semibold mb-2">갈등 지수</h2>
          <div className="text-center">
            <div className={`text-3xl font-bold ${3.8 > 3 ? 'text-red-600' : 'text-green-600'}`}>
              3.8
            </div>
            <div className="text-sm text-gray-500 mt-1">업종 평균: 2.5</div>
          </div>
        </div>
        <div className="bg-blue-50 p-4 rounded-lg">
          <h2 className="text-md font-semibold mb-2">커뮤니케이션 지수</h2>
          <div className="text-center">
            <div className={`text-3xl font-bold ${2.6 < 3 ? 'text-red-600' : 'text-green-600'}`}>
              2.6
            </div>
            <div className="text-sm text-gray-500 mt-1">업종 평균: 3.9</div>
          </div>
        </div>
        <div className="bg-blue-50 p-4 rounded-lg">
          <h2 className="text-md font-semibold mb-2">생산성 지수</h2>
          <div className="text-center">
            <div className={`text-3xl font-bold ${75 < 80 ? 'text-red-600' : 'text-green-600'}`}>
              75
            </div>
            <div className="text-sm text-gray-500 mt-1">업종 평균: 85</div>
          </div>
        </div>
        <div className="bg-blue-50 p-4 rounded-lg">
          <h2 className="text-md font-semibold mb-2">직원 만족도</h2>
          <div className="text-center">
            <div className={`text-3xl font-bold ${65 < 70 ? 'text-red-600' : 'text-green-600'}`}>
              65
            </div>
            <div className="text-sm text-gray-500 mt-1">업종 평균: 78</div>
          </div>
        </div>
      </div>
      
      {/* 차트 영역 - 첫 번째 행 */}
      <div className="grid grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">조직 A vs 조직 B 비교 ({selectedYear}년)</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={yearlyData[selectedYear]}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="갈등지수" fill="#FF8042" />
                <Bar dataKey="커뮤니케이션지수" fill="#0088FE" />
                <Bar dataKey="생산성" fill="#00C49F" />
                <Bar dataKey="직원만족도" fill="#FFBB28" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">갈등 지수와 커뮤니케이션 지수 상관관계</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <ScatterChart
                margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
              >
                <CartesianGrid />
                <XAxis type="number" dataKey="갈등지수" name="갈등 지수" domain={[1, 5]} label={{ value: '갈등 지수', position: 'bottom' }} />
                <YAxis type="number" dataKey="커뮤니케이션지수" name="커뮤니케이션 지수" domain={[1, 5]} label={{ value: '커뮤니케이션 지수', angle: -90, position: 'insideLeft' }} />
                <ZAxis type="number" dataKey="생산성" range={[60, 300]} name="생산성" />
                <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                <Legend />
                <Scatter name="부서별 데이터" data={correlationData} fill="#8884d8" />
              </ScatterChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      
      {/* 차트 영역 - 두 번째 행 */}
      <div className="grid grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">산업별 비교</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={industryComparisonData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="갈등지수" fill="#FF8042" />
                <Bar dataKey="커뮤니케이션지수" fill="#0088FE" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">HR Index와의 연관성</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={hrIndexData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                layout="vertical"
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
      </div>
      
      {/* 원인 분석 */}
      <div className="grid grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">원인 분석</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={causeAnalysisData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {causeAnalysisData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">산업 평균 대비 주요 지표</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={industryAverages}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                layout="vertical"
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis dataKey="name" type="category" width={150} />
                <Tooltip />
                <Legend />
                <Bar dataKey="우리회사" fill="#0088FE" />
                <Bar dataKey="산업평균" fill="#00C49F" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      
      {/* 결론 및 추천 사항 */}
      <div className="bg-blue-50 p-4 rounded-lg mb-8">
        <h2 className="text-lg font-semibold mb-2">결론 및 추천 사항</h2>
        <p className="text-gray-700 mb-4">
          갈등 지수가 높고 커뮤니케이션 지수가 낮은 조직에서는 생산성과 직원 만족도가 낮게 나타납니다.
          우리 조직의 갈등 지수(3.8)는 업종 평균(2.5)보다 높고, 커뮤니케이션 지수(2.6)는 업종 평균(3.9)보다 낮은 상황으로,
          조직 문화 개선이 필요한 상태입니다.
        </p>
        <div className="font-semibold text-blue-800">주요 개선 전략:</div>
        <ul className="list-disc pl-6 mt-2 text-gray-700">
          <li>리더십 코칭 및 조직 문화 개선 워크숍 실시</li>
          <li>부서 간 협업 강화를 위한 크로스 펑셔널 팀 구성</li>
          <li>효과적인 소통 채널 구축 및 투명한 정보 공유 시스템 도입</li>
          <li>역할과 책임의 명확화를 위한 직무 재설계</li>
        </ul>
      </div>
      
      {/* 보고서 생성 버튼 */}
      <div className="flex justify-end">
        <button className="px-6 py-2 bg-blue-600 text-white rounded">
          분석 보고서 PDF 생성
        </button>
      </div>
    </div>
  );
};

export default CorrelationAnalysis;