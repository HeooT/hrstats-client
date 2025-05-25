import React, { useState, useEffect } from 'react';
import { FileUp, Save, ArrowLeft, ArrowRight, AlertCircle, Info, CheckCircle } from 'lucide-react';

const FinancialStatementPreview = () => {
  const years = [2020, 2021, 2022, 2023, 2024];
  
  // 샘플 데이터 미리 설정
  const [financialData, setFinancialData] = useState({
    currentAssets: ['10,000,000', '12,500,000', '15,000,000', '18,500,000', '22,000,000'],
    nonCurrentAssets: ['25,000,000', '27,000,000', '28,500,000', '30,000,000', '33,000,000'],
    currentLiabilities: ['8,000,000', '9,500,000', '10,200,000', '11,800,000', '13,500,000'],
    nonCurrentLiabilities: ['12,000,000', '11,500,000', '10,800,000', '9,500,000', '8,500,000'],
    totalEquity: ['15,000,000', '18,500,000', '22,500,000', '27,200,000', '33,000,000']
  });
  
  // 오류 메시지 상태
  const [errors, setErrors] = useState([false, false, false, false, false]);
  
  // 업로드 상태 표시용
  const [uploadSuccess, setUploadSuccess] = useState(false);

  // 자동 계산 필드
  const calculatedData = {
    totalAssets: years.map((_, idx) => {
      const currentAsset = parseFloat((financialData.currentAssets[idx] || '0').replace(/,/g, '')) || 0;
      const nonCurrentAsset = parseFloat((financialData.nonCurrentAssets[idx] || '0').replace(/,/g, '')) || 0;
      return currentAsset + nonCurrentAsset;
    }),
    totalLiabilities: years.map((_, idx) => {
      const currentLiability = parseFloat((financialData.currentLiabilities[idx] || '0').replace(/,/g, '')) || 0;
      const nonCurrentLiability = parseFloat((financialData.nonCurrentLiabilities[idx] || '0').replace(/,/g, '')) || 0;
      return currentLiability + nonCurrentLiability;
    })
  };

  // 자산 - 부채 = 자본 수식 검증
  useEffect(() => {
    const newErrors = years.map((_, idx) => {
      const assets = calculatedData.totalAssets[idx];
      const liabilities = calculatedData.totalLiabilities[idx];
      const equity = parseFloat((financialData.totalEquity[idx] || '0').replace(/,/g, '')) || 0;
      
      // 자산 - 부채 = 자본 공식 검증
      return Math.abs((assets - liabilities) - equity) > 1;
    });
    
    setErrors(newErrors);
  }, [financialData, calculatedData]);

  // 숫자 포맷팅 (천 단위 콤마)
  const formatNumber = (value) => {
    if (!value && value !== 0) return '';
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  // 데모용 파일 업로드 기능
  const handleFileUploadDemo = () => {
    setUploadSuccess(true);
    setTimeout(() => setUploadSuccess(false), 5000);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      {/* 헤더 */}
      <div className="bg-blue-50 p-6">
        <h1 className="text-2xl font-bold text-blue-800 text-center">
          HR Stat - 재무제표 입력
        </h1>
        <p className="text-center text-gray-600">경영진단 1/4</p>
      </div>
      
      <div className="p-6">
        {/* 입력 가이드 */}
        <div className="mb-6 p-4 bg-blue-50 rounded-md">
          <div className="flex items-start">
            <Info className="h-5 w-5 mr-2 text-blue-600 mt-0.5 flex-shrink-0" />
            <div className="flex-1">
              <p className="text-blue-800 font-medium">재무제표 입력 안내</p>
              <p className="text-sm text-blue-700 mt-1">
                5개년(2020~2024) 재무제표 데이터를 입력해 주세요. 엑셀 업로드를 통해 한 번에 입력하거나, 각 항목을 직접 입력할 수 있습니다.
                모든 금액은 원 단위로 입력하며, 입력 시 자동으로 천 단위 구분 기호가 표시됩니다.
              </p>
            </div>
          </div>
        </div>
        
        {/* 알림 메시지 - 성공 시 */}
        {uploadSuccess && (
          <div className="mb-4 bg-green-50 border border-green-200 text-green-700 p-3 rounded-md flex items-start">
            <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0" />
            <div>
              <p className="font-medium">엑셀 파일이 성공적으로 업로드 되었습니다</p>
              <p className="text-sm mt-1">모든 재무제표 데이터가 자동으로 입력되었습니다.</p>
            </div>
          </div>
        )}
      
        <div className="mb-6 flex justify-end space-x-4">
          <button 
            className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded transition-colors"
            onClick={handleFileUploadDemo}
          >
            <FileUp size={18} />
            엑셀파일 업로드
          </button>
          <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors">
            <Save size={18} />
            저장하기
          </button>
        </div>
        
        <div className="overflow-x-auto border rounded-lg">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b">
                <th className="p-3 text-left w-1/4">항목</th>
                {years.map(year => (
                  <th key={year} className="p-3 text-center">{year}</th>
                ))}
              </tr>
            </thead>
            
            <tbody>
              {/* 자산 섹션 */}
              <tr className="bg-gray-100 font-bold border-b">
                <td className="p-3">자산</td>
                {years.map((_, idx) => (
                  <td key={idx} className="p-3 text-right pr-4">
                    {formatNumber(calculatedData.totalAssets[idx])}
                  </td>
                ))}
              </tr>
              
              {/* 유동자산 */}
              <tr className="border-b hover:bg-gray-50">
                <td className="p-3 pl-8">유동자산</td>
                {years.map((_, idx) => (
                  <td key={idx} className="p-3">
                    <div className="w-full p-2 border border-gray-300 rounded text-right">
                      {financialData.currentAssets[idx]}
                    </div>
                  </td>
                ))}
              </tr>
              
              {/* 비유동자산 */}
              <tr className="border-b hover:bg-gray-50">
                <td className="p-3 pl-8">비유동자산</td>
                {years.map((_, idx) => (
                  <td key={idx} className="p-3">
                    <div className="w-full p-2 border border-gray-300 rounded text-right">
                      {financialData.nonCurrentAssets[idx]}
                    </div>
                  </td>
                ))}
              </tr>
              
              {/* 부채 섹션 */}
              <tr className="bg-gray-100 font-bold border-b">
                <td className="p-3">부채</td>
                {years.map((_, idx) => (
                  <td key={idx} className="p-3 text-right pr-4">
                    {formatNumber(calculatedData.totalLiabilities[idx])}
                  </td>
                ))}
              </tr>
              
              {/* 유동부채 */}
              <tr className="border-b hover:bg-gray-50">
                <td className="p-3 pl-8">유동부채</td>
                {years.map((_, idx) => (
                  <td key={idx} className="p-3">
                    <div className="w-full p-2 border border-gray-300 rounded text-right">
                      {financialData.currentLiabilities[idx]}
                    </div>
                  </td>
                ))}
              </tr>
              
              {/* 비유동부채 */}
              <tr className="border-b hover:bg-gray-50">
                <td className="p-3 pl-8">비유동부채</td>
                {years.map((_, idx) => (
                  <td key={idx} className="p-3">
                    <div className="w-full p-2 border border-gray-300 rounded text-right">
                      {financialData.nonCurrentLiabilities[idx]}
                    </div>
                  </td>
                ))}
              </tr>
              
              {/* 자본 섹션 */}
              <tr className="bg-gray-100 font-bold border-b">
                <td className="p-3">자본</td>
                {years.map((_, idx) => (
                  <td key={idx} className="p-3 text-center">
                    -
                  </td>
                ))}
              </tr>
              
              {/* 자본총계 */}
              <tr className="border-b hover:bg-gray-50">
                <td className="p-3 pl-8">자본총계</td>
                {years.map((_, idx) => (
                  <td key={idx} className="p-3">
                    <div className={`w-full p-2 border rounded text-right ${
                      errors[idx] ? 'border-red-500 bg-red-50' : 'border-gray-300'
                    }`}>
                      {financialData.totalEquity[idx]}
                    </div>
                    {errors[idx] && (
                      <div className="text-red-500 text-xs mt-1 flex items-center">
                        <AlertCircle className="h-3 w-3 mr-1" />
                        자산-부채=자본 불일치
                      </div>
                    )}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
        
        {/* 수식 안내 */}
        <div className="mt-4 text-gray-600 text-sm flex items-center">
          <Info className="h-4 w-4 mr-2 text-blue-500" />
          <span>재무제표 입력 시 <strong>자산 - 부채 = 자본</strong> 수식이 일치해야 합니다.</span>
        </div>
        
        <div className="mt-10 flex justify-between">
          <button className="px-4 py-2 border border-gray-300 bg-white hover:bg-gray-50 rounded flex items-center gap-2 transition-colors">
            <ArrowLeft size={16} />
            이전
          </button>
          <button className={`flex items-center gap-2 px-6 py-2 text-white rounded transition-colors ${
            errors.some(error => error) ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
          }`}>
            다음 단계
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FinancialStatementPreview;