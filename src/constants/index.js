import {
    
    lola,
    bluemind,
    warg,
    stratum,
    web,
    mobile,
    backend,
    creator,
    link,
    jarvis,
    moneyflow,
    rtos,
    chatbot,
    weather,
    vaccum,
    rover,
    stick,
    gesture,
    canny,
    traffic
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Software Developer",
      icon: web,
    },
    {
      title: "AI/ML",
      icon: mobile,
    },
    {
      title: "Robotics",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const experiences = [
    {
      title: "Software Engineering Intern",
      company_name: "LOLA Social Technologies",
      icon: lola,
      iconBg: "#6debfb",
      date: "May 2022 - August 2022",
      points: [
        "Designed and developed 5 multi-use components using Figma and React Native to optimize user posting flow by 55%",
        "Refined components to track user interaction, store selected data, and regularly update state using global variables",
        "Optimized existing pages built in React Native and TS to build a 7-stage user posting flow with dynamic routing",
        "Improved user experience by adding responsive design for all devices, resulting in a 40% increase in user engagement",
      ],
    },
    {
      title: "Front End Developer Intern",
      company_name: "Bluemind.app",
      icon: bluemind,
      iconBg: "#E6DEDD",
      date: "January 2023 - April 2023",
      points: [
        "Developed more than 15+ user-friendly and responsive UI/UX features for a CRM software using MUI, React, and CSS",
        "Implemented 2FA using AWS Cognito for heightened security, resulting in a 25% reduction in security breaches",
        "Developed a precise speech-to-text recognition system using DeepSpeech for clients to take notes during meetings",
        "Integrated responsive help widget for streamlined site navigation, resulting in an increase in customer satisfaction",
        "Led a team in creating a reminder functionality resulting in a 70% increase in timely updates regarding clients",
      ],
    },
    {
      title: "Autonomy Developer",
      company_name: "Waterloo Aerial Robotics Group",
      icon: warg,
      iconBg: "#fff",
      date: "Apr 2023 - August 2023",
      points: [
        "Integrated an image classifier modal using TensorFlow and Keras for detecting and classifying up to 15+ objects",
        "Developed a convolutional neural network (CNN) image classifier using TensorFlow and Keras on the CIFAR-10 dataset",
        "Designed a CNN architecture with 3 convolutional layers, 1 dense hidden layer, and a softmax output layer",
        "Trained the CNN model using Adam optimizer for 15 epochs with a batch size of 128, achieving a test accuracy of 75%",
      ],
    },
    {
      title: "Front-end Developer",
      company_name: "Stratum AI",
      icon: stratum,
      iconBg: "#111",
      date: "Sep 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const projects = [
    {
      name: "Real Time Operating System",
      description: [
        "Using an STM32 I created a multi-threaded operating system supporting concurrent thread execution",
        "Implemented both cooperative and preemptive multitasking for versatile thread management",
        "Added a real-time capabilities such as thread argument passing and timeouts. Also efficient thread initialization and stack management",
        "Implemented Earliest Deadline First (EDF) scheduling for optimized task execution", ],
      tags: [
        {
          name: "C++",
          color: "blue-text-gradient",
        },
        {
          name: "STM32",
          color: "green-text-gradient",
        },
      ],
      image: rtos,
      source_code_link: "https://github.com/nrrpatel/OS-System",
      project_link: "https://github.com/nrrpatel/OS-System",
    },
    {
      name: "Jarvis Web Assistant",
      description: [
        "Developed and deployed a web assistant to help users with disabilities perform 65+ tasks using audio recognition",
        "Integrated speech synthesis and speech recognition to convert audio commands into more than 90+ unique actions",
        "Allocated timer, live battery status, live transcript and more than 10+ Rest-APIs to fulfill 85+% user requests",
        "Implemented computational intelligence features enabling it to provide answers for more than 25+ subjects",
      ],
      tags: [
        {
          name: "Javascript",
          color: "blue-text-gradient",
        },
        {
          name: "HTML",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind CSS",
          color: "pink-text-gradient",
        },
        {
          name: "REST Api",
          color: "red-text-gradient",
        },
      ],
      image: jarvis,
      source_code_link: "https://github.com/nrrpatel/Jarvis-Web",
      project_link:"https://jarvis-tech.netlify.app/",
    },
    {
      name: "MoneyFlow",
      description: [
        "Developed and deployed a web app using React and Redux that can be used to track daily expenses",
        "Implemented moment.js, to store the exact time an expense is added and updates as per the present date",
        "Equipped with local storage by parsing JSON data to view more than 20+ previously added expenses at any time",
        "Configured a search bar which uses an integrated query that allows you to search for any added expenses", ],
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Redux",
          color: "green-text-gradient",
        },
        {
          name: "SCSS",
          color: "pink-text-gradient",
        },
      ],
      image: moneyflow,
      source_code_link: "https://github.com/nrrpatel/MoneyFlow1",
      project_link: "https://moneyflows.netlify.app/",
    },
    {
      name: "AI Chatbot",
      description: [
        "Made with Discord.js and Node.js and integrated OpenAI API to create an intelligent GPT-3 discord chat bot",
        "Enhanced GPT-3 chat bot using OpenAI Playground to reluctantly answer questions with sarcastic responses",
        "Trained with more than 75+ scenarios allowing the bot to regularly configure itself to avoid repetitive responses", ],
      tags: [
        {
          name: "OpenAI",
          color: "blue-text-gradient",
        },
        {
          name: "Node.js",
          color: "green-text-gradient",
        },
        {
          name: "Discord.js",
          color: "pink-text-gradient",
        },
      ],
      image: chatbot,
      source_code_link: "https://www.youtube.com/watch?v=93RhkUudtEs",
      project_link: "https://www.youtube.com/watch?v=93RhkUudtEs",
    },
    // {
    //   name: "Weather App",
    //   description: [
    //     "The Weather App provides the user with the temperature, description of the weather, humidity and windspeed of over 10,000 cities with an accuracy of 97%",
    //     "Integrated Geolocation and OpenCage Geocoding API to provide the weather info based on the user’s current location as the app is launched",
    //     "Implemented React, HTML and CSS to display content  for a user-friendly interface. Generates images related to user input with the use of a Unsplash API", ],
    //   tags: [
    //     {
    //       name: "HTML",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "CSS",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "Javascript",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: weather,
    //   source_code_link: "https://github.com/nrrpatel/Nikunj-s-Weather-App",
    //   project_link: "https://nikunjpatelweather.netlify.app/",
    // },
  ];

  const robotic_projects = [
    {
      name: "VacuTron",
      description: [  
        "Built and coded an autonomous vacuum cleaner that can actively detect and navigate around 90% of household items.",
        "Utilized L239D to control 4 TT-motors based on ultrasonic readings improving turning and navigation precision by 75%.",
        "Pioneered a module by attaching an HC-SR04 to a servomotor to actively scan 180° in multiple directions.",
        "Combined 6+ algorithms on Arduino UNO using C++ that dynamically adjust its movements to avoid obstacles.",
      ],
      tags: [
        {
          name: "Arduino",
          color: "blue-text-gradient",
        },
        {
          name: "C++",
          color: "green-text-gradient",
        },
        {
          name: "RobotC",
          color: "pink-text-gradient",
        },
      ],
      image: vaccum,
      source_code_link: "https://www.linkedin.com/posts/nikunjpatel11_robotics-engineering-diy-activity-7059481721775263744-CDMg?utm_source=share&utm_medium=member_desktop",
      project_link: "https://www.linkedin.com/posts/nikunjpatel11_robotics-engineering-diy-activity-7059481721775263744-CDMg?utm_source=share&utm_medium=member_desktop",
    },
    {
      name: "RoverBot",
      description: [  // Change 'thing' to 'description'
        "Developed a smart Wi-Fi controlled camera rover with the use of ESP32 CAM that can be controlled via a web page.",
        "Configured a WebSocket server to communicate with the web page, receive input from the user and stream a live video feed.",
        "Utilized buttons on the webpage to control the car's direction with 5 actions such as UP, DOWN, LEFT, RIGHT, and STOP.",
        "Achieved a 50-meter Wi-Fi control range, enhancing car versatility and exploration capabilities.",
      ],
      tags: [
        {
          name: "ESP32 CAM",
          color: "blue-text-gradient",
        },
        {
          name: "C++",
          color: "green-text-gradient",
        },
        {
          name: "IoT",
          color: "pink-text-gradient",
        },
      ],
      image: rover,
      source_code_link: "https://github.com/nrrpatel/RoverBot/blob/main/RoverBot.cpp",
      project_link: "https://github.com/nrrpatel/RoverBot/blob/main/RoverBot.cpp",
    },
    {
      name: "iHelper Stick",
      description: [  // Change 'thing' to 'description'
        "Invented a smart stick to help the visually impaired get around their surroundings and explore safely.",
        "Equipped with an HC-SR04 to detect any nearby objects within 19cm and alert the individual using a buzzer.",
        "Optimized the system with an Arduino UNO 3 microcontroller board and powered the system with a 9V battery.",
      ],
      tags: [
        {
          name: "Ultrasonic sensor",
          color: "blue-text-gradient",
        },
        {
          name: "Arduino",
          color: "green-text-gradient",
        },
        {
          name: "C++",
          color: "pink-text-gradient",
        },
      ],
      image: stick,
      source_code_link: "https://www.linkedin.com/posts/nikunjpatel11_arduinoproject-activity-6969968517647396864-GnRo/?utm_source=share&utm_medium=member_desktop",
      project_link: "https://www.linkedin.com/posts/nikunjpatel11_arduinoproject-activity-6969968517647396864-GnRo/?utm_source=share&utm_medium=member_desktop",
    },
  ];

  const ai_projects = [
    {
      name: "Canny Edge Detector",
      description: [  
        "Engineered using Python, NumPy, and Matplotlib to detect cracks that can lead to structural failures in buildings and bridges.",
        "Employs Gaussian blurring, gradient computation, non-maximum suppression, double thresholding, and edge tracking by hysteresis for robust edge detection.",
        "Achieves an impressive 90% accuracy in identifying structural cracks in buildings and bridges.",
      ],
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Matplotlib",
          color: "green-text-gradient",
        },
        {
          name: "Numpy",
          color: "pink-text-gradient",
        },
      ],
      image: canny,
      source_code_link: "https://github.com/nrrpatel/CannyEdgeDetection",
      project_link: "https://github.com/nrrpatel/CannyEdgeDetection",
    },
    {
      name: "Car Counter",
      description: [  // Change 'thing' to 'description'
        "Developed a real-time Car Counting System to monitor traffic flow and congestion, enhancing traffic management and surveillance capabilities.",
        "Implemented OpenCV for precise and efficient bounding box detection around vehicles in video frames.",
        "Achieved a detection accuracy of over 95% using YOLO object detection.",
        "Successfully counted and tracked an average of 500 vehicles per hour in real-world traffic scenarios.",
      ],
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Object detection",
          color: "green-text-gradient",
        },
        {
          name: "OpenCV",
          color: "pink-text-gradient",
        },
        {
          name: "YOLO",
          color: "red-text-gradient",
        },
      ],
      image: traffic,
      source_code_link: "https://github.com/nrrpatel/OpenCV-and-YOLO/blob/master/Car-counter/Car-counter.py",
      project_link: "https://github.com/nrrpatel/OpenCV-and-YOLO/blob/master/Car-counter/Car-counter.py",
    },
    {
      name: "Gesture Volume Control",
      description: [  // Change 'thing' to 'description'
        "Innovated a hand gesture-based volume control system using Python, OpenCV, mediapipe and the PyCaw library.",
        "Executed live hand tracking using mediapipe to identify and detect fingertip positions with an accuracy of 75%.",
        "Measured the distance of the index and thumb fingertips to adjust the master volume using numpy and pycaw.",
      ],
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "OpenCV",
          color: "green-text-gradient",
        },
        {
          name: "mediapipe",
          color: "pink-text-gradient",
        },
        {
          name: "PyCaw",
          color: "red-text-gradient",
        },
      ],
      image: gesture,
      source_code_link: "https://github.com/nrrpatel/OpenCV-and-YOLO/blob/master/HandTracking/VolumeHandControlAdvanced.py",
      project_link: "https://www.linkedin.com/posts/nikunjpatel11_share-project-computervision-activity-7048625195577733121-OAKo?utm_source=share&utm_medium=member_desktop",
    },
  ];
  
  
  
  export { services, experiences, projects, robotic_projects, ai_projects};