/* --------------------------------------------------------------- */
/* bio data */
/* --------------------------------------------------------------- */
var bio = {
    name: "Denis Dumulong",
    role: "Web Developer",
    contacts: {
        mobile: "(210) 867-5309",
        email: "Mickey@Mouse.com",
        github: "https://github.com/ThisIsIt",
        twitter: "https://twitter.com/TwitIt",
        location: "San Antonio, TX"
    },
    welcomeMessage: "Proin convallis justo eget diam ornare suscipit. Sit amet porttitor quam sapien ac lacus.",
    skills: ["Javascript", "HTML", "CSS"],
    biopic: "http://via.placeholder.com/200x250/FF5733/ffffff?text=My+Photo"
};

/* --------------------------------------------------------------- */
/* work data */
/* --------------------------------------------------------------- */

var work = {
    jobs: [{
            employer: "Chez Henry",
            title: "Cook",
            location: "Quebec, QC Canada",
            dates: "in progress",
            description: "Nunc vehicula, lectus sed aliquam lobortis, nisi eros vulputate arcu, sit amet blandit nisi orci nec diam. Praesent at dignissim mauris. Maecenas bibendum velit quis interdum tristique. Donec ut eros lectus. Duis rhoncus quam vel turpis sodales ornare. Quisque ex velit, mollis sed nisl quis, pretium varius sem. Aliquam ornare est sed nisl dapibus molestie. Maecenas mi elit, varius sodales sem vel, venenatis suscipit magna. Donec et faucibus purus, sit amet ultrices lectus. Donec augue erat, porta id metus vel, sodales tincidunt leo. Vivamus pellentesque lacus erat, et egestas nisi interdum ac.",
        },
        {
            employer: "Chez Henrietta",
            title: "Cook",
            location: "Montreal, QC Canada",
            dates: "03/01/2013 - 04/01/2013",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sollicitudin tortor ut iaculis cursus. Maecenas euismod est semper condimentum sodales. Cras eget nisi malesuada, bibendum lorem sit amet, tempus sem. Cras eget purus tincidunt, pellentesque massa et, volutpat nibh. In ornare lorem at ante tincidunt elementum ut ac diam. Proin convallis justo eget diam ornare suscipit. Suspendisse vehicula, odio viverra cursus laoreet, est tortor dignissim odio, sit amet porttitor quam sapien ac lacus.",
        }
    ]
};

/* --------------------------------------------------------------- */
/* projects data */
/* --------------------------------------------------------------- */

var projects = {
    projects: [{
        title: "How to make stuff up",
        dates: "03/01/2013 - 04/01/2013",
        description: "Curabitur semper velit sed libero cursus condimentum. Cras bibendum interdum libero non tincidunt. Nam vel fermentum sapien. Nam vitae ipsum fermentum, dapibus eros et, scelerisque lacus. Integer dapibus ut neque a pellentesque. Duis euismod, velit at pharetra tincidunt, tellus nisl finibus erat, nec porta arcu est ut enim. Morbi eu diam non eros consequat semper. Quisque et risus nunc. Nam molestie dui non sem porttitor, ac fringilla orci mollis. Aliquam eget pharetra nibh. Praesent faucibus, mauris non imperdiet blandit, dui nunc dignissim enim, non molestie tortor dolor at enim. Phasellus hendrerit venenatis sapien, scelerisque porta magna dictum vitae. Donec dignissim, enim et vestibulum egestas, diam dolor dignissim nisl, hendrerit sagittis metus diam sed nunc.",
        images: [
            "http://via.placeholder.com/350x300/f5ae23/000?text=Some+Pic",
            "http://via.placeholder.com/200x300/f5ae23/000?text=Some+Other+Pic",
            "http://via.placeholder.com/350x300/f5ae23/fff?text=Last+Pic"
        ]
    }]
};

/* --------------------------------------------------------------- */
/* education data */
/* --------------------------------------------------------------- */

var education = {

    schools: [{
            name: "Some Elementary School",
            location: "Joliette, QC Canada",
            degree: "BA",
            majors: "Pain",
            dates: "01/01/2001 - 02/01/2001",
            url: "http://google.com"
        },
        {
            name: "Some High School",
            location: "Joliette, QC Canada",
            degree: "Master",
            majors: "More like Kernel",
            dates: "03/01/2001 - 04/01/2001",
            url: "http://google.com"
        }
    ],
    onlineCourses: [{
            title: "The Art of Passing",
            school: "Unknown",
            dates: "03/01/2012 - 04/01/2012",
            url: "http://google.com"
        },
        {
            title: "The Art of Art",
            school: "Hard Knocks",
            dates: "03/01/2013 - 04/01/2013",
            url: "http://google.com"
        },
    ]

};


/* --------------------------------------------------------------- */
/* bio display */
/* --------------------------------------------------------------- */

bio.display = function () {

    var _headerName = HTMLheaderName.replace("%data%", bio.name);
    var _headerRole = HTMLheaderRole.replace("%data%", bio.role);
    var _mobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var _email = HTMLemail.replace("%data%", bio.contacts.email);
    var _github = HTMLgithub.replace("%data%", bio.contacts.github);
    var _twitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var _location = HTMLlocation.replace("%data%", bio.contacts.location);
    var _bioPic = HTMLbioPic.replace("%data%", bio.biopic);
    var _welcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

    $("#header").append(_headerName);
    $("#header").append(_headerRole);

    //Move the contacts back down..
    //There are many ways to deal with this section... but this is
    //the way I think it should be done.  I believe that it's easier to maintain..
    $("#topContacts").appendTo("#header");

    var $contact = $("#topContacts");
    $contact.append(_mobile);
    $contact.append(_email);
    $contact.append(_github);
    $contact.append(_twitter);
    $contact.append(_location);

    $("#header").append(_bioPic);

    $("#header").append(_welcomeMsg);
    $("#header").append(HTMLskillsStart);

    this.skills.forEach(function (elm) {
        var _skill = HTMLskills.replace("%data%", elm);
        $("#header").append(_skill);
    });

    //While we are at it, fill the contact in the bottom:
    var $contact = $("#footerContacts");
    $contact.append(_mobile);
    $contact.append(_email);
    $contact.append(_github);
    $contact.append(_twitter);
    $contact.append(_location);
}

/* --------------------------------------------------------------- */
/* work display */
/* --------------------------------------------------------------- */

work.display = function () {

    this.jobs.forEach(function (elm) {

        var _workEmployer = HTMLworkEmployer.replace("%data%", elm.employer);
        var _workTitle = HTMLworkTitle.replace("%data%", elm.title);
        var _workDates = HTMLworkDates.replace("%data%", elm.dates);
        var _workLocation = HTMLworkLocation.replace("%data%", elm.location);
        var _workDescription = HTMLworkDescription.replace("%data%", elm.description);

        $("#workExperience").append(HTMLworkStart);
        var $lastEntry = $(".work-entry:last");
        $lastEntry.append(_workEmployer);
        $lastEntry.append(_workTitle);
        $lastEntry.append(_workDates);
        $lastEntry.append(_workLocation);
        $lastEntry.append(_workDescription);
    });

}

/* --------------------------------------------------------------- */
/* projects display */
/* --------------------------------------------------------------- */

projects.display = function () {

    this.projects.forEach(function (elm) {

        var _projectTitle = HTMLprojectTitle.replace("%data%", elm.title);
        var _projectDates = HTMLprojectDates.replace("%data%", elm.dates);
        var _projectDescription = HTMLprojectDescription.replace("%data%", elm.description);
        var _projectImage = HTMLprojectImage.replace("%data%", elm.mobile);

        $("#projects").append(HTMLprojectStart);
        var $lastEntry = $(".project-entry:last");
        $lastEntry.append(_projectTitle);
        $lastEntry.append(_projectDates);
        $lastEntry.append(_projectDescription);
        elm.images.forEach(function (pic) {
            var _pic = HTMLprojectImage.replace("%data%", pic);
            $lastEntry.append(_pic);
        });
    });
}

/* --------------------------------------------------------------- */
/* eduction display */
/* --------------------------------------------------------------- */

education.display = function () {

    this.schools.forEach(function (elm) {

        var _schoolName = HTMLschoolName.replace("%data%", elm.name).replace("#", elm.url);
        var _schoolDegree = HTMLschoolDegree.replace("%data%", elm.degree);
        var _schoolDates = HTMLschoolDates.replace("%data%", elm.dates);
        var _schoolLocation = HTMLschoolLocation.replace("%data%", elm.location);
        var _schoolMajor = HTMLschoolMajor.replace("%data%", elm.majors);

        $("#education").append(HTMLschoolStart);
        var $lastEntry = $(".education-entry:last");
        $lastEntry.append(_schoolName);
        $lastEntry.append(_schoolDegree);
        $lastEntry.append(_schoolDates);
        $lastEntry.append(_schoolLocation);
        $lastEntry.append(_schoolMajor);

    });

    $("#education").append(HTMLonlineClasses);

    this.onlineCourses.forEach(function (elm) {

        var _onlineTitle = HTMLonlineTitle.replace("%data%", elm.title);
        var _onlineSchool = HTMLonlineSchool.replace("%data%", elm.school);
        var _onlineDates = HTMLonlineDates.replace("%data%", elm.dates);
        var _onlineURL = HTMLonlineURL.replace(/\%data\%|#/g, elm.url);

        $("#education").append(HTMLschoolStart);
        var $lastEntry = $(".education-entry:last");
        $lastEntry.append(_onlineTitle);
        $lastEntry.append(_onlineSchool);
        $lastEntry.append(_onlineDates);
        $lastEntry.append(_onlineURL);

    });
}

/* --------------------------------------------------------------- */
/* Where I lived and worked display */
/* --------------------------------------------------------------- */

var whereILived = {
    display: function () {
        $("#mapDiv").append(googleMap);
    }
}