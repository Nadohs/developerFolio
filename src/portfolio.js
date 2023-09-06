/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/loadingBfs"; // Rename to your file name for custom animation

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
  username: "Rich Fox",
  // image: require("./assets/images/logov2.png"),
  title: "Hi all, I'm Rich Fox. Welcome to Nadohs Software LLC.",
  subTitle: emoji(
    "I'm a passionate software engineer 🚀 with experience on mobile, backend, and web. My specialities include Native iOS (Swift/Objective-C), Flask Backend (Python) React-Native (javascript/CSS/HTML)."
  ),
  resumeLink:
    "https://drive.google.com/file/d/16mp9cQC0gkXqlnLKPiJ0aZSD149kZmqw/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/nadohs",
  linkedin: "https://www.linkedin.com/in/richard-fox-b3175115/",
  gmail: "fox.ios.dev@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Experienced engineer with an infrastructure background, doing Mobile/Backend/Web development, using AI and LLMs to ugrade your app, and building apps from start to finish.",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ AI, Neural Network and LLM integation into apps."),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    ),
    emoji(
      "⚡ Enhanching existing projects, as well as building from scratch, mobile apps, web apps, and backend services at both small and large scales."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "app-dev",
      fontAwesomeClassname: "fab fa-app-store-ios"
    },
        {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
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
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },

    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    }


  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Udacity Nanodegree",
      logo: require("./assets/images/schools/udacity_resized.png"),
      subHeader: "Udacity Nanodegree Certificate - Deep Learning",
      duration: "2017 June - Sept",
      desc: "Completed Udacity Deep Learning Nanodegree. ",
      descBullets: [
        "Did course work for 10-20 hours a week over four months to complete program.",
        "Built a neural network from scratch without library, as well as CNN, RNN, and GANs, with libraries, to complete numerous projects for course.",
      ]
    },
    {
      schoolName: "Zhejiang University",
      logo: require("./assets/images/schools/zhejiang_university.png"),
      subHeader: "MA - 对外汉语 - Mandarin as a Second Language",
      duration: "2011 - 2013",
      desc: "Wrote Thesis 'Measuring what's Lost in Translation.' A research study using linguistic syntax analysis on differences after transating complex texts from English to Mandarin and back again.",
      descBullets: [
        "Shadowed teacher at Zhejiang University class. Planned and taught lesson on tone pair practice activities.",
        "Worked at QuVideo(VivaVideo) during last several months of degree doing iOS Development part time, later full."
      ]
    },
    {
      schoolName: "University of Florida",
      logo: require("./assets/images/schools/uf_resized.png"),
      subHeader: "BA - East Asian Language and Literature: Chinese",
      duration: "2007 - 2009",
      desc: "Studied up to level-3 Chinese, Linguistics, and East Asian History, Literature, Poetry, and Religions.",
      descBullets: [
        "Completed Summer Study Abroad in Beijing, China. at Tsinghua University.",
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {}  
//   viewSkillBars: true, //Set it to true to show Proficiency Section
//   experience: [
//     {
//       Stack: "Frontend/Design", //Insert stack or technology you have experience in
//       progressPercentage: "90%" //Insert relative proficiency in percentage
//     },
//     {
//       Stack: "Backend",
//       progressPercentage: "70%"
//     },
//     {
//       Stack: "Programming",
//       progressPercentage: "60%"
//     }
//   ],
//   displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
// };

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Engineering/Owner",
      company: "Nadohs Software LLC",
      companylogo: require("./assets/images/companies/nadohs_software.png"),
      date: "May 2021 – Present",
      desc: "Worked on large scale iOS podcast project (Skp'd) and flask backend (Python). Additionally worked on React-Native and chrome extension projects for clients.",
      descBullets: [
        "Built Skp’d Smart Podcast Player - (iOS App + Flask Backend) - AI powered podcast player.",
        "Built SteadFast Smart Task Board - (React Web App + Flask Backend) - LLM and vectorDB integrated project.",
        "Built Wholesale Tea Guide - (React-Native App + Firebase) - LLM and vectorDB integrated project.",
        "Built ColorBlinder - (iOS App, Core Image, SwiftUI) - Colorblindness simulator on realtime camera feed, export image comparisons. Uses Core Image and SwiftUI.",
        "Built GitKey - (iOS Keyboard Extension) - Keyboard extension for iOS that allows you to connect GitHub account and copy commit history time and comments to screen.",
      ]
    },
    {
      role: "Senor Software Engineer - Mobile Infrastructure",
      company: "LinkedIn",
      companylogo: require("./assets/images/companies/linkedin_logo.png"),
      date: "March 2017 – May 2021",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Developed and led migration of a Web-viewer library adopted across all LinkedIn iOS apps.",
        "Enhanced badging and deep-linking infrastructure; introduced a data-based strategy to optimize app store review requests. This led to an app rating boost from 4.1 to 4.4 in just a week.",
        "Implemented PKCE and single sign-on authentication through deep-linking.",
        "Collaborated on the migration of LinkedIn apps to a new in-house unified architecture based on clean architecture concepts.",
        "Conducted in-depth analyses comparing Swift and Obj-C in terms of build & indexing time, including the creation of tools and experiments.",
        "Authored and reviewed numerous RFCs, many as part of mobile-infra working group which I outlined and implemented procedures to enhance and optimize the working groups effectiveness.",
        "Organized and hosted the internal iOS meetup group, giving over 10 presentations on various topics.",
        "Mentored four engineers, offering guidance on RFC writing, code architecture, code reviews, and overall craftsmanship."
      ]
    },
    {
      role: "Lead iOS Engineer",
      company: "Propeller Labs",
      companylogo: require("./assets/images/companies/propeller.jpeg"),
      date: "Sep 2014 – Mar 2017",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Led a team of three iOS engineers at Propeller Labs, a web and mobile development consultancy.",
"Introduced and oversaw the code review process, standardized networking layer architecture, and played a pivotal role in the implementation of best practices and code style guidelines.",
"Oversaw the open-sourcing of four internal libraries to GitHub with full test coverage and CI/CD integration."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = 
{
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  // subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/projects/project1.png"),
      projectName: "Skp'd (iOS + Flask Backend) ",
      projectDesc: "Intelligent Podcast Player app with near-real time backend waypoint detection. Seemlessly skip passed the fluff content.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://apps.apple.com/us/app/skpd/id1589807665?platform=iphone"
        }
      ]
    },
    {
      image: require("./assets/images/projects/project2.png"),
      projectName: "GitKey",
      projectDesc: "A keyboard extension that connects to your GitHub account, to easily allow for copying commit activity for record keeping.",
      // footerLink: [
      //   {
      //     name: "Visit Website",
      //     url: "http://nextu.se/"
      //   }
      // ]
    },
    {
      image: require("./assets/images/projects/project3.png"),
      projectName: "Colorblinder",
      projectDesc: "Real time colorblind video filter overlay, with filtered image exportation features. Built with Core Image and SwiftUI.",
      // footerLink: [
      //   {
      //     name: "Visit Website",
      //     url: "http://nextu.se/"
      //   }
      // ]
    },
    {
      image: require("./assets/images/projects/project4.png"),
      projectName: "SteadFast (React Web App + Flask Backend)",
      projectDesc: "(In development) A task board application with context-aware LLM/VectorDB based AI subtask suggestions, context summaries based on project documents, and research helper.",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://steadfast.herokuapp.com/"
        }
      ]
    },
    {
      image: require("./assets/images/projects/project5.png"),
      projectName: "Wholesale Tea Guide - (React Web App)",
      projectDesc: "Created for a client to sell access to a digital database through subscriptions. Features include database lookup, user login, note-taking, and subscription integration.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://wholesale-tea-guide.herokuapp.com/"
        }
      ]
    },
    {
      image: require("./assets/images/projects/project6.png"),
      projectName: "Chrome Extensions - (JavaScript, CSS, HTML)",
      projectDesc: "Developed chrome extensions for clients for price monitoring, data scraping, and comparisons.",
      // footerLink: [
      //   {
      //     // name: "Visit Website",
      //     // url: "http://nextu.se/"
      //   }
      // ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    // {
    //   title: "PWA Web App Developer",
    //   subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
    //   image: require("./assets/images/pwaLogo.webp"),
    //   imageAlt: "PWA Logo",
    //   footerLink: [
    //     {name: "Certification", url: ""},
    //     {
    //       name: "Final Project",
    //       url: "https://pakistan-olx-1.firebaseapp.com/"
    //     }
    //   ]
    // }
    {
      image: require("./assets/images/projects/project2.png"),
      title: "GitKey",
      subtitle: "A keyboard extension that connects to your GitHub account, to easily allow for copying commit activity for record keeping.",
      footerLink: [
        {
          // name: "Visit Website",
          // url: "http://nextu.se/"
        }
      ]
    },
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  // subtitle:
  //   "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  // subtitle: emoji(
  //   "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  // ),

  talks: [
    {
      title: "Generic Table View Controllers",
      subtitle: "2017 Forward Swift Conference",
      slides_url: "https://www.youtube.com/watch?v=x-xtHXfBGTk&ab_channel=ForwardJS",
      event_url: "https://www.youtube.com/watch?v=x-xtHXfBGTk&ab_channel=ForwardJS"
    },
    {
      title: "Cast-Free Arithmetic in Swift",
      subtitle: "2015 - Realm Swift Meetup",
      slides_url: "https://academy.realm.io/posts/richard-fox-casting-swift-2/",
      event_url: "https://academy.realm.io/posts/richard-fox-casting-swift-2/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me"),
  subtitle:
    "Discuss a project or have a question? Feel free to reach out to me.",
  // number: "+14158796384",
  email_address: "fox.ios.dev@gmail.com"
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
