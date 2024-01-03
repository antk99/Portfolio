import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Anthony Kumar",
  title: "Hi, I'm Anthony",
  subTitle: emoji(
    "I’m an intermediate full stack software engineer with experience taking ideas from conception to deployment 🚀"
  ),
  resumeLink: "",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  linkedin: "https://www.linkedin.com/in/anthonykumar/",
  github: "https://github.com/antk99",
  instagram: "https://www.instagram.com/antk.99/",
  gmail: "me@anthonykumar.com",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "I build scalable, performant, and maintainable full stack applications for the web and mobile.",
  skills: [
    emoji("⚡ Full Stack Web & Mobile Application Development"),
    emoji(
      "⚡ Integration of third party services & APIs such as Stripe, Twilio, Google Maps, etc..."
    ),
    emoji(
      "⚡ Leverage cloud services such as AWS, Firebase, and Heroku to deploy & scale applications"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "React",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Node.js",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "HTML",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "SQL/NoSQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Firebase",
      fontAwesomeClassname: "fas fa-fire"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "McGill University",
      logo: require("./assets/images/mcgillLogo.png"),
      subHeader:
        "Bachelor of Science in Computer Science, Minor in Mathematics",
      duration: "September 2018 - May 2023"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend",
      progressPercentage: "85%"
    },
    {
      Stack: "Backend",
      progressPercentage: "95%"
    },
    {
      Stack: "Data Structures & Algorithms",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Founding Software Engineer",
      company: "Gathera",
      companylogo: require("./assets/images/gatheraLogo.png"),
      date: "Jan 2023 – Present",
      desc: "I co-founded Gathera, a social networking platform for Android & iOS that allows users to meet and discover their cities. Learn more at gathera.ca",
      descBullets: []
    }
  ]
};

const openSource = {
  showGithubProfile: "true",
  display: true
};

const bigProjects = {
  title: "",
  subtitle: "",
  projects: [
    {
      image: null,
      projectName: "",
      projectDesc: "",
      footerLink: [
        {
          name: "",
          url: ""
        }
        //  you can add extra buttons here.
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section

const achievementSection = {
  title: emoji("Achievements"),
  subtitle: "Here are my engineering achievements I am proud of.",

  achievementsCards: [
    {
      title: "1st Place @ McGill University Web Development Competition",
      subtitle:
        "Team leader for the winning team out of 150 students in the Fall 2022 competition under Joseph Vybihal.",
      image: require("./assets/images/mcgillFullLogo.png"),
      imageAlt: "McGill University Logo",
      footerLink: [
        {
          name: "View Project",
          url: "https://github.com/antk99/TA-Management"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle: "",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "",
      title: "",
      description: ""
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "Talks",
  subtitle: emoji(""),

  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: ""
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "",

  // Please Provide with Your Podcast embeded Link
  podcast: [""],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Let's get in touch"),
  subtitle:
    "Want to discuss a project or how we can work together? Feel free to reach out to me below.",
  number: "",
  email_address: "me@anthonykumar.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
