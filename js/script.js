var jsonPersons = `
[{
    "Name": "John",
    "Surname": "Doe",
    "Image": "img/pic1.jpg",
    "Age": 22,
    "Gender": "Male",
    "inRelation": false,
    "likes": 0
},
{
	"Name": "Brian",
	"Surname":"Adams",
	"Age":40,
    "Gender": "Male",
    "Image": "img/pic2.jpg",
    "inRelation": false,  
	"likes": 0
},
{
	"Name": "Jennifer",
	"Surname":"Smith",
	"Age":21,
    "Gender": "Female",
    "Image": "img/pic3.jpg",
    "inRelation": false, 
	"likes": 0
},
{
	"Name": "Beyonce",
	"Surname":"Secret",
	"Age":20,
	"Image": "img/pic4.jpg",
	"Gender": "Female", 
    "inRelation": false, 
	"likes": 0
},
{
    "Name": "John",
    "Surname": "Adams",
    "Image": "img/pic5.jpg",
    "Age": 42,
    "Gender": "Male",
    "inRelation": false,
    "likes": 0
},
{
	"Name": "Tony",
	"Surname":"Lewis",
	"Age":35,
    "Gender": "Male",
    "Image": "img/pic6.jpg",
    "inRelation": false,  
	"likes": 0
},
{
	"Name": "Jennifer",
	"Surname":"Garner",
	"Age":25,
    "Gender": "Female",
    "Image": "img/pic7.jpg",
    "inRelation": false, 
	"likes": 0
},
{
	"Name": "Joan",
	"Surname":"Wong",
	"Age":19,
	"Image": "img/pic8.jpg",
	"Gender": "Female", 
    "inRelation": false, 
	"likes": 0
},
{
	"Name": "Elena",
	"Surname":"Csoldok",
	"Age":22,
	"Image": "img/pic9.jpg",
	"Gender": "Female", 
    "inRelation": false, 
	"likes": 0
},
{
	"Name": "Freya",
	"Surname":"Loseth",
	"Age":43,
	"Image": "img/pic10.jpg",
	"Gender": "Female", 
    "inRelation": false, 
	"likes": 0
},
{
	"Name": "Juanita",
	"Surname":"Benavente",
	"Age":44,
	"Image": "img/pic11.jpg",
	"Gender": "Female", 
    "inRelation": false, 
	"likes": 0
},
{
	"Name": "Bettona",
	"Surname":"Toppa-Segretta",
	"Age":42,
	"Image": "img/pic12.jpg",
	"Gender": "Female", 
    "inRelation": false, 
	"likes": 0
},
{
	"Name": "Hulda",
	"Surname":"Wachulda",
	"Age":45,
	"Image": "img/pic13.jpg",
	"Gender": "Female", 
    "inRelation": false, 
	"likes": 0
},
{
	"Name": "Ernst",
	"Surname":"Lustig",
	"Age":45,
	"Image": "img/pic14.jpg",
	"Gender": "Male", 
    "inRelation": false, 
	"likes": 0
},
{
	"Name": "Nofretete",
	"Surname":"Tutanchamun",
	"Age":4000,
	"Image": "img/pic15.jpg",
	"Gender": "Female", 
    "inRelation": false, 
	"likes": 0
},
{
	"Name": "Xiao",
	"Surname":"Li",
	"Age":22,
	"Image": "img/pic16.jpg",
	"Gender": "Female", 
    "inRelation": false, 
	"likes": 0
},
{
	"Name": "Angie",
	"Surname":"Surprise",
	"Age":29,
	"Image": "img/pic17.jpg",
	"Gender": "Female", 
    "inRelation": false, 
	"likes": 0
},
{
	"Name": "Carla",
	"Surname":"Caldone",
	"Age":20,
	"Image": "img/pic18.jpg",
	"Gender": "Female", 
    "inRelation": false, 
	"likes": 0
},
{
	"Name": "Angie",
	"Surname":"Price",
	"Age":29,
	"Image": "img/pic19.jpg",
	"Gender": "Female", 
    "inRelation": false, 
	"likes": 0
},
{
	"Name": "Ernesto",
	"Surname":"Chistoso",
	"Age":49,
	"Image": "img/pic20.jpg",
	"Gender": "Male", 
    "inRelation": false, 
	"likes": 0
}
]
`;
var persons  = JSON.parse(jsonPersons);

// Alternative; still gives a parse error (although elements are properly displayed)
// var persons  = [];
// $.getJSON('js/data.json').done( function(data) {         
// 	console.log(data);	
// 	for (i=0;i<data.length;i++) {
// 	   persons.push(data[i]);
// 	   console.log(persons);	  
// 	}
// });


// for later: base part of URL
var basisURI = document.baseURI.split("?")[0];
basisURI = basisURI.split("#")[0];
// detailed view yes/no
var selPerson = getSearchedPerson();
// only handle male/female according to situation
persons = persons.filter (checkGender);
if (selPerson) {
	// if detailed view, higher matchings should be displayed first
	persons.sort(function(pers1, pers2){return calculateMatchingForPerson(pers2,selPerson) - calculateMatchingForPerson(pers1,selPerson)});
}


function incrementLikes(index) {
	persons[index].likes = persons[index].likes + 1;
	
	document.getElementById("person"+index+"span").innerHTML=" " + persons[index].likes + "	&hearts;";
}

function writeInfoToDocument(index) {
	document.write( "<br><span style='font-size: 20px;'> Name: " + persons[index].Name              + "</span><br>");
	document.write( "<span style='font-size: 20px;'>  Surname: " + persons[index].Surname              + "</span><br>");
	document.write( "<span style='font-size: 20px;'>  Age: " + persons[index].Age              + "</span><br>");
}
function writeInfoToSpans() {
	for (index = 0; index < persons.length; index++) { 
    	writeInfoToSpan(index);
    	document.getElementById("person"+index+"span").innerHTML=" " + persons[index].likes + "	&hearts;";
	}}

function writeInfoToSpan(index) {
	
document.getElementById("part"+index).innerHTML =  "<br><span style='font-size: 20px;'>Name: " + persons[index].Name + "</span><br>" 
		+ " <span style='font-size: 20px;'>Surname: " + persons[index].Surname              + "</span><br>"
		+ " <span style='font-size: 20px;'>Age: " + persons[index].Age            + "</span><br>"   ;
}

// is executed when sort-button is clicked
function sortPersonen() {
	var elem;
	for (index=0;index<persons.length;index++) {
		elem = document.getElementById("initdesc"+index);
		if (elem != null) elem.parentNode.removeChild(elem);
	}

	
	persons.sort(function(pers1, pers2){return pers2.likes - pers1.likes});
	
	for (index=0;index<persons.length;index++) {
		document.getElementById("href" + index).href = //persons[index].Image; 
		"index.html?Name=" + persons[index].Name + "&Surname=" + persons[index].Surname;
		document.getElementById("src" + index).src = persons[index].Image;
	}
	
	
	writeInfoToSpans();
	
}

function calculateMatching(index, pers) {
	return calculateMatchingForPerson(persons[index],pers);
}

// calculate matching percentage
function calculateMatchingForPerson(prs, pers) {	
	if (!pers) return -1;
	// genders should be different, if not, return 0
	if (selPerson.Gender==prs.Gender) return 0;
	// return value is initialized to 0
	var retInt = 0;
	if (Math.abs(selPerson.Age-prs.Age)<10) retInt += 50;
	if (!selPerson.inRelation && !prs.inRelation )  retInt += 50;
	return retInt;
}

// write depending on size
function writeDivInsideTable(index) {
	var howMany = howManyColumns();
	var environ =getResponsiveBreakpoint();
	var nbr1 = 2;
	var nbr2 = 1;
	if (howMany == 2) {
		nbr1 = 4;
		nbr2 =2;
	} else if (howMany==1) {
		nbr1 = 8;
		nbr2 = 4;
	}
	document.write( "<div class=\"col-" + environ + "-" + nbr1 + "\" style=\"background-color: #d6c0d8\">");
	document.write( "<a href=\"index.html?Name=" + persons[index].Name + "&Surname=" + persons[index].Surname +"\" target=\"_blank\" id=\"href" + index + "\"><img src=\"" + persons[index].Image +"\" id=\"src" + index + "\"></a>");
	document.write( "<br>");
				
	if (!selPerson) document.write( "		   <button onclick=\"incrementLikes(" + index + ")\">Like</button> <span id=\"person" + index + "span\" class=\"redStyle\"> 0 &hearts; </span>");
	else {
		var matching = calculateMatching(index,selPerson);
		var progr = ` <div class="progress">
		<div class="progress-bar" role="progressbar" aria-valuenow="`;
		progr = progr + matching + `"
		aria-valuemin="0" aria-valuemax="100" style="width:`;
		progr = progr + matching + `%">`;
		progr = progr + matching + `%
		</div>
	  </div> `;
	  document.write(progr);
	}
	document.write( "	   </div>");
	document.write( "<div class=\"col-" + environ + "-" + nbr2 + "\" style=\"background-color: #d6c0d8\">");	
	document.write( "	   <span id=\"part" + index + "\" style=\"color:black;font-size: 15px;\"></span>");	 	        			
	document.write( "	   <span id=\"initdesc" + index + "\" style=\"color:black;font-size: 15px;\">");
	writeInfoToDocument(index);
	document.write( "	   </span>");
	document.write( "		   <br><br>");
	document.write( "	   </div>");
}

function writeDivsInsideTable() {
	var ctr = 0;
	var howManyCols = howManyColumns();
	for (index=0;index<persons.length;index++) {
		var matching = calculateMatching(index,selPerson);
	    // only the case matching not 0 is used
		 if (matching != 0) {
			if ((ctr % howManyCols)==0) document.write( "<div class=\"row\" style=\"background-color: #d6c0d8\">");
			 writeDivInsideTable(index);
			 if ((ctr % howManyCols)==howManyCols-1) 	document.write( "</div>");
			 ctr++;
		 }
	}
	if ((ctr % howManyCols)!=0) 	document.write( "</div>");
}

function checkMale( person ) {
	return person.Gender == "Male";
}

function checkFemale ( person ) {
	return person.Gender == "Female";
}

function checkGender (person) {
	// Element displayed if start page
	if (basisURI.endsWith("index.html")) return true;
	// Element displayed only if female
	if (basisURI.endsWith("indexFemale.html")) return checkFemale ( person );
	// Element displayed only if male
	if (basisURI.endsWith("indexMale.html")) return checkMale ( person );
	// this should not happen
	//alert ("Please tell the web designer to change filenames");
	return false;
}

function getParamFromRequest(name){
		if(name=(new RegExp('[?&]'+encodeURIComponent(name)+'=([^&]*)')).exec(location.search))
	   return decodeURIComponent(name[1]);
 }

 function getSearchedPerson() {
	 var retPers = null;
	 if (!window.location.search) {
		return retPers;			 
	 } 
	 // look at request parameters
	 var fullNameInSearch = getParamFromRequest("fullname");
	 var nameInSearch = getParamFromRequest("Name");
	 var surnameInSearch = getParamFromRequest("Surname");
	 if (fullNameInSearch) {
		 var parArray = fullNameInSearch.split("+");
		 nameInSearch =parArray[0];
	     surnameInSearch =parArray[1];
	 }
	 for (index=0;index<persons.length;index++) {
		retPers = persons[index];
		if ((retPers.Name == nameInSearch)&&(retPers.Surname == surnameInSearch)) {
			// found person
		    return retPers;
		}
	 }
	 return null;
 }
//how many columns should be displayed?
 function howManyColumns() {
	var environ =getResponsiveBreakpoint();
	if (environ == "lg") return 4;
	if (environ == "md") return 2;
	return 1;
}
// taken from Stackoverflow
// URL https://stackoverflow.com/questions/14441456/how-to-detect-which-device-view-youre-on-using-twitter-bootstrap-api
/**
 * Detect and return the current active responsive breakpoint in Bootstrap
 * @returns {string}
 */
function getResponsiveBreakpoint() {
    var envs = ["xs", "sm", "md", "lg"];
    var env = "";

    var $el = $("<div>");
    $el.appendTo($("body"));

    for (var i = envs.length - 1; i >= 0; i--) {
        env = envs[i];
        $el.addClass("d-" + env + "-none");
        if ($el.is(":hidden")) {
            break; // env detected
        }
    }
    $el.remove();
    return env;
}
// for the display of the heading - can be Matching, Male or Female
function writeHeading() {
	if (selPerson) document.write("Matching");
	else if (basisURI.endsWith("indexFemale.html")) document.write("Female");
	else if (basisURI.endsWith("indexMale.html")) document.write("Male");
}
// for the display of the selected person
function writeDivInsideTableForSelectedPerson() {
	document.write( "<div class=\"row\" style=\"background-color: #d6c0d8\">");
	document.write( "<div class=\"col-md-8\" style=\"background-color: #d6c0d8\">");
	document.write( "<a href=\"" + selPerson.Image + "\" target=\"_blank\" id=\"href" + 999999 + "\"><img src=\"" + selPerson.Image +"\" id=\"src" + 999999 + "\"></a>");
	document.write( "<br>");
	document.write( "	   </div>");
	document.write( "<div class=\"col-md-4\" style=\"background-color: #d6c0d8\">");	
	document.write( "	   <span id=\"part" + 999999 + "\" style=\"color:black;font-size: 15px;\"></span>");	 	        			
	document.write( "	   <span id=\"initdesc" + 999999 + "\" style=\"color:black;font-size: 15px;\">");
	document.write( "Name: " + selPerson.Name              + "<br>");
	document.write( " Surname: " + selPerson.Surname              + "<br>");
	document.write( " Age: " + selPerson.Age              + "<br>");
	document.write( " Currently ");
	if (!selPerson.inRelation) document.write( " <span  style='text-decoration: underline;'> not </span> ");
	document.write( " in a relationship<br>");
	document.write( "	   </span>");
	document.write( "		   <br><br>");//<br><br><br><br><br>");
	document.write( "	   </div>");
	document.write( "</div>");
}
