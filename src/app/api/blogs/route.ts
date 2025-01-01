import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
  const url = new URL(req.url);
  const id = url.searchParams.get('id');

  if (id) {
    const product = blogPost.find((product) => product.id === parseInt(id));
    if (product) {
      return NextResponse.json(product);
    } 
  } else {
    return NextResponse.json(blogPost);
  }
};

interface BlogContent {
    heading: string;
    paragraph: string;
    image?: string; // Optional field for image
    heading1:string;
    paragraph1:string;
    subSections:subSections[];
    
  
  }
  interface  subSections{
    subHeading:string;
    paragraph:string;
  }
  
  interface BlogPost {
    id: number;
    title: string;
    author: string;
    date: string;
    content: BlogContent[];
  
  }
  
  
 const blogPost:BlogPost[] = [
    {
      id: 1,
      title: "Mastering JavaScript: The Key to Unlocking Web Development",
      author:" NOOR US SEHAR",
      date:" December 31, 2024",
      content: [
        {
          heading1: "Introduction",
          paragraph1: "JavaScript is the backbone of modern web development. Whether you're creating dynamic websites, complex web applications, or server-side applications, mastering JavaScript is crucial. In this blog, we'll dive deep into the fundamentals of JavaScript, its advanced features, and why it remains the most popular programming language for web development.",
          image: "/Mastering JavaScript.jpeg",
          heading: "",
          paragraph: "",
          subSections: []
        },
        {
          heading: "What is JavaScript?",
          paragraph: "JavaScript is a high-level, interpreted programming language that runs in the browser and is used to build interactive and dynamic web applications. Originally created to add simple interactivity to websites, JavaScript has evolved into a powerful language that can be used for front-end and back-end development. Today, JavaScript is used alongside HTML and CSS to create feature-rich web applications.",
          heading1: "",
          paragraph1: "",
          subSections: []
        },
        {
          heading: "The Core Concepts of JavaScript",
          subSections: [
            {
              subHeading: "1. Variables and Data Types",
              paragraph: "In JavaScript, variables are used to store data that can be referenced and manipulated. Understanding how to define and use variables is fundamental to mastering JavaScript. JavaScript supports a wide range of data types, including strings, numbers, booleans, arrays, and objects."
            },
            {
              subHeading: "2. Functions: The Building Blocks of Code",
              paragraph: "Functions are reusable blocks of code that perform specific tasks. Mastering functions is essential for writing modular, efficient JavaScript code. Functions in JavaScript can be declared in multiple ways, including function declarations, expressions, and arrow functions."
            },
            {
              subHeading: "3. Loops and Iteration",
              paragraph: "JavaScript offers several types of loops, including `for`, `while`, and `forEach`, that allow you to iterate over data and perform repetitive tasks. Mastering loops is essential for working with large datasets and creating interactive applications."
            },
            {
              subHeading: "4. Object-Oriented Programming (OOP)",
              paragraph: "JavaScript supports object-oriented programming, which allows you to organize and manage your code in an efficient and scalable way. OOP in JavaScript involves creating classes and objects, and it supports concepts like inheritance, encapsulation, and polymorphism."
            }
          ],
          paragraph: "",
          heading1: "",
          paragraph1: ""
        },
        {
          heading: "Advanced JavaScript Concepts",
          subSections: [
            {
              subHeading: "1. Asynchronous JavaScript",
              paragraph: "JavaScript is asynchronous by nature, which means that operations like HTTP requests, file reading, or timers do not block the execution of other code. Mastering asynchronous JavaScript, using techniques like callbacks, promises, and async/await, is crucial for building modern web applications."
            },
            {
              subHeading: "2. Closures and Scopes",
              paragraph: "Closures and scoping are important concepts in JavaScript that determine the visibility of variables and functions. Closures allow functions to access variables from their outer scope even after the outer function has returned, making them useful for tasks like data encapsulation and function factories."
            },
            {
              subHeading: "3. Error Handling and Debugging",
              paragraph: "JavaScript provides tools like `try/catch` blocks to handle errors gracefully. Mastering error handling and debugging techniques allows developers to write more resilient and bug-free applications. Understanding the `console` object and using browser developer tools effectively can also help troubleshoot and optimize code."
            },
            {
              subHeading: "4. ES6 and Beyond: Modern JavaScript Features",
              paragraph: "ES6 (ECMAScript 2015) introduced several new features to JavaScript, including arrow functions, template literals, destructuring, and the `let` and `const` keywords. Keeping up with the latest features of JavaScript ensures that you can write clean, efficient, and modern code."
            }
          ],
          paragraph: "",
          heading1: "",
          paragraph1: ""
        },
        {
          heading: "JavaScript Frameworks and Libraries",
          subSections: [
            {
              subHeading: "1. React: Building Dynamic UIs",
              paragraph: "React is a JavaScript library that allows developers to build fast, interactive user interfaces. React's component-based architecture makes it easy to manage complex UIs by breaking them down into smaller, reusable components. Understanding JavaScript thoroughly is essential to mastering React and taking full advantage of its features."
            },
            {
              subHeading: "2. Node.js: JavaScript on the Server",
              paragraph: "Node.js is a server-side JavaScript runtime that allows you to run JavaScript on the server. It uses non-blocking, event-driven I/O to handle a large number of simultaneous connections efficiently. Mastering Node.js opens up the possibility of full-stack JavaScript development."
            },
            {
              subHeading: "3. Vue.js and Angular: Alternatives to React",
              paragraph: "Vue.js and Angular are two other popular JavaScript frameworks used for building single-page applications. While React has gained more popularity in recent years, both Vue.js and Angular offer unique features and advantages for building large-scale web applications."
            }
          ],
          paragraph: "",
          heading1: "",
          paragraph1: ""
        },
        {
          heading: "Why Master JavaScript?",
          paragraph: "JavaScript is one of the most versatile and widely used programming languages. It is the core language for web development, enabling developers to create dynamic and interactive user experiences. By mastering JavaScript, you'll have the skills to work on both the front-end and back-end of web applications. Additionally, with the rise of JavaScript frameworks and libraries like React, Angular, and Node.js, JavaScript continues to evolve and remains the foundation of modern web development.",
          heading1: "",
          paragraph1: "",
          subSections: []
        },
        {
          heading: "Conclusion",
          paragraph: "Mastering JavaScript is a journey, but it's one that can significantly enhance your web development career. By understanding both the fundamentals and advanced concepts of JavaScript, you will be well-equipped to tackle any development challenge. Whether you're building interactive websites, complex applications, or server-side solutions, JavaScript is the key to unlocking your potential as a developer.",
          heading1: "",
          paragraph1: "",
          subSections: []
        }
      ]
    }
    
    
    ,
      {
          id : 2,
        title: "Understanding React",
        author: "NOOR US SEHAR",
        date: "December 31, 2024",
        content: [
          {
            heading1: "Introduction",
            paragraph1: "React is a powerful JavaScript library used for building user interfaces, particularly single-page applications where the content dynamically updates as the user interacts with the app. React was developed by Facebook in 2011 and is now one of the most widely used tools in modern web development. In this blog post, we'll explore the core concepts of React, its features, and why it has become a favorite among developers.",
            image: "/react.jpeg",
            heading: "",
            paragraph: "",
            subSections: []
          },
          {
            heading: "What is React?",
  
            paragraph: "At its core, React is a JavaScript library for building user interfaces. It allows developers to create large, complex applications that can change data without reloading the page. React focuses on the view layer of the application (in the Model-View-Controller architecture), allowing developers to design simple views for each state of the application. React's declarative approach makes it easy to create interactive UIs by updating the view automatically when data changes.",
            heading1: "",
            paragraph1: "",
            subSections: []
          },
          {
            heading: "Key Features of React",
            subSections: [
              {
                subHeading: "1. Virtual DOM",
                paragraph: "One of React's most significant features is its Virtual DOM. The Virtual DOM is a lightweight copy of the real DOM (Document Object Model) that React uses to optimize the process of updating the UI. Instead of directly manipulating the real DOM, React creates a virtual representation of the DOM and updates only the parts that have changed. This approach improves performance, making React apps fast and responsive."
              },
              {
                subHeading: "2. JSX (JavaScript XML)",
                paragraph: "JSX is a syntax extension for JavaScript that allows developers to write HTML-like code within JavaScript. JSX is then transformed into JavaScript code by React's build tools, making it easier to create and manage components. Although JSX may look like HTML, it is actually closer to JavaScript, providing a more intuitive way to build user interfaces."
              },
              {
                subHeading: "3. Components",
                paragraph: "React applications are built using components, which are independent, reusable pieces of code that represent parts of the user interface. Components can be nested, updated, and managed independently. There are two types of components in React: class components and functional components. Functional components have become the standard due to the introduction of React Hooks."
              },
              {
                subHeading: "4. React Hooks",
                paragraph: "React Hooks are functions that allow developers to use state and other React features in functional components. Before hooks, state management was only possible in class components. Hooks provide a more concise and efficient way to manage state, handle side effects, and perform other common tasks in React applications."
              }
            ],
            paragraph: "",
            heading1: "",
            paragraph1: ""
          },
          {
            heading: "How React Works",
            paragraph: "React works by breaking down the user interface into small, reusable components that each manage their own state. When the state of a component changes, React updates the Virtual DOM and then updates the real DOM to reflect those changes. This process of updating the DOM is efficient and ensures that the user interface remains responsive. React's one-way data flow makes it easy to track the state of each component and understand how data flows through the application.",
            heading1: "",
            paragraph1: "",
            subSections: []
          },
          {
            heading: "Popular React Tools and Libraries",
            subSections: [
              {
                subHeading: "1. React Router",
                paragraph: "React Router is a library that allows developers to implement navigation in React applications. It enables the creation of single-page applications with multiple views by managing the browser history and rendering the correct components based on the URL."
              },
              {
                subHeading: "2. Redux",
                paragraph: "Redux is a state management library commonly used with React. It allows developers to manage global state across an entire application in a predictable way. With Redux, developers can store the app's state in a single JavaScript object, making it easier to track and manage state changes, especially in complex applications."
              },
              {
                subHeading: "3. Styled-components",
                paragraph: "Styled-components is a library that allows developers to write CSS in JavaScript. It enables the creation of component-level styles, promoting a more modular approach to styling in React applications. Styled-components use tagged template literals to define CSS styles inside JavaScript code, making it easier to manage and apply styles dynamically."
              },
              {
                subHeading: "4. Next.js",
                paragraph: "Next.js is a popular framework built on top of React that enables server-side rendering and static site generation. It simplifies the process of building React applications that are optimized for performance and SEO. With features like automatic code splitting, server-side rendering, and API routes, Next.js makes it easier to build production-ready React applications."
              }
            ],
            paragraph: "",
            heading1: "",
            paragraph1: ""
          },
          {
            heading: "Conclusion",
            paragraph: "React has become one of the most popular tools in modern web development due to its flexibility, performance, and ease of use. Its component-based architecture and powerful features, like the Virtual DOM and React Hooks, make it an excellent choice for building dynamic user interfaces. Whether you're building a small project or a large-scale application, React provides the tools and ecosystem to help you succeed. As the React community continues to grow, the future of React looks incredibly bright, and developers will continue to benefit from its ongoing improvements and innovations.",
            heading1: "",
            paragraph1: "",
            subSections: []
          }
        ],
      },
      {
          id :3,
        title: "The Future of Web Development",
        author: "NOOR US SEHAR",
        date: "December 31, 2024",
        content: [
          {
            heading1: "Introduction",
            paragraph1: "The future of web development is both exciting and unpredictable. Over the past few decades, we've seen a massive shift in how websites and web applications are built, deployed, and consumed. With the continuous advancement of technologies, web development is rapidly evolving to meet the demands of modern users. From high-performance applications to more interactive and immersive user experiences, we’re seeing a significant shift in the tools and techniques used. In this blog post, we will explore several cutting-edge trends and technologies that are shaping the future of web development.",
            image: "/web.jpeg",
            heading: "",
            paragraph: "",
            subSections: []
          },
          {
            heading: "1. Progressive Web Apps (PWAs)",
            paragraph: "Progressive Web Apps (PWAs) are among the most revolutionary changes in web development. PWAs combine the best features of web and mobile applications. Unlike traditional web apps, PWAs can be installed on a user's device and work offline, allowing for a more native-like experience. They can send push notifications, load quickly even in bad network conditions, and be added to the home screen, eliminating the need to download apps from stores. As more businesses shift towards a mobile-first approach, PWAs are expected to dominate the mobile web landscape, offering a faster, more reliable experience without the need for multiple app versions.",
            heading1: "",
            paragraph1: "",
            subSections: []
          },
          {
            heading: "2. Single Page Applications (SPAs)",
            paragraph: "Single Page Applications (SPAs) have gained tremendous popularity in recent years due to their ability to deliver a seamless and fast user experience. SPAs load a single HTML page and dynamically update content as the user interacts with the app, eliminating the need to reload the entire page. This creates a smoother, more responsive experience similar to native apps. Frameworks like React, Angular, and Vue.js have made building SPAs easier, and their adoption continues to rise. As web browsers continue to improve their performance and capabilities, SPAs will continue to be the standard for most interactive web applications, from social media platforms to enterprise-level solutions.",
            heading1: "",
            paragraph1: "",
            subSections: []
          },
          {
            heading: "3. Artificial Intelligence and Machine Learning in Web Development",
            paragraph: "Artificial Intelligence (AI) and Machine Learning (ML) are increasingly influencing the development of web applications. In the future, AI will play an even more significant role in web development. From personalized content recommendations to automated customer service through chatbots, AI is transforming user experiences on the web. For example, AI-driven tools can optimize site performance, predict user behavior, automate testing, and even write portions of code. Machine Learning is also being used to analyze user data and make real-time adjustments to user interfaces for better engagement. As these technologies mature, we can expect even deeper integrations with web applications, creating more intelligent and responsive web experiences.",
            heading1: "",
            paragraph1: "",
            subSections: []
          },
          {
            heading: "4. WebAssembly (Wasm) Revolutionizing Performance",
            paragraph: "WebAssembly (Wasm) is a groundbreaking technology that enables developers to run code written in languages like C, C++, and Rust in the browser, providing near-native performance. Wasm opens up new possibilities for web applications, particularly in areas that require heavy computational power, such as gaming, video editing, and scientific simulations. It allows these complex tasks to be done in the browser without needing plugins or native applications. As Wasm adoption grows, web developers will be able to build powerful applications directly in the browser, without compromising on performance. This will significantly change how we build high-performance web apps in the future.",
            heading1: "",
            paragraph1: "",
            subSections: []
          },
          {
            heading: "5. Serverless Architecture: Simplifying Backend Development",
            paragraph: "Serverless architecture has revolutionized how backend systems are built and scaled. In a serverless model, developers don't need to manage the underlying infrastructure or servers; instead, cloud providers like AWS, Google Cloud, and Azure handle server management. Serverless functions allow developers to focus on writing code for specific tasks or events without worrying about server maintenance or scaling. Serverless computing reduces the need for over-provisioning resources and can lead to cost savings. As serverless solutions continue to evolve, they will become more powerful and accessible, enabling developers to create more efficient and scalable applications with minimal overhead.",
            heading1: "",
            paragraph1: "",
            subSections: []
          },
          {
            heading: "6. Motion UI and Interactive Web Design",
            paragraph: "As the web becomes more visually oriented, Motion UI has emerged as a critical trend in modern web development. Motion UI allows developers to create animations and transitions that enhance the user experience, making websites feel more dynamic and engaging. Interactive elements like hover effects, transitions between pages, and micro-interactions can provide instant feedback and guide the user through the interface. As users become more accustomed to rich, interactive experiences, Motion UI will play a key role in shaping web design. Furthermore, it will enable developers to build websites that are not just functional but delightful to interact with.",
            heading1: "",
            paragraph1: "",
            subSections: []
          },
          {
            heading: "7. Low-Code and No-Code Development Platforms",
            paragraph: "Low-code and no-code development platforms are transforming the way web applications are built. These platforms allow individuals without a deep programming background to create applications using visual interfaces and pre-built templates. By simplifying the development process, these tools are empowering more people to become creators and builders, accelerating the development of web applications. As these platforms become more advanced, they will allow developers to create complex applications more quickly. While they won’t replace traditional coding, they will complement web development by making it accessible to a broader audience.",
            heading1: "",
            paragraph1: "",
            subSections: []
          },
          {
            heading: "8. The Rise of Voice Search and Voice User Interfaces (VUIs)",
            paragraph: "As voice assistants like Amazon Alexa, Google Assistant, and Apple's Siri gain popularity, voice search and Voice User Interfaces (VUIs) are becoming increasingly important in web development. Voice search allows users to interact with websites and applications by speaking instead of typing, providing a more natural and convenient experience. Developers will need to design websites that are optimized for voice search, ensuring that they rank well in voice search results. Additionally, VUIs will allow users to interact with applications through voice commands, making web applications more accessible, particularly for people with disabilities or those on the go.",
            heading1: "",
            paragraph1: "",
            subSections: []
          },
          {
            heading: "9. Enhanced Security Features",
            paragraph: "As cyber threats continue to evolve, the future of web development will need to prioritize security. With data breaches becoming more common and sophisticated, developers will need to focus on building secure applications that protect user data. Web security trends include stronger encryption protocols, multi-factor authentication (MFA), and the use of WebAuthn for biometric logins. Additionally, secure coding practices and regular security audits will become more crucial. As web developers, it will be essential to stay ahead of potential security threats and implement the best practices to safeguard applications and users.",
            heading1: "",
            paragraph1: "",
            subSections: []
          },
          {
            heading: "10. The Web3 Movement and Decentralization",
            paragraph: "Web3 is the new era of the internet, driven by decentralized technologies like blockchain. Web3 aims to give users more control over their data and online identities, allowing them to engage with digital services without relying on centralized authorities. As decentralized applications (dApps) become more prevalent, web developers will need to understand blockchain technologies and how to integrate them into web applications. The Web3 movement promises to reshape the way we think about digital ownership, privacy, and security, ushering in a new wave of web development that focuses on user empowerment and decentralization.",
            heading1: "",
            paragraph1: "",
            subSections: []
          },
          {
            heading: "Conclusion",
            paragraph: "The future of web development is full of exciting possibilities. New technologies are emerging at a rapid pace, enabling developers to create more powerful, interactive, and secure web applications. From Progressive Web Apps and Single Page Applications to Artificial Intelligence and WebAssembly, the next generation of web development will be faster, smarter, and more efficient. As a developer, staying informed about these trends and continuously learning new skills will be crucial to building the next wave of web applications. The future is bright, and the best is yet to come.",
            heading1: "",
            paragraph1: "",
            subSections: []
          }
        ],
      }
  
  
    ];
    
  
    
   
    
    