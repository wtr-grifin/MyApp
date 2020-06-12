`use strict`

{
  
  // Page init event
  document.addEventListener('init', event => {
    var page = event.target;

    if (page.matches('#home-page')) {

      page.querySelector('#level1-button').onclick = function() {
        document.querySelector('#navigator').pushPage('level1.html');
      };

      page.querySelector('#level2-button').onclick = function() {
        document.querySelector('#navigator').pushPage('level2.html');
      };

      page.querySelector('#level3-button').onclick = function() {
        document.querySelector('#navigator').pushPage('level3.html');
      };

    }else if(page.matches('#level1-page')){
      const wordsA = [
        'at',
        'an',
        'be',
        // 'do',
        // 'go',
        // 'he',
        // 'if',
        // 'is',
        // 'it',
        // 'me',
        // 'no',
        // 'of',
        // 'oh',
        // 'so',
        // 'to',
        // 'we',
        // 'add',
        // 'aim',
        // 'and',
        // 'ask',
        // 'bed',
        // 'buy',
        // 'can',
        // 'cry',
        // 'did',
        // 'dog',
        // 'eat',
        // 'ear',
        // 'egg',
        // 'fly',
        // 'few',
        // 'fun',
        // 'gym',
        // 'has',
        // 'how',
        // 'kid',
        // 'ink',
        // 'not',
        // 'off',
        // 'put',
        // 'see',
        // 'six',
        // 'sky',
        // 'tab',
        // 'tag',
        // 'the',
        // 'web',
        // 'who',
        // 'why',
        // 'win',
        // 'yes',
        // 'yet',
        // 'you',
        // 'zoo',
      ];
      let word = wordsA[Math.floor(Math.random() * wordsA.length)];
      let loc =0;
      let score =0;
      let miss =0;
      const timeLimit = 10 * 1000;
      let startTime;
      let isPlaying = false;
      // let readytime = 3;
    
      const target = document.getElementById('target');
      const scoreLabel = document.getElementById('score');
      const missLabel = document.getElementById('miss');
      const timerLabel = document.getElementById('timer');
    
      function updateTarget() {
        let placeholder = '';
        for(let i = 0; i < loc; i++) {
          placeholder += '_';
        }
        target.textContent = placeholder + word.substring(loc);
      }
    
      function updateTimer() {
        const timeLeft = startTime + timeLimit - Date.now();
        timerLabel.textContent = (timeLeft / 1000).toFixed(2);
    
        const timeoutId = setTimeout(() => {
          updateTimer();
        }, 10);
    
        if(timeLeft < 0) {
          isPlaying = false;
          clearTimeout(timeoutId);
          timerLabel.textContent = 0.00;
          setTimeout(() =>{
            showResult();
            miss = 0;
          }, 100);
          target.textContent = 'もう一回だけやってみよう！';
        }
      }

      
    
      function showResult() {
        const taipo = document.getElementById('taipo');
        taipo.textContent = `${score} letters, ${miss} 回`;
        // console.log(taipo);
        document.getElementById('modal').classList.remove('hidden');
        document.getElementById('mask').classList.remove('hidden');
        
        page.querySelector('#home-button').onclick = function() {
          document.querySelector('#navigator').resetToPage('home.html');
          score = 0;
          miss = 0;
        };
        page.querySelector('#restart-button').onclick = function() {
          document.querySelector('#navigator').resetToPage('level1.html');
          score = 0;
          miss = 0;
        };
        if(isPlaying !== true){
          return ;
        }
      }
      
      window.addEventListener('keydown', e =>{
        if(e.keyCode === 13){
          return isPlaying;
        }
      });
      
      //ゲーム中の正誤判定
      window.addEventListener('keydown', e =>{
        if(e.keyCode === 13){
          loc = 0;
          score = 0;
          miss = 0;
          return isPlaying;
        }
        if(isPlaying === true){
          return;
        }
        isPlaying = true;
    
        scoreLabel.textContent = score;
        missLabel.textContent = miss;
        word =wordsA[Math.floor(Math.random() * wordsA.length)];
    
        target.textContent = word;
        startTime = Date.now();
        updateTimer();
      });
    
      // ゲーム開始
      window.addEventListener('keydown', e => {
        if (isPlaying !== true) {
          return;
        }
        if (e.key === word[loc]) {
          loc++;
          if(loc === word.length){
           word = wordsA[Math.floor(Math.random() * wordsA.length)];
           loc = 0;
          }
          updateTarget();
          score++;
          scoreLabel.textContent = score;
        } else {
          miss++;
          missLabel.textContent = miss;
        }
      });
    } else if (page.matches("#level2-page")){
      const wordsB = [
        'amen',
        'anti',
        'atom',
        'boss',
        'dark',
        'edge',
        'hero',
        'navy',
        'zero',
        'agent',
        'brave',
        'caste',
        'crazy',
        'devil',
        'force',
        'knife',
        'ultra',
        'clever',
        'energy',
        'escape',
        'genius',
        'hunter',
        'invoke',
        'knight',
        'legend',
        'scream',
        'terror',
        'wizard',
        'outlaw',
      ];
      let word = wordsB[Math.floor(Math.random() * wordsB.length)];
      let loc;
      let score;
      let miss;
      const timeLimit = 2 * 1000;
      let startTime;
      let isPlaying = false;
    
      const target = document.getElementById('target');
      const scoreLabel = document.getElementById('score');
      const missLabel = document.getElementById('miss');
      const timerLabel = document.getElementById('timer');
      
    
      function updateTarget() {
        let placeholder = '';
        for(let i = 0; i < loc; i++) {
          placeholder += '_';
        }
        target.textContent = placeholder + word.substring(loc);
      }
    
      function updateTimer() {
        const timeLeft = startTime + timeLimit - Date.now();
        timerLabel.textContent = (timeLeft / 1000).toFixed(2);
    
        const timeoutId = setTimeout(() => {
          updateTimer();
        }, 10);
    
        if(timeLeft < 0) {
          isPlaying = false;
          clearTimeout(timeoutId);
          timerLabel.textContent = 0.00;
          setTimeout(() =>{
            showResult();
          }, 100);
          target.textContent = 'もう一回だけやってみよう！';
        }
      }

      
    
      function showResult() {
        const taipo = document.getElementById('taipo');
        const accuracy = score + miss === 0 ? 0 : score / (score + miss) * 100;
        taipo.textContent =  `${miss} 回`;
        document.getElementById('modal').classList.remove('hidden');
        document.getElementById('mask').classList.remove('hidden');
        
          // ${score} letters, , ${accuracy.toFixed(2)}% accuracy!
            page.querySelector('#home-button').onclick = function() {
              document.querySelector('#navigator').resetToPage('home.html');
            };
            page.querySelector('#restart-button').onclick = function() {
              document.querySelector('#navigator').resetToPage('level2.html');
            };
        }
      window.addEventListener('keyup', e =>{
        if(e.keyCode === 13 ){
          return isPlaying;
        }
        if(isPlaying === true){
          return;
        }
        isPlaying = true;
    
        loc = 0;
        score = 0;
        miss = 0;
        scoreLabel.textContent = score;
        missLabel.textContent = miss;
        word =wordsB[Math.floor(Math.random() * wordsB.length)];
    
        target.textContent = word;
        startTime = Date.now();
        updateTimer();
      });

      window.addEventListener('keydown', e =>{
        if(e.keyCode === 13){
          return isPlaying;
        }
      });
        
    
      window.addEventListener('keydown', e => {
        if (isPlaying !== true) {
          return;
        }
        if (e.key === word[loc]) {
          loc++;
          if(loc === word.length){
           word = wordsB[Math.floor(Math.random() * wordsB.length)];
            loc = 0;
          }
          updateTarget();
          score++;
          scoreLabel.textContent = score;
        } else {
          miss++;
          missLabel.textContent = miss;
        }
      });
    }  else if (page.matches('#level3-page')){
      const wordsC = [
        'caravan',
        'cynical',
        'destiny',
        'desroy',
        'freedom',
        'justice',
        'placebo',
        'revenge',
        'stealth',
        'thunder',
        'vintage',
        'warship',
        'ambition',
        'autobahn',
        'ceossbow',
        'daybreak',
        'flagship',
        'glorious',
        'illusion',
        'lamdmark',
        'parallel',
        'scramble',
        'treasure',
        'adventure',
        'astronaut',
        'brilliant',
        'confident',
        'discovery',
        'fantastic',
        'humongous',
        'immutable',
        'knowledge',
        'soliloquy',
        'supremacy',
        'adjustment',
        'commercial',
        'consistent',
      ];
      let word = wordsC[Math.floor(Math.random() * wordsC.length)];
      let loc;
      let score;
      let miss;
      const timeLimit = 30 * 1000;
      let startTime;
      let isPlaying = false;
    
      const target = document.getElementById('target');
      const scoreLabel = document.getElementById('score');
      const missLabel = document.getElementById('miss');
      const timerLabel = document.getElementById('timer');
      
    
      function updateTarget() {
        let placeholder = '';
        for(let i = 0; i < loc; i++) {
          placeholder += '_';
        }
        target.textContent = placeholder + word.substring(loc);
      }
    
      function updateTimer() {
        const timeLeft = startTime + timeLimit - Date.now();
        timerLabel.textContent = (timeLeft / 1000).toFixed(2);
    
        const timeoutId = setTimeout(() => {
          updateTimer();
        }, 10);
    
        if(timeLeft < 0) {
          isPlaying = false;
          clearTimeout(timeoutId);
          timerLabel.textContent = 0.00;
          setTimeout(() =>{
            showResult();
          }, 100);
          target.textContent = 'もう一回だけやってみよう！';
        }
      }

      
    
      function showResult() {
        const taipo = document.getElementById('taipo');
        const accuracy = score + miss === 0 ? 0 : score / (score + miss) * 100;
        taipo.textContent =  `${miss} 回`;
        document.getElementById('modal').classList.remove('hidden');
        document.getElementById('mask').classList.remove('hidden');
        
          // ${score} letters, , ${accuracy.toFixed(2)}% accuracy!
            page.querySelector('#home-button').onclick = function() {
              document.querySelector('#navigator').resetToPage('home.html');
            };
            page.querySelector('#restart-button').onclick = function() {
              document.querySelector('#navigator').resetToPage('level3.html');
            };
        }
      window.addEventListener('keyup', e =>{
        if(e.keyCode === 13 ){
          return isPlaying;
        }
        if(isPlaying === true){
          return;
        }
        isPlaying = true;
    
        loc = 0;
        score = 0;
        miss = 0;
        scoreLabel.textContent = score;
        missLabel.textContent = miss;
        word =wordsC[Math.floor(Math.random() * wordsC.length)];
    
        target.textContent = word;
        startTime = Date.now();
        updateTimer();
      });

      window.addEventListener('keydown', e =>{
        if(e.keyCode === 13){
          return isPlaying;
        }
      });
        
    
      window.addEventListener('keydown', e => {
        if (isPlaying !== true) {
          return;
        }
        if (e.key === word[loc]) {
          loc++;
          if(loc === word.length){
           word = wordsC[Math.floor(Math.random() * wordsC.length)];
            loc = 0;
          }
          updateTarget();
          score++;
          scoreLabel.textContent = score;
        } else {
          miss++;
          missLabel.textContent = miss;
        }
      });

      if (ons.platform.isIPhoneX()) {
        document.documentElement.setAttribute('onsflag-iphonex-portrait', '');
        document.documentElement.setAttribute('onsflag-iphonex-landscape', '');
      }
    }
  });
}


