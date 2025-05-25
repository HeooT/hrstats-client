import React, { useState } from 'react';

export default function CompanyInfoCenteredLinks() {
  const [companyName, setCompanyName] = useState('');
  const [businessNumber, setBusinessNumber] = useState('');
  const [industry, setIndustry] = useState('');
  const [companySize, setCompanySize] = useState('');

  // 사업자등록번호 자동 하이픈 적용
  const formatBusinessNumber = (value) => {
    const numbers = value.replace(/[^\d]/g, '');
    if (numbers.length <= 3) {
      return numbers;
    } else if (numbers.length <= 5) {
      return `${numbers.slice(0, 3)}-${numbers.slice(3)}`;
    } else {
      return `${numbers.slice(0, 3)}-${numbers.slice(3, 5)}-${numbers.slice(5, 10)}`;
    }
  };

  const handleBusinessNumberChange = (e) => {
    const formattedValue = formatBusinessNumber(e.target.value);
    setBusinessNumber(formattedValue);
  };

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-blue-50 p-6">
          <h1 className="text-2xl font-bold text-blue-800 text-center">
            HR Stat - 기업정보 입력
          </h1>
        </div>
        
        <div className="p-6 space-y-6">
          <div className="space-y-2">
            <label className="block font-medium text-gray-700">
              회사명 <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="회사명을 입력하세요"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div className="space-y-2">
            <label className="block font-medium text-gray-700">
              업종 <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <select 
                value={industry} 
                onChange={(e) => setIndustry(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded appearance-none bg-white"
              >
                <option value="" disabled selected>한국표준산업분류 기준 선택</option>
                <option value="A">A - 농업, 임업 및 어업(01-03)</option>
                <option value="B">B - 광업(05-08)</option>
                <option value="C">C - 제조업(10-34)</option>
                <option value="D">D - 전기, 가스, 증기 및 공기조절 공급업(35)</option>
                <option value="E">E - 수도, 하수 및 폐기물 처리, 원료 재생업(36-39)</option>
                <option value="F">F - 건설업(41-42)</option>
                <option value="G">G - 도매 및 소매업(45-47)</option>
                <option value="H">H - 운수 및 창고업(49-52)</option>
                <option value="I">I - 숙박 및 음식점업(55-56)</option>
                <option value="J">J - 정보통신업(58-63)</option>
                <option value="K">K - 금융 및 보험업(64-66)</option>
                <option value="L">L - 부동산업(68)</option>
                <option value="M">M - 전문, 과학 및 기술 서비스업(70-73)</option>
                <option value="N">N - 사업시설 관리, 사업 지원 및 임대 서비스업(74-76)</option>
                <option value="O">O - 공공 행정, 국방 및 사회보장 행정(84)</option>
                <option value="P">P - 교육 서비스업(85)</option>
                <option value="Q">Q - 보건업 및 사회복지 서비스업(86-87)</option>
                <option value="R">R - 예술, 스포츠 및 여가관련 서비스업(90-91)</option>
                <option value="S">S - 협회 및 단체, 수리 및 기타 개인 서비스업(94-96)</option>
                <option value="T">T - 가구 내 고용활동 및 달리 분류되지 않은 자가 소비 생산활동(97-98)</option>
                <option value="U">U - 국제 및 외국기관(99)</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label className="block font-medium text-gray-700">
              기업 규모 <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <select 
                value={companySize} 
                onChange={(e) => setCompanySize(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded appearance-none bg-white"
              >
                <option value="" disabled selected>기업 규모 선택</option>
                <option value="large">대기업</option>
                <option value="medium">중견기업</option>
                <option value="small">중소기업</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label className="block font-medium text-gray-700">
              사업자 등록번호 <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="000-00-00000"
              value={businessNumber}
              onChange={handleBusinessNumberChange}
              maxLength={12}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          {/* 중앙 정렬된 링크 버튼들 */}
          <div className="pt-4 mt-8 border-t border-gray-200">
            <div className="flex justify-center space-x-4">
              <a href="#" className="flex flex-col items-center p-3 bg-blue-50 border border-blue-200 rounded-lg text-blue-700 w-40 hover:bg-blue-100 transition-colors">
                <svg className="w-8 h-8 mb-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 22V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path>
                  <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-2"></path>
                  <path d="M12 12v10"></path>
                </svg>
                <span className="text-sm font-medium">회사소개서</span>
                <span className="text-xs">PDF 다운로드</span>
              </a>
              
              <a href="#" className="flex flex-col items-center p-3 bg-green-50 border border-green-200 rounded-lg text-green-700 w-40 hover:bg-green-100 transition-colors">
                <svg className="w-8 h-8 mb-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect width="20" height="5" x="2" y="3" rx="1"></rect>
                  <path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"></path>
                  <path d="M10 12h4"></path>
                </svg>
                <span className="text-sm font-medium">컨설팅 제안서</span>
                <span className="text-xs">PDF 다운로드</span>
              </a>
              
              <a href="#" className="flex flex-col items-center p-3 bg-purple-50 border border-purple-200 rounded-lg text-purple-700 w-40 hover:bg-purple-100 transition-colors">
                <svg className="w-8 h-8 mb-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" x2="21" y1="14" y2="3"></line>
                </svg>
                <span className="text-sm font-medium">홈페이지 방문</span>
                <span className="text-xs">인사이트 컨설팅</span>
              </a>
            </div>
          </div>

          <div className="mt-6 flex justify-end">
            <button className="px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded font-medium">
              다음 단계
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}