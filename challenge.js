function gradingStudents(grades) {
    const arr = [];
    grades.forEach((grade) => {
        if(((Math.ceil(grade/5) * 5) - grade < 3) && grade >= 38 ) {
            arr.push(Math.ceil(grade/5) * 5);
        } else {
            arr.push(grade);
        }
    });
    return arr;
}
