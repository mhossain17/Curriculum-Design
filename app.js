(() => {
  "use strict";

  // Fallback data is injected below so the app still runs when fetch is blocked on file://
  const FALLBACK_CURRICULUM = {
  "course": {
    "title": "HS for CTEA — DC Circuit Fundamentals (Semester Curriculum Guide)",
    "school": "Riverview High School CTE Department",
    "audience": "Teachers and administrators",
    "duration_days": 60,
    "schedule_notes": "Semester model: 15 instructional weeks, approximately 4 class meetings per week (45–50 minutes).",
    "description": "This semester course introduces high school learners to DC circuit fundamentals through discovery-based instruction, structured practice, and iterative troubleshooting. Students learn circuit safety, component identification, schematic reading, electrical measurement, and practical build quality, culminating in a soldered final project.",
    "instructional_model": "Discovery-based, labs-first sequence: model, guided lab, debrief, then formalize concepts.",
    "major_routines": [
      "Engineering notebook entries in every class (aim, setup, data, reflection)",
      "Exit reflections after labs (what worked, what failed, what changed)",
      "Daily safety norms: PPE check, tool handling, cleanup and station reset",
      "Weekly misconception checks using short warmups and board talks"
    ]
  },
  "objectives": [
    "SWBAT apply classroom electrical safety expectations during setup, testing, and cleanup.",
    "SWBAT interpret basic DC schematics and translate them to physical builds.",
    "SWBAT measure voltage, current, resistance, and continuity using a DMM.",
    "SWBAT use Ohm's Law and power equations to predict circuit behavior.",
    "SWBAT analyze and build series, parallel, and series-parallel circuits.",
    "SWBAT document evidence of learning using concise technical writing and data tables.",
    "SWBAT demonstrate workmanship in soldered connections and identify common defects."
  ],
  "units": [
    {
      "id": "u1",
      "title": "Introduction to Lab Safety and Course Routines",
      "duration_days": 5,
      "rationale": "Students need reliable safety and workflow habits before handling energized circuits and solder tools.",
      "learning_goals": [
        "Apply class safety rules and emergency procedures.",
        "Set up and reset a station using checklist routines.",
        "Use an engineering notebook format for technical evidence."
      ],
      "essential_questions": [
        "What makes a circuit lab safe and productive?",
        "How does routine improve quality and consistency?"
      ],
      "standards": {
        "cdos": [
          "CDOS 3a-1",
          "CDOS 3a-2"
        ],
        "ngls": [
          "HS-ETS1-3"
        ],
        "etai_dc": [
          "ETA-DC-01"
        ],
        "nocti": [
          "NOCTI-PE-1.1"
        ]
      },
      "key_vocabulary": [
        "PPE",
        "hazard",
        "risk mitigation",
        "short circuit",
        "lockout"
      ],
      "required_materials": {
        "student_kit": [
          "Safety glasses",
          "Engineering notebook",
          "Pencil and ruler"
        ],
        "communal": [
          "Safety signage",
          "Classroom circuit trainer bins"
        ]
      },
      "formative_assessments": [
        "Safety do-now scenarios",
        "Notebook format check",
        "Station setup spot-check"
      ],
      "summative_assessments": [
        "Safety procedures quiz",
        "Safety performance check"
      ],
      "differentiation": {
        "supports": [
          "Visual safety icons at each station",
          "Step-by-step checklist cards"
        ],
        "extensions": [
          "Student-led safety audit of one class routine"
        ]
      },
      "misconceptions": [
        "Low-voltage circuits are always risk-free.",
        "Cleanup is separate from technical quality."
      ],
      "teacher_look_fors": [
        "Students verbalize and follow PPE sequence.",
        "Notebook entries include date, objective, and evidence."
      ],
      "associated_lab_ids": [
        "l1"
      ]
    },
    {
      "id": "u2",
      "title": "Math and Engineering Notation for Circuits",
      "duration_days": 5,
      "rationale": "Students need unit fluency and notation precision to communicate and calculate like technicians.",
      "learning_goals": [
        "Convert between decimal and engineering notation.",
        "Use unit prefixes (milli, kilo, mega) accurately.",
        "Label values in notebooks and schematics using correct symbols."
      ],
      "essential_questions": [
        "Why does technical notation matter in troubleshooting?",
        "How do units drive decision-making in circuit design?"
      ],
      "standards": {
        "cdos": [
          "CDOS 3a-5"
        ],
        "ngls": [
          "HS-ETS1-2"
        ],
        "etai_dc": [
          "ETA-DC-02"
        ],
        "nocti": [
          "NOCTI-PE-2.3"
        ]
      },
      "key_vocabulary": [
        "engineering notation",
        "tolerance",
        "prefix",
        "significant figures",
        "unit analysis"
      ],
      "required_materials": {
        "student_kit": [
          "Engineering notebook",
          "Reference card: metric prefixes"
        ],
        "communal": [
          "Whiteboard formula anchor charts"
        ]
      },
      "formative_assessments": [
        "Notation conversion mini-checks",
        "Exit tickets on prefix interpretation"
      ],
      "summative_assessments": [
        "Engineering notation quiz"
      ],
      "differentiation": {
        "supports": [
          "Guided conversion templates",
          "Color-coded unit reference sheet"
        ],
        "extensions": [
          "Tolerance comparison challenge for real resistor samples"
        ]
      },
      "misconceptions": [
        "k and m can be used interchangeably.",
        "Units do not affect answer correctness if number is close."
      ],
      "teacher_look_fors": [
        "Students write full units with each final answer.",
        "Students catch and correct notation errors independently."
      ],
      "associated_lab_ids": [
        "l2"
      ]
    },
    {
      "id": "u3",
      "title": "Components and Schematic Reading",
      "duration_days": 6,
      "rationale": "Component identification and schematic literacy are prerequisites for successful builds and debugging.",
      "learning_goals": [
        "Identify symbols for common DC components.",
        "Map schematic paths to breadboard rows.",
        "Determine polarity-sensitive component orientation."
      ],
      "essential_questions": [
        "How does a schematic communicate circuit intent?",
        "What errors happen when symbol meaning is misunderstood?"
      ],
      "standards": {
        "cdos": [
          "CDOS 3a-2",
          "CDOS 3b-1"
        ],
        "ngls": [
          "HS-ETS1-2"
        ],
        "etai_dc": [
          "ETA-DC-02"
        ],
        "nocti": [
          "NOCTI-PE-2.3",
          "NOCTI-PE-4.1"
        ]
      },
      "key_vocabulary": [
        "anode",
        "cathode",
        "resistor code",
        "schematic",
        "breadboard rail"
      ],
      "required_materials": {
        "student_kit": [
          "Breadboard",
          "LED assortment",
          "Resistor assortment"
        ],
        "communal": [
          "Document camera for live schematic modeling",
          "Component ID chart"
        ]
      },
      "formative_assessments": [
        "Component ID stations",
        "Schematic-to-build whiteboard tasks"
      ],
      "summative_assessments": [
        "Schematic translation practical"
      ],
      "differentiation": {
        "supports": [
          "Pre-labeled breadboard diagrams",
          "Partner check protocol"
        ],
        "extensions": [
          "Reverse-engineer a simple household schematic symbol set"
        ]
      },
      "misconceptions": [
        "Physical layout must match schematic shape exactly.",
        "All component orientations are interchangeable."
      ],
      "teacher_look_fors": [
        "Students trace current path before wiring.",
        "Students verify LED polarity before power-on."
      ],
      "associated_lab_ids": [
        "l2"
      ]
    },
    {
      "id": "u4",
      "title": "Electrical Theory and Atomic Structure",
      "duration_days": 5,
      "rationale": "Conceptual models of charge and energy help students explain behavior beyond memorized rules.",
      "learning_goals": [
        "Describe current as charge flow and voltage as electric potential difference.",
        "Relate conductor properties to resistance.",
        "Use particle models to explain open/closed circuit behavior."
      ],
      "essential_questions": [
        "How do microscopic interactions shape macroscopic circuit behavior?",
        "Why do materials differ in conductivity?"
      ],
      "standards": {
        "cdos": [
          "CDOS 3b-1"
        ],
        "ngls": [
          "HS-PS3-1",
          "HS-PS3-3"
        ],
        "etai_dc": [
          "ETA-DC-03"
        ],
        "nocti": [
          "NOCTI-PE-4.1"
        ]
      },
      "key_vocabulary": [
        "electron flow",
        "potential difference",
        "conductor",
        "insulator",
        "charge"
      ],
      "required_materials": {
        "student_kit": [
          "Notebook",
          "Formula card"
        ],
        "communal": [
          "Particle model slides",
          "Conductivity demo kit"
        ]
      },
      "formative_assessments": [
        "Quick model sketches",
        "Think-pair-share concept checks"
      ],
      "summative_assessments": [
        "Concept explanation response"
      ],
      "differentiation": {
        "supports": [
          "Sentence stems for explanation writing",
          "Vocabulary support cards"
        ],
        "extensions": [
          "Research mini-brief: superconductors and constraints"
        ]
      },
      "misconceptions": [
        "Voltage moves through a circuit like a substance.",
        "Electrons are consumed by resistors."
      ],
      "teacher_look_fors": [
        "Students distinguish current and voltage language.",
        "Students justify claims using model evidence."
      ],
      "associated_lab_ids": [
        "l2"
      ]
    },
    {
      "id": "u5",
      "title": "Measurement Fundamentals with Digital Multimeter (DMM)",
      "duration_days": 6,
      "rationale": "Reliable measurement technique is core to safe diagnosis and verification of circuit behavior.",
      "learning_goals": [
        "Select correct DMM mode, range, and probe placement.",
        "Measure and record voltage, current, resistance, and continuity.",
        "Explain why improper meter placement can create faults."
      ],
      "essential_questions": [
        "How do we know if a circuit is performing as expected?",
        "What measurement mistakes cause unsafe conditions?"
      ],
      "standards": {
        "cdos": [
          "CDOS 3a-1",
          "CDOS 3b-2"
        ],
        "ngls": [
          "HS-PS2-6"
        ],
        "etai_dc": [
          "ETA-DC-05"
        ],
        "nocti": [
          "NOCTI-PE-3.2",
          "NOCTI-PE-4.3"
        ]
      },
      "key_vocabulary": [
        "continuity",
        "series measurement",
        "parallel measurement",
        "probe",
        "range"
      ],
      "required_materials": {
        "student_kit": [
          "Student DMM",
          "Probe leads",
          "Battery holder"
        ],
        "communal": [
          "Calibration check resistors",
          "Faulted sample boards"
        ]
      },
      "formative_assessments": [
        "Meter mode checkpoint",
        "Teacher observation checklist",
        "Notebook data table review"
      ],
      "summative_assessments": [
        "DMM practical station check"
      ],
      "differentiation": {
        "supports": [
          "Probe placement overlays",
          "Color-coded meter mode guide"
        ],
        "extensions": [
          "Tolerance error analysis using repeated measures"
        ]
      },
      "misconceptions": [
        "Current can be measured the same way as voltage.",
        "Continuity implies all components are functioning."
      ],
      "teacher_look_fors": [
        "Students break circuit before current measurements.",
        "Students log units and uncertainty notes."
      ],
      "associated_lab_ids": [
        "l3"
      ]
    },
    {
      "id": "u6",
      "title": "Ohm's Law Applications",
      "duration_days": 7,
      "rationale": "Ohm's Law connects measurement and prediction, enabling students to design and verify circuits intentionally.",
      "learning_goals": [
        "Solve for V, I, and R in contextual circuit problems.",
        "Use measured and theoretical values to evaluate error.",
        "Select resistor values to meet LED current limits."
      ],
      "essential_questions": [
        "How does Ohm's Law support safer design choices?",
        "When do measured values differ from predictions and why?"
      ],
      "standards": {
        "cdos": [
          "CDOS 3a-5",
          "CDOS 3b-2"
        ],
        "ngls": [
          "HS-PS3-3",
          "HS-ETS1-3"
        ],
        "etai_dc": [
          "ETA-DC-03"
        ],
        "nocti": [
          "NOCTI-PE-3.2",
          "NOCTI-PE-4.1"
        ]
      },
      "key_vocabulary": [
        "Ohm's Law",
        "theoretical value",
        "percent error",
        "current limiting",
        "power"
      ],
      "required_materials": {
        "student_kit": [
          "Breadboard",
          "Resistor kit",
          "LED set",
          "DMM"
        ],
        "communal": [
          "Reference formula posters",
          "Class set power supplies"
        ]
      },
      "formative_assessments": [
        "Ohm's Law whiteboard checks",
        "Exit tickets on variable isolation"
      ],
      "summative_assessments": [
        "Ohm's Law quiz",
        "Series resistor lab report"
      ],
      "differentiation": {
        "supports": [
          "Equation triangle scaffold",
          "Worked-example notebook inserts"
        ],
        "extensions": [
          "Design challenge: maximize LED brightness within safe current"
        ]
      },
      "misconceptions": [
        "Any resistor value works if LED lights.",
        "Small measurement differences mean the build is wrong."
      ],
      "teacher_look_fors": [
        "Students show units and substitutions before solving.",
        "Students compare predicted vs measured current thoughtfully."
      ],
      "associated_lab_ids": [
        "l4"
      ]
    },
    {
      "id": "u7",
      "title": "Series Circuit Analysis and Design",
      "duration_days": 7,
      "rationale": "Series circuits build foundational reasoning for current behavior and voltage distribution.",
      "learning_goals": [
        "Calculate total resistance and current in series circuits.",
        "Measure voltage drops across series components.",
        "Troubleshoot open circuits and resistance mismatch."
      ],
      "essential_questions": [
        "Why is current constant in a series path?",
        "How can voltage drop data reveal faults?"
      ],
      "standards": {
        "cdos": [
          "CDOS 3b-2"
        ],
        "ngls": [
          "HS-PS2-6",
          "HS-PS3-3"
        ],
        "etai_dc": [
          "ETA-DC-04"
        ],
        "nocti": [
          "NOCTI-PE-4.1",
          "NOCTI-PE-4.3"
        ]
      },
      "key_vocabulary": [
        "series path",
        "voltage drop",
        "equivalent resistance",
        "fault isolation"
      ],
      "required_materials": {
        "student_kit": [
          "Breadboard",
          "Resistors",
          "DMM"
        ],
        "communal": [
          "Demo circuit boards"
        ]
      },
      "formative_assessments": [
        "Series analysis problem set",
        "Notebook voltage-drop table check"
      ],
      "summative_assessments": [
        "Series circuit practical",
        "Lab report: series resistor investigation"
      ],
      "differentiation": {
        "supports": [
          "Color-coded series path maps",
          "Guided troubleshooting flowchart"
        ],
        "extensions": [
          "Two-source comparative analysis scenario"
        ]
      },
      "misconceptions": [
        "Voltage is the same at every component in series.",
        "More resistors always means higher current."
      ],
      "teacher_look_fors": [
        "Students verify equivalent resistance before energizing.",
        "Students use meter readings to identify opens quickly."
      ],
      "associated_lab_ids": [
        "l4"
      ]
    },
    {
      "id": "u8",
      "title": "Soldering Fundamentals and Workmanship",
      "duration_days": 7,
      "rationale": "Soldering quality directly impacts circuit reliability, safety, and professional readiness.",
      "learning_goals": [
        "Demonstrate safe iron handling, tip care, and station setup.",
        "Produce clean solder joints and perform pull-test checks.",
        "Diagnose and rework cold joints, bridges, and lifted pads."
      ],
      "essential_questions": [
        "What makes a solder joint electrically and mechanically reliable?",
        "How can workmanship defects be prevented early?"
      ],
      "standards": {
        "cdos": [
          "CDOS 3a-1",
          "CDOS 3b-1"
        ],
        "ngls": [
          "HS-ETS1-3"
        ],
        "etai_dc": [
          "ETA-DC-06"
        ],
        "nocti": [
          "NOCTI-PE-1.1",
          "NOCTI-PE-4.1"
        ]
      },
      "key_vocabulary": [
        "wetting",
        "cold joint",
        "solder bridge",
        "strain relief",
        "rework"
      ],
      "required_materials": {
        "student_kit": [
          "Practice board",
          "Rosin-core solder",
          "Wire strippers"
        ],
        "communal": [
          "Soldering stations",
          "Fume extraction",
          "Helping-hands fixtures"
        ]
      },
      "formative_assessments": [
        "Joint quality checks",
        "Solder safety spot-check",
        "Peer rework feedback"
      ],
      "summative_assessments": [
        "Solder splice practical",
        "Practice board rubric",
        "Final solder kit project rubric"
      ],
      "differentiation": {
        "supports": [
          "Slow-motion demo clips",
          "Grip and angle coaching cards"
        ],
        "extensions": [
          "Optional through-hole mini-project for advanced students"
        ]
      },
      "misconceptions": [
        "More solder always creates a stronger joint.",
        "Shiny joint appearance guarantees function."
      ],
      "teacher_look_fors": [
        "Students heat both pad and lead before solder feed.",
        "Students perform visual and continuity checks post-solder."
      ],
      "associated_lab_ids": [
        "l7",
        "l8",
        "l9"
      ]
    },
    {
      "id": "u9",
      "title": "Parallel Circuit Analysis",
      "duration_days": 6,
      "rationale": "Parallel circuit reasoning prepares students for realistic branch-based systems and load behavior.",
      "learning_goals": [
        "Calculate equivalent resistance of parallel branches.",
        "Compare branch currents using measured data.",
        "Use power calculations to evaluate component stress."
      ],
      "essential_questions": [
        "Why does adding branches change total current demand?",
        "How does parallel design impact reliability?"
      ],
      "standards": {
        "cdos": [
          "CDOS 3b-2"
        ],
        "ngls": [
          "HS-PS3-3"
        ],
        "etai_dc": [
          "ETA-DC-04"
        ],
        "nocti": [
          "NOCTI-PE-4.1",
          "NOCTI-PE-4.3"
        ]
      },
      "key_vocabulary": [
        "branch current",
        "equivalent resistance",
        "current division",
        "load sharing"
      ],
      "required_materials": {
        "student_kit": [
          "Breadboard",
          "Resistor kit",
          "DMM"
        ],
        "communal": [
          "Bench power supplies"
        ]
      },
      "formative_assessments": [
        "Parallel branch prediction checks",
        "Data table spot-check for unit consistency"
      ],
      "summative_assessments": [
        "Parallel lab rubric",
        "Parallel circuit quiz"
      ],
      "differentiation": {
        "supports": [
          "Branch-by-branch annotation guide",
          "Small-group reteach station"
        ],
        "extensions": [
          "Optimize branch resistor set to hit target total current"
        ]
      },
      "misconceptions": [
        "Voltage splits across branches in parallel.",
        "Branch currents are always equal."
      ],
      "teacher_look_fors": [
        "Students compare theoretical and measured branch current.",
        "Students justify unexpected readings with evidence."
      ],
      "associated_lab_ids": [
        "l5"
      ]
    },
    {
      "id": "u10",
      "title": "Series-Parallel Systems and Integration",
      "duration_days": 6,
      "rationale": "Integrated series-parallel systems mirror authentic applied electronics tasks requiring planning and revision.",
      "learning_goals": [
        "Decompose mixed networks into solvable steps.",
        "Use simulation and physical build data to validate design.",
        "Communicate final design decisions with concise evidence."
      ],
      "essential_questions": [
        "How do technicians simplify complex circuits for analysis?",
        "When should a design be revised based on measured evidence?"
      ],
      "standards": {
        "cdos": [
          "CDOS 3a-5",
          "CDOS 3b-2"
        ],
        "ngls": [
          "HS-ETS1-2",
          "HS-ETS1-3"
        ],
        "etai_dc": [
          "ETA-DC-04",
          "ETA-DC-06"
        ],
        "nocti": [
          "NOCTI-PE-4.1",
          "NOCTI-PE-4.3"
        ]
      },
      "key_vocabulary": [
        "subcircuit",
        "equivalent network",
        "verification",
        "design iteration"
      ],
      "required_materials": {
        "student_kit": [
          "Notebook",
          "DMM",
          "Circuit kit components"
        ],
        "communal": [
          "TinkerCAD projection station",
          "Soldering stations"
        ]
      },
      "formative_assessments": [
        "Mixed-network decomposition check",
        "Simulation-to-build comparison discussion"
      ],
      "summative_assessments": [
        "Series-parallel simplified lab report",
        "Final solder kit demonstration"
      ],
      "differentiation": {
        "supports": [
          "Chunked decomposition worksheet",
          "Template for claim-evidence-reasoning reflection"
        ],
        "extensions": [
          "Design optional third branch and justify trade-offs"
        ]
      },
      "misconceptions": [
        "Series and parallel rules can be mixed without sequencing.",
        "If simulation works, physical verification is optional."
      ],
      "teacher_look_fors": [
        "Students solve subcircuits before whole-network conclusions.",
        "Students reconcile simulation and measured differences."
      ],
      "associated_lab_ids": [
        "l6",
        "l9"
      ]
    }
  ],
  "labs": [
    {
      "id": "l1",
      "title": "Snap Circuits Discovery Lab",
      "type": "Snap Circuits",
      "concepts": [
        "safety",
        "series",
        "parallel",
        "power"
      ],
      "unit_ids": [
        "u1"
      ],
      "purpose": "Introduce circuit flow concepts with fast iteration and low setup overhead.",
      "safety_notes": [
        "Check battery orientation before powering modules.",
        "Power off before changing component layout.",
        "Keep work area dry and free of loose metal objects."
      ],
      "materials": [
        "Snap Circuits base grid",
        "Battery pack",
        "Switch module",
        "Lamp and buzzer modules"
      ],
      "setup_steps": [
        "Distribute kits and verify all modules are returned from prior class.",
        "Model one closed circuit and one open circuit.",
        "Assign station roles: builder, recorder, checker."
      ],
      "student_procedure": [
        "Build three assigned circuits from prompt cards.",
        "Predict output before powering each design.",
        "Record behavior and identify why each design works or fails.",
        "Revise one design to improve reliability."
      ],
      "data_tables": [
        {
          "title": "Discovery Observations",
          "columns": [
            "Trial",
            "Configuration",
            "Prediction",
            "Observed Output",
            "Revision Note"
          ],
          "rows": [
            [
              "1",
              "Single lamp loop",
              "Lamp lights",
              "Lamp lights steadily",
              "No change needed"
            ],
            [
              "2",
              "Switch left open",
              "No output",
              "No output",
              "Closed switch to complete path"
            ],
            [
              "3",
              "Parallel lamp branch",
              "Both lamps light",
              "Both lamps lit, one dimmer",
              "Re-seated loose connector"
            ]
          ]
        }
      ],
      "calculation_prompts": [
        "Identify where electrical energy enters and exits each build.",
        "Circle the components that control current path."
      ],
      "evidence_of_learning": [
        "Notebook table with predictions vs outcomes",
        "Exit reflection on one troubleshooting decision"
      ],
      "report_format": "simplified",
      "report_requirements": [
        "Include one labeled sketch and one revision explanation.",
        "Submit final observation table with complete sentences for conclusions."
      ],
      "rubric_snippet": {
        "title": "Discovery Lab Snapshot",
        "criteria": [
          {
            "criterion": "Safety and setup routine",
            "points_range": "0-2",
            "look_fors": "Correct power-off behavior before changes"
          },
          {
            "criterion": "Prediction quality",
            "points_range": "0-2",
            "look_fors": "Prediction tied to path logic"
          },
          {
            "criterion": "Observation clarity",
            "points_range": "0-2",
            "look_fors": "Precise notes, not vague descriptors"
          }
        ]
      },
      "troubleshooting_tips": [
        "Re-seat modules if output flickers.",
        "Confirm switch orientation and battery contacts first."
      ],
      "standards": {
        "cdos": [
          "CDOS 3a-1"
        ],
        "ngls": [
          "HS-ETS1-3"
        ],
        "etai_dc": [
          "ETA-DC-01"
        ],
        "nocti": [
          "NOCTI-PE-1.1"
        ]
      }
    },
    {
      "id": "l2",
      "title": "Basic LED Breadboard Build",
      "type": "Breadboard",
      "concepts": [
        "Ohm's Law",
        "measurement",
        "safety"
      ],
      "unit_ids": [
        "u2",
        "u3",
        "u4"
      ],
      "purpose": "Translate a simple schematic to a breadboard and validate safe LED current.",
      "safety_notes": [
        "Verify LED polarity before power-on.",
        "Use resistor value approved in pre-lab calculation.",
        "Disconnect battery before rewiring."
      ],
      "materials": [
        "Breadboard",
        "9V battery clip",
        "LED",
        "220 Ohm and 330 Ohm resistors",
        "Jumper wires"
      ],
      "setup_steps": [
        "Model rail usage and center gap orientation.",
        "Have students pre-calc expected current for selected resistor.",
        "Check wiring with a partner before energizing."
      ],
      "student_procedure": [
        "Build the one-LED circuit from provided schematic.",
        "Measure supply voltage and resistor voltage drop.",
        "Swap resistor value and repeat measurements.",
        "Compare measured current to predicted values."
      ],
      "data_tables": [
        {
          "title": "LED Circuit Data",
          "columns": [
            "Resistor",
            "V_supply",
            "V_resistor",
            "I_predicted",
            "I_measured"
          ],
          "rows": [
            [
              "220 Ohm",
              "8.9 V",
              "6.8 V",
              "0.031 A",
              "0.029 A"
            ],
            [
              "330 Ohm",
              "8.8 V",
              "6.7 V",
              "0.020 A",
              "0.019 A"
            ]
          ]
        }
      ],
      "calculation_prompts": [
        "Given a 2.0V LED drop, compute target current for each resistor.",
        "Explain which resistor better protects LED lifespan and why."
      ],
      "evidence_of_learning": [
        "Labeled schematic and breadboard photo",
        "Completed data table and claim paragraph"
      ],
      "report_format": "simplified",
      "report_requirements": [
        "Submit data table and one short evidence-based conclusion.",
        "Include one wiring revision note if troubleshooting occurred."
      ],
      "rubric_snippet": {
        "title": "LED Build Rubric Snippet",
        "criteria": [
          {
            "criterion": "Correct schematic translation",
            "points_range": "0-3",
            "look_fors": "Rails and component placement match plan"
          },
          {
            "criterion": "Data completeness",
            "points_range": "0-3",
            "look_fors": "All columns include units"
          },
          {
            "criterion": "Conclusion quality",
            "points_range": "0-2",
            "look_fors": "Claims supported by measured data"
          }
        ]
      },
      "troubleshooting_tips": [
        "If LED does not light, reverse LED orientation and re-check ground rail.",
        "If current is too high, verify resistor color code and placement."
      ],
      "standards": {
        "cdos": [
          "CDOS 3a-5"
        ],
        "ngls": [
          "HS-PS3-3"
        ],
        "etai_dc": [
          "ETA-DC-02",
          "ETA-DC-03"
        ],
        "nocti": [
          "NOCTI-PE-2.3",
          "NOCTI-PE-4.1"
        ]
      }
    },
    {
      "id": "l3",
      "title": "DMM Measurement Skills Lab",
      "type": "Multimeter",
      "concepts": [
        "measurement",
        "safety",
        "power"
      ],
      "unit_ids": [
        "u5"
      ],
      "purpose": "Develop accurate meter habits for core electrical quantities across station tasks.",
      "safety_notes": [
        "Always confirm probe ports before current measurement.",
        "Never place meter in current mode directly across a source.",
        "Inspect probe insulation for damage before use."
      ],
      "materials": [
        "Digital multimeter",
        "Resistor board",
        "Battery holder",
        "Alligator leads"
      ],
      "setup_steps": [
        "Set up four stations: resistance, voltage, current, continuity.",
        "Model proper probe placement at each station.",
        "Post expected ranges at each station card."
      ],
      "student_procedure": [
        "Rotate through stations and record one trial per quantity.",
        "Repeat the current station with corrected series insertion method.",
        "Compare class average to individual reading and note variance."
      ],
      "data_tables": [
        {
          "title": "Measurement Station Results",
          "columns": [
            "Station",
            "Expected Range",
            "Measured Value",
            "Unit",
            "Pass/Retry"
          ],
          "rows": [
            [
              "Resistance",
              "95-105",
              "99.2",
              "Ohm",
              "Pass"
            ],
            [
              "Voltage",
              "8.5-9.5",
              "8.9",
              "V",
              "Pass"
            ],
            [
              "Current",
              "0.02-0.04",
              "0.027",
              "A",
              "Pass"
            ],
            [
              "Continuity",
              "Audible tone",
              "Tone present",
              "N/A",
              "Pass"
            ]
          ]
        }
      ],
      "calculation_prompts": [
        "Estimate expected current for the current station using Ohm's Law.",
        "State one reason your measured value may differ from estimate."
      ],
      "evidence_of_learning": [
        "Station sheet with all values",
        "Teacher practical checkpoint signature"
      ],
      "report_format": "simplified",
      "report_requirements": [
        "Submit completed station table with units and retry notes.",
        "Write two sentences on meter mode errors to avoid."
      ],
      "rubric_snippet": {
        "title": "DMM Skills Rubric Snippet",
        "criteria": [
          {
            "criterion": "Mode and range selection",
            "points_range": "0-3",
            "look_fors": "Correct setting before probing"
          },
          {
            "criterion": "Probe placement",
            "points_range": "0-3",
            "look_fors": "Series vs parallel placement is accurate"
          },
          {
            "criterion": "Data recording",
            "points_range": "0-2",
            "look_fors": "Values and units are complete"
          }
        ]
      },
      "troubleshooting_tips": [
        "If reading is unstable, check lead connection firmness and range.",
        "If meter shows overload, switch to a higher range then step down."
      ],
      "standards": {
        "cdos": [
          "CDOS 3a-1",
          "CDOS 3b-2"
        ],
        "ngls": [
          "HS-PS2-6"
        ],
        "etai_dc": [
          "ETA-DC-05"
        ],
        "nocti": [
          "NOCTI-PE-3.2"
        ]
      }
    },
    {
      "id": "l4",
      "title": "Series Resistor Investigation",
      "type": "Breadboard",
      "concepts": [
        "Ohm's Law",
        "series",
        "measurement",
        "power"
      ],
      "unit_ids": [
        "u6",
        "u7"
      ],
      "purpose": "Connect series theory to measured voltage drop and current behavior.",
      "safety_notes": [
        "Confirm resistor wattage for expected power.",
        "Do not exceed supply limits set by instructor.",
        "Power down before changing resistor values."
      ],
      "materials": [
        "Breadboard",
        "Power supply",
        "100 Ohm, 220 Ohm, 330 Ohm resistors",
        "DMM",
        "Jumper wires"
      ],
      "setup_steps": [
        "Build two-resistor series circuit from schematic.",
        "Verify equivalent resistance before energizing.",
        "Assign one student as meter lead manager."
      ],
      "student_procedure": [
        "Measure total current and individual resistor voltage drops.",
        "Swap one resistor and repeat all measurements.",
        "Compute percent error between theoretical and measured current.",
        "Identify one likely source of error."
      ],
      "data_tables": [
        {
          "title": "Series Circuit Measurements",
          "columns": [
            "Trial",
            "R1",
            "R2",
            "R_total(calc)",
            "I_calc",
            "I_measured",
            "V_R1",
            "V_R2"
          ],
          "rows": [
            [
              "1",
              "100",
              "220",
              "320",
              "0.028",
              "0.027",
              "2.7",
              "5.9"
            ],
            [
              "2",
              "220",
              "330",
              "550",
              "0.016",
              "0.015",
              "3.4",
              "5.0"
            ]
          ]
        }
      ],
      "calculation_prompts": [
        "Calculate expected current for each resistor pair at 9V.",
        "Predict voltage drop share for each resistor before measuring."
      ],
      "evidence_of_learning": [
        "Completed full lab report",
        "Annotated calculations and percent error"
      ],
      "report_format": "full",
      "report_requirements": [
        "Include objective, setup diagram, data table, calculations, and analysis paragraph.",
        "State one troubleshooting action and its evidence."
      ],
      "rubric_snippet": {
        "title": "Series Investigation Rubric Snippet",
        "criteria": [
          {
            "criterion": "Calculation setup",
            "points_range": "0-4",
            "look_fors": "Correct formulas with units"
          },
          {
            "criterion": "Measurement accuracy",
            "points_range": "0-4",
            "look_fors": "Values are plausible and internally consistent"
          },
          {
            "criterion": "Analysis quality",
            "points_range": "0-2",
            "look_fors": "Evidence-based explanation of variance"
          }
        ]
      },
      "troubleshooting_tips": [
        "If current reads zero, test continuity across entire path.",
        "If voltage drops exceed supply, re-check meter reference points."
      ],
      "standards": {
        "cdos": [
          "CDOS 3b-2"
        ],
        "ngls": [
          "HS-PS3-3"
        ],
        "etai_dc": [
          "ETA-DC-03",
          "ETA-DC-04"
        ],
        "nocti": [
          "NOCTI-PE-4.1",
          "NOCTI-PE-4.3"
        ]
      }
    },
    {
      "id": "l5",
      "title": "Parallel Resistor Lab",
      "type": "Breadboard",
      "concepts": [
        "parallel",
        "Ohm's Law",
        "measurement",
        "power"
      ],
      "unit_ids": [
        "u9"
      ],
      "purpose": "Investigate branch behavior and total current changes in parallel networks.",
      "safety_notes": [
        "Use instructor-approved resistor values to stay within source current limits.",
        "Monitor resistor temperature during extended runs.",
        "Disconnect source before branch rewiring."
      ],
      "materials": [
        "Breadboard",
        "Power supply",
        "Two branch resistor sets",
        "DMM"
      ],
      "setup_steps": [
        "Build two-branch parallel circuit from class template.",
        "Check each branch independently before full energizing.",
        "Prepare data sheet for branch-by-branch recording."
      ],
      "student_procedure": [
        "Measure branch voltages and branch currents.",
        "Measure total current at source.",
        "Compare sum of branch currents to source current.",
        "Adjust one branch resistance and repeat."
      ],
      "data_tables": [
        {
          "title": "Parallel Circuit Measurements",
          "columns": [
            "Trial",
            "R_branch_A",
            "R_branch_B",
            "I_A",
            "I_B",
            "I_total",
            "V_branch"
          ],
          "rows": [
            [
              "1",
              "220",
              "330",
              "0.040",
              "0.027",
              "0.067",
              "8.8"
            ],
            [
              "2",
              "330",
              "330",
              "0.027",
              "0.027",
              "0.054",
              "8.9"
            ]
          ]
        }
      ],
      "calculation_prompts": [
        "Calculate equivalent resistance for each trial.",
        "Predict source current before measuring and compare percent difference."
      ],
      "evidence_of_learning": [
        "Full or simplified report (teacher choice)",
        "Data table with branch-current reasoning"
      ],
      "report_format": "full",
      "report_requirements": [
        "Include data table and one graph (branch current comparison).",
        "Explain whether KCL relationship held in your measurements."
      ],
      "rubric_snippet": {
        "title": "Parallel Lab Rubric Snippet",
        "criteria": [
          {
            "criterion": "Data accuracy",
            "points_range": "0-5",
            "look_fors": "Branch and total current relationships are plausible"
          },
          {
            "criterion": "Computation quality",
            "points_range": "0-3",
            "look_fors": "Equivalent resistance and percent difference shown"
          },
          {
            "criterion": "Interpretation",
            "points_range": "0-2",
            "look_fors": "Evidence-based explanation of current distribution"
          }
        ]
      },
      "troubleshooting_tips": [
        "If branch current is zero, confirm branch path is closed.",
        "If total current is lower than expected, inspect loose ground connections."
      ],
      "standards": {
        "cdos": [
          "CDOS 3b-2"
        ],
        "ngls": [
          "HS-PS3-3"
        ],
        "etai_dc": [
          "ETA-DC-04"
        ],
        "nocti": [
          "NOCTI-PE-4.1",
          "NOCTI-PE-4.3"
        ]
      }
    },
    {
      "id": "l6",
      "title": "Series-Parallel Modeling and Build",
      "type": "TinkerCAD",
      "concepts": [
        "series-parallel",
        "Ohm's Law",
        "measurement",
        "power"
      ],
      "unit_ids": [
        "u10"
      ],
      "purpose": "Use simulation and physical testing to validate a mixed-network design.",
      "safety_notes": [
        "Follow normal bench wiring safety when translating simulation to hardware.",
        "Confirm supply settings before connecting real components.",
        "Do not rely on simulation alone for final verification."
      ],
      "materials": [
        "TinkerCAD Circuits access",
        "Breadboard components",
        "DMM",
        "Power source"
      ],
      "setup_steps": [
        "Open provided starter simulation and duplicate to student workspace.",
        "Label subcircuits before solving equivalent values.",
        "Prepare same topology on breadboard for validation phase."
      ],
      "student_procedure": [
        "Solve network in parts and predict node values.",
        "Run simulation and record measured values.",
        "Build physical version and collect comparable values.",
        "Summarize key differences and likely causes."
      ],
      "data_tables": [
        {
          "title": "Simulation vs Physical Comparison",
          "columns": [
            "Quantity",
            "Predicted",
            "Simulated",
            "Measured",
            "Difference Note"
          ],
          "rows": [
            [
              "I_total",
              "0.041 A",
              "0.040 A",
              "0.038 A",
              "Lead/contact resistance"
            ],
            [
              "V_branch_1",
              "4.5 V",
              "4.5 V",
              "4.3 V",
              "Supply sag under load"
            ],
            [
              "V_branch_2",
              "4.5 V",
              "4.5 V",
              "4.4 V",
              "Meter resolution"
            ]
          ]
        }
      ],
      "calculation_prompts": [
        "Show decomposition steps from full network to equivalent resistance.",
        "Predict one value that should be most sensitive to build quality."
      ],
      "evidence_of_learning": [
        "Simplified report with data and observations",
        "Screenshot of simulation and photo of physical build"
      ],
      "report_format": "simplified",
      "report_requirements": [
        "Submit side-by-side data table and one paragraph on discrepancies.",
        "Include at least one corrective action attempted."
      ],
      "rubric_snippet": {
        "title": "Series-Parallel Simplified Rubric Snippet",
        "criteria": [
          {
            "criterion": "Data completeness",
            "points_range": "0-4",
            "look_fors": "Predicted/simulated/measured values all present"
          },
          {
            "criterion": "Observation quality",
            "points_range": "0-4",
            "look_fors": "Explains meaningful differences with evidence"
          },
          {
            "criterion": "Technical communication",
            "points_range": "0-2",
            "look_fors": "Concise and correct circuit language"
          }
        ]
      },
      "troubleshooting_tips": [
        "If simulation and build differ widely, verify node mapping first.",
        "If branch values drift, inspect resistor tolerances and loose leads."
      ],
      "standards": {
        "cdos": [
          "CDOS 3a-5",
          "CDOS 3b-2"
        ],
        "ngls": [
          "HS-ETS1-2",
          "HS-ETS1-3"
        ],
        "etai_dc": [
          "ETA-DC-04"
        ],
        "nocti": [
          "NOCTI-PE-4.1",
          "NOCTI-PE-4.3"
        ]
      }
    },
    {
      "id": "l7",
      "title": "Solder Splice Practical",
      "type": "Soldering",
      "concepts": [
        "safety",
        "measurement",
        "power"
      ],
      "unit_ids": [
        "u8"
      ],
      "purpose": "Demonstrate safe solder splice creation with continuity verification.",
      "safety_notes": [
        "Use fume extraction and eye protection at all times.",
        "Return iron to stand between every task.",
        "Assume all recently soldered joints are hot."
      ],
      "materials": [
        "Soldering station",
        "Rosin-core solder",
        "Hook-up wire",
        "Heat shrink tubing",
        "DMM"
      ],
      "setup_steps": [
        "Check station temperature and tip condition.",
        "Pre-cut and strip wires to assigned length.",
        "Model one proper mechanical splice before soldering."
      ],
      "student_procedure": [
        "Create Western Union splice.",
        "Solder splice using minimal solder volume.",
        "Apply heat shrink and inspect workmanship.",
        "Verify continuity and tug-test reliability."
      ],
      "data_tables": [
        {
          "title": "Splice Quality Log",
          "columns": [
            "Attempt",
            "Continuity",
            "Tug Test",
            "Visual Score",
            "Rework Needed"
          ],
          "rows": [
            [
              "1",
              "Pass",
              "Pass",
              "3/5",
              "Yes"
            ],
            [
              "2",
              "Pass",
              "Pass",
              "5/5",
              "No"
            ]
          ]
        }
      ],
      "calculation_prompts": [
        "Estimate expected resistance across splice (near 0 Ohm) and justify tolerance.",
        "Explain why continuity alone is not enough to validate a joint."
      ],
      "evidence_of_learning": [
        "Practical performance checklist",
        "Photo evidence of final splice"
      ],
      "report_format": "simplified",
      "report_requirements": [
        "Submit splice quality log and one reflection on improvement between attempts."
      ],
      "rubric_snippet": {
        "title": "Splice Practical Rubric Snippet",
        "criteria": [
          {
            "criterion": "Safety habits",
            "points_range": "0-3",
            "look_fors": "Iron handling and station discipline"
          },
          {
            "criterion": "Joint integrity",
            "points_range": "0-4",
            "look_fors": "Passes visual and mechanical checks"
          },
          {
            "criterion": "Verification",
            "points_range": "0-3",
            "look_fors": "Continuity check documented correctly"
          }
        ]
      },
      "troubleshooting_tips": [
        "If solder beads up, clean and tin tip, then reheat both surfaces.",
        "If joint fails tug test, redo mechanical wrap before soldering."
      ],
      "standards": {
        "cdos": [
          "CDOS 3a-1"
        ],
        "ngls": [
          "HS-ETS1-3"
        ],
        "etai_dc": [
          "ETA-DC-06"
        ],
        "nocti": [
          "NOCTI-PE-1.1",
          "NOCTI-PE-4.1"
        ]
      }
    },
    {
      "id": "l8",
      "title": "Practice Solder Board Lab",
      "type": "Soldering",
      "concepts": [
        "safety",
        "measurement",
        "power"
      ],
      "unit_ids": [
        "u8"
      ],
      "purpose": "Develop repeatable through-hole soldering quality using a controlled practice board.",
      "safety_notes": [
        "Use brass wool for tip cleaning; avoid dry scraping.",
        "Keep lead trimming area clear and dispose scraps safely.",
        "Verify board orientation before inserting parts."
      ],
      "materials": [
        "Practice solder board",
        "Through-hole components",
        "Soldering station",
        "Flush cutters",
        "DMM"
      ],
      "setup_steps": [
        "Distribute identical boards and component packs.",
        "Demonstrate acceptable fillet shape and common defects.",
        "Assign quality checkpoints after every five joints."
      ],
      "student_procedure": [
        "Insert components according to board legend.",
        "Solder in sequence from lowest to highest profile parts.",
        "Inspect and score each set of joints using checklist.",
        "Test continuity at designated nodes."
      ],
      "data_tables": [
        {
          "title": "Joint Quality Tracker",
          "columns": [
            "Checkpoint",
            "Joints Completed",
            "Defects Found",
            "Reworked",
            "Continuity Pass"
          ],
          "rows": [
            [
              "A",
              "5",
              "2",
              "2",
              "Pass"
            ],
            [
              "B",
              "10",
              "1",
              "1",
              "Pass"
            ],
            [
              "C",
              "15",
              "0",
              "0",
              "Pass"
            ]
          ]
        }
      ],
      "calculation_prompts": [
        "Record expected resistance for one resistor location before and after soldering.",
        "Estimate defect rate percentage at each checkpoint."
      ],
      "evidence_of_learning": [
        "Completed board with inspection checklist",
        "Deduction-model rubric score sheet"
      ],
      "report_format": "simplified",
      "report_requirements": [
        "Submit checklist plus one paragraph on quality trend over checkpoints."
      ],
      "rubric_snippet": {
        "title": "Practice Board Rubric Snippet",
        "criteria": [
          {
            "criterion": "Workmanship defects",
            "points_range": "0 to -10",
            "look_fors": "Deduction for bridges, cold joints, poor trim"
          },
          {
            "criterion": "Rework effectiveness",
            "points_range": "0-4",
            "look_fors": "Defects corrected without pad damage"
          },
          {
            "criterion": "Final function",
            "points_range": "0-4",
            "look_fors": "Continuity and expected component values pass"
          }
        ]
      },
      "troubleshooting_tips": [
        "If pad lifts, reduce dwell time and stabilize board before reheating.",
        "If bridges appear, use wick and lower solder feed rate."
      ],
      "standards": {
        "cdos": [
          "CDOS 3a-1",
          "CDOS 3b-1"
        ],
        "ngls": [
          "HS-ETS1-3"
        ],
        "etai_dc": [
          "ETA-DC-06"
        ],
        "nocti": [
          "NOCTI-PE-1.1",
          "NOCTI-PE-4.1"
        ]
      }
    },
    {
      "id": "l9",
      "title": "Final Solder Kit Project",
      "type": "Soldering",
      "concepts": [
        "series-parallel",
        "measurement",
        "safety",
        "power"
      ],
      "unit_ids": [
        "u8",
        "u10"
      ],
      "purpose": "Integrate circuit analysis and workmanship by assembling, testing, and presenting a functioning soldered kit.",
      "safety_notes": [
        "Use full soldering PPE and bench protocol.",
        "Pause work if fumes become excessive and verify extraction.",
        "Complete final electrical checks before first power-up."
      ],
      "materials": [
        "Approved solder kit",
        "Soldering station",
        "DMM",
        "Flush cutters",
        "Inspection checklist"
      ],
      "setup_steps": [
        "Inventory all kit components against BOM.",
        "Review assembly order and polarity-sensitive parts.",
        "Set interim checkpoints for instructor signoff."
      ],
      "student_procedure": [
        "Assemble kit in documented stages.",
        "Perform continuity and resistance checks before power.",
        "Troubleshoot any failed stage and log revisions.",
        "Demonstrate final function to instructor with explanation."
      ],
      "data_tables": [
        {
          "title": "Final Project Verification Log",
          "columns": [
            "Checkpoint",
            "Test",
            "Expected",
            "Observed",
            "Action Taken"
          ],
          "rows": [
            [
              "Stage 1",
              "Continuity at power rails",
              "Pass",
              "Pass",
              "Proceed"
            ],
            [
              "Stage 2",
              "Node voltage",
              "4.8 V",
              "4.5 V",
              "Reflowed one joint"
            ],
            [
              "Final",
              "Functional output",
              "LED pattern stable",
              "Stable after rework",
              "Completed"
            ]
          ]
        }
      ],
      "calculation_prompts": [
        "Predict current draw for one critical branch before final power-up.",
        "Estimate acceptable voltage tolerance at key test point."
      ],
      "evidence_of_learning": [
        "Completed final build",
        "Verification log",
        "Instructor demonstration and Q&A"
      ],
      "report_format": "full",
      "report_requirements": [
        "Submit assembly log, verification data, and final reflection on design decisions.",
        "Include one photo of completed board and one identified quality risk prevented."
      ],
      "rubric_snippet": {
        "title": "Final Project Rubric Snippet",
        "criteria": [
          {
            "criterion": "Functionality",
            "points_range": "0-10",
            "look_fors": "Project meets required operating behavior"
          },
          {
            "criterion": "Workmanship",
            "points_range": "0-10",
            "look_fors": "Consistent joint quality, no unresolved defects"
          },
          {
            "criterion": "Technical explanation",
            "points_range": "0-5",
            "look_fors": "Clear, evidence-backed responses during demo"
          }
        ]
      },
      "troubleshooting_tips": [
        "If function fails, inspect polarity components before random reflow.",
        "Use stage-by-stage continuity checks to isolate failure quickly."
      ],
      "standards": {
        "cdos": [
          "CDOS 3a-5",
          "CDOS 3b-2"
        ],
        "ngls": [
          "HS-ETS1-3"
        ],
        "etai_dc": [
          "ETA-DC-06"
        ],
        "nocti": [
          "NOCTI-PE-4.1",
          "NOCTI-PE-4.3"
        ]
      }
    }
  ],
  "pacing": [
    {
      "week": 1,
      "focus_topics": [
        "Course orientation",
        "Safety contracts",
        "Notebook routines"
      ],
      "unit_ids": [
        "u1"
      ],
      "lesson_objectives": [
        "SWBAT follow station setup/reset protocol.",
        "SWBAT identify electrical lab hazards and mitigations."
      ],
      "lab_ids": [
        "l1"
      ],
      "assessment_checkpoints": [
        "Safety entry quiz",
        "Notebook baseline check"
      ],
      "standards_sets": [
        "cdos",
        "etai_dc",
        "nocti"
      ]
    },
    {
      "week": 2,
      "focus_topics": [
        "Closed vs open circuits",
        "Prediction routines"
      ],
      "unit_ids": [
        "u1",
        "u2"
      ],
      "lesson_objectives": [
        "SWBAT predict outcomes from simple circuit paths.",
        "SWBAT document observations using consistent format."
      ],
      "lab_ids": [
        "l1"
      ],
      "assessment_checkpoints": [
        "Observation quality check",
        "Safety routine practical"
      ],
      "standards_sets": [
        "cdos",
        "ngls",
        "etai_dc"
      ]
    },
    {
      "week": 3,
      "focus_topics": [
        "Engineering notation",
        "Units and prefixes"
      ],
      "unit_ids": [
        "u2"
      ],
      "lesson_objectives": [
        "SWBAT convert values to engineering notation.",
        "SWBAT apply unit prefixes correctly in calculations."
      ],
      "lab_ids": [
        "l2"
      ],
      "assessment_checkpoints": [
        "Notation quiz",
        "Pre-lab calculation check"
      ],
      "standards_sets": [
        "cdos",
        "ngls",
        "etai_dc"
      ]
    },
    {
      "week": 4,
      "focus_topics": [
        "Component identification",
        "Schematic symbols"
      ],
      "unit_ids": [
        "u3"
      ],
      "lesson_objectives": [
        "SWBAT match component symbols to physical parts.",
        "SWBAT map schematic nodes to breadboard rows."
      ],
      "lab_ids": [
        "l2"
      ],
      "assessment_checkpoints": [
        "Component ID station score",
        "Schematic translation checkpoint"
      ],
      "standards_sets": [
        "cdos",
        "etai_dc",
        "nocti"
      ]
    },
    {
      "week": 5,
      "focus_topics": [
        "Polarity",
        "Current flow models",
        "Circuit revisions"
      ],
      "unit_ids": [
        "u3",
        "u4"
      ],
      "lesson_objectives": [
        "SWBAT explain LED polarity using charge flow language.",
        "SWBAT revise circuit layouts based on test evidence."
      ],
      "lab_ids": [
        "l2"
      ],
      "assessment_checkpoints": [
        "Concept response",
        "Notebook diagram check"
      ],
      "standards_sets": [
        "ngls",
        "etai_dc",
        "nocti"
      ]
    },
    {
      "week": 6,
      "focus_topics": [
        "Voltage, current, resistance relationships",
        "DMM setup"
      ],
      "unit_ids": [
        "u5"
      ],
      "lesson_objectives": [
        "SWBAT select correct DMM mode and range.",
        "SWBAT measure resistance and voltage safely."
      ],
      "lab_ids": [
        "l3"
      ],
      "assessment_checkpoints": [
        "DMM mode checkpoint",
        "Resistance station pass"
      ],
      "standards_sets": [
        "cdos",
        "ngls",
        "etai_dc",
        "nocti"
      ]
    },
    {
      "week": 7,
      "focus_topics": [
        "Current measurement",
        "Continuity troubleshooting"
      ],
      "unit_ids": [
        "u5"
      ],
      "lesson_objectives": [
        "SWBAT insert meter in series for current measurement.",
        "SWBAT diagnose open paths with continuity checks."
      ],
      "lab_ids": [
        "l3"
      ],
      "assessment_checkpoints": [
        "DMM practical signoff"
      ],
      "standards_sets": [
        "cdos",
        "etai_dc",
        "nocti"
      ]
    },
    {
      "week": 8,
      "focus_topics": [
        "Ohm's Law equation use",
        "Prediction vs measurement"
      ],
      "unit_ids": [
        "u6"
      ],
      "lesson_objectives": [
        "SWBAT solve for unknown circuit variables.",
        "SWBAT justify differences between predicted and measured values."
      ],
      "lab_ids": [
        "l4"
      ],
      "assessment_checkpoints": [
        "Ohm's Law quiz",
        "Pre-lab calculation approval"
      ],
      "standards_sets": [
        "cdos",
        "ngls",
        "etai_dc",
        "nocti"
      ]
    },
    {
      "week": 9,
      "focus_topics": [
        "Series resistance",
        "Voltage drop mapping"
      ],
      "unit_ids": [
        "u7"
      ],
      "lesson_objectives": [
        "SWBAT compute equivalent resistance in series.",
        "SWBAT use voltage drop data to identify faults."
      ],
      "lab_ids": [
        "l4"
      ],
      "assessment_checkpoints": [
        "Series circuit practical",
        "Lab report draft check"
      ],
      "standards_sets": [
        "ngls",
        "etai_dc",
        "nocti"
      ]
    },
    {
      "week": 10,
      "focus_topics": [
        "Series troubleshooting",
        "Technical writing"
      ],
      "unit_ids": [
        "u7"
      ],
      "lesson_objectives": [
        "SWBAT isolate open-circuit faults efficiently.",
        "SWBAT submit complete series lab report evidence."
      ],
      "lab_ids": [
        "l4"
      ],
      "assessment_checkpoints": [
        "Series lab report submission"
      ],
      "standards_sets": [
        "cdos",
        "etai_dc",
        "nocti"
      ]
    },
    {
      "week": 11,
      "focus_topics": [
        "Soldering safety",
        "Mechanical splice prep"
      ],
      "unit_ids": [
        "u8"
      ],
      "lesson_objectives": [
        "SWBAT set up and handle soldering tools safely.",
        "SWBAT complete a verified solder splice."
      ],
      "lab_ids": [
        "l7"
      ],
      "assessment_checkpoints": [
        "Solder safety check",
        "Splice practical score"
      ],
      "standards_sets": [
        "cdos",
        "etai_dc",
        "nocti"
      ]
    },
    {
      "week": 12,
      "focus_topics": [
        "Joint quality",
        "Rework techniques"
      ],
      "unit_ids": [
        "u8"
      ],
      "lesson_objectives": [
        "SWBAT identify and correct common solder defects.",
        "SWBAT meet benchmark workmanship criteria."
      ],
      "lab_ids": [
        "l8"
      ],
      "assessment_checkpoints": [
        "Practice board deduction rubric"
      ],
      "standards_sets": [
        "cdos",
        "ngls",
        "etai_dc"
      ]
    },
    {
      "week": 13,
      "focus_topics": [
        "Parallel branch behavior",
        "Current distribution"
      ],
      "unit_ids": [
        "u9"
      ],
      "lesson_objectives": [
        "SWBAT calculate equivalent resistance for parallel networks.",
        "SWBAT compare branch and total current using evidence."
      ],
      "lab_ids": [
        "l5"
      ],
      "assessment_checkpoints": [
        "Parallel circuit quiz",
        "Data accuracy rubric"
      ],
      "standards_sets": [
        "ngls",
        "etai_dc",
        "nocti"
      ]
    },
    {
      "week": 14,
      "focus_topics": [
        "Series-parallel decomposition",
        "Simulation validation"
      ],
      "unit_ids": [
        "u10"
      ],
      "lesson_objectives": [
        "SWBAT decompose mixed networks into solvable parts.",
        "SWBAT compare predicted, simulated, and measured values."
      ],
      "lab_ids": [
        "l6"
      ],
      "assessment_checkpoints": [
        "Series-parallel simplified report draft"
      ],
      "standards_sets": [
        "cdos",
        "ngls",
        "etai_dc",
        "nocti"
      ]
    },
    {
      "week": 15,
      "focus_topics": [
        "Final integration build",
        "Demonstration and reflection"
      ],
      "unit_ids": [
        "u8",
        "u10"
      ],
      "lesson_objectives": [
        "SWBAT assemble and verify final solder kit functionality.",
        "SWBAT present evidence-backed troubleshooting decisions."
      ],
      "lab_ids": [
        "l9"
      ],
      "assessment_checkpoints": [
        "Final solder project rubric",
        "Instructor demonstration"
      ],
      "standards_sets": [
        "cdos",
        "ngls",
        "etai_dc",
        "nocti"
      ]
    }
  ],
  "standards": {
    "cdos": [
      {
        "code": "CDOS 3a-1",
        "label": "Universal Foundation Skills",
        "description": "Demonstrate safety, personal management, and workplace readiness behaviors."
      },
      {
        "code": "CDOS 3a-2",
        "label": "Integrated Learning",
        "description": "Apply academic and technical knowledge to authentic tasks."
      },
      {
        "code": "CDOS 3a-5",
        "label": "Problem Solving",
        "description": "Use evidence and analysis to solve technical problems."
      },
      {
        "code": "CDOS 3b-1",
        "label": "Career Major Technical Knowledge",
        "description": "Demonstrate technical content knowledge for the selected pathway."
      },
      {
        "code": "CDOS 3b-2",
        "label": "Career Major Technical Skills",
        "description": "Demonstrate technical skill performance with quality and safety."
      }
    ],
    "ngls": [
      {
        "code": "HS-PS2-6",
        "label": "Electric and Magnetic Forces",
        "description": "Communicate scientific and technical information about field interactions."
      },
      {
        "code": "HS-PS3-1",
        "label": "Energy Conservation",
        "description": "Create computational models to calculate system energy changes."
      },
      {
        "code": "HS-PS3-3",
        "label": "Energy in Systems",
        "description": "Design and evaluate systems with energy transfer constraints."
      },
      {
        "code": "HS-ETS1-2",
        "label": "Engineering Design Solutions",
        "description": "Design and evaluate solutions to complex real-world problems."
      },
      {
        "code": "HS-ETS1-3",
        "label": "Refining a Design",
        "description": "Analyze and revise solutions based on criteria and tradeoffs."
      }
    ],
    "etai_dc": [
      {
        "code": "ETA-DC-01",
        "label": "Safety and Tools",
        "description": "Apply electronics lab safety and proper tool handling."
      },
      {
        "code": "ETA-DC-02",
        "label": "Components and Schematics",
        "description": "Identify electronic components and interpret basic schematics."
      },
      {
        "code": "ETA-DC-03",
        "label": "Ohm's Law and Power",
        "description": "Perform DC calculations for voltage, current, resistance, and power."
      },
      {
        "code": "ETA-DC-04",
        "label": "Series and Parallel Networks",
        "description": "Analyze, build, and troubleshoot DC networks."
      },
      {
        "code": "ETA-DC-05",
        "label": "Instrumentation",
        "description": "Use test instruments to verify electrical performance."
      },
      {
        "code": "ETA-DC-06",
        "label": "Soldering and Assembly",
        "description": "Demonstrate accepted soldering and rework practices."
      }
    ],
    "nocti": [
      {
        "code": "NOCTI-PE-1.1",
        "label": "Safety Practices",
        "description": "Use safe practices and procedures in engineering environments."
      },
      {
        "code": "NOCTI-PE-2.3",
        "label": "Technical Documentation",
        "description": "Interpret technical diagrams and schematics."
      },
      {
        "code": "NOCTI-PE-3.2",
        "label": "Measurement and Test",
        "description": "Use measurement tools and test procedures to verify systems."
      },
      {
        "code": "NOCTI-PE-4.1",
        "label": "System Assembly",
        "description": "Build and configure engineering systems from plans."
      },
      {
        "code": "NOCTI-PE-4.3",
        "label": "Troubleshooting",
        "description": "Diagnose and correct faults using evidence."
      }
    ]
  },
  "materials": {
    "student_kit": [
      {
        "id": "sk1",
        "name": "Engineering Notebook",
        "description": "Bound notebook used for daily objectives, data, and reflections.",
        "rationale": "individual",
        "replacement_risk": "Low"
      },
      {
        "id": "sk2",
        "name": "Safety Glasses",
        "description": "Personal eye protection labeled to each student.",
        "rationale": "individual",
        "replacement_risk": "Medium"
      },
      {
        "id": "sk3",
        "name": "Mini Breadboard",
        "description": "Reusable breadboard for prototyping labs.",
        "rationale": "individual",
        "replacement_risk": "Medium"
      },
      {
        "id": "sk4",
        "name": "Jumper Wire Set",
        "description": "Assorted male-male and male-female jumpers.",
        "rationale": "individual",
        "replacement_risk": "Medium"
      },
      {
        "id": "sk5",
        "name": "Resistor Assortment",
        "description": "Common resistor values for Ohm's Law, series, and parallel labs.",
        "rationale": "individual",
        "replacement_risk": "High"
      },
      {
        "id": "sk6",
        "name": "LED Assortment",
        "description": "Polarity-sensitive LED pack for breadboard and final projects.",
        "rationale": "individual",
        "replacement_risk": "Medium"
      },
      {
        "id": "sk7",
        "name": "Digital Multimeter",
        "description": "Entry-level DMM with probe leads and battery.",
        "rationale": "individual",
        "replacement_risk": "High"
      },
      {
        "id": "sk8",
        "name": "Wire Stripper/Cutter",
        "description": "Hand tool used for prep in soldering unit.",
        "rationale": "individual",
        "replacement_risk": "Medium"
      }
    ],
    "communal": [
      {
        "id": "cm1",
        "name": "Bench Power Supplies",
        "description": "Shared adjustable supplies with instructor-locked limits.",
        "rationale": "communal",
        "replacement_risk": "High"
      },
      {
        "id": "cm2",
        "name": "Soldering Stations",
        "description": "Temperature-controlled soldering stations for lab benches.",
        "rationale": "communal",
        "replacement_risk": "High"
      },
      {
        "id": "cm3",
        "name": "Fume Extraction Units",
        "description": "Portable extraction units for soldering safety.",
        "rationale": "communal",
        "replacement_risk": "High"
      },
      {
        "id": "cm4",
        "name": "Snap Circuits Classroom Kits",
        "description": "Modular kits used for discovery and early concept modeling.",
        "rationale": "communal",
        "replacement_risk": "Medium"
      },
      {
        "id": "cm5",
        "name": "TinkerCAD Access Devices",
        "description": "Shared laptops/chromebooks for simulation labs.",
        "rationale": "communal",
        "replacement_risk": "High"
      },
      {
        "id": "cm6",
        "name": "Helping Hands Fixtures",
        "description": "Clamp fixtures to stabilize solder workpieces.",
        "rationale": "communal",
        "replacement_risk": "Medium"
      },
      {
        "id": "cm7",
        "name": "Component Refill Bins",
        "description": "Shared inventory for high-use consumables.",
        "rationale": "communal",
        "replacement_risk": "High"
      },
      {
        "id": "cm8",
        "name": "Safety Signage and Station Cards",
        "description": "Visual safety prompts and setup guides posted per station.",
        "rationale": "communal",
        "replacement_risk": "Low"
      }
    ]
  },
  "assessments": {
    "types": [
      {
        "id": "a1",
        "name": "Safety Checks",
        "grading_approach": "Checklist-based; pass/needs-reteach with retake option",
        "frequency": "Weekly during lab routines",
        "evidence": "Observed PPE, setup, and shutdown behavior"
      },
      {
        "id": "a2",
        "name": "Practical Builds",
        "grading_approach": "Performance rubric with function plus process criteria",
        "frequency": "At major unit transitions",
        "evidence": "Working circuit, test verification, troubleshooting notes"
      },
      {
        "id": "a3",
        "name": "Quizzes/Tests",
        "grading_approach": "Short objective items and structured response problems",
        "frequency": "Every 2-3 weeks",
        "evidence": "Ohm's Law fluency, schematic interpretation, standards-aligned content"
      },
      {
        "id": "a4",
        "name": "Lab Reports (Full and Simplified)",
        "grading_approach": "Data integrity, calculations, and reflection quality",
        "frequency": "After core investigations",
        "evidence": "Tables, calculations, observations, claims"
      },
      {
        "id": "a5",
        "name": "Presentations/Demonstrations",
        "grading_approach": "Instructor Q&A with evidence-based explanation rubric",
        "frequency": "End-of-unit and final project",
        "evidence": "Live build demonstration and technical explanation"
      }
    ],
    "rubrics": [
      {
        "id": "r1",
        "title": "Solder Practice Board Rubric (Deduction Model)",
        "model": "Start at 20 points; deductions applied for defects.",
        "criteria": [
          {
            "criterion": "Cold joints",
            "points_range": "-0 to -6",
            "notes": "Deduct per unresolved cold joint"
          },
          {
            "criterion": "Solder bridges",
            "points_range": "-0 to -6",
            "notes": "Deduct per bridge after rework window"
          },
          {
            "criterion": "Lead trim and cleanliness",
            "points_range": "-0 to -4",
            "notes": "Deduct for unsafe or poor workmanship"
          },
          {
            "criterion": "Continuity verification",
            "points_range": "0-4",
            "notes": "Award for complete and correct checks"
          }
        ],
        "total_points": 20
      },
      {
        "id": "r2",
        "title": "Final Solder Project Rubric (Functionality + Workmanship)",
        "model": "Criteria-based 25 point rubric.",
        "criteria": [
          {
            "criterion": "Functional performance",
            "points_range": "0-10",
            "notes": "All required outputs operate as intended"
          },
          {
            "criterion": "Workmanship quality",
            "points_range": "0-10",
            "notes": "Consistent, reliable joints and layout quality"
          },
          {
            "criterion": "Verification evidence",
            "points_range": "0-5",
            "notes": "Testing log supports reliability claims"
          }
        ],
        "total_points": 25
      },
      {
        "id": "r3",
        "title": "Parallel Circuit Lab Rubric (Data Accuracy Emphasis)",
        "model": "15 point data-quality rubric.",
        "criteria": [
          {
            "criterion": "Measurement accuracy",
            "points_range": "0-7",
            "notes": "Branch and total current values are coherent"
          },
          {
            "criterion": "Computation correctness",
            "points_range": "0-4",
            "notes": "Equivalent resistance and comparisons are correct"
          },
          {
            "criterion": "Interpretation",
            "points_range": "0-4",
            "notes": "Conclusions cite measured evidence"
          }
        ],
        "total_points": 15
      },
      {
        "id": "r4",
        "title": "Series-Parallel Simplified Lab Rubric (Data + Observations)",
        "model": "10 point simplified reporting rubric.",
        "criteria": [
          {
            "criterion": "Data completion",
            "points_range": "0-4",
            "notes": "Predicted, simulated, measured columns complete"
          },
          {
            "criterion": "Observation detail",
            "points_range": "0-4",
            "notes": "Differences explained with plausible causes"
          },
          {
            "criterion": "Reflection quality",
            "points_range": "0-2",
            "notes": "Clear next-step improvement statement"
          }
        ],
        "total_points": 10
      }
    ],
    "feedback_stems": [
      "Your data table is complete; next step is to tighten unit consistency in each row.",
      "Your troubleshooting process is clear; add one measured value to justify your final decision.",
      "You identified the defect correctly; now explain why that defect caused the observed behavior.",
      "Your safety routine is strong; continue applying the same discipline during cleanup.",
      "Good prediction quality; compare your prediction to one measured discrepancy in detail.",
      "Your build functions, but workmanship can improve by reducing excess solder volume.",
      "Strong explanation of branch current; add a quick equivalent resistance check to strengthen evidence.",
      "You revised effectively; document the exact change so another student could reproduce it."
    ]
  }
}
;

  const PAGE_IDS = [
    "overview",
    "pacing",
    "units",
    "labs",
    "standards",
    "materials",
    "assessments",
    "search"
  ];

  const STANDARD_SET_LABELS = {
    cdos: "NYS CDOS",
    ngls: "NYS NGLS",
    etai_dc: "ETA-i DC",
    nocti: "NOCTI Pre-Engineering"
  };

  const STANDARD_SET_ORDER = ["cdos", "ngls", "etai_dc", "nocti"];

  const state = {
    data: null,
    activePage: "overview",
    selectedUnitId: null,
    selectedLabId: null,
    materialFocusId: null,
    standardFocus: null,
    searchQuery: "",
    searchResults: null,
    pendingHighlight: "",
    pacingFilters: {
      unit: "all",
      labType: "all",
      standardSet: "all"
    },
    labFilters: {
      type: "all",
      concept: "all"
    }
  };

  const refs = {};

  document.addEventListener("DOMContentLoaded", init);

  async function init() {
    cacheRefs();
    bindStaticEvents();

    state.data = await loadCurriculumData();

    if (!state.data || !Array.isArray(state.data.units) || !Array.isArray(state.data.labs)) {
      setStatus("Unable to load curriculum data.");
      return;
    }

    state.selectedUnitId = state.data.units[0] ? state.data.units[0].id : null;
    state.selectedLabId = state.data.labs[0] ? state.data.labs[0].id : null;

    populatePacingFilterOptions();
    populateLabFilterOptions();

    const initialPage = parsePageFromHash(window.location.hash) || "overview";
    setActivePage(initialPage, false, false);
    renderAll();

    window.addEventListener("hashchange", onHashChange);
    window.addEventListener("scroll", toggleBackToTop);
    window.addEventListener("afterprint", clearPrintMode);

    toggleBackToTop();
  }

  function cacheRefs() {
    refs.main = byId("main-content");
    refs.appStatus = byId("app-status");

    refs.nav = document.querySelector(".top-nav");

    refs.pageSections = PAGE_IDS.reduce((map, id) => {
      map[id] = byId(`page-${id}`);
      return map;
    }, {});

    refs.overviewContent = byId("overview-content");

    refs.pacingUnitFilter = byId("pacing-unit-filter");
    refs.pacingLabTypeFilter = byId("pacing-labtype-filter");
    refs.pacingStandardFilter = byId("pacing-standard-filter");
    refs.pacingCards = byId("pacing-cards");
    refs.pacingPrintBtn = byId("pacing-print-btn");

    refs.unitsBreadcrumbs = byId("units-breadcrumbs");
    refs.unitList = byId("unit-list");
    refs.unitDetail = byId("unit-detail");

    refs.labsBreadcrumbs = byId("labs-breadcrumbs");
    refs.labTypeFilter = byId("lab-type-filter");
    refs.labConceptFilter = byId("lab-concept-filter");
    refs.labCards = byId("lab-cards");
    refs.labDetail = byId("lab-detail");

    refs.standardsBrowser = byId("standards-browser");
    refs.standardsFilterResults = byId("standards-filter-results");
    refs.standardsCrosswalk = byId("standards-crosswalk");

    refs.materialsContent = byId("materials-content");
    refs.materialsPrintBtn = byId("materials-print-btn");

    refs.assessmentsContent = byId("assessments-content");

    refs.headerSearchForm = byId("header-search-form");
    refs.headerSearchInput = byId("header-search-input");
    refs.searchForm = byId("search-form");
    refs.searchInput = byId("search-input");
    refs.searchResults = byId("search-results");

    refs.printPageBtn = byId("print-page-btn");
    refs.backToTopBtn = byId("back-to-top");
  }

  function bindStaticEvents() {
    refs.nav.addEventListener("click", (event) => {
      const button = event.target.closest("[data-page]");
      if (!button) return;
      setActivePage(button.dataset.page);
      renderAll();
    });

    refs.main.addEventListener("click", onMainClick);

    refs.pacingUnitFilter.addEventListener("change", () => {
      state.pacingFilters.unit = refs.pacingUnitFilter.value;
      renderPacing();
    });

    refs.pacingLabTypeFilter.addEventListener("change", () => {
      state.pacingFilters.labType = refs.pacingLabTypeFilter.value;
      renderPacing();
    });

    refs.pacingStandardFilter.addEventListener("change", () => {
      state.pacingFilters.standardSet = refs.pacingStandardFilter.value;
      renderPacing();
    });

    refs.labTypeFilter.addEventListener("change", () => {
      state.labFilters.type = refs.labTypeFilter.value;
      renderLabs();
    });

    refs.labConceptFilter.addEventListener("change", () => {
      state.labFilters.concept = refs.labConceptFilter.value;
      renderLabs();
    });

    refs.headerSearchForm.addEventListener("submit", (event) => {
      event.preventDefault();
      runSearchFromInput(refs.headerSearchInput.value);
    });

    refs.searchForm.addEventListener("submit", (event) => {
      event.preventDefault();
      runSearchFromInput(refs.searchInput.value);
    });

    refs.printPageBtn.addEventListener("click", () => printCurrentPage("general"));
    refs.pacingPrintBtn.addEventListener("click", () => printCurrentPage("pacing"));
    refs.materialsPrintBtn.addEventListener("click", () => printCurrentPage("materials"));

    refs.backToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  async function loadCurriculumData() {
    try {
      const response = await fetch("./curriculum.json", { cache: "no-store" });
      if (!response.ok) {
        throw new Error(`Failed to fetch curriculum.json (${response.status})`);
      }
      const data = await response.json();
      setStatus("Loaded curriculum data from curriculum.json.");
      return data;
    } catch (error) {
      console.warn("Falling back to embedded curriculum data.", error);
      setStatus("Loaded embedded curriculum fallback data (file:// mode).");
      return FALLBACK_CURRICULUM;
    }
  }

  function onHashChange() {
    const nextPage = parsePageFromHash(window.location.hash);
    if (!nextPage || nextPage === state.activePage) return;
    setActivePage(nextPage, false);
    renderAll();
  }

  function parsePageFromHash(hash) {
    if (!hash) return null;
    const raw = hash.replace(/^#/, "").split("/")[0];
    return PAGE_IDS.includes(raw) ? raw : null;
  }

  function setActivePage(pageId, updateHash = true, announce = true) {
    const safePage = PAGE_IDS.includes(pageId) ? pageId : "overview";
    state.activePage = safePage;

    for (const page of PAGE_IDS) {
      const isActive = page === safePage;
      refs.pageSections[page].hidden = !isActive;

      const navButton = document.querySelector(`[data-page="${page}"]`);
      if (navButton) {
        navButton.classList.toggle("is-active", isActive);
        if (isActive) {
          navButton.setAttribute("aria-current", "page");
        } else {
          navButton.removeAttribute("aria-current");
        }
      }
    }

    if (updateHash && window.location.hash !== `#${safePage}`) {
      history.replaceState(null, "", `#${safePage}`);
    }

    if (announce) {
      setStatus(`Viewing ${safePage} section.`);
    }
  }

  // Re-render each section from shared state so filters and selections stay synchronized.
  function renderAll() {
    renderOverview();
    renderPacing();
    renderUnits();
    renderLabs();
    renderStandards();
    renderMaterials();
    renderAssessments();
    renderSearch();
    applyPendingHighlight();
  }

  function populatePacingFilterOptions() {
    const unitOptions = [{ value: "all", label: "All units" }].concat(
      state.data.units.map((unit) => ({
        value: unit.id,
        label: `${unit.title} (${unit.duration_days} days)`
      }))
    );

    const labTypes = unique(state.data.labs.map((lab) => lab.type));
    const orderedLabTypes = orderValues(labTypes, [
      "Breadboard",
      "Multimeter",
      "Soldering",
      "TinkerCAD",
      "Snap Circuits"
    ]);

    const labTypeOptions = [{ value: "all", label: "All lab types" }].concat(
      orderedLabTypes.map((type) => ({ value: type, label: type }))
    );

    const standardsOptions = [{ value: "all", label: "All standards sets" }].concat(
      STANDARD_SET_ORDER.map((setKey) => ({
        value: setKey,
        label: STANDARD_SET_LABELS[setKey]
      }))
    );

    setSelectOptions(refs.pacingUnitFilter, unitOptions, state.pacingFilters.unit);
    setSelectOptions(refs.pacingLabTypeFilter, labTypeOptions, state.pacingFilters.labType);
    setSelectOptions(refs.pacingStandardFilter, standardsOptions, state.pacingFilters.standardSet);
  }

  function populateLabFilterOptions() {
    const typeValues = orderValues(unique(state.data.labs.map((lab) => lab.type)), [
      "Snap Circuits",
      "Breadboard",
      "Multimeter",
      "TinkerCAD",
      "Soldering"
    ]);

    const conceptValues = orderValues(
      unique(state.data.labs.flatMap((lab) => lab.concepts || [])),
      ["Ohm's Law", "series", "parallel", "series-parallel", "measurement", "safety", "power"]
    );

    setSelectOptions(
      refs.labTypeFilter,
      [{ value: "all", label: "All types" }].concat(typeValues.map((type) => ({ value: type, label: type }))),
      state.labFilters.type
    );

    setSelectOptions(
      refs.labConceptFilter,
      [{ value: "all", label: "All concepts" }].concat(
        conceptValues.map((concept) => ({ value: concept, label: concept }))
      ),
      state.labFilters.concept
    );
  }

  function renderOverview() {
    const { course, objectives, units, labs, assessments } = state.data;
    const assessmentTypes = assessments && assessments.types ? assessments.types : [];

    refs.overviewContent.innerHTML = `
      <article class="card">
        <p class="kicker">Course Description</p>
        <p>${escapeHtml(course.description)}</p>
        <p><strong>Instructional model:</strong> ${escapeHtml(course.instructional_model)}</p>
        <p><strong>Schedule notes:</strong> ${escapeHtml(course.schedule_notes)}</p>
      </article>

      <div class="stats-grid">
        <article class="stat-card">
          <p class="kicker">Class Days</p>
          <h3>${escapeHtml(String(course.duration_days))}</h3>
          <p>Approximate instructional days</p>
        </article>
        <article class="stat-card">
          <p class="kicker">Units</p>
          <h3>${escapeHtml(String(units.length))}</h3>
          <p>Core units in sequence</p>
        </article>
        <article class="stat-card">
          <p class="kicker">Labs</p>
          <h3>${escapeHtml(String(labs.length))}</h3>
          <p>Hands-on lab experiences</p>
        </article>
        <article class="stat-card">
          <p class="kicker">Assessment Types</p>
          <h3>${escapeHtml(String(assessmentTypes.length))}</h3>
          <p>${escapeHtml(assessmentTypes.map((type) => type.name).join(", "))}</p>
        </article>
      </div>

      <details open>
        <summary>Course Objectives (SWBAT)</summary>
        ${renderList(objectives)}
      </details>

      <details open>
        <summary>Major Classroom Routines</summary>
        ${renderList(course.major_routines)}
      </details>
    `;
  }

  function renderPacing() {
    const weeks = state.data.pacing.filter((week) => {
      const unitMatch =
        state.pacingFilters.unit === "all" || (week.unit_ids || []).includes(state.pacingFilters.unit);

      const labMatch =
        state.pacingFilters.labType === "all" ||
        (week.lab_ids || []).some((labId) => {
          const lab = getLabById(labId);
          return lab && lab.type === state.pacingFilters.labType;
        });

      const standardMatch =
        state.pacingFilters.standardSet === "all" ||
        (week.standards_sets || []).includes(state.pacingFilters.standardSet);

      return unitMatch && labMatch && standardMatch;
    });

    if (!weeks.length) {
      refs.pacingCards.innerHTML = '<p class="empty-state">No pacing weeks match the selected filters.</p>';
      return;
    }

    refs.pacingCards.innerHTML = weeks
      .map((week) => {
        const weekUnits = (week.unit_ids || []).map((unitId) => getUnitById(unitId)).filter(Boolean);
        const weekLabs = (week.lab_ids || []).map((labId) => getLabById(labId)).filter(Boolean);

        return `
          <article class="card">
            <p class="kicker">Week ${escapeHtml(String(week.week))}</p>
            <h3>${escapeHtml((week.focus_topics || []).join(" | "))}</h3>

            <details open>
              <summary>Unit(s)</summary>
              ${
                weekUnits.length
                  ? `<div class="chips">${weekUnits
                      .map(
                        (unit) =>
                          `<button class="chip-button" data-action="open-unit" data-unit-id="${escapeAttr(
                            unit.id
                          )}">${escapeHtml(unit.title)}</button>`
                      )
                      .join("")}</div>`
                  : '<p class="muted">No units linked.</p>'
              }
            </details>

            <details>
              <summary>Key lesson objectives</summary>
              ${renderList(week.lesson_objectives || [])}
            </details>

            <details>
              <summary>Lab(s)</summary>
              ${
                weekLabs.length
                  ? `<div class="chips">${weekLabs
                      .map(
                        (lab) =>
                          `<button class="chip-button" data-action="open-lab" data-lab-id="${escapeAttr(
                            lab.id
                          )}">${escapeHtml(lab.title)} (${escapeHtml(lab.type)})</button>`
                      )
                      .join("")}</div>`
                  : '<p class="muted">No labs linked.</p>'
              }
            </details>

            <details>
              <summary>Assessment checkpoints</summary>
              ${renderList(week.assessment_checkpoints || [])}
            </details>

            <div class="chips">
              ${(week.standards_sets || [])
                .map((setKey) => `<span class="chip">${escapeHtml(STANDARD_SET_LABELS[setKey] || setKey)}</span>`)
                .join("")}
            </div>
          </article>
        `;
      })
      .join("");
  }

  function renderUnits() {
    const units = state.data.units;

    if (!units.length) {
      refs.unitList.innerHTML = "";
      refs.unitDetail.innerHTML = '<p class="empty-state">No units found.</p>';
      refs.unitsBreadcrumbs.innerHTML = "";
      return;
    }

    if (!getUnitById(state.selectedUnitId)) {
      state.selectedUnitId = units[0].id;
    }

    refs.unitList.innerHTML = units
      .map(
        (unit) => `
          <li>
            <button
              type="button"
              data-action="select-unit"
              data-unit-id="${escapeAttr(unit.id)}"
              class="${unit.id === state.selectedUnitId ? "is-selected" : ""}"
            >
              <strong>${escapeHtml(unit.title)}</strong><br />
              <span class="muted">${escapeHtml(String(unit.duration_days))} days</span>
            </button>
          </li>
        `
      )
      .join("");

    const unit = getUnitById(state.selectedUnitId);
    if (!unit) return;

    refs.unitsBreadcrumbs.innerHTML = `Curriculum / Units / <span>${escapeHtml(unit.title)}</span>`;

    refs.unitDetail.innerHTML = `
      <article>
        <p class="kicker">Duration</p>
        <h3>${escapeHtml(unit.title)} (${escapeHtml(String(unit.duration_days))} days)</h3>
        <p><strong>Why it matters:</strong> ${escapeHtml(unit.rationale)}</p>

        <details open>
          <summary>Learning Goals (SWBAT)</summary>
          ${renderList(unit.learning_goals || [])}
        </details>

        <details>
          <summary>Essential Questions</summary>
          ${renderList(unit.essential_questions || [])}
        </details>

        <details>
          <summary>Standards Alignment</summary>
          ${renderStandardsSetBlocks(unit.standards)}
        </details>

        <details>
          <summary>Key Vocabulary</summary>
          ${renderList(unit.key_vocabulary || [])}
        </details>

        <details>
          <summary>Required Materials (Student Kit vs Communal)</summary>
          <p><strong>Student kit:</strong></p>
          ${renderList((unit.required_materials && unit.required_materials.student_kit) || [])}
          <p><strong>Communal:</strong></p>
          ${renderList((unit.required_materials && unit.required_materials.communal) || [])}
        </details>

        <details>
          <summary>Assessments</summary>
          <p><strong>Formative:</strong></p>
          ${renderList(unit.formative_assessments || [])}
          <p><strong>Summative:</strong></p>
          ${renderList(unit.summative_assessments || [])}
        </details>

        <details>
          <summary>Differentiation Supports and Extensions</summary>
          <p><strong>Supports:</strong></p>
          ${renderList((unit.differentiation && unit.differentiation.supports) || [])}
          <p><strong>Extensions:</strong></p>
          ${renderList((unit.differentiation && unit.differentiation.extensions) || [])}
        </details>

        <details>
          <summary>Common Misconceptions and Teacher Look-Fors</summary>
          <p><strong>Common misconceptions:</strong></p>
          ${renderList(unit.misconceptions || [])}
          <p><strong>Teacher look-fors:</strong></p>
          ${renderList(unit.teacher_look_fors || [])}
        </details>

        <details open>
          <summary>Associated Labs</summary>
          ${
            (unit.associated_lab_ids || []).length
              ? `<div class="chips">${unit.associated_lab_ids
                  .map((labId) => getLabById(labId))
                  .filter(Boolean)
                  .map(
                    (lab) =>
                      `<button class="chip-button" data-action="open-lab" data-lab-id="${escapeAttr(
                        lab.id
                      )}">${escapeHtml(lab.title)}</button>`
                  )
                  .join("")}</div>`
              : '<p class="muted">No associated labs listed.</p>'
          }
        </details>
      </article>
    `;
  }

  function renderLabs() {
    const filteredLabs = state.data.labs.filter((lab) => {
      const typeMatch = state.labFilters.type === "all" || lab.type === state.labFilters.type;
      const conceptMatch =
        state.labFilters.concept === "all" || (lab.concepts || []).includes(state.labFilters.concept);
      return typeMatch && conceptMatch;
    });

    if (!filteredLabs.length) {
      refs.labCards.innerHTML = '<p class="empty-state">No labs match the selected filters.</p>';
      refs.labDetail.innerHTML = '<p class="empty-state">Select a different filter to view lab details.</p>';
      refs.labsBreadcrumbs.innerHTML = "Curriculum / Labs";
      return;
    }

    if (!filteredLabs.some((lab) => lab.id === state.selectedLabId)) {
      state.selectedLabId = filteredLabs[0].id;
    }

    refs.labCards.innerHTML = filteredLabs
      .map(
        (lab) => `
          <article class="card">
            <button
              type="button"
              class="card-action ${lab.id === state.selectedLabId ? "is-selected" : ""}"
              data-action="select-lab"
              data-lab-id="${escapeAttr(lab.id)}"
            >
              <strong>${escapeHtml(lab.title)}</strong><br />
              <span class="muted">${escapeHtml(lab.type)}</span>
              <div class="chips">
                ${(lab.concepts || []).map((concept) => `<span class="chip">${escapeHtml(concept)}</span>`).join("")}
              </div>
            </button>
          </article>
        `
      )
      .join("");

    const selectedLab = getLabById(state.selectedLabId);
    if (!selectedLab) return;

    refs.labsBreadcrumbs.innerHTML = `Curriculum / Labs / <span>${escapeHtml(selectedLab.title)}</span>`;

    refs.labDetail.innerHTML = `
      <article>
        <p class="kicker">Lab Type</p>
        <h3>${escapeHtml(selectedLab.title)} (${escapeHtml(selectedLab.type)})</h3>
        <p><strong>Purpose:</strong> ${escapeHtml(selectedLab.purpose)}</p>

        <div class="chips">
          ${(selectedLab.concepts || [])
            .map((concept) => `<span class="chip">Concept: ${escapeHtml(concept)}</span>`)
            .join("")}
        </div>

        <details open>
          <summary>Safety Notes</summary>
          ${renderList(selectedLab.safety_notes || [])}
        </details>

        <details>
          <summary>Materials</summary>
          ${renderList(selectedLab.materials || [])}
        </details>

        <details>
          <summary>Setup Steps</summary>
          ${renderList(selectedLab.setup_steps || [])}
        </details>

        <details>
          <summary>Student Procedure</summary>
          ${renderList(selectedLab.student_procedure || [])}
        </details>

        <details open>
          <summary>Data Tables</summary>
          ${(selectedLab.data_tables || []).map(renderDataTable).join("")}
        </details>

        <details>
          <summary>Calculation Prompts (Pre-Lab)</summary>
          ${renderList(selectedLab.calculation_prompts || [])}
        </details>

        <details>
          <summary>Evidence of Learning</summary>
          ${renderList(selectedLab.evidence_of_learning || [])}
          <p><strong>Report format:</strong> ${escapeHtml(selectedLab.report_format)}</p>
          <p><strong>Report requirements:</strong></p>
          ${renderList(selectedLab.report_requirements || [])}
        </details>

        <details>
          <summary>Rubric Snippet</summary>
          ${renderRubricSnippet(selectedLab.rubric_snippet)}
        </details>

        <details>
          <summary>Troubleshooting Tips</summary>
          ${renderList(selectedLab.troubleshooting_tips || [])}
        </details>

        <details>
          <summary>Standards Alignment</summary>
          ${renderStandardsSetBlocks(selectedLab.standards)}
        </details>
      </article>
    `;
  }

  function renderStandards() {
    const standards = state.data.standards || {};

    refs.standardsBrowser.innerHTML = `
      <div class="cards-grid">
        ${STANDARD_SET_ORDER.map((setKey) => {
          const entries = standards[setKey] || [];
          return `
            <article class="card">
              <h3>${escapeHtml(STANDARD_SET_LABELS[setKey])}</h3>
              <div class="stack-cards">
                ${entries
                  .map(
                    (entry) => `
                      <div class="result-item">
                        <button
                          type="button"
                          data-action="filter-standard"
                          data-standard-set="${escapeAttr(setKey)}"
                          data-standard-code="${escapeAttr(entry.code)}"
                          class="chip-button ${
                            state.standardFocus &&
                            state.standardFocus.setKey === setKey &&
                            state.standardFocus.code === entry.code
                              ? "is-active"
                              : ""
                          }"
                        >
                          ${escapeHtml(entry.code)}
                        </button>
                        <p><strong>${escapeHtml(entry.label)}</strong></p>
                        <p class="muted">${escapeHtml(entry.description)}</p>
                      </div>
                    `
                  )
                  .join("")}
              </div>
            </article>
          `;
        }).join("")}
      </div>
    `;

    renderStandardsFilterResults();
    renderStandardsCrosswalk();
  }

  function renderStandardsFilterResults() {
    if (!state.standardFocus) {
      refs.standardsFilterResults.innerHTML =
        '<p class="empty-state">Click a standard code to filter where it appears in units and labs.</p>';
      return;
    }

    const { setKey, code } = state.standardFocus;
    const standardDef = (state.data.standards[setKey] || []).find((entry) => entry.code === code);

    const unitMatches = state.data.units.filter((unit) => (unit.standards[setKey] || []).includes(code));
    const labMatches = state.data.labs.filter((lab) => (lab.standards[setKey] || []).includes(code));

    refs.standardsFilterResults.innerHTML = `
      <h3>Filtered Standard: ${escapeHtml(code)} (${escapeHtml(STANDARD_SET_LABELS[setKey])})</h3>
      <p><strong>${escapeHtml(standardDef ? standardDef.label : "")}</strong></p>
      <p class="muted">${escapeHtml(standardDef ? standardDef.description : "")}</p>
      <p>
        <button type="button" data-action="clear-standard-filter">Clear standard filter</button>
      </p>

      <details open>
        <summary>Matching Units (${unitMatches.length})</summary>
        ${
          unitMatches.length
            ? `<div class="chips">${unitMatches
                .map(
                  (unit) =>
                    `<button class="chip-button" data-action="open-unit" data-unit-id="${escapeAttr(
                      unit.id
                    )}">${escapeHtml(unit.title)}</button>`
                )
                .join("")}</div>`
            : '<p class="muted">No matching units.</p>'
        }
      </details>

      <details open>
        <summary>Matching Labs (${labMatches.length})</summary>
        ${
          labMatches.length
            ? `<div class="chips">${labMatches
                .map(
                  (lab) =>
                    `<button class="chip-button" data-action="open-lab" data-lab-id="${escapeAttr(
                      lab.id
                    )}">${escapeHtml(lab.title)}</button>`
                )
                .join("")}</div>`
            : '<p class="muted">No matching labs.</p>'
        }
      </details>
    `;
  }

  function renderStandardsCrosswalk() {
    const rows = [];

    for (const unit of state.data.units) {
      rows.push({
        itemType: "Unit",
        title: unit.title,
        id: unit.id,
        action: "open-unit",
        standards: unit.standards || {}
      });
    }

    for (const lab of state.data.labs) {
      rows.push({
        itemType: "Lab",
        title: lab.title,
        id: lab.id,
        action: "open-lab",
        standards: lab.standards || {}
      });
    }

    refs.standardsCrosswalk.innerHTML = `
      <h3>Standards Crosswalk</h3>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Row</th>
              <th>Name</th>
              <th>${escapeHtml(STANDARD_SET_LABELS.cdos)}</th>
              <th>${escapeHtml(STANDARD_SET_LABELS.ngls)}</th>
              <th>${escapeHtml(STANDARD_SET_LABELS.etai_dc)}</th>
              <th>${escapeHtml(STANDARD_SET_LABELS.nocti)}</th>
            </tr>
          </thead>
          <tbody>
            ${rows
              .map(
                (row) => `
                  <tr>
                    <td>${escapeHtml(row.itemType)}</td>
                    <td>
                      <button
                        type="button"
                        data-action="${escapeAttr(row.action)}"
                        data-${row.itemType.toLowerCase()}-id="${escapeAttr(row.id)}"
                      >
                        ${escapeHtml(row.title)}
                      </button>
                    </td>
                    <td>${renderCrosswalkCell("cdos", row.standards.cdos || [])}</td>
                    <td>${renderCrosswalkCell("ngls", row.standards.ngls || [])}</td>
                    <td>${renderCrosswalkCell("etai_dc", row.standards.etai_dc || [])}</td>
                    <td>${renderCrosswalkCell("nocti", row.standards.nocti || [])}</td>
                  </tr>
                `
              )
              .join("")}
          </tbody>
        </table>
      </div>
    `;
  }

  function renderMaterials() {
    const materials = state.data.materials || { student_kit: [], communal: [] };

    refs.materialsContent.innerHTML = `
      <div class="cards-grid">
        <article class="card">
          <h3>Student Electrical Engineering Box (Individual Supplies)</h3>
          <div class="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Check</th>
                  <th>Item</th>
                  <th>Description</th>
                  <th>Why Individual vs Communal</th>
                  <th>Replacement Risk</th>
                </tr>
              </thead>
              <tbody>
                ${materials.student_kit.map((item) => renderMaterialRow(item, "student")).join("")}
              </tbody>
            </table>
          </div>
        </article>

        <article class="card">
          <h3>Communal Classroom Supplies (Shared Tools)</h3>
          <div class="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Check</th>
                  <th>Item</th>
                  <th>Description</th>
                  <th>Why Individual vs Communal</th>
                  <th>Replacement Risk</th>
                </tr>
              </thead>
              <tbody>
                ${materials.communal.map((item) => renderMaterialRow(item, "communal")).join("")}
              </tbody>
            </table>
          </div>
        </article>
      </div>
    `;
  }

  function renderAssessments() {
    const assessments = state.data.assessments || { types: [], rubrics: [], feedback_stems: [] };

    refs.assessmentsContent.innerHTML = `
      <div class="cards-grid">
        ${assessments.types
          .map(
            (type) => `
              <article class="card">
                <h3>${escapeHtml(type.name)}</h3>
                <p><strong>Grading:</strong> ${escapeHtml(type.grading_approach)}</p>
                <p><strong>Frequency:</strong> ${escapeHtml(type.frequency)}</p>
                <p><strong>Evidence:</strong> ${escapeHtml(type.evidence)}</p>
              </article>
            `
          )
          .join("")}
      </div>

      <article class="panel">
        <h3>Rubrics (Expand/Collapse)</h3>
        ${assessments.rubrics.map(renderRubricDetails).join("")}
      </article>

      <article class="panel">
        <h3>Teacher Feedback Stems</h3>
        ${renderList(assessments.feedback_stems || [])}
      </article>
    `;
  }

  function renderSearch() {
    if (refs.searchInput.value !== state.searchQuery) {
      refs.searchInput.value = state.searchQuery;
    }
    if (refs.headerSearchInput.value !== state.searchQuery) {
      refs.headerSearchInput.value = state.searchQuery;
    }

    if (!state.searchQuery) {
      refs.searchResults.innerHTML =
        '<p class="empty-state">Enter a term to search across units, lesson objectives, labs, materials, and standards.</p>';
      return;
    }

    const results = state.searchResults || runSearch(state.searchQuery);
    state.searchResults = results;

    const groups = [
      { key: "units", label: "Units" },
      { key: "labs", label: "Labs" },
      { key: "standards", label: "Standards" },
      { key: "materials", label: "Materials" }
    ];

    const total = groups.reduce((sum, group) => sum + results[group.key].length, 0);

    if (!total) {
      refs.searchResults.innerHTML = `<p class="empty-state">No results found for <strong>${escapeHtml(
        state.searchQuery
      )}</strong>.</p>`;
      return;
    }

    refs.searchResults.innerHTML = `
      <h3>${escapeHtml(String(total))} result(s) for "${escapeHtml(state.searchQuery)}"</h3>
      ${groups
        .map((group) => {
          const items = results[group.key];
          return `
            <section class="result-group">
              <h4>${escapeHtml(group.label)} (${escapeHtml(String(items.length))})</h4>
              ${
                items.length
                  ? items
                      .map(
                        (item) => `
                          <article class="result-item">
                            <button
                              type="button"
                              data-action="open-search-result"
                              data-result-type="${escapeAttr(item.type)}"
                              data-result-id="${escapeAttr(item.id || "")}" 
                              data-standard-set="${escapeAttr(item.standardSet || "")}" 
                              data-standard-code="${escapeAttr(item.standardCode || "")}" 
                            >
                              <strong>${escapeHtml(item.title)}</strong><br />
                              <span class="muted">${highlightInline(item.snippet || "", state.searchQuery)}</span>
                            </button>
                          </article>
                        `
                      )
                      .join("")
                  : '<p class="muted">No matches in this group.</p>'
              }
            </section>
          `;
        })
        .join("")}
    `;
  }

  function runSearchFromInput(query) {
    state.searchQuery = (query || "").trim();
    state.searchResults = state.searchQuery ? runSearch(state.searchQuery) : null;
    setActivePage("search");
    renderAll();
  }

  function runSearch(query) {
    const normalizedQuery = query.toLowerCase();

    const unitResults = state.data.units
      .map((unit) => {
        const lessonObjectives = state.data.pacing
          .filter((week) => (week.unit_ids || []).includes(unit.id))
          .flatMap((week) => week.lesson_objectives || []);

        const searchable = [
          unit.title,
          unit.rationale,
          ...(unit.learning_goals || []),
          ...(unit.essential_questions || []),
          ...(unit.key_vocabulary || []),
          ...(unit.formative_assessments || []),
          ...(unit.summative_assessments || []),
          ...lessonObjectives
        ];

        const snippet = findSnippet(searchable, normalizedQuery);
        if (!snippet) return null;

        return {
          type: "unit",
          id: unit.id,
          title: unit.title,
          snippet
        };
      })
      .filter(Boolean);

    const labResults = state.data.labs
      .map((lab) => {
        const searchable = [
          lab.title,
          lab.purpose,
          lab.type,
          ...(lab.concepts || []),
          ...(lab.materials || []),
          ...(lab.setup_steps || []),
          ...(lab.student_procedure || [])
        ];

        const snippet = findSnippet(searchable, normalizedQuery);
        if (!snippet) return null;

        return {
          type: "lab",
          id: lab.id,
          title: lab.title,
          snippet
        };
      })
      .filter(Boolean);

    const standardResults = [];
    for (const setKey of STANDARD_SET_ORDER) {
      for (const standard of state.data.standards[setKey] || []) {
        const searchable = [standard.code, standard.label, standard.description, STANDARD_SET_LABELS[setKey]];
        const snippet = findSnippet(searchable, normalizedQuery);
        if (!snippet) continue;
        standardResults.push({
          type: "standard",
          id: `${setKey}:${standard.code}`,
          title: `${standard.code} — ${standard.label}`,
          snippet,
          standardSet: setKey,
          standardCode: standard.code
        });
      }
    }

    const materialResults = [];
    const categories = [
      { key: "student_kit", prefix: "Student Kit" },
      { key: "communal", prefix: "Communal" }
    ];

    for (const category of categories) {
      for (const item of state.data.materials[category.key] || []) {
        const searchable = [item.name, item.description, item.rationale, item.replacement_risk];
        const snippet = findSnippet(searchable, normalizedQuery);
        if (!snippet) continue;
        materialResults.push({
          type: "material",
          id: item.id,
          title: `${category.prefix}: ${item.name}`,
          snippet
        });
      }
    }

    return {
      units: unitResults,
      labs: labResults,
      standards: standardResults,
      materials: materialResults
    };
  }

  function onMainClick(event) {
    const target = event.target.closest("[data-action]");
    if (!target) return;

    const action = target.dataset.action;

    switch (action) {
      case "select-unit":
        state.selectedUnitId = target.dataset.unitId;
        setActivePage("units");
        renderAll();
        refs.unitDetail.focus();
        break;

      case "open-unit":
        state.selectedUnitId = target.dataset.unitId;
        state.pendingHighlight = "";
        setActivePage("units");
        renderAll();
        refs.unitDetail.focus();
        break;

      case "select-lab":
        state.selectedLabId = target.dataset.labId;
        setActivePage("labs");
        renderAll();
        refs.labDetail.focus();
        break;

      case "open-lab":
        state.selectedLabId = target.dataset.labId;
        state.pendingHighlight = "";
        setActivePage("labs");
        renderAll();
        refs.labDetail.focus();
        break;

      case "filter-standard":
        state.standardFocus = {
          setKey: target.dataset.standardSet,
          code: target.dataset.standardCode
        };
        setActivePage("standards");
        renderAll();
        break;

      case "clear-standard-filter":
        state.standardFocus = null;
        renderStandards();
        break;

      case "open-search-result":
        openSearchResult(target);
        break;

      default:
        break;
    }
  }

  function openSearchResult(target) {
    const resultType = target.dataset.resultType;
    const resultId = target.dataset.resultId;

    state.pendingHighlight = state.searchQuery;

    if (resultType === "unit") {
      state.selectedUnitId = resultId;
      setActivePage("units");
      renderAll();
      refs.unitDetail.focus();
      return;
    }

    if (resultType === "lab") {
      state.selectedLabId = resultId;
      setActivePage("labs");
      renderAll();
      refs.labDetail.focus();
      return;
    }

    if (resultType === "standard") {
      state.standardFocus = {
        setKey: target.dataset.standardSet,
        code: target.dataset.standardCode
      };
      setActivePage("standards");
      renderAll();
      return;
    }

    if (resultType === "material") {
      state.materialFocusId = resultId;
      setActivePage("materials");
      renderAll();
      return;
    }
  }

  function applyPendingHighlight() {
    const query = (state.pendingHighlight || "").trim();
    if (!query) return;

    let targetContainer = null;

    if (state.activePage === "units") {
      targetContainer = refs.unitDetail;
    } else if (state.activePage === "labs") {
      targetContainer = refs.labDetail;
    } else if (state.activePage === "materials") {
      targetContainer = refs.materialsContent;
    } else if (state.activePage === "standards") {
      targetContainer = refs.standardsFilterResults;
    } else if (state.activePage === "pacing") {
      targetContainer = refs.pacingCards;
    } else if (state.activePage === "overview") {
      targetContainer = refs.overviewContent;
    }

    if (targetContainer) {
      highlightInElement(targetContainer, query);
    }

    state.pendingHighlight = "";
  }

  // Highlight matching text in the active detail area after search-result navigation.
  function highlightInElement(container, query) {
    if (!container || !query) return;

    const expression = new RegExp(escapeRegExp(query), "gi");
    const normalizedQuery = query.toLowerCase();
    const walker = document.createTreeWalker(container, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        if (!node.nodeValue || !node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
        const parent = node.parentElement;
        if (!parent) return NodeFilter.FILTER_REJECT;
        if (["SCRIPT", "STYLE", "MARK", "SUMMARY", "BUTTON"].includes(parent.tagName)) {
          return NodeFilter.FILTER_REJECT;
        }
        return node.nodeValue.toLowerCase().includes(normalizedQuery)
          ? NodeFilter.FILTER_ACCEPT
          : NodeFilter.FILTER_REJECT;
      }
    });

    const matches = [];
    let current = walker.nextNode();
    while (current) {
      matches.push(current);
      if (matches.length > 40) break;
      current = walker.nextNode();
    }

    for (const textNode of matches) {
      const source = textNode.nodeValue;
      const regex = new RegExp(escapeRegExp(query), "gi");
      const parts = source.split(regex);
      const found = source.match(regex);
      if (!found) continue;

      const fragment = document.createDocumentFragment();
      for (let i = 0; i < parts.length; i += 1) {
        if (parts[i]) {
          fragment.appendChild(document.createTextNode(parts[i]));
        }

        if (i < found.length) {
          const mark = document.createElement("mark");
          mark.className = "match-highlight";
          mark.textContent = found[i];
          fragment.appendChild(mark);
        }
      }

      textNode.parentNode.replaceChild(fragment, textNode);
    }
  }

  function renderDataTable(dataTable) {
    if (!dataTable) {
      return "<p class=\"muted\">No table data provided.</p>";
    }

    return `
      <div class="table-wrap">
        <p><strong>${escapeHtml(dataTable.title || "Data Table")}</strong></p>
        <table>
          <thead>
            <tr>${(dataTable.columns || []).map((column) => `<th>${escapeHtml(column)}</th>`).join("")}</tr>
          </thead>
          <tbody>
            ${(dataTable.rows || [])
              .map(
                (row) =>
                  `<tr>${row.map((cell) => `<td>${escapeHtml(String(cell))}</td>`).join("")}</tr>`
              )
              .join("")}
          </tbody>
        </table>
      </div>
    `;
  }

  function renderRubricSnippet(snippet) {
    if (!snippet) {
      return '<p class="muted">No rubric snippet provided.</p>';
    }

    return `
      <p><strong>${escapeHtml(snippet.title || "Rubric")}</strong></p>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Criteria</th>
              <th>Point Range</th>
              <th>Look-Fors</th>
            </tr>
          </thead>
          <tbody>
            ${(snippet.criteria || [])
              .map(
                (criterion) => `
                  <tr>
                    <td>${escapeHtml(criterion.criterion || "")}</td>
                    <td>${escapeHtml(criterion.points_range || "")}</td>
                    <td>${escapeHtml(criterion.look_fors || "")}</td>
                  </tr>
                `
              )
              .join("")}
          </tbody>
        </table>
      </div>
    `;
  }

  function renderRubricDetails(rubric) {
    return `
      <details>
        <summary>${escapeHtml(rubric.title)}</summary>
        <p><strong>Model:</strong> ${escapeHtml(rubric.model)}</p>
        <p><strong>Total points:</strong> ${escapeHtml(String(rubric.total_points))}</p>
        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Criteria</th>
                <th>Point Range</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              ${(rubric.criteria || [])
                .map(
                  (criterion) => `
                    <tr>
                      <td>${escapeHtml(criterion.criterion)}</td>
                      <td>${escapeHtml(criterion.points_range)}</td>
                      <td>${escapeHtml(criterion.notes)}</td>
                    </tr>
                  `
                )
                .join("")}
            </tbody>
          </table>
        </div>
      </details>
    `;
  }

  function renderStandardsSetBlocks(standardsBySet) {
    return STANDARD_SET_ORDER.map((setKey) => {
      const codes = (standardsBySet && standardsBySet[setKey]) || [];
      return `
        <p><strong>${escapeHtml(STANDARD_SET_LABELS[setKey])}:</strong></p>
        ${
          codes.length
            ? `<div class="chips">${codes
                .map(
                  (code) =>
                    `<button class="chip-button" data-action="filter-standard" data-standard-set="${escapeAttr(
                      setKey
                    )}" data-standard-code="${escapeAttr(code)}">${escapeHtml(code)}</button>`
                )
                .join("")}</div>`
            : '<p class="muted">None listed.</p>'
        }
      `;
    }).join("");
  }

  function renderCrosswalkCell(setKey, codes) {
    if (!codes.length) {
      return '<span class="muted">—</span>';
    }

    return codes
      .map(
        (code) =>
          `<button class="chip-button" data-action="filter-standard" data-standard-set="${escapeAttr(
            setKey
          )}" data-standard-code="${escapeAttr(code)}">${escapeHtml(code)}</button>`
      )
      .join(" ");
  }

  function renderMaterialRow(item, category) {
    const reason = materialReason(item, category);
    const riskClass = (item.replacement_risk || "").toLowerCase();

    return `
      <tr ${state.materialFocusId === item.id ? 'style="background:#fff9ea"' : ""}>
        <td><input type="checkbox" aria-label="Checklist item ${escapeAttr(item.name)}" /></td>
        <td>${escapeHtml(item.name)}</td>
        <td>${escapeHtml(item.description)}</td>
        <td>${escapeHtml(reason)}</td>
        <td>
          <span class="badge-risk ${escapeAttr(riskClass)}">${escapeHtml(item.replacement_risk)}</span>
        </td>
      </tr>
    `;
  }

  function materialReason(item, category) {
    if (item.rationale && item.rationale.length > 12) {
      return item.rationale;
    }

    if (category === "student") {
      return "Individual: used each class for accountability, hygiene, and quick setup.";
    }

    return "Communal: higher-cost or station-based equipment shared across class sections.";
  }

  function renderList(items) {
    if (!items || !items.length) {
      return '<p class="muted">No entries listed.</p>';
    }
    return `<ul class="clean-list">${items.map((item) => `<li>${escapeHtml(String(item))}</li>`).join("")}</ul>`;
  }

  function findSnippet(parts, normalizedQuery) {
    for (const partRaw of parts) {
      const part = String(partRaw || "");
      const index = part.toLowerCase().indexOf(normalizedQuery);
      if (index < 0) continue;

      const start = Math.max(0, index - 48);
      const end = Math.min(part.length, index + normalizedQuery.length + 72);
      const leading = start > 0 ? "..." : "";
      const trailing = end < part.length ? "..." : "";
      return `${leading}${part.slice(start, end)}${trailing}`;
    }
    return "";
  }

  function highlightInline(text, query) {
    if (!query) return escapeHtml(text);
    const expression = new RegExp(escapeRegExp(query), "gi");
    return escapeHtml(text).replace(expression, (match) => `<mark>${match}</mark>`);
  }

  function printCurrentPage(mode) {
    document.body.dataset.printMode = mode;
    window.print();
  }

  function clearPrintMode() {
    delete document.body.dataset.printMode;
  }

  function toggleBackToTop() {
    refs.backToTopBtn.classList.toggle("is-visible", window.scrollY > 360);
  }

  function getUnitById(unitId) {
    return state.data.units.find((unit) => unit.id === unitId);
  }

  function getLabById(labId) {
    return state.data.labs.find((lab) => lab.id === labId);
  }

  function setSelectOptions(selectElement, options, selectedValue) {
    selectElement.innerHTML = options
      .map(
        (option) =>
          `<option value="${escapeAttr(option.value)}" ${
            option.value === selectedValue ? "selected" : ""
          }>${escapeHtml(option.label)}</option>`
      )
      .join("");
  }

  function setStatus(message) {
    refs.appStatus.textContent = message;
  }

  function byId(id) {
    return document.getElementById(id);
  }

  function unique(values) {
    return [...new Set(values.filter(Boolean))];
  }

  function orderValues(values, preferredOrder) {
    const preferred = preferredOrder.filter((item) => values.includes(item));
    const remaining = values.filter((item) => !preferred.includes(item)).sort((a, b) => a.localeCompare(b));
    return preferred.concat(remaining);
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/\"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function escapeAttr(value) {
    return escapeHtml(value).replace(/`/g, "&#96;");
  }

  function escapeRegExp(value) {
    return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }
})();
