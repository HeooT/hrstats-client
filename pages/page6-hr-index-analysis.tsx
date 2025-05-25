import React, { useState } from 'react';
import { TrendingUp, TrendingDown, ChevronRight, Download, ArrowLeft, Info, AlertCircle, CheckCircle, PieChart } from 'lucide-react';

const HRIndexAnalysis = () => {
  const [selectedYear, setSelectedYear] = useState('2024');
  const [activeTab, setActiveTab] = useState('종합');
  
  // 탭 데이터
  const tabs = ['종합', '성장성', '수익성', '안정성', '효율성'];
  
  // 노동소득분배율 차트 데이터 
  const laborShareRateData = [
    { year: '2021', '우리기업': 36.3, '산업평균': 52.5 },
    { year: '2022', '우리기업': 45.7, '산업평균': 55.8 },
    { year: '2023', '우리기업': 44.9, '산업평균': 54.7 },
    { year: '2024', '우리기업': 43.7, '산업평균': 53.5 }
  ];
  
  // HCROI 차트 데이터
  const hcroiData = [
    { year: '2021', '우리기업': 214.2, '산업평균': 120.0 },
    { year: '2022', '우리기업': 173.5, '산업평균': 124.6 },
    { year: '2023', '우리기업': 186.5, '산업평균': 123.8 },
    { year: '2024', '우리기업': 187.8, '산업평균': 122.8 }
  ];
  
  // HR 주요 지표 데이터
  const hrIndices = [
    {
      category: '성장성',
      indices: [
        { name: '매출액 증가율', value: '15.7%', industryAvg: '12.9%', diff: '2.8%p', evaluation: '우수' },
        { name: '총자산 증가율', value: '5.2%', industryAvg: '8.4%', diff: '-3.2%p', evaluation: '미흡' }
      ]
    },
    {
      category: '수익성',
      indices: [
        { name: '영업이익 증가율', value: '17.6%', industryAvg: '7.1%', diff: '10.5%p', evaluation: '우수' },
        { name: '영업이익 대 매출액 비율', value: '6.2%', industryAvg: '8.5%', diff: '-2.3%p', evaluation: '미흡' }
      ]
    },
    {
      category: '안정성',
      indices: [
        { name: '부채비율', value: '18.7%', industryAvg: '92.1%', diff: '-73.4%p', evaluation: '우수' },
        { name: '유동비율', value: '162.0%', industryAvg: '158.0%', diff: '4.0%p', evaluation: '우수' }
      ]
    },
    {
      category: '효율성',
      indices: [
        { name: '인당 매출액', value: '467.0', industryAvg: '325.0', diff: '142.0', evaluation: '우수' },
        { name: '인당 영업이익', value: '28.9', industryAvg: '27.6', diff: '1.3', evaluation: '우수' },
        { name: '인당 노동생산성', value: '201.5', industryAvg: '145.5', diff: '56.0', evaluation: '우수' }
      ]
    },
    {
      category: 'HR Index',
      indices: [
        { name: '노동소득분배율', value: '43.7%', industryAvg: '53.5%', diff: '-9.8%p', evaluation: '우수' },
        { name: 'HCROI', value: '187.8%', industryAvg: '122.8%', diff: '65.0%p', evaluation: '우수' }
      ]
    }
  ];
  
  // 주요 지표 설명
  const indexDescriptions = {
    laborShareRate: "노동소득분배율은 부가가치 중 인건비가 차지하는 비율로, 낮을수록 인건비 효율성이 높습니다.",
    hcroi: "HCROI(Human Capital Return On Investment)는 인적자본에 대한 투자 효율성을 보여주는 지표입니다."
  };
  
  // 년간 KPI 목표
  const annualKpiTargets = {
    laborShareRate: 42.0,
    hcroi: 200.0
  };
  
  // 핵심 인사이트 (자동 생성된)
  const insights = [
    "노동소득분배율이 산업 평균보다 9.8%p 낮아 인건비 관리 측면에서 효율적입니다.",
    "HCROI가 산업 평균 대비 65.0%p 높아 인적자본 투자 효율성이 매우 높습니다.",
    "인당 생산성 지표가 모두 산업 평균을 상회하여 인력 운영이 효율적입니다.",
    "부채비율이 매우 낮아 재무적 안정성이 뛰어납니다."
  ];
  
  // 전사 목표 대시보드 
  const companyGoals = [
    { name: '노동소득분배율', target: '42.0%', current: '43.7%', status: 'warning' },
    { name: 'HCROI', target: '200.0%', current: '187.8%', status: 'warning' },
    { name: '인당 매출액', target: '500.0', current: '467.0', status: 'warning' },
    { name: '인당 노동생산성', target: '220.0', current: '201.5', status: 'warning' }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto p-4">
        {/* 헤더 영역 */}
        <div className="bg-white rounded-lg shadow mb-4">
          <div className="p-5 border-b border-gray-100">
            <div className="flex justify-between items-center">
              <h1 className="text-xl font-bold text-blue-900">
                HR Index 분석
                <span className="ml-2 text-sm font-normal text-gray-500">(주)인사이트테크 / 제조업(C26 - 전자부품 제조업)</span>
              </h1>
              <div className="flex space-x-2">
                {['2021', '2022', '2023', '2024'].map(year => (
                  <button
                    key={year}
                    onClick={() => setSelectedYear(year)}
                    className={`px-3 py-1 rounded ${
                      selectedYear === year
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    } text-sm font-medium transition`}
                  >
                    {year}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          <div className="flex border-b border-gray-100">
            {tabs.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-3 px-6 text-center text-sm font-medium transition ${
                  activeTab === tab
                    ? 'text-blue-600 border-b-2 border-blue-500'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
        
        {/* KPI 스코어카드 섹션 */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="p-4 border-b border-gray-100">
              <h2 className="font-medium text-gray-700">HR Index - 노동소득분배율 (%)</h2>
            </div>
            
            <div className="p-5">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <div className="text-3xl font-bold text-gray-800">43.7%</div>
                  <div className="text-sm text-gray-500 mt-1">산업 평균: 53.5%</div>
                </div>
                <div className="px-2 py-1 rounded-full text-xs font-medium text-green-600 bg-green-50 flex items-center">
                  <TrendingDown size={14} className="mr-1" />
                  2.7%
                </div>
              </div>
              
              <div className="flex items-center justify-between mb-2">
                <div className="text-xs text-gray-500 flex items-center">
                  <span className="mr-1">목표:</span>
                  <span className="font-medium">{annualKpiTargets.laborShareRate}%</span>
                </div>
                <div className="text-xs px-2 py-0.5 rounded bg-amber-100 text-amber-800">
                  목표까지 1.7%p 남음
                </div>
              </div>
              
              <div className="relative h-3 bg-gray-200 rounded mb-4">
                <div 
                  className="absolute top-0 left-0 h-full bg-blue-500 rounded-l"
                  style={{ width: '45%' }}
                ></div>
                <div 
                  className="absolute top-0 h-full border-r-2 border-red-500"
                  style={{ left: `${(annualKpiTargets.laborShareRate / 100) * 100}%` }}
                ></div>
              </div>
              
              <div className="h-40 w-full bg-gray-50 flex items-center justify-center rounded">
                <div className="text-gray-400">차트 영역: 노동소득분배율 트렌드</div>
              </div>
              
              <div className="text-xs text-gray-500 mt-2 italic">
                {indexDescriptions.laborShareRate}
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="p-4 border-b border-gray-100">
              <h2 className="font-medium text-gray-700">HR Index - HCROI (%)</h2>
            </div>
            
            <div className="p-5">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <div className="text-3xl font-bold text-gray-800">187.8%</div>
                  <div className="text-sm text-gray-500 mt-1">산업 평균: 122.8%</div>
                </div>
                <div className="px-2 py-1 rounded-full text-xs font-medium text-green-600 bg-green-50 flex items-center">
                  <TrendingUp size={14} className="mr-1" />
                  0.7%
                </div>
              </div>
              
              <div className="flex items-center justify-between mb-2">
                <div className="text-xs text-gray-500 flex items-center">
                  <span className="mr-1">목표:</span>
                  <span className="font-medium">{annualKpiTargets.hcroi}%</span>
                </div>
                <div className="text-xs px-2 py-0.5 rounded bg-amber-100 text-amber-800">
                  목표까지 12.2%p 남음
                </div>
              </div>
              
              <div className="relative h-3 bg-gray-200 rounded mb-4">
                <div 
                  className="absolute top-0 left-0 h-full bg-blue-500 rounded-l"
                  style={{ width: '85%' }}
                ></div>
                <div 
                  className="absolute top-0 h-full border-r-2 border-red-500"
                  style={{ left: `${(annualKpiTargets.hcroi / 250) * 100}%` }}
                ></div>
              </div>
              
              <div className="h-40 w-full bg-gray-50 flex items-center justify-center rounded">
                <div className="text-gray-400">차트 영역: HCROI 트렌드</div>
              </div>
              
              <div className="text-xs text-gray-500 mt-2 italic">
                {indexDescriptions.hcroi}
              </div>
            </div>
          </div>
        </div>
        
        {/* 인사이트 섹션 */}
        <div className="bg-white rounded-lg shadow mb-4 p-5">
          <h2 className="text-lg font-medium text-gray-800 mb-3 flex items-center">
            <AlertCircle size={18} className="mr-2 text-blue-500" />
            AI 분석 인사이트
          </h2>
          
          <div className="grid grid-cols-2 gap-4">
            {insights.map((insight, index) => (
              <div key={index} className="flex items-start bg-blue-50 p-3 rounded-lg">
                <div className="mt-0.5 mr-2 bg-blue-100 text-blue-800 rounded-full p-1">
                  <CheckCircle size={16} />
                </div>
                <p className="text-sm text-blue-800">{insight}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* 전사 목표 대시보드 */}
        <div className="bg-white rounded-lg shadow mb-4 p-5">
          <h2 className="text-lg font-medium text-gray-800 mb-3">전사 목표 대비 현황</h2>
          
          <div className="grid grid-cols-4 gap-4">
            {companyGoals.map((goal, index) => (
              <div key={index} className="border rounded-lg p-3">
                <div className="text-sm text-gray-500 mb-1">{goal.name}</div>
                <div className="flex justify-between items-end">
                  <div className="text-lg font-bold">{goal.current}</div>
                  <div className="text-xs text-gray-500">목표: {goal.target}</div>
                </div>
                <div className="relative h-2 bg-gray-200 rounded mt-2">
                  <div 
                    className={`absolute top-0 left-0 h-full rounded-l ${
                      goal.status === 'success' ? 'bg-green-500' : 
                      goal.status === 'warning' ? 'bg-amber-500' : 'bg-red-500'
                    }`}
                    style={{ 
                      width: goal.name === 'HCROI' ? '85%' : 
                             goal.name === '인당 매출액' ? '75%' : 
                             goal.name === '인당 노동생산성' ? '80%' : '90%' 
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* HR Index 표 */}
        <div className="bg-white rounded-lg shadow mb-4">
          <div className="p-4 border-b border-gray-100">
            <h2 className="font-medium text-gray-800">주요 HR Index 현황</h2>
          </div>
          
          <div className="overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">구분</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">지표명</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">우리 기업</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">산업평균</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">평가</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {hrIndices.flatMap((category, idx) => 
                  category.indices.map((index, subIdx) => (
                    <tr key={`${idx}-${subIdx}`} className={category.category === 'HR Index' ? 'bg-blue-50' : subIdx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      {subIdx === 0 && (
                        <td rowSpan={category.indices.length} className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 align-top">
                          {category.category}
                        </td>
                      )}
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {index.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right font-medium">
                        {index.value}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">
                        {index.industryAvg}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right">
                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                          index.evaluation === '우수' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-red-100 text-red-800'
                        }`}>
                          {index.evaluation}
                        </span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
        
        {/* 하단 버튼 영역 */}
        <div className="mt-6 flex justify-between">
          <button className="px-4 py-2 border border-gray-300 rounded-md flex items-center text-gray-700 hover:bg-gray-50 transition">
            <ArrowLeft size={16} className="mr-2" />
            이전
          </button>
          
          <div className="flex space-x-3">
            <button className="px-4 py-2 bg-green-600 text-white rounded-md flex items-center hover:bg-green-700 transition">
              <Download size={16} className="mr-2" />
              보고서 다운로드
            </button>
            
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md flex items-center hover:bg-blue-700 transition">
              산업 비교 분석하기
              <ChevronRight size={16} className="ml-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HRIndexAnalysis;