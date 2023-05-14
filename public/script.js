

const API_KEY = "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";
const subbutton = document.querySelector("#submit");
const result = document.querySelector("#result");
const question = document.getElementById("question");
const form = document.querySelector('form')

function sendPostRequest(e) {
  e.preventDefault()
  const myQuestionDiv = document.createElement('div')
  const myQuestion = document.createElement('p')
  myQuestionDiv.setAttribute('class', 'my_question')
  result.appendChild(myQuestionDiv)
  myQuestionDiv.appendChild(myQuestion)
  myQuestion.innerHTML = question.value
  axios.post('/variable', { variable: question.value })
    .then(response => {
      console.log(response.data);
      axios.get('/variable').then(res => {
        let tmp = res.data
        let data = tmp[tmp.length - 1].variable
        const resultEl = document.createElement('div')
        const resultElInner = document.createElement('p')
        resultEl.setAttribute('class', 'result_bot')

        result.appendChild(resultEl)
        resultEl.appendChild(resultElInner)
        resultElInner.innerHTML = data
        question.value = ''

      })
    })
    .catch(error => {
      console.error(error);
    });
}


form.addEventListener('submit',sendPostRequest)