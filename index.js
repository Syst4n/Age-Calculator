
var dayTriggered = false;
var monthTriggered = false;
var yearTriggered = false;
$("#pointer").on("click", run)
$(document).on("keypress", run)



    function run(e){
    if (e.type=='click' || e.key =='Enter'){

    var dayEntered = $("#day").val(); //jQuery
    var monthEntered = document.getElementById("month").value //same way but without jQuery ;), no need for "#" here because it's get by id
    var yearEntered = document.querySelector("#year").value// same thing but using querySelector, we specify "#"

    var date = new Date()
    var currentDay = date.getDate()


    var currentMonth = date.getMonth() + 1;

    var currentYear = date.getFullYear();
    console.log(`${currentDay}-${currentMonth}-${currentYear}`)


    if (( dayEntered=="00" || dayEntered>31 || dayEntered=='' || monthEntered=='' || monthEntered=="00" || monthEntered>12 || yearEntered=='' || yearEntered=="00" || yearEntered>currentYear)) {
        $("input").addClass("error");
        $("label").addClass("text-error");

        if ((dayEntered=="00" || dayEntered>31 || dayEntered=='')) {
            if (!dayTriggered) {
            $("#day").after('<p class="text-error" id="errorD"></p>'); 
            dayTriggered = true;
            }
            if (dayEntered==''){$("#errorD").text("Please Enter a Day") }
            else {$("#errorD").text("Please Enter a valid day")}
        }

        else{$("#errorD").remove()
            console.log("solid D")}




        if ((monthEntered=="00" || monthEntered>12 || monthEntered=='')) {
            if (!monthTriggered) {
            $("#month").after('<p class="text-error" id="errorM"></p>'); 
            monthTriggered = true;
            }
            if (monthEntered==''){$("#errorM").text("Please Enter a month") }
            else {$("#errorM").text("Please Enter a valid month")}
        }
        else{$("#errorM").remove()
        console.log("solid M")}


        if ((yearEntered=="00" || yearEntered>currentYear || yearEntered=='')) {
            if (!yearTriggered) {
            $("#year").after('<p class="text-error" id="errorY"></p>'); 
            yearTriggered = true;
            }
            if (yearEntered==''){$("#errorY").text("Please Enter a year") }
            else {$("#errorY").text("Please Enter a valid year")}
        }
        else {$("#errorY").remove()
        console.log("solid Y")}
  

    }

    else {
        $("#errorD").remove()
        $("#errorM").remove()
        $("#errorY").remove()
        $("input").removeClass("error");
        $("label").removeClass("text-error");
        dayTriggered=false;
        monthTriggered=false;
        yearTriggered=false;
        console.log('solid')

        
         yearEntered = Number(yearEntered)
        monthEntered = Number(monthEntered)
         dayEntered = Number(dayEntered)
        const [yearAge, monthAge, dayAge] = calculateAge(yearEntered, monthEntered, dayEntered);
        $("#years").text(yearAge);
        $("#months").text(monthAge);
        $("#days").text(dayAge);

        }




}
function calculateAge(year, month, day) {
    const birthDate = new Date(year, month - 1, day);
    const currentDate = new Date();
  
    let ageInMilliseconds = currentDate - birthDate;
  
    const yearInMilliseconds = 1000 * 60 * 60 * 24 * 365.25;
    const monthInMilliseconds = yearInMilliseconds / 12;
  
    const yearAge = Math.floor(ageInMilliseconds / yearInMilliseconds);
    ageInMilliseconds -= yearAge * yearInMilliseconds;
  
    const monthAge = Math.floor(ageInMilliseconds / monthInMilliseconds);
    ageInMilliseconds -= monthAge * monthInMilliseconds;
  
    const dayAge = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24));
  
    return [yearAge, monthAge, dayAge];
} }
