var questions = [
    '(单选)问题1:您对vivo手机的整体性能满意程度如何?',
    '(单选)问题2:您最喜欢vivo哪个系列的手机?',
    '(单选)问题3:您觉得vivo OriginOS系统如何?',
    '(多选)问题4:您对vivo手机的需求主要是?',
    '(非必填)问题5:您对vivo手机有什么建议?'
];//问题列表
var currentQuestionIndex = 0;
var progressBarWidth = 0;

function nextQuestion(currentQuestionIndex) {
    if (currentQuestionIndex < questions.length) {
        let questionOptions = [
            ['非常满意', '比较满意', '一般', '不满意'],
            ['X系列', 'Y系列', 'S系列', 'IQOO'],
            ['十分流畅好用', '一般般,和别的系统没区别', '系统操作不便,不好用', '系统卡顿,希望优化'],
            ['游戏', '摄影', '追剧', '续航'],
            []
        ];//选项列表

        let questionType = currentQuestionIndex === 3 ? 'checkbox' : 'radio';//多选题选项为复选框

        document.getElementById('form').innerHTML = `
      <div class="question">
        <p>${questions[currentQuestionIndex]}</p>
        ${currentQuestionIndex !== 4//更新下一个题目的索引
            ? questionOptions[currentQuestionIndex].map((option, index) => `
              <input type="${questionType}" name="q${currentQuestionIndex+1}" value="${String.fromCharCode(65 + index)}" required>${option}<br>
            `).join('')//切换问题
            : questionOptions[currentQuestionIndex].map((option, index) => `
              <input type="${questionType}" name="q4" value="${String.fromCharCode(65 + index)}"> ${option}<br>
            `).join('')
        }
        ${currentQuestionIndex === 4
            ? `<textarea name="q5" rows="4" cols="119"></textarea>`
            : ''//生成建议输入框
        }
      </div>
      <button type="button" class="btn" onclick="nextQuestion(${currentQuestionIndex+1})">下一题</button>
    `;

        progressBarWidth = ((currentQuestionIndex + 1) / questions.length) * 100;
        document.getElementById('progress').style.width = `${progressBarWidth}%`;//更新进度条
    } else {
        alert('感谢您的配合!');
        location.href="index.html";
    }
}
window.onload = function() {
    nextQuestion(currentQuestionIndex);
};
