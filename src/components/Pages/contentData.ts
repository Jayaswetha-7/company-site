// contentData.ts

//import { useTranslation } from "react-i18next";

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

//const { t } = useTranslation();

export const contentData: Record<string, ContentData> = {
  services: {
    title: "services.title", //"Digital Transformation",
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
    image:
      "https://res.cloudinary.com/djjwvuixb/image/upload/v1739418422/LOBibm_balii2.webp",
    additionalParagraph: "services.additionalParagraph",
    //"Taphubs specialize in creating tailored web solutions to optimize performance, reduce downtime, and improve user experience. Whether you're building a new platform or enhancing an existing one, our team ensures a solution that meets your business needs.",
    extraContent: ``,

    newHeading: "",
    newParagraph: "",

    additionalHeadings: [
      {
        heading: "services.additionalHeadings.ai.heading", //"Artificial Intelligence & Data Analytics",
        paragraph: "services.additionalHeadings.ai.paragraph", //"Modern AI-powered solutions help businesses streamline operations, automate decision-making, and gain real-time insights into their supply chain, customer engagement, and enterprise processes. Key AI-driven areas include:",
        details: [
          "services.additionalHeadings.ai.details.aiCustomerEngagement", // "AI-Powered Customer Engagement",
          "services.additionalHeadings.ai.details.aiSupplyChain", // "AI-Based Supply Chain Optimization",
          "services.additionalHeadings.ai.details.cognitiveIoT", // "Cognitive IoT for Smart Industries",
          "services.additionalHeadings.ai.details.predictiveAnalytics", //"Predictive Analytics for Business Intelligence",
          "services.additionalHeadings.ai.details.aiOrderManagement", //"AI-Enhanced Order Management & Fulfillment",
        ],
      },

      {
        heading: "services.additionalHeadings.cloud.heading", //"Cloud & Digital Infrastructure Solutions",
        paragraph: "services.additionalHeadings.cloud.paragraph",
        //"We offer secure and scalable cloud solutions that help businesses transition smoothly to the cloud, optimize costs, and enhance agility. Our services include:",
        details: [
          "services.additionalHeadings.cloud.details.Multi", //"Multi-Cloud & Hybrid Cloud Services",
          "services.additionalHeadings.cloud.details.Cloud", //"Cloud Automation & DevOps",
          "services.additionalHeadings.cloud.details.CloudBased", // "Cloud-Based Disaster Recovery & Data Protection",
          "services.additionalHeadings.cloud.details.UIDesign", //"UI/UX Design & Digital Experience Platforms"
        ],
      },

      {
        heading: "services.additionalHeadings.enterprice.heading", //"Enterprise-Grade Computing Solutions",
        paragraph: "services.additionalHeadings.enterprice.paragraph",
        //"Our computing solutions ensure high performance, scalability, and security for critical workloads across industries. We provide:",
        details: [
          "services.additionalHeadings.enterprice.details.Enterprice", //"Enterprise Cloud Computing for AI & Data Analytics",
          "services.additionalHeadings.enterprice.details.Performance", //"Performance-Optimized Computing for Large Workloads",
          "services.additionalHeadings.enterprice.details.High", //"High-Speed Servers & Scalable Enterprise Infrastructure",
        ],
      },

      {
        heading: "services.additionalHeadings.datastorage.heading", //"Data Storage & Backup Solutions",
        paragraph: "services.additionalHeadings.datastorage.paragraph",
        //"We offer next-generation storage solutions designed for high availability, scalability, and security to help businesses manage their growing data needs.",
        details: [
          "services.additionalHeadings.datastorage.details.Multicloud", //"Multi-Cloud Storage & Software-Defined Storage (SDS)",
          "services.additionalHeadings.datastorage.details.Flash", //"Flash Storage for High-Speed Data Processing",
          "services.additionalHeadings.datastorage.details.Enterpricebackup", //"Enterprise Backup Solutions for Disaster Recovery",
          "services.additionalHeadings.datastorage.details.Scalable", //"Scalable Data Management & Encryption Solutions",
        ],
      },
      {
        heading: "services.additionalHeadings.cybersecurity.heading", //"Cybersecurity & Risk Management",
        paragraph: "services.additionalHeadings.cybersecurity.paragraph", //"Protect your business with end-to-end security solutions, ensuring compliance, data protection, and resilience against cyber threats.",
        details: [
          "services.additionalHeadings.cybersecurity.details.Firewall", //"Firewalls & Intrusion Prevention Systems",
          "services.additionalHeadings.cybersecurity.details.CloudSecurity", //"Cloud Security & Data Encryption",
          "services.additionalHeadings.cybersecurity.details.Threat", //"Threat Intelligence & Incident Response",
          "services.additionalHeadings.cybersecurity.details.Security", //"Security for IoT & Connected Devices",
        ],
      },

      {
        heading: "services.additionalHeadings.smartindustry.heading", //"Smart Industry & IoT Solutions",
        paragraph: "services.additionalHeadings.smartindustry.paragraph", //"Harness the power of IoT and smart technology to improve efficiency, reduce costs, and automate critical business processes.",
        details: [
          "services.additionalHeadings.smartindustry.details.Industrial", //"Industrial IoT & Smart Manufacturing Solutions",
          "services.additionalHeadings.smartindustry.details.AIDriven", //"AI-Driven Asset & Facility Management",
          "services.additionalHeadings.smartindustry.details.Predictive", //"Predictive Maintenance & Smart Monitoring",
        ],
      },
      {
        heading: "services.additionalHeadings.blockchain.heading", //"Blockchain & Digital Trust Solutions",
        paragraph: "services.additionalHeadings.blockchain.paragraph", //"Blockchain technology enables secure, transparent, and tamper-proof transactions across various industries. Our solutions include:",
        details: [
          "services.additionalHeadings.blockchain.details.Secure", //"Secure Supply Chain Tracking & Traceability",
          "services.additionalHeadings.blockchain.details.Blockchain", //"Blockchain for Secure Transactions & Data Integrity",
          "services.additionalHeadings.blockchain.details.SmartContracts", //"Smart Contracts & Decentralized Business Applications",
        ],
      },
      {
        heading: "services.additionalHeadings.enterpricesoftware.heading", //"Enterprise Software & IT Management",
        paragraph: "services.additionalHeadings.enterpricesoftware.paragraph", //"From enterprise resource planning (ERP) to intelligent automation, we help businesses optimize operations with cutting-edge software solutions.",
        details: [
          "services.additionalHeadings.enterpricesoftware.details.ERP", //"Enterprise Resource Planning (ERP) & Business Process Automation",
          "services.additionalHeadings.enterpricesoftware.details.ITSM", //"Intelligent IT Service Management (ITSM) & IT Optimization",
          "services.additionalHeadings.enterpricesoftware.details.Agile", //"Agile DevOps & Continuous Integration Solutions",
        ],
      },
      {
        heading: "services.additionalHeadings.talent.heading", //"Talent & Business Consulting Services",
        paragraph: "services.additionalHeadings.talent.paragraph", //"Our strategic consulting services help businesses build a strong digital foundation, streamline operations, and align IT with business goals.",
        details: [
          "services.additionalHeadings.talent.details.Strategic", //"Strategic Business Planning & Governance",
          "services.additionalHeadings.talent.details.Risk", //"Risk & Compliance Management",
          "services.additionalHeadings.talent.details.IT", //"IT Service & Infrastructure Optimization",
          "services.additionalHeadings.talent.details.Professional", //"Professional Training & Workforce Development"
        ],
      },
    ],
  },

  solutions: {
    title: "solutions.title", //"Intelligent Business Solutions",
    details: [
      // "Enterprise Resources Planning",
      // "Customer Resources Management",
      // "Content Management Portals",
      // "Infrastructure and Systems Management Services",
      // "Robotics Process Automation",
      // "System Integration",
    ],
    image:
      "https://res.cloudinary.com/djjwvuixb/image/upload/v1739419279/LOBbts_nkdm4q.webp",
    additionalParagraph: "solutions.additionalParagraph", //"Empowering Digital Excellence with Proven Expertise",
    extraContent: "solutions.extraContent",
    //"At TAPHUBS, our clients choose us because of our proven track record in maximizing value and driving digital transformation. With deep industry expertise, we help businesses outperform competitors and enhance profitability by integrating cutting-edge technologies and strategic solutions.",

    newHeading: "",
    newParagraph: "",

    additionalHeadings: [
      {
        heading: "solutions.additionalHeadings.our.heading", //"Our Core Solutions",
        paragraph: "",
        details: [
          "solutions.additionalHeadings.our.details.enterprice",
          "solutions.additionalHeadings.our.details.customer",
          "solutions.additionalHeadings.our.details.content",
          "solutions.additionalHeadings.our.details.infra",
          "solutions.additionalHeadings.our.details.robo",
          "solutions.additionalHeadings.our.details.sys",
          "solutions.additionalHeadings.our.details.block",
          "solutions.additionalHeadings.our.details.iot",
          "solutions.additionalHeadings.our.details.big",
          "solutions.additionalHeadings.our.details.analytics",
          // "Enterprise Resource Planning (ERP) – Streamline operations with integrated business processes.",
          // "Customer Relationship Management (CRM) – Strengthen customer engagement and retention.",
          // "Content Management Portals – Efficiently manage and distribute digital content.",
          // "Infrastructure & Systems Management – Optimize IT resources and enhance performance.",
          // "Robotic Process Automation (RPA) – Automate repetitive tasks for increased efficiency.",
          // "System Integration – Seamlessly connect multiple platforms and applications.",
          // "Blockchain Technology – Secure, transparent, and decentralized solutions.",
          // "IoT & Smart Solutions – Transform operations with connected, data-driven intelligence.",
          // "Big Data, BI & Analytics – Gain actionable insights from vast data sources.",
          // "Cognitive Analytics, AI & Machine Learning – Leverage intelligent automation for innovation.",
        ],
      },
      {
        heading: "solutions.additionalHeadings.cloud.heading", ////"Cloud Enablement & Mobility",
        paragraph: "solutions.additionalHeadings.cloud.paragraph",
        //"We understand that harnessing cloud technology is a priority for modern businesses. Our Cloud Enablement & Mobility Team helps clients adopt scalable cloud solutions that enhance agility, security, and efficiency. Our experts ensure a seamless cloud transition, providing the best technology and insights for business growth.",
        details: [],
      },

      {
        heading: "solutions.additionalHeadings.strategy.heading", // "Strategic Business Management",
        paragraph: "solutions.additionalHeadings.strategy.paragraph",
        //"Our Strategic Business Management Team combines business consultancy expertise with world-class IT solutions. Through strong partnerships with leading technology providers, we help businesses unlock new opportunities, optimize performance, and maximize value.",
        details: [],
      },
      {
        heading: "solutions.additionalHeadings.business.heading", //"Business Consulting",
        paragraph: "",
        details: [
          "solutions.additionalHeadings.business.details.st",
          "solutions.additionalHeadings.business.details.gov",
          "solutions.additionalHeadings.business.details.ky",
          "solutions.additionalHeadings.business.details.info",
        ],
      },
      // {
      //   heading: "Business Consulting",
      //   paragraph:
      //     "",
      //     details: [
      //       "Strategic Planning – Define Vision, Mission, and Values.",
      //       "Governance Office Development – Establish VRO, SMO, and PfMO for operational excellence.",
      //       "Key Performance Indicators (KPI) & Dashboard Design – Improve decision-making with real-time insights.",
      //       "Information Lifecycle Management – Optimize data governance and compliance.",

      //     ],
      //   },
      {
        heading: "solutions.additionalHeadings.consult.heading", //"Business Process Consulting",
        paragraph: "",
        details: [
          "solutions.additionalHeadings.consult.details.bs",
          "solutions.additionalHeadings.consult.details.it",
          "solutions.additionalHeadings.consult.details.continue",

          // "Business Process Engineering – Design and improve workflows for efficiency.",
          // "IT Service Management (ITSM) Process Engineering – Align IT operations with business goals.",
          // "Business Continuity Planning – Develop robust risk mitigation and disaster recovery strategies.",
        ],
      },
      {
        heading: "solutions.additionalHeadings.compliance.heading", //"Compliance & Risk Management",
        paragraph: "",
        details: [
          "solutions.additionalHeadings.compliance.details.rk",
          "solutions.additionalHeadings.compliance.details.ser",
          "solutions.additionalHeadings.compliance.details.iso",
          // "Risk Assessments – Identify, analyze, and mitigate business risks.",
          // "Service Roadmap Development – Plan for long-term success.",
          // "ISO Consultation & Certifications – Ensure compliance with industry standards.",
        ],
      },
      {
        heading: "solutions.additionalHeadings.quality.heading", //"Quality Assurance",
        paragraph: "",
        details: [
          "solutions.additionalHeadings.quality.details.end",

          "solutions.additionalHeadings.quality.details.customer",

          "solutions.additionalHeadings.quality.details.devops",
          //  "End-to-End Testing Solutions – Functional and Non-Functional Testing.",
          //  "Customer Experience Assessments – Optimize IT services for user satisfaction.",
          //  "Agile ITSM & DevOps Transformation – Build roadmaps for quality-driven IT environments.",
        ],
      },
      {
        heading: "solutions.additionalHeadings.outsourcing.heading", //"Strategic Outsourcing",
        paragraph: "",
        details: [
          "solutions.additionalHeadings.outsourcing.details.det",
          //  "IT professionals outsourcing, Business professionals outsourcing.",
          //  "IT professionals outsourcing, Business professionals outsourcing.",
        ],
      },
      {
        heading: "solutions.additionalHeadings.manage.heading", // "Managed Services",
        paragraph: "",
        details: [
          "solutions.additionalHeadings.manage.details.plan",
          //"IT Service Management, Plan, and Deliver.",
        ],
      },
      {
        heading: "solutions.additionalHeadings.edu.heading", //"Talent Development & Education",
        paragraph: "",
        details: [
          "solutions.additionalHeadings.edu.details.prof",
          "solutions.additionalHeadings.edu.details.tailored",
          // "Professional Training – Equip teams with industry-leading expertise.",
          // "Tailored Training & Development – Customized programs to achieve specific business goals.",
        ],
      },
      {
        heading: "",
        paragraph: "solutions.additionalHeadings.parag.paragraph",
        // "At TAPHUBS,, we provide innovative solutions, strategic insights, and expert guidance to help businesses transform, scale, and succeed in the digital era.",
        details: [],
      },
    ],
  },

  security: {
    title: "security.title", //"Cybersecurity Resilience Solutions",

    details: [
      // "Firewalls",
      // "IPS",
      // "Mail Gateway",
      // "Web Filtering",
      // "Web Application Firewall",
      // "Wireless Security",
      // "Network Access Control",
    ],
    image:
      "https://res.cloudinary.com/djjwvuixb/image/upload/v1739419397/LOBCyber_dnygbv.webp",
    additionalParagraph: "security.additionalParagraph", //"Comprehensive Cybersecurity Solutions for Your Business",
    extraContent: "security.extraContent",
    //"In today’s digital world, cybersecurity is a top priority for businesses of all sizes. At TAPHUBS, we have built a dedicated cybersecurity unit with top-tier technology experts from around the world. Our comprehensive security solutions protect your most valuable assets from emerging threats and vulnerabilities.",

    newHeading: "",
    newParagraph: "",

    additionalHeadings: [
      {
        heading: "security.headings.solutions.title", //"Our Cybersecurity Solutions",
        paragraph: "",
        details: [
          "security.headings.solutions.details.fir",
          "security.headings.solutions.details.int",
          "security.headings.solutions.details.mail",
          "security.headings.solutions.details.web",
          "security.headings.solutions.details.waf",
          "security.headings.solutions.details.wire",
          "security.headings.solutions.details.net",
          // "Firewalls – Protect your network from unauthorized access.",
          // "Intrusion Prevention Systems (IPS) – Detect and prevent security breaches.",
          // "Mail Gateway – Safeguard emails from phishing, spam, and malware.",
          // "Web Filtering – Block harmful or inappropriate web content.",
          // "Web Application Firewall (WAF) – Defend web applications from cyber threats.",
          // "Wireless Security – Ensure secure and encrypted wireless communication.",
          // "Network Access Control (NAC) – Restrict access to authorized users only.",
        ],
      },
      {
        heading: "security.headings.intelligence.title", //"Security Intelligence",
        paragraph: "security.headings.intelligence.paragraph", //"We provide real-time security intelligence through:",
        details: [
          "security.headings.intelligence.details.cust",
          "security.headings.intelligence.details.data",
          "security.headings.intelligence.details.level",

          //  "Customer portals for live threat updates.",
          //  "Data feeds for proactive risk managemen",
          //  "Multi-level security briefs and dedicated intelligence services.",
        ],
      },

      {
        heading: "security.headings.managedServices.title", // "Managed Security Services",
        paragraph: "security.headings.managedServices.paragraph",
        // "Our 24/7 security monitoring and log management provide a 360-degree view of your organization’s security landscape. We ensure proactive defense and rapid response to mitigate potential threats.",
        details: [],
      },

      {
        heading: "security.headings.threatProtection.title", //"Advanced Threat Protection",
        paragraph: "security.headings.threatProtection.paragraph", //"We use intelligent detection and response systems to counter sophisticated cyber threats, minimizing risks and ensuring continuous protection.",
        details: [],
      },

      {
        heading: "security.headings.incidentResponse.title", //"Incident Response & Forensics",
        paragraph: "security.headings.incidentResponse.paragraph",
        //"Our experts provide rapid incident response and forensic support, helping your business quickly identify, contain, and recover from security incidents.",
        details: [],
      },

      {
        heading: "security.headings.infrastructure.title", //"Building a Secure Infrastructure",
        paragraph: "security.headings.infrastructure.paragraph", //"Our mission is to fortify your business against cyber threats. With our world-class security solutions, we help you protect sensitive information and ensure operational resilience.",
        details: [],
      },

      {
        heading: "security.headings.atpc.title", //"ATPC: Managing Your Security 24/7/365",
        paragraph: "security.headings.atpc.paragraph",
        //"ATPC (Advanced Threat Protection Center) operates round-the-clock to monitor and manage your security technologies. Our Security Operations Center (SOC) continually assesses risks, defends against cyber threats, and ensures maximum efficiency while reducing costs.",
        details: [],
      },

      {
        heading: "security.headings.consulting.title", //"Tailored Security Consulting",
        paragraph: "security.headings.consulting.paragraph", //"We provide expert consultancy to help businesses adapt to evolving security challenges. Our consultants work directly with your team to:",
        details: [
          "security.headings.consulting.details.conduct",
          "security.headings.consulting.details.ensure",
          "security.headings.consulting.details.rec",
          // "Conduct in-depth security assessments.",
          // "Ensure compliance with industry standards.",
          // "Recommend customized security solutions tailored to your needs."
        ],
      },
      {
        heading: "",
        paragraph: "security.finalParagraph", //"At TAPHUBS, we don’t just protect your business—we empower it with the best cybersecurity strategies for long-term success.",
        details: [],
      },
    ],
  },

  network: {
    title: "network.title", //"Digital Connectivity & Infrastructure",
    details: [
      // "The software-defined wide-area network (SD-WAN)",
      // "Collaboration Solutions",
      // "Switching and Routing",
      // "Networking Strategy & Optimization Services",
      // "Network Integration & Deployment Services",
      // "Network Managed Services",
      // "High Speed Network",
      // "Internet of Things",
      // "Transmission & Optical Network solutions",
      // "Converged Communications Services",
      // "Video Conference, Digital Signage, & IPTV",
      // "Mobility & Wireless Solutions",
      // "Network Health Check and Audit Study",
    ],
    image:
      "https://res.cloudinary.com/djjwvuixb/image/upload/v1739419484/LOBNetwork_r5itol.webp",
    additionalParagraph: "network.additionalParagraph", //"Building a Strong Foundation for Your Business",
    extraContent: "network.extraContent", //"How can you operate a successful business without a solid foundation? Our Infrastructure & Networking Technology team develops end-to-end solutions to build a robust framework for our clients’ businesses. This encompasses everything from architecture design right through to project implementation and managed services.",

    newHeading: "",
    newParagraph: "",

    additionalHeadings: [
      {
        heading: "",
        paragraph: "network.headings.overview.paragraph", //"We begin by taking a step back to examine the wider business environment you are trading in. We listen to your challenges and build a detailed picture of your unique needs. We take a deep dive into your operational efficiency and evaluate how successful your current infrastructure is in delivering return on investment. We test the resilience of your systems and appliances against potential threats and look for weaknesses in data availability. We then couple these insights with intelligent networking and connectivity solutions to restructure the digital foundation of your business.",
        details: [],
      },
      {
        heading: "",
        paragraph: "",
        details: [
          "network.headings.details.list1",
          "network.headings.details.list2",
          "network.headings.details.list3",
          "network.headings.details.list4",
          "network.headings.details.list5",
          "network.headings.details.list6",
          "network.headings.details.list7",
          "network.headings.details.list8",
          "network.headings.details.list9",
          "network.headings.details.list10",
          "network.headings.details.list11",
          "network.headings.details.list12",
          "network.headings.details.list13",
          // "The software-defined wide-area network ",
          // "Collaboration Solutions",
          // "Switching and Routing",
          // "Networking Strategy & Optimization Services",
          // "Network Integration & Deployment Services",
          // "Network Managed Services",
          // "High Speed Network",
          // "Internet of Things",
          // "Transmission & Optical Network solutions",
          // "Converged Communications Services",
          // "Video Conference, Digital Signage, & IPTV",
          // "Mobility & Wireless Solutions",
          // "Network Health Check and Audit Study",
        ],
      },
      {
        heading: "network.headings.infrastructure.title", //"Our Infrastructure Solutions",
        paragraph: "network.headings.infrastructure.paragraph", //"Data Centers Preparation, power, cooling and racks, Data Center Infrastructure Management (DCIM), Intelligent Data Center Enablement, Turnkey MEP works, Testing and certifying data centers (Data Center All Tier (Uptime), IT infrastructure availability and resilience (part of Business Continuity),Health check and data center gap analysis), Maintenance and Managed services for data centers and command centers.",
        details: [],
      },
      {
        heading: "network.headings.audiovisual.title", //"Our Audiovisual Services:",
        paragraph: "network.headings.audiovisual.paragraph", //"E-learning solutions, Video walls, Auditoriums, Preparation of digital meeting rooms Display systems, Public address systems, Command and control centers preparation (including NOC and SOC)",
        details: [],
      },
      {
        heading: "network.headings.security.title", //"Integrated Security Systems including:",
        paragraph: "network.headings.security.paragraph", //"Perimeter Fence (HCIS Class 1, 2, 3, 4 & 5) and Crash Rated Anti- Vehicle Barrier, Physical Security Equipment (Road Blockers, Arm Barriers, Turnstiles, Bollards...)., Screening & Searching Equipment (Explosive Detectors, Baggage Scanner, Metal Detectors, Walk-through Detectors, UVIS, ANPR...), Intrusion Detection & Assessment System (IDAS) including Volumetric Sensors (Microwave) & Fence Mounted Fiber Sensors., Long Range Detection & Assessment Systems (LRDAS) including Long.",
        details: [],
      },

      {
        heading: "network.headings.thermal.title", //"Range Thermal Cameras & Radars.",
        paragraph: "network.headings.thermal.paragraph", //"Fence Lighting System and Electrical Distribution System (UPS & Generators), Dedicated Security Network Infrastructure, Security Management System (SMS) to integrate/manage the complete systems as unified platform / PSIM, Construction of Security Control Centers, Gate Houses, Search Facility & Support Buildings.",
        details: [],
      },
      {
        heading: "network.headings.communication.title", //"Our Communication Services",
        paragraph: "network.headings.communication.paragraph", //"Structured Cabling Systems, Outside Plants (OSP), Telecommunication shelters, Indoor GSM solutions.",
        details: [],
      },
      {
        heading: "network.headings.power.title", //"Our Power Management Systems",
        paragraph: "network.headings.power.paragraph", //"Energy Audit & Optimization by Using Self-Learning System, Backup power systems (generators, DC supply systems, UPS ... etc.), Green power solutions (Solar Systems), Grid power & Smart metering (HW & SW, part of smart campus), Uninterruptible Power Supply Systems, DC Supply systems, Home Energy Managements system.",
        details: [],
      },
      {
        heading: "network.headings.computing.title", //"Our Computing Solutions",
        paragraph: "network.headings.computing.paragraph", //"We specialize in providing computing solutions for small-to-large enterprises to help them manage their workload. This includes everything from traditional tower/rack servers’ requirements to converged/hyper-converged solutions, ERP, business analytics and virtualization workloads.",
        details: [],
      },

      {
        heading: "network.headings.outsourcing.title", //"Business Process Outsourcing Managed Services & Strategic Outsourcing",
        paragraph: "network.headings.outsourcing.paragraph", //"We deliver intelligent network infrastructure that empowers our clients, regardless of size, to manage their IT investments effectively and support their business objectives. We deliver next generation e-business solutions anywhere in the networking life cycle_from network consulting and integration to total network outsourcing. Through our powerful partnerships, including certified network Systems, we can give our clients access to emerging technological advances in optical, wireless, IP convergence, security and intelligent networking.",
        details: [],
      },
    ],
  },
};
