import React, { useState } from 'react';
import { ArrowLeft, ChevronRight, Download, TrendingUp, TrendingDown, Info, AlertCircle, CheckCircle } from 'lucide-react';

const IndustryComparisonAnalysis = () => {
  const [selectedYear, setSelectedYear] = useState('2024');
  
  // 회사 정보
  const companyInfo = {
    name: "(주)인사이트테크",
    industry: "제조업(C26 - 전자부품 제조업)",
  };
  
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
  
  // 경쟁사 비교 데이터
  const competitorComparison = [
    { 
      name: '(주)인사이트테크',
      laborShareRate: 43.7,
      hcroi: 187.8,
      revenuePerEmployee: 467.0,
      operatingProfitPerEmployee: 28.9,
      debtRatio: 18.7
    },
    { 
      name: '당사',
      laborShareRate: 43.7,
      hcroi: 187.8,
      revenuePerEmployee: 467.0,
      operatingProfitPerEmployee: 28.9,
      debtRatio: 18.7
    },
    { 
      name: '경쟁사A',
      laborShareRate: 47.2,
      hcroi: 156.4,
      revenuePerEmployee: 412.5,
      operatingProfitPerEmployee: 25.3,
      debtRatio: 65.8
    },
    { 
      name: '경쟁사B',
      laborShareRate: 51.1,
      hcroi: 142.7,
      revenuePerEmployee: 385.9,
      operatingProfitPerEmployee: 23.8,
      debtRatio: 81.3
    },
    { 
      name: '산업평균',
      laborShareRate: 53.5,
      hcroi: 122.8,
      revenuePerEmployee: 325.0,
      operatingProfitPerEmployee: 27.6,
      debtRatio: 92.1
    }
  ];
  
  // 인사이트
  const insights = [
    "HR 주요 지표 10개 중 8개가 '우수' 판정으로, 대체로 산업 평균보다 양호한 편입니다.",
    "노동소득분배율이 산업 평균 대비 낮고 HCROI는 높아 인적자원 효율성이 매우 우수합니다.",
    "인당 매출액은 산업 평균보다 44% 높은 수준이나, 영업이익 대 매출액 비율이 낮아 효율화 검토가 필요합니다."
  ];
  
  // 산업 평균과의 갭 분석
  const gapAnalysis = {
    positiveGaps: [
      { indicator: 'HCROI', gap: '+65.0%p', rank: '상위 10%' },
      { indicator: '인당 노동생산성', gap: '+56.0', rank: '상위 15%' },
      { indicator: '부채비율', gap: '-73.4%p', rank: '상위 5%' }
    ],
    negativeGaps: [
      { indicator: '총자산 증가율', gap: '-3.2%p', rank: '하위 40%' },
      { indicator: '영업이익 대 매출액 비율', gap: '-2.3%p', rank: '하위 35%' }
    ]
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto p-4">
        {/* 헤더 영역 */}
        <div className="bg-white rounded-lg shadow mb-4">
          <div className="p-5 border-b border-gray-100">
            <div className="flex justify-between items-center">
              <h1 className="text-xl font-bold text-blue-900">
                산업과의 비교 분석
                <span className="ml-2 text-sm font-normal text-gray-500">{companyInfo.name} / {companyInfo.industry}</span>
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
        </div>
        
        {/* 주요 지표 비교 요약 */}
        <div className="flex justify-center mb-6">
          <div className="bg-white rounded-lg shadow p-5 flex space-x-6 max-w-4xl">
            <div className="text-center">
              <div className="text-sm text-gray-500">산업 평균 대비</div>
              <div className="font-bold text-3xl text-green-600">+8</div>
              <div className="text-sm text-gray-600 mt-1">우수 지표</div>
            </div>
            <div className="text-center">
              <div className="text-sm text-gray-500">산업 평균 대비</div>
              <div className="font-bold text-3xl text-red-600">-2</div>
              <div className="text-sm text-gray-600 mt-1">미흡 지표</div>
            </div>
            <div className="text-center">
              <div className="text-sm text-gray-500">HR Index 순위</div>
              <div className="font-bold text-3xl text-blue-600">상위 15%</div>
              <div className="text-sm text-gray-600 mt-1">동종업계 내</div>
            </div>
            <div className="text-center">
              <div className="text-sm text-gray-500">경쟁사 대비</div>
              <div className="font-bold text-3xl text-green-600">+18.9%</div>
              <div className="text-sm text-gray-600 mt-1">HCROI 격차</div>
            </div>
          </div>
        </div>
        
        {/* 주요 HR Index 비교 */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-3">주요 HR Index 산업 비교 (기준년도: {selectedYear})</h2>
          <div className="grid grid-cols-2 gap-4 mb-4">
            {/* 노동소득분배율 카드 */}
            <div className="bg-white rounded-lg shadow overflow-hidden border-2 border-gray-200 hover:border-blue-300 transition-all">
              <div className="p-4 border-b border-gray-100 flex justify-between items-center">
                <h3 className="font-medium">노동소득분배율 (%)</h3>
                <span className="px-2 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">우수</span>
              </div>
              
              <div className="p-4">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-blue-50 p-3 rounded-lg border border-blue-100">
                    <div className="text-sm text-gray-500 mb-1">우리 기업</div>
                    <div className="text-3xl font-bold text-blue-700">43.7%</div>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
                    <div className="text-sm text-gray-500 mb-1">산업 평균</div>
                    <div className="text-3xl font-bold text-gray-700">53.5%</div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-sm text-gray-500">산업 대비</div>
                    <div className="flex items-center">
                      <TrendingDown className="h-4 w-4 text-green-500 mr-1" />
                      <span className="text-green-500 font-medium">-9.8%p (18.3%)</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-gray-500">노동소득분배율 낮을수록 좋음</div>
                    <div className="text-xs text-blue-600">부가가치 중 인건비 비중</div>
                  </div>
                </div>
                
                <div className="h-32 w-full bg-gray-50 flex items-center justify-center rounded">
                  <div className="text-gray-400">차트 영역: 연도별 노동소득분배율 비교</div>
                </div>
              </div>
            </div>
            
            {/* HCROI 카드 */}
            <div className="bg-white rounded-lg shadow overflow-hidden border-2 border-gray-200 hover:border-blue-300 transition-all">
              <div className="p-4 border-b border-gray-100 flex justify-between items-center">
                <h3 className="font-medium">HCROI (%)</h3>
                <span className="px-2 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">우수</span>
              </div>
              
              <div className="p-4">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-blue-50 p-3 rounded-lg border border-blue-100">
                    <div className="text-sm text-gray-500 mb-1">우리 기업</div>
                    <div className="text-3xl font-bold text-blue-700">187.8%</div>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
                    <div className="text-sm text-gray-500 mb-1">산업 평균</div>
                    <div className="text-3xl font-bold text-gray-700">122.8%</div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-sm text-gray-500">산업 대비</div>
                    <div className="flex items-center">
                      <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                      <span className="text-green-500 font-medium">+65.0%p (52.9%)</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-gray-500">HCROI 높을수록 좋음</div>
                    <div className="text-xs text-blue-600">인건비 투자 효율성</div>
                  </div>
                </div>
                
                <div className="h-32 w-full bg-gray-50 flex items-center justify-center rounded">
                  <div className="text-gray-400">차트 영역: 연도별 HCROI 비교</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* 경쟁사 HR Index 비교 */}
          <div className="bg-white rounded-lg shadow mb-6">
            <div className="p-4 border-b border-gray-100">
              <h3 className="font-medium">동종업계 주요 경쟁사 비교</h3>
            </div>
            <div className="p-4">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">기업명</th>
                      <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">노동소득분배율</th>
                      <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">HCROI</th>
                      <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">인당 매출액</th>
                      <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">인당 영업이익</th>
                      <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">부채비율</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {competitorComparison.map((company, index) => (
                      <tr key={index} className={company.name === '당사' ? 'bg-blue-50' : (company.name === '산업평균' ? 'bg-gray-50' : '')}>
                        <td className="px-4 py-3 text-sm font-medium text-gray-900">{company.name}</td>
                        <td className="px-4 py-3 text-sm text-center text-gray-500">{company.laborShareRate}%</td>
                        <td className="px-4 py-3 text-sm text-center text-gray-500">{company.hcroi}%</td>
                        <td className="px-4 py-3 text-sm text-center text-gray-500">{company.revenuePerEmployee}</td>
                        <td className="px-4 py-3 text-sm text-center text-gray-500">{company.operatingProfitPerEmployee}</td>
                        <td className="px-4 py-3 text-sm text-center text-gray-500">{company.debtRatio}%</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        
        {/* 산업 평균과의 격차 분석 */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-3">산업 평균과의 격차 분석</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white rounded-lg shadow p-4">
              <h3 className="text-md font-medium text-green-700 mb-3 flex items-center">
                <TrendingUp className="h-4 w-4 mr-2" />
                우수 지표 (산업 평균 대비)
              </h3>
              <div className="space-y-3">
                {gapAnalysis.positiveGaps.map((gap, index) => (
                  <div key={index} className="flex justify-between items-center p-2 border-b">
                    <span className="text-sm">{gap.indicator}</span>
                    <div className="flex items-center">
                      <span className="text-sm font-medium text-green-600 mr-2">{gap.gap}</span>
                      <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">{gap.rank}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow p-4">
              <h3 className="text-md font-medium text-red-700 mb-3 flex items-center">
                <TrendingDown className="h-4 w-4 mr-2" />
                미흡 지표 (산업 평균 대비)
              </h3>
              <div className="space-y-3">
                {gapAnalysis.negativeGaps.map((gap, index) => (
                  <div key={index} className="flex justify-between items-center p-2 border-b">
                    <span className="text-sm">{gap.indicator}</span>
                    <div className="flex items-center">
                      <span className="text-sm font-medium text-red-600 mr-2">{gap.gap}</span>
                      <span className="text-xs px-2 py-1 bg-red-100 text-red-800 rounded-full">{gap.rank}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* AI 인사이트 */}
        <div className="bg-white rounded-lg shadow mb-6 p-4">
          <h3 className="text-md font-medium flex items-center mb-3">
            <AlertCircle className="h-4 w-4 text-blue-500 mr-2" />
            산업 비교 AI 인사이트
          </h3>
          <div className="space-y-3">
            {insights.map((insight, index) => (
              <div key={index} className="flex items-start p-2 bg-blue-50 rounded-lg">
                <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 mr-2" />
                <p className="text-sm text-gray-700">{insight}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* HR Index 표 */}
        <div className="bg-white rounded-lg shadow mb-6">
          <div className="p-4 border-b border-gray-100">
            <h3 className="font-medium">HR Index 산업 비교 종합</h3>
          </div>
          
          <div className="overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">구분</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">지표명</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">기업 데이터</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">산업 평균 데이터</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">차이</th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">평가</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {hrIndices.flatMap((category, idx) => 
                  category.indices.map((index, subIdx) => (
                    <tr key={`${idx}-${subIdx}`} className={category.category === 'HR Index' ? 'bg-blue-50' : ''}>
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
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right font-medium">
                        {index.diff}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
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
            HR Index 분석으로 이동
          </button>
          
          <div className="flex space-x-3">
            <button className="px-4 py-2 bg-green-600 text-white rounded-md flex items-center hover:bg-green-700 transition">
              <Download size={16} className="mr-2" />
              보고서 다운로드
            </button>
            
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md flex items-center hover:bg-blue-700 transition">
              HR 전략 도출하기
              <ChevronRight size={16} className="ml-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustryComparisonAnalysis;