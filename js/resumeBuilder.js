/*
This is empty on purpose! Your code to build the resume will go here.
 */


var bio = {
    name : "Denis DUmulong",
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
    biopic: "http://",
    display: function () { }
}

var education = {

    schools: [
        {
            name: "Some Elementary School",
            location: "NoWhere Near",
            degree: "Sure",
            majors: "Pain",
            dates: "01/01/2001 - 02/01/2001",
            url: "http://fakefreakingschool.com/NoWhere"
        },
        {
            name: "Some High School",
            location: "Closer then the Other",
            degree: "Bof...",
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
    display: function () { }

}

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
    display: function () { }
}

var projects = {
    projects: [
        {
          title: "How to make stuff up",
          dates: "03/01/2013 - 04/01/2013",
          description: "Just making stuff up... I did not do anything, really...",
          images: [ "http://", "", "" ]
        }
    ],
    display: function () { }
}
