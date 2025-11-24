/**
 * PROJECT: CHINESE MASTERY
 * Author: Developer Trần Tấn Phát
 * Contact: Telegram @useriamtp
 * Description: Hệ thống học tiếng Trung với Audio & Nhận diện giọng nói.
 */


let unlockedLevel = parseInt(localStorage.getItem('unlockedLevel')) || 1;
let currentLessonId = null;
let currentChatStep = 0;


let isRecording = false;
let recognition;


const lessonListEl = document.getElementById('lesson-list');
const lessonContentArea = document.getElementById('lesson-content-area');
const welcomeScreen = document.getElementById('welcome-screen');
const lessonTitleEl = document.getElementById('current-lesson-title');
const lessonDescEl = document.getElementById('current-lesson-desc');
const vocabContainer = document.getElementById('vocab-container');
const userLevelBadge = document.getElementById('user-level-badge');
const chatInput = document.getElementById('chat-input');


document.addEventListener('DOMContentLoaded', () => {
    init();
    setupSpeechRecognition();
});

function init() {
    renderLessonList();
    updateBadge();
}

function updateBadge() {
    if(userLevelBadge) userLevelBadge.textContent = `Cấp độ ${unlockedLevel}`;
}


function renderLessonList() {
    if(!lessonListEl) return;
    lessonListEl.innerHTML = '';
    
    if (typeof lessonsData === 'undefined') {
        console.error("Vui lòng load file lessons-data.js trước.");
        return;
    }

    lessonsData.forEach(lesson => {
        const isLocked = lesson.id > unlockedLevel;
        const isActive = currentLessonId === lesson.id;
        
        const div = document.createElement('div');
        div.className = `lesson-item ${isLocked ? 'locked' : ''} ${isActive ? 'active' : ''}`;
        
        let iconContent = isLocked ? '🔒' : (lesson.id < unlockedLevel ? '✅' : '📖');
        
        div.innerHTML = `
            <div class="lesson-icon">${iconContent}</div>
            <div class="lesson-info">
                <span class="lesson-name">${lesson.title}</span>
                <span class="lesson-subtitle">${lesson.subtitle}</span>
            </div>
        `;

        if (!isLocked) {
            div.onclick = () => loadLesson(lesson.id);
        }

        lessonListEl.appendChild(div);
    });
}


function loadLesson(id) {
    currentLessonId = id;
    const lesson = lessonsData.find(l => l.id === id);
    
    welcomeScreen.classList.add('hidden');
    lessonContentArea.classList.add('hidden');
    
    setTimeout(() => {
        lessonContentArea.classList.remove('hidden');
    }, 10);

    lessonTitleEl.textContent = lesson.title;
    lessonDescEl.textContent = lesson.subtitle;
    
    renderLessonList();
    switchTab('vocab');
    
    renderVocab(lesson.vocab);
    resetChat(lesson.conversation);
    renderQuiz(lesson.quiz);
    
    if (window.innerWidth <= 768) closeMenu();
}


function switchTab(tabName) {
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    
    const btns = document.querySelectorAll('.tab-btn');
    btns.forEach(btn => {
        if(btn.getAttribute('onclick').includes(tabName)) btn.classList.add('active');
    });

    document.querySelectorAll('.view-pane').forEach(view => view.classList.remove('active'));
    const view = document.getElementById(`${tabName}-view`);
    if(view) view.classList.add('active');
}


function speakText(text) {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel(); 
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'zh-CN'; 
        utterance.rate = 0.8;
        window.speechSynthesis.speak(utterance);
    } else {
        alert("Trình duyệt không hỗ trợ phát âm.");
    }
}

function renderVocab(vocabList) {
    vocabContainer.innerHTML = '';
    vocabList.forEach((word, index) => {
        const card = document.createElement('div');
        card.className = 'vocab-card';
        
        card.style.animation = 'none';
        card.offsetHeight; 
        card.style.animation = `slideUp 0.5s ease ${index * 0.1}s forwards`;
        card.style.opacity = '0';
        card.style.animationFillMode = 'forwards';
        
      
        card.innerHTML = `
            <span class="vocab-hanzi">${word.hanzi}</span>
            <div class="vocab-info-wrapper">
                <span class="vocab-pinyin">${word.pinyin}</span>
                <span class="vocab-meaning">${word.meaning}</span>
            </div>
            <button class="btn-audio" onclick="speakText('${word.hanzi}')">
                🔊 Nghe phát âm
            </button>
        `;
        vocabContainer.appendChild(card);
    });
}


function setupSpeechRecognition() {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        recognition = new SpeechRecognition();
        recognition.lang = 'zh-CN'; 
        recognition.continuous = false;
        recognition.interimResults = false;

        recognition.onstart = function() {
            isRecording = true;
            const micBtn = document.getElementById('mic-btn');
            if(micBtn) micBtn.classList.add('recording');
            chatInput.placeholder = "Đang nghe bạn nói...";
        };

        recognition.onend = function() {
            isRecording = false;
            const micBtn = document.getElementById('mic-btn');
            if(micBtn) micBtn.classList.remove('recording');
            chatInput.placeholder = "Nhập hoặc bấm Mic để nói...";
        };

        recognition.onresult = function(event) {
            const transcript = event.results[0][0].transcript;
            chatInput.value = transcript;

        };
        
        recognition.onerror = function(event) {
            console.error("Lỗi Speech API:", event.error);
            alert("Không nghe rõ. Vui lòng kiểm tra Micro.");
        };
    }
}

// Hàm kích hoạt ghi âm
window.toggleRecording = function() {
    if (!recognition) {
        alert("Trình duyệt này chưa hỗ trợ Voice API. Vui lòng dùng Chrome hoặc Edge.");
        return;
    }
    if (isRecording) {
        recognition.stop();
    } else {
        recognition.start();
    }
};

function resetChat(conversationData) {
    currentChatStep = 0;
    const chatBox = document.getElementById('chat-messages');
    chatBox.innerHTML = `<div class="msg-bubble msg-bot">${conversationData.start}</div>`;
    chatInput.value = '';
}

function handleChatSubmit() {
    const userText = chatInput.value.trim().toLowerCase();
    if (!userText) return;

    const lesson = lessonsData.find(l => l.id === currentLessonId);
    const conversation = lesson.conversation;
    const chatBox = document.getElementById('chat-messages');

    chatBox.innerHTML += `<div class="msg-bubble msg-user">${chatInput.value}</div>`;
    chatInput.value = '';
    chatBox.scrollTop = chatBox.scrollHeight;

    if (currentChatStep < conversation.exchanges.length) {
        const stepData = conversation.exchanges[currentChatStep];
        const isCorrect = stepData.expectKeywords.some(kw => userText.includes(kw.toLowerCase()));

        setTimeout(() => {
            if (isCorrect) {
                chatBox.innerHTML += `<div class="msg-bubble msg-bot">${stepData.successReply}</div>`;

                speakText(stepData.successReply);
                currentChatStep++;
            } else {
                chatBox.innerHTML += `<div class="msg-bubble msg-system-error">${stepData.failReply}</div>`;
            }
            chatBox.scrollTop = chatBox.scrollHeight;
        }, 600);
    } else {
        setTimeout(() => {
            chatBox.innerHTML += `<div class="msg-bubble msg-bot">Tuyệt vời! Bạn đã hoàn thành bài hội thoại.</div>`;
            chatBox.scrollTop = chatBox.scrollHeight;
        }, 600);
    }
}

if(chatInput) {
    chatInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') handleChatSubmit();
    });
}


function renderQuiz(quizData) {
    const display = document.getElementById('quiz-display');
    const feedback = document.getElementById('quiz-feedback');
    const nextBtn = document.getElementById('next-lesson-btn');
    
    feedback.textContent = '';
    feedback.className = 'feedback-msg';
    nextBtn.classList.add('hidden');

    let html = `<div class="quiz-question">${quizData.question}</div><div class="quiz-options">`;
    quizData.options.forEach((opt, index) => {
        html += `<button class="quiz-option-btn" onclick="checkAnswer(${index})">${opt.text}</button>`;
    });
    html += `</div>`;
    display.innerHTML = html;
}

window.checkAnswer = function(selectedIndex) {
    const lesson = lessonsData.find(l => l.id === currentLessonId);
    const isCorrect = lesson.quiz.options[selectedIndex].correct;
    const feedback = document.getElementById('quiz-feedback');
    const nextBtn = document.getElementById('next-lesson-btn');

    if (isCorrect) {
        feedback.textContent = "Chính xác! 🎉";
        feedback.className = "feedback-msg correct";
        if (currentLessonId === unlockedLevel) {
            nextBtn.classList.remove('hidden');
        }
    } else {
        feedback.textContent = "Chưa đúng, thử lại nhé! 🤔";
        feedback.className = "feedback-msg wrong";
        nextBtn.classList.add('hidden');
    }
};

window.unlockNextLesson = function() {
    if (currentLessonId === unlockedLevel) {
        unlockedLevel++;
        localStorage.setItem('unlockedLevel', unlockedLevel);
        updateBadge();
        renderLessonList();
        if (lessonsData.find(l => l.id === unlockedLevel)) {
            loadLesson(unlockedLevel);
        } else {
            alert("Chúc mừng! Bạn đã hoàn thành tất cả các bài học.");
        }
    }
};


const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const sidebar = document.querySelector('.sidebar');
const overlay = document.getElementById('sidebar-overlay');

function toggleMenu() {
    if(sidebar) sidebar.classList.toggle('open');
    if(overlay) overlay.classList.toggle('active');
}
function closeMenu() {
    if(sidebar) sidebar.classList.remove('open');
    if(overlay) overlay.classList.remove('active');
}
if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', toggleMenu);
if (overlay) overlay.addEventListener('click', closeMenu);


const pinyinModal = document.getElementById('pinyin-modal');
const pinyinBtn = document.getElementById('pinyin-btn');
const closePinyinBtn = document.querySelector('.close-modal-btn');

function togglePinyinModal() {
    if(pinyinModal) pinyinModal.classList.toggle('active');
}
if(pinyinBtn) pinyinBtn.addEventListener('click', togglePinyinModal);
if(closePinyinBtn) closePinyinBtn.addEventListener('click', togglePinyinModal);
if(pinyinModal) {
    pinyinModal.addEventListener('click', (e) => {
        if (e.target === pinyinModal) togglePinyinModal();
    });
}
window.togglePinyinModal = togglePinyinModal;
window.speakText = speakText; // Expose ra ngoài để HTML gọi được