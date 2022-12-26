var timeTable = [['Sustainable Engineering', 'Object Oriented Programming', 'Discrete Mathematics', 'Minor', 'Logic System Design', 'CT'], ['Discrete Mathematics', 'Design and Engineering', 'Logic System Design', 'Minor', 'Object Oriented Programming', 'Data Structures'], ['Object Oriented Programming', 'DS/OOP LAB', 'DS/OOP LAB', 'DS/OOP LAB', 'Discrete Mathematics', 'Data Structures'], ['Minor', 'Design and Engineering', 'Sustainable Engineering', 'Data Structures', 'DS/OOP LAB', 'DS/OOP LAB'], ['Minor', 'Discrete Mathematics', 'Logic System Design', 'Data Structures', 'Logic System Design', 'Object Oriented Programming']];
var classUrl = [`https://teams.microsoft.com/l/channel/19%3a86bf4ad86ce7467881eab766ede5bb72%40thread.tacv2/BASIC%2520MECHANICAL%2520ENGINEERING%2520(BME)%2520ME100?groupId=77d85fff-0f6a-48ee-85dd-da3217b66c76&tenantId=141508cb-e52f-4afd-89f8-a55aedc339bb`, `https://teams.microsoft.com/l/channel/19%3a6aad690e371746a6abd279f20e08b88b%40thread.tacv2/BASIC%2520OF%2520CIVIL%2520ENGINEERING?groupId=77d85fff-0f6a-48ee-85dd-da3217b66c76&tenantId=141508cb-e52f-4afd-89f8-a55aedc339bb`, `https://teams.microsoft.com/l/channel/19%3afc6f8056e739430582e8df3bb1291934%40thread.tacv2/CALCULUS%2520(MA)%2520MAT101?groupId=77d85fff-0f6a-48ee-85dd-da3217b66c76&tenantId=141508cb-e52f-4afd-89f8-a55aedc339bb`, `https://teams.microsoft.com/l/channel/19%3adcee7b9f272a49008b07b4ada8958ea8%40thread.tacv2/ENGINEERING%2520CHEMISTRY%2520(CYT100)?groupId=77d85fff-0f6a-48ee-85dd-da3217b66c76&tenantId=141508cb-e52f-4afd-89f8-a55aedc339bb`, `https://teams.microsoft.com/l/channel/19%3a7979ab98941a4424a4eea464b0b6477b%40thread.tacv2/ENGINEERING%2520MECHANICS%2520(EST100)?groupId=77d85fff-0f6a-48ee-85dd-da3217b66c76&tenantId=141508cb-e52f-4afd-89f8-a55aedc339bb`, `https://teams.microsoft.com/l/channel/19%3ac31fc78a96da4edb945668cb0418fa2c%40thread.tacv2/LIFE%2520SKILLS(HUT101)?groupId=77d85fff-0f6a-48ee-85dd-da3217b66c76&tenantId=141508cb-e52f-4afd-89f8-a55aedc339bb`, `https://teams.microsoft.com/l/channel/19%3a29107933a5b548669a22026029c058e4%40thread.tacv2/CHEMISTRY%2520LAB(CYL120)?groupId=77d85fff-0f6a-48ee-85dd-da3217b66c76&tenantId=141508cb-e52f-4afd-89f8-a55aedc339bb`, `https://teams.microsoft.com/l/channel/19%3a12397eef13c04621a7ac4a7a48438cf8%40thread.tacv2/CIVIL%2520WORKSHOP(ESL120)?groupId=77d85fff-0f6a-48ee-85dd-da3217b66c76&tenantId=141508cb-e52f-4afd-89f8-a55aedc339bb`, `https://teams.microsoft.com/l/channel/19%3ac6f0b07875c04715b8f5b1852fe9d209%40thread.tacv2/MECHANICAL%2520WORKSHOP%2520(ESL120)?groupId=77d85fff-0f6a-48ee-85dd-da3217b66c76&tenantId=141508cb-e52f-4afd-89f8-a55aedc339bb`];
var nextClass = ['error', 'error', 'error', 'error', 'error', 'error', ' '];
var LoraSays = [`Want to join an upcoming class? No worries! Just click on it ;)`, `Forget your timetable, remember your lessons :)`, `Have you ever tried to join the class through this site? well uhm...give a try.`, `Free hours are not always free....`, `Oh you have too many free hours in a week :(`, `Good luck, Teacher will ask you some questions today!`, `I don't have a name, what would u like to call me?`, `Where is your notebook?`, `Do complete your notes today.`, `How is the new colour theme, Let's know.`, `Thank you, we love to see you here.`, `it's okay to forget your timetable, that's why i'm here.`, `Hey you can add this site to your home screen/Desktop.`, `who cares about timetable nowadays? But I do.`, `Who else wishes u Good morning, Good afternoon, Good evening :)`, `How are you?`, `Hope you are doing good.`, `Have a nice day !`, `Hope you are safe :)`, `You are great !`];
var currentHour, currentDay, currentMonth, currentDate, currentMinute, currentMonthText, currentDayText, currentMinuteAlt, currentHourAlt, totalMinutes = 400;
var currentTD = new Date();
var timeTableGenerated = false, i, j, stopExecution = true, ivalue, jvalue, exitedFromwhileLoop = true, h1, h2, h3, h4, h5, y1, wishLoadCount = 1, dbconnectionInterval;
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
var noClassTextOne = document.getElementById('noClassTextOne'), noClassTextTwo = document.getElementById('noClassTextTwo');
var ShadowLayer = document.getElementById('DlgBoxShadow');
var selectLabClass = document.getElementById('msgbox1');
var optionChemistryLab = document.getElementById('rvchem'), optionCivilLab = document.getElementById('rvcivil'), optionMechanicalWorkshop = document.getElementById('rvmech');
var wishContent = document.getElementById('wishcontent');
var mondayTimetable = document.getElementById('ttmonday').children, tuesdayTimetable = document.getElementById('tttuesday').children, wednesdayTimetable = document.getElementById('ttwednesday').children, thursdayTimetable = document.getElementById('ttthursday').children, fridayTimetable = document.getElementById('ttfriday').children;
var sideBarMenu = document.getElementById('sidebar');
var databaseMessageContainer = document.getElementById('databaseStatusContainer');
var databaseMessage = document.getElementById('dbmsg');
var sideBarMenuItems = document.getElementById('sidebase-menulist').children;
var allTimetableSection = document.getElementById('allTimeTable');
var currentTimetableSection = document.getElementById('currentTimetable');
var LoraWords = document.getElementById('lorawords');
var wishContentTitle = document.getElementById('wishcontentTitle');

//--+--+--+--+--+--+--+--+--+--+-- FUNCTION CALL --+--+--+--+--+--+--+--+--+--+--//
checkDbConnection();
dbconnectionInterval = setInterval(checkDbConnection, 1000);
updateTimeAndDate();
setInterval(updateTimeAndDate, 1000);
setInterval(setWish, 6000);
setWishTitle();
setWish();
updateTimetable();
//getRandomText();
preventNotification();
//showModelPopup();


//check notification permission
if (Notification.permission !== 'denied') {
    Notification.requestPermission();
}

//device mode
if (!(getDeviceMode() != 'mobile' && getDeviceMode() != 'Low-Tab' && getDeviceMode() != 'Tab')) {
    allTimetableSection.style.display = 'none';
}

//--+--+--+--+--+--+--+--+--+--+-- FUNCTIONS --+--+--+--+--+--+--+--+--+--+--//
//show model popup
function showModelPopup() {
    if (localStorage.getItem('userFirstName') == null) {
        $('#dcModal1').modal('show');
    }
}

//hides the model
function hideModal() {
    console.log('mm');
    $('.modal.in').modal('hide')
}
//Collects data and manages it
function submitData(dataNumber) {
    switch (dataNumber) {
        case 1:
            let dc1f1 = document.getElementById('dataCollectionForm1f1').value;
            let dc1f2 = document.getElementById('dataCollectionForm1f2').value;
            let dc1f3 = document.getElementById('dataCollectionForm1f3').value;
            if (dc1f1 != '' && dc1f3 != '') {
                localStorage.setItem('userFirstName', dc1f1);
                localStorage.setItem('userFullName', dc1f1 + dc1f2 + dc1f3);
            }
            break;
    }
}
//prevent notification[class] from delivering
function preventNotification() {
    for (var ik = 0; ik <= 4; ik++) {
        for (var jk = 0; jk <= 5; jk++) {
            //localStorage.setItem(timeTable[ik][jk], 'sent');
            //console.log(localStorage.getItem(timeTable[ik][jk]), timeTable[ik][jk]);
        }
    }
}
//allow notification[class] to send
function clearNotificationSent() {
    //localStorage.clear();
    for (var ik = 0; ik <= 4; ik++) {
        for (var jk = 0; jk <= 5; jk++) {
            //localStorage.setItem(timeTable[ik][jk], 'show');
            //console.log(localStorage.getItem(timeTable[ik][jk]), timeTable[ik][jk]);
        }
    }
}

//create web notifications
function webNotification(gTitle, gBody) {
    var notificationCall = new Notification(gTitle, {
        body: gBody
    });
}

//returns Lora's conversation
function getRandomText() {
    let randomNumber = Math.floor(Math.random() * LoraSays.length) + 1;
    LoraWords.innerText = LoraSays[randomNumber - 1];
}

//validates database connection
function checkDbConnection() {
    //console.log('checking connection');
    if (fetchData1 == 'error' || fetchData1 == 'no-snap' || fetchData1 == 'CY' || fetchData1 == 'EM' || fetchData1 == 'ME' || fetchData1 == 'LS' || fetchData1 == 'MA' || fetchData1 == 'CI' || fetchData1 == 'LA' || fetchData1 == 'LL' || fetchData1 == 'PE' || fetchData1 == 'FR') {
        clearInterval(dbconnectionInterval);
    }

    if (fetchData1 == 'error') {
        databaseMessage.innerText = 'DB connection failed. Please try refreshing the page.';
        clearNotificationSent();
    }
    else if (fetchData1 == 'no-snap') {
        databaseMessage.innerText = `There are no updates available for today's timetable`;
        clearNotificationSent();
    }
    else if (fetchData1 != 'error' && fetchData1 != 'no-snap' && fetchData1 != 'init') {
        if (currentDay != 1 && currentDay != 7) {
            timeTable[currentDay - 2][0] = getSubjectName(fetchData1);
            timeTable[currentDay - 2][1] = getSubjectName(fetchData2);
            timeTable[currentDay - 2][2] = getSubjectName(fetchData3);
            timeTable[currentDay - 2][3] = getSubjectName(fetchData4);
            timeTable[currentDay - 2][4] = getSubjectName(fetchData5);
            timeTable[currentDay - 2][5] = getSubjectName(fetchData6);

            timeTableGenerated = false;
            databaseMessage.innerText = `Timetable updated`;
            clearNotificationSent();
        }
    }
}

//open side-bar-menu
function openMenu() {
    sideBarMenu.className = 'd-flex flex-column flex-shrink-0 p-3 bg-light left-sidebar-open';
}

//close side-bar-menu
function closeMenu() {
    sideBarMenu.className = 'd-flex flex-column flex-shrink-0 p-3 bg-light left-sidebar-close';
    setTimeout(() => {
        sideBarMenu.className = 'd-flex flex-column flex-shrink-0 p-3 bg-light left-sidebar-hide';
    }, 1000);
}

//nav
function navHome(gtid) {
    removeAllHighlight();
    gtid.className = 'nav-link active';

    if (getDeviceMode() != 'mobile' && getDeviceMode() != 'Low-Tab' && getDeviceMode() != 'Tab') {
    } else {
        currentTimetableSection.style.display = 'block';
        //allTimetableSection.className = 'col-sm-12'
        allTimetableSection.style.display = 'none';
    }
    closeMenu();
}

function navTimetable(gtid) {
    //console.log(getDeviceMode() != 'mobile' && getDeviceMode() != 'Low-Tab' && getDeviceMode() != 'Tab')
    if (getDeviceMode() != 'mobile' && getDeviceMode() != 'Low-Tab' && getDeviceMode() != 'Tab') {
    } else {
        removeAllHighlight();
        gtid.className = 'nav-link active';
        currentTimetableSection.style.display = 'none';
        allTimetableSection.className = 'col-sm-12'
        allTimetableSection.style.display = 'block';
    }
    closeMenu();
}

function navContactUs(gtid) {
    removeAllHighlight();
    gtid.className = 'nav-link active';
    closeMenu();
    window.open('https://forms.gle/N9dBTU9bffGwHm988');
}

//changes menu highlight
function removeAllHighlight() {
    for (y1 = 0; y1 <= sideBarMenuItems.length - 1; y1++) {
        sideBarMenuItems.item(y1).querySelector('a').className = 'nav-link link-dark';
    }
}

//updates timetable
function updateTimetable() {
    for (h1 = 0; h1 <= 5; h1++) {
        mondayTimetable.item(h1).textContent = timeTable[0][h1];
    }

    for (h2 = 0; h2 <= 5; h2++) {
        tuesdayTimetable.item(h2).textContent = timeTable[1][h2];
    }

    for (h3 = 0; h3 <= 5; h3++) {
        wednesdayTimetable.item(h3).textContent = timeTable[2][h3];
    }

    for (h4 = 0; h4 <= 5; h4++) {
        thursdayTimetable.item(h4).textContent = timeTable[3][h4];
    }

    for (h5 = 0; h5 <= 5; h5++) {
        fridayTimetable.item(h5).textContent = timeTable[4][h5];
    }
}

//uses username if found else uses predefined text
function setWishTitle() {
    if (localStorage.getItem('userFirstName') != null) {
        wishContentTitle.innerHTML = 'Hi ' + localStorage.getItem('userFirstName') + ',';
    }
    else {
        wishContentTitle.innerHTML = 'Hi there,';
    }
}

//Wishes based hour-number
function setWish() {
    wishContent.className = 'text-transition-animation';
    setTimeout(() => {
        if (wishContent.innerHTML != 'Good Morning' && wishContent.innerHTML != 'Good Afternoon' && wishContent.innerHTML != 'Good Evening') {

            if (currentHour >= 0 && currentHour < 12) {
                wishContent.innerHTML = 'Good Morning';
            }
            else if (currentHour >= 12 && currentHour < 17) {
                wishContent.innerHTML = 'Good Afternoon';
            }
            else {
                wishContent.innerHTML = 'Good Evening';
            }
        }
        else {
            wishLoadCount++
            //console.log('else');
            wishContent.innerHTML = ((wishLoadCount % 2) == 0) ? currentDate + ' ' + currentMonthText + ', ' + currentDayText : currentHourAlt + ':' + currentMinuteAlt;
            if (wishLoadCount >= 100) {
                wishLoadCount = 1;
            }
        }
    }, 2000);

    setTimeout(() => {
        wishContent.className = 'text-transition';
    }, 4000);
}

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

//updates current timetable UI
function updateTimeTableUi(classtitle, periodtitle, upclass1, upclass2, upclass3, upclass4, upclass5, upclass6, prclass1, prclass2, prclass3, prclass4, prclass5, prclass6, nxtclass, btnvisible, text1, text2) {
    currentClassTitle.innerHTML = classtitle;
    currentPrdTitle.innerHTML = periodtitle;
    nextClassOn.innerHTML = nextClass[nxtclass - 1];
    joinClassButton.style.display = btnvisible;

    if (localStorage.getItem(periodtitle) != 'sent' && classtitle != 'No Classes' && classtitle != 'Interval' && classtitle != 'Lunch Break') {
        //webNotification(classtitle, periodtitle);
    }
    //localStorage.setItem(classtitle, 'sent');

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

    noClassTextOne.style.visibility = text1;
    noClassTextTwo.style.visibility = text2;

}

//resets stopExecution and exitedFromwhileLoop variables
function resetVariables() {
    stopExecution = true;
    exitedFromwhileLoop = true;
}

//redirect to teams for normal classes / shows pop up box for lab classes
function joinClass() {
    switch (currentClassTitle.innerHTML) {
        case 'Basic Of Mechanical Engineering':
            window.open(classUrl[0]);
            break;

        case 'Basic Of Civil Engineering':
            window.open(classUrl[1]);
            break;

        case 'Mathematics':
            window.open(classUrl[2]);
            break;

        case 'Engineering Chemistry':
            window.open(classUrl[3]);
            break;

        case 'Engineering Mechanics':
            window.open(classUrl[4]);
            break;

        case 'Life Skills':
            window.open(classUrl[5]);
            break;

        case 'Life Skills Lab':
            window.open(classUrl[5]);
            break;
        case 'Physical Education':
            alert('Exercise no only changes your body, it changes your mind, attitude, and your mood\nDo some exercise :)');
            break;

        case 'Lab CE/ME/CY':
            ShadowLayer.style.display = 'block';
            selectLabClass.style.display = 'block';

    }
}

//redirects to teams (Lab channels)
function joinLabClass() {
    ShadowLayer.style.display = 'none';
    selectLabClass.style.display = 'none';

    if (optionChemistryLab.checked) {
        window.open(classUrl[6]);
    }
    else if (optionCivilLab.checked) {
        window.open(classUrl[7]);
    }
    else {
        window.open(classUrl[8]);
    }
}

//creates, updates timetable based on current time and current day [MAIN FUNCTION]
function updateTimeAndDate() {
    currentTD = new Date();
    currentHour = currentTD.getHours();
    currentDay = currentTD.getDay() + 1;
    currentMonth = currentTD.getMonth() + 1;
    currentDate = currentTD.getDate();
    currentMinute = currentTD.getMinutes();

    currentHourAlt = alterTimeValue(currentHour);
    currentMinuteAlt = alterTimeValue(currentMinute);

    totalMinutes = currentHour * 60 + currentMinute;
    //alert(totalMinutes);
    //totalMinutes = totalMinutes + 10;

    currentMonthToText();
    currentDayToText();

    //alert(currentDay);
    //currentDay = 5; //MON

    if (currentDay != 1 && currentDay != 7 && !timeTableGenerated) {
        upcomingClassOneTitle.innerHTML = timeTable[currentDay - 2][0];
        getNextClass(1);
        upcomingClassNextOne.innerHTML = 'Next class on ' + getNxtDay(ivalue, jvalue + 1 > 1) + ', ' + getNxtprd(jvalue) + ' period';
        previousClassNextOne.innerHTML = upcomingClassNextOne.innerHTML;
        nextClass[0] = previousClassNextOne.innerHTML;
        resetVariables();

        upcomingClassTwoTitle.innerHTML = timeTable[currentDay - 2][1];
        getNextClass(2);
        upcomingClassNextTwo.innerHTML = 'Next class on ' + getNxtDay(ivalue, jvalue + 1 > 2) + ', ' + getNxtprd(jvalue) + ' period';
        previousClassNextTwo.innerHTML = upcomingClassNextTwo.innerHTML;
        nextClass[1] = previousClassNextTwo.innerHTML;
        resetVariables();

        upcomingClassThreeTitle.innerHTML = timeTable[currentDay - 2][2];
        getNextClass(3);
        upcomingClassNextThree.innerHTML = 'Next class on ' + getNxtDay(ivalue, jvalue + 1 > 3) + ', ' + getNxtprd(jvalue) + ' period';
        previousClassNextThree.innerHTML = upcomingClassNextThree.innerHTML;
        nextClass[2] = previousClassNextThree.innerHTML;
        resetVariables();

        upcomingClassFourTitle.innerHTML = timeTable[currentDay - 2][3];
        getNextClass(4);
        upcomingClassNextFour.innerHTML = 'Next class on ' + getNxtDay(ivalue, jvalue + 1 > 4) + ', ' + getNxtprd(jvalue) + ' period';
        previousClassNextFour.innerHTML = upcomingClassNextFour.innerHTML;
        nextClass[3] = previousClassNextFour.innerHTML;
        resetVariables();

        upcomingClassFiveTitle.innerHTML = timeTable[currentDay - 2][4];
        getNextClass(5);
        upcomingClassNextFive.innerHTML = 'Next class on ' + getNxtDay(ivalue, jvalue + 1 > 5) + ', ' + getNxtprd(jvalue) + ' period';
        previousClassNextFive.innerHTML = upcomingClassNextFive.innerHTML;
        nextClass[4] = previousClassNextFive.innerHTML;
        resetVariables();

        upcomingClassSixTitle.innerHTML = timeTable[currentDay - 2][5];
        getNextClass(6);
        upcomingClassNextSix.innerHTML = 'Next class on ' + getNxtDay(ivalue, jvalue + 1 > 6) + ', ' + getNxtprd(jvalue) + ' period';
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
            updateTimeTableUi('No Classes', '', 'block', 'block', 'block', 'block', 'block', 'block', 'none', 'none', 'none', 'none', 'none', 'none', 7, 'none', 'hidden', 'visible');
        }
        else if (totalMinutes >= 522 && totalMinutes < 585) {
            updateTimeTableUi(timeTable[currentDay - 2][0], '1st period | 8:45-9:45 AM', 'none', 'block', 'block', 'block', 'block', 'block', 'none', 'none', 'none', 'none', 'none', 'none', 1, (timeTable[currentDay - 2][0] == 'FREE!') ? 'none' : 'block', 'hidden', 'visible');
        }
        else if (totalMinutes >= 585 && totalMinutes < 645) {
            updateTimeTableUi(timeTable[currentDay - 2][1], '2nd period | 9:45-10:45 AM', 'none', 'none', 'block', 'block', 'block', 'block', 'block', 'none', 'none', 'none', 'none', 'none', 2, (timeTable[currentDay - 2][1] == 'FREE!') ? 'none' : 'block', 'hidden', 'hidden');
        }
        else if (totalMinutes >= 645 && totalMinutes < 660) {
            updateTimeTableUi('Interval', '', 'none', 'none', 'block', 'block', 'block', 'block', 'block', 'block', 'none', 'none', 'none', 'none', 7, 'none', 'hidden', 'hidden');
        }
        else if (totalMinutes >= 660 && totalMinutes < 720) {
            updateTimeTableUi(timeTable[currentDay - 2][2], '3rd period | 11 AM -12 PM', 'none', 'none', 'none', 'block', 'block', 'block', 'block', 'block', 'none', 'none', 'none', 'none', 3, (timeTable[currentDay - 2][2] == 'FREE!') ? 'none' : 'block', 'hidden', 'hidden');
        }
        else if (totalMinutes >= 720 && totalMinutes < 780) {
            updateTimeTableUi(timeTable[currentDay - 2][3], '4th period | 12 PM - 1 PM', 'none', 'none', 'none', 'none', 'block', 'block', 'block', 'block', 'block', 'none', 'none', 'none', 4, (timeTable[currentDay - 2][3] == 'FREE!') ? 'none' : 'block', 'hidden', 'hidden');
        }
        else if (totalMinutes >= 780 && totalMinutes < 840) {
            updateTimeTableUi('Lunch Break', '', 'none', 'none', 'none', 'none', 'block', 'block', 'block', 'block', 'block', 'block', 'none', 'none', 7, 'none', 'hidden', 'hidden');
        }
        else if (totalMinutes >= 840 && totalMinutes < 900) {
            updateTimeTableUi(timeTable[currentDay - 2][4], '5th period | 2-3 PM', 'none', 'none', 'none', 'none', 'none', 'block', 'block', 'block', 'block', 'block', 'none', 'none', 5, (timeTable[currentDay - 2][4] == 'FREE!') ? 'none' : 'block', 'hidden', 'hidden');
        }
        else if (totalMinutes >= 900 && totalMinutes < 960) {
            updateTimeTableUi(timeTable[currentDay - 2][5], '6th period | 3-4 PM', 'none', 'none', 'none', 'none', 'none', 'none', 'block', 'block', 'block', 'block', 'block', 'none', 6, (timeTable[currentDay - 2][5] == 'FREE!') ? 'none' : 'block', 'visible', 'hidden');
        }
        else if (totalMinutes >= 960) {
            updateTimeTableUi('No Classes', '', 'none', 'none', 'none', 'none', 'none', 'none', 'block', 'block', 'block', 'block', 'block', 'block', 7, 'none', 'visible', 'hidden');
        }
    }
    else if (!timeTableGenerated) {
        updateTimeTableUi('No Classes', '', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 7, 'none', 'visible', 'visible');
    }

    if (!timeTableGenerated) {
        timeTableGenerated = true;
    }
}

//--+--+--+--+--+--+--+--+--+--+-- RETURN FUNCTIONS --+--+--+--+--+--+--+--+--+--+--//

//predict device based on screen width
function getDeviceMode(devicemode) {
    if (screen.width < 480) {
        devicemode = 'mobile';
    }
    if (screen.width >= 480 && screen.width < 767) {
        devicemode = 'Low-Tab';

    }
    if (screen.width >= 768 && screen.width < 1024) {
        devicemode = 'Tab';

    }
    if (screen.width >= 1024) {
        devicemode = 'Large-Screen';

    }

    return devicemode;
}

//converts sub code to sub name
function getSubjectName(subcode) {
    switch (subcode) {
        case 'CY':
            subcode = 'Engineering Chemistry';
            break;
        case 'EM':
            subcode = 'Engineering Mechanics';
            break;
        case 'ME':
            subcode = 'Basic Of Mechanical Engineering';
            break;
        case 'LS':
            subcode = 'Life Skills';
            break;
        case 'MA':
            subcode = 'Mathematics';
            break;
        case 'CI':
            subcode = 'Basic Of Civil Engineering';
            break;
        case 'LA':
            subcode = 'Lab CE/ME/CY';
            break;
        case 'LL':
            subcode = 'Life Skills Lab';
            break;
        case 'PE':
            subcode = 'Physical Education';
            break;
        case 'FR':
            subcode = 'FREE!';
    }

    return subcode;
}

//returns hour and minute in 2 digits by adding 0 as a prefix
function alterTimeValue(i) {
    if (i < 10) { i = "0" + i };
    return i;
}

//returns day (for: next class)
function getNxtDay(day, singleRepeat) {
    if (currentDay - 2 == day && singleRepeat) {
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

//returns period number in format (for: next class)
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

//returns day number and period number of upcoming class of the same course as ivalue and jvalue (for: next class)
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
            i = -1; //-1 since incrementing on the last step
        }
        i++
    }
    if (exitedFromwhileLoop) {
        ivalue = i, jvalue = j;
    }
}