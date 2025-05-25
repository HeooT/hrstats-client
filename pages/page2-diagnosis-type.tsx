import React, { useState } from 'react';
import { AlertCircle, CheckCircle, ArrowRight } from 'lucide-react';

export default function DiagnosisTypeVisualizationUpdated() {
  const [selectedType, setSelectedType] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
  const [completedDiagnosis, setCompletedDiagnosis] = useState({
    business: false,
    organization: false,
    job: false,
    survey: false
  });
  
  // 모든 필수 진단이 완료되었는지 확인
  const allRequiredCompleted = 
    completedDiagnosis.business && 
    completedDiagnosis.organization && 
    completedDiagnosis.job && 
    completedDiagnosis.survey;
  
  const diagnosisTypes = [
    {
      id: 'business',
      title: '경영진단',
      description: '기업의 재무상태와 인건비 구조를 분석하여 경영 효율성을 평가합니다.',
      disabled: false,
      completed: completedDiagnosis.business
    },
    {
      id: 'organization',
      title: '조직진단',
      description: '조직 내 부서별 인력 배치와 업무 흐름을 분석하여 최적의 운영 방안을 도출합니다.',
      disabled: false,
      completed: completedDiagnosis.organization
    },
    {
      id: 'job',
      title: '직무진단',
      description: '각 직무별 핵심 역량을 분석하고, NCS를 기반으로 직무 정렬을 최적화합니다.',
      disabled: false,
      completed: completedDiagnosis.job
    },
    {
      id: 'survey',
      title: '설문진단',
      description: '조직문화 및 직원 만족도를 조사하여 갈등 및 협력 지수를 분석합니다.',
      disabled: false,
      completed: completedDiagnosis.survey
    },
    {
      id: 'comprehensive',
      title: '종합진단',
      description: '경영진단, 조직진단, 직무진단, 설문진단 결과를 통합 분석하여 최적의 HR 전략을 도출합니다.',
      disabled: !allRequiredCompleted,
      completed: false
    }
  ];

  const handleTypeClick = (typeId) => {
    const type = diagnosisTypes.find(t => t.id === typeId);
    if (type.disabled) {
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 5000);
    } else {
      setSelectedType(typeId);
    }
  };
  
  // 진단 완료 상태를 토글하는 함수 (데모용)
  const toggleCompletion = (typeId) => {
    if (typeId !== 'comprehensive') {
      setCompletedDiagnosis(prev => ({
        ...prev,
        [typeId]: !prev[typeId]
      }));
    }
  };

  return (
    <div className="container mx-auto p-4 max-w-5xl">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-blue-50 p-6">
          <h1 className="text-2xl font-bold text-blue-800 text-center">
            HR Stat - 진단유형 선택
          </h1>
        </div>
        
        <div className="p-6">
          {/* 1. 진단 유형 설명 강화 */}
          <div className="bg-blue-50 p-4 rounded-lg mb-6">
            <h3 className="text-md font-semibold text-blue-800 mb-2">HR 진단 프로세스 안내</h3>
            <p className="text-sm text-gray-700">
              HR 진단은 각 단계에서 수집된 데이터가 다음 단계 분석에 활용되므로, 반드시 순차적으로 진행해야 합니다.
              경영진단에서는 재무와 인력 데이터를 분석하고, 이 결과를 바탕으로 조직진단, 직무진단, 설문진단을 진행하게 됩니다.
              모든 진단이 완료되면 종합진단을 통해 최적의 HR 전략을 도출할 수 있습니다.
            </p>
          </div>
          
          {showAlert && (
            <div className="mb-6 bg-red-50 border border-red-200 text-red-700 p-4 rounded flex items-center">
              <AlertCircle className="h-4 w-4 mr-2" />
              <p>모든 필수 진단(경영진단, 조직진단, 직무진단, 설문진단)을 완료해야 종합진단을 시작할 수 있습니다.</p>
            </div>
          )}
          
          {/* 2. 진행 상황 표시기 추가 */}
          <div className="mb-8">
            <div className="flex justify-between items-center">
              {diagnosisTypes.map((type, index) => (
                <div key={type.id} className="flex flex-col items-center">
                  <div 
                    className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                      type.completed ? 'bg-green-500 text-white' : 
                      type.disabled ? 'bg-gray-200 text-gray-500' : 'bg-blue-600 text-white'
                    }`}
                    onClick={() => toggleCompletion(type.id)}
                    style={{ cursor: type.id !== 'comprehensive' ? 'pointer' : 'default' }}
                  >
                    {type.completed ? '✓' : index + 1}
                  </div>
                  <div className={`text-xs ${
                    type.completed ? 'font-medium text-green-600' : 
                    type.disabled ? 'text-gray-500' : 'text-gray-700'
                  }`}>
                    {type.title}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="relative mt-2 h-1 bg-gray-200 rounded">
              <div 
                className="absolute top-0 left-0 h-1 bg-green-500 rounded" 
                style={{ 
                  width: `${
                    (Object.values(completedDiagnosis).filter(Boolean).length * 25)
                  }%` 
                }}
              ></div>
            </div>
            <div className="mt-2 text-xs text-gray-500 text-center">
              (테스트 목적: 원 모양을 클릭하면 해당 진단의 완료 상태가 토글됩니다)
            </div>
          </div>
          
          {/* 3. 진단 유형 카드 재디자인 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {diagnosisTypes.map((type) => (
              <div
                key={type.id}
                className={`
                  relative border rounded-lg p-6 shadow-sm transition-all 
                  ${selectedType === type.id ? 'border-blue-600 bg-blue-50' : 'border-gray-200'} 
                  ${type.disabled ? 'opacity-70 cursor-not-allowed' : 'cursor-pointer'}
                  ${type.completed ? 'border-green-300 bg-green-50' : ''}
                `}
                onClick={() => handleTypeClick(type.id)}
              >
                <h3 className={`text-xl font-semibold mb-2 ${
                  type.completed ? 'text-green-700' : 'text-gray-800'
                }`}>
                  {type.title}
                  {type.completed ? (
                    <span className="ml-2 text-xs text-white bg-green-600 px-2 py-1 rounded-full">완료</span>
                  ) : type.disabled ? (
                    <span className="ml-2 text-xs text-white bg-gray-400 px-2 py-1 rounded-full">필수 진단 필요</span>
                  ) : (
                    <span className="ml-2 text-xs text-white bg-blue-600 px-2 py-1 rounded-full">선택 가능</span>
                  )}
                </h3>
                <p className="text-sm text-gray-600 mb-3">{type.description}</p>
                
                {!type.disabled && !type.completed && (
                  <div className="flex items-center text-blue-600 text-sm font-medium">
                    <CheckCircle className="h-4 w-4 mr-1" />
                    지금 진단 가능
                  </div>
                )}
                
                {type.completed && (
                  <div className="flex items-center text-green-600 text-sm font-medium">
                    <CheckCircle className="h-4 w-4 mr-1" />
                    진단 완료 (다시 진행 가능)
                  </div>
                )}
                
                {type.disabled && (
                  <div className="absolute top-2 right-2">
                    <AlertCircle className="h-5 w-5 text-amber-500" />
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {/* 4. 안내 문구 개선 */}
          <div className="mt-6 mb-6">
            <p className="text-gray-600 text-center italic">
              HR 진단은 어떤 유형이든 바로 시작할 수 있습니다. 다만 종합진단은 모든 필수 진단(경영진단, 조직진단, 직무진단, 설문진단)을 
              완료해야 시작할 수 있습니다. 각 진단의 데이터는 종합 분석에 활용됩니다.
            </p>
          </div>
          
          <div className="mt-10 flex justify-between">
            <button className="px-6 py-2 border border-gray-300 text-gray-700 rounded hover:bg-gray-50">
              이전
            </button>
            <button 
              className={`px-6 py-2 text-white rounded flex items-center gap-2 ${
                selectedType ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-300 cursor-not-allowed'
              }`}
              disabled={!selectedType}
            >
              다음 단계
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}