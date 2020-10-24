
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  title: "Hi all I'm Harsh",
  subTitle: emoji("A Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / Java / Android and some other cool libraries and frameworks"),
  resumeLink: "https://drive.google.com/file/d/17fPS2sskO_W-tkCum_dYF_f7y20iXK5D/view?usp=sharing"
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/harshchinu",
  linkedin: "https://www.linkedin.com/in/harsh-maheshwari-a29968177/",
  gmail: "mharsh301@gmail.com",
  facebook: "https://www.facebook.com/harsh.maheshwari301"
};

// Your Skills Section

const skillsSection = {
  title: "What i do",
  subTitle: "Tries to find easiest solution this problem and learn how to optimise it",
  skills: [
    emoji("⚡ Develop interactive Front end / User Interfaces for your web and mobile applications"),
    emoji("⚡ Integration of third party services such as Firebase/ AWS")
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Web Development-Frontend",  //Insert stack or technology you have experience in
      progressPercentage: "75%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Web Development-Backend",
      progressPercentage: "60%"
    },
    {
      Stack: "Android Development ",
      progressPercentage: "80%"
    },
    {
      Stack: "Programming",
      progressPercentage: "70%"
    },

  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: "Your Github Converted Token",
  githubUserName: "Your Github Username",
  showGithubProfile :"false" // Set true or false to show Contact profile using Github, defaults to false 
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Experience",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELP TO CREATE THEIR TECH",
  projects: [
        {
      image: "https://mycoldzone.s3.ap-south-1.amazonaws.com/rsz_2rsz_image.png",
      link: "https://www.tomilkieway.com/"
    }
  ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Projects 🏆 "),
  subtitle: "Some Cool Stuff that i have done !",
  buttonText:"More Project Here",
  achivementsCards: [
    {
      title: "Vastum",
      subtitle: "We built an application for DSC Solution Challenges'20 is this weprovide a portal, where one can give his old electronic device gives for proper recycling and get benefit in exchange of it.",
      techstack:"Java, Firebase & Android.",
      footerLink: [
        { name: "Github", url: "https://github.com/harshchinu/Vastum" }
      ]
    },
    {
      title: "Disease Spread Analyzer",
      subtitle: "Diarrhea in My Area” is an android application to track the spread of different Diseases using maps along with analyzing the spread using graphs..",
      techstack:"Java, Firebase & Android.",
      footerLink: [
        { name: "Github", url: "https://github.com/harshchinu/Diarrhea_in_my_area" }
      ]
    },
    {
      title: "My Cold Zone",
      subtitle: "Android Bill System for a Franchise Company Called “My Cold Zone” based on Android with Database & Printing Configured",
      techstack:"Java, Node.js Firebase & Android.",
      footerLink: [
        { name: "Github", url: "https://github.com/harshchinu/MyColdZone" }
      ]
    },
    {
      title: "Intern Notifier",
      subtitle: "A Python Script to get Notification mail for Internship openings from Multiple Websites using Web Scraping.",
      techstack:"Python, Beautiful Soup4, stmplib, request",
      footerLink: [
        { name: "Github", url: "https://github.com/harshchinu/Intern-Notifier-V1" }
      ]
    },
    {
      title: "Updates2k19.in",
      subtitle: "Website for college’s Techfest used to display events and take registration for events.",
      techstack:"HTML, CSS, JS, Firebase & Bootstrap",
      footerLink: [
        { name: "Github", url: "https://github.com/harshchinu/v12" },
        {name:"www.updates2k19.in",url:"https://updates2k19-9748a.web.app/"}
      ]
    }
    ,
    {
      title: "Amazon Alexa Skills Home",
      subtitle: "Talking Tom,The Big Bang Theory Trivia, Daily Prophet.",
      techstack:"JavaScript, AWS",
      footerLink: [
        { name: "Github", url: "https://github.com/harshchinu/Alexa-Skills" }
      ]
    }

  ]
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi my inbox is open for all",
  number: "+91-9033123754",
  email_address: "mharsh301@gmail.com"
};

export { greeting, socialMediaLinks, skillsSection, techStack, openSource, bigProjects, achievementSection,contactInfo};
