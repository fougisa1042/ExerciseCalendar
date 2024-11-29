// 현재 날짜와 연속 운동 일수를 저장할 변수
let currentDate = new Date();
let streakCount = 0;

// DOM 요소 선택
const calendarDays = document.getElementById('calendarDays');
const streakCountDisplay = document.getElementById('streakCount');
const workoutInput = document.getElementById('workoutInput');
const recordWorkoutButton = document.getElementById('recordWorkout');

// 현재 월의 날짜를 생성하는 함수
function generateCalendarDays() {
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();
    const firstDay = new Date(year, month, 1).getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();

    // 이전 달의 날짜를 추가
    calendarDays.innerHTML = '';
    for (let i = 0; i < firstDay; i++) {
        const prevMonthDay = document.createElement('div');
        prevMonthDay.className = 'calendar-day prev-month';
        prevMonthDay.textContent = '';
        calendarDays.appendChild(prevMonthDay);
    }

    // 현재 달의 날짜를 추가
    for (let day = 1; day <= lastDate; day++) {
        const dayElement = document.createElement('div');
        dayElement.className = 'calendar-day';
        dayElement.textContent = day;

        // 클릭 이벤트 추가
        dayElement.addEventListener('click', () => recordWorkout(day));
        calendarDays.appendChild(dayElement);
    }
}

// 운동 기록을 추가하는 함수
function recordWorkout(day) {
    const workout = workoutInput.value.trim();
    if (workout) {
        const workoutDay = document.querySelector(`.calendar-day:nth-child(${day + 7})`); // 7을 더해 클릭한 날짜에 맞는 요소 선택
        workoutDay.classList.add('workout-done');
        workoutDay.textContent = `${day} ✔️`;
        streakCount++;
        streakCountDisplay.textContent = streakCount;
        workoutInput.value = ''; // 입력 필드 초기화
    } else {
        alert('운동 내용을 입력하세요!');
    }
}

// 초기 캘린더 생성
generateCalendarDays();
