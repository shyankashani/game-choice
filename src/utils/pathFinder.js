const pathFinder = {
  prevPath: (questionId, questions) => {
    let prevQues = questions[questionId - 1];
    if (prevQues) {
      return `/${prevQues.criterion}`;
    } else {
      return '/';
    }
  },
  nextPath: (questionId, questions) => {
    let nextQues = questions[questionId + 1];
    if (nextQues) {
      return `/${nextQues.criterion}`;
    } else {
      return '/result';
    }
  }
}

export default pathFinder;
