var timeTable = [['Basic Of Mechanical Engineering', 'Engineering Mechanics', 'Lab CE/ME/CY', 'Lab CE/ME/CY', 'Life Skills Lab', 'Life Skills Lab'], ['Engineering Mechanics', 'Engineering Chemistry', 'Basic Of Mechanical Engineering', 'Mathematics', 'FREE!', 'FREE!'], ['Life Skills', 'Mathematics', 'Lab CE/ME/CY', 'Lab CE/ME/CY', 'Engineering Chemistry', 'Physical Education'], ['Engineering Chemistry', 'Mathematics', 'FREE!', 'Basic Of Civil Engineering', 'Engineering Mechanics', 'FREE!'], ['Engineering Chemistry', 'Life Skills', 'Mathematics', 'Engineering Mechanics', 'Basic Of Civil Engineering', 'Mathematics']];
var nextClass = ['error', 'error', 'error', 'error', 'error', 'error', ' '];
var currentHour, currentDay, currentMonth, currentDate, currentMinute, currentMonthText, currentDayText, currentMinuteAlt, currentHourAlt, totalMinutes = 400;
var currentTD = new Date();
var timeTableGenerated = false, i, j, stopExecution = true, ivalue, jvalue, exitedFromwhileLoop = true;
var upcomingClassOne = document.getElementById('upclass1'), upcomingClassTwo = document.getElementById('upclass2'), upcomingClassThree = document.getElementById('upclass3'), upcomingClassFour = document.getElementById('upclass4'), upcomingClassFive = document.getElementById('upclass5'), upcomingClassSix = document.getElementById('upclass6');
var previousClassOne = document.getElementById('prclass1'), previousClassTwo = document.getElementById('prclass2'), previousClassThree = document.getElementById('prclass3'), previousClassFour = document.getElementById('prclass4'), previousClassFive = document.getElementById('prclass5'), previousClassSix = document.getElementById('prclass6');
var upcomingClassOneTitle = document.getElementById('upct1'), upcomingClassTwoTitle = document.getElementById('upct2'), upcomingClassThreeTitle = document.getElementById('upct3'), upcomingClassFourTitle = document.getElementById('upct4'), upcomingClassFiveTitle = document.getElementById('upct5'), upcomingClassSixTitle = document.getElementById('upct6');
var previousClassOneTitle = document.getElementById('prct1'), previousClassTwoTitle = document.getElementById('prct2'), previousClassThreeTitle = document.getElementById('prct3'), previousClassFourTitle = document.getElementById('prct4'), previousClassFiveTitle = document.getElementById('prct5'), previousClassSixTitle = document.getElementById('prct6');
var currentClassTitle = document.getElementById('cct');
var currentPrdTitle = document.getElementById('prdTxt');
var nextClassOn = document.getElementById('nxtclasson');
var joinClassButton = document.getElementById('joinclass');
var upcomingClassNextOne = document.getElementById('nxtup1'), upcomingClassNextTwo = document.getElementById('nxtup2'), upcomingClassNextThree = document.getElementById('nxtup3'), upcomingClassNextFour = document.getElementById('nxtup4'), upcomingClassNextFive = document.getElementById('nxtup5'), upcomingClassNextSix = document.getElementById('nxtup6');
var previousClassNextOne = document.getElementById('nxtpr1'), previousClassNextTwo = document.getElementById('nxtpr2'), previousClassNextThree = document.getElementById('nxtpr3'), previousClassNextFour = document.getElementById('nxtpr4'), previousClassNextFive = document.getElementById('nxtpr5'), previousClassNextSix = document.getElementById('nxtpr6');

updateTimeAndDate();
setInterval(updateTimeAndDate, 1000);

function updateTimeAndDate() {
    currentTD = new Date();
    currentHour = currentTD.getHours();
    currentDay = currentTD.getDay() + 1;
    currentMonth = currentTD.getMonth() + 1;
    currentDate = currentTD.getDate();
    currentMinute = currentTD.getMinutes();

    //currentHourAlt = alterTimeValue(currentHour);
    //currentMinuteAlt = alterTimeValue(currentMinute);

    totalMinutes = currentHour * 60 + currentMinute;
    //alert(totalMinutes);
    //totalMinutes = totalMinutes + 10;

    currentMonthToText();
    currentDayToText();

    //alert(currentDay);
    //currentDay = 2; //tue

    if (currentDay != 1 && currentDay != 7 && !timeTableGenerated) {
        upcomingClassOneTitle.innerHTML = timeTable[currentDay - 2][0];
        getNextClass(1);
        upcomingClassNextOne.innerHTML = 'Next class on ' + getNxtDay(ivalue) + ', ' + getNxtprd(jvalue) + ' period';
        previousClassNextOne.innerHTML = upcomingClassNextOne.innerHTML;
        nextClass[0] = previousClassNextOne.innerHTML;
        resetVariables();

        upcomingClassTwoTitle.innerHTML = timeTable[currentDay - 2][1];
        getNextClass(2);
        upcomingClassNextTwo.innerHTML = 'Next class on ' + getNxtDay(ivalue) + ', ' + getNxtprd(jvalue) + ' period';
        previousClassNextTwo.innerHTML = upcomingClassNextTwo.innerHTML;
        nextClass[1] = previousClassNextTwo.innerHTML;
        resetVariables();

        upcomingClassThreeTitle.innerHTML = timeTable[currentDay - 2][2];
        getNextClass(3);
        upcomingClassNextThree.innerHTML = 'Next class on ' + getNxtDay(ivalue) + ', ' + getNxtprd(jvalue) + ' period';
        previousClassNextThree.innerHTML = upcomingClassNextThree.innerHTML;
        nextClass[2] = previousClassNextThree.innerHTML;
        resetVariables();

        upcomingClassFourTitle.innerHTML = timeTable[currentDay - 2][3];
        getNextClass(4);
        upcomingClassNextFour.innerHTML = 'Next class on ' + getNxtDay(ivalue) + ', ' + getNxtprd(jvalue) + ' period';
        previousClassNextFour.innerHTML = upcomingClassNextFour.innerHTML;
        nextClass[3] = previousClassNextFour.innerHTML;
        resetVariables();

        upcomingClassFiveTitle.innerHTML = timeTable[currentDay - 2][4];
        getNextClass(5);
        upcomingClassNextFive.innerHTML = 'Next class on ' + getNxtDay(ivalue) + ', ' + getNxtprd(jvalue) + ' period';
        previousClassNextFive.innerHTML = upcomingClassNextFive.innerHTML;
        nextClass[4] = previousClassNextFive.innerHTML;
        resetVariables();

        upcomingClassSixTitle.innerHTML = timeTable[currentDay - 2][5];
        getNextClass(6);
        upcomingClassNextSix.innerHTML = 'Next class on ' + getNxtDay(ivalue) + ', ' + getNxtprd(jvalue) + ' period';
        previousClassNextSix.innerHTML = upcomingClassNextSix.innerHTML;
        nextClass[5] = previousClassNextSix.innerHTML;
        resetVariables();

        previousClassOneTitle.innerHTML = timeTable[currentDay - 2][0];
        previousClassTwoTitle.innerHTML = timeTable[currentDay - 2][1];
        previousClassThreeTitle.innerHTML = timeTable[currentDay - 2][2];
        previousClassFourTitle.innerHTML = timeTable[currentDay - 2][3];
        previousClassFiveTitle.innerHTML = timeTable[currentDay - 2][4];
        previousClassSixTitle.innerHTML = timeTable[currentDay - 2][5];
    }

    if (currentDay != 1 && currentDay != 7) {
        if (totalMinutes >= 0 && totalMinutes < 525) {
            updateTimeTableUi('No Classes', '', 'block', 'block', 'block', 'block', 'block', 'block', 'none', 'none', 'none', 'none', 'none', 'none', 7, 'none');
        }
        else if (totalMinutes >= 525 && totalMinutes < 585) {
            updateTimeTableUi(timeTable[currentDay - 2][0], '1st period', 'none', 'block', 'block', 'block', 'block', 'block', 'none', 'none', 'none', 'none', 'none', 'none', 1, 'block');
        }
        else if (totalMinutes >= 585 && totalMinutes < 645) {
            updateTimeTableUi(timeTable[currentDay - 2][1], '2nd period', 'none', 'none', 'block', 'block', 'block', 'block', 'block', 'none', 'none', 'none', 'none', 'none', 2, 'block');
        }
        else if (totalMinutes >= 645 && totalMinutes < 660) {
            updateTimeTableUi('Interval', '', 'none', 'none', 'block', 'block', 'block', 'block', 'block', 'block', 'none', 'none', 'none', 'none', 7, 'none');
        }
        else if (totalMinutes >= 660 && totalMinutes < 720) {
            updateTimeTableUi(timeTable[currentDay - 2][2], '3rd period', 'none', 'none', 'none', 'block', 'block', 'block', 'block', 'block', 'none', 'none', 'none', 'none', 3, 'block');
        }
        else if (totalMinutes >= 720 && totalMinutes < 780) {
            updateTimeTableUi(timeTable[currentDay - 2][3], '4th period', 'none', 'none', 'none', 'none', 'block', 'block', 'block', 'block', 'block', 'none', 'none', 'none', 4, 'block');
        }
        else if (totalMinutes >= 780 && totalMinutes < 840) {
            updateTimeTableUi('Lunch Break', '', 'none', 'none', 'none', 'none', 'block', 'block', 'block', 'block', 'block', 'block', 'none', 'none', 7, 'none');
        }
        else if (totalMinutes >= 840 && totalMinutes < 900) {
            updateTimeTableUi(timeTable[currentDay - 2][4], '5th period', 'none', 'none', 'none', 'none', 'none', 'block', 'block', 'block', 'block', 'block', 'none', 'none', 5, 'block');
        }
        else if (totalMinutes >= 900 && totalMinutes < 960) {
            updateTimeTableUi(timeTable[currentDay - 2][5], '6th period', 'none', 'none', 'none', 'none', 'none', 'none', 'block', 'block', 'block', 'block', 'block', 'none', 6, 'block');
        }
        else if (totalMinutes >= 960) {
            updateTimeTableUi('No Classes', '', 'none', 'none', 'none', 'none', 'none', 'none', 'block', 'block', 'block', 'block', 'block', 'block', 7, 'none');
        }
    }
    else if (!timeTableGenerated) {
        updateTimeTableUi('No Classes', '', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 7, 'none');
    }

    if (!timeTableGenerated) {
        timeTableGenerated = true;
    }
}

// functions //

//converts month number to text, 1 is considered as the first month
function currentMonthToText() {
    switch (currentMonth) {
        case 1:
            currentMonthText = "January";
            break;
        case 2:
            currentMonthText = "February";
            break;
        case 3:
            currentMonthText = "March";
            break;
        case 4:
            currentMonthText = "April";
            break;
        case 5:
            currentMonthText = "May";
            break;
        case 6:
            currentMonthText = "June";
            break;
        case 7:
            currentMonthText = "July";
            break;
        case 8:
            currentMonthText = "August";
            break;
        case 9:
            currentMonthText = "September";
            break;
        case 10:
            currentMonthText = "October";
            break;
        case 11:
            currentMonthText = "November";
            break;
        case 12:
            currentMonthText = "December";
            break;
    }
}

//coverts day number to text, 1 is considered as (first day) sunday
function currentDayToText() {
    switch (currentDay) {
        case 1:
            currentDayText = "Sunday";
            break;
        case 2:
            currentDayText = "Monday";
            break;
        case 3:
            currentDayText = "Tuesday";
            break;
        case 4:
            currentDayText = "Wednesday";
            break;
        case 5:
            currentDayText = "Thursday";
            break;
        case 6:
            currentDayText = "Friday";
            break;
        case 7:
            currentDayText = "Saturday";
            break;
    }
}

//update current, upcoming, previous classes
function updateTimeTableUi(classtitle, periodtitle, upclass1, upclass2, upclass3, upclass4, upclass5, upclass6, prclass1, prclass2, prclass3, prclass4, prclass5, prclass6, nxtclass, btnvisible) {
    currentClassTitle.innerHTML = classtitle;
    currentPrdTitle.innerHTML = periodtitle;
    nextClassOn.innerHTML = nextClass[nxtclass - 1];
    joinClassButton.style.display = btnvisible;

    upcomingClassOne.style.display = upclass1;
    upcomingClassTwo.style.display = upclass2;
    upcomingClassThree.style.display = upclass3;
    upcomingClassFour.style.display = upclass4;
    upcomingClassFive.style.display = upclass5;
    upcomingClassSix.style.display = upclass6;

    previousClassOne.style.display = prclass1;
    previousClassTwo.style.display = prclass2;
    previousClassThree.style.display = prclass3;
    previousClassFour.style.display = prclass4;
    previousClassFive.style.display = prclass5;
    previousClassSix.style.display = prclass6;

}

function resetVariables() {
    stopExecution = true;
    exitedFromwhileLoop = true;
}
// return functions //

//returns hour and minute in 2 digits by adding 0 as a prefix
function alterTimeValue(i) {
    if (i < 10) { i = "0" + i };
    return i;
}

//returns day for next class
function getNxtDay(day) {
    if (currentDay - 2 == day) {
        day = 'Today';
    }
    else {
        switch (day) {
            case 0:
                day = 'Monday';
                break;
            case 1:
                day = 'Tuesday';
                break;
            case 2:
                day = 'Wednesday';
                break;
            case 3:
                day = 'Thursday';
                break;
            case 4:
                day = 'Friday';
                break;
        }
    }
    return day;
}

//returns period for next class
function getNxtprd(prd) {
    switch (prd) {
        case 0:
            prd = '1st';
            break;
        case 1:
            prd = '2nd';
            break;
        case 2:
            prd = '3rd';
            break;
        case 3:
            prd = '4th';
            break;
        case 4:
            prd = '5th';
            break;
        case 5:
            prd = '6th';
            break;
    }
    return prd;
}

function getNextClass(hournumber) {
    i = (currentDay - 2);
    j = hournumber;
    while (timeTable[currentDay - 2][hournumber - 1] != timeTable[i][j] && stopExecution) {
        for (1 == 1; timeTable[currentDay - 2][hournumber - 1] != timeTable[i][j] && j <= 5; j++) {
            //alert(timeTable[currentDay - 2][0] + '\n' + timeTable[i][j]);
        }
        if (timeTable[currentDay - 2][hournumber - 1] == timeTable[i][j]) {
            stopExecution = false;
            ivalue = i, jvalue = j, exitedFromwhileLoop = false;
        }
        j = 0;
        if (i >= 4) {
            i = -1; //-1 cuz incrementing
        }
        i++
    }
    if (exitedFromwhileLoop) {
        ivalue = i, jvalue = j;
    }
}