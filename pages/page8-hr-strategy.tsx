import React, { useState } from 'react';
import { Download, ArrowLeft, ArrowRight, Lightbulb, Clock, CheckCircle, Star, AlertTriangle, Info } from 'lucide-react';

export default function HRStrategyPage() {
  const [selectedPeriod, setSelectedPeriod] = useState('short');
  
  // 샘플 데이터 - 실제로는 이전 페이지에서 분석한 데이터를 기반으로 AI가 전략을 추천합니다
  const companyInfo = {
    name: "(주)인사이트테크",
    industry: "제조업(C26 - 전자부품 제조업)",
  };
  
  // 핵심 이슈 및 분석 결과
  const keyIssues = [
    {
      id: 1,
      category: "효율성",
      title: "산업 대비 높은 HCROI",
      description: "인건비 대비 영업이익과 부가가치 창출이 우수합니다. 이는 상대적으로 적은 인력으로 높은 생산성을 달성하고 있음을 의미합니다.",
      status: "positive",
      kpi: "HCROI: 187.8% (산업평균: 122.8%)",
      priority: "low"
    },
    {
      id: 2,
      category: "인건비 구조",
      title: "산업 대비 낮은 노동소득분배율",
      description: "전체 부가가치 중 인건비가 차지하는 비율이 낮습니다. 이는 인건비 관리 측면에서는 긍정적이나, 인재 유치 및 유지 측면에서는 주의가 필요합니다.",
      status: "neutral",
      kpi: "노동소득분배율: 43.7% (산업평균: 53.5%)",
      priority: "medium"
    },
    {
      id: 3,
      category: "인력 구조",
      title: "고령화된 생산직 인력",
      description: "생산직 평균 연령이 45세 이상으로 향후 기술 전수 및 인력 교체에 대한 계획이 필요합니다.",
      status: "negative",
      kpi: "생산직 평균 연령: 47.2세",
      priority: "high"
    },
    {
      id: 4,
      category: "조직 구조",
      title: "지원활동 인력 비율 증가 추세",
      description: "최근 3년간 본원적 활동 대비 지원활동 인력의 비율이 증가 추세입니다. 이는 조직 효율성 측면에서 검토가 필요합니다.",
      status: "negative",
      kpi: "지원활동 인력 비율: 35.6% (전년 대비 2.2%p 증가)",
      priority: "high"
    }
  ];
  
  // AI 추천 전략
  const strategies = {
    short: [
      {
        id: 's1',
        title: "지원부서 인력 효율화",
        description: "지원활동 부서의 업무 프로세스를 분석하고 중복 업무를 제거하여 효율성을 높입니다.",
        implementation: [
          "각 지원부서의 핵심 업무와 부가 업무를 구분하여 분석",
          "부서 간 중복 업무 파악 및 통합 관리 방안 수립",
          "자동화 가능한 업무 프로세스 발굴 및 시스템 도입"
        ],
        expectedResults: "지원부서 업무 효율 15% 향상, 인당 처리 업무량 증가",
        difficulty: "medium",
        priority: "high"
      },
      {
        id: 's2',
        title: "생산직 기술 전수 프로그램",
        description: "고령 생산직 근로자의 기술과 노하우를 체계적으로 기록하고 젊은 인력에게 전수할 수 있는 멘토링 시스템을 구축합니다.",
        implementation: [
          "핵심 기술 보유 인력 식별 및 기술 맵핑",
          "OJT(현장직무교육) 프로그램 설계",
          "멘토-멘티 매칭 시스템 구축 및 운영"
        ],
        expectedResults: "핵심 기술 전수율 80% 달성, 생산 라인 교체 시 품질 유지",
        difficulty: "medium",
        priority: "high"
      }
    ],
    mid: [
      {
        id: 'm1',
        title: "선별적 임금 인상 전략",
        description: "핵심 직무 및 고성과자에 대한 선별적 임금 인상으로 인재 유출을 방지하면서 전체 인건비를 효율적으로 관리합니다.",
        implementation: [
          "직무 중요도에 따른 직무 등급 재설계",
          "성과평가 기준 강화 및 개인별 KPI 수립",
          "핵심 인재 및 고성과자 식별 시스템 구축"
        ],
        expectedResults: "핵심 인재 유지율 90% 이상 달성, 인건비 증가율 5% 이내 관리",
        difficulty: "high",
        priority: "medium"
      },
      {
        id: 'm2',
        title: "생산직 인력 구조 개선",
        description: "중장기적 관점에서 생산직 인력의 연령 구조를 개선하기 위한 단계적 신규 채용 및 교육 프로그램을 실시합니다.",
        implementation: [
          "3년 내 생산직 인력의 20%를 35세 이하 인력으로 교체",
          "산학협력을 통한 인재 확보 채널 다양화",
          "직무별 교육 체계 수립 및 자격증 취득 지원"
        ],
        expectedResults: "생산직 평균 연령 3세 감소, 신규 인력 정착률 80% 달성",
        difficulty: "high",
        priority: "high"
      }
    ],
    long: [
      {
        id: 'l1',
        title: "조직 구조 재설계",
        description: "본원적 활동과 지원활동의 최적 비율을 분석하고, 조직 구조를 장기적으로 재설계합니다.",
        implementation: [
          "경쟁사 및 글로벌 우수 기업의 조직 구조 벤치마킹",
          "직무별 가치 기여도 분석 및 핵심/비핵심 기능 구분",
          "5년 단위 중장기 조직 구조 로드맵 수립"
        ],
        expectedResults: "본원적 활동 비율 70% 이상 확보, 인건비 대비 부가가치 비율 15% 향상",
        difficulty: "very_high",
        priority: "medium"
      },
      {
        id: 'l2',
        title: "스마트 팩토리 전환",
        description: "생산 공정의 자동화 및 디지털화를 통해 노동집약적 구조에서 기술집약적 구조로 전환합니다.",
        implementation: [
          "공정별 자동화 가능성 분석 및 우선순위 설정",
          "핵심 공정 자동화 시스템 도입 및 운영",
          "기존 인력의 시스템 운영 및 모니터링 기술 교육"
        ],
        expectedResults: "생산 효율성 30% 향상, 인력 의존도 감소, 디지털 전환을 통한 경쟁력 강화",
        difficulty: "very_high",
        priority: "high"
      }
    ]
  };
  
  // 난이도에 따른 스타일 클래스 및 텍스트
  const difficultyInfo = {
    low: { class: "bg-green-100 text-green-800", text: "낮음" },
    medium: { class: "bg-blue-100 text-blue-800", text: "중간" },
    high: { class: "bg-amber-100 text-amber-800", text: "높음" },
    very_high: { class: "bg-red-100 text-red-800", text: "매우 높음" }
  };
  
  // 우선순위에 따른 스타일 클래스 및 텍스트
  const priorityInfo = {
    low: { class: "bg-gray-100 text-gray-800", text: "낮음" },
    medium: { class: "bg-blue-100 text-blue-800", text: "중간" },
    high: { class: "bg-red-100 text-red-800", text: "높음" }
  };
  
  // 상태에 따른 아이콘 및 스타일
  const statusInfo = {
    positive: { icon: <Star className="h-6 w-6 text-green-500" />, class: "border-green-200 bg-green-50" },
    neutral: { icon: <Info className="h-6 w-6 text-blue-500" />, class: "border-blue-200 bg-blue-50" },
    negative: { icon: <AlertTriangle className="h-6 w-6 text-amber-500" />, class: "border-amber-200 bg-amber-50" }
  };
  
  return (
    <div className="container mx-auto p-4 max-w-6xl">
      <div className="shadow-lg bg-white rounded-lg overflow-hidden">
        <div className="bg-blue-50 p-5 border-b border-blue-100">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-blue-800">
                AI 기반 HR 전략 도출
              </h1>
              <p className="text-gray-600">
                {companyInfo.name} / {companyInfo.industry}
              </p>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded">
              <Download size={16} />
              전략 보고서 다운로드
            </button>
          </div>
        </div>
        
        <div className="p-6">
          {/* 핵심 이슈 요약 섹션 */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <Lightbulb className="mr-2 h-5 w-5 text-amber-500" />
              분석된 핵심 이슈
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {keyIssues.map(issue => (
                <div key={issue.id} className={`border rounded-lg overflow-hidden ${statusInfo[issue.status].class}`}>
                  <div className="p-4 pb-2 border-b">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="text-sm text-gray-500 mb-1">{issue.category}</div>
                        <h3 className="text-lg font-semibold">{issue.title}</h3>
                      </div>
                      {statusInfo[issue.status].icon}
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-gray-700 mb-2">{issue.description}</p>
                    <div className="text-xs font-medium bg-gray-100 p-2 rounded">
                      {issue.kpi}
                    </div>
                  </div>
                  <div className="px-4 py-2 bg-gray-50">
                    <div className="flex items-center">
                      <span className="text-xs mr-2">우선순위:</span>
                      <span className={`text-xs px-2 py-1 rounded-full ${priorityInfo[issue.priority].class}`}>
                        {priorityInfo[issue.priority].text}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* 전략 추천 섹션 */}
          <div>
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <Star className="mr-2 h-5 w-5 text-blue-500" />
              AI 기반 맞춤형 HR 전략 추천
            </h2>
            
            <div className="mb-6">
              <div className="grid grid-cols-3 w-full bg-gray-100 rounded-lg overflow-hidden">
                <button
                  onClick={() => setSelectedPeriod('short')}
                  className={`flex items-center justify-center py-3 px-4 font-medium text-sm ${
                    selectedPeriod === 'short' 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <Clock className="h-4 w-4 mr-2" />
                  단기 전략 (6개월 이내)
                </button>
                <button
                  onClick={() => setSelectedPeriod('mid')}
                  className={`flex items-center justify-center py-3 px-4 font-medium text-sm ${
                    selectedPeriod === 'mid' 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <Clock className="h-4 w-4 mr-2" />
                  중기 전략 (1~2년)
                </button>
                <button
                  onClick={() => setSelectedPeriod('long')}
                  className={`flex items-center justify-center py-3 px-4 font-medium text-sm ${
                    selectedPeriod === 'long' 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <Clock className="h-4 w-4 mr-2" />
                  장기 전략 (3년 이상)
                </button>
              </div>
            </div>
            
            <div className="space-y-4">
              {strategies[selectedPeriod].map(strategy => (
                <div key={strategy.id} className="border-2 hover:border-blue-300 transition-all rounded-lg overflow-hidden">
                  <div className="p-4 border-b">
                    <div className="flex justify-between items-start">
                      <h3 className="text-lg font-semibold">{strategy.title}</h3>
                      <div className="flex space-x-2">
                        <span className={`text-xs px-2 py-1 rounded-full ${difficultyInfo[strategy.difficulty].class}`}>
                          난이도: {difficultyInfo[strategy.difficulty].text}
                        </span>
                        <span className={`text-xs px-2 py-1 rounded-full ${priorityInfo[strategy.priority].class}`}>
                          우선순위: {priorityInfo[strategy.priority].text}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-700 mb-4">{strategy.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold mb-2 text-blue-700">실행 방안:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        {strategy.implementation.map((step, idx) => (
                          <li key={idx} className="text-sm text-gray-700">{step}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-green-50 p-3 rounded border border-green-100">
                      <h4 className="text-sm font-semibold mb-1 text-green-700 flex items-center">
                        <CheckCircle className="h-4 w-4 mr-1" />
                        기대 효과:
                      </h4>
                      <p className="text-sm text-green-700">{strategy.expectedResults}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-8 bg-blue-50 p-4 rounded border border-blue-100 mb-6">
            <h3 className="text-md font-semibold text-blue-800 mb-2">AI 전략 추천 참고사항</h3>
            <p className="text-sm text-blue-700">
              위 전략은 입력하신 데이터를 기반으로 AI가 분석한 결과입니다. 실제 적용 시에는 기업의 상황과 환경을 고려하여 
              세부 실행 계획을 수립하는 것이 좋습니다. 더 자세한 컨설팅이 필요하시면 인사이트 컨설팅으로 문의해 주세요.
            </p>
          </div>
          
          <div className="mt-10 flex justify-between">
            <button className="px-4 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-50 flex items-center gap-2">
              <ArrowLeft size={16} />
              이전
            </button>
            <button className="flex items-center gap-2 px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded">
              조직진단으로 이동
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}