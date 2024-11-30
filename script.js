function getResult() {
    let obtainedMarks = document.querySelector("#obtainedMarks").value;
    let totalMarks = document.querySelector("#totalMarks").value;
    let percentage = obtainedMarks * 100 / totalMarks;
    document.querySelector("#percentage").innerHTML = `Percentage: ${percentage}%`
    let grade;
    switch (true) {
        case percentage >= 90:
            grade="A+"
            break;
            case percentage >= 80:
            grade="A"
            break;
        case percentage >= 70:
            grade="B+"
            break;
        case percentage >= 60:
            grade="B"
            break;
        case percentage >= 50:
            grade="C+"
            break;
            default:
            grade="F"
            break;
    }
    document.querySelector("#grade").innerHTML = `Grade: ${grade}`
}
