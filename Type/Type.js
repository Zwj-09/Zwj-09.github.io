window.addEventListener('load', init);

let time = 5;
let score = 0;
let isPlaying;

// DOM 对象
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

// http://api.tianapi.com/txapi/enwords/index?key=68eb67d9ed052c329c13615336ce9fc9
axios.get("http://api.tianapi.com/txapi/enwords/index?key=68eb67d9ed052c329c13615336ce9fc9&word=lexicon")
	.then((req)=>{
		console.log(req);
	})
   .catch(err => console.log(err))

const words = [
  'hat',
  'river',
  'lucky',
  'statue',
  'generate',
  'stubborn',
  'cocktail',
  'runaway',
  'joke',
  'developer',
  'establishment',
  'hero',
  'javascript',
  'nutrition',
  'revolver',
  'echo',
  'siblings',
  'investigate',
  'horrendous',
  'symptom',
  'laughter',
  'magic',
  'master',
  'space',
  'definition'
];

function init() {
  // 随机展示数组数据
  showWord(words);
  // 倒计时
  setInterval(countDown, 1000);
  // 判断游戏状态
  setInterval(checkStatus, 50);
  // 输入事件
  wordInput.addEventListener('input', startMatch);
}

function startMatch() {
  // 输入的内容 和 提示的内容 是否一致
  if (matchWords()) {
    isPlaying = true;
    time = 5;
    showWord(words);
    wordInput.value = '';
    score++;
  }

  // 分数
  if (score === -1) {
    scoreDisplay.innerHTML = 0;
  } else {
    scoreDisplay.innerHTML = score;
  }
}

// 匹配单词
function matchWords() {
  if (wordInput.value === currentWord.innerHTML) {
    message.innerHTML = 'Correct!!!';
    return true;
  } else {
    message.innerHTML = '';
    return false;
  }
}

// 失败了 分数减1
function checkStatus() {
  if (!isPlaying && time === 0) {
    message.innerHTML = 'Game over';
    score = -1;
  }
}

// 记时结束
function countDown() {
  if (time > 0) {
    time--;
  } else if (time == 0) {
    isPlaying = false;
  }
  timeDisplay.innerHTML = time;
}
// 随机展示单词
function showWord(words) {
  const randIndex = Math.floor(Math.random() * words.length);
  currentWord.innerHTML = words[randIndex];
}
