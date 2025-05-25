import React from 'react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const OrganizationAnalysisPage = () => {
  // 조직 활동 분석 데이터
  const primaryActivityData = [
    { year: '2022', value: 76.8 },
    { year: '2023', value: 74.3 },
    { year: '2024', value: 71.7 },
  ];

  const laborInputData = [
    { year: '2022', primary: 76.8, support: 23.2 },
    { year: '2023', primary: 74.3, support: 25.7 },
    { year: '2024', primary: 71.7, support: 28.3 },
  ];

  const pieData = [
    { name: '본원적 활동', value: 71.7 },
    { name: '지원활동', value: 28.3 },
  ];

  const COLORS = ['#0088FE', '#00C49F'];

  const salesVsWorkforceData = [
    { year: '2022', sales: 100, workforce: 100 },
    { year: '2023', sales: 115, workforce: 105 },
    { year: '2024', sales: 125, workforce: 112 },
  ];
  
  return (
    <div className="max-w-6xl mx-auto p-4 bg-white rounded-lg shadow">
      <div className="mb-6 border-b pb-3">
        <h1 className="text-2xl font-bold">5.3 조직 활동 분석 페이지</h1>
        <p className="text-sm text-gray-500 mt-1">
          기업명: (주)인사이트 | 업종: 서비스업 | 총 4개 팀 입력됨. 본원적 활동 2개, 지원활동 2개
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <h3 className="text-lg font-medium mb-2">본원적 활동과 지원활동 비율</h3>
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
          <h3 className="text-lg font-medium mb-2">연도별 본원적 활동 노동투입량 변화</h3>
          <div className="h-64 border border-gray-200 rounded-lg p-2">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={primaryActivityData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis domain={[60, 80]} />
                <Tooltip />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="value" 
                  name="본원적 활동 비율 (%)" 
                  stroke="#8884d8" 
                  activeDot={{ r: 8 }} 
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <h3 className="text-lg font-medium mb-2">연도별 활동 비율 변화</h3>
          <div className="h-64 border border-gray-200 rounded-lg p-2">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={laborInputData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="primary" name="본원적 활동 (%)" stackId="a" fill="#8884d8" />
                <Bar dataKey="support" name="지원활동 (%)" stackId="a" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-medium mb-2">본원적 활동과 매출액 추세 비교</h3>
          <div className="h-64 border border-gray-200 rounded-lg p-2">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={salesVsWorkforceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="sales" name="매출액 지수" stroke="#ff7300" />
                <Line type="monotone" dataKey="workforce" name="노동투입량 지수" stroke="#387908" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="mb-6 mt-8">
        <h3 className="text-lg font-medium mb-2">조직 구조 최적화 제안</h3>
        <div className="p-4 bg-blue-50 rounded-lg">
          <div className="text-gray-800">
            <p className="mb-2"><strong>현황 분석:</strong></p>
            <ul className="list-disc pl-5 mb-4">
              <li>본원적 활동 비율이 지속적으로 감소하고 있습니다(76.8% → 71.7%).</li>
              <li>매출액은 증가 추세이나, 노동투입량 증가율이 더 높은 상황입니다.</li>
              <li>지원활동 부서의 비중이 점차 확대되고 있어 효율성 검토가 필요합니다.</li>
            </ul>
            
            <p className="mb-2"><strong>최적화 제안:</strong></p>
            <ul className="list-disc pl-5">
              <li>지원활동 부서(인사팀, 재무팀)의 업무 프로세스 효율화가 필요합니다.</li>
              <li>자동화 시스템 도입을 통한 지원업무 인력 최적화를 검토하세요.</li>
              <li>본원적 활동 부서의 인력을 확충하고 노동생산성을 향상시키는 방안을 고려하세요.</li>
              <li>영업팀과 생산팀의 역량 강화를 통해 인당 생산성을 개선하세요.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-medium mb-2">조직 내 직무별 인적 자원 투자 대비 효과 분석</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 border text-left text-xs font-medium text-gray-500 uppercase tracking-wider">팀명</th>
                <th className="px-6 py-3 border text-left text-xs font-medium text-gray-500 uppercase tracking-wider">인력 비중</th>
                <th className="px-6 py-3 border text-left text-xs font-medium text-gray-500 uppercase tracking-wider">인건비 비중</th>
                <th className="px-6 py-3 border text-left text-xs font-medium text-gray-500 uppercase tracking-wider">생산성 지수</th>
                <th className="px-6 py-3 border text-left text-xs font-medium text-gray-500 uppercase tracking-wider">효율성 평가</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 border">영업팀</td>
                <td className="px-6 py-4 border">23.1%</td>
                <td className="px-6 py-4 border">25.8%</td>
                <td className="px-6 py-4 border">112.3</td>
                <td className="px-6 py-4 border">
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">우수</span>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 border">생산팀</td>
                <td className="px-6 py-4 border">53.8%</td>
                <td className="px-6 py-4 border">50.9%</td>
                <td className="px-6 py-4 border">105.2</td>
                <td className="px-6 py-4 border">
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">우수</span>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 border">인사팀</td>
                <td className="px-6 py-4 border">12.3%</td>
                <td className="px-6 py-4 border">12.8%</td>
                <td className="px-6 py-4 border">93.5</td>
                <td className="px-6 py-4 border">
                  <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">보통</span>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 border">재무팀</td>
                <td className="px-6 py-4 border">10.8%</td>
                <td className="px-6 py-4 border">11.8%</td>
                <td className="px-6 py-4 border">91.1</td>
                <td className="px-6 py-4 border">
                  <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">보통</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex justify-end space-x-2 mt-6 pt-4 border-t">
        <button className="bg-gray-200 hover:bg-gray-300 py-2 px-4 rounded">
          이전 단계
        </button>
        <button className="bg-gray-200 hover:bg-gray-300 py-2 px-4 rounded">
          다음 단계
        </button>
      </div>
    </div>
  );
};

export default OrganizationAnalysisPage;