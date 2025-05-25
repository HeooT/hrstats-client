import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const ConflictIndexSurvey = () => {
  const [userRole, setUserRole] = useState('employee');
  const [questions, setQuestions] = useState([
    { id: 1, text: '동료 간 갈등이 자주 발생한다', score: 3 },
    { id: 2, text: '리더십(상급자)과의 갈등이 있다', score: 3 },
    { id: 3, text: '업무 방식 차이로 인한 갈등이 있다', score: 3 },
    { id: 4, text: '부서 간 협력이 원활하지 않다', score: 3 },
    { id: 5, text: '의사소통 과정에서 오해가 자주 발생한다', score: 3 },
    { id: 6, text: '역할과 책임이 명확하게 구분되어 있지 않다', score: 3 },
  ]);
  const [responseRate, setResponseRate] = useState(68);
  const [avgScore, setAvgScore] = useState(0);

  // 설문 응답 처리
  const handleScoreChange = (id, score) => {
    const updatedQuestions = questions.map(q => {
      if (q.id === id) {
        return { ...q, score };
      }
      return q;
    });
    setQuestions(updatedQuestions);
  };

  // 평균 점수 계산
  useEffect(() => {
    const total = questions.reduce((sum, q) => sum + q.score, 0);
    setAvgScore((total / questions.length).toFixed(1));
  }, [questions]);

  // 역할 변경 처리
  const handleRoleChange = (role) => {
    setUserRole(role);
  };

  // 차트 데이터 준비
  const chartData = [
    { name: '갈등 지수', 우리회사: parseFloat(avgScore), 업종평균: 2.5 },
    { name: '커뮤니케이션 지수', 우리회사: 2.6, 업종평균: 3.9 },
  ];

  const departmentData = [
    { name: '영업팀', 갈등지수: 3.8 },
    { name: '생산팀', 갈등지수: 4.2 },
    { name: '인사팀', 갈등지수: 2.6 },
    { name: '재무팀', 갈등지수: 3.1 },
    { name: 'IT팀', 갈등지수: 3.5 },
  ];

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-blue-800">HR Stats - 조직 내 갈등 지수 측정</h1>
      
      {/* 상단 요약 정보 */}
      <div className="flex justify-between mb-8">
        <div className="w-1/3 bg-blue-50 p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-2">응답률</h2>
          <div className="relative pt-1">
            <div className="overflow-hidden h-4 mb-2 text-xs flex rounded bg-blue-200">
              <div style={{ width: `${responseRate}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-600"></div>
            </div>
            <div className="text-center font-semibold text-xl">{responseRate}%</div>
          </div>
        </div>
        <div className="w-1/3 bg-blue-50 p-4 rounded-lg mx-4">
          <h2 className="text-lg font-semibold mb-2">평균 갈등 지수</h2>
          <div className="text-center">
            <div className={`text-4xl font-bold ${avgScore > 3 ? 'text-red-600' : 'text-green-600'}`}>
              {avgScore}
            </div>
            <div className="text-sm text-gray-500 mt-1">(1: 매우 낮음 ~ 5: 매우 높음)</div>
          </div>
        </div>
        <div className="w-1/3 bg-blue-50 p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-2">업종 평균 비교</h2>
          <div className="text-center">
            <div className="text-lg">
              우리 회사: <span className={`font-bold ${avgScore > 3 ? 'text-red-600' : 'text-green-600'}`}>{avgScore}</span>
            </div>
            <div className="text-lg">
              업종 평균: <span className="font-bold text-blue-600">2.5</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* 역할 선택 */}
      <div className="mb-6 bg-gray-50 p-4 rounded-lg">
        <h2 className="text-lg font-semibold mb-3">응답자 역할</h2>
        <div className="flex space-x-4">
          <button 
            className={`px-4 py-2 rounded ${userRole === 'employee' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
            onClick={() => handleRoleChange('employee')}
          >
            일반 직원
          </button>
          <button 
            className={`px-4 py-2 rounded ${userRole === 'manager' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
            onClick={() => handleRoleChange('manager')}
          >
            관리자
          </button>
          <button 
            className={`px-4 py-2 rounded ${userRole === 'executive' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
            onClick={() => handleRoleChange('executive')}
          >
            경영진
          </button>
        </div>
      </div>
      
      {/* 설문 항목 */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-4">설문 항목</h2>
        <div className="bg-white rounded-lg shadow overflow-hidden">
          {questions.map((question) => (
            <div key={question.id} className="border-b last:border-b-0 p-4">
              <div className="flex justify-between items-center mb-2">
                <div className="text-lg">{question.text}</div>
                <div className="font-semibold">{question.score}</div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">매우 낮음</span>
                <div className="flex space-x-4">
                  {[1, 2, 3, 4, 5].map((score) => (
                    <button
                      key={score}
                      className={`w-8 h-8 rounded-full ${
                        question.score === score ? 'bg-blue-600 text-white' : 'bg-gray-200'
                      }`}
                      onClick={() => handleScoreChange(question.id, score)}
                    >
                      {score}
                    </button>
                  ))}
                </div>
                <span className="text-sm text-gray-500">매우 높음</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* 차트 영역 */}
      <div className="grid grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">갈등 지수 비교</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={chartData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis domain={[0, 5]} />
                <Tooltip />
                <Bar dataKey="우리회사" fill="#3B82F6" />
                <Bar dataKey="업종평균" fill="#93C5FD" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">부서별 갈등 지수</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={departmentData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis domain={[0, 5]} />
                <Tooltip />
                <Bar dataKey="갈등지수" fill="#3B82F6" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      
      {/* 결과 저장 및 다음 단계 */}
      <div className="flex justify-end">
        <button className="px-4 py-2 bg-gray-200 rounded mr-4">
          초기화
        </button>
        <button className="px-4 py-2 bg-blue-600 text-white rounded">
          저장 및 다음 단계
        </button>
      </div>
    </div>
  );
};

export default ConflictIndexSurvey;