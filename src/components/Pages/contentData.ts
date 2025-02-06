// contentData.ts
import webDevelopmentImage from "../../assets/LOBibm.jpg";
import networkSolutionImage from "../../assets/LOBbts.jpg";
import aiIntegrationImage from "../../assets/LOBCyber.jpg";
import cybersecurityImage from "../../assets/LOBNetwork.jpg";

interface Heading {
  heading: string;
  paragraph: string;
  details: string[]
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
    title: "Digital Transformation",
    details: [
      // "AI-Powered Customer Engagement",
      // "AI-Based Supply Chain Optimization",
      // "Predictive Analytics for Business Intelligence",
      // "Cognitive IoT for Smart Industries",
      // "AI-Enhanced Order Management & Fulfillment",
      // "UI/UX Design and Prototyping",
      // "E-Business and Portal Services",
      // "Data Protection and Disaster Recovery",
      // "Cloud, Automation and DevOps",
    ],
    image: webDevelopmentImage,
    additionalParagraph:
      "Taphubs specialize in creating tailored web solutions to optimize performance, reduce downtime, and improve user experience. Whether you're building a new platform or enhancing an existing one, our team ensures a solution that meets your business needs.",
    extraContent: ``,

    newHeading: "",
    newParagraph:
      "",

    additionalHeadings: [
      {
        heading: "Artificial Intelligence & Data Analytics",
        paragraph:
          "Modern AI-powered solutions help businesses streamline operations, automate decision-making, and gain real-time insights into their supply chain, customer engagement, and enterprise processes. Key AI-driven areas include:",
       details: [
            "AI-Powered Customer Engagement",
            "AI-Based Supply Chain Optimization",
            "Cognitive IoT for Smart Industries",
            "Predictive Analytics for Business Intelligence",
            "AI-Enhanced Order Management & Fulfillment",
          ],
      },

      {
        heading: "Cloud & Digital Infrastructure Solutions",
        paragraph:
          "We offer secure and scalable cloud solutions that help businesses transition smoothly to the cloud, optimize costs, and enhance agility. Our services include:",
          details: [
            "Multi-Cloud & Hybrid Cloud Services",
            "Cloud Automation & DevOps",
            "Cloud-Based Disaster Recovery & Data Protection",
            "UI/UX Design & Digital Experience Platforms"

          ],
      },

      {
        heading: "Enterprise-Grade Computing Solutions",
        paragraph:
          "Our computing solutions ensure high performance, scalability, and security for critical workloads across industries. We provide:",
          details: [
                  "Enterprise Cloud Computing for AI & Data Analytics",
                  "Performance-Optimized Computing for Large Workloads",
                  "High-Speed Servers & Scalable Enterprise Infrastructure",
          ],
      },

      {
        heading: "Data Storage & Backup Solutions",
        paragraph:
          "We offer next-generation storage solutions designed for high availability, scalability, and security to help businesses manage their growing data needs.",
          details: [
               "Multi-Cloud Storage & Software-Defined Storage (SDS)",
               "Flash Storage for High-Speed Data Processing",
               "Enterprise Backup Solutions for Disaster Recovery",
               "Scalable Data Management & Encryption Solutions",
          ],
        },

      {
        heading: "Cybersecurity & Risk Management",
        paragraph:
          "Protect your business with end-to-end security solutions, ensuring compliance, data protection, and resilience against cyber threats.",
          details: [
               "Firewalls & Intrusion Prevention Systems",
               "Cloud Security & Data Encryption",
               "Threat Intelligence & Incident Response",
               "Security for IoT & Connected Devices",
          ],
        },

      {
        heading: "Smart Industry & IoT Solutions",
        paragraph:
        "Harness the power of IoT and smart technology to improve efficiency, reduce costs, and automate critical business processes.",
        details: [
            "Industrial IoT & Smart Manufacturing Solutions",
            "AI-Driven Asset & Facility Management",
            "Predictive Maintenance & Smart Monitoring",

        ],
      },

      {
        heading: "Blockchain & Digital Trust Solutions",
        paragraph:
          "Blockchain technology enables secure, transparent, and tamper-proof transactions across various industries. Our solutions include:",
          details: [
                 "Secure Supply Chain Tracking & Traceability",
                 "Blockchain for Secure Transactions & Data Integrity",
                 "Smart Contracts & Decentralized Business Applications",
          ],
        },

      {
        heading: "Enterprise Software & IT Management",
        paragraph:
          "From enterprise resource planning (ERP) to intelligent automation, we help businesses optimize operations with cutting-edge software solutions.",
          details: [
                "Enterprise Resource Planning (ERP) & Business Process Automation",
                "Intelligent IT Service Management (ITSM) & IT Optimization",
                "Agile DevOps & Continuous Integration Solutions",
          ],
        },

      {
        heading: "Talent & Business Consulting Services",
        paragraph:
          "Our strategic consulting services help businesses build a strong digital foundation, streamline operations, and align IT with business goals.",
          details: [
              "Strategic Business Planning & Governance",
              "Risk & Compliance Management",
              "IT Service & Infrastructure Optimization",
              "Professional Training & Workforce Development"
          ],
        },
  
    ],
  },

  solutions: {
    title: "Intelligent Business Solutions",
    details: [
      // "Enterprise Resources Planning",
      // "Customer Resources Management",
      // "Content Management Portals",
      // "Infrastructure and Systems Management Services",
      // "Robotics Process Automation",
      // "System Integration",
    ],
    image: networkSolutionImage,
    additionalParagraph: "Empowering Digital Excellence with Proven Expertise",
    extraContent:
      "At TAPHUBS, our clients choose us because of our proven track record in maximizing value and driving digital transformation. With deep industry expertise, we help businesses outperform competitors and enhance profitability by integrating cutting-edge technologies and strategic solutions.",

    newHeading:
      "",
    newParagraph:
      "",

    additionalHeadings: [
      {
        heading: "Our Core Solutions",
        paragraph:
          "",
          details: [
                "Enterprise Resource Planning (ERP) – Streamline operations with integrated business processes.",
                "Customer Relationship Management (CRM) – Strengthen customer engagement and retention.",
                "Content Management Portals – Efficiently manage and distribute digital content.",
                "Infrastructure & Systems Management – Optimize IT resources and enhance performance.",
                "Robotic Process Automation (RPA) – Automate repetitive tasks for increased efficiency.",
                "System Integration – Seamlessly connect multiple platforms and applications.",
                "Blockchain Technology – Secure, transparent, and decentralized solutions.",
                "IoT & Smart Solutions – Transform operations with connected, data-driven intelligence.",
                "Big Data, BI & Analytics – Gain actionable insights from vast data sources.",
                "Cognitive Analytics, AI & Machine Learning – Leverage intelligent automation for innovation.",
          ],       
        },
      {
        heading: "Cloud Enablement & Mobility",
        paragraph:
          "We understand that harnessing cloud technology is a priority for modern businesses. Our Cloud Enablement & Mobility Team helps clients adopt scalable cloud solutions that enhance agility, security, and efficiency. Our experts ensure a seamless cloud transition, providing the best technology and insights for business growth.",
          details: [

          ],
        },
      {
        heading: "Strategic Business Management",
        paragraph:
          "Our Strategic Business Management Team combines business consultancy expertise with world-class IT solutions. Through strong partnerships with leading technology providers, we help businesses unlock new opportunities, optimize performance, and maximize value.",
          details: [

          ],
        },
      {
        heading: "Business Consulting",
        paragraph:
          "",
          details: [
            "Strategic Planning – Define Vision, Mission, and Values.",
            "Governance Office Development – Establish VRO, SMO, and PfMO for operational excellence.",
            "Key Performance Indicators (KPI) & Dashboard Design – Improve decision-making with real-time insights.",
            "Information Lifecycle Management – Optimize data governance and compliance.",

          ],
        },
      {
        heading: "Business Process Consulting",
        paragraph:
          "",
          details: [
                "Business Process Engineering – Design and improve workflows for efficiency.",
                "IT Service Management (ITSM) Process Engineering – Align IT operations with business goals.",
                "Business Continuity Planning – Develop robust risk mitigation and disaster recovery strategies.",
          ],
        },
      {
        heading: "Compliance & Risk Management",
        paragraph:
          "",
          details: [
              "Risk Assessments – Identify, analyze, and mitigate business risks.",
              "Service Roadmap Development – Plan for long-term success.",
              "ISO Consultation & Certifications – Ensure compliance with industry standards.",
          ],
        },
      {
        heading: "Quality Assurance",
        paragraph:
          "",
          details: [
               "End-to-End Testing Solutions – Functional and Non-Functional Testing.",
               "Customer Experience Assessments – Optimize IT services for user satisfaction.",
               "Agile ITSM & DevOps Transformation – Build roadmaps for quality-driven IT environments.",
          ],
        },
      {
        heading: "Strategic Outsourcing",
        paragraph:
          "",
          details: [
             "IT professionals outsourcing, Business professionals outsourcing.",
          ],
        },
      {
        heading: "Managed Services",
        paragraph: "",
        details: [
               "IT Service Management, Plan, and Deliver.",
        ],
      },
      {
        heading: "Talent Development & Education",
        paragraph:
          "",
          details: [
              "Professional Training – Equip teams with industry-leading expertise.",
              "Tailored Training & Development – Customized programs to achieve specific business goals.",
          ],
        },

        {
          heading: "",
          paragraph:
            "At TAPHUBS,, we provide innovative solutions, strategic insights, and expert guidance to help businesses transform, scale, and succeed in the digital era.",
            details: [
               
            ],
          },
    ],
  },

  security: {
    title: "Cybersecurity Resilience Solutions",

    details: [
      // "Firewalls",
      // "IPS",
      // "Mail Gateway",
      // "Web Filtering",
      // "Web Application Firewall",
      // "Wireless Security",
      // "Network Access Control",
    ],
    image: aiIntegrationImage,
    additionalParagraph:
      "Comprehensive Cybersecurity Solutions for Your Business",
    extraContent:
      "In today’s digital world, cybersecurity is a top priority for businesses of all sizes. At TAPHUBS, we have built a dedicated cybersecurity unit with top-tier technology experts from around the world. Our comprehensive security solutions protect your most valuable assets from emerging threats and vulnerabilities.",

    newHeading: "",
    newParagraph:
      "",

    additionalHeadings: [
      {
        heading: "Our Cybersecurity Solutions",
        paragraph:
          "",
          details: [
              "Firewalls – Protect your network from unauthorized access.",
              "Intrusion Prevention Systems (IPS) – Detect and prevent security breaches.",
              "Mail Gateway – Safeguard emails from phishing, spam, and malware.",
              "Web Filtering – Block harmful or inappropriate web content.",
              "Web Application Firewall (WAF) – Defend web applications from cyber threats.",
              
          ],
        },

      {
        heading: "Managed Security Services",
        paragraph:
          "Our comprehensive 24/7 security monitoring and log management offer businesses a 360-degree view of exposures, incidents, and threats, ensuring proactive defense and response.",
          details: [

          ],
         },

      {
        heading: "Advanced Threat Protection",
        paragraph:
          "Advanced threat protection allows for an intelligent response to complex security threats across your organization, minimizing potential risks.",
          details: [

          ],
        },

      {
        heading: "Incident Response",
        paragraph:
          "We provide advanced incident response and forensic support, giving your business immediate access to critical expertise and resources to handle security incidents.",
          details: [

          ],
         },

      {
        heading: "Building A Secure Infrastructure",
        paragraph:
          "Our primary goal is to fortify your business’s digital infrastructure against modern cybersecurity threats. With our world-class security solutions, we help protect your valuable assets and sensitive information.",
          details: [

          ],
         },

      {
        heading: "ATPC: Managing Your Security 365 Days a Year",
        paragraph:
          "ATPC operates around the clock. Our cutting-edge Security Operations Center continually monitors and manages your security technologies, ensuring ongoing assessment and defense against security threats. We strive to maximize efficiency, reduce costs, and strengthen your cybersecurity posture.",
          details: [

          ],
        },

      {
        heading: "Our Managed Security Services Cover",
        paragraph:
          "Taphubs offers expert consultancy to address your dynamic security requirements. Our consultants embed directly within your business to provide an in-depth analysis of your organization’s security. They collaborate closely with you to keep your business secure, compliant, and recommend the most effective solutions tailored to your unique needs.",
          details: [

          ],
        },
    ],
  },

  network: {
    title: "Network & Infrastructure",
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
        paragraph:
          "Data Centers Preparation, power, cooling and racks, Data Center Infrastructure Management (DCIM), Intelligent Data Center Enablement, Turnkey MEP works, Testing and certifying data centers (Data Center All Tier (Uptime), IT infrastructure availability and resilience (part of Business Continuity),Health check and data center gap analysis),  Maintenance and Managed services for data centers and command centers.",
          details: [

          ],
        },

      {
        heading: "Our Audiovisual Services:",
        paragraph:
          "E-learning solutions, Video walls, Auditoriums, Preparation of digital meeting rooms Display systems, Public address systems, Command and control centers preparation (including NOC and SOC)",
          details: [

          ],
        },

      {
        heading: "Integrated Security Systems including:",
        paragraph:
          "Perimeter Fence (HCIS Class 1, 2, 3, 4 & 5) and Crash Rated Anti- Vehicle Barrier, Physical Security Equipment (Road Blockers, Arm Barriers, Turnstiles, Bollards...)., Screening & Searching Equipment (Explosive Detectors, Baggage Scanner, Metal Detectors, Walk-through Detectors, UVIS, ANPR...), Intrusion Detection & Assessment System (IDAS) including Volumetric Sensors (Microwave) & Fence Mounted Fiber Sensors., Long Range Detection & Assessment Systems (LRDAS) including Long",
          details: [

          ],
        },

      {
        heading: "Range Thermal Cameras & Radars.",
        paragraph:
          "Fence Lighting System and Electrical Distribution System (UPS & Generators),Dedicated Security Network Infrastructure, Security Management System (SMS) to integrate/manage the complete systems as unified platform / PSIM,  Construction of Security Control Centers, Gate Houses, Search Facility & Support Buildings.",
          details: [

          ],
         },

      {
        heading: "Our Communication Services",
        paragraph:
          "Structured Cabling Systems, Outside Plants (OSP), Telecommunication shelters, Indoor GSM solutions",
          details: [

          ],
        },

      {
        heading: "Our Power Management Systems",
        paragraph:
          "Energy Audit & Optimization by Using Self-Learning System, Backup power systems (generators, DC supply systems, UPS ... etc.), Green power solutions (Solar Systems), Grid power & Smart metering (HW & SW, part of smart campus), Uninterruptible Power Supply Systems, DC Supply systems, Home Energy Managements system.",
          details: [

          ],
        },

      {
        heading: "Our Computing Solutions",
        paragraph:
          "We specialize in providing computing solutions for small-to-large enterprises to help them manage their workload. This includes everything from traditional tower/rack servers’ requirements to converged/hyper-converged solutions, SAP HANA, business analytics and virtualization workloads.",
          details: [

          ],
         },

      {
        heading:
          "Business Process Outsourcing Managed Services & Strategic Outsourcing",
        paragraph:
          "We deliver intelligent network infrastructure that empowers our clients, regardless of size, to manage their IT investments effectively and support their business objectives. We deliver next generation e-business solutions anywhere in the networking life cycle—from network consulting and integration to total network outsourcing. Through our powerful partnerships, we can give our clients access to emerging technological advances in optical, wireless, IP convergence, security and intelligent networking.",
          details: [

          ],
        },
    ],
  },
};
