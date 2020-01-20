// question class
var questionClass = function(id, question, possibleAnswers, correctAnswer) {
  this.id = id;
  this.question = question;
  this.possibleAnswers = possibleAnswers;
  this.correctAnswer = correctAnswer;
};

const fetchUsers = () => {
  axios
    .get("https://uscis-exam.firebaseio.com/questions.json")
    .then(response => {
      q = response.data;
      for (let i = 0; i < q.length; i++) {
        let a = new questionClass(
          q[i].id,
          q[i].question,
          q[i].possibleAnswers,
          q[i].correctAnswer
        );
        questions.push(a);
      }
    })
    .catch(error => {
      console.error(error);
      alert("Unable to load questions from database.  Try again later.");
    });
};

let q;
// questions array
var questions = [];
fetchUsers();
