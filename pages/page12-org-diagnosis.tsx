import React from 'react';
import { LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const OrganizationSummaryPage = () => {
  // 요약 데이터
  const totalPeople = 65;
  const avgWorkHours = 41.8;
  const avgSalary = 415.4;
  const avgYears = 4.2;

  // 차트 데이터
  const primaryActivityData = [
    { year: '2022', value: 76.8 },
    { year: '2023', value: 74.3 },
    { year: '2024', value: 71.7 },
  ];

  const pieData = [
    { name: '본원적 활동', value: 71.7 },
    { name: '지원활동', value: 28.3 },
  ];

  const COLORS = ['#0088FE', '#00C49F'];

  return (
    <div className="max-w-6xl mx-auto p-4 bg-white rounded-lg shadow">
      <div className="mb-6 border-b pb-3">
        <h1 className="text-2xl font-bold">5.4 조직진단 결과 요약 페이지</h1>
        <p className="text-sm text-gray-500 mt-1">
          기업명: (주)인사이트 | 업종: 서비스업 | 총 4개 팀 | 본원적 활동: 지원활동 비율 = {pieData[0].value}%:{pieData[1].value}%
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="col-span-1 md:col-span-2 bg-gray-50 p-4 rounded-lg">
          <h3 className="text-lg font-medium mb-4">조직 개요 및 주요 경영 지표</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-white p-3 rounded-lg shadow-sm">
              <p className="text-sm text-gray-500">총 인원</p>
              <p className="text-xl font-bold">{totalPeople}명</p>
            </div>
            <div className="bg-white p-3 rounded-lg shadow-sm">
              <p className="text-sm text-gray-500">평균 근로시간</p>
              <p className="text-xl font-bold">{avgWorkHours}시간</p>
            </div>
            <div className="bg-white p-3 rounded-lg shadow-sm">
              <p className="text-sm text-gray-500">평균 임금</p>
              <p className="text-xl font-bold">{avgSalary}만원</p>
            </div>
            <div className="bg-white p-3 rounded-lg shadow-sm">
              <p className="text-sm text-gray-500">평균 재직연수</p>
              <p className="text-xl font-bold">{avgYears}년</p>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-medium mb-2">조직 구조 분석</h3>
          <div className="h-64 border border-gray-200 rounded-lg p-2">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(1)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-medium mb-2">연도별 본원적 활동 추세</h3>
          <div className="h-64 border border-gray-200 rounded-lg p-2">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={primaryActivityData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis domain={[60, 80]} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="value" name="본원적 활동 비율 (%)" stroke="#8884d8" activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-2">조직 기능별 주요 지표 대시보드</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 border text-left text-xs font-medium text-gray-500 uppercase tracking-wider">팀명</th>
                <th className="px-6 py-3 border text-left text-xs font-medium text-gray-500 uppercase tracking-wider">인원 비중</th>
                <th className="px-6 py-3 border text-left text-xs font-medium text-gray-500 uppercase tracking-wider">평균 근로시간</th>
                <th className="px-6 py-3 border text-left text-xs font-medium text-gray-500 uppercase tracking-wider">평균 임금</th>
                <th className="px-6 py-3 border text-left text-xs font-medium text-gray-500 uppercase tracking-wider">생산성 지수</th>
                <th className="px-6 py-3 border text-left text-xs font-medium text-gray-500 uppercase tracking-wider">개선 필요성</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 border">영업팀</td>
                <td className="px-6 py-4 border">23.1%</td>
                <td className="px-6 py-4 border">42시간</td>
                <td className="px-6 py-4 border">450만원</td>
                <td className="px-6 py-4 border">112.3</td>
                <td className="px-6 py-4 border">
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">낮음</span>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 border">생산팀</td>
                <td className="px-6 py-4 border">53.8%</td>
                <td className="px-6 py-4 border">44시간</td>
                <td className="px-6 py-4 border">380만원</td>
                <td className="px-6 py-4 border">105.2</td>
                <td className="px-6 py-4 border">
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">낮음</span>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 border">인사팀</td>
                <td className="px-6 py-4 border">12.3%</td>
                <td className="px-6 py-4 border">40시간</td>
                <td className="px-6 py-4 border">420만원</td>
                <td className="px-6 py-4 border">93.5</td>
                <td className="px-6 py-4 border">
                  <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">중간</span>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 border">재무팀</td>
                <td className="px-6 py-4 border">10.8%</td>
                <td className="px-6 py-4 border">39시간</td>
                <td className="px-6 py-4 border">440만원</td>
                <td className="px-6 py-4 border">91.1</td>
                <td className="px-6 py-4 border">
                  <span className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs">높음</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      <div className="bg-blue-50 p-4 rounded-lg mb-6">
        <h3 className="text-lg font-medium mb-3">AI 기반 조직 최적화 전략 제안</h3>
        <div className="space-y-3">
          <div>
            <p className="font-semibold mb-1">1. 현황 분석</p>
            <ul className="list-disc pl-5 text-sm">
              <li>본원적 활동 비율이 3년간 지속적으로 감소 (76.8% → 71.7%)</li>
              <li>지원활동 부서의 인력 비중 및 인건비 증가 추세</li>
              <li>지원활동 부서의 생산성 지수가 본원적 활동 부서 대비 낮음</li>
            </ul>
          </div>
          
          <div>
            <p className="font-semibold mb-1">2. 문제점</p>
            <ul className="list-disc pl-5 text-sm">
              <li>매출 성장에 비해 지원활동 인력 증가율이 높음</li>
              <li>지원활동 부서의 업무 효율성 제고 필요</li>
              <li>재무팀의 생산성 개선 시급</li>
            </ul>
          </div>
          
          <div>
            <p className="font-semibold mb-1">3. 개선방안</p>
            <ul className="list-disc pl-5 text-sm">
              <li>지원활동 부서의 업무 프로세스 효율화 (자동화, 시스템 개선)</li>
              <li>본원적 활동 부서의 인력 재배치 및 역량 강화</li>
              <li>영업팀과 생산팀의 인당 생산성 향상을 위한 교육 투자</li>
              <li>재무팀의 업무 범위 조정 및 인력 구조 재검토</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col items-center mb-6">
        <h3 className="text-lg font-medium mb-3">실행 로드맵</h3>
        <div className="w-full max-w-3xl bg-white p-4 border border-gray-200 rounded-lg">
          <div className="flex mb-2">
            <div className="w-1/3 text-center font-medium border-r border-gray-200 p-2">단기 (3개월)</div>
            <div className="w-1/3 text-center font-medium border-r border-gray-200 p-2">중기 (6개월)</div>
            <div className="w-1/3 text-center font-medium p-2">장기 (12개월)</div>
          </div>
          <div className="flex">
            <div className="w-1/3 text-sm border-r border-gray-200 p-2">
              <ul className="list-disc pl-4">
                <li>지원부서 업무 프로세스 분석</li>
                <li>재무팀 업무 효율화 방안 수립</li>
                <li>부서간 협업 방식 개선</li>
              </ul>
            </div>
            <div className="w-1/3 text-sm border-r border-gray-200 p-2">
              <ul className="list-disc pl-4">
                <li>본원적 활동 인력 강화</li>
                <li>업무 자동화 시스템 도입</li>
                <li>인사팀 역량 개발 프로그램</li>
              </ul>
            </div>
            <div className="w-1/3 text-sm p-2">
              <ul className="list-disc pl-4">
                <li>조직구조 최적화 완료</li>
                <li>본원적 활동 비율 75% 회복</li>
                <li>전사 생산성 지수 110 달성</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex justify-center mb-6">
        <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded flex items-center">
          <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
          진단 보고서 다운로드 (PDF)
        </button>
      </div>
      
      <div className="flex justify-end mt-6 pt-4 border-t">
        <button className="bg-gray-200 hover:bg-gray-300 py-2 px-4 rounded">
          이전 단계
        </button>
      </div>
    </div>
  );
};

export default OrganizationSummaryPage;