class VocabularyApp {
    constructor() {
        this.words = [
            {
                id: 1,
                word: "abandon",
                phonetic: "/əˈbændən/",
                meaning: "放弃，抛弃",
                example: "They abandoned the car on the road.",
                difficulty: "medium",
                category: "common"
            },
            {
                id: 2,
                word: "ability",
                phonetic: "/əˈbɪləti/",
                meaning: "能力，才能",
                example: "She has the ability to speak multiple languages.",
                difficulty: "easy",
                category: "common"
            },
            {
                id: 3,
                word: "absorb",
                phonetic: "/əbˈsɔːrb/",
                meaning: "吸收，吸引",
                example: "Plants absorb water from the soil.",
                difficulty: "medium",
                category: "academic"
            },
            {
                id: 4,
                word: "academic",
                phonetic: "/ˌækəˈdemɪk/",
                meaning: "学术的，理论的",
                example: "He is pursuing an academic career.",
                difficulty: "hard",
                category: "academic"
            },
            {
                id: 5,
                word: "accept",
                phonetic: "/əkˈsept/",
                meaning: "接受，同意",
                example: "I accept your apology.",
                difficulty: "easy",
                category: "common"
            },
            {
                id: 6,
                word: "achieve",
                phonetic: "/əˈtʃiːv/",
                meaning: "实现，达到",
                example: "She worked hard to achieve her goals.",
                difficulty: "medium",
                category: "common"
            },
            {
                id: 7,
                word: "acquire",
                phonetic: "/əˈkwaɪər/",
                meaning: "获得，学到",
                example: "He acquired knowledge through experience.",
                difficulty: "hard",
                category: "academic"
            },
            {
                id: 8,
                word: "adapt",
                phonetic: "/əˈdæpt/",
                meaning: "适应，改编",
                example: "Humans can adapt to different environments.",
                difficulty: "medium",
                category: "common"
            },
            {
                id: 9,
                word: "adequate",
                phonetic: "/ˈædɪkwət/",
                meaning: "足够的，适当的",
                example: "The supply is not adequate for the demand.",
                difficulty: "hard",
                category: "academic"
            },
            {
                id: 10,
                word: "admire",
                phonetic: "/ədˈmaɪər/",
                meaning: "钦佩，赞赏",
                example: "I admire her dedication to her work.",
                difficulty: "medium",
                category: "common"
            },
            {
                id: 11,
                word: "admit",
                phonetic: "/ədˈmɪt/",
                meaning: "承认，准许...进入",
                example: "She admitted her mistake.",
                difficulty: "easy",
                category: "common"
            },
            {
                id: 12,
                word: "adopt",
                phonetic: "/əˈdɑːpt/",
                meaning: "采纳，收养",
                example: "They decided to adopt a child.",
                difficulty: "medium",
                category: "common"
            },
            {
                id: 13,
                word: "advantage",
                phonetic: "/ədˈvæntɪdʒ/",
                meaning: "优势，好处",
                example: "Her height gives her an advantage in basketball.",
                difficulty: "medium",
                category: "common"
            },
            {
                id: 14,
                word: "adventure",
                phonetic: "/ədˈventʃər/",
                meaning: "冒险，奇遇",
                example: "They went on an adventure in the mountains.",
                difficulty: "medium",
                category: "common"
            },
            {
                id: 15,
                word: "affect",
                phonetic: "/əˈfekt/",
                meaning: "影响，感动",
                example: "The weather affects my mood.",
                difficulty: "medium",
                category: "academic"
            },
            {
                id: 16,
                word: "afford",
                phonetic: "/əˈfɔːrd/",
                meaning: "负担得起，提供",
                example: "I can't afford a new car right now.",
                difficulty: "easy",
                category: "common"
            },
            {
                id: 17,
                word: "afraid",
                phonetic: "/əˈfreɪd/",
                meaning: "害怕的，担心的",
                example: "She is afraid of spiders.",
                difficulty: "easy",
                category: "common"
            },
            {
                id: 18,
                word: "agency",
                phonetic: "/ˈeɪdʒənsi/",
                meaning: "代理，中介",
                example: "I booked my trip through a travel agency.",
                difficulty: "hard",
                category: "academic"
            },
            {
                id: 19,
                word: "agree",
                phonetic: "/əˈɡriː/",
                meaning: "同意，赞成",
                example: "I agree with your opinion.",
                difficulty: "easy",
                category: "common"
            },
            {
                id: 20,
                word: "agreement",
                phonetic: "/əˈɡriːmənt/",
                meaning: "协议，同意",
                example: "We reached an agreement on the terms.",
                difficulty: "medium",
                category: "common"
            },
            {
                id: 21,
                word: "analyze",
                phonetic: "/ˈænəlaɪz/",
                meaning: "分析，解析",
                example: "Scientists need to analyze the data carefully.",
                difficulty: "hard",
                category: "academic"
            },
            {
                id: 22,
                word: "announce",
                phonetic: "/əˈnaʊns/",
                meaning: "宣布，宣告",
                example: "The company announced its new product.",
                difficulty: "medium",
                category: "common"
            },
            {
                id: 23,
                word: "anxious",
                phonetic: "/ˈæŋkʃəs/",
                meaning: "焦虑的，担忧的",
                example: "She feels anxious about the exam.",
                difficulty: "medium",
                category: "common"
            },
            {
                id: 24,
                word: "apologize",
                phonetic: "/əˈpɑːlədʒaɪz/",
                meaning: "道歉，谢罪",
                example: "He apologized for being late.",
                difficulty: "medium",
                category: "common"
            },
            {
                id: 25,
                word: "apparent",
                phonetic: "/əˈpærənt/",
                meaning: "明显的，表面的",
                example: "It was apparent that she was upset.",
                difficulty: "hard",
                category: "academic"
            },
            {
                id: 26,
                word: "appear",
                phonetic: "/əˈpɪr/",
                meaning: "出现，显得",
                example: "A man appeared at the door.",
                difficulty: "easy",
                category: "common"
            },
            {
                id: 27,
                word: "apply",
                phonetic: "/əˈplaɪ/",
                meaning: "申请，应用",
                example: "I want to apply for that job.",
                difficulty: "medium",
                category: "common"
            },
            {
                id: 28,
                word: "appreciate",
                phonetic: "/əˈpriːʃieɪt/",
                meaning: "欣赏，感激",
                example: "I really appreciate your help.",
                difficulty: "hard",
                category: "common"
            },
            {
                id: 29,
                word: "approach",
                phonetic: "/əˈproʊtʃ/",
                meaning: "接近，方法",
                example: "Winter is approaching.",
                difficulty: "medium",
                category: "common"
            },
            {
                id: 30,
                word: "appropriate",
                phonetic: "/əˈproʊpriət/",
                meaning: "适当的，恰当的",
                example: "Please wear appropriate clothing.",
                difficulty: "hard",
                category: "academic"
            }
        ];
        
        this.currentWordIndex = 0;
        this.learnedWords = new Set();
        this.unknownWords = new Set();
        this.currentTest = null;
        this.currentSessionWords = [];
        this.userStats = {
            totalWords: this.words.length,
            learnedWords: 0,
            todayWords: 0,
            streakDays: 0,
            totalTime: 0,
            correctAnswers: 0,
            totalAnswers: 0
        };
        
        this.initializeApp();
        this.bindEvents();
        this.loadUserProgress();
    }

    initializeApp() {
        this.updateStats();
        this.showPage('home');
    }

    bindEvents() {
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const page = e.target.getAttribute('href').substring(1);
                this.showPage(page);
            });
        });
    }

    showPage(pageId) {
        document.querySelectorAll('.page').forEach(page => {
            page.classList.remove('active');
        });
        
        document.getElementById(pageId).classList.add('active');
        
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
        });
        
        document.querySelector(`[href="#${pageId}"]`).classList.add('active');
        
        if (pageId === 'progress') {
            this.updateProgressPage();
        }
    }

    updateStats() {
        document.getElementById('totalWords').textContent = this.userStats.totalWords;
        document.getElementById('learnedWords').textContent = this.userStats.learnedWords;
        document.getElementById('todayWords').textContent = this.userStats.todayWords;
    }

    startLearning() {
        this.showPage('learn');
        this.currentSessionWords = this.getRandomWords(10);
        this.currentWordIndex = 0;
        this.showCurrentWord();
        this.updateProgressBar();
    }

    showCurrentWord() {
        const word = this.currentSessionWords[this.currentWordIndex];
        if (!word) return;
        
        document.getElementById('wordText').textContent = word.word;
        document.getElementById('wordPhonetic').textContent = word.phonetic;
        document.getElementById('wordMeaning').textContent = word.meaning;
        document.getElementById('wordExample').textContent = word.example;
        
        this.currentWord = word;
        this.resetWordCard();
    }

    resetWordCard() {
        const meaningSection = document.getElementById('meaningSection');
        meaningSection.style.display = 'none';
    }

    showMeaning() {
        const meaningSection = document.getElementById('meaningSection');
        meaningSection.style.display = 'block';
    }

    toggleMeaning() {
        const meaningSection = document.getElementById('meaningSection');
        if (meaningSection.style.display === 'none') {
            meaningSection.style.display = 'block';
        } else {
            meaningSection.style.display = 'none';
        }
    }

    markKnown() {
        const word = this.currentSessionWords[this.currentWordIndex];
        this.learnedWords.add(word.id);
        this.unknownWords.delete(word.id);
        
        this.userStats.learnedWords = this.learnedWords.size;
        this.userStats.todayWords++;
        this.userStats.correctAnswers++;
        this.userStats.totalAnswers++;
        
        this.updateStats();
        this.saveUserProgress();
        this.nextWord();
    }

    markUnknown() {
        const word = this.currentSessionWords[this.currentWordIndex];
        this.unknownWords.add(word.id);
        this.learnedWords.delete(word.id);
        
        this.userStats.totalAnswers++;
        
        this.saveUserProgress();
        this.nextWord();
    }

    nextWord() {
        this.currentWordIndex++;
        if (this.currentWordIndex < this.currentSessionWords.length) {
            this.showCurrentWord();
            this.updateProgressBar();
        } else {
            this.completeLearningSession();
        }
    }

    updateProgressBar() {
        const progress = (this.currentWordIndex / this.currentSessionWords.length) * 100;
        document.getElementById('progressFill').style.width = progress + '%';
    }

    completeLearningSession() {
        alert('恭喜完成本轮学习！');
        this.showPage('home');
        this.updateStats();
    }

    playWordAudio(word = null) {
        const wordToPlay = word || this.currentWord;
        if (!wordToPlay) return;
        
        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(wordToPlay.word);
            utterance.lang = 'en-US';
            utterance.rate = 0.8;
            utterance.pitch = 1;
            speechSynthesis.speak(utterance);
        } else {
            alert('您的浏览器不支持语音合成功能');
        }
    }

    playTestAudio(word) {
        this.playWordAudio({ word: word });
    }

    startTest() {
        this.showPage('test');
        this.currentTest = this.generateTest();
        this.showCurrentQuestion();
    }

    generateTest() {
        const testQuestions = [];
        const testWords = this.getRandomWords(5);
        
        for (let i = 0; i < testWords.length; i++) {
            const word = testWords[i];
            const options = this.generateOptions(word);
            
            testQuestions.push({
                word: word,
                options: options,
                correctAnswer: word.meaning
            });
        }
        
        return {
            questions: testQuestions,
            currentQuestion: 0,
            score: 0
        };
    }

    getRandomWords(count) {
        const shuffled = [...this.words].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    }

    generateOptions(correctWord) {
        const options = [correctWord.meaning];
        
        while (options.length < 4) {
            const randomWord = this.words[Math.floor(Math.random() * this.words.length)];
            if (randomWord.meaning !== correctWord.meaning && !options.includes(randomWord.meaning)) {
                options.push(randomWord.meaning);
            }
        }
        
        return this.shuffleArray(options);
    }

    shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    showCurrentQuestion() {
        if (!this.currentTest || this.currentTest.currentQuestion >= this.currentTest.questions.length) {
            this.completeTest();
            return;
        }
        
        const question = this.currentTest.questions[this.currentTest.currentQuestion];
        
        document.getElementById('testQuestion').innerHTML = `
            <div style="text-align: center;">
                <h3>单词: ${question.word.word}</h3>
                <p>${question.word.phonetic}</p>
                <button class="btn-sound" onclick="playTestAudio('${question.word.word}')" title="播放发音">
                    🔊
                </button>
            </div>
        `;
        
        const optionsContainer = document.getElementById('testOptions');
        optionsContainer.innerHTML = '';
        
        question.options.forEach(option => {
            const optionElement = document.createElement('div');
            optionElement.className = 'test-option';
            optionElement.textContent = option;
            optionElement.addEventListener('click', () => this.selectAnswer(option));
            optionsContainer.appendChild(optionElement);
        });
    }

    selectAnswer(selectedOption) {
        const question = this.currentTest.questions[this.currentTest.currentQuestion];
        
        document.querySelectorAll('.test-option').forEach(option => {
            option.classList.remove('selected');
        });
        
        event.target.classList.add('selected');
        
        setTimeout(() => {
            if (selectedOption === question.correctAnswer) {
                this.currentTest.score++;
                this.userStats.correctAnswers++;
            }
            
            this.userStats.totalAnswers++;
            this.currentTest.currentQuestion++;
            this.showCurrentQuestion();
        }, 500);
    }

    completeTest() {
        const accuracy = Math.round((this.currentTest.score / this.currentTest.questions.length) * 100);
        alert(`测试完成！\n得分: ${this.currentTest.score}/${this.currentTest.questions.length}\n正确率: ${accuracy}%`);
        this.showPage('home');
        this.updateStats();
        this.saveUserProgress();
    }

    endTest() {
        this.currentTest = null;
        this.showPage('home');
    }

    updateProgressPage() {
        document.getElementById('streakDays').textContent = this.userStats.streakDays;
        document.getElementById('totalTime').textContent = this.userStats.totalTime + '分钟';
        
        const accuracy = this.userStats.totalAnswers > 0 ? 
            Math.round((this.userStats.correctAnswers / this.userStats.totalAnswers) * 100) : 0;
        document.getElementById('accuracy').textContent = accuracy + '%';
        
        this.drawMasteryChart();
    }

    drawMasteryChart() {
        const canvas = document.getElementById('masteryChart');
        const ctx = canvas.getContext('2d');
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        const learned = this.learnedWords.size;
        const total = this.words.length;
        const unlearned = total - learned;
        
        const data = [
            { label: '已掌握', value: learned, color: '#48bb78' },
            { label: '未掌握', value: unlearned, color: '#f56565' }
        ];
        
        let currentAngle = 0;
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const radius = 80;
        
        data.forEach(segment => {
            const sliceAngle = (segment.value / total) * 2 * Math.PI;
            
            ctx.beginPath();
            ctx.moveTo(centerX, centerY);
            ctx.arc(centerX, centerY, radius, currentAngle, currentAngle + sliceAngle);
            ctx.closePath();
            ctx.fillStyle = segment.color;
            ctx.fill();
            
            currentAngle += sliceAngle;
        });
    }

    saveUserProgress() {
        const progress = {
            learnedWords: Array.from(this.learnedWords),
            unknownWords: Array.from(this.unknownWords),
            stats: this.userStats
        };
        
        localStorage.setItem('vocabularyProgress', JSON.stringify(progress));
    }

    loadUserProgress() {
        const saved = localStorage.getItem('vocabularyProgress');
        if (saved) {
            const progress = JSON.parse(saved);
            this.learnedWords = new Set(progress.learnedWords || []);
            this.unknownWords = new Set(progress.unknownWords || []);
            this.userStats = { ...this.userStats, ...progress.stats };
            
            this.userStats.learnedWords = this.learnedWords.size;
            this.updateStats();
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    window.app = new VocabularyApp();
});

function startLearning() {
    window.app.startLearning();
}

function showMeaning() {
    window.app.showMeaning();
}

function toggleMeaning() {
    window.app.toggleMeaning();
}

function markKnown() {
    window.app.markKnown();
}

function markUnknown() {
    window.app.markUnknown();
}

function nextWord() {
    window.app.nextWord();
}

function startTest() {
    window.app.startTest();
}

function endTest() {
    window.app.endTest();
}

function playWordAudio() {
    window.app.playWordAudio();
}

function playTestAudio(word) {
    window.app.playTestAudio(word);
}