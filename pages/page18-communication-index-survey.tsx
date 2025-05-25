import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend } from 'recharts';

const CommunicationIndexSurvey = () => {
  const [userRole, setUserRole] = useState('employee');
  const [questions, setQuestions] = useState([
    { id: 1, text: '조직 내 정보 공유가 원활하게 이루어진다', score: 3, category: '정보공유' },
    { id: 2, text: '리더와의 커뮤니케이션이 자유롭다', score: 3, category: '수직소통' },
    { id: 3, text: '팀 내 협업이 원활하다', score: 3, category: '팀협업' },
    { id: 4, text: '부서 간 소통이 효과적으로 이루어진다', score: 3, category: '부서협업' },
    { id: 5, text: '회의는 효율적으로 진행된다', score: 3, category: '회의문화' },
    { id: 6, text: '의견 제시와 피드백이 자유롭게 이루어진다', score: 3, category: '피드백' },
  ]);
  const [responseRate, setResponseRate] = useState(72);
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
  const comparisonData = [
    { name: '커뮤니케이션 지수', 우리회사: parseFloat(avgScore), 업종평균: 3.9 },
    { name: '갈등 지수', 우리회사: 3.8, 업종평균: 2.5 },
  ];

  // 레이더 차트 데이터 준비 (카테고리별 지수)
  const categoryScores = {};
  questions.forEach(q => {
    if (!categoryScores[q.category]) {
      categoryScores[q.category] = { count: 0, total: 0 };
    }
    categoryScores[q.category].count += 1;
    categoryScores[q.category].total += q.score;
  });
  
  const radarData = Object.keys(categoryScores).map(category => ({
    category,
    우리회사: categoryScores[category].total / categoryScores[category].count,
    업종평균: 3.9
  }));

  // 부서별 데이터
  const departmentData = [
    { name: '영업팀', 커뮤니케이션지수: 3.1 },
    { name: '생산팀', 커뮤니케이션지수: 2.4 },
    { name: '인사팀', 커뮤니케이션지수: 3.8 },
    { name: '재무팀', 커뮤니케이션지수: 3.2 },
    { name: 'IT팀', 커뮤니케이션지수: 2.7 },
  ];

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-blue-800">HR Stats - 조직 내 커뮤니케이션 지수 측정</h1>
      
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
          <h2 className="text-lg font-semibold mb-2">평균 커뮤니케이션 지수</h2>
          <div className="text-center">
            <div className={`text-4xl font-bold ${avgScore < 3 ? 'text-red-600' : 'text-green-600'}`}>
              {avgScore}
            </div>
            <div className="text-sm text-gray-500 mt-1">(1: 매우 낮음 ~ 5: 매우 높음)</div>
          </div>
        </div>
        <div className="w-1/3 bg-blue-50 p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-2">업종 평균 비교</h2>
          <div className="text-center">
            <div className="text-lg">
              우리 회사: <span className={`font-bold ${avgScore < 3 ? 'text-red-600' : 'text-green-600'}`}>{avgScore}</span>
            </div>
            <div className="text-lg">
              업종 평균: <span className="font-bold text-blue-600">3.9</span>
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
              <div className="mt-1 text-xs text-gray-500 italic">카테고리: {question.category}</div>
            </div>
          ))}
        </div>
      </div>
      
      {/* 차트 영역 */}
      <div className="grid grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">커뮤니케이션 지수 비교</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={comparisonData}
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
          <h2 className="text-lg font-semibold mb-4">카테고리별 커뮤니케이션 지수</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart outerRadius={90} width={730} height={250} data={radarData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="category" />
                <PolarRadiusAxis angle={30} domain={[0, 5]} />
                <Radar name="우리회사" dataKey="우리회사" stroke="#3B82F6" fill="#3B82F6" fillOpacity={0.6} />
                <Radar name="업종평균" dataKey="업종평균" stroke="#93C5FD" fill="#93C5FD" fillOpacity={0.6} />
                <Legend />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      
      {/* 부서별 커뮤니케이션 지수 */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-4">부서별 커뮤니케이션 지수</h2>
        <div className="bg-white p-4 rounded-lg shadow">
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
                <Bar dataKey="커뮤니케이션지수" fill="#3B82F6" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      
      {/* 소통 네트워크 분석 - 설명 */}
      <div className="mb-8 bg-blue-50 p-4 rounded-lg">
        <h2 className="text-lg font-semibold mb-2">소통 네트워크 분석</h2>
        <p className="text-gray-700">
          설문 결과를 바탕으로 부서 간 소통 패턴을 시각화하여 네트워크 다이어그램으로 제공합니다.
          충분한 응답 데이터가 모이면 조직 내 정보 흐름, 협업 구조, 의사소통 병목 지점을 식별할 수 있습니다.
        </p>
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

export default CommunicationIndexSurvey;