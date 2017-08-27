/*
This is empty on purpose! Your code to build the resume will go here.
 */


var bio = {
    name : "Denis Dumulong",
    role : "Web Developer",
    contacts : {
        mobile: "(210) 867-5309",
        email: "MickeyMouse@disney.com",
        github: "https://github.com/Thisisit",
        twitter: "",
        location: "San Antonio"
    },
    welcomeMessage: "Hey, there!",
    skills: [ "Javascript", "HTML", "CSS", "Other" ],
    biopic: "http://via.placeholder.com/350x300",
    display: function () {

        var _headerName = HTMLheaderName.replace("%data%", bio.name);
        var _headerRole = HTMLheaderRole.replace("%data%", bio.role);
        var _mobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var _email = HTMLemail.replace("%data%", bio.contacts.email);
        var _github = HTMLgithub.replace("%data%", bio.contacts.github);
        var _twitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
        var _location = HTMLlocation.replace("%data%", bio.contacts.location);
        var _bioPic = HTMLbioPic.replace("%data%", bio.biopic);
        var _welcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

        $("#header").prepend(_headerName);
        $("#header h1").append(_headerRole);

        var $contact = $("#topContacts");
        $contact.append(_mobile);
        $contact.append(_email);
        $contact.append(_github);
        $contact.append(_twitter);
        $contact.append(_location);

        $("#header").append(_bioPic);

        $("#header").append(_welcomeMsg);
        $("#header").append(HTMLskillsStart);

        bio.skills.forEach(function(elm) {
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
};

var work = {
    jobs: [
        {
            employer: "Chez Henry",
            title: "Cook",
            location: "French place",
            dates: "in progress",
            description: "Cooking food.",
        },
        {
            employer: "Chez Henrietta",
            title: "Cook",
            location: "Same French place",
            dates: "03/01/2013 - 04/01/2013",
            description: "Cooking food, but better",
        }
    ],
    display: function () {

        work.jobs.forEach(function(elm) {

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
};

var projects = {
    projects: [
        {
          title: "How to make stuff up",
          dates: "03/01/2013 - 04/01/2013",
          description: "Just making stuff up... I did not do anything, really...",
          images: [ "http://via.placeholder.com/350x300", "http://via.placeholder.com/350x300", "http://via.placeholder.com/350x300" ]
        }
    ],
    display: function () {

        projects.projects.forEach(function(elm) {

            var _projectTitle = HTMLprojectTitle.replace("%data%", elm.title);
            var _projectDates = HTMLprojectDates.replace("%data%", elm.dates);
            var _projectDescription = HTMLprojectDescription.replace("%data%", elm.description);
            var _projectImage = HTMLprojectImage.replace("%data%", elm.mobile);

            $("#projects").append(HTMLprojectStart);
            var $lastEntry = $(".project-entry:last");
            $lastEntry.append(_projectTitle);
            $lastEntry.append(_projectDates);
            $lastEntry.append(_projectDescription);
            elm.images.forEach(function(pic) {
                var _pic = HTMLprojectImage.replace("%data%", pic);
                $lastEntry.append(_pic);
            });
        });
    }
};

var education = {

    schools: [
        {
            name: "Some Elementary School",
            location: "NoWhere Near",
            degree: "BA",
            majors: "Pain",
            dates: "01/01/2001 - 02/01/2001",
            url: "http://fakefreakingschool.com/NoWhere"
        },
        {
            name: "Some High School",
            location: "Closer then the Other",
            degree: "Master",
            majors: "More like Kernel",
            dates: "03/01/2001 - 04/01/2001",
            url: "http://fakefreakingschool.com/Closer"
        }
    ],
    onlineCourses: [
        {
            title: "The Art of Passing",
            school: "Unknown",
            dates: "03/01/2012 - 04/01/2012",
            url: "http://fraudschool.com/online"
        },
        {
            title: "The Art of Art",
            school: "Hard Knocks",
            dates: "03/01/2013 - 04/01/2013",
            url: "http://fraudschool.com/nothardatall"
        },
    ],
    display: function () {

        education.schools.forEach(function(elm) {

            var _schoolName = HTMLschoolName.replace("%data%", elm.name);
            _schoolName = _schoolName.replace("#", elm.url);
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

        education.onlineCourses.forEach(function(elm) {

            var _onlineTitle = HTMLonlineTitle.replace("%data%", elm.title);
            var _onlineSchool = HTMLonlineSchool.replace("%data%", elm.school);
            var _onlineDates = HTMLonlineDates.replace("%data%", elm.dates);
            var _onlineURL = HTMLonlineURL.replace("%data%", elm.url);

            $("#education").append(HTMLschoolStart);
            var $lastEntry = $(".education-entry:last");
            $lastEntry.append(_onlineTitle);
            $lastEntry.append(_onlineSchool);
            $lastEntry.append(_onlineDates);
            $lastEntry.append(_onlineURL);

        });
    }

};