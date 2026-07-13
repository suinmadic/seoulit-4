// 1. 질문 데이터 선언 (type은 선택했을 때 점수가 올라가는 성향을 의미합니다)
const questions = [
    { q: "주말에 시간이 생겼을 때 나의 행동은?", a: "친구들에게 연락해 밖에서 만난다.", b: "집에서 혼자 넷플릭스를 보며 쉰다.", type: "E" },
    { q: "새로운 사람을 만났을 때 나는?", a: "먼저 말을 걸고 분위기를 주도하는 편이다.", b: "상대방이 말을 걸 때까지 기다리는 편이다.", type: "E" },
    { q: " 낯선 파티나 모임에 초대받았다면?", a: "새로운 사람들을 사귈 생각에 설렌다.", b: "아는 사람이 없으면 기가 빨리고 집에 가고 싶다.", type: "E" },
    
    { q: "하늘에 떠 있는 구름을 볼 때 드는 생각은?", a: "오늘 날씨 맑네, 구름 예쁘다.", b: "저 구름은 양 모양 같네. 비행기 타고 구름 만지면 어떤 느낌일까?", type: "S" },
    { q: "친구가 '나 이번에 새로운 사업 하려고!'라고 한다면?", a: "자본금은 얼마야? 구체적인 계획이 있어?", b: "오 멋지다! 대박 나면 나 맛있는 거 사줘!", type: "S" },
    { q: "소설책이나 영화를 볼 때 나는?", a: "스토리의 전개와 사실적인 묘사에 집중한다.", b: "주인공의 감정에 이입하고 숨겨진 세계관을 상상한다.", type: "S" },
    
    { q: "친구가 '나 너무 우울해서 쇼핑했어'라고 할 때 나의 반응은?", a: "돈 많이 썼어? 뭐 샀는데?", b: "무슨 일 있어? 왜 우울했어ㅠㅠ", type: "T" },
    { q: "조별 과제 중 팀원이 실수를 해서 결과가 망가졌다면?", a: "잘못된 부분을 지적하고 어떻게 수정할지 논의한다.", b: "팀원이 무안하지 않게 위로하고 다독여준다.", type: "T" },
    { q: "친구가 사소한 고민을 털어놓을 때 내가 해주는 말은?", a: "그건 이렇게 해결하면 돼! (해결책 제시)", b: "진짜 속상했겠다... 완전 이해돼. (공감)", type: "T" },
    
    { q: "여행 계획을 세울 때 나는?", a: "시간 단위로 일정과 식당, 대안 경로까지 다 짠다.", b: " 목적지와 큰 틀만 정하고 발길 닿는 대로 움직인다.", type: "J" },
    { q: "과제나 업무를 처리할 때 나의 스타일은?", a: "미리미리 계획을 세워 마감일 전에 여유롭게 끝낸다.", b: "마감 직전이 되어야 집중력이 솟구쳐 벼락치기를 한다.", type: "J" },
    { q: "방 청소나 주변 정리를 할 때 나는?", a: "물건들이 제자리에 정돈되어 있어야 마음이 편하다.", b: "어느 정도 어질러져 있어도 내가 찾는 데 문제없으면 둔다.", type: "J" }
];

// 2. MBTI 결과 설명 데이터
const resultsDesc = {
    "ESTJ": "체계적이고 규칙을 중시하는 효율적인 관리자 유형입니다.",
    "ESTP": "스릴을 즐기고 문제를 즉각 해결하는 활동가 유형입니다.",
    "ESFJ": "타인에게 친절하고 협동을 잘하는 사교적인 유형입니다.",
    "ESFP": "분위기를 주도하고 친동생처럼 다정한 낙천주의자 유형입니다.",
    "ENTJ": "비전을 가지고 팀을 이끄는 타고난 리더 유형입니다.",
    "ENTP": "풍부한 상상력으로 새로운 도전을 즐기는 발명가 유형입니다.",
    "ENFJ": "타인의 성장을 돕고 이끄는 따뜻한 지도자 유형입니다.",
    "ENFP": "열정적이고 창의적이며 자유로운 영혼의 소유자 유형입니다.",
    "ISTJ": "한 번 시작한 일은 끝까지 책임지는 신뢰형 유형입니다.",
    "ISTP": "만능 재주꾼으로 상황 적응력이 뛰어나고 객관적인 유형입니다.",
    "ISFJ": "주변 사람들을 조용하고 헌신적으로 챙기는 수호자 유형입니다.",
    "ISFP": "예술적 감각이 있고 갈등을 싫어하는 다정한 유형입니다.",
    "INTJ": "독립적이고 전략적인 사고가 뛰어난 전략가 유형입니다.",
    "INTP": "비평적인 관점을 가진 조용한 아이디어 뱅크 유형입니다.",
    "INFJ": "통찰력이 뛰어나고 사람들에게 영감을 주는 예언자 유형입니다.",
    "INFP": "이상주의적이며 마음이 따뜻하고 조용한 열정가 유형입니다."
};

// 3. 변수 초기화
let currentIdx = 0;
let scores = { E: 0, S: 0, T: 0, J: 0 }; // A 선택지를 고르면 올라갈 점수

// HTML 요소 가져오기
const startScreen = document.getElementById("start-screen");
const questionScreen = document.getElementById("question-screen");
const resultScreen = document.getElementById("result-screen");

const startBtn = document.getElementById("start-btn");
const restartBtn = document.getElementById("restart-btn");
const answerBtnA = document.getElementById("answer-a");
const answerBtnB = document.getElementById("answer-b");

const questionNumText = document.getElementById("question-number");
const questionText = document.getElementById("question-text");
const progressBar = document.getElementById("progress-bar");
const mbtiResult = document.getElementById("mbti-result");
const resultDesc = document.getElementById("result-desc");

// 4. 이벤트 리스너 설정
startBtn.addEventListener("click", startQuiz);
restartBtn.addEventListener("click", startQuiz);
answerBtnA.addEventListener("click", () => handleAnswer(true));
answerBtnB.addEventListener("click", () => handleAnswer(false));

// 5. 함수 구현
function startQuiz() {
    currentIdx = 0;
    scores = { E: 0, S: 0, T: 0, J: 0 };
    
    startScreen.classList.add("hide");
    resultScreen.classList.add("hide");
    questionScreen.classList.remove("hide");
    
    showQuestion();
}

function showQuestion() {
    const currentQ = questions[currentIdx];
    
    // 프로그레스 바 및 문제 번호 업데이트
    const progressPercent = (currentIdx / questions.length) * 100;
    progressBar.style.width = `${progressPercent}%`;
    questionNumText.innerText = `Q${currentIdx + 1} / ${questions.length}`;
    
    // 텍스트 출력
    questionText.innerText = currentQ.q;
    answerBtnA.innerText = currentQ.a;
    answerBtnB.innerText = currentQ.b;
}

function handleAnswer(isA) {
    const currentQ = questions[currentIdx];
    
    // A를 선택했을 때 해당 성향에 점수 부여 (각 지표당 3문제씩이므로 과반수인 2점 이상이면 해당 성향)
    if (isA) {
        scores[currentQ.type]++;
    }
    
    currentIdx++;
    
    if (currentIdx < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    questionScreen.classList.add("hide");
    resultScreen.classList.remove("hide");
    
    // 점수 계산을 통한 MBTI 조합 생성 (3문제 중 2문제 이상 선택 시 앞글자 부여)
    let mbti = "";
    mbti += scores.E >= 2 ? "E" : "I";
    mbti += scores.S >= 2 ? "S" : "N";
    mbti += scores.T >= 2 ? "T" : "F";
    mbti += scores.J >= 2 ? "J" : "P";
    
    // 화면에 결과 반영
    mbtiResult.innerText = mbti;
    resultDesc.innerText = resultsDesc[mbti] || "당신은 알 수 없는 신비로운 성향을 가졌군요!";
}
