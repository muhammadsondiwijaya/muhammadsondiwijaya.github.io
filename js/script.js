const projectData = {
    project1: {
        iconType: "rf",
        category: "RF & Network Planning • Simulation",
        title: "5G NR Coverage Planning Simulation (3500 MHz) – Ajibarang District",
        intro: "Radio frequency coverage planning simulation for a 5G New Radio (NR) cellular network operating at 3500 MHz in Ajibarang District, Banyumas Regency (66.5 km² urban-classified area). The study applies link budget modeling to determine cell radius and optimal gNodeB site count, followed by signal distribution evaluation using Atoll 3.4.",
        metrics: [
            { label: "Operating Frequency", value: "3500 MHz" },
            { label: "Target Area", value: "66.5 km²" },
            { label: "Pathloss & d2D Radius", value: "99.44 dB • 561.2 m" },
            { label: "Planned Sites", value: "82 gNodeB" }
        ],
        workflow: [
            {
                step: "1",
                icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
                title: "Area Determination",
                desc: "Selected Ajibarang District, Banyumas (66.5 km²), classified as an urban environment."
            },
            {
                step: "2",
                icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/></svg>`,
                title: "Parameter Setup",
                desc: "Defined the 3500 MHz operating frequency and key evaluation parameters, including RSRP and RSRQ."
            },
            {
                step: "3",
                icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="8" y1="6" x2="16" y2="6"/><line x1="16" y1="14" x2="16" y2="18"/><path d="M16 10h.01"/><path d="M12 10h.01"/><path d="M8 10h.01"/><path d="M12 14h.01"/><path d="M8 14h.01"/><path d="M12 18h.01"/><path d="M8 18h.01"/></svg>`,
                title: "Link Budget Calculation",
                desc: "Calculated link budget parameters, including MAPL, path loss, and cell radius, to establish the network planning scenario."
            },
            {
                step: "4",
                icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20"/><path d="M8 22h8"/><path d="M7.5 7.5a6.5 6.5 0 0 1 9 0"/><path d="M4.5 4.5a11 11 0 0 1 15 0"/><circle cx="12" cy="11" r="2"/></svg>`,
                title: "Site Count Dimensioning",
                desc: "Determined the required number of sites through simulation using Atoll 3.4, considering network coverage and deployment efficiency."
            },
            {
                step: "5",
                icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>`,
                title: "Simulation Analysis",
                desc: "Evaluated coverage performance by analyzing RSRP and SINR results across the planning scenario."
            }
        ],
        linkBudget: [
            ["gNodeB Transmitter Power", "dBm", "49", "49"],
            ["Resource Block", "dBm", "273", "273"],
            ["Subcarrier Quantity", "dBm", "3276", "3276"],
            ["gNodeB Antenna Gain", "dBi", "2", "2"],
            ["gNodeB Cable Loss", "dBi", "0", "0"],
            ["Penetration Loss", "dB", "26.85", "26.85"],
            ["Foliage Loss", "dB", "19.59", "19.59"],
            ["Body Block Loss", "dB", "3", "3"],
            ["Interference Margin", "dB", "6", "2"],
            ["Rain/Ice Margin", "dB", "0", "0"],
            ["Slow Fading Margin", "dB", "7", "7"],
            ["UE Antenna Gain", "dB", "0", "0"],
            ["Demodulation Threshold SINR", "dB", "-1.1", "-1.1"],
            ["Bandwidth", "dB", "100", "100"],
            ["UT Noise Figure", "dB", "9", "9"],
            ["Thermal Noise Power", "dBm", "-153.93", "-153.93"]
        ],
        calcSummary: [
            { label: "Pathloss", val: "99.44 dB" },
            { label: "3D Distance (d3D)", val: "561.7 m" },
            { label: "2D Cell Radius (d2D)", val: "561.2 m" },
            { label: "Coverage Area (CA)", val: "818,858.14 m²" }
        ],
        rsrpTable: [
            { level: "-70 < X < -90 dBm", color: "#0066CC", desc: "Very Good" },
            { level: "-91 < X < -110 dBm", color: "#FACC15", desc: "Good" },
            { level: "-110 < X < -130 dBm", color: "#EF4444", desc: "Poor" }
        ],
        sinrTable: [
            { level: "30 – 45 dB", color: "#0066CC", desc: "Very Good" },
            { level: "15 – 30 dB", color: "#65A30D", desc: "Good" },
            { level: "0 – 15 dB", color: "#FACC15", desc: "Fair" },
            { level: "-20 – 0 dB", color: "#EF4444", desc: "Poor" }
        ],
        images: [
            {
                src: "assets/images/RSRP.jpeg",
                title: "Figure 1. SS-RSRP (DL) Coverage Map & Histogram",
                note: "Predominantly blue coverage (-90 to -70 dBm) indicates strong and uniform signal reception across almost the entire Ajibarang District."
            },
            {
                src: "assets/images/SINR.jpeg",
                title: "Figure 2. SS-SINR (DL) Distribution Map & Histogram",
                note: "Predominantly fair (yellow, 0–15 dB) and poor (red, < 0 dB) zones reflect inter-cell interference caused by high site density across 82 gNodeBs."
            }
        ],
        analysis: "Atoll 3.4 simulation results demonstrate that deploying 82 gNodeB sites at 3500 MHz achieves strong and uniform SS-RSRP signal coverage (-90 to -70 dBm) across Ajibarang District. However, SS-SINR distribution remains mostly in the fair-to-poor range due to inter-site signal overlap, indicating that further antenna tilt optimization and beamforming implementation are required to suppress interference and improve overall throughput quality.",
        tools: ["Atoll 3.4", "5G NR (3500 MHz)", "Link Budget", "SS-RSRP & SS-SINR"]
    },
    project2: {
        iconType: "rf",
        category: "Network Optimization • Field Measurement",
        title: "4G LTE Network Quality Analysis Using Drive Test (XL Axiata – Purwokerto)",
        intro: "Empirical radio frequency field measurement and performance evaluation of an existing 4G LTE network (XL Axiata) along a 2.77 km urban loop route in Purwokerto (Kost Eyang Harto – Jl. Jend. Sudirman – Jl. Pierre Tendean – Jl. Komisaris Bambang Suprapto – Jl. Brigjen Katamso – Jl. Moch. Ikhsan). Conducted under Voice over IP (VoIP) service using dual Realme C65 terminals with G-NetTrack Pro and visualized via Google Earth.",
        metrics: [
            { label: "Operator & Service", value: "XL Axiata • VoIP" },
            { label: "Drive Test Route", value: "2.77 km Loop" },
            { label: "Total Samples", value: "278 Points" },
            { label: "Mean RSRP", value: "-86.715 dBm" }
        ],
        workflow: [
            { step: "1", title: "Test Setup & Route Preparation", desc: "Prepared an Android smartphone with G-NetTrack Pro, an active SIM card, GPS tracking, and the target vehicle route." },
            { step: "2", title: "Field Data Logging", desc: "Started session logging in G-NetTrack Pro and monitored live 4G LTE signal parameters along the route." },
            { step: "3", title: "Log Export & Transfer", desc: "Saved the completed drive test session into .TXT and .KML files and transferred them to a PC." },
            { step: "4", title: "Google Earth Visualization", desc: "Imported the .KML file into Google Earth to map coordinate points and identify strong, moderate, weak, and blank-spot zones." },
            { step: "5", title: "Signal Quality Analysis", desc: "Evaluated recorded RF parameters against established cellular quality standards." }
        ],
        kpiTableHeaders: ["KPI Parameter", "Dominant Category", "Min / Max / Mean", "Sample Share"],
        linkBudget: [
            ["RSRP (Signal Power)", "Good (-99 to -79 dBm)", "-108 / -69 / -86.715 dBm", "96% Good & Very Good"],
            ["RSRQ (Signal Quality)", "Good (-19 to -11 dB)", "-20 / -11 dB Range", "97.48% Good (271 pts)"],
            ["SINR / SNR", "Good (1 to 15 dB)", "-10 to 30 dB Range", "59% Good • 41% Poor"],
            ["Uplink Bitrate", "Poor (0 to 324 kbps)", "0 / 220 / 6.294 kbps", "100% Poor (VoIP Load)"],
            ["Downlink Bitrate", "Poor (0 to 324 kbps)", "0 / 3,309 / 23.363 kbps", "99% Poor • 1% Good"]
        ],
        calcSummary: [
            { label: "RSRP Good/V.Good", val: "268 / 278 Samples" },
            { label: "RSRQ Good", val: "271 / 278 Samples" },
            { label: "SINR >= 1 dB", val: "166 / 278 Samples" },
            { label: "Test Terminal", val: "Realme C65 (G-NetTrack)" }
        ],
        rsrpTable: [
            { level: "> -80 dBm", color: "#1D4ED8", desc: "Very Good (17%)" },
            { level: "-80 to -90 dBm", color: "#22C55E", desc: "Good (79%)" },
            { level: "-90 to -100 dBm", color: "#FACC15", desc: "Normal" },
            { level: "-100 to -120 dBm", color: "#EF4444", desc: "Poor (4%)" }
        ],
        sinrTable: [
            { level: "16 to 30 dB", color: "#22C55E", desc: "Very Good (1%)" },
            { level: "1 to 15 dB", color: "#FACC15", desc: "Good (58%)" },
            { level: "0 to -10 dB", color: "#EF4444", desc: "Poor (41%)" }
        ],
        rsrqTable: [
            { level: ">= -10 dB", color: "#1D4ED8", desc: "Very Good" },
            { level: "-10 to -15 dB", color: "#22C55E", desc: "Good" },
            { level: "-15 to -20 dB", color: "#FACC15", desc: "Normal" },
            { level: "<= -20 dB", color: "#EF4444", desc: "Bad" }
        ],
        throughputTable: [
            { level: ">= 12,000 kbps", color: "#1D4ED8", desc: "Excellent" },
            { level: "7,200 – < 12,000 kbps", color: "#22C55E", desc: "Good" },
            { level: "1,500 – < 7,200 kbps", color: "#84CC16", desc: "Normal" },
            { level: "324 – < 1,500 kbps", color: "#FACC15", desc: "Bad" },
            { level: "< 324 kbps", color: "#EF4444", desc: "Poor" }
        ],
        images: [
            {
                src: "assets/images/RSRPmap.jpeg",
                chartSrc: "assets/images/RSRPchart.jpeg",
                title: "Figure 1. RSRP Spatial Map (Google Earth) & Distribution Chart",
                note: "79% Good (-99 to -79 dBm) and 17% Very Good (-80 to 0 dBm) across 278 samples, confirming stable baseline signal coverage."
            },
            {
                src: "assets/images/RSRQmap.jpeg",
                chartSrc: "assets/images/RSRQchart.jpeg",
                title: "Figure 2. RSRQ Spatial Map (Google Earth) & Distribution Chart",
                note: "97.48% (271 samples) recorded within the Good range (-19 to -11 dB), supporting reliable handover continuity."
            },
            {
                src: "assets/images/SINRmap.jpeg",
                chartSrc: "assets/images/SINRchart.jpeg",
                title: "Figure 3. SINR Spatial Map (Google Earth) & Distribution Chart",
                note: "58% Good (1–15 dB) along Jl. Jend. Sudirman, while 41% Poor (<= 0 dB) occurred near dense buildings on Jl. Moch. Ikhsan & Jl. Kom. Bambang Suprapto."
            },
            {
                src: "assets/images/ULchart.jpeg",
                chartSrc: "assets/images/DLchart.jpeg",
                title: "Figure 4. Uplink Bitrate (Left) & Downlink Bitrate (Right) Distributions",
                note: "Mean UL throughput of 6.294 kbps (max 220 kbps) and mean DL throughput of 23.363 kbps (max 3,309 kbps) under VoIP traffic load."
            }
        ],
        analysis: "Field drive test measurements across Purwokerto confirm strong and stable 4G LTE signal power (96% Good/Very Good RSRP, mean -86.715 dBm) and solid signal quality (97.48% Good RSRQ). However, SINR degraded to <= 0 dB in 41% of samples along dense urban corridors (Jl. Moch. Ikhsan and Jl. Komisaris Bambang Suprapto) due to building shadowing and inter-cell interference. Furthermore, measured UL (6.294 kbps avg) and DL (23.363 kbps avg) bitrates remained in the low range because the test session carried low-bandwidth VoIP traffic rather than full-buffer data transfers, compounded by cell overlap and urban congestion.",
        tools: ["G-NetTrack Pro", "Google Earth (KML)", "4G LTE KPI Audit", "Realme C65", "VoIP Testing"]
    },
project3: {
        iconType: "sdr",
        category: "Signal Processing • SDR & MATLAB",
        section3Title: "Comparison Table",
        galleryNumber: "04",
        galleryTitle: "Frequency Spectrum & Parameter Charts",
        title: "Comparison of Walkie-Talkie Signal Frequency Spectrum in Indoor and Outdoor Environments Using RTL-SDR and MATLAB",
        intro: "Handy Talkie (HT) signal quality is influenced by distance and environmental conditions, where indoor environments introduce multipath propagation from walls and objects. Using RTL-SDR and SDR#, HT signals were recorded in the baseband (I/Q) domain across outdoor (Pancurawis Field) and indoor (Rectorate Building, 3rd Floor) environments at 10 m and 30 m distances and analyzed offline in MATLAB.",
        metrics: [
            { label: "Hardware & Software", value: "RTL-SDR • SDR# • MATLAB" },
            { label: "Locations & Distances", value: "Outdoor & Indoor (10m / 30m)" },
            { label: "Highest SNR", value: "51.012 dB (Outdoor 10 m)" },
            { label: "Effective Bandwidth", value: "~12 – 13 kHz (Narrowband FM)" }
        ],
        workflow: [
            { step: "1", title: "Import & I/Q Separation", desc: "Import the acquired .wav files, separate In-phase (I) and Quadrature (Q) data into complex signals, and subtract the mean value." },
            { step: "2", title: "Active Segment Extraction", desc: "Detect the active transmission segment (segDur = 2 s) using moving-mean squared signal power." },
            { step: "3", title: "Decimation", desc: "Decimate the sampling rate to a target frequency of fs_target = 240 kHz." },
            { step: "4", title: "Centered PSD Calculation", desc: "Compute centered Power Spectral Density using pwelch with a Hann window and extract the signal band within -20 dB of the peak." },
            { step: "5", title: "RF Parameter Calculation", desc: "Calculate Signal Power (dBFS), Noise Floor (dBFS/Hz), SNR (dB), and Effective Bandwidth (99% Occupied BW in Hz)." }
        ],
        kpiTableHeaders: ["Location & Distance", "Power (dBFS)", "Noise Floor (dBFS/Hz)", "SNR (dB)", "Occupied BW  (Hz)"],
        linkBudget: [
            ["Outdoor – 10 m", "<span class='sdr-pill best'>-0.75978</span>", "-80.626", "<span class='sdr-pill best'>51.012 dB</span>", "13,029 Hz"],
            ["Outdoor – 30 m", "-1.3377", "-80.737", "48.585 dB", "12,418 Hz"],
            ["Indoor – 10 m", "-0.91451", "-80.156", "50.616 dB", "11,570 Hz"],
            ["Indoor – 30 m", "-0.90634", "<span class='sdr-pill warn'>-76.858</span>", "<span class='sdr-pill warn'>47.646 dB</span>", "12,935 Hz"]
        ],
        calcSummary: [
            { label: "Outdoor Location", val: "Pancurawis Field" },
            { label: "Indoor Location", val: "Rectorate Building, 3rd Floor" },
            { label: "Decimation Target", val: "240 kHz (2 s Segment)" },
            { label: "Modulation Characteristic", val: "Narrowband FM (~12–13 kHz)" }
        ],
        images: [
            {
                src: "assets/images/SPEKTRUM INDOOR 10 M.jpeg",
                chartSrc: "assets/images/SPEKTRUM INDOOR 30 M.jpeg",
                title: "Indoor Frequency Spectrum – Indoor 10 m (Left) vs. Indoor 30 m (Right)",
                note: "Spektrum (PSD) - Indoor 10 m and Spektrum (PSD) - Indoor 30 m plots in dB/Hz across frequency (Hz)."
            },
            {
                src: "assets/images/SPEKTRUM OUTDOOR 10 M.jpeg",
                chartSrc: "assets/images/SPEKTRUM OUTDOOR 30 M.jpeg",
                title: "Outdoor Spectrum Frequency – Outdoor 10 m (Left) vs. Outdoor 30 m (Right)",
                note: "Spektrum (PSD) - Outdoor 10 m and Spektrum (PSD) - Outdoor 30 m plots in dB/Hz across frequency (Hz)."
            },
            {
                src: "assets/images/Grafik Power Signal.jpeg",
                chartSrc: "assets/images/Grafik Noise Floor.jpeg",
                title: "Power Signal in dBFS (Left) vs. Noise Floor in dBFS/Hz (Right)",
                note: "Power Sinyal (-0.76, -1.34, -0.91, -0.91 dBFS) and Noise Floor (-80.63, -80.74, -80.16, -76.86 dBFS/Hz) across Outdoor 10 m, Outdoor 30 m, Indoor 10 m, and Indoor 30 m."
            },
            {
                src: "assets/images/Grafik SNR.jpeg",
                chartSrc: "assets/images/Grafik BW Efektif.jpeg",
                title: "SNR in dB (Left) vs. Occupied Bandwidth Signal in Hz (Right)",
                note: "SNR (51.01, 48.58, 50.62, 47.65 dB) and 99% Occupied Bandwidth (13029, 12418, 11570, 12935 Hz) across all four test conditions."
            }
        ],
        analysis: "The four spectrum captures show similar shapes, indicating consistent Narrowband FM modulation across all conditions. Signal power decreases with distance outdoors, while remaining relatively constant indoors due to multipath effects. Indoor environments exhibit higher noise floor and lower SNR, especially at longer distances. The effective bandwidth remains stable at approximately 12–13 kHz, characteristic of Narrowband FM, and signal quality is primarily influenced by the propagation environment rather than distance alone.",
        tools: ["RTL-SDR", "SDR#", "MATLAB", "Baseband I/Q", "Narrowband FM"]
    },
   project4: {
        iconType: "iot",
        isCapstoneReport: true,
        category: "Capstone Design (Final Project) • IoT, Mobile App & Machine Learning",
        title: "Implementation Of Internet Of Things (IoT) Technology In Organic Compost Production Using A Mobile App Platform",
        overview: {
            background: "Conventional composting relies on manual observation, making it difficult to track decomposition parameters consistently, monitor liquid leachate levels, or determine compost maturity objectively.",
            objectives: [
                "Build a real-time IoT monitoring system for both solid and liquid organic compost chambers.",
                "Develop an Android mobile app for live sensor monitoring, historical charts, logs, and user guidance.",
                "Implement K-Nearest Neighbors (KNN) to classify compost maturity into Immature, Semi-Mature, and Mature."
            ],
            solution: "An IoT-based dual-chamber composter designed to simultaneously produce solid compost and liquid organic fertilizer, powered by an ESP32 microcontroller reading six parameters every 20 minutes. Data is streamed via HiveMQ MQTT for live mobile monitoring, logged to ThingSpeak for historical trend analytics, and synchronized with Firebase for database storage and Firebase Cloud Messaging (FCM) alerts when liquid reaches ≥ 80%.",
            contribution: "Contributed as an IoT and Mobile Application Developer in Capstone Design. Responsibilities included integrating sensors with the ESP32 microcontroller, implementing sensor data acquisition, configuring Wi-Fi and MQTT communication, developing the Flutter-based Android monitoring application, integrating ThingSpeak and Firebase services, and implementing KNN-based compost maturity classification. Also participated in system validation and performance evaluation, including sensor accuracy and MQTT communication latency testing, as well as preparing and writing the technical documentation and final Capstone Design report."
        },
        metrics: [
            { label: "Controller & Interval", value: "ESP32 • 20 Min" },
            { label: "Monitored Parameters", value: "6 Active Sensors" },
            { label: "MQTT Avg. Latency", value: "80.8 ms (55–110 ms)" },
            { label: "KNN Model Accuracy", value: "98.80% (K = 7)" }
        ],
        architecture: {
            description: "End-to-end IoT architecture connecting physical compost sensors with cloud messaging, time-series storage, and the Flutter Android client:",
            layers: [
                { title: "1. Sensing & Edge (ESP32)", desc: "Acquires 6 solid & liquid compost parameters and transmits data over Wi-Fi." },
                { title: "2. Real-Time Broker (HiveMQ MQTT)", desc: "Publishes live sensor payloads to MQTT topics subscribed by the Android app." },
                { title: "3. Historical Cloud (ThingSpeak)", desc: "Archives periodic HTTP readings for multi-day trend charts and data logs." },
                { title: "4. Push Alerts (Firebase FCM)", desc: "Dispatches instant mobile alerts when liquid compost exceeds the 80% threshold." },
                { title: "5. Mobile Client (Flutter Android)", desc: "Visualizes live & historical data and runs on-device KNN maturity classification." }
            ],
            image: {
                src: "assets/images/arsitektur4.jpeg",
                title: "Figure 1. Compost Monitoring System Architecture",
                note: "End-to-end architecture linking sensors, ESP32, HiveMQ MQTT broker, ThingSpeak cloud, Firebase FCM, and the Flutter Android application."
            }
        },
        hardware: {
            description: "Vertically separated two-tier prototype (upper solid compost chamber, lower liquid reservoir) controlled by an ESP32 interfacing with six sensors:",
            sensors: [
                { name: "Soil Temp (DS18B20)", desc: "Monitors thermal changes inside the solid compost chamber." },
                { name: "Soil Moisture (Capacitive)", desc: "Tracks moisture percentage in the solid compost medium." },
                { name: "Soil pH Sensor", desc: "Measures acidity and alkalinity in solid compost." },
                { name: "Liquid pH (pH-4502C)", desc: "Monitors acidity and alkalinity levels in liquid compost." },
                { name: "Gravity TDS Sensor", desc: "Measures Total Dissolved Solids concentration (ppm) in liquid." },
                { name: "Water Level Sensor", desc: "Tracks liquid height percentage to trigger overflow alerts (≥ 80%)." }
            ],
            images: [
                {
                    src: "assets/images/desain4.jpeg",
                    title: "Figure 2. Compost Monitoring System Hardware Design",
                    note: "Two-tier composter layout illustrating upper solid-compost sensors, lower liquid-compost sensors, and the NodeMCU ESP32 controller."
                },
                {
                    src: "assets/images/wiring4.jpeg",
                    title: "Figure 3. Electronic Circuit Schematic",
                    note: "Wiring schematic connecting all six sensors to the ESP32 expansion board across dedicated GPIO/ADC pins and 3.3V/5V power rails."
                },
                {
                    src: "assets/images/wadah2(4).jpeg",
                    title: "Figure 4. Solid & Liquid Compost Compartments",
                    note: "Internal view of the perforated upper solid-compost bin (left) and the lower liquid leachate reservoir (right) fitted with sensors."
                },
                {
                    src: "assets/images/prototype4.jpeg",
                    title: "Figure 5. Assembled Hardware Prototype",
                    note: "Stacked two-chamber composter prototype featuring a side-mounted black ESP32 protective enclosure and a bottom liquid drainage tap."
                }
            ]
        },
        workflowIoT: {
            steps: [
                { num: "01", title: "20-Min Sensor Polling", desc: "ESP32 samples all 6 sensors every 20 minutes and converts raw signals into °C, %, pH, and ppm." },
                { num: "02", title: "Live MQTT Publishing", desc: "Publishes payloads to HiveMQ Broker for instant dashboard updates on the Android app." },
                { num: "03", title: "ThingSpeak Logging", desc: "Sends HTTP requests to ThingSpeak REST API for time-series charts and historical logs." },
                { num: "04", title: "FCM Threshold Alert", desc: "Triggers an HTTPS push notification via Firebase when liquid volume reaches ≥ 80%." }
            ],
            images: [
                {
                    src: "assets/images/alurkerja4.jpeg",
                    title: "Figure 6. System Workflow Flowchart",
                    note: "Operational flow from organic waste loading and sensor acquisition to cloud transmission, KNN maturity classification, and overflow alerts."
                },
                {
                    src: "assets/images/sequence4.jpeg",
                    title: "Figure 7. Software Sequence Diagram",
                    note: "Message interaction sequence across ESP32, HiveMQ MQTT, ThingSpeak API, Firebase FCM, and Android client."
                }
            ]
        },
        mobileApp: {
            description: "Built with Flutter and Dart in Visual Studio Code, featuring four integrated monitoring and guidance screens:",
            features: [
                { title: "Real-Time Dashboard", desc: "Displays live numerical readings for solid & liquid compost alongside maturity status." },
                { title: "Monitoring Charts", desc: "Visualizes time-series parameter trends sourced from ThingSpeak." },
                { title: "Data History Log", desc: "Displays timestamped sensor logs with daily filters." },
                { title: "User Guide", desc: "Offers app usage instructions and reference explanations for each compost parameter." }
            ],
            screenshots: [
                {
                    src: "assets/images/dashboard4.jpeg",
                    title: "Figure 8. Dashboard Screen",
                    note: "Live sensor parameter readout and compost maturity classification status."
                },
                {
                    src: "assets/images/grafik4.jpeg",
                    title: "Figure 9. Monitoring Charts Screen",
                    note: "Time-series parameter visualization sourced from ThingSpeak."
                },
                {
                    src: "assets/images/history4.jpeg",
                    title: "Figure 10. Data History Screen",
                    note: "Timestamped log of past sensor readings."
                },
                {
                    src: "assets/images/panduan4.jpeg",
                    title: "Figure 11. User Guide Screen",
                    note: "In-app instructions and optimal composting parameter guidelines."
                }
            ]
        },
        knnSection: {
            description: "Implemented inside the Flutter app using three core soil features (<strong>Soil Temperature, Soil Moisture, and Soil pH</strong>) to classify compost maturity objectively:",
            pipeline: [
                "<strong>Feature Input:</strong> Reads live Soil Temperature, Soil Moisture, and Soil pH.",
                "<strong>Euclidean Distance:</strong> Calculates the distance between incoming sensor readings and training dataset samples using the Euclidean Distance formula. A smaller distance indicates greater similarity between data points.",
                "<strong>Neighbor Selection (K = 7):</strong> Ranks distances and selects the 7 closest training neighbors.",
                "<strong>Majority Voting:</strong> Assigns the final maturity label based on the dominant neighbor class."
            ],
            categories: [
                { stage: "Stage 01", name: "Immature", desc: "Represents the early composting stage, where the compost has not yet reached the required maturity conditions." },
                { stage: "Stage 02", name: "Semi-Mature", desc: "Represents an intermediate stage of decomposition, where the compost is transitioning toward maturity." },
                { stage: "Stage 03", name: "Mature", desc: "This represents the final classification stage, indicating that the compost has reached a state of maturity with a pH value within the neutral range." }
            ],
            performanceNote: "Optimal performance was achieved at K = 7 with 98.80% test accuracy and 97.09% mean accuracy across 5-Fold Cross Validation.",
            evalImages: [
                {
                    src: "assets/images/confusion4.jpeg",
                    title: "Figure 12. KNN Confusion Matrix (K = 7)",
                    note: "Classification distribution across Immature, Semi-Mature, and Mature classes."
                },
                {
                    src: "assets/images/tabel4.jpeg",
                    title: "Figure 13. Precision, Recall, Specificity & F1-Score",
                    note: "Per-class classification evaluation metrics for the K = 7 model."
                },
                {
                    src: "assets/images/5-cross4.jpeg",
                    title: "Figure 14. 5-Fold Cross Validation Results",
                    note: "Cross-validation consistency yielding a mean accuracy of 97.09%."
                }
            ],
            appTestImages: [
                {
                    src: "assets/images/setengahmatang4.jpeg",
                    title: "Figure 15. App Classification Output: 'Setengah Matang'",
                    note: "Live mobile classification test displaying Semi-Mature status."
                },
                {
                    src: "assets/images/matang4.jpeg",
                    title: "Figure 16. App Classification Output: 'Matang'",
                    note: "Live mobile classification test displaying Mature status."
                }
            ]
        },
        testingSection: {
            description: "Validated across sensor calibration benchmarks, MQTT transmission latency, Firebase push alerts, and hardware bill-of-materials cost:",
            tableHeaders: ["Tested Component / Metric", "Reference / Test Method", "Measured Result"],
            tableRows: [
                ["MQTT Communication Latency", "ESP32 → HiveMQ Broker → Android App", "80.8 ms Average (55 – 110 ms)"],
                ["Push Notification (Firebase FCM)", "Simulated liquid level ≥ 80%", "Alert delivered reliably on Android"],
                ["Prototype Hardware Cost", "Total component cost (target ≤ Rp1,500,000)", "Rp1,404,000 (Within budget)"]
            ],
            images: [
                {
                    src: "assets/images/alurmqtt4.jpeg",
                    title: "MQTT Communication Flow Verification",
                    note: "Verified publish-subscribe packet routing between ESP32, HiveMQ Broker, and Android client."
                },
                {
                    src: "assets/images/latency4.jpeg",
                    title: "MQTT Latency Measurement Log",
                    note: "Recorded transmission delay averaging 80.8 ms across a 55–110 ms range."
                },
                {
                    src: "assets/images/notifikasi4.jpeg",
                    title: "Figure 5.5. Mobile Push Notification Test",
                    note: "Firebase Cloud Messaging alert triggered when liquid compost level reached ≥ 80%."
                }
            ],
            outcomeMain: "An integrated IoT monitoring solution was developed to simplify the observation of solid and liquid compost conditions. Combining real-time sensor monitoring, cloud-based data visualization, mobile notifications, and KNN-based maturity classification, the system achieved 80.8 ms average MQTT latency and 98.80% classification accuracy (K = 7).",
            outcomeClosing: "This project demonstrates how IoT and machine learning can be applied to make household compost monitoring more accessible and data-driven."
        },
        tools: ["ESP32", "C++ (PlatformIO)", "MQTT (HiveMQ)", "ThingSpeak API", "Firebase FCM", "Flutter & Dart"]
    },
    project5: {
        iconType: "aquarium",
        category: "Embedded Systems • Microcontroller Project",
        title: "Automatic Aquarium Fish Feeder Using Arduino Uno & RTC DS3231",
        intro: "An automated embedded feeding mechanism designed to dispense ornamental aquarium fish feed accurately according to programmed schedules without manual intervention. Built on Arduino Uno R3 paired with a temperature-compensated DS3231 Real-Time Clock (RTC) module, an SG90 micro-servo dispensing gate, and a 16x2 I2C LCD for real-time clock, date, and ambient temperature monitoring.",
        metrics: [
            { label: "Microcontroller", value: "Arduino Uno R3" },
            { label: "Timekeeping IC", value: "RTC DS3231" },
            { label: "Actuator & Pin", value: "Servo SG90 (D4)" },
            { label: "Display Interface", value: "16x2 LCD (I2C 0x27)" }
        ],
        workflow: [
            { step: "1", title: "Port & I2C Init", desc: "Initialized Arduino Uno serial bus, I2C LCD (0x27), DS3231 RTC, and Servo on Pin 4." },
            { step: "2", title: "Real-Time Polling", desc: "Continuously read day, date, time (HH:MM:SS), and chip temperature from DS3231." },
            { step: "3", title: "LCD Status Display", desc: "Rendered live date on Row 1 and current clock + temperature (°C) on Row 2." },
            { step: "4", title: "Schedule Trigger", desc: "Matched real-time clock against programmed feeding timestamps (Morning/Afternoon/Evening)." },
            { step: "5", title: "Servo Dispensing", desc: "Actuated SG90 servo cycles (0° to 150°) to release controlled feed portions." }
        ],
        tableTitle: "Scheduled Feeding & Servo Actuation Test Results",
        kpiTableHeaders: ["Test #", "Scheduled Time", "Feeding Session", "Servo Actuator Status"],
        linkBudget: [
            ["Test 01", "08:00 WIB", "Morning Session", "Active (Dispensed)"],
            ["Test 02", "12:00 WIB", "Noon Session", "Active (Dispensed)"],
            ["Test 03", "17:00 WIB", "Evening Session", "Active (Dispensed)"],
            ["Test 04", "09:00 WIB", "Morning Session", "Active (Dispensed)"],
            ["Test 05", "13:00 WIB", "Noon Session", "Active (Dispensed)"],
            ["Test 06", "18:00 WIB", "Evening Session", "Active (Dispensed)"]
        ],
        calcSummary: [
            { label: "Main Controller", val: "Arduino Uno + Expansion Shield" },
            { label: "Dispensing Angle", val: "0° ↔ 150° (100 ms pulse)" },
            { label: "Power Supply", val: "DC Power Adapter" },
            { label: "Test Success Rate", val: "6 / 6 Schedules Active" }
        ],
        imagesTitle: "Circuit Schematic & Hardware Prototype",
        images: [
            {
                src: "assets/images/Skemaproject5.jpeg",
                title: "Figure 1. Digital Circuit Schematic (Fritzing)",
                note: "Hardware wiring architecture connecting Arduino Uno R3, Expansion Shield, DS3231 RTC (SDA/SCL), 16x2 I2C LCD, and SG90 Servo (Digital Pin 4)."
            },
            {
                src: "assets/images/Hardwareproject5.jpeg",
                title: "Figure 2. Assembled Hardware Prototype & Live LCD Readout",
                note: "Physical prototype displaying real-time date ('Senin, 4-12-2023'), clock, and ambient temperature ('31.8 C') alongside the 3D-printed feed hopper."
            }
        ],
        demoVideo: {
            youtubeEmbed: "https://www.youtube.com/embed/8IxMflOfH-k?enablejsapi=1",
            caption: "Hardware Demonstration: Real-time DS3231 clock monitoring on 16x2 I2C LCD and automated SG90 servo feed dispensing cycle."
        },
        analysis: "Functional testing across six scheduled intervals (08:00, 09:00, 12:00, 13:00, 17:00, and 18:00) verified 100% triggering reliability. Integrating the DS3231 module with an independent LIR2032 backup battery ensured timekeeping persistence even during main power interruptions, while programmable servo oscillation cycles controlled feed dosage to prevent aquarium overfeeding and water quality degradation.",
        tools: ["Arduino IDE (C++)", "Arduino Uno R3", "RTC DS3231", "Micro Servo SG90", "Fritzing"]
    },
};

let savedScrollY = 0;

function lockBackgroundScroll() {
    savedScrollY = window.pageYOffset || document.documentElement.scrollTop || 0;
    document.body.classList.add("modal-open-lock");
}

function unlockBackgroundScroll() {
    document.body.classList.remove("modal-open-lock");
    document.documentElement.style.overflow = "";
    document.body.style.overflow = "";
    
    document.documentElement.style.scrollBehavior = "auto";
    window.scrollTo(0, savedScrollY);
    requestAnimationFrame(() => {
        document.documentElement.style.scrollBehavior = "";
    });
}

function animateModalOpen(modal) {
    modal.classList.add("show", "open", "active");
    modal.style.opacity = "1";
    modal.style.visibility = "visible";
    modal.style.pointerEvents = "auto";

    const dialog = modal.querySelector(".modal-content");
    if (dialog) {
        dialog.style.opacity = "1";
        dialog.style.transform = "translateY(0) scale(1)";
        dialog.animate(
            [
                { opacity: 0, transform: "translateY(26px) scale(0.96)" },
                { opacity: 1, transform: "translateY(0) scale(1)" }
            ],
            {
                duration: 360,
                easing: "cubic-bezier(0.16, 1, 0.3, 1)",
                fill: "forwards"
            }
        );
    }
}

function openModal(projectId) {
    const data = projectData[projectId];
    if (!data) return;

    const modal = document.getElementById("projectModal");
    const modalBody = document.getElementById("modalBody");
    if (!modal || !modalBody) return;

    const projectIcons = {
        rf: `<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 2v20"/>
                <path d="M8 22h8"/>
                <path d="M7.5 7.5a6.5 6.5 0 0 1 9 0"/>
                <path d="M4.5 4.5a11 11 0 0 1 15 0"/>
                <circle cx="12" cy="11" r="2"/>
             </svg>`,
        iot: `<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="4" y="4" width="16" height="16" rx="2"/>
                <rect x="9" y="9" width="6" height="6"/>
                <path d="M9 1v3"/><path d="M15 1v3"/>
                <path d="M9 20v3"/><path d="M15 20v3"/>
                <path d="M20 9h3"/><path d="M20 14h3"/>
                <path d="M1 9h3"/><path d="M1 14h3"/>
              </svg>`,
        signal: `<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M2 12h3l2.5-7 4 14 3.5-10 2 3H22"/>
                 </svg>`,
        sdr: `<svg class="sdr-radio-svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path class="sdr-wave-outer" d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9"/>
                <path class="sdr-wave-inner" d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5"/>
                <circle class="sdr-core" cx="12" cy="12" r="2"/>
                <path class="sdr-wave-inner" d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5"/>
                <path class="sdr-wave-outer" d="M19.1 4.9C23 8.8 23 15.1 19.1 19"/>
                <line x1="12" y1="14" x2="12" y2="21"/>
              </svg>`,
        aquarium: `<svg class="aquarium-animated-svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                 <!-- Butiran Pakan Jatuh -->
                 <circle class="feed-pellet p1" cx="12" cy="3" r="1" fill="currentColor"/>
                 <circle class="feed-pellet p2" cx="14.5" cy="5" r="0.9" fill="currentColor"/>
                 <!-- Ikan Berenang Halus -->
                 <g class="swimming-fish">
                     <path d="M16 14c-2.5-2.5-6.5-2.5-9 0-1.5-1.5-3-1.5-4 0 1 1.5 2.5 1.5 4 0 2.5 2.5 6.5 2.5 9 0z"/>
                     <circle cx="13.5" cy="13.5" r="0.7" fill="currentColor"/>
                 </g>
                 <!-- Gelombang Air Bawah -->
                 <path class="water-wave" d="M3 19c2 1 4-1 6 0s4-1 6 0 4-1 6 0"/>
                </svg>`
    };
    const chosenIcon = projectIcons[data.iconType] || projectIcons.rf;
    const toolsList = Array.isArray(data.tools)
        ? data.tools
        : (typeof data.tools === "string" ? data.tools.split(",") : []);

    if (data.isCapstoneReport) {
        const p4Icons = {
            problem: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`,
            target: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>`,
            solution: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3"/></svg>`,
            role: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><polyline points="17 11 19 13 23 9"/></svg>`,
            layers: [
                `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/></svg>`,
                `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/></svg>`,
                `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>`,
                `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>`,
                `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>`
            ],
            sensors: [
                `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"/></svg>`,
                `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>`,
                `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 3h6M10 3v6.5L5 18a2 2 0 0 0 1.7 3h10.6a2 2 0 0 0 1.7-3l-5-8.5V3"/></svg>`,
                `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/></svg>`,
                `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><circle cx="6" cy="8" r="1.5"/><circle cx="18" cy="16" r="1.5"/><circle cx="17" cy="7" r="1"/><circle cx="7" cy="17" r="1"/></svg>`,
                `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12h4l3-9 6 18 3-9h4"/></svg>`
            ],
            app: [
                `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>`,
                `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
                `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
                `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`
            ]
        };

        modalBody.innerHTML = `
            <div class="modal-hero-header">
                <div class="modal-animated-icon" aria-hidden="true">${chosenIcon}</div>
                <div class="modal-title-group">
                    <span class="modal-category-badge">${data.category}</span>
                    <h2>${data.title}</h2>
                </div>
            </div>

            <!-- EXECUTIVE METRIC BANNER -->
            <div class="p4-exec-banner">
                <div class="p4-exec-top">
                    <span class="p4-exec-pill">Telkom University Purwokerto • Capstone Design 2026</span>
                    <span class="p4-exec-role">Role: IoT &amp; Mobile Application Developer</span>
                </div>
                <div class="modal-metrics-row p4-dark-metrics">
                    ${data.metrics.map(m => `
                        <div class="metric-pill-card">
                            <span class="metric-label">${m.label}</span>
                            <strong class="metric-value">${m.value}</strong>
                        </div>
                    `).join("")}
                </div>
            </div>

            <!-- A. PROJECT OVERVIEW -->
            <div id="p4-sec-a" class="report-section">
                <h3 class="report-sec-title"><span>A</span> Project Overview</h3>
                <div class="p4-two-col-cards">
                    <div class="p4-subcard p4-accent-card">
                        <div class="p4-card-head">
                            <span class="p4-icon-badge">${p4Icons.problem}</span>
                            <h4>Background &amp; Problem</h4>
                        </div>
                        <p>${data.overview.background}</p>
                    </div>
                    <div class="p4-subcard p4-accent-card">
                        <div class="p4-card-head">
                            <span class="p4-icon-badge">${p4Icons.target}</span>
                            <h4>System Objectives</h4>
                        </div>
                        <ul class="p4-bullet-list">
                            ${data.overview.objectives.map(item => `<li>${item}</li>`).join("")}
                        </ul>
                    </div>
                    <div class="p4-subcard p4-accent-card">
                        <div class="p4-card-head">
                            <span class="p4-icon-badge">${p4Icons.solution}</span>
                            <h4>Solution Architecture</h4>
                        </div>
                        <p>${data.overview.solution}</p>
                    </div>
                    <div class="p4-subcard p4-accent-card">
                        <div class="p4-card-head">
                            <span class="p4-icon-badge">${p4Icons.role}</span>
                            <h4>My Role &amp; Contribution</h4>
                        </div>
                        <p>${data.overview.contribution}</p>
                    </div>
                </div>
            </div>

            <!-- B. SYSTEM ARCHITECTURE -->
            <div id="p4-sec-b" class="report-section">
                <h3 class="report-sec-title"><span>B</span> System Architecture</h3>
                <p class="report-text">${data.architecture.description}</p>
                <div class="p4-mini-grid-2">
                    ${data.architecture.layers.map((l, idx) => `
                        <div class="p4-mini-card p4-with-icon">
                            <span class="p4-icon-badge sm">${p4Icons.layers[idx] || p4Icons.layers[0]}</span>
                            <div>
                                <h5>${l.title}</h5>
                                <p>${l.desc}</p>
                            </div>
                        </div>
                    `).join("")}
                </div>
                <div class="p4-gallery-grid p4-grid-1">
                    <figure class="sim-figure-card" onclick="openTaLightbox('${data.architecture.image.src}', '${data.architecture.image.title} — ${data.architecture.image.note}')">
                        <span class="fig-zoom-hint">Click to zoom</span>
                        <img src="${data.architecture.image.src}" alt="${data.architecture.image.title}">
                        <figcaption>
                            <strong>${data.architecture.image.title}</strong>
                            <span>${data.architecture.image.note}</span>
                        </figcaption>
                    </figure>
                </div>
            </div>

            <!-- C. HARDWARE DESIGN & IMPLEMENTATION -->
            <div id="p4-sec-c" class="report-section">
                <h3 class="report-sec-title"><span>C</span> Hardware Design &amp; Implementation</h3>
                <p class="report-text">${data.hardware.description}</p>
                <div class="p4-sensor-grid">
                    ${data.hardware.sensors.map((s, idx) => `
                        <div class="p4-sensor-chip">
                            <span class="p4-icon-badge sm">${p4Icons.sensors[idx] || p4Icons.sensors[0]}</span>
                            <div>
                                <strong>${s.name}</strong>
                                <p>${s.desc}</p>
                            </div>
                        </div>
                    `).join("")}
                </div>
                <div class="p4-gallery-grid p4-grid-2">
                    ${data.hardware.images.map(img => `
                        <figure class="sim-figure-card" onclick="openTaLightbox('${img.src}', '${img.title} — ${img.note}')">
                            <span class="fig-zoom-hint">Zoom</span>
                            <img src="${img.src}" alt="${img.title}">
                            <figcaption>
                                <strong>${img.title}</strong>
                                <span>${img.note}</span>
                            </figcaption>
                        </figure>
                    `).join("")}
                </div>
            </div>

            <!-- D. SYSTEM WORKFLOW & IOT COMMUNICATION -->
            <div id="p4-sec-d" class="report-section">
                <h3 class="report-sec-title"><span>D</span> System Workflow</h3>
                <div class="p4-flow-grid p4-connected-flow">
                    ${data.workflowIoT.steps.map(st => `
                        <div class="p4-flow-card">
                            <div class="flow-top-bar">
                                <span class="flow-num">STEP ${st.num}</span>
                                <span class="flow-arrow">&rarr;</span>
                            </div>
                            <h5>${st.title}</h5>
                            <p>${st.desc}</p>
                        </div>
                    `).join("")}
                </div>
                <div class="p4-gallery-grid p4-grid-2">
                    ${data.workflowIoT.images.map(img => `
                        <figure class="sim-figure-card" onclick="openTaLightbox('${img.src}', '${img.title} — ${img.note}')">
                            <span class="fig-zoom-hint">Zoom</span>
                            <img src="${img.src}" alt="${img.title}">
                            <figcaption>
                                <strong>${img.title}</strong>
                                <span>${img.note}</span>
                            </figcaption>
                        </figure>
                    `).join("")}
                </div>
            </div>

            <!-- E. MOBILE APPLICATION DEVELOPMENT -->
            <div id="p4-sec-e" class="report-section">
                <h3 class="report-sec-title"><span>E</span> Mobile Application Development (Flutter)</h3>
                <p class="report-text">${data.mobileApp.description}</p>
                <div class="p4-mini-grid-2">
                    ${data.mobileApp.features.map((f, idx) => `
                        <div class="p4-mini-card p4-with-icon">
                            <span class="p4-icon-badge sm">${p4Icons.app[idx] || p4Icons.app[0]}</span>
                            <div>
                                <h5>${f.title}</h5>
                                <p>${f.desc}</p>
                            </div>
                        </div>
                    `).join("")}
                </div>
                <div class="p4-gallery-grid p4-grid-4">
                    ${data.mobileApp.screenshots.map(img => `
                        <figure class="sim-figure-card" onclick="openTaLightbox('${img.src}', '${img.title} — ${img.note}')">
                            <span class="fig-zoom-hint">Zoom</span>
                            <img src="${img.src}" alt="${img.title}">
                            <figcaption>
                                <strong>${img.title}</strong>
                                <span>${img.note}</span>
                            </figcaption>
                        </figure>
                    `).join("")}
                </div>
            </div>

            <!-- F. KNN COMPOST MATURITY CLASSIFICATION -->
            <div id="p4-sec-f" class="report-section">
                <h3 class="report-sec-title"><span>F</span> KNN Compost Maturity Classification</h3>
                <p class="report-text">${data.knnSection.description}</p>
                <div class="p4-subcard p4-accent-card" style="margin-bottom: 14px;">
                    <div class="p4-card-head">
                        <span class="p4-icon-badge">${p4Icons.solution}</span>
                        <h4>KNN Algorithmic Pipeline</h4>
                    </div>
                    <ul class="p4-bullet-list">
                        ${data.knnSection.pipeline.map(p => `<li>${p}</li>`).join("")}
                    </ul>
                </div>
                <div class="p4-stage-grid">
                    ${data.knnSection.categories.map((c, idx) => `
                        <div class="p4-stage-card stage-variant-${idx + 1}">
                            <span class="stage-pill">${c.stage}</span>
                            <h5>${c.name}</h5>
                            <p>${c.desc}</p>
                        </div>
                    `).join("")}
                </div>
                <div class="analysis-callout" style="margin-top: 14px;">
                    <p><strong>Validated Model Performance:</strong> ${data.knnSection.performanceNote}</p>
                </div>
                <div class="p4-gallery-grid p4-grid-3">
                    ${data.knnSection.evalImages.map(img => `
                        <figure class="sim-figure-card" onclick="openTaLightbox('${img.src}', '${img.title} — ${img.note}')">
                            <span class="fig-zoom-hint">Zoom</span>
                            <img src="${img.src}" alt="${img.title}">
                            <figcaption>
                                <strong>${img.title}</strong>
                                <span>${img.note}</span>
                            </figcaption>
                        </figure>
                    `).join("")}
                </div>
                <div class="p4-gallery-grid p4-grid-2">
                    ${data.knnSection.appTestImages.map(img => `
                        <figure class="sim-figure-card" onclick="openTaLightbox('${img.src}', '${img.title} — ${img.note}')">
                            <span class="fig-zoom-hint">Zoom</span>
                            <img src="${img.src}" alt="${img.title}">
                            <figcaption>
                                <strong>${img.title}</strong>
                                <span>${img.note}</span>
                            </figcaption>
                        </figure>
                    `).join("")}
                </div>
            </div>

            <!-- G. SYSTEM TESTING & EVALUATION (UNIFIED CARD) -->
            <div id="p4-sec-g" class="report-section">
                <h3 class="report-sec-title"><span>G</span> System Testing &amp; Evaluation</h3>
                <p class="report-text">${data.testingSection.description}</p>

                <div class="p4-unified-eval-card">
                    <div class="p4-eval-header">
                        <h4>Sensor Calibration &amp; System Validation Results</h4>
                        <span>Verified against reference instruments</span>
                    </div>

                    <div class="p4-eval-rows">
                        <div class="p4-eval-row">
                            <div class="p4-eval-info">
                                <strong>TDS Sensor (Gravity Analog)</strong>
                                <span>vs. TDS calibration solution</span>
                            </div>
                            <div class="p4-eval-meter">
                                <div class="p4-bar-track">
                                    <div class="p4-bar-fill" style="width: 99.72%;"></div>
                                </div>
                                <strong class="p4-eval-pct">99.72%</strong>
                            </div>
                        </div>

                        <div class="p4-eval-row">
                            <div class="p4-eval-info">
                                <strong>Soil Temperature (DS18B20)</strong>
                                <span>vs. Digital soil tester 6-in-1</span>
                            </div>
                            <div class="p4-eval-meter">
                                <div class="p4-bar-track">
                                    <div class="p4-bar-fill" style="width: 99.56%;"></div>
                                </div>
                                <strong class="p4-eval-pct">99.56%</strong>
                            </div>
                        </div>

                        <div class="p4-eval-row">
                            <div class="p4-eval-info">
                                <strong>Soil Moisture (Capacitive)</strong>
                                <span>vs. Digital soil tester 6-in-1</span>
                            </div>
                            <div class="p4-eval-meter">
                                <div class="p4-bar-track">
                                    <div class="p4-bar-fill" style="width: 98.65%;"></div>
                                </div>
                                <strong class="p4-eval-pct">98.65%</strong>
                            </div>
                        </div>

                        <div class="p4-eval-row">
                            <div class="p4-eval-info">
                                <strong>Water pH Sensor (pH-4502C)</strong>
                                <span>vs. Buffer pH solution</span>
                            </div>
                            <div class="p4-eval-meter">
                                <div class="p4-bar-track">
                                    <div class="p4-bar-fill" style="width: 97.70%;"></div>
                                </div>
                                <strong class="p4-eval-pct">97.70%</strong>
                            </div>
                        </div>

                        <div class="p4-eval-row">
                            <div class="p4-eval-info">
                                <strong>Soil pH Sensor</strong>
                                <span>vs. Digital soil tester 6-in-1</span>
                            </div>
                            <div class="p4-eval-meter">
                                <div class="p4-bar-track">
                                    <div class="p4-bar-fill" style="width: 95.00%;"></div>
                                </div>
                                <strong class="p4-eval-pct">95.00%</strong>
                            </div>
                        </div>
                    </div>

                    <div class="p4-eval-footer-metrics">
                        <div class="p4-eval-mini-stat">
                            <span class="stat-label">MQTT Latency (HiveMQ)</span>
                            <strong>80.8 ms Avg</strong>
                            <small>Range: 55 – 110 ms</small>
                        </div>
                        <div class="p4-eval-mini-stat">
                            <span class="stat-label">Firebase Push Alert</span>
                            <strong>&ge; 80% Trigger</strong>
                            <small>Delivered reliably on Android</small>
                        </div>
                        <div class="p4-eval-mini-stat">
                            <span class="stat-label">Prototype Build Cost</span>
                            <strong>Rp1,404,000</strong>
                            <small>Under Rp1,500,000 budget</small>
                        </div>
                    </div>
                </div>

                <div class="p4-gallery-grid p4-grid-3">
                    ${data.testingSection.images.map(img => `
                        <figure class="sim-figure-card" onclick="openTaLightbox('${img.src}', '${img.title} — ${img.note}')">
                            <span class="fig-zoom-hint">Zoom</span>
                            <img src="${img.src}" alt="${img.title}">
                            <figcaption>
                                <strong>${img.title}</strong>
                                <span>${img.note}</span>
                            </figcaption>
                        </figure>
                    `).join("")}
                </div>

                <div class="analysis-callout" style="margin-top: 16px;">
                    <h4 style="margin: 0 0 8px 0; font-size: 1rem;">Project Outcome</h4>
                    <p style="margin-bottom: 10px;">${data.testingSection.outcomeMain}</p>
                    <p style="margin: 0;">${data.testingSection.outcomeClosing}</p>
                </div>
            </div>

            <div class="modal-footer-bar">
                <span class="modal-tools-label">Technologies &amp; Stack:</span>
                <div class="modal-tags-wrap">
                    ${toolsList.map(t => `<span>${t.trim()}</span>`).join("")}
                </div>
            </div>
        `;

        animateModalOpen(modal);
        lockBackgroundScroll();
        return;
    }

    // KHUSUS PROJECT 1 (5G NR Coverage Planning)
    if (projectId === "project1") {
        modalBody.innerHTML = `
            <div class="modal-hero-header">
                <div class="modal-animated-icon" aria-hidden="true">${chosenIcon}</div>
                <div class="modal-title-group">
                    <span class="modal-category-badge">${data.category}</span>
                    <h2>${data.title}</h2>
                </div>
            </div>

            <!-- EXECUTIVE METRIC BANNER -->
            <div class="p4-exec-banner">
                <div class="p4-exec-top">
                    <span class="p4-exec-pill">RF Network Planning • Atoll 3.4 Simulation</span>
                    <span class="p4-exec-role">Location: Ajibarang District, Banyumas (66.5 km²)</span>
                </div>
                <div class="modal-metrics-row p4-dark-metrics">
                    ${data.metrics.map(m => `
                        <div class="metric-pill-card">
                            <span class="metric-label">${m.label}</span>
                            <strong class="metric-value">${m.value}</strong>
                        </div>
                    `).join("")}
                </div>
            </div>

            <!-- 01. SIMULATION OVERVIEW & RF PLANNING WORKFLOW -->
            <div class="report-section">
                <h3 class="report-sec-title"><span>01</span> Project Overview</h3>
                <p class="report-text">${data.intro}</p>
                <div class="p1-workflow-grid">
                    ${data.workflow.map(w => `
                        <div class="p1-step-card">
                            <span class="p1-step-num">STEP ${w.step}</span>
                            <h5>${w.title}</h5>
                            <p>${w.desc}</p>
                        </div>
                    `).join("")}
                </div>
            </div>

            <!-- 02. 5G NR LINK BUDGET & CELL DIMENSIONING -->
            <div class="report-section">
                <h3 class="report-sec-title"><span>02</span> 5G NR Link Budget &amp; Cell Dimensioning</h3>
                <div class="p1-calc-strip">
                    ${data.calcSummary.map(c => `
                        <div class="p1-calc-box">
                            <span>${c.label}</span>
                            <strong>${c.val}</strong>
                        </div>
                    `).join("")}
                </div>

                <div class="p1-table-wrap">
                    <table class="p1-lb-table">
                        <thead>
                            <tr>
                                <th>Link Budget Parameter</th>
                                <th>Unit</th>
                                <th>Downlink (DL)</th>
                                <th>Uplink (UL)</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${data.linkBudget.map(row => `
                                <tr>
                                    <td><strong>${row[0]}</strong></td>
                                    <td><span class="p1-unit-pill">${row[1]}</span></td>
                                    <td>${row[2]}</td>
                                    <td>${row[3]}</td>
                                </tr>
                            `).join("")}
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- 03. SIGNAL COVERAGE EVALUATION (SS-RSRP & SS-SINR) -->
            <div class="report-section">
                <h3 class="report-sec-title"><span>03</span> Coverage Prediction &amp; Signal Quality (Atoll 3.4)</h3>
                <div class="p1-kpi-legend-grid">
                    <div class="p1-legend-card">
                        <h4>SS-RSRP Signal Level Thresholds</h4>
                        <div class="p1-legend-list">
                            ${data.rsrpTable.map(r => `
                                <div class="p1-legend-item">
                                    <span class="p1-color-dot" style="background: ${r.color};"></span>
                                    <span class="p1-lvl-range">${r.level}</span>
                                    <strong class="p1-lvl-status">${r.desc}</strong>
                                </div>
                            `).join("")}
                        </div>
                    </div>

                    <div class="p1-legend-card">
                        <h4>SS-SINR Quality Thresholds</h4>
                        <div class="p1-legend-list">
                            ${data.sinrTable.map(s => `
                                <div class="p1-legend-item">
                                    <span class="p1-color-dot" style="background: ${s.color};"></span>
                                    <span class="p1-lvl-range">${s.level}</span>
                                    <strong class="p1-lvl-status">${s.desc}</strong>
                                </div>
                            `).join("")}
                        </div>
                    </div>
                </div>

                <div class="p4-gallery-grid p4-grid-2">
                    ${data.images.map(img => `
                        <figure class="sim-figure-card" onclick="openTaLightbox('${img.src}', '${img.title} — ${img.note}')">
                            <span class="fig-zoom-hint">Click to zoom</span>
                            <img src="${img.src}" alt="${img.title}">
                            <figcaption>
                                <strong>${img.title}</strong>
                                <span>${img.note}</span>
                            </figcaption>
                        </figure>
                    `).join("")}
                </div>
            </div>

            <!-- 04. ENGINEERING ANALYSIS & OPTIMIZATION INSIGHT -->
            <div class="report-section">
                <h3 class="report-sec-title"><span>04</span> Conclusion</h3>
                <div class="analysis-callout">
                    <p><strong>Simulation Verdict:</strong> ${data.analysis}</p>
                </div>
            </div>

            <div class="modal-footer-bar">
                <span class="modal-tools-label">Technologies &amp; Tools:</span>
                <div class="modal-tags-wrap">
                    ${toolsList.map(t => `<span>${t.trim()}</span>`).join("")}
                </div>
            </div>
        `;

        animateModalOpen(modal);
        lockBackgroundScroll();
        return;
    }

    // KHUSUS PROJECT 2 (4G LTE Field Drive Test Analysis)
    if (projectId === "project2") {
        modalBody.innerHTML = `
            <div class="modal-hero-header">
                <div class="modal-animated-icon" aria-hidden="true">${chosenIcon}</div>
                <div class="modal-title-group">
                    <span class="modal-category-badge">${data.category}</span>
                    <h2>${data.title}</h2>
                </div>
            </div>

            <!-- EXECUTIVE METRIC BANNER -->
            <div class="p4-exec-banner">
                <div class="p4-exec-top">
                    <span class="p4-exec-pill">Empirical Field Measurement • G-NetTrack Pro &amp; GIS</span>
                    <span class="p4-exec-role">Corridor: Purwokerto Urban Loop (2.77 km)</span>
                </div>
                <div class="modal-metrics-row p4-dark-metrics">
                    ${data.metrics.map(m => `
                        <div class="metric-pill-card">
                            <span class="metric-label">${m.label}</span>
                            <strong class="metric-value">${m.value}</strong>
                        </div>
                    `).join("")}
                </div>
            </div>

            <!-- 01. DRIVE TEST SCOPE, ROUTE CORRIDOR & METHODOLOGY -->
            <div class="report-section">
                <h3 class="report-sec-title"><span>01</span> Field Measurement Scope &amp; Drive Test Route</h3>
                <p class="report-text">${data.intro}</p>

                <div class="p2-route-banner">
                    <span class="p2-route-tag">MEASURED ROUTE</span>
                    <p>Kost Eyang Harto &rarr; Jl. Jend. Sudirman &rarr; Jl. Pierre Tendean &rarr; Jl. Kom. Bambang Suprapto &rarr; Jl. Brigjen Katamso &rarr; Jl. Moch. Ikhsan</p>
                </div>

                <div class="p1-workflow-grid">
                    ${data.workflow.map(w => `
                        <div class="p1-step-card">
                            <span class="p1-step-num">PHASE ${w.step}</span>
                            <h5>${w.title}</h5>
                            <p>${w.desc}</p>
                        </div>
                    `).join("")}
                </div>
            </div>

            <!-- 02. EMPIRICAL KPI SUMMARY (278 SAMPLES) -->
            <div class="report-section">
                <h3 class="report-sec-title"><span>02</span> ${data.section2Title || "Field Drive Test KPI Summary (278 Samples)"}</h3>
                <div class="p1-calc-strip">
                    ${data.calcSummary.map(c => `
                        <div class="p1-calc-box">
                            <span>${c.label}</span>
                            <strong>${c.val}</strong>
                        </div>
                    `).join("")}
                </div>

                <div class="p1-table-wrap">
                    <table class="p1-lb-table">
                        <thead>
                            <tr>
                                ${data.kpiTableHeaders.map(h => `<th>${h}</th>`).join("")}
                            </tr>
                        </thead>
                        <tbody>
                            ${data.linkBudget.map(row => `
                                <tr>
                                    <td><strong>${row[0]}</strong></td>
                                    <td><span class="p2-status-badge">${row[1]}</span></td>
                                    <td>${row[2]}</td>
                                    <td><strong>${row[3]}</strong></td>
                                </tr>
                            `).join("")}
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- 03. 4-PARAMETER LTE BENCHMARK THRESHOLDS -->
            <div class="report-section">
                <h3 class="report-sec-title"><span>03</span> 4G LTE KPI Classification Benchmarks</h3>
                <div class="p1-kpi-legend-grid">
                    <div class="p1-legend-card">
                        <h4>RSRP (Reference Signal Received Power)</h4>
                        <div class="p1-legend-list">
                            ${data.rsrpTable.map(r => `
                                <div class="p1-legend-item">
                                    <span class="p1-color-dot" style="background: ${r.color};"></span>
                                    <span class="p1-lvl-range">${r.level}</span>
                                    <strong class="p1-lvl-status">${r.desc}</strong>
                                </div>
                            `).join("")}
                        </div>
                    </div>

                    <div class="p1-legend-card">
                        <h4>SINR (Signal-to-Interference-plus-Noise Ratio)</h4>
                        <div class="p1-legend-list">
                            ${data.sinrTable.map(s => `
                                <div class="p1-legend-item">
                                    <span class="p1-color-dot" style="background: ${s.color};"></span>
                                    <span class="p1-lvl-range">${s.level}</span>
                                    <strong class="p1-lvl-status">${s.desc}</strong>
                                </div>
                            `).join("")}
                        </div>
                    </div>

                    <div class="p1-legend-card">
                        <h4>RSRQ (Reference Signal Received Quality)</h4>
                        <div class="p1-legend-list">
                            ${data.rsrqTable.map(q => `
                                <div class="p1-legend-item">
                                    <span class="p1-color-dot" style="background: ${q.color};"></span>
                                    <span class="p1-lvl-range">${q.level}</span>
                                    <strong class="p1-lvl-status">${q.desc}</strong>
                                </div>
                            `).join("")}
                        </div>
                    </div>

                    <div class="p1-legend-card">
                        <h4>UL / DL Throughput Bitrate</h4>
                        <div class="p1-legend-list">
                            ${data.throughputTable.map(t => `
                                <div class="p1-legend-item">
                                    <span class="p1-color-dot" style="background: ${t.color};"></span>
                                    <span class="p1-lvl-range">${t.level}</span>
                                    <strong class="p1-lvl-status">${t.desc}</strong>
                                </div>
                            `).join("")}
                        </div>
                    </div>
                </div>
            </div>

            <!-- 04. GOOGLE EARTH SPATIAL MAPS & DISTRIBUTION CHARTS -->
            <div class="report-section">
                <h3 class="report-sec-title"><span>04</span> Google Earth Spatial Maps &amp; Statistical Charts</h3>
                <div class="p2-paired-stack">
                    ${data.images.map(img => `
                        <figure class="sim-figure-card p2-paired-card">
                            <div class="p2-dual-media">
                                <div class="p2-media-item" onclick="openTaLightbox('${img.src}', '${img.title} (Spatial Map)')">
                                    <span class="fig-zoom-hint">Zoom Map</span>
                                    <img src="${img.src}" alt="${img.title} - Map">
                                </div>
                                <div class="p2-media-item" onclick="openTaLightbox('${img.chartSrc}', '${img.title} (Distribution Chart)')">
                                    <span class="fig-zoom-hint">Zoom Chart</span>
                                    <img src="${img.chartSrc}" alt="${img.title} - Chart">
                                </div>
                            </div>
                            <figcaption>
                                <strong>${img.title}</strong>
                                <span>${img.note}</span>
                            </figcaption>
                        </figure>
                    `).join("")}
                </div>
            </div>

            <!-- 05. FIELD OPTIMIZATION ANALYSIS -->
            <div class="report-section">
                <h3 class="report-sec-title"><span>05</span> Root-Cause Analysis</h3>
                <div class="analysis-callout">
                    <p><strong>Field Audit Verdict:</strong> ${data.analysis}</p>
                </div>
            </div>

            <div class="modal-footer-bar">
                <span class="modal-tools-label">Tools &amp; Parameters:</span>
                <div class="modal-tags-wrap">
                    ${toolsList.map(t => `<span>${t.trim()}</span>`).join("")}
                </div>
            </div>
        `;

        animateModalOpen(modal);
        lockBackgroundScroll();
        return;
    }

    if (data.linkBudget) {
        modalBody.innerHTML = `
            <div class="modal-hero-header">
                <div class="modal-animated-icon" aria-hidden="true">${chosenIcon}</div>
                <div class="modal-title-group">
                    <span class="modal-category-badge">${data.category}</span>
                    <h2>${data.title}</h2>
                </div>
            </div>

            <div class="report-section">
                <h3 class="report-sec-title"><span>01</span> Introduction</h3>
                <p class="report-text">${data.intro}</p>
                ${data.metrics ? `
                <div class="modal-metrics-row">
                    ${data.metrics.map(m => `
                        <div class="metric-pill-card">
                            <span class="metric-label">${m.label}</span>
                            <strong class="metric-value">${m.value}</strong>
                        </div>
                    `).join("")}
                </div>` : ""}
            </div>

            ${data.workflow ? `
            <div class="report-section">
                <h3 class="report-sec-title"><span>02</span> Planning Workflow</h3>
                <div class="workflow-stepper">
                    ${data.workflow.map(w => `
                        <div class="workflow-step-card">
                            <div class="step-badge">${w.step}</div>
                            <h4>${w.title}</h4>
                            <p>${w.desc}</p>
                        </div>
                    `).join("")}
                </div>
            </div>` : ""}

            <div class="report-section">
                <div class="report-sec-title"><span>03</span> ${data.tableTitle || data.section3Title || "Field Drive Test KPI Summary (278 Samples)"}</div>
                <div class="table-scroll-wrap">
                    <table class="tech-data-table">
                        <thead>
                            <tr>
                                ${data.kpiTableHeaders
                                    ? data.kpiTableHeaders.map(h => `<th>${h}</th>`).join("")
                                    : `<th>Parameter</th><th>Unit</th><th>Downlink</th><th>Uplink</th>`
                                }
                            </tr>
                        </thead>
                        <tbody>
                            ${data.linkBudget.map(row => `
                                <tr>
                                    <td>${row[0]}</td>
                                    <td><span class="unit-tag">${row[1]}</span></td>
                                    <td>${row[2]}</td>
                                    <td>${projectId === "project5" && row[3] ? `<span class="p5-status-pill"><span class="p5-pulse-dot"></span>${row[3]}</span>` : (row[3] || "")}</td>
                                    ${row[4] ? `<td>${row[4]}</td>` : ""}
                                </tr>
                            `).join("")}
                        </tbody>
                    </table>
                </div>
                ${data.calcSummary ? `
        <div class="calc-result-strip">
            ${data.calcSummary.map(c => `
                <div class="calc-item">
                    <span>${c.label}:</span>
                    <strong>${c.val}</strong>
                </div>
            `).join("")}
        </div>` : ""}
    </div>

            ${(data.rsrpTable && data.sinrTable) ? `
            <div class="report-section">
                <h3 class="report-sec-title"><span>04</span> ${data.throughputTable ? "Evaluation Parameter Standards (RSRP, RSRQ, SINR & Throughput)" : "Evaluation Parameter Standards (RSRP & SINR)"}</h3>
                <div class="param-tables-grid">
                    <div class="param-table-card">
                        <h4>RSRP Parameter Thresholds</h4>
                        <table class="tech-data-table compact">
                            <thead>
                                <tr><th>Signal Level (dBm)</th><th>Color</th><th>Category</th></tr>
                            </thead>
                            <tbody>
                                ${data.rsrpTable.map(r => `
                                    <tr>
                                        <td>${r.level}</td>
                                        <td><span class="color-swatch" style="background:${r.color};"></span></td>
                                        <td>${r.desc}</td>
                                    </tr>
                                `).join("")}
                            </tbody>
                        </table>
                    </div>

                    <div class="param-table-card">
                        <h4>SINR Parameter Thresholds</h4>
                        <table class="tech-data-table compact">
                            <thead>
                                <tr><th>Signal Level (dB)</th><th>Color</th><th>Category</th></tr>
                            </thead>
                            <tbody>
                                ${data.sinrTable.map(s => `
                                    <tr>
                                        <td>${s.level}</td>
                                        <td><span class="color-swatch" style="background:${s.color};"></span></td>
                                        <td>${s.desc}</td>
                                    </tr>
                                `).join("")}
                            </tbody>
                        </table>
                    </div>

                    ${data.rsrqTable ? `
                    <div class="param-table-card">
                        <h4>RSRQ Parameter Thresholds</h4>
                        <table class="tech-data-table compact">
                            <thead>
                                <tr><th>Signal Level (dB)</th><th>Color</th><th>Category</th></tr>
                            </thead>
                            <tbody>
                                ${data.rsrqTable.map(q => `
                                    <tr>
                                        <td>${q.level}</td>
                                        <td><span class="color-swatch" style="background:${q.color};"></span></td>
                                        <td>${q.desc}</td>
                                    </tr>
                                `).join("")}
                            </tbody>
                        </table>
                    </div>` : ""}

                    ${data.throughputTable ? `
                    <div class="param-table-card">
                        <h4>Throughput UL / DL Thresholds</h4>
                        <table class="tech-data-table compact">
                            <thead>
                                <tr><th>Bitrate Range (kbps)</th><th>Color</th><th>Category</th></tr>
                            </thead>
                            <tbody>
                                ${data.throughputTable.map(t => `
                                    <tr>
                                        <td>${t.level}</td>
                                        <td><span class="color-swatch" style="background:${t.color};"></span></td>
                                        <td>${t.desc}</td>
                                    </tr>
                                `).join("")}
                            </tbody>
                        </table>
                    </div>` : ""}
                </div>
            </div>` : ""}

            ${data.images ? `
            <div class="report-section">
                <h3 class="report-sec-title"><span>${data.galleryNumber || "05"}</span> ${data.galleryTitle || "Google Earth Spatial Maps & KPI Charts"}</h3>
                <div class="sim-images-stack">
                    ${data.images.map(img => `
                        <figure class="sim-figure-card">
                            ${img.chartSrc ? `
                                <div class="dual-media-grid">
                                    <img src="${img.src}" alt="${img.title} - Map">
                                    <img src="${img.chartSrc}" alt="${img.title} - Chart">
                                </div>
                            ` : `
                                <img src="${img.src}" alt="${img.title}">
                            `}
                            <figcaption>
                                <strong>${img.title}</strong>
                                <span>${img.note}</span>
                            </figcaption>
                        </figure>
                    `).join("")}
                </div>
            </div>` : ""}

            ${data.demoVideo ? `
            <div class="report-section">
                <h3 class="report-sec-title"><span>05</span> Hardware Demonstration Video</h3>
                <figure class="sim-figure-card">
                <div class="demo-video-wrap" onclick="this.innerHTML='<iframe src=\\'${data.demoVideo.youtubeEmbed}&autoplay=1\\' title=\\'Project Demo Video\\' referrerpolicy=\\'strict-origin-when-cross-origin\\' allow=\\'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\\' allowfullscreen></iframe>'" style="cursor:pointer; position:relative;">
            <img src="https://i.ytimg.com/vi/8IxMflOfH-k/hqdefault.jpg" alt="Play Demo Video" style="width:100%; height:100%; object-fit:cover;">
            <button type="button" aria-label="Play Video" style="position:absolute; inset:0; margin:auto; width:64px; height:44px; background:rgba(220,38,38,0.92); color:#fff; border:none; border-radius:12px; font-size:20px; cursor:pointer;">&#9654;</button>
        </div>
        <figcaption>
            <strong>System Demo Playback</strong>
            <span>${data.demoVideo.caption}</span>
        </figcaption>
    </figure>
</div>` : ""}

            <div class="report-section">
                <h3 class="report-sec-title"><span>06</span> Analysis &amp; Conclusion</h3>
                <div class="analysis-callout">
                    <p>${data.analysis}</p>
                </div>
            </div>

            <div class="modal-footer-bar">
                <span class="modal-tools-label">Tools &amp; Parameters:</span>
                <div class="modal-tags-wrap">
                    ${toolsList.map(t => `<span>${t.trim()}</span>`).join("")}
                </div>
            </div>
        `;
    } else {
        modalBody.innerHTML = `
            <div class="modal-hero-header">
                <div class="modal-animated-icon" aria-hidden="true">${chosenIcon}</div>
                <div class="modal-title-group">
                    <span class="modal-category-badge">${data.category}</span>
                    <h2>${data.title}</h2>
                </div>
            </div>

            <div class="report-section">
                <h3 class="report-sec-title"><span>01</span> Project Overview</h3>
                <p class="report-text">${data.overview}</p>
            </div>

            <div class="param-tables-grid" style="margin-bottom: 24px;">
                <div class="analysis-callout">
                    <h4 style="margin:0 0 8px 0; color:#142A45; font-size:0.95rem;">Objectives</h4>
                    <p>${data.objectives}</p>
                </div>
                <div class="analysis-callout">
                    <h4 style="margin:0 0 8px 0; color:#142A45; font-size:0.95rem;">Methodology</h4>
                    <p>${data.methodology}</p>
                </div>
            </div>

            <div class="report-section">
                <h3 class="report-sec-title"><span>02</span> Results &amp; Documentation</h3>
                <p class="report-text">${data.results}</p>
                <div class="analysis-callout">
                    <p>${data.docs}</p>
                </div>
            </div>

            <div class="modal-footer-bar">
                <span class="modal-tools-label">Tools &amp; Technologies:</span>
                <div class="modal-tags-wrap">
                    ${toolsList.map(t => `<span>${t.trim()}</span>`).join("")}
                </div>
            </div>
        `;
    }

    animateModalOpen(modal);
    lockBackgroundScroll();
    modal.scrollTop = 0;
    const modalContent = modal.querySelector(".modal-content, .modal-box, .modal-body");
    if (modalContent) modalContent.scrollTop = 0;
}

function closeModal(event) {
    if (event) event.preventDefault();
    const modal = document.getElementById("projectModal");
    if (!modal) return;

    const iframes = modal.querySelectorAll("iframe");
    iframes.forEach(iframe => {
        if (iframe.contentWindow) {
            iframe.contentWindow.postMessage(
                JSON.stringify({ event: "command", func: "pauseVideo", args: [] }),
                "*"
            );
        }
        iframe.src = "";
    });

    const videos = modal.querySelectorAll("video");
    videos.forEach(video => video.pause());

    const dialog = modal.querySelector(".modal-content");
    if (dialog) {
        const closing = dialog.animate(
            [
                { opacity: 1, transform: "translateY(0) scale(1)" },
                { opacity: 0, transform: "translateY(18px) scale(0.97)" }
            ],
            { duration: 220, easing: "ease-in", fill: "forwards" }
        );
        closing.onfinish = () => {
            modal.classList.remove("show", "open", "active");
            modal.style.opacity = "";
            modal.style.visibility = "";
            modal.style.pointerEvents = "";
            modal.scrollTop = 0;
            dialog.scrollTop = 0;
            unlockBackgroundScroll();
        };
    } else {
        modal.classList.remove("show", "open", "active");
        unlockBackgroundScroll();
    }
}

function openTaLightbox(src, caption) {
    let overlay = document.getElementById("taLightboxOverlay");
    if (!overlay) {
        overlay = document.createElement("div");
        overlay.id = "taLightboxOverlay";
        overlay.className = "ta-lightbox-overlay";
        overlay.innerHTML = `
            <button type="button" class="ta-lightbox-close" aria-label="Close image preview" onclick="closeTaLightbox()">&times;</button>
            <img id="taLightboxImg" src="" alt="Preview">
            <p id="taLightboxCaption" class="ta-lightbox-caption"></p>
        `;
        overlay.addEventListener("click", function (e) {
            if (e.target === overlay) closeTaLightbox();
        });
        document.body.appendChild(overlay);
    }
    document.getElementById("taLightboxImg").src = src;
    document.getElementById("taLightboxCaption").textContent = caption;
    overlay.classList.add("active");
}

function closeTaLightbox() {
    const overlay = document.getElementById("taLightboxOverlay");
    if (overlay) overlay.classList.remove("active");
}

window.addEventListener("click", function (event) { // <-- Baris 1106 di layar Anda
    const modal = document.getElementById("projectModal");
    if (event.target === modal) closeModal();
});

window.addEventListener("click", function (event) {
    const modal = document.getElementById("projectModal");
    if (event.target === modal) closeModal();
});

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") closeModal();
});

document.addEventListener("DOMContentLoaded", function () {
    /* 1. Persistent Network Nodes & Floating Particles Canvas */
    const canvas = document.getElementById("networkCanvas");
    if (canvas) {
        const ctx = canvas.getContext("2d");
        let width, height, particles;
        const maxDist = 145;

        function initCanvas() {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            const count = Math.min(55, Math.floor((width * height) / 24000));
            particles = [];
            for (let i = 0; i < count; i++) {
                particles.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    vx: (Math.random() - 0.5) * 0.35,
                    vy: (Math.random() - 0.5) * 0.35,
                    r: Math.random() * 1.8 + 1,
                    isCyan: Math.random() > 0.45
                });
            }
        }

        function animateNetwork() {
            ctx.clearRect(0, 0, width, height);

            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];
                p.x += p.vx;
                p.y += p.vy;

                if (p.x < 0 || p.x > width) p.vx *= -1;
                if (p.y < 0 || p.y > height) p.vy *= -1;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fillStyle = p.isCyan ? "rgba(54, 214, 208, 0.7)" : "rgba(37, 137, 216, 0.65)";
                ctx.fill();

                for (let j = i + 1; j < particles.length; j++) {
                    const p2 = particles[j];
                    const dx = p.x - p2.x;
                    const dy = p.y - p2.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < maxDist) {
                        const alpha = (1 - dist / maxDist) * 0.28;
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.strokeStyle = `rgba(37, 137, 216, ${alpha})`;
                        ctx.lineWidth = 0.9;
                        ctx.stroke();
                    }
                }
            }
            requestAnimationFrame(animateNetwork);
        }

        initCanvas();
        animateNetwork();
        window.addEventListener("resize", initCanvas);
    }

    /* 2. Mobile Navigation & Scroll Active Link + Subtle Parallax */
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");
    const navItems = document.querySelectorAll(".nav-links a");
    const sections = document.querySelectorAll("section[id]");
    const parallaxEls = document.querySelectorAll("[data-parallax]");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", function () {
            menuToggle.classList.toggle("open");
            navLinks.classList.toggle("active");
        });

        navItems.forEach(function (link) {
            link.addEventListener("click", function () {
                menuToggle.classList.remove("open");
                navLinks.classList.remove("active");
            });
        });
    }

    function onScrollEffects() {
        const scrollY = window.scrollY;

        parallaxEls.forEach(function (el) {
            const speed = parseFloat(el.getAttribute("data-parallax")) || 0;
            el.style.transform = `translate3d(0, ${scrollY * speed}px, 0)`;
        });

        const scrollPos = scrollY + 150;
        sections.forEach(function (section) {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute("id");

            if (scrollPos >= top && scrollPos < top + height) {
                navItems.forEach(function (item) {
                    item.classList.remove("active");
                    if (item.getAttribute("href") === "#" + id) {
                        item.classList.add("active");
                    }
                });
            }
        });
    }

    window.addEventListener("scroll", onScrollEffects, { passive: true });
    onScrollEffects();

    /* 3. Scroll-Triggered Reveal & Staggered Card Timing */
    const sectionBlocks = ".section-header, .about-bio, .skills-wrapper-card, .contact-grid";
    const cardSelectors = ".stat-card, .exp-card, .org-dark-card, .skill-card, .skill-soft-box, .project-card, .contact-card";

    document.querySelectorAll(sectionBlocks).forEach(function (block) {
        block.classList.add("reveal");
    });

    document.querySelectorAll(cardSelectors).forEach(function (card) {
        card.classList.add("stagger-item");
    });

    const revealElements = document.querySelectorAll(".reveal, .stagger-item");

    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver(
            function (entries) {
                let batchIndex = 0;
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        if (!entry.target.classList.contains("visible")) {
                            if (entry.target.classList.contains("stagger-item")) {
                                entry.target.style.transitionDelay = `${batchIndex * 120}ms`;
                                batchIndex++;
                            }
                            entry.target.classList.add("visible");
                        }
                    } else {
                        entry.target.style.transitionDelay = "0ms";
                        entry.target.classList.remove("visible");
                    }
                });
            },
            { threshold: 0.08, rootMargin: "0px 0px -30px 0px" }
        );

        revealElements.forEach(function (el) {
            observer.observe(el);
        });
    }
});