const SITE = {
  "name": "Mathews V Manoj",
  "photo": "profile.jpg",
  "tagline": "Engineering hardware for defense & aerospace — from antennas to FPGAs.",
  "status": "Research Intern @ DRDO — DLRL, Hyderabad",
  "keywords": "RF · FPGA · Defense Electronics",
  "email": "mathewvmanoj8@gmail.com",
  "phone": "+91 91883 68960",
  "linkedin": "https://linkedin.com/in/mathews-v-manoj",
  "resume": "resume.pdf",
  "bio": [
    "I'm a second-year Electronics & Communication Engineering student at <strong>Muthoot Institute of Technology and Science (KTU)</strong> with a CGPA of 9.33, currently a research intern at <strong>DRDO's Defence Electronics Research Laboratory (DLRL), Hyderabad</strong>, working on broadband airborne EW antenna design.",
    "My work spans <strong>RF/electromagnetics</strong> (full-wave simulation in CST Studio Suite), <strong>digital design</strong> (Verilog on Kintex-7 and Zynq FPGAs, RISC-V integration) and <strong>embedded systems</strong>. I'm also the founder of <strong>Focuno</strong>, an AI productivity startup, and coordinate the Mathematics Club at MITS.",
    "The long-term plan: <strong>GATE 2027, an M.Tech from a top institute, and building in India's defense-tech ecosystem</strong>."
  ],
  "stats": [
    {
      "number": "9.33",
      "suffix": "/10",
      "label": "CGPA"
    },
    {
      "number": "12",
      "suffix": "+",
      "label": "Projects Built"
    },
    {
      "number": "9",
      "suffix": "",
      "label": "Competitions"
    },
    {
      "number": "6",
      "suffix": "",
      "label": "Certifications"
    }
  ],
  "highlights": [
    {
      "title": "DRDO · DLRL",
      "sub": "Current research internship"
    },
    {
      "title": "DVCon '26",
      "sub": "IEEE Stage 1 cleared"
    },
    {
      "title": "e-Yantra",
      "sub": "Regional finalist, IIT Bombay"
    }
  ],
  "experience": [
    {
      "role": "Research Intern",
      "org": "DRDO — Defence Electronics Research Laboratory (DLRL), Hyderabad",
      "date": "Jun 2026 — Present",
      "points": [
        "Designing a broadband blade monopole antenna (20–2500 MHz) for an airborne EW receive direction-finding system.",
        "Full-wave simulation campaign in CST Studio Suite: resistive loading, capacitive top-loading and taper optimization against Bode–Fano / Chu physical limits.",
        "Deliverable pipeline targets fabricated prototypes and environmental stress screening (ESS) qualification."
      ]
    },
    {
      "role": "Intern",
      "org": "Indian Institute of Space Science and Technology (IIST) — IEEE Program",
      "date": "2026 · Hybrid, Thiruvananthapuram",
      "text": "Selected for the IIST IEEE hybrid internship — space-technology oriented engineering exposure alongside the DLRL engagement."
    },
    {
      "role": "Intern",
      "org": "National Institute of Technology Calicut (NITC) — Summer Internship Program",
      "date": "2026",
      "text": "Selected for the NIT Calicut Summer Internship Program in ECE research."
    },
    {
      "role": "Founder",
      "org": "Focuno — AI Productivity Startup",
      "date": "2026 — Present",
      "text": "Building Focuno, an early-stage AI-powered productivity product — product, engineering and everything between."
    }
  ],
  "projects": [
    {
      "image": "antenna.jpg",
      "badge": "DRDO · DLRL",
      "category": "RF / Electromagnetics",
      "title": "Broadband Blade Monopole Antenna (20–2500 MHz)",
      "desc": "Broadband blade monopole for airborne EW receive and direction-finding — a 125:1 bandwidth target pushing against Bode–Fano and Chu limits. Monotonic-taper blade with capacitive top-loading and resistive profiling; VSWR < 2 with positive realized gain across the passive band in CST, plus a diplexed active low-band path studied in LTspice.",
      "tags": [
        "CST Studio Suite",
        "VSWR / S11",
        "LTspice",
        "EW / DF"
      ]
    },
    {
      "image": "tacre.jpg",
      "badge": "DVCon India '26 · Stage 1",
      "category": "FPGA × AI",
      "title": "TACRE — Task-Aware Object Ranking Engine",
      "desc": "FPGA-accelerated system that ranks detected objects by task relevance in real time: YOLOv8-nano detection and a DistilBERT-tiny task encoder feed a custom Verilog ranking accelerator over AXI4-Stream DMA, alongside a VEGA RISC-V core on a Genesys-2 (Kintex-7). Cleared Stage 1 of the IEEE DVCon India 2026 design contest.",
      "tags": [
        "Verilog",
        "Kintex-7",
        "RISC-V",
        "AXI4-Stream",
        "YOLOv8"
      ]
    },
    {
      "image": "lunar-ice.jpg",
      "badge": "ISRO BAH 2026",
      "category": "SAR Polarimetry",
      "title": "Lunar South-Pole Ice Detection",
      "desc": "Team Dakshin Radars proposal for ISRO's Bharatiya Antariksh Hackathon: detecting water ice in permanently shadowed lunar craters via Mini-RF radar polarimetry. Built a working CPR/DOP processing pipeline on real NASA Mini-RF PDS3 data, computing a mean CPR of 0.326 over the study region.",
      "tags": [
        "Python",
        "SAR",
        "CPR / DOP",
        "NASA PDS3"
      ]
    },
    {
      "image": "spoilage.jpg",
      "badge": "e-Yantra · Regional Finalist",
      "category": "IoT × Computer Vision",
      "title": "Spoilage Detection & Prevention System",
      "desc": "Multi-sensor system tackling post-harvest food spoilage: ESP32-CAM computer vision analyzes visual ripeness while a BME688 tracks VOC changes during ripening. Both signals fuse in a PRSL (Predicted Ripeness & Shelf Life) model streaming to a Python server for real-time alerts.",
      "tags": [
        "ESP32-CAM",
        "BME688",
        "Sensor Fusion",
        "Python"
      ]
    },
    {
      "image": "sentinel.jpg",
      "badge": "Self-Hosted",
      "category": "Full-Stack × Embedded",
      "title": "SENTINEL v2 — Device Tracking System",
      "desc": "Self-hosted device monitoring platform: FastAPI + SQLite backend with a heartbeat protocol, remote command queue and location history; a Termux-based Android agent; and a live web dashboard with Leaflet mapping.",
      "tags": [
        "FastAPI",
        "SQLite",
        "Termux",
        "Leaflet"
      ]
    },
    {
      "image": "hazard-fpga.jpg",
      "badge": "ZedBoard",
      "category": "Digital Design — FPGA",
      "title": "Hazard & Fault Detection System",
      "desc": "How digital circuits misbehave in the real world: stuck-at fault detection (A·B stuck-at-0) using test vectors, hazard analysis of F = AB + A'C under unequal path delays, the observed 1→0→1 glitch waveform, and validation on a ZedBoard (Zynq-7000).",
      "tags": [
        "Verilog",
        "Stuck-at Model",
        "Timing Analysis",
        "Vivado"
      ]
    },
    {
      "image": "vigillift.jpg",
      "badge": "MYOSA 5.0",
      "category": "IoT — Safety Systems",
      "title": "VigilLift — Elevator Emergency & Safety System",
      "desc": "IoT-based smart elevator safety monitor built on the MYOSA development board (ESP32): detects free fall, sudden stops and abnormal vibration using multiple sensors, with real-time alerts and live monitoring.",
      "tags": [
        "ESP32",
        "MYOSA",
        "IMU / Vibration",
        "IoT Alerts"
      ]
    },
    {
      "image": "curvesafe.jpg",
      "badge": "Techxcel 2.0",
      "category": "Embedded — Road Safety",
      "title": "CurveSafe",
      "desc": "Road-safety system aimed at reducing the probability of collision on hairpin curves — developed as a startup concept for Techxcel 2.0, MITS's college-level startup challenge.",
      "tags": [
        "Embedded",
        "Sensors",
        "Road Safety"
      ]
    },
    {
      "image": "fpga-clock.jpg",
      "badge": "FPGA",
      "category": "Digital Design — FPGA",
      "title": "Digital Clock — FPGA + OLED",
      "desc": "Digital clock designed and implemented in Verilog on an FPGA, integrated with an OLED display for real-time visualization — clock division, counter chains and display interfacing done entirely in hardware.",
      "tags": [
        "Verilog",
        "FPGA",
        "OLED / SPI"
      ]
    },
    {
      "image": "robot.jpg",
      "badge": "Arduino",
      "category": "Embedded — Autonomy",
      "title": "Obstacle-Avoiding Robot (270° Awareness)",
      "desc": "Autonomous navigation robot: HC-SR04 on an SG90 servo for 270° FOV with 5-point path analysis, L298N PWM drive, sub-500 ms decision-making, a three-level safety threshold system (45/20/15 cm) and memory-optimized Arduino firmware.",
      "tags": [
        "Arduino",
        "HC-SR04",
        "L298N",
        "PWM"
      ]
    },
    {
      "image": "markov.jpg",
      "badge": "Python",
      "category": "Predictive Maintenance",
      "title": "Machine Health Prediction — Markov Chains",
      "desc": "Models machine degradation as a Markov process (Healthy → Wear → Warning → Critical → Failure) with transition-matrix probability tracking and four analytical plots: health state evolution, failure probability, system reliability, and a health index.",
      "tags": [
        "Python",
        "Markov Chains",
        "Matplotlib"
      ]
    },
    {
      "image": "insta-cleaner.jpg",
      "badge": "Automation",
      "category": "Python — Automation",
      "title": "Instagram Like Cleaner (API)",
      "desc": "Python automation tool that detects liked reels and posts via Instagram's API and safely removes them — human-like delays, retry and rate-limit handling, progress tracking, and automatic resume after interruptions.",
      "tags": [
        "Python",
        "REST API",
        "Rate Limiting"
      ]
    }
  ],
  "competitions": [
    {
      "year": "2026",
      "name": "IEEE DVCon India 2026 — Design Contest",
      "sub": "FPGA-based object detection & ranking (TACRE)",
      "result": "Stage 1 Cleared",
      "hit": true
    },
    {
      "year": "2025-26",
      "name": "e-Yantra Innovation Challenge — IIT Bombay",
      "sub": "Spoilage detection & prevention system",
      "result": "Regional Finalist",
      "hit": true
    },
    {
      "year": "2025",
      "name": "National Road Safety Hackathon",
      "sub": "Road safety systems track",
      "result": "Stage 2 of 4",
      "hit": true
    },
    {
      "year": "2026",
      "name": "Bharatiya Antariksh Hackathon — ISRO",
      "sub": "Lunar south-pole ice detection (Team Dakshin Radars)",
      "result": "Proposal Submitted",
      "hit": false
    },
    {
      "year": "2025",
      "name": "Smart India Hackathon",
      "sub": "National-level innovation challenge",
      "result": "Participant",
      "hit": false
    },
    {
      "year": "2026",
      "name": "Open Silicon Bootcamp",
      "sub": "Open-source silicon design",
      "result": "Participant",
      "hit": false
    },
    {
      "year": "2025",
      "name": "MYOSA 5.0",
      "sub": "VigilLift — elevator safety system",
      "result": "Participant",
      "hit": false
    },
    {
      "year": "—",
      "name": "TechExpo — IIT Guwahati",
      "sub": "Technology exhibition",
      "result": "Participant",
      "hit": false
    },
    {
      "year": "—",
      "name": "Techxcel 2.0 — MITS",
      "sub": "CurveSafe — college startup challenge",
      "result": "Participant",
      "hit": false
    }
  ],
  "achievements": [
    {
      "title": "IEEE DVCon India 2026 — Stage 1 Cleared",
      "sub": "FPGA-based object detection project (TACRE)"
    },
    {
      "title": "Research Internship — DRDO DLRL",
      "sub": "Defence Electronics Research Laboratory, Hyderabad"
    },
    {
      "title": "Internship — Indian Institute of Space Science and Technology",
      "sub": "IIST IEEE hybrid internship program"
    },
    {
      "title": "Internship — National Institute of Technology Calicut",
      "sub": "NITC Summer Internship Program"
    },
    {
      "title": "e-Yantra Innovation Challenge — Regional Finalist",
      "sub": "Coimbatore & Bangalore region · IIT Bombay"
    },
    {
      "title": "National Road Safety Hackathon — Stage 2 of 4",
      "sub": "National-level selection"
    }
  ],
  "positions": [
    {
      "title": "Founder — Focuno",
      "sub": "AI productivity startup · 2026 — present"
    },
    {
      "title": "Mathematics Club Coordinator — MITS",
      "sub": "2025 — 2026"
    }
  ],
  "volunteering": [
    {
      "title": "Design Subcommittee — IEEE SB MITS",
      "sub": "Student branch design team"
    },
    {
      "title": "Certificate Subcommittee — IEEE SB MITS",
      "sub": "Event certification workflow"
    },
    {
      "title": "Design Team — IEEE RAICS",
      "sub": "Recent Advances in Intelligent Computational Systems"
    }
  ],
  "certifications": [
    {
      "title": "Microsensors and Nanosensors — NPTEL",
      "sub": "IIT Guwahati · Nov 2025 · Elite",
      "icon": "N"
    },
    {
      "title": "Robotics — NPTEL",
      "sub": "IIT Kharagpur · Nov 2025 · Elite",
      "icon": "N"
    },
    {
      "title": "EV — Vehicle Dynamics & Electric Motor Drives — NPTEL",
      "sub": "May 2025",
      "icon": "N"
    },
    {
      "title": "Embedded Systems — NIELIT Calicut",
      "sub": "National Institute of Electronics and IT · Jun 2025",
      "icon": "E"
    },
    {
      "title": "Python — NIELIT Calicut",
      "sub": "National Institute of Electronics and IT · Jun 2025",
      "icon": "P"
    },
    {
      "title": "Digital 101 (30 Hours) — NASSCOM",
      "sub": "May 2025",
      "icon": "D"
    }
  ],
  "skills": [
    {
      "group": "RF & Electromagnetics",
      "items": [
        "CST Studio Suite",
        "Antenna Design",
        "S-Parameters / VSWR",
        "Impedance Matching",
        "LTspice"
      ]
    },
    {
      "group": "Digital & FPGA",
      "items": [
        "Verilog",
        "VHDL",
        "Vivado",
        "ZedBoard",
        "Genesys-2",
        "RISC-V",
        "AXI4"
      ]
    },
    {
      "group": "Embedded Systems",
      "items": [
        "Embedded C",
        "8051",
        "ESP32 / ESP32-CAM",
        "Arduino",
        "UART / I2C / SPI",
        "MYOSA"
      ]
    },
    {
      "group": "Software & ML",
      "items": [
        "Python",
        "NumPy / Pandas",
        "YOLOv8",
        "FastAPI",
        "REST APIs",
        "C"
      ]
    }
  ]
};
