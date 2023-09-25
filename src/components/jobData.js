// jobData.js

import superpe from "../assets/superpe.jpeg";
import vbb from "../assets/vbb.jpeg";

export const jobData = [
  {
    id: 1,
    company: "Superpe",
    role: "Software Developer Intern",
    location: "Bangalore, KN, India",
    duration: "July - December (2022)",
    logo: superpe,
    description: [
      "Developed and maintained 1 Android App(React Native) and 3 Web applications (<strong>React.JS</strong>) for fintech.",
      "Covered user onboarding, fraud detection (<strong>50% reduction</strong>) & UPI integration",
      "Collaborated with stakeholders during development processes to confirm creative proposals and design best practices using Figma",
      "Integrated APIs streamlining data exchange and improving overall project efficiency.",
      "Conducted routine updates, security patches & bug fixes to maintain the software stability"
    ]
  },
  {
    id: 2,
    company: "Village Book",
    role: "Automation Intern",
    location: "Mapleton, UT, USA",
    duration: "June – August (2021)",
    logo: vbb,
    description: [
      "Developed a Chrome extension that enabled real-time language translation during video calls utilizing Microsoft’s Azure translation services.",
      "Automated an agent to enter Google Meet and record the video with transcript, and save it in Google Drive"
    ]
  }
];
