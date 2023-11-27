// Select Your Elements
var subTypeElement = document.querySelector("#subscription"); 
var subDurationElement = document.querySelector("#months");
var result = document.querySelector(".result");
var subType = "basic";
var subDuration = 1;

//Change Event Listeners
subTypeElement.addEventListener("change", function (e) {
    subType = e.target.value;
    updateSubscriptionDiv();
    });
    

    subDurationElement.addEventListener("change", function (e) {
    subDuration = Number(e.target.value);
    updateSubscriptionDiv();
});

//Function to Calculate Cost
var updateSubscriptionDiv = function () {
    var monthlyCost = 5; //basic plan
    if (subType === "standard") {
        monthlyCost = 7;
      } else if (subType === "premium") {
        monthlyCost = 10;
      }
var total = subDuration * monthlyCost;
result.innerText = `You have chosen a ${subDuration} month ${subType} plan for $${total}.`;
};

//Call Function to Update the DOM
//updateSubscriptionDiv.addEventListener("change-event");