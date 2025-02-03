// contentData.ts
import webDevelopmentImage from "../../assets/web.jpg";
import networkSolutionImage from "../../assets/network.jpg";
import aiIntegrationImage from "../../assets/ai.jpg";
import cybersecurityImage from "../../assets/cyber.jpg";


interface Heading {
    heading: string;
    paragraph: string;
  
  }

 interface ContentData {
    title: string;
    description?: string;
    details: string[];
    image: string;
    additionalParagraph: string;
    extraContent: string;
    newHeading?: string;
    newParagraph?: string;
    additionalHeadings: Heading[];
    
  }


export const contentData: Record<string, ContentData> = {
  services: {
    title: "System & Software Solutions",
    details: [
      "Custom Web Development (Responsive, Dynamic, and Scalable)",
      "E-commerce Solutions (Online Store Setup & Management)",
      "Content Management Systems (WordPress, Joomla, etc.)",
      "Web Application Development (Custom Web Apps)",
      "Website Maintenance & Support Services",
      "UI/UX Design and Prototyping",
      "Mobile-Friendly Design and Development",
      "Website Hosting and Server Management Services",
    ],
    image: webDevelopmentImage,
    additionalParagraph:
      "At Taphubs, we create custom web solutions tailored to your business needs, optimizing performance and reducing downtime. Whether building from scratch or improving an existing site, we ensure a solution that fits your requirements.",
    extraContent: `IBM Watson Customer Engagement and IBM Watson Supply Chain are powerful AI-driven solutions designed to address key business challenges across industries.

      IBM Watson Supply Chain offerings help the enterprise solve B2B Collaboration, Supply Chain Optimization, and Order Management & Fulfillment problems across the enterprise.`,

    newHeading: "Power Systems solutions",
    newParagraph:
      "IBM Power Solutions are designed to help your business to meet their critical needs in any scenario, so you stay operational and profitable around the clock. It gives you high availability to your systems whenever you need it and centrally managed control of your security and compliance so that you can respond quickly and decisively to any threat. All within a hybrid cloud environment built to stay ahead of the modern data demands of the business world.",

   additionalHeadings: [
  {
    heading: "Multi-cloud Solutions",
    paragraph: 
      "Our Power Systems are specifically designed to handle large-scale data influxes and the most complex workloads, ensuring that your business data stays secure across various locations.",
  },

  {
    heading: "Taphubs Power Systems Software",
    paragraph:
      "Taphubs Power Systems Software ensures the continuous availability of your data worldwide, supporting year-round business operations with robust disaster recovery capabilities.",
  },

  {
    heading: "The Taphubs POWER9 Processor",
    paragraph:
      "We leverage the high-performance capabilities of the POWER9 processor within a hybrid cloud framework, empowering businesses to efficiently handle critical workloads across both public and private cloud environments.",
  },

  {
    heading: "Enhancing the Power of Your Data",
    paragraph:
      "Taphubs Power Systems supports SAP HANA, an advanced in-memory platform that turns your data into actionable insights, allowing businesses to respond instantly and innovate faster.",
  },

  {
    heading: "Smart Data with AI Integration",
    paragraph:
      "Taphubs' Power Systems for AI unlock the full potential of your business data by providing advanced analytics that drive smarter decision-making, deeper insights, and build customer trust.",
  },

  {
    heading: "Optimizing Performance with Taphubs Power Systems for Oracle",
    paragraph:
      "Our Power Systems are built to deliver exceptional performance for Oracle workloads, with a hardware utilization guarantee to ensure optimal efficiency.",
  },

  {
    heading: "Tailored Embedded Solution Agreements",
    paragraph:
      "Our Embedded Solution Agreements offer an easy, flexible approach to integrating the Taphubs Power Systems portfolio with your business operations.",
  },

  {
    heading: "Taphubs Z Solutions",
    paragraph:
      "Taphubs Z solutions drive innovation within the digital economy, offering a trusted platform to perform high-speed operations, meet demanding customer expectations, and provide advanced security with compliance across multiple regulations.",
  },

  {
    heading: "Advanced Analytics & Machine Learning",
    paragraph:
      "Harness the power of IBM's advanced analytics combined with machine learning to transform your data, allowing for comprehensive data cleansing, model building, and predictive insights.",
  },

  {
    heading: "Revolutionizing Blockchain Technology",
    paragraph:
      "Taphubs Blockchain platform gives you the ability to securely store data locally while providing scalability and performance found in the IBM Cloud, ensuring full compliance with corporate policies and regulations.",
  },

  {
    heading: "Hybrid Cloud Solutions for Your Business",
    paragraph:
      "Unlock the potential of hybrid cloud with Taphubs, where we deliver strategic value through a fully encrypted IBM Z platform, ensuring that your sensitive data remains safe.",
  },

  {
    heading: "Driving Continuous Innovation with DevOps",
    paragraph:
      "Taphubs' DevOps framework enables continuous innovation without compromising day-to-day business operations, making sure your team can scale effortlessly.",
  },

  {
    heading: "Operate with Complete Confidence",
    paragraph:
      "With Taphubs Z, businesses can maintain the perfect balance between agility and security, ensuring that compliance with the latest regulations doesn’t hinder your competitive edge.",
  },

  {
    heading: "Boost Your Security to the Next Level",
    paragraph:
      "Protect your data with end-to-end encryption and secure service container technology, reducing security risks and ensuring full data integrity.",
  },

  {
    heading: "A Smarter Way to Safeguard Your Data",
    paragraph:
      "With Taphubs' Z platform, you can encrypt all of your sensitive data, reducing the risk of breaches by up to 95% and ensuring that your business remains secure from internal and external threats.",
  },

  {
    heading: "Taphubs LinuxONE Solutions",
    paragraph:
      "Combining the best open-source software with Taphubs' powerful LinuxONE system, we provide a secure, reliable infrastructure that supports a wide variety of workloads with high availability and scalability.",
  },

  {
    heading: "Empowering Your Business with LinuxONE",
    paragraph:
      "With unmatched operational efficiency, Taphubs LinuxONE provides the ideal Linux platform for any scale of workload, delivering a safe and reliable infrastructure on a single physical server.",
  },

  {
    heading: "Next-Gen Storage Solutions with Taphubs",
    paragraph:
      "In today’s fast-paced business environment, leveraging your data is essential. Taphubs provides multicloud-enabled storage infrastructures that convert data overload into a competitive advantage, supporting next-gen workloads.",
  },

  {
    heading: "Accelerate Your Data Management with Taphubs Flash Storage",
    paragraph:
      "Taphubs Flash Storage systems enable companies to adjust prices, optimize inventory, prevent fraud, and make data-driven decisions faster with micro-latency performance.",
  },

  {
    heading: "Enterprise-Class Storage Solutions from Taphubs",
    paragraph:
      "Taphubs’ Enterprise Storage solutions offer superior performance, secure data transactions, and rapid availability, providing a trusted and scalable package for all your data needs.",
  },

  {
    heading: "Reliable Data Backup Solutions from Taphubs",
    paragraph:
      "Taphubs' tape storage solutions provide secure and cost-effective options for backing up your critical business data.",
  },

  {
    heading: "Streamline Your Data Management with Software Defined Storage (SDS)",
    paragraph:
      "With Taphubs SDS, you can improve data management, protection, and storage efficiency, leveraging IBM Cloud Object Storage to offer flexible access and scalability.",
  },

  {
    heading: "Taphubs System Solution Support",
    paragraph:
      "Taphubs understands the importance of technical support, offering a range of services and expert support to ensure the long-term success of your IBM-based systems.",
  },

  {
    heading: "Taphubs System Solution Services",
    paragraph:
      "We offer comprehensive services including Hypervisor/OS support for IBM Power and Z platforms, along with SDS solutions and data center optimization.",
  },

  {
    heading: "Value Added Services at Taphubs",
    paragraph:
      "Our value-added services help clients reduce costs, manage assets efficiently, and support ongoing business needs through IBM Systems Solutions and Services.",
  },

  {
    heading: "IBM Software Solutions by Taphubs",
    paragraph:
      "Taphubs leverages IBM Software Group's latest industry solutions to help businesses innovate, adapt, and control costs while maximizing their existing resources.",
  },

  {
    heading: "IBM Cloud and Cognitive Software Solutions",
    paragraph:
      "Taphubs delivers tailored cloud solutions that align with your unique workloads, optimizing your cloud journey and enabling scalable success.",
  },

  {
    heading: "Unlock Data Potential with Taphubs and AI",
    paragraph:
      "Taphubs is dedicated to helping our clients unlock the true value of their data, accelerating their path to AI-powered insights and solutions.",
  },

  {
    heading: "IBM Cloud Pak for Data with Taphubs",
    paragraph:
      "Taphubs uses IBM Cloud Pak for Data to unlock valuable insights from data across a unified, cloud-native platform, empowering businesses to innovate faster and smarter.",
  },

  {
    heading: "IBM Cloud Pak for Applications",
    paragraph:
      "Accelerate app development with Taphubs' IBM Cloud Pak for Applications, a solution built for Kubernetes to enhance agility and streamline development processes.",
  },

  {
    heading: "IBM Cloud Pak for Automation by Taphubs",
    paragraph:
      "Taphubs provides IBM Cloud Pak for Automation to help automate business processes, improving efficiency and reducing operational overhead.",
  },

  {
    heading: "IBM Cloud Pak for Integration",
    paragraph:
      "Taphubs enables seamless integration across various cloud environments with IBM Cloud Pak for Integration, connecting data and services across multiple clouds.",
  },

  {
    heading: "Manage Multi-cloud Environments with IBM Cloud Pak",
    paragraph:
      "Our IBM Cloud Pak for Multi-cloud Management simplifies the operational challenges of managing VM and Kubernetes-based applications, offering unified control across public and private clouds.",
  },

  {
    heading: "Empowering IoT with IBM Watson IoT Platform",
    paragraph:
      "Taphubs unlocks the full potential of IoT data through IBM Watson IoT, enabling businesses to gain actionable insights and improve their connected devices with advanced analytics.",
  },

  {
    heading: "IBM Watson IoT: Transforming Industry",
    paragraph:
      "IBM’s Watson IoT Platform enables businesses to gain value from IoT devices, turning data into valuable insights for smarter decision-making and enhanced customer experiences.",
  },

  {
    heading: "Maximo Enterprise Asset Management by IBM",
    paragraph:
      "Maximo from IBM provides a unified platform for asset lifecycle management, optimizing maintenance and management across the enterprise.",
  },

  {
    heading: "TRIRIGA IWMS: A Comprehensive Solution",
    paragraph:
      "IBM’s TRIRIGA solution offers a comprehensive platform for lifecycle management of facilities and real estate, helping businesses optimize space utilization and reduce operational costs.",
  },

  {
    heading: "Building Smarter with TRIRIGA Insights",
    paragraph:
      "TRIRIGA Building Insights uses machine learning to predict anomalies and improve efficiency in building operations, helping businesses achieve better resource management.",
  },

  {
    heading: "IBM Engineering Lifecycle Management",
    paragraph:
      "IBM Engineering Lifecycle Management (ELM) offers an integrated suite of tools and practices that enable businesses to streamline product development and manage complex engineering processes.",
  },

  {
    heading: "IBM Watson Supply Chain Insights",
    paragraph:
      "IBM Watson Supply Chain Insights provides deep visibility into supply chain operations, helping businesses optimize B2B collaboration and address challenges in order management and fulfillment.",
  },

  {
    heading: "IBM Watson Talent Solutions by Taphubs",
    paragraph:
      "Taphubs leverages IBM Watson Talent Solutions to improve talent acquisition and development, using AI-powered tools for recruitment, coaching, and employee assessments.",
  },

  {
    heading: "IBM Blockchain for Secure Business",
    paragraph:
      "With IBM Blockchain, Taphubs helps businesses unlock the full potential of blockchain technology, delivering secure, scalable, and trusted solutions for a wide range of business needs.",
  },

  {
    heading: "Cloud Services with Taphubs",
    paragraph:
      "Taphubs provides expert guidance and managed services to help businesses transition to the cloud, offering customized solutions that add value to your business.",
  },

  {
    heading: "E-Business and Portal Services",
    paragraph:
      "We offer end-to-end services for application architecture, performance tuning, and portal development. Our team has delivered award-winning portals for clients such as the Shoura Council and Saudi e-Gov.",
  },

  {
    heading: "Taphubs Chatbot Solutions",
    paragraph:
      "Enhance your customer experience with Taphubs' AI-powered chatbot solutions, built on IBM’s Watson Assistant. These bots streamline communication, improve efficiency, and reduce operational costs.",
  },
],

  },

  solutions: {
    title: "Business Technology Solutions",
    details: [
      "Enterprise Resources Planning",
      "Customer Resources Management",
      "Content Management Portals",
      "Infrastructure and Systems Management Services",
      "Robotics Process Automation",
      "System Integration",
    ],
    image: networkSolutionImage,
    additionalParagraph:
      "We deliver world-class solutions for blue-chip companies across every sector in the Kingdom, including telecoms, banking, defense, manufacturing, and top government levels.",
    extraContent:
      "The reason our clients choose to work with Taphubs is our proven track record in maximizing value and our reputation for driving digital excellence. Our experienced team will embed itself in your business to help you outshine competitors and boost your bottom line.",

    newHeading: "We deliver success. Let us help you realize the potential of your business today.",
    newParagraph:
      "At Taphubs, we pride ourselves on delivering world-class customer service, led by an international team of elite experts with deep knowledge of business processes across every sector. With decades of international experience, we've combined global insights with local expertise in the Saudi business landscape to create one of the most advanced tech teams in the world.",

    additionalHeadings: [
      {
        heading: "Blockchain Technology",
        paragraph:
          "IOT & Smart Solutions, Big Data, BI & Analytics, Cognitive Analytics, AI, and Machine Learning",
      },

      {
        heading: "Cloud Enablement & Mobility Team",
        paragraph:
          "We know that realizing the potential of cloud technology is at the top of your agenda. We help clients grow more agile with leading cloud services. Our skilled consultants will help you transition to a new agile way of storing data with the best insights and technology. We are passionate about delivering a seamless end-user experience and achieving the best results for our clients.",
      },

      {
        heading: "Strategic Business Management",
        paragraph:
          "Our Strategic Business Management team brings together our expertise in business consultancy and powerful IT solutions from world-leading partners. Our partnerships with top technology companies open the gateway to world-class expertise, insights, and infrastructure to maximize the value of your business.",
      },

      {
        heading: "Business Consulting",
        paragraph:
          "Strategic planning services (Vision, Mission, and Values development). Build Governance Offices (VRO, SMO, PfMO). Key Performance Indicators consultations and designing dashboards. Information Lifecycle Management.",
      },

      {
        heading: "Business Process Consulting",
        paragraph:
          "Business process engineering, ITSM process engineering, Business Continuity routines.",
      },

      {
        heading: "Compliance and Risk Management",
        paragraph:
          "Risk Management Assessments, Services Roadmap development, ISO Consultations, and certifications.",
      },

      {
        heading: "Quality Assurance",
        paragraph:
          "Managing the full test lifecycle (Functional/Non-Functional Testing), assessing Customer Experience for IT Services, building Roadmaps for Agile ITSM/DevOps environments transformation, End-to-End Quality Assurance Solutions Consulting and building.",
      },

      {
        heading: "Strategic Outsourcing",
        paragraph:
          "IT professionals outsourcing, Business professionals outsourcing.",
      },

      {
        heading: "Managed Services",
        paragraph:
          "IT Service Management, Plan, and Deliver.",
      },

      {
        heading: "Talent Development & Education",
        paragraph:
          "Professional Training, Tailored Training, and Tailored Development Programs to achieve specific business objectives.",
      },

    ],
  },

  security: {
    title: "Cyber Security Solutions",

    details: [
      "Firewalls",
      "IPS",
      "Mail Gateway",
      "Web Filtering",
      "Web Application Firewall",
      "Wireless Security",
      "Network Access Control",
    ],
    image: aiIntegrationImage,
    additionalParagraph:
      "At Taphubs, we understand that cybersecurity is a critical priority for your business in today’s digital world.",
    extraContent:
      "Taphubs has built a dedicated cybersecurity unit with top-tier technology experts across the Kingdom. We offer a comprehensive range of cybersecurity solutions designed to protect your business’s most valuable assets from emerging security threats and vulnerabilities. Our digital defense strategies combine unparalleled technical expertise with state-of-the-art security architecture to safeguard your business.",

    newHeading: "",
    newParagraph:
      "Our vision is clear and effective: we aim to provide the highest level of security for your data while ensuring that your business operates seamlessly and efficiently. Our goal is to help you stay secure, safe, and successful in an ever-evolving digital landscape.",

    additionalHeadings: [
      {
        heading: "Security Intelligence",
        paragraph:
          "We provide robust security intelligence collection, analysis, and sharing through customer portals, data feeds, multi-level briefs, and dedicated security intelligence services.",
      },

      {
        heading: "Managed Security Services",
        paragraph:
          "Our comprehensive 24/7 security monitoring and log management offer businesses a 360-degree view of exposures, incidents, and threats, ensuring proactive defense and response.",
      },

      {
        heading: "Advanced Threat Protection",
        paragraph:
          "Advanced threat protection allows for an intelligent response to complex security threats across your organization, minimizing potential risks.",
      },

      {
        heading: "Incident Response",
        paragraph:
          "We provide advanced incident response and forensic support, giving your business immediate access to critical expertise and resources to handle security incidents.",
      },

      {
        heading: "Building A Secure Infrastructure",
        paragraph:
          "Our primary goal is to fortify your business’s digital infrastructure against modern cybersecurity threats. With our world-class security solutions, we help protect your valuable assets and sensitive information.",
      },

      {
        heading: "ATPC: Managing Your Security 365 Days a Year",
        paragraph:
          "ATPC operates around the clock. Our cutting-edge Security Operations Center continually monitors and manages your security technologies, ensuring ongoing assessment and defense against security threats. We strive to maximize efficiency, reduce costs, and strengthen your cybersecurity posture.",
      },

      {
        heading: "Our Managed Security Services Cover",
        paragraph:
          "Taphubs offers expert consultancy to address your dynamic security requirements. Our consultants embed directly within your business to provide an in-depth analysis of your organization’s security. They collaborate closely with you to keep your business secure, compliant, and recommend the most effective solutions tailored to your unique needs.",
      },
    ],
  },


  network: {
    title: "Infrastructure Networking Technology",
    details: [
      "The software-defined wide-area network (SD-WAN)",
      "Collaboration Solutions",
      "Switching and Routing",
      "Networking Strategy & Optimization Services",
      "Network Integration & Deployment Services",
      "Network Managed Services",
      "High Speed Network",
      "Internet of Things",
      "Transmission & Optical Network solutions",
      "Converged Communications Services",
      "Video Conference, Digital Signage, & IPTV",
      "Mobility & Wireless Solutions",
      "Network Health Check and Audit Study",
    ],
    image: cybersecurityImage,
    additionalParagraph:
      "How can you operate a successful business without a solid foundation? Our Infrastructure & Networking Technology (INT) team develops end-to-end solutions to build a robust framework for our clients’ businesses. This encompasses everything from architecture design right through to project implementation and managed services.",
    extraContent:
      "We begin by taking a step back to examine the wider business environment you are trading in. We listen to your challenges and build a detailed picture of your unique needs. We take a deep dive into your operational efficiency and evaluate how successful your current infrastructure is in delivering return on investment. We test the resilience of your systems and appliances against potential threats and look for weaknesses in data availability. We then couple these insights with intelligent networking and connectivity solutions to restructure the digital foundation of your business.",

    newHeading: "",
    newParagraph:
      "We give you full control of your infrastructure and provide in-depth training to help you understand how to maximize the value of your assets and the most effective ways of operating them.",

    additionalHeadings: [
        {
            heading: "Our Infrastructure Solutions",
            paragraph: "Data Centers Preparation, power, cooling and racks, Data Center Infrastructure Management (DCIM), Intelligent Data Center Enablement, Turnkey MEP works, Testing and certifying data centers (Data Center All Tier (Uptime), IT infrastructure availability and resilience (part of Business Continuity),Health check and data center gap analysis),  Maintenance and Managed services for data centers and command centers.",
          },
    
          {
            heading: "Our Audiovisual Services:",
            paragraph: "E-learning solutions, Video walls, Auditoriums, Preparation of digital meeting rooms Display systems, Public address systems, Command and control centers preparation (including NOC and SOC) ",
          },
    
          {
            heading: "Integrated Security Systems including:",
            paragraph: "Perimeter Fence (HCIS Class 1, 2, 3, 4 & 5) and Crash Rated Anti- Vehicle Barrier, Physical Security Equipment (Road Blockers, Arm Barriers, Turnstiles, Bollards...)., Screening & Searching Equipment (Explosive Detectors, Baggage Scanner, Metal Detectors, Walk-through Detectors, UVIS, ANPR...), Intrusion Detection & Assessment System (IDAS) including Volumetric Sensors (Microwave) & Fence Mounted Fiber Sensors., Long Range Detection & Assessment Systems (LRDAS) including Long ",
          },

          {
            heading: "Range Thermal Cameras & Radars.",
            paragraph: "Fence Lighting System and Electrical Distribution System (UPS & Generators),Dedicated Security Network Infrastructure, Security Management System (SMS) to integrate/manage the complete systems as unified platform / PSIM,  Construction of Security Control Centers, Gate Houses, Search Facility & Support Buildings.",
          },

          {
            heading: "Our Communication Services",
            paragraph: "Structured Cabling Systems, Outside Plants (OSP), Telecommunication shelters, Indoor GSM solutions",
          },

          {
            heading: "Our Power Management Systems",
            paragraph: "Energy Audit & Optimization by Using Self-Learning System, Backup power systems (generators, DC supply systems, UPS ... etc.), Green power solutions (Solar Systems), Grid power & Smart metering (HW & SW, part of smart campus), Uninterruptible Power Supply Systems, DC Supply systems, Home Energy Managements system.",
          },

          {
            heading: "Our Computing Solutions",
            paragraph: "We specialize in providing computing solutions for small-to-large enterprises to help them manage their workload. This includes everything from traditional tower/rack servers’ requirements to converged/hyper-converged solutions, SAP HANA, business analytics and virtualization workloads.",
          },

          {
            heading: "Digital Manufacturing Solutions",
            paragraph: "The INT team is a market leader in providing digital manufacturing solutions for our clients across the Kingdom. Working together with industry and government, we are driving the digital transformation of India as boldly set out in Vision 2030. We use pioneering industry 4.0 technology to service our clients across every sector including education, business and technology.",
          },

          {
            heading: "Business Process Outsourcing Managed Services & Strategic Outsourcing",
            paragraph: "We deliver intelligent network infrastructure that empowers our clients, regardless of size, to manage their IT investments effectively and support their business objectives.We deliver next generation e-business solutions anywhere in the networking life cycle—from network consulting and integration to total network outsourcing. Through our powerful partnerships, including Cisco Systems, we can give our clients access to emerging technological advances in optical, wireless, IP convergence, security and intelligent networking.",
          },
    ],
  },
};
