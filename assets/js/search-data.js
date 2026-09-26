// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "Journal articles, conference papers and abstracts, preprints, and manuscripts under review in clinical AI, digital health, and respiratory medicine.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-research",
          title: "research",
          description: "Three research themes — physiological signal learning, clinical prediction, and real-world evaluation — followed by current work and earlier projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "Courses, invited lectures, and guest talks.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Curriculum Vitae of Kyung Hyun Lee — AI Researcher in Physiological and Clinical Time-Series Learning · PhD Student in Digital Health · Co-founder &amp; CEO of BreathYou Co., Ltd.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-people",
          title: "people",
          description: "people I work with and have mentored",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "nav-blog",
          title: "blog",
          description: "Research notes, paper reviews, and reflections on medical AI.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "post-notes-from-ers-congress-2026",
        
          title: "Notes from ERS Congress 2026",
        
        description: "Presenting a poster at ERS Congress 2026 in Barcelona on reading repeated screening spirometry as a trajectory to anticipate airflow obstruction.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/ers-2026/";
          
        },
      },{id: "post-notes-from-aki-amp-crrt-2026",
        
          title: "Notes from AKI &amp; CRRT 2026",
        
        description: "Reflections from AKI &amp; CRRT 2026 on continuous AKI prediction, LLM-embedded nursing notes, clinical deployment, and the updated KDIGO guideline.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/aki-crrt-2026/";
          
        },
      },{id: "news-presented-an-oral-poster-on-online-simulation-evaluation-of-aki-prediction-models-at-aki-amp-amp-crrt-2026-san-diego-conference-notes",
          title: 'Presented an oral poster on online-simulation evaluation of AKI prediction models at AKI...',
          description: "",
          section: "News",},{id: "news-published-in-npj-digital-medicine-multi-center-external-validation-of-deep-learning-aki-prediction-models-under-simulated-continuous-monitoring-paper",
          title: 'Published in npj Digital Medicine: multi-center external validation of deep learning AKI prediction...',
          description: "",
          section: "News",},{id: "news-appointed-lecturer-in-the-department-of-sport-science-university-of-seoul-teaching-exercise-and-digital-healthcare-fall-2026",
          title: 'Appointed lecturer in the Department of Sport Science, University of Seoul, teaching Exercise...',
          description: "",
          section: "News",},{id: "news-breathyou-co-ltd-received-the-excellence-award-at-the-2026-consortium-lab-based-startup-camp-sungkyunkwan-university",
          title: 'BreathYou Co., Ltd. received the Excellence Award at the 2026 Consortium Lab-based Startup...',
          description: "",
          section: "News",},{id: "news-presented-a-poster-on-spirometry-trajectories-and-incident-airflow-obstruction-at-the-ers-international-congress-2026-barcelona-conference-notes",
          title: 'Presented a poster on spirometry trajectories and incident airflow obstruction at the ERS...',
          description: "",
          section: "News",},{id: "news-breathyou-co-ltd-received-the-excellence-award-at-the-2026-lab-startup-competition-sungkyunkwan-university",
          title: 'BreathYou Co., Ltd. received the Excellence Award at the 2026 Lab Startup Competition,...',
          description: "",
          section: "News",},{id: "projects-asthma-diagnosis-ai-model-development",
          title: 'Asthma Diagnosis AI Model Development',
          description: "AI model for asthma diagnosis using methacholine challenge test data from Samsung Medical Center, achieving comparable performance with a single test.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/asthma_ai/";
            },},{id: "projects-balllab-unmanned-indoor-tennis-court-system",
          title: 'BallLab — Unmanned Indoor Tennis Court System',
          description: "Full-stack development of IoT door lock, reservation/payment system, and management dashboard for an unmanned indoor tennis court.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/balllab/";
            },},{id: "projects-clinical-prediction",
          title: 'Clinical Prediction',
          description: "Machine learning for specific clinical questions — asthma diagnosis and sepsis risk — validated on later or prospectively collected patients.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/clinical_prediction/";
            },},{id: "projects-evaluating-continuously-read-clinical-models",
          title: 'Evaluating Continuously Read Clinical Models',
          description: "Metrics, horizons, and external validation for models read every hour or every minute — work in progress and under review.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/continuous_monitoring_evaluation/";
            },},{id: "projects-cardiorespiratory-fitness-prediction-in-korean-population",
          title: 'Cardiorespiratory Fitness Prediction in Korean Population',
          description: "Development of a CRF prediction model for healthy Korean adults using health screening and exercise stress test data from Samsung Medical Center.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/crf_prediction/";
            },},{id: "projects-deep-learning-based-ecg-modeling-for-ans-monitoring",
          title: 'Deep Learning-based ECG Modeling for ANS Monitoring',
          description: "[NRF] Autonomic nervous system pathological change monitoring via deep learning-based ECG modeling for stress detection and depression prediction.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ecg_ans_monitoring/";
            },},{id: "projects-emg-based-real-time-hand-gesture-prediction",
          title: 'EMG-based Real-time Hand Gesture Prediction',
          description: "Development of a data-driven model for real-time complex hand gesture recognition using EMG signals collected from subjects.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/emg_hand_gesture/";
            },},{id: "projects-healthcare-ai-strategy-research",
          title: 'Healthcare AI Strategy Research',
          description: "[MOHW] Research on domestic and international trends in healthcare AI for strategic planning and roadmap development.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/healthcare_ai_strategy/";
            },},{id: "projects-healthy-vascular-aging-amp-fitness-with-subclinical-atherosclerosis",
          title: 'Healthy Vascular Aging &amp;amp; Fitness with Subclinical Atherosclerosis',
          description: "Analysis of the impact of HVA and cardiorespiratory fitness on subclinical atherosclerosis using Samsung Medical Center health screening data.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/hva_atherosclerosis/";
            },},{id: "projects-longitudinal-pulmonary-function",
          title: 'Longitudinal Pulmonary Function',
          description: "Doctoral research — reading repeated screening spirometry as a trajectory to anticipate incident airflow obstruction.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/longitudinal_lung_function/";
            },},{id: "projects-intelligent-sw-for-medical-data-analysis",
          title: 'Intelligent SW for Medical Data Analysis',
          description: "[NIPA] AI-based intelligent medical solution for breast cancer risk prediction and recurrence risk prediction by survival period.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/medical_data_sw/";
            },},{id: "projects-public-health-information-system-phis",
          title: 'Public Health Information System (PHIS)',
          description: "[MSIT] Building a standards-based Public Health Information System through SNOMED CT code mapping and Common Data Model (CDM) construction.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/phis/";
            },},{id: "projects-physiological-signal-learning",
          title: 'Physiological Signal Learning',
          description: "Neural networks on EMG and ECG-derived RR intervals — gesture classification, age prediction, and stress detection — compared with handcrafted features and conventional classifiers.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/physiological_signals/";
            },},{id: "projects-real-world-evaluation",
          title: 'Real-World Evaluation',
          description: "Multi-center external validation and continuous-monitoring simulation of AKI prediction models — where single-point performance and performance under repeated use can diverge.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/real_world_evaluation/";
            },},{id: "projects-multi-center-surgical-mortality-amp-icu-admission-prediction",
          title: 'Multi-center Surgical Mortality &amp;amp; ICU Admission Prediction',
          description: "Development of 30-day mortality and ICU admission prediction models using perioperative data from four major hospitals in South Korea.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/surgical_mortality/";
            },},{id: "projects-talli-healthcare-career-platform",
          title: 'TALLI — Healthcare Career Platform',
          description: "Backend development for a career growth platform for healthcare professionals, built with FastAPI and PostgreSQL.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/talli/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6C%6B%68%32%35%36@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/rendercv/rendercv_output/Kyung_Hyun_Lee_CV.pdf", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0002-7010-5284", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=T0DHr9QAAAAJ", "_blank");
        },
      },{
        id: 'social-openreview',
        title: 'Openreview',
        section: 'Socials',
        handler: () => {
          window.open("https://openreview.net/profile?id=~Kyung_Hyun_Lee1", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/Jovinus", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/kyunghyun-lee-7963a3184", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
