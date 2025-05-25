import React, { useState } from 'react';
import { HelpCircle, FileUp, Save, ArrowLeft, ArrowRight } from 'lucide-react';

const EmployeeDataPreview = () => {
  const years = [2020, 2021, 2022, 2023, 2024];
  
  // 샘플 데이터를 미리 설정
  const [employeeData, setEmployeeData] = useState({
    // 소속 근로자
    regular: ['120', '130', '145', '160', '175'],  // 정규직 근로자
    nonRegular: ['30', '25', '20', '15', '10'],  // 비정규직 근로자
    
    // 소속 외 근로자
    contract: ['15', '18', '20', '22', '25'],  // 도급 근로자
    dispatch: ['5', '7', '5', '8', '10']   // 파견 근로자
  });

  // 자동 계산 필드
  const calculatedData = {
    // 소속 근로자 총합
    totalRegular: years.map((_, idx) => {
      const regular = parseInt(employeeData.regular[idx]) || 0;
      const nonRegular = parseInt(employeeData.nonRegular[idx]) || 0;
      return regular + nonRegular;
    }),
    
    // 소속 외 근로자 총합
    totalNonRegular: years.map((_, idx) => {
      const contract = parseInt(employeeData.contract[idx]) || 0;
      const dispatch = parseInt(employeeData.dispatch[idx]) || 0;
      return contract + dispatch;
    })
  };

  // 총 인원 계산
  const totalEmployees = years.map((_, idx) => {
    return calculatedData.totalRegular[idx] + calculatedData.totalNonRegular[idx];
  });

  // 근로자 유형에 대한 설명 제공
  const getWorkerTypeDescription = (type) => {
    switch(type) {
      case 'regular':
        return '회사와 직접 고용계약을 체결한 기간의 정함이 없는 근로자';
      case 'nonRegular':
        return '회사와 직접 고용계약을 체결한 기간제 또는 단시간 근로자';
      case 'contract':
        return '용역업체와 계약을 맺고 회사 내에서 근무하는 도급계약 근로자';
      case 'dispatch':
        return '파견업체 소속으로 회사에 파견되어 근무하는 근로자';
      default:
        return '';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="bg-blue-50 p-6">
        <h1 className="text-2xl font-bold text-blue-800 text-center">
          HR Stat - 인원현황 입력
        </h1>
        <p className="text-center text-gray-600">경영진단 3/4</p>
      </div>
      
      <div className="p-6">
        {/* 입력 가이드 */}
        <div className="mb-6 p-4 bg-blue-50 rounded-md">
          <div className="flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-600 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            <div className="flex-1">
              <p className="text-blue-800 font-medium">인원현황 입력 안내</p>
              <p className="text-sm text-blue-700 mt-1">
                5개년(2020~2024) 동안의 평균 인원을 유형별로 입력해 주세요. 이 데이터는 노동생산성, 인당 매출액, 인당 영업이익 등 HR 효율성 분석에 활용됩니다.
                각 근로자 유형에 대한 자세한 설명은 물음표 아이콘에 마우스를 올려 확인하실 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      
        <div className="mb-6 flex justify-end space-x-4">
          <button className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">
            <FileUp size={18} />
            엑셀파일 업로드
          </button>
          <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
            <Save size={18} />
            저장하기
          </button>
        </div>
        
        <div className="overflow-x-auto border rounded-lg">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b">
                <th className="p-3 text-left w-1/4">구분</th>
                {years.map(year => (
                  <th key={year} className="p-3 text-center">{year}</th>
                ))}
              </tr>
            </thead>
            
            <tbody>
              {/* 1. 소속 근로자 */}
              <tr className="bg-gray-100 font-bold border-b">
                <td className="p-3 flex items-center">
                  1. 소속 근로자
                  <div className="inline-block ml-2 relative group">
                    <HelpCircle size={16} className="text-blue-500" />
                    <div className="absolute invisible group-hover:visible w-64 p-2 bg-gray-800 text-white text-xs rounded shadow-lg z-10 bottom-full left-1/2 transform -translate-x-1/2 mb-2">
                      직접 고용관계가 있는 근로자(정규직, 계약직 등)
                    </div>
                  </div>
                </td>
                {years.map((_, idx) => (
                  <td key={idx} className="p-3 text-center font-medium">
                    {calculatedData.totalRegular[idx]}
                  </td>
                ))}
              </tr>
              
              {/* 정규직 근로자 */}
              <tr className="border-b hover:bg-gray-50">
                <td className="p-3 pl-8 flex items-center">
                  - 정규직 근로자
                  <div className="inline-block ml-2 relative group">
                    <HelpCircle size={14} className="text-gray-500" />
                    <div className="absolute invisible group-hover:visible w-64 p-2 bg-gray-800 text-white text-xs rounded shadow-lg z-10 bottom-full left-1/2 transform -translate-x-1/2 mb-2">
                      {getWorkerTypeDescription('regular')}
                    </div>
                  </div>
                </td>
                {years.map((_, idx) => (
                  <td key={idx} className="p-3">
                    <div className="w-full p-2 border rounded text-right">
                      {employeeData.regular[idx]}
                    </div>
                  </td>
                ))}
              </tr>
              
              {/* 비정규직 근로자(계약/단시간) */}
              <tr className="border-b hover:bg-gray-50">
                <td className="p-3 pl-8 flex items-center">
                  - 비정규직 근로자(계약/단시간)
                  <div className="inline-block ml-2 relative group">
                    <HelpCircle size={14} className="text-gray-500" />
                    <div className="absolute invisible group-hover:visible w-64 p-2 bg-gray-800 text-white text-xs rounded shadow-lg z-10 bottom-full left-1/2 transform -translate-x-1/2 mb-2">
                      {getWorkerTypeDescription('nonRegular')}
                    </div>
                  </div>
                </td>
                {years.map((_, idx) => (
                  <td key={idx} className="p-3">
                    <div className="w-full p-2 border rounded text-right">
                      {employeeData.nonRegular[idx]}
                    </div>
                  </td>
                ))}
              </tr>
              
              {/* 2. 소속 외 근로자 */}
              <tr className="bg-gray-100 font-bold border-b">
                <td className="p-3 flex items-center">
                  2. 소속 외 근로자
                  <div className="inline-block ml-2 relative group">
                    <HelpCircle size={16} className="text-blue-500" />
                    <div className="absolute invisible group-hover:visible w-64 p-2 bg-gray-800 text-white text-xs rounded shadow-lg z-10 bottom-full left-1/2 transform -translate-x-1/2 mb-2">
                      간접 고용 또는 특수형태 근로종사자(도급, 파견 등)
                    </div>
                  </div>
                </td>
                {years.map((_, idx) => (
                  <td key={idx} className="p-3 text-center font-medium">
                    {calculatedData.totalNonRegular[idx]}
                  </td>
                ))}
              </tr>
              
              {/* 도급 근로자 */}
              <tr className="border-b hover:bg-gray-50">
                <td className="p-3 pl-8 flex items-center">
                  - 도급 근로자
                  <div className="inline-block ml-2 relative group">
                    <HelpCircle size={14} className="text-gray-500" />
                    <div className="absolute invisible group-hover:visible w-64 p-2 bg-gray-800 text-white text-xs rounded shadow-lg z-10 bottom-full left-1/2 transform -translate-x-1/2 mb-2">
                      {getWorkerTypeDescription('contract')}
                    </div>
                  </div>
                </td>
                {years.map((_, idx) => (
                  <td key={idx} className="p-3">
                    <div className="w-full p-2 border rounded text-right">
                      {employeeData.contract[idx]}
                    </div>
                  </td>
                ))}
              </tr>
              
              {/* 파견 근로자 */}
              <tr className="border-b hover:bg-gray-50">
                <td className="p-3 pl-8 flex items-center">
                  - 파견 근로자
                  <div className="inline-block ml-2 relative group">
                    <HelpCircle size={14} className="text-gray-500" />
                    <div className="absolute invisible group-hover:visible w-64 p-2 bg-gray-800 text-white text-xs rounded shadow-lg z-10 bottom-full left-1/2 transform -translate-x-1/2 mb-2">
                      {getWorkerTypeDescription('dispatch')}
                    </div>
                  </div>
                </td>
                {years.map((_, idx) => (
                  <td key={idx} className="p-3">
                    <div className="w-full p-2 border rounded text-right">
                      {employeeData.dispatch[idx]}
                    </div>
                  </td>
                ))}
              </tr>
              
              {/* 총 인원 */}
              <tr className="bg-blue-100 font-bold">
                <td className="p-3">총 인원</td>
                {years.map((_, idx) => (
                  <td key={idx} className="p-3 text-center text-blue-800">
                    {totalEmployees[idx]} 명
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="mt-10 flex justify-between">
          <button className="px-4 py-2 border border-gray-300 bg-white hover:bg-gray-50 rounded flex items-center gap-2 transition-colors">
            <ArrowLeft size={16} />
            이전
          </button>
          <button className="flex items-center gap-2 px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded transition-colors">
            결과 분석하기
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDataPreview;