import React, { useState } from 'react';

const SimplifiedIncomeStatementPreview = () => {
  const years = [2020, 2021, 2022, 2023, 2024];
  
  // 섹션 표시 상태
  const [expandedSections, setExpandedSections] = useState({
    sga: true, // 미리보기를 위해 기본적으로 열어둠
    manufacturing: false,
    finance: false
  });
  
  // 샘플 데이터
  const sampleData = {
    revenue: ['500,000,000', '550,000,000', '600,000,000', '650,000,000', '700,000,000'],
    costOfSales: ['350,000,000', '385,000,000', '420,000,000', '455,000,000', '490,000,000'],
    operatingProfit: ['65,000,000', '71,500,000', '78,000,000', '84,500,000', '91,000,000'],
    
    sga: {
      salaries: ['50,000,000', '55,000,000', '60,000,000', '65,000,000', '70,000,000'],
      retirement: ['5,000,000', '5,500,000', '6,000,000', '6,500,000', '7,000,000'],
      welfare: ['3,000,000', '3,300,000', '3,600,000', '3,900,000', '4,200,000'],
      rent: ['4,000,000', '4,400,000', '4,800,000', '5,200,000', '5,600,000'],
      tax: ['2,000,000', '2,200,000', '2,400,000', '2,600,000', '2,800,000'],
      depreciation: ['3,000,000', '3,300,000', '3,600,000', '3,900,000', '4,200,000']
    },
    
    manufacturing: {
      labor: ['40,000,000', '44,000,000', '48,000,000', '52,000,000', '56,000,000'],
      retirement: ['4,000,000', '4,400,000', '4,800,000', '5,200,000', '5,600,000'],
      welfare: ['2,000,000', '2,200,000', '2,400,000', '2,600,000', '2,800,000'],
      rent: ['3,000,000', '3,300,000', '3,600,000', '3,900,000', '4,200,000'],
      tax: ['1,500,000', '1,650,000', '1,800,000', '1,950,000', '2,100,000'],
      depreciation: ['5,000,000', '5,500,000', '6,000,000', '6,500,000', '7,000,000']
    },
    
    finance: {
      interestIncome: ['1,000,000', '1,100,000', '1,200,000', '1,300,000', '1,400,000'],
      interestExpense: ['3,000,000', '3,300,000', '3,600,000', '3,900,000', '4,200,000']
    }
  };
  
  // 섹션 토글 함수
  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };
  
  // 자동 계산 데이터
  const grossProfit = years.map((_, idx) => {
    const revenue = parseInt((sampleData.revenue[idx] || '0').replace(/,/g, '')) || 0;
    const cost = parseInt((sampleData.costOfSales[idx] || '0').replace(/,/g, '')) || 0;
    return revenue - cost;
  });
  
  // 판매비와 관리비 총합 계산
  const sgaTotal = years.map((_, idx) => {
    const salaries = parseInt((sampleData.sga.salaries[idx] || '0').replace(/,/g, '')) || 0;
    const retirement = parseInt((sampleData.sga.retirement[idx] || '0').replace(/,/g, '')) || 0;
    const welfare = parseInt((sampleData.sga.welfare[idx] || '0').replace(/,/g, '')) || 0;
    const rent = parseInt((sampleData.sga.rent[idx] || '0').replace(/,/g, '')) || 0;
    const tax = parseInt((sampleData.sga.tax[idx] || '0').replace(/,/g, '')) || 0;
    const depreciation = parseInt((sampleData.sga.depreciation[idx] || '0').replace(/,/g, '')) || 0;
    return salaries + retirement + welfare + rent + tax + depreciation;
  });
  
  // 제조원가명세서 총합 계산
  const manufacturingTotal = years.map((_, idx) => {
    const labor = parseInt((sampleData.manufacturing.labor[idx] || '0').replace(/,/g, '')) || 0;
    const retirement = parseInt((sampleData.manufacturing.retirement[idx] || '0').replace(/,/g, '')) || 0;
    const welfare = parseInt((sampleData.manufacturing.welfare[idx] || '0').replace(/,/g, '')) || 0;
    const rent = parseInt((sampleData.manufacturing.rent[idx] || '0').replace(/,/g, '')) || 0;
    const tax = parseInt((sampleData.manufacturing.tax[idx] || '0').replace(/,/g, '')) || 0;
    const depreciation = parseInt((sampleData.manufacturing.depreciation[idx] || '0').replace(/,/g, '')) || 0;
    return labor + retirement + welfare + rent + tax + depreciation;
  });
  
  // 금융비용 총합 계산
  const financeTotal = years.map((_, idx) => {
    const interestIncome = parseInt((sampleData.finance.interestIncome[idx] || '0').replace(/,/g, '')) || 0;
    const interestExpense = parseInt((sampleData.finance.interestExpense[idx] || '0').replace(/,/g, '')) || 0;
    return interestExpense - interestIncome; // 비용에서 수익을 뺀 값
  });
  
  // 부가가치 계산
  const valueAdded = years.map((_, idx) => {
    const operatingProfit = parseInt((sampleData.operatingProfit[idx] || '0').replace(/,/g, '')) || 0;
    return operatingProfit + sgaTotal[idx] + manufacturingTotal[idx] + financeTotal[idx];
  });
  
  // 천 단위 콤마 포맷팅
  const formatNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      {/* 헤더 */}
      <div className="bg-blue-50 p-6">
        <h1 className="text-2xl font-bold text-blue-700 text-center">
          HR Stat - 손익계산서 입력
        </h1>
        <p className="text-center text-gray-600">경영진단 2/4</p>
      </div>
      
      <div className="p-6">
        {/* 입력 가이드 */}
        <div className="mb-6 p-4 bg-blue-50 rounded-md">
          <div className="flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-600 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            <div className="flex-1">
              <p className="text-blue-800 font-medium">데이터 입력 안내</p>
              <p className="text-sm text-blue-700 mt-1">
                모든 항목을 입력하면 가장 정확한 분석이 가능하나, 필수 항목(*)만 입력해도 기본적인 HR 분석이 가능합니다. 
                상세 분석을 위해 펼칠 수 있는 항목들(판매비와 관리비, 제조원가명세서 등)은 선택적으로 입력하실 수 있습니다. 
                이런 상세 데이터는 노동소득분배율, HCROI, 노동투입량 등 심층 분석에 활용됩니다.
              </p>
            </div>
          </div>
        </div>
        
        {/* 테이블 */}
        <div className="overflow-x-auto rounded-lg border border-gray-200">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b">
                <th className="p-3 text-left font-medium text-gray-600 whitespace-nowrap">항목</th>
                {years.map(year => (
                  <th key={year} className="p-3 text-center font-medium text-gray-600 whitespace-nowrap">{year}</th>
                ))}
              </tr>
            </thead>
            
            <tbody>
              {/* 필수 항목 */}
              {/* 매출액 */}
              <tr className="border-b hover:bg-gray-50">
                <td className="p-3 font-medium whitespace-nowrap">1. 매출액 <span className="text-red-500">*</span></td>
                {years.map((_, idx) => (
                  <td key={idx} className="p-3">
                    <div className="w-full p-2 border border-gray-300 rounded text-right">
                      {sampleData.revenue[idx]}
                    </div>
                  </td>
                ))}
              </tr>
              
              {/* 매출원가 */}
              <tr className="border-b hover:bg-gray-50">
                <td className="p-3 font-medium whitespace-nowrap">2. 매출원가 <span className="text-red-500">*</span></td>
                {years.map((_, idx) => (
                  <td key={idx} className="p-3">
                    <div className="w-full p-2 border border-gray-300 rounded text-right">
                      {sampleData.costOfSales[idx]}
                    </div>
                  </td>
                ))}
              </tr>
              
              {/* 매출총이익 */}
              <tr className="border-b bg-blue-50">
                <td className="p-3 font-medium whitespace-nowrap">3. 매출총이익 (자동계산)</td>
                {years.map((_, idx) => (
                  <td key={idx} className="p-3 text-right font-medium text-blue-700">
                    {formatNumber(grossProfit[idx])}
                  </td>
                ))}
              </tr>
              
              {/* 영업이익 */}
              <tr className="border-b hover:bg-gray-50">
                <td className="p-3 font-medium whitespace-nowrap">4. 영업이익 <span className="text-red-500">*</span></td>
                {years.map((_, idx) => (
                  <td key={idx} className="p-3">
                    <div className="w-full p-2 border border-gray-300 rounded text-right">
                      {sampleData.operatingProfit[idx]}
                    </div>
                  </td>
                ))}
              </tr>
              
              {/* 판매비와 관리비 섹션 헤더 - 토글 가능 */}
              <tr 
                className="bg-gray-100 font-medium border-b cursor-pointer hover:bg-gray-200" 
                onClick={() => toggleSection('sga')}
              >
                <td colSpan={years.length + 1} className="p-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="mr-2">5. 판매비와 관리비</span>
                      <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded">노동소득분배율, HCROI 계산에 필요</span>
                    </div>
                    <div>
                      {expandedSections.sga ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                        </svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                  </div>
                </td>
              </tr>
              
              {/* 판매비와 관리비 항목들 - 조건부 렌더링 */}
              {expandedSections.sga && (
                <>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-3 pl-8 whitespace-nowrap">- 급여(판관비)</td>
                    {years.map((_, idx) => (
                      <td key={idx} className="p-3">
                        <div className="w-full p-2 border border-gray-300 rounded text-right">
                          {sampleData.sga.salaries[idx]}
                        </div>
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-3 pl-8 whitespace-nowrap">- 퇴직급여(판관비)</td>
                    {years.map((_, idx) => (
                      <td key={idx} className="p-3">
                        <div className="w-full p-2 border border-gray-300 rounded text-right">
                          {sampleData.sga.retirement[idx]}
                        </div>
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-3 pl-8 whitespace-nowrap">- 복리후생비(판관비)</td>
                    {years.map((_, idx) => (
                      <td key={idx} className="p-3">
                        <div className="w-full p-2 border border-gray-300 rounded text-right">
                          {sampleData.sga.welfare[idx]}
                        </div>
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-3 pl-8 whitespace-nowrap">- 지급임차료(판관비)</td>
                    {years.map((_, idx) => (
                      <td key={idx} className="p-3">
                        <div className="w-full p-2 border border-gray-300 rounded text-right">
                          {sampleData.sga.rent[idx]}
                        </div>
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-3 pl-8 whitespace-nowrap">- 세금과공과(판관비)</td>
                    {years.map((_, idx) => (
                      <td key={idx} className="p-3">
                        <div className="w-full p-2 border border-gray-300 rounded text-right">
                          {sampleData.sga.tax[idx]}
                        </div>
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-3 pl-8 whitespace-nowrap">- 감가상각비(판관비)</td>
                    {years.map((_, idx) => (
                      <td key={idx} className="p-3">
                        <div className="w-full p-2 border border-gray-300 rounded text-right">
                          {sampleData.sga.depreciation[idx]}
                        </div>
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b bg-blue-50">
                    <td className="p-3 pl-8 font-medium whitespace-nowrap">- 판매비와 관리비 총합 (자동계산)</td>
                    {years.map((_, idx) => (
                      <td key={idx} className="p-3 text-right font-medium text-blue-700">
                        {formatNumber(sgaTotal[idx])}
                      </td>
                    ))}
                  </tr>
                </>
              )}
              
              {/* 제조원가명세서 섹션 헤더 - 토글 가능 */}
              <tr 
                className="bg-gray-100 font-medium border-b cursor-pointer hover:bg-gray-200" 
                onClick={() => toggleSection('manufacturing')}
              >
                <td colSpan={years.length + 1} className="p-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="mr-2">6. 제조원가명세서</span>
                      <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded">노동소득분배율, 노동투입량 계산에 필요</span>
                    </div>
                    <div>
                      {expandedSections.manufacturing ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                        </svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                  </div>
                </td>
              </tr>
              
              {/* 제조원가명세서 항목들 - 조건부 렌더링 */}
              {expandedSections.manufacturing && (
                <>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-3 pl-8 whitespace-nowrap">- 노무비</td>
                    {years.map((_, idx) => (
                      <td key={idx} className="p-3">
                        <div className="w-full p-2 border border-gray-300 rounded text-right">
                          {sampleData.manufacturing.labor[idx]}
                        </div>
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-3 pl-8 whitespace-nowrap">- 퇴직급여(제조원가)</td>
                    {years.map((_, idx) => (
                      <td key={idx} className="p-3">
                        <div className="w-full p-2 border border-gray-300 rounded text-right">
                          {sampleData.manufacturing.retirement[idx]}
                        </div>
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-3 pl-8 whitespace-nowrap">- 복리후생비(제조원가)</td>
                    {years.map((_, idx) => (
                      <td key={idx} className="p-3">
                        <div className="w-full p-2 border border-gray-300 rounded text-right">
                          {sampleData.manufacturing.welfare[idx]}
                        </div>
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-3 pl-8 whitespace-nowrap">- 지급임차료(제조원가)</td>
                    {years.map((_, idx) => (
                      <td key={idx} className="p-3">
                        <div className="w-full p-2 border border-gray-300 rounded text-right">
                          {sampleData.manufacturing.rent[idx]}
                        </div>
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-3 pl-8 whitespace-nowrap">- 세금과공과(제조원가)</td>
                    {years.map((_, idx) => (
                      <td key={idx} className="p-3">
                        <div className="w-full p-2 border border-gray-300 rounded text-right">
                          {sampleData.manufacturing.tax[idx]}
                        </div>
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-3 pl-8 whitespace-nowrap">- 감가상각비(제조원가)</td>
                    {years.map((_, idx) => (
                      <td key={idx} className="p-3">
                        <div className="w-full p-2 border border-gray-300 rounded text-right">
                          {sampleData.manufacturing.depreciation[idx]}
                        </div>
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b bg-blue-50">
                    <td className="p-3 pl-8 font-medium whitespace-nowrap">- 제조원가명세서 총합 (자동계산)</td>
                    {years.map((_, idx) => (
                      <td key={idx} className="p-3 text-right font-medium text-blue-700">
                        {formatNumber(manufacturingTotal[idx])}
                      </td>
                    ))}
                  </tr>
                </>
              )}
              
              {/* 부가가치 계산 */}
              <tr className="border-b bg-green-100 font-bold">
                <td className="p-3 whitespace-nowrap">8. 부가가치 (자동계산)</td>
                {years.map((_, idx) => (
                  <td key={idx} className="p-3 text-right text-green-800">
                    {formatNumber(valueAdded[idx])}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SimplifiedIncomeStatementPreview;