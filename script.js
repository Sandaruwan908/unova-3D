/* =====================================================================
       CAMPUS CONNECT — APPLICATION STATE & SEED DATA
       ===================================================================== */
    const DEFAULT_STATE = {
      activeView: `home`,
      passport: {
        name: `Kasun Perera`,
        university: `UOM`,
        faculty: `IT & Computing`,
        avatarColor: `cyan`
      },
      selectedAssignmentId: `asg-1`,
      assignmentCategory: `ALL`,
      assignments: [
        {
          id: `asg-1`,
          title: `CS3042 Distributed Consensus & Raft Leader Election`,
          category: `IT`,
          university: `UOM`,
          module: `CS3042`,
          author: `Tharindu Jayasinghe`,
          body: `Working through split-brain recovery edge cases in our Raft simulation lab. Looking to compare heartbeat timeout formulas and share our unit test harness.`,
          upvotes: 19,
          docs: [
            { name: `Raft_Heartbeat_Trace.pdf`, owner: `Tharindu J. (UOM)` },
            { name: `CS3042_Lab4_Checklist.md`, owner: `Nethmi S. (SLIIT)` }
          ],
          comments: [
            { id: `c1`, author: `Nethmi Silva • SLIIT`, text: `Randomized election timeouts between 150ms and 300ms solved our split-vote loop immediately.`, replies: [`Kasun Perera • UOM: Confirmed! Adding jitter fixed test case 4.`] },
            { id: `c2`, author: `Kavindi Perera • UOC`, text: `Uploaded a clean state-transition diagram for follower-to-candidate transitions.` }
          ]
        },
        {
          id: `asg-2`,
          title: `CE3120 Prestressed Concrete Bridge Girder Shear Design`,
          category: `Engineering`,
          university: `UOP`,
          module: `CE3120`,
          author: `Dilshan Bandara`,
          body: `Comparing Eurocode 2 shear reinforcement spacing against our Peradeniya structural lab specimen load curves. Let us validate the strut-and-tie assumptions.`,
          upvotes: 14,
          docs: [
            { name: `EC2_Girder_Shear_Sheet.xlsx`, owner: `Dilshan B. (UOP)` }
          ],
          comments: [
            { id: `c3`, author: `Ishara Fernando • UOM`, text: `Check Table 6.2 for theta limits when VEd exceeds 0.3 fcd; our group had a unit mismatch in kN/m.`, replies: [] }
          ]
        },
        {
          id: `asg-3`,
          title: `FIN3210 Colombo Stock Exchange ESG Portfolio Backtest`,
          category: `Business`,
          university: `USJP`,
          module: `FIN3210`,
          author: `Amaya Wickramasinghe`,
          body: `Building a 5-year Sharpe ratio comparison of CSE S&P SL20 firms with sustainability disclosures. Need peer check on risk-free Treasury bill benchmark.`,
          upvotes: 11,
          docs: [
            { name: `CSE_ESG_Sample_2025.csv`, owner: `Amaya W. (USJP)` }
          ],
          comments: []
        },
        {
          id: `asg-4`,
          title: `BIO2104 Mangrove Salinity Resilience Assay (Negombo Lagoon)`,
          category: `Science`,
          university: `UOK`,
          module: `BIO2104`,
          author: `Chamodi Senanayake`,
          body: `Analyzing chlorophyll fluorescence shifts across three Rhizophora mucronata zones. Seeking R-script tips for two-way ANOVA visualization.`,
          upvotes: 9,
          docs: [
            { name: `Lagoon_Salinity_Readings.csv`, owner: `Chamodi S. (UOK)` }
          ],
          comments: []
        },
        {
          id: `asg-5`,
          title: `MED2080 Interactive Documentary Storyboarding on Sri Lankan Crafts`,
          category: `Media`,
          university: `UOC`,
          module: `MED2080`,
          author: `Sehan Wijeratne`,
          body: `Designing branching WebGL audio-visual chapters spotlighting Ambalangoda mask carvers. Looking for sound-design feedback and subtitle pacing notes.`,
          upvotes: 12,
          docs: [
            { name: `Storyboard_BeatSheet_v2.pdf`, owner: `Sehan W. (UOC)` }
          ],
          comments: []
        },
        {
          id: `asg-6`,
          title: `HIS3015 Epigraphic Translations of Anuradhapura Vihara Inscriptions`,
          category: `Arts & Humanities`,
          university: `UOP`,
          module: `HIS3015`,
          author: `Malithi Gunasekara`,
          body: `Cross-referencing Brahmi script phonetic variants across 4th-century donor inscriptions. Sharing our comparative glossary table for peer proofreading.`,
          upvotes: 8,
          docs: [
            { name: `Brahmi_Glossary_Draft.docx`, owner: `Malithi G. (UOP)` }
          ],
          comments: []
        },
        {
          id: `asg-7`,
          title: `EDU2040 Bilingual STEM Micro-Lessons for Rural O/L Classrooms`,
          category: `Education`,
          university: `UOR`,
          module: `EDU2040`,
          author: `Harsha Rathnayake`,
          body: `Testing low-bandwidth interactive physics worksheets in Sinhala and Tamil for Grade 10 students in Matara district. Seeking rubric reviewers.`,
          upvotes: 15,
          docs: [
            { name: `OL_Physics_Bilingual_Rubric.pdf`, owner: `Harsha R. (UOR)` }
          ],
          comments: []
        }
      ],
      selectedResearchId: `res-1`,
      researchItems: [
        {
          id: `res-1`,
          title: `Sinhala-Tamil Code-Mixed Neural Machine Translation for Civic Portals`,
          field: `AI & Computing`,
          university: `UOM`,
          interest: `Co-Author Needed`,
          lead: `Kavindi Perera`,
          stage: `Data Collection`,
          abstract: `Building a parallel trilingual corpus from Sri Lankan public notices to benchmark transformer adapters on low-resource code-switched queries.`,
          partnersRequested: false,
          discussions: [
            { author: `Dr. Ashan (Mentor) • UOC`, text: `Consider byte-level BPE tokenization to handle mixed Sinhala Unicode vowel modifiers cleanly.` }
          ]
        },
        {
          id: `res-2`,
          title: `IoT Edge Forecasting for Tea Smallholder Micro-Irrigation in Nuwara Eliya`,
          field: `Engineering & Energy`,
          university: `UOP`,
          interest: `Hardware / Lab Access`,
          lead: `Ravindu Herath`,
          stage: `Prototype`,
          abstract: `LoRaWAN soil-moisture nodes paired with lightweight LSTM evapotranspiration forecasting to cut hillside water waste by 28%.`,
          partnersRequested: false,
          discussions: [
            { author: `Dinithi K. • UOM`, text: `We have spare ESP32-LoRa solar shields in Moratuwa lab if your team needs two field units.` }
          ]
        },
        {
          id: `res-3`,
          title: `Blue-Carbon Sequestration Valuation in Puttalam Coastal Wetlands`,
          field: `Science & AgriTech`,
          university: `UOK`,
          interest: `Data Collection Partner`,
          lead: `Nadeesha Silva`,
          stage: `Proposal`,
          abstract: `Combining Sentinel-2 NDVI time-series with sediment core sampling to quantify carbon credit potential for local fishing cooperatives.`,
          partnersRequested: false,
          discussions: []
        },
        {
          id: `res-4`,
          title: `QR-Based Micro-Credit Liquidity Patterns Among Colombo SMEs`,
          field: `Business & FinTech`,
          university: `USJP`,
          interest: `Methodology Review`,
          lead: `Sajith De Alwis`,
          stage: `Peer Review`,
          abstract: `Empirical study of LANKAQR merchant adoption and working-capital resilience across 320 retail enterprises.`,
          partnersRequested: false,
          discussions: []
        }
      ],
      meeting: {
        roomCode: `SL-ML-402`,
        roomTitle: `Sinhala-Tamil NLP Capstone Sync`,
        slideIndex: 0,
        micOn: true,
        camOn: true,
        chat: [
          { id: `m1`, sender: `Kavindi • UOC`, self: false, text: `Welcome to Room SL-ML-402! Use WASD to walk up to the holographic table or whiteboard.` },
          { id: `m2`, sender: `Tharindu • UOP`, self: false, text: `I loaded the corpus evaluation metrics onto Digital Screen Slide 2.` }
        ],
        whiteboardStrokes: [
          { color: `#22f3ff`, width: 3, points: [[120, 90], [260, 90], [260, 175], [120, 175], [120, 90]] },
          { color: `#c084fc`, width: 3, points: [[260, 132], [380, 132]] },
          { color: `#c084fc`, width: 3, points: [[380, 85], [560, 85], [560, 180], [380, 180], [380, 85]] },
          { color: `#22f3ff`, width: 3, points: [[560, 132], [680, 132]] },
          { color: `#eef2ff`, width: 3, points: [[680, 95], [810, 95], [810, 170], [680, 170], [680, 95]] }
        ]
      },
      projects: [
        {
          id: `proj-1`,
          title: `LankaTransit Live Bus Telemetry`,
          track: `MoraXtreme / Civic Tech`,
          rolesNeeded: `Flutter Dev, Embedded GPS`,
          progress: 68,
          members: [`Kasun P. (UOM)`, `Nethmi S. (SLIIT)`, `Dilshan B. (UOP)`],
          joined: true,
          desc: `Crowdsourced real-time bus ETA prediction along Galle Road & Kandy Road corridors using lightweight edge beacons.`
        },
        {
          id: `proj-2`,
          title: `AgriGuard Paddy Leaf Disease Scanner`,
          track: `SLASSCOM Innovation`,
          rolesNeeded: `Agri Advisor, TensorFlow Lite`,
          progress: 52,
          members: [`Chamodi S. (UOK)`, `Ravindu H. (UOP)`],
          joined: false,
          desc: `Offline mobile vision classifier helping Polonnaruwa farmers detect blast & brown spot early with bilingual guidance.`
        },
        {
          id: `proj-3`,
          title: `UniNotes Open Peer Archive`,
          track: `Inter-Uni Open Source`,
          rolesNeeded: `UI/UX Designer, Search Backend`,
          progress: 81,
          members: [`Amaya W. (USJP)`, `Sehan W. (UOC)`],
          joined: false,
          desc: `Peer-reviewed lecture summaries and past-paper walkthroughs indexed by Sri Lankan university module codes.`
        }
      ],
      connectedPeers: [`peer-1`],
      ideas: [
        { id: `idea-1`, title: `Solar-powered study pods with mesh Wi-Fi on university lawns`, tag: `Campus Utility`, author: `UOM Engineering`, sparks: 24 },
        { id: `idea-2`, title: `Cross-university Sinhala/Tamil technical glossary Chrome companion`, tag: `Social Impact`, author: `UOC + UOK`, sparks: 19 },
        { id: `idea-3`, title: `Automated lab equipment booking & peer safety buddy matcher`, tag: `Research Spark`, author: `UOP Science`, sparks: 15 }
      ]
    };

    const PEER_DIRECTORY = [
      { id: `peer-1`, name: `Kavindi Perera`, uni: `UOC`, stream: `IT & Computing`, skills: `PyTorch, NLP, FastAPI`, status: `Open for Research` },
      { id: `peer-2`, name: `Tharindu Jayasinghe`, uni: `UOM`, stream: `Engineering`, skills: `Embedded C, LoRaWAN, PCB`, status: `Hackathon Ready` },
      { id: `peer-3`, name: `Nethmi Silva`, uni: `SLIIT`, stream: `IT & Computing`, skills: `Three.js, React, Figma`, status: `Capstone Team` },
      { id: `peer-4`, name: `Amaya Wickramasinghe`, uni: `USJP`, stream: `Business`, skills: `Econometrics, R, ESG Finance`, status: `Co-Author Ready` },
      { id: `peer-5`, name: `Dilshan Bandara`, uni: `UOP`, stream: `Engineering`, skills: `AutoCAD, Structural FEA, MATLAB`, status: `Study Partner` },
      { id: `peer-6`, name: `Chamodi Senanayake`, uni: `UOK`, stream: `Science`, skills: `GIS, R Stats, Ecology`, status: `Field Research` }
    ];

    const DIGITAL_SLIDES = [
      {
        title: `Slide 1 / 3 — System Architecture`,
        heading: `CAMPUS CONNECT • 3D COLLAB PIPELINE`,
        lines: [
          `1. Trilingual Tokenizer -> Shared Semantic Space`,
          `2. Cross-Uni Peer Node Sync (UOM <-> UOC <-> UOP)`,
          `3. Live Whiteboard + Holographic Table Workspace`,
          `Status: 94.2% BLEU Alignment on Civic Corpus`
        ]
      },
      {
        title: `Slide 2 / 3 — Sri Lankan Dataset Benchmarks`,
        heading: `BENCHMARK EVALUATION • SEMESTER 2026`,
        lines: [
          `Sinhala-English Pair Accuracy:  88.4% (+6.1%)`,
          `Tamil-English Pair Accuracy:    86.9% (+5.4%)`,
          `Latency on Campus Edge Node:    42 ms`,
          `Contributors: 14 Undergrads across 5 Universities`
        ]
      },
      {
        title: `Slide 3 / 3 — Sprint Milestones & Action Items`,
        heading: `WEEK 08 DELIVERABLES & PEER ASSIGNMENTS`,
        lines: [
          `[DONE] Collect 12,000 UGC module terminology pairs`,
          `[LIVE] Annotate edge-case idiomatic queries in Whiteboard`,
          `[NEXT] Schedule Friday demo in Room SL-ML-402`,
          `Host: Campus Connect Academic Guild`
        ]
      }
    ];

    let appState = JSON.parse(JSON.stringify(DEFAULT_STATE));

    /* =====================================================================
       STATE PERSISTENCE HELPERS (notebookAppApi)
       ===================================================================== */
    async function persistState() {
      if (window.notebookAppApi && typeof window.notebookAppApi.setAppState === `function`) {
        try {
          await window.notebookAppApi.setAppState(appState);
        } catch (err) {
          console.warn(`State save skipped:`, err);
        }
      }
    }

    function restoreFromState(saved) {
      if (!saved || typeof saved !== `object`) return;
      appState = {
        ...JSON.parse(JSON.stringify(DEFAULT_STATE)),
        ...saved,
        passport: { ...DEFAULT_STATE.passport, ...(saved.passport || {}) },
        meeting: { ...DEFAULT_STATE.meeting, ...(saved.meeting || {}) }
      };
    }

    function showFeedback(message) {
      const bar = document.getElementById(`global-feedback`);
      const text = document.getElementById(`global-feedback-text`);
      if (!bar || !text) return;
      text.textContent = message;
      bar.classList.add(`is-visible`);
    }

    function dismissFeedback() {
      const bar = document.getElementById(`global-feedback`);
      if (bar) bar.classList.remove(`is-visible`);
    }

    function handleResetWorkspace(btn) {
      if (!btn) return;
      if (btn.dataset.armed !== `true`) {
        btn.dataset.armed = `true`;
        btn.textContent = `Confirm Reset?`;
        setTimeout(() => {
          if (btn.dataset.armed === `true`) {
            btn.dataset.armed = `false`;
            btn.textContent = `Reset`;
          }
        }, 4000);
        return;
      }
      btn.dataset.armed = `false`;
      btn.textContent = `Reset`;
      appState = JSON.parse(JSON.stringify(DEFAULT_STATE));
      syncInputsFromState();
      renderAllViews();
      redrawWhiteboardFromState();
      updateDigitalScreenTexture();
      persistState();
      showFeedback(`Workspace reset to default Sri Lankan campus state.`);
    }

    function exportWorkspaceSummary() {
      const lines = [
        `CAMPUS CONNECT — Academic Collaboration Summary`,
        `Student: ${appState.passport.name} (${appState.passport.university} — ${appState.passport.faculty})`,
        `Assignments Tracked: ${appState.assignments.length}`,
        `Research Proposals: ${appState.researchItems.length}`,
        `Active 3D Meeting Room: ${appState.meeting.roomCode} (${appState.meeting.roomTitle})`,
        `Group Projects: ${appState.projects.length}`,
        `Connected Peers: ${appState.connectedPeers.length}`
      ].join(`\n`);
      if (window.notebookAppApi && typeof window.notebookAppApi.triggerFileDownload === `function`) {
        window.notebookAppApi.triggerFileDownload({
          content: lines,
          contentType: `text/plain`,
          encoding: `UTF-8`,
          filename: `campus_connect_summary.txt`
        });
      }
      showFeedback(`Exported workspace summary (campus_connect_summary.txt).`);
    }

    /* =====================================================================
       NAVIGATION & PASSPORT
       ===================================================================== */
    function switchView(viewId) {
      appState.activeView = viewId;
      const views = [`home`, `assignments`, `research`, `meeting`, `lab`];
      views.forEach((v) => {
        const sec = document.getElementById(`view-${v}`);
        const nav = document.getElementById(`nav-${v}`);
        if (sec) sec.classList.toggle(`is-active`, v === viewId);
        if (nav) nav.classList.toggle(`is-active`, v === viewId);
      });

      if (viewId === `home`) {
        resizeCampusRenderer();
      } else if (viewId === `meeting`) {
        resizeMeetingRenderer();
      }
      persistState();
    }

    function updateStudentPassport() {
      const nameEl = document.getElementById(`passport-name`);
      const uniEl = document.getElementById(`passport-uni`);
      const facEl = document.getElementById(`passport-faculty`);
      if (nameEl) appState.passport.name = nameEl.value.trim() || `Student`;
      if (uniEl) appState.passport.university = uniEl.value;
      if (facEl) appState.passport.faculty = facEl.value;
      const headerLabel = document.getElementById(`header-user-label`);
      if (headerLabel) headerLabel.textContent = `${appState.passport.name} • ${appState.passport.university}`;
      updateSelfAvatarLabel();
      renderMeetingParticipants();
      persistState();
    }

    function syncInputsFromState() {
      const nameEl = document.getElementById(`passport-name`);
      const uniEl = document.getElementById(`passport-uni`);
      const facEl = document.getElementById(`passport-faculty`);
      const colorEl = document.getElementById(`setup-avatar-color`);
      if (nameEl) nameEl.value = appState.passport.name;
      if (uniEl) uniEl.value = appState.passport.university;
      if (facEl) facEl.value = appState.passport.faculty;
      if (colorEl) colorEl.value = appState.passport.avatarColor || `cyan`;
      const headerLabel = document.getElementById(`header-user-label`);
      if (headerLabel) headerLabel.textContent = `${appState.passport.name} • ${appState.passport.university}`;
    }

    /* =====================================================================
       1. HOME PAGE RENDERING
       ===================================================================== */
    function renderHomeSections() {
      const featEl = document.getElementById(`home-featured-discussions`);
      const meetEl = document.getElementById(`home-upcoming-meetings`);
      const resEl = document.getElementById(`home-shared-research`);

      const kpiAssign = document.getElementById(`kpi-assignments-count`);
      const kpiRes = document.getElementById(`kpi-research-count`);
      if (kpiAssign) kpiAssign.textContent = `${1277 + appState.assignments.length}`;
      if (kpiRes) kpiRes.textContent = `${408 + appState.researchItems.length}`;

      if (featEl) {
        featEl.innerHTML = appState.assignments.slice(0, 3).map((a) => `
          <div class="item-card is-clickable" onclick="openAssignmentFromHome('${a.id}')">
            <div class="row-between">
              <span class="badge is-cyan">${a.category}</span>
              <span class="mono-meta">${a.university} • ${a.module}</span>
            </div>
            <strong>${escapeHtml(a.title)}</strong>
            <div class="row-between mono-meta">
              <span>${a.comments.length} replies • ${a.docs.length} docs</span>
              <span>Open Thread &rarr;</span>
            </div>
          </div>
        `).join(``);
      }

      if (meetEl) {
        const rooms = [
          { code: `SL-ML-402`, title: `Sinhala-Tamil NLP Capstone Sync`, meta: `Live Now • 5 Peers in 3D Room` },
          { code: `UOM-EE-209`, title: `Hybrid Solar Microgrid Simulation`, meta: `Starts in 20m • UOM + UOP` },
          { code: `UOC-BUS-311`, title: `Colombo FinTech Regulatory Review`, meta: `Today 19:30 • UOC + USJP` }
        ];
        meetEl.innerHTML = rooms.map((r) => `
          <div class="item-card">
            <div class="row-between">
              <span class="badge is-positive">${r.code}</span>
              <span class="mono-meta">${r.meta}</span>
            </div>
            <strong>${r.title}</strong>
            <button type="button" class="btn btn-cyan" onclick="joinPresetRoom('${r.code}', true)">
              Join 3D Meeting Room
            </button>
          </div>
        `).join(``);
      }

      if (resEl) {
        resEl.innerHTML = appState.researchItems.slice(0, 3).map((r) => `
          <div class="item-card is-clickable" onclick="openResearchFromHome('${r.id}')">
            <div class="row-between">
              <span class="badge">${r.field}</span>
              <span class="mono-meta">${r.university}</span>
            </div>
            <strong>${escapeHtml(r.title)}</strong>
            <div class="row-between mono-meta">
              <span>${r.interest}</span>
              <span>Find Partner &rarr;</span>
            </div>
          </div>
        `).join(``);
      }
    }

    function openAssignmentFromHome(id) {
      appState.selectedAssignmentId = id;
      switchView(`assignments`);
      renderAssignments();
    }

    function openResearchFromHome(id) {
      appState.selectedResearchId = id;
      switchView(`research`);
      renderResearch();
    }

    /* =====================================================================
       2. ASSIGNMENT DISCUSSION HUB
       ===================================================================== */
    const ASSIGNMENT_CATEGORIES = [`ALL`, `IT`, `Engineering`, `Business`, `Science`, `Media`, `Arts & Humanities`, `Education`];

    function setAssignmentCategory(cat) {
      appState.assignmentCategory = cat;
      renderAssignments();
      persistState();
    }

    function toggleAssignmentCreator() {
      const panel = document.getElementById(`assignment-creator-panel`);
      if (panel) panel.classList.toggle(`hidden-panel`);
    }

    function createAssignmentTopic() {
      const titleEl = document.getElementById(`new-assign-title`);
      const catEl = document.getElementById(`new-assign-cat`);
      const modEl = document.getElementById(`new-assign-module`);
      const docEl = document.getElementById(`new-assign-doc`);
      const bodyEl = document.getElementById(`new-assign-body`);
      const statusEl = document.getElementById(`new-assign-status`);
      if (!titleEl || !catEl || !modEl || !bodyEl) return;

      const title = titleEl.value.trim();
      const body = bodyEl.value.trim();
      if (title.length < 5 || body.length < 10) {
        if (statusEl) statusEl.textContent = `Please enter a descriptive title and at least 10 characters of context.`;
        return;
      }

      const newItem = {
        id: `asg-${Date.now()}`,
        title,
        category: catEl.value,
        university: appState.passport.university,
        module: modEl.value.trim() || `GEN101`,
        author: appState.passport.name,
        body,
        upvotes: 1,
        docs: docEl && docEl.value.trim() ? [{ name: docEl.value.trim(), owner: `${appState.passport.name} (${appState.passport.university})` }] : [],
        comments: []
      };

      appState.assignments.unshift(newItem);
      appState.selectedAssignmentId = newItem.id;
      titleEl.value = ``;
      modEl.value = ``;
      if (docEl) docEl.value = ``;
      bodyEl.value = ``;
      if (statusEl) statusEl.textContent = ``;
      toggleAssignmentCreator();
      renderAssignments();
      renderHomeSections();
      persistState();
      showFeedback(`Published new assignment discussion: ${newItem.title}`);
    }

    function renderAssignments() {
      const chipsEl = document.getElementById(`assignment-category-chips`);
      if (chipsEl) {
        chipsEl.innerHTML = ASSIGNMENT_CATEGORIES.map((cat) => `
          <button type="button" class="chip-btn ${appState.assignmentCategory === cat ? `is-active` : ``}" onclick="setAssignmentCategory('${cat}')">
            ${cat === `ALL` ? `All Subjects` : escapeHtml(cat)}
          </button>
        `).join(``);
      }

      const searchEl = document.getElementById(`assignment-search`);
      const uniEl = document.getElementById(`assignment-uni-filter`);
      const query = searchEl ? searchEl.value.trim().toLowerCase() : ``;
      const uni = uniEl ? uniEl.value : `ALL`;

      const filtered = appState.assignments.filter((item) => {
        const catOk = appState.assignmentCategory === `ALL` || item.category === appState.assignmentCategory;
        const uniOk = uni === `ALL` || item.university === uni;
        const qOk = !query || item.title.toLowerCase().includes(query) || item.module.toLowerCase().includes(query) || item.body.toLowerCase().includes(query);
        return catOk && uniOk && qOk;
      });

      const countEl = document.getElementById(`assignment-list-count`);
      if (countEl) countEl.textContent = `${filtered.length}`;

      const listEl = document.getElementById(`assignment-thread-list`);
      if (listEl) {
        if (filtered.length === 0) {
          listEl.innerHTML = `<div class="glass-panel-sub"><p class="muted-copy">No assignment discussions match this filter. Try switching subject category or creating a new topic.</p></div>`;
        } else {
          listEl.innerHTML = filtered.map((item) => `
            <div class="item-card is-clickable ${appState.selectedAssignmentId === item.id ? `is-selected` : ``}" onclick="selectAssignment('${item.id}')">
              <div class="row-between">
                <span class="badge is-cyan">${escapeHtml(item.category)}</span>
                <span class="mono-meta">${escapeHtml(item.university)} • ${escapeHtml(item.module)}</span>
              </div>
              <strong>${escapeHtml(item.title)}</strong>
              <p class="muted-copy">${escapeHtml(item.body)}</p>
              <div class="row-between mono-meta">
                <span>By ${escapeHtml(item.author)}</span>
                <span>${item.comments.length} replies • ${item.docs.length} docs • ${item.upvotes} helpful</span>
              </div>
            </div>
          `).join(``);
        }
      }

      renderAssignmentDetail();
    }

    function selectAssignment(id) {
      appState.selectedAssignmentId = id;
      renderAssignments();
      persistState();
    }

    function renderAssignmentDetail() {
      const panel = document.getElementById(`assignment-detail-panel`);
      if (!panel) return;
      const item = appState.assignments.find((a) => a.id === appState.selectedAssignmentId) || appState.assignments[0];
      if (!item) {
        panel.innerHTML = `<p class="muted-copy">Select an assignment topic to view shared documents, replies, and matched peers.</p>`;
        return;
      }

      const matchedPeers = PEER_DIRECTORY.filter((p) =>
        p.stream.toLowerCase().includes(item.category.toLowerCase().split(` `)[0]) || p.uni === item.university
      ).slice(0, 3);

      panel.innerHTML = `
        <div class="row-between" style="margin-bottom: var(--space-sm);">
          <span class="badge is-cyan">${escapeHtml(item.category)} • ${escapeHtml(item.module)}</span>
          <button type="button" class="btn btn-ghost" onclick="upvoteAssignment('${item.id}')">Helpful (+${item.upvotes})</button>
        </div>
        <h3 class="section-title" style="margin-bottom: var(--space-xs);">${escapeHtml(item.title)}</h3>
        <p class="mono-meta" style="margin-bottom: var(--space-md);">Posted by ${escapeHtml(item.author)} • ${escapeHtml(item.university)}</p>
        <p style="margin-bottom: var(--space-lg);">${escapeHtml(item.body)}</p>

        <div class="glass-panel-sub" style="margin-bottom: var(--space-md);">
          <div class="row-between" style="margin-bottom: var(--space-sm);">
            <span class="kicker">Shared Study Documents (${item.docs.length})</span>
          </div>
          <div class="stack-list" style="margin-bottom: var(--space-sm);">
            ${item.docs.length ? item.docs.map((d, docIdx) => `
              <div class="row-between" style="padding: var(--space-xs) 0; border-bottom: 1px solid var(--outline-variant);">
                <span><strong>${escapeHtml(d.name)}</strong> <span class="mono-meta">• ${escapeHtml(d.owner)}</span></span>
                <button type="button" class="btn btn-ghost" onclick="previewAssignmentDoc('${item.id}', ${docIdx})">Preview</button>
              </div>
            `).join(``) : `<span class="mono-meta">No documents shared yet. Add notes below.</span>`}
          </div>
          <div class="field">
            <label for="attach-doc-input">Share Document / Note Filename</label>
            <div class="row-wrap" style="flex-wrap: nowrap;">
              <input id="attach-doc-input" class="input" type="text" placeholder="e.g. Lab_Solution_Outline.pdf">
              <button type="button" class="btn btn-cyan" onclick="addDocToAssignment('${item.id}')">Share Doc</button>
            </div>
          </div>
        </div>

        <div class="glass-panel-sub" style="margin-bottom: var(--space-md);">
          <span class="kicker is-purple">Smart Peer Matching (${item.category})</span>
          <div class="stack-list" style="margin-top: var(--space-sm);">
            ${matchedPeers.map((peer, idx) => `
              <div class="row-between">
                <div>
                  <strong>${escapeHtml(peer.name)}</strong> <span class="badge">${peer.uni}</span>
                  <div class="mono-meta">${96 - idx * 4}% Module Match • ${escapeHtml(peer.skills)}</div>
                </div>
                <button type="button" class="btn btn-cyan" onclick="invitePeerTo3DRoom('${escapeHtml(peer.name)}')">Invite to 3D</button>
              </div>
            `).join(``)}
          </div>
        </div>

        <div>
          <span class="kicker">Discussion &amp; Replies (${item.comments.length})</span>
          <div class="stack-list" style="margin: var(--space-sm) 0 var(--space-md);">
            ${item.comments.length ? item.comments.map((c) => `
              <div class="chat-bubble">
                <div class="mono-meta">${escapeHtml(c.author)}</div>
                <div>${escapeHtml(c.text)}</div>
                ${(c.replies || []).map((r) => `<div class="mono-meta" style="margin-top: var(--space-xs); padding-left: var(--space-md); border-left: 2px solid var(--secondary);">${escapeHtml(r)}</div>`).join(``)}
              </div>
            `).join(``) : `<p class="muted-copy">Be the first Sri Lankan peer to reply with a hint or solution outline.</p>`}
          </div>
          <div class="field">
            <label for="reply-assign-input">Add Comment / Solution Tip</label>
            <div class="row-wrap" style="flex-wrap: nowrap;">
              <input id="reply-assign-input" class="input" type="text" placeholder="Write a helpful reply..." onkeydown="if(event.key==='Enter'){addCommentToAssignment('${item.id}');}">
              <button type="button" class="btn" onclick="addCommentToAssignment('${item.id}')">Post Reply</button>
            </div>
          </div>
        </div>
      `;
    }

    function previewAssignmentDoc(itemId, docIdx) {
      const item = appState.assignments.find((a) => a.id === itemId);
      if (!item || !item.docs[docIdx]) return;
      showFeedback(`Opened shared resource preview: ${item.docs[docIdx].name} (${item.docs[docIdx].owner})`);
    }

    function upvoteAssignment(id) {
      const item = appState.assignments.find((a) => a.id === id);
      if (!item) return;
      item.upvotes += 1;
      renderAssignments();
      persistState();
    }

    function addDocToAssignment(id) {
      const input = document.getElementById(`attach-doc-input`);
      const item = appState.assignments.find((a) => a.id === id);
      if (!input || !item) return;
      const filename = input.value.trim();
      if (!filename) return;
      item.docs.push({ name: filename, owner: `${appState.passport.name} (${appState.passport.university})` });
      input.value = ``;
      renderAssignments();
      persistState();
      showFeedback(`Shared document "${filename}" with ${item.module} peers.`);
    }

    function addCommentToAssignment(id) {
      const input = document.getElementById(`reply-assign-input`);
      const item = appState.assignments.find((a) => a.id === id);
      if (!input || !item) return;
      const text = input.value.trim();
      if (!text) return;
      item.comments.push({
        id: `c-${Date.now()}`,
        author: `${appState.passport.name} • ${appState.passport.university}`,
        text,
        replies: []
      });
      input.value = ``;
      renderAssignments();
      renderHomeSections();
      persistState();
    }

    function invitePeerTo3DRoom(peerName) {
      appState.meeting.chat.push({
        id: `m-${Date.now()}`,
        sender: `Campus System`,
        self: false,
        text: `${appState.passport.name} invited ${peerName} to join the 3D Virtual Meeting Room.`
      });
      switchView(`meeting`);
      renderMeetingChat();
      persistState();
      showFeedback(`Sent 3D Meeting Room invite to ${peerName}.`);
    }

    /* =====================================================================
       3. RESEARCH AND THESIS HUB
       ===================================================================== */
    function toggleResearchCreator() {
      const panel = document.getElementById(`research-creator-panel`);
      if (panel) panel.classList.toggle(`hidden-panel`);
    }

    function createResearchIdea() {
      const titleEl = document.getElementById(`new-res-title`);
      const fieldEl = document.getElementById(`new-res-field`);
      const intEl = document.getElementById(`new-res-interest`);
      const absEl = document.getElementById(`new-res-abstract`);
      const statusEl = document.getElementById(`new-res-status`);
      if (!titleEl || !fieldEl || !intEl || !absEl) return;

      const title = titleEl.value.trim();
      const abstract = absEl.value.trim();
      if (title.length < 6 || abstract.length < 15) {
        if (statusEl) statusEl.textContent = `Please provide a clear thesis title and brief abstract (15+ chars).`;
        return;
      }

      const item = {
        id: `res-${Date.now()}`,
        title,
        field: fieldEl.value,
        university: appState.passport.university,
        interest: intEl.value,
        lead: appState.passport.name,
        stage: `Proposal`,
        abstract,
        partnersRequested: false,
        discussions: []
      };

      appState.researchItems.unshift(item);
      appState.selectedResearchId = item.id;
      titleEl.value = ``;
      absEl.value = ``;
      if (statusEl) statusEl.textContent = ``;
      toggleResearchCreator();
      renderResearch();
      renderHomeSections();
      persistState();
      showFeedback(`Research proposal "${item.title}" published.`);
    }

    function renderResearch() {
      const searchEl = document.getElementById(`research-search`);
      const fieldEl = document.getElementById(`research-field-filter`);
      const uniEl = document.getElementById(`research-uni-filter`);
      const intEl = document.getElementById(`research-interest-filter`);

      const q = searchEl ? searchEl.value.trim().toLowerCase() : ``;
      const field = fieldEl ? fieldEl.value : `ALL`;
      const uni = uniEl ? uniEl.value : `ALL`;
      const interest = intEl ? intEl.value : `ALL`;

      const filtered = appState.researchItems.filter((r) => {
        const fOk = field === `ALL` || r.field === field;
        const uOk = uni === `ALL` || r.university === uni;
        const iOk = interest === `ALL` || r.interest === interest;
        const qOk = !q || r.title.toLowerCase().includes(q) || r.abstract.toLowerCase().includes(q);
        return fOk && uOk && iOk && qOk;
      });

      const grid = document.getElementById(`research-cards-grid`);
      if (grid) {
        if (filtered.length === 0) {
          grid.innerHTML = `<div class="glass-panel-sub"><p class="muted-copy">No research proposals match those filters. Reset a filter or share your own thesis idea.</p></div>`;
        } else {
          grid.innerHTML = filtered.map((r) => `
            <div class="item-card is-clickable ${appState.selectedResearchId === r.id ? `is-selected` : ``}" onclick="selectResearch('${r.id}')">
              <div class="row-between">
                <span class="badge">${escapeHtml(r.field)}</span>
                <span class="badge is-cyan">${escapeHtml(r.university)}</span>
              </div>
              <h3 class="card-title">${escapeHtml(r.title)}</h3>
              <p class="muted-copy">${escapeHtml(r.abstract)}</p>
              <div class="row-between mono-meta">
                <span>${escapeHtml(r.interest)}</span>
                <span>${r.stage} • ${r.discussions.length} notes</span>
              </div>
            </div>
          `).join(``);
        }
      }

      renderResearchDetail();
    }

    function selectResearch(id) {
      appState.selectedResearchId = id;
      renderResearch();
      persistState();
    }

    function renderResearchDetail() {
      const panel = document.getElementById(`research-detail-panel`);
      if (!panel) return;
      const item = appState.researchItems.find((r) => r.id === appState.selectedResearchId) || appState.researchItems[0];
      if (!item) return;

      panel.innerHTML = `
        <div class="row-between" style="margin-bottom: var(--space-sm);">
          <span class="badge is-cyan">${escapeHtml(item.university)} • ${escapeHtml(item.stage)}</span>
          <span class="badge is-warning">${escapeHtml(item.interest)}</span>
        </div>
        <h3 class="section-title" style="margin-bottom: var(--space-xs);">${escapeHtml(item.title)}</h3>
        <p class="mono-meta" style="margin-bottom: var(--space-md);">Lead Researcher: ${escapeHtml(item.lead)} • ${escapeHtml(item.field)}</p>
        <p style="margin-bottom: var(--space-lg);">${escapeHtml(item.abstract)}</p>

        <div class="row-wrap" style="margin-bottom: var(--space-lg);">
          <button type="button" class="btn ${item.partnersRequested ? `btn-cyan` : ``}" onclick="toggleResearchPartner('${item.id}')">
            ${item.partnersRequested ? `Partner Request Sent ✓` : `Offer Research Partnership`}
          </button>
          <button type="button" class="btn btn-ghost" onclick="openResearchIn3D('${item.id}')">
            Discuss in 3D Meeting Room
          </button>
        </div>

        <div>
          <span class="kicker">Methodology &amp; Literature Discussion (${item.discussions.length})</span>
          <div class="stack-list" style="margin: var(--space-sm) 0 var(--space-md);">
            ${item.discussions.length ? item.discussions.map((d) => `
              <div class="chat-bubble">
                <div class="mono-meta">${escapeHtml(d.author)}</div>
                <div>${escapeHtml(d.text)}</div>
              </div>
            `).join(``) : `<p class="muted-copy">No methodology notes yet. Share a dataset pointer or paper suggestion below.</p>`}
          </div>
          <div class="field">
            <label for="research-comment-input">Add Methodology / Paper Feedback</label>
            <div class="row-wrap" style="flex-wrap: nowrap;">
              <input id="research-comment-input" class="input" type="text" placeholder="Suggest a method, dataset, or supervisor tip..." onkeydown="if(event.key==='Enter'){addResearchComment('${item.id}');}">
              <button type="button" class="btn btn-cyan" onclick="addResearchComment('${item.id}')">Post</button>
            </div>
          </div>
        </div>
      `;
    }

    function toggleResearchPartner(id) {
      const item = appState.researchItems.find((r) => r.id === id);
      if (!item) return;
      item.partnersRequested = !item.partnersRequested;
      renderResearch();
      persistState();
      showFeedback(item.partnersRequested ? `Partner request sent to ${item.lead} (${item.university}).` : `Withdrew partner request.`);
    }

    function addResearchComment(id) {
      const input = document.getElementById(`research-comment-input`);
      const item = appState.researchItems.find((r) => r.id === id);
      if (!input || !item) return;
      const text = input.value.trim();
      if (!text) return;
      item.discussions.push({ author: `${appState.passport.name} • ${appState.passport.university}`, text });
      input.value = ``;
      renderResearch();
      persistState();
    }

    function openResearchIn3D(id) {
      const item = appState.researchItems.find((r) => r.id === id);
      if (!item) return;
      appState.meeting.roomCode = `RES-${item.university}`;
      appState.meeting.roomTitle = item.title;
      switchView(`meeting`);
      syncMeetingRoomHeader();
      updateDigitalScreenTexture();
      persistState();
    }

    /* =====================================================================
       4. 3D VIRTUAL MEETING ROOM HUD, CHAT, PARTICIPANTS, WHITEBOARD
       ===================================================================== */
    function toggleRoomSetupPanel() {
      const panel = document.getElementById(`room-setup-panel`);
      if (panel) panel.classList.toggle(`hidden-panel`);
    }

    function joinPresetRoom(code, navigateNow) {
      const titles = {
        'SL-ML-402': `Sinhala-Tamil NLP Capstone Sync`,
        'UOM-EE-209': `Hybrid Solar Microgrid Simulation`,
        'UOC-BUS-311': `Colombo FinTech Regulatory Review`
      };
      appState.meeting.roomCode = code;
      appState.meeting.roomTitle = titles[code] || `Sri Lankan University Study Room`;
      syncMeetingRoomHeader();
      updateDigitalScreenTexture();
      if (navigateNow) switchView(`meeting`);
      persistState();
      showFeedback(`Entered 3D Virtual Meeting Room: ${code}`);
    }

    function createCustomMeetingRoom() {
      const nameEl = document.getElementById(`setup-custom-room`);
      if (!nameEl) return;
      const title = nameEl.value.trim();
      if (!title) return;
      const code = `${appState.passport.university}-${Math.floor(100 + Math.random() * 899)}`;
      appState.meeting.roomCode = code;
      appState.meeting.roomTitle = title;
      nameEl.value = ``;
      toggleRoomSetupPanel();
      syncMeetingRoomHeader();
      updateDigitalScreenTexture();
      persistState();
      showFeedback(`Created and joined room ${code}: ${title}`);
    }

    function syncMeetingRoomHeader() {
      const badge = document.getElementById(`meeting-room-code-badge`);
      const title = document.getElementById(`meeting-room-title`);
      if (badge) badge.textContent = `Room: ${appState.meeting.roomCode}`;
      if (title) title.textContent = appState.meeting.roomTitle;
    }

    function switchMeetingSideTab(tab) {
      const chatP = document.getElementById(`meeting-chat-panel`);
      const partP = document.getElementById(`meeting-participants-panel`);
      const btnChat = document.getElementById(`tab-btn-chat`);
      const btnPart = document.getElementById(`tab-btn-participants`);
      if (!chatP || !partP || !btnChat || !btnPart) return;

      if (tab === `chat`) {
        chatP.style.display = `flex`;
        partP.style.display = `none`;
        btnChat.className = `btn btn-cyan`;
        btnPart.className = `btn btn-ghost`;
      } else {
        chatP.style.display = `none`;
        partP.style.display = `flex`;
        btnChat.className = `btn btn-ghost`;
        btnPart.className = `btn btn-cyan`;
      }
    }

    function renderMeetingChat() {
      const feed = document.getElementById(`meeting-chat-feed`);
      if (!feed) return;
      feed.innerHTML = appState.meeting.chat.map((m) => `
        <div class="chat-bubble ${m.self ? `is-self` : ``}">
          <div class="mono-meta">${escapeHtml(m.sender)}</div>
          <div>${escapeHtml(m.text)}</div>
        </div>
      `).join(``);
      feed.scrollTop = feed.scrollHeight;
    }

    function sendMeetingChat() {
      const input = document.getElementById(`meeting-chat-input`);
      if (!input) return;
      const text = input.value.trim();
      if (!text) return;
      appState.meeting.chat.push({
        id: `m-${Date.now()}`,
        sender: `${appState.passport.name} • ${appState.passport.university}`,
        self: true,
        text
      });
      input.value = ``;
      renderMeetingChat();
      triggerAvatarAction(`wave`);
      persistState();
    }

    function renderMeetingParticipants() {
      const list = document.getElementById(`meeting-participants-list`);
      const countEl = document.getElementById(`participant-count`);
      const peers = [
        { name: `${appState.passport.name} (You)`, uni: appState.passport.university, role: `Active Walker (WASD)`, mic: appState.meeting.micOn },
        { name: `Kavindi Perera`, uni: `UOC`, role: `Room Host`, mic: true },
        { name: `Tharindu Jayasinghe`, uni: `UOP`, role: `Presenter`, mic: true },
        { name: `Nethmi Silva`, uni: `SLIIT`, role: `Whiteboard Lead`, mic: false },
        { name: `Amaya Wickramasinghe`, uni: `USJP`, role: `Peer Reviewer`, mic: true }
      ];
      if (countEl) countEl.textContent = `${peers.length}`;
      if (list) {
        list.innerHTML = peers.map((p) => `
          <div class="item-card">
            <div class="row-between">
              <strong>${escapeHtml(p.name)}</strong>
              <span class="badge is-cyan">${p.uni}</span>
            </div>
            <div class="row-between mono-meta">
              <span>${p.role}</span>
              <span>${p.mic ? `Mic On` : `Muted`}</span>
            </div>
          </div>
        `).join(``);
      }
    }

    function toggleMediaState(kind) {
      if (kind === `mic`) {
        appState.meeting.micOn = !appState.meeting.micOn;
        const btn = document.getElementById(`btn-mic-toggle`);
        if (btn) {
          btn.textContent = appState.meeting.micOn ? `Mic: On` : `Mic: Muted`;
          btn.className = appState.meeting.micOn ? `btn btn-cyan` : `btn btn-ghost`;
        }
        renderMeetingParticipants();
      } else if (kind === `cam`) {
        appState.meeting.camOn = !appState.meeting.camOn;
        const btn = document.getElementById(`btn-cam-toggle`);
        if (btn) {
          btn.textContent = appState.meeting.camOn ? `Cam: On` : `Cam: Off`;
          btn.className = appState.meeting.camOn ? `btn btn-cyan` : `btn btn-ghost`;
        }
      }
      persistState();
    }

    function cycleDigitalScreenSlide() {
      appState.meeting.slideIndex = (appState.meeting.slideIndex + 1) % DIGITAL_SLIDES.length;
      updateDigitalScreenTexture();
      persistState();
    }

    function toggleWhiteboardPanel() {
      const panel = document.getElementById(`whiteboard-drawer`);
      if (panel) panel.classList.toggle(`is-open`);
    }

    function exitMeetingRoom() {
      switchView(`home`);
      showFeedback(`Exited 3D Virtual Meeting Room (${appState.meeting.roomCode}) and returned to Campus Quad.`);
    }

    /* Whiteboard 2D -> 3D Wall Live Sync */
    let wbColor = `#22f3ff`;
    let wbDrawing = false;
    let wbCurrentStroke = null;

    function setWhiteboardColor(choice) {
      if (choice === `cyan`) wbColor = `#22f3ff`;
      else if (choice === `purple`) wbColor = `#c084fc`;
      else wbColor = `#eef2ff`;
    }

    function initWhiteboardEvents() {
      const canvas = document.getElementById(`whiteboard-canvas`);
      if (!canvas) return;
      const getPos = (e) => {
        const rect = canvas.getBoundingClientRect();
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;
        return [
          ((clientX - rect.left) / rect.width) * canvas.width,
          ((clientY - rect.top) / rect.height) * canvas.height
        ];
      };

      const startDraw = (e) => {
        e.preventDefault();
        wbDrawing = true;
        wbCurrentStroke = { color: wbColor, width: 3, points: [getPos(e)] };
      };
      const moveDraw = (e) => {
        if (!wbDrawing || !wbCurrentStroke) return;
        e.preventDefault();
        wbCurrentStroke.points.push(getPos(e));
        drawStrokeOnCanvas(canvas.getContext(`2d`), wbCurrentStroke);
        syncWhiteboardTo3DWall();
      };
      const endDraw = () => {
        if (!wbDrawing || !wbCurrentStroke) return;
        wbDrawing = false;
        appState.meeting.whiteboardStrokes.push(wbCurrentStroke);
        if (appState.meeting.whiteboardStrokes.length > 60) {
          appState.meeting.whiteboardStrokes.shift();
        }
        wbCurrentStroke = null;
        syncWhiteboardTo3DWall();
        persistState();
      };

      canvas.addEventListener(`mousedown`, startDraw);
      canvas.addEventListener(`mousemove`, moveDraw);
      window.addEventListener(`mouseup`, endDraw);
      canvas.addEventListener(`touchstart`, startDraw, { passive: false });
      canvas.addEventListener(`touchmove`, moveDraw, { passive: false });
      window.addEventListener(`touchend`, endDraw);
    }

    function drawStrokeOnCanvas(ctx, stroke) {
      if (!ctx || !stroke || stroke.points.length < 1) return;
      ctx.strokeStyle = stroke.color;
      ctx.lineWidth = stroke.width || 3;
      ctx.lineCap = `round`;
      ctx.lineJoin = `round`;
      ctx.beginPath();
      ctx.moveTo(stroke.points[0][0], stroke.points[0][1]);
      for (let i = 1; i < stroke.points.length; i++) {
        ctx.lineTo(stroke.points[i][0], stroke.points[i][1]);
      }
      ctx.stroke();
    }

    function redrawWhiteboardFromState() {
      const canvas = document.getElementById(`whiteboard-canvas`);
      if (!canvas) return;
      const ctx = canvas.getContext(`2d`);
      if (!ctx) return;
      ctx.fillStyle = `#0e1022`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = `rgba(192, 132, 252, 0.14)`;
      ctx.lineWidth = 1;
      for (let x = 0; x < canvas.width; x += 45) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, canvas.height); ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += 45) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(canvas.width, y); ctx.stroke();
      }
      ctx.fillStyle = `#b4bad8`;
      ctx.font = `14px "Space Mono", monospace`;
      ctx.fillText(`VIRTUAL WHITEBOARD // LIVE 3D SYNC`, 22, 30);

      (appState.meeting.whiteboardStrokes || []).forEach((s) => drawStrokeOnCanvas(ctx, s));
      syncWhiteboardTo3DWall();
    }

    function stampWhiteboardDiagram() {
      appState.meeting.whiteboardStrokes.push(
        { color: `#22f3ff`, width: 3, points: [[150, 210], [450, 210], [750, 210]] },
        { color: `#c084fc`, width: 3, points: [[300, 195], [300, 225]] },
        { color: `#c084fc`, width: 3, points: [[600, 195], [600, 225]] }
      );
      redrawWhiteboardFromState();
      persistState();
    }

    function clearWhiteboard() {
      appState.meeting.whiteboardStrokes = [];
      redrawWhiteboardFromState();
      persistState();
    }

    /* =====================================================================
       5. PROJECT COLLABORATION LAB & COMMUNITY
       ===================================================================== */
    function toggleProjectCreator() {
      const panel = document.getElementById(`project-creator-panel`);
      if (panel) panel.classList.toggle(`hidden-panel`);
    }

    function createGroupProject() {
      const titleEl = document.getElementById(`new-proj-title`);
      const trackEl = document.getElementById(`new-proj-track`);
      const rolesEl = document.getElementById(`new-proj-roles`);
      const descEl = document.getElementById(`new-proj-desc`);
      const statusEl = document.getElementById(`new-proj-status`);
      if (!titleEl || !descEl) return;

      const title = titleEl.value.trim();
      const desc = descEl.value.trim();
      if (title.length < 4 || desc.length < 10) {
        if (statusEl) statusEl.textContent = `Enter a project name and vision statement (10+ chars).`;
        return;
      }

      appState.projects.unshift({
        id: `proj-${Date.now()}`,
        title,
        track: trackEl && trackEl.value.trim() ? trackEl.value.trim() : `Inter-Uni Squad`,
        rolesNeeded: rolesEl && rolesEl.value.trim() ? rolesEl.value.trim() : `Open Contributors`,
        progress: 15,
        members: [`${appState.passport.name} (${appState.passport.university})`],
        joined: true,
        desc
      });

      titleEl.value = ``;
      if (trackEl) trackEl.value = ``;
      if (rolesEl) rolesEl.value = ``;
      descEl.value = ``;
      if (statusEl) statusEl.textContent = ``;
      toggleProjectCreator();
      renderLabProjects();
      persistState();
      showFeedback(`Group project "${title}" launched in Collaboration Lab.`);
    }

    function renderLabProjects() {
      const grid = document.getElementById(`lab-projects-grid`);
      if (!grid) return;
      grid.innerHTML = appState.projects.map((p) => `
        <div class="card-wrapper">
          <div class="item-card project-card-inner">
            <div>
              <div class="row-between" style="margin-bottom: var(--space-xs);">
                <span class="badge is-cyan">${escapeHtml(p.track)}</span>
                <span class="mono-meta">${p.progress}% Milestone</span>
              </div>
              <h4 class="card-title" style="margin-bottom: var(--space-xs);">${escapeHtml(p.title)}</h4>
              <p class="muted-copy" style="margin-bottom: var(--space-sm);">${escapeHtml(p.desc)}</p>
              <div class="uni-bar-track" style="margin-bottom: var(--space-sm);">
                <div class="uni-bar-fill" style="width: ${p.progress}%;"></div>
              </div>
              <div class="mono-meta">Team: ${p.members.map(escapeHtml).join(`, `)}</div>
            </div>
            <div style="display: flex; flex-direction: column; justify-content: space-between; gap: var(--space-sm);">
              <div class="glass-panel-sub">
                <span class="mono-meta">Roles Needed</span>
                <div><strong>${escapeHtml(p.rolesNeeded)}</strong></div>
              </div>
              <div class="row-wrap">
                <button type="button" class="btn ${p.joined ? `btn-cyan` : ``}" style="flex: 1;" onclick="toggleJoinProject('${p.id}')">
                  ${p.joined ? `Joined Squad ✓` : `Join Project`}
                </button>
                <button type="button" class="btn btn-ghost" onclick="launchProjectMeeting('${p.id}')">
                  3D Room
                </button>
              </div>
            </div>
          </div>
        </div>
      `).join(``);
    }

    function toggleJoinProject(id) {
      const proj = appState.projects.find((p) => p.id === id);
      if (!proj) return;
      const tag = `${appState.passport.name} (${appState.passport.university})`;
      proj.joined = !proj.joined;
      if (proj.joined && !proj.members.includes(tag)) proj.members.push(tag);
      else if (!proj.joined) proj.members = proj.members.filter((m) => m !== tag);
      renderLabProjects();
      persistState();
    }

    function launchProjectMeeting(projectId) {
      const proj = appState.projects.find((p) => p.id === projectId);
      const title = proj ? proj.title : `Collaboration Sprint`;
      appState.meeting.roomCode = `LAB-${Math.floor(100 + Math.random() * 899)}`;
      appState.meeting.roomTitle = `${title} — Sprint Standup`;
      switchView(`meeting`);
      syncMeetingRoomHeader();
      updateDigitalScreenTexture();
      persistState();
    }

    function renderCommunityMembers() {
      const searchEl = document.getElementById(`member-search`);
      const uniEl = document.getElementById(`member-uni-filter`);
      const q = searchEl ? searchEl.value.trim().toLowerCase() : ``;
      const uni = uniEl ? uniEl.value : `ALL`;

      const filtered = PEER_DIRECTORY.filter((m) => {
        const uOk = uni === `ALL` || m.uni === uni;
        const qOk = !q || m.name.toLowerCase().includes(q) || m.skills.toLowerCase().includes(q) || m.stream.toLowerCase().includes(q);
        return uOk && qOk;
      });

      const list = document.getElementById(`community-members-list`);
      if (!list) return;
      list.innerHTML = filtered.map((m) => {
        const connected = appState.connectedPeers.includes(m.id);
        return `
          <div class="item-card">
            <div class="row-between">
              <div>
                <strong>${escapeHtml(m.name)}</strong> <span class="badge">${m.uni}</span>
              </div>
              <span class="badge is-positive">${escapeHtml(m.status)}</span>
            </div>
            <div class="mono-meta">${escapeHtml(m.stream)} • Skills: ${escapeHtml(m.skills)}</div>
            <div class="row-wrap">
              <button type="button" class="btn ${connected ? `btn-cyan` : `btn-ghost`}" onclick="toggleConnectPeer('${m.id}')">
                ${connected ? `Connected ✓` : `Connect Peer`}
              </button>
              <button type="button" class="btn btn-ghost" onclick="invitePeerTo3DRoom('${escapeHtml(m.name)}')">Invite to 3D Room</button>
            </div>
          </div>
        `;
      }).join(``);
    }

    function toggleConnectPeer(id) {
      const idx = appState.connectedPeers.indexOf(id);
      if (idx >= 0) appState.connectedPeers.splice(idx, 1);
      else appState.connectedPeers.push(id);
      renderCommunityMembers();
      persistState();
    }

    function renderSharedIdeas() {
      const list = document.getElementById(`shared-ideas-list`);
      if (!list) return;
      list.innerHTML = appState.ideas.map((idea) => `
        <div class="item-card">
          <div class="row-between">
            <span class="badge is-cyan">${escapeHtml(idea.tag)}</span>
            <span class="mono-meta">${escapeHtml(idea.author)}</span>
          </div>
          <strong>${escapeHtml(idea.title)}</strong>
          <div class="row-between">
            <button type="button" class="btn btn-ghost" onclick="sparkIdea('${idea.id}')">Spark (+${idea.sparks})</button>
            <button type="button" class="btn btn-cyan" onclick="promoteIdeaToProject('${idea.id}')">Promote to Project</button>
          </div>
        </div>
      `).join(``);
    }

    function addSharedIdea() {
      const titleEl = document.getElementById(`new-idea-title`);
      const tagEl = document.getElementById(`new-idea-tag`);
      if (!titleEl || !tagEl) return;
      const title = titleEl.value.trim();
      if (!title) return;
      appState.ideas.unshift({
        id: `idea-${Date.now()}`,
        title,
        tag: tagEl.value,
        author: `${appState.passport.name} (${appState.passport.university})`,
        sparks: 1
      });
      titleEl.value = ``;
      renderSharedIdeas();
      persistState();
    }

    function sparkIdea(id) {
      const idea = appState.ideas.find((i) => i.id === id);
      if (!idea) return;
      idea.sparks += 1;
      renderSharedIdeas();
      persistState();
    }

    function promoteIdeaToProject(id) {
      const idea = appState.ideas.find((i) => i.id === id);
      if (!idea) return;
      appState.projects.unshift({
        id: `proj-${Date.now()}`,
        title: idea.title,
        track: idea.tag,
        rolesNeeded: `Multi-Faculty Co-Founders`,
        progress: 10,
        members: [`${appState.passport.name} (${appState.passport.university})`],
        joined: true,
        desc: `Promoted from Shared Idea Space (${idea.author}).`
      });
      renderLabProjects();
      persistState();
      showFeedback(`Promoted "${idea.title}" into an active Group Project!`);
    }

    /* =====================================================================
       THREE.JS 3D SCENE 1: VIRTUAL UNIVERSITY CAMPUS
       ===================================================================== */
    let campusScene, campusCamera, campusRenderer;
    let campusOrbitAngle = 0.65;
    let campusOrbitPitch = 0.42;
    let campusOrbitDist = 18;
    let campusTarget = new THREE.Vector3(0, 1.2, 0);
    let campusGoalTarget = new THREE.Vector3(0, 1.2, 0);
    let campusDragging = false;
    let campusPrevMouse = { x: 0, y: 0 };
    let campusNodes = [];
    let campusStudents = [];
    let focusedCampusZone = `meeting`;

    const CAMPUS_ZONE_META = {
      assignments: { title: `Assignment Hub`, desc: `7 Subject Categories • Peer Matching & Docs`, pos: [-5.5, 0, -3.5], color: 0x22f3ff, view: `assignments` },
      research: { title: `Research Library`, desc: `412 Thesis Ideas • Filter by University & Field`, pos: [5.5, 0, -3.5], color: 0xc084fc, view: `research` },
      meeting: { title: `Virtual Meeting Center`, desc: `38 Active 3D Rooms • WASD Avatar Simulation`, pos: [0, 0, 0], color: 0x22f3ff, view: `meeting` },
      lounge: { title: `Student Lounge`, desc: `Community Discovery • Shared Idea Space`, pos: [-5.2, 0, 4.6], color: 0xa855f7, view: `lab` },
      lab: { title: `Project Collaboration Lab`, desc: `Inter-University Squads & Hackathons`, pos: [5.2, 0, 4.6], color: 0x34d399, view: `lab` }
    };

    function initCampus3D() {
      const canvas = document.getElementById(`campus-3d-stage`);
      if (!canvas || typeof THREE === `undefined`) return;

      campusScene = new THREE.Scene();
      campusScene.background = new THREE.Color(0x070712);
      campusScene.fog = new THREE.FogExp2(0x070712, 0.028);

      const w = canvas.clientWidth || 720;
      const h = canvas.clientHeight || 460;
      campusCamera = new THREE.PerspectiveCamera(48, w / h, 0.1, 120);

      campusRenderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: `high-performance` });
      campusRenderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      campusRenderer.setSize(w, h, false);

      // Lighting
      campusScene.add(new THREE.AmbientLight(0xb4bad8, 0.75));
      const pLight = new THREE.PointLight(0xc084fc, 3.2, 40);
      pLight.position.set(-6, 9, 4);
      campusScene.add(pLight);
      const cLight = new THREE.PointLight(0x22f3ff, 3.2, 40);
      cLight.position.set(6, 9, -4);
      campusScene.add(cLight);

      // Futuristic Campus Ground Grid & Rings
      const grid = new THREE.GridHelper(32, 32, 0x22f3ff, 0x26244a);
      campusScene.add(grid);

      const ringGeo = new THREE.RingGeometry(6.8, 7.05, 64);
      const ringMat = new THREE.MeshBasicMaterial({ color: 0xc084fc, side: THREE.DoubleSide, transparent: true, opacity: 0.5 });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.rotation.x = -Math.PI / 2;
      ring.position.y = 0.03;
      campusScene.add(ring);

      // 5 Interactive Campus Pavilions
      campusNodes = [];
      Object.keys(CAMPUS_ZONE_META).forEach((key) => {
        const meta = CAMPUS_ZONE_META[key];
        const group = new THREE.Group();
        group.position.set(meta.pos[0], 0, meta.pos[2]);
        group.userData = { zoneKey: key };

        // Base plinth
        const plinth = new THREE.Mesh(
          new THREE.CylinderGeometry(1.75, 2.0, 0.35, 6),
          new THREE.MeshStandardMaterial({ color: 0x151833, metalness: 0.6, roughness: 0.3 })
        );
        plinth.position.y = 0.18;
        plinth.userData = { zoneKey: key };
        group.add(plinth);

        // Glowing pavilion structure
        const bodyGeo = key === `meeting`
          ? new THREE.OctahedronGeometry(1.15, 0)
          : new THREE.BoxGeometry(1.7, key === `research` ? 2.6 : 1.9, 1.7);
        const bodyMat = new THREE.MeshStandardMaterial({
          color: 0x1e2248,
          emissive: meta.color,
          emissiveIntensity: 0.32,
          transparent: true,
          opacity: 0.9,
          metalness: 0.4,
          roughness: 0.25
        });
        const building = new THREE.Mesh(bodyGeo, bodyMat);
        building.position.y = key === `meeting` ? 1.85 : 1.3;
        building.userData = { zoneKey: key };
        group.add(building);

        // Wireframe halo
        const halo = new THREE.Mesh(
          new THREE.TorusGeometry(1.35, 0.04, 12, 48),
          new THREE.MeshBasicMaterial({ color: meta.color })
        );
        halo.rotation.x = Math.PI / 2;
        halo.position.y = 2.9;
        group.add(halo);

        // Floating sprite label
        const label = createTextSprite(meta.title, meta.color === 0x22f3ff ? `#22f3ff` : `#c084fc`);
        label.position.set(0, 3.85, 0);
        group.add(label);

        campusScene.add(group);
        campusNodes.push({ key, group, building, halo });
      });

      // Animated 3D student elements patrolling campus paths
      campusStudents = [];
      for (let i = 0; i < 6; i++) {
        const av = createStudentAvatarMesh(i % 2 === 0 ? 0x22f3ff : 0xc084fc, `Peer`);
        av.mesh.scale.setScalar(0.55);
        campusScene.add(av.mesh);
        campusStudents.push({
          ...av,
          angle: (i / 6) * Math.PI * 2,
          radius: 3.4 + (i % 3) * 1.4,
          speed: 0.28 + (i % 2) * 0.14
        });
      }

      // Mouse Orbit & Click Raycasting
      const raycaster = new THREE.Raycaster();
      const mouse = new THREE.Vector2();
      let downPos = { x: 0, y: 0 };

      canvas.addEventListener(`mousedown`, (e) => {
        campusDragging = true;
        campusPrevMouse = { x: e.clientX, y: e.clientY };
        downPos = { x: e.clientX, y: e.clientY };
      });
      window.addEventListener(`mousemove`, (e) => {
        if (!campusDragging) return;
        const dx = e.clientX - campusPrevMouse.x;
        const dy = e.clientY - campusPrevMouse.y;
        campusPrevMouse = { x: e.clientX, y: e.clientY };
        campusOrbitAngle -= dx * 0.008;
        campusOrbitPitch = Math.max(0.18, Math.min(1.15, campusOrbitPitch + dy * 0.006));
      });
      window.addEventListener(`mouseup`, (e) => {
        if (!campusDragging) return;
        campusDragging = false;
        const distMoved = Math.hypot(e.clientX - downPos.x, e.clientY - downPos.y);
        if (distMoved < 6 && e.target === canvas) {
          const rect = canvas.getBoundingClientRect();
          mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
          mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
          raycaster.setFromCamera(mouse, campusCamera);
          const hits = raycaster.intersectObjects(campusNodes.map((n) => n.group), true);
          if (hits.length > 0 && hits[0].object.userData && hits[0].object.userData.zoneKey) {
            focusCampusLocation(hits[0].object.userData.zoneKey, false);
          }
        }
      });
      canvas.addEventListener(`wheel`, (e) => {
        e.preventDefault();
        campusOrbitDist = Math.max(9, Math.min(26, campusOrbitDist + e.deltaY * 0.01));
      }, { passive: false });
    }

    function focusCampusLocation(zoneKey, enterIfSame) {
      const meta = CAMPUS_ZONE_META[zoneKey];
      if (!meta) return;
      const alreadyFocused = focusedCampusZone === zoneKey;
      focusedCampusZone = zoneKey;
      campusGoalTarget.set(meta.pos[0], 1.4, meta.pos[2]);

      const kEl = document.getElementById(`campus-focus-kicker`);
      const tEl = document.getElementById(`campus-focus-title`);
      const dEl = document.getElementById(`campus-focus-desc`);
      if (kEl) kEl.textContent = `Focused Zone`;
      if (tEl) tEl.textContent = meta.title;
      if (dEl) dEl.textContent = meta.desc;

      Object.keys(CAMPUS_ZONE_META).forEach((k) => {
        const b = document.getElementById(`loc-btn-${k}`);
        if (b) b.classList.toggle(`is-focused`, k === zoneKey);
      });

      if (enterIfSame && alreadyFocused) {
        switchView(meta.view);
      }
    }

    function enterSelectedCampusLocation() {
      const meta = CAMPUS_ZONE_META[focusedCampusZone];
      if (meta) switchView(meta.view);
    }

    function resetCampusCamera() {
      campusOrbitAngle = 0.65;
      campusOrbitPitch = 0.42;
      campusOrbitDist = 18;
      campusGoalTarget.set(0, 1.2, 0);
    }

    function resizeCampusRenderer() {
      const canvas = document.getElementById(`campus-3d-stage`);
      if (!canvas || !campusRenderer || !campusCamera) return;
      const w = canvas.clientWidth || 720;
      const h = canvas.clientHeight || 460;
      campusCamera.aspect = w / h;
      campusCamera.updateProjectionMatrix();
      campusRenderer.setSize(w, h, false);
    }

    /* =====================================================================
       THREE.JS 3D SCENE 2: IMMERSIVE 3D VIRTUAL MEETING ROOM (WASD)
       ===================================================================== */
    let meetingScene, meetingCamera, meetingRenderer;
    let selfAvatar = null;
    let peerAvatars = [];
    let meetingHolocore = null;
    let digitalScreenMesh = null;
    let digitalScreenCanvas = null;
    let digitalScreenTexture = null;
    let whiteboard3DMesh = null;
    let whiteboard3DTexture = null;

    let meetingCamMode = `follow`;
    let meetingOrbitYaw = 0;
    let meetingOrbitPitch = 0.35;
    let meetingOrbitDragging = false;
    let meetingPrevMouse = { x: 0, y: 0 };

    const moveKeys = { w: false, a: false, s: false, d: false };
    let avatarPos = new THREE.Vector3(0, 0, 5.2);
    let avatarYaw = Math.PI;
    let avatarSeated = false;
    let avatarActionTimer = 0;
    let avatarActionType = `idle`;

    function initMeeting3D() {
      const canvas = document.getElementById(`meeting-3d-stage`);
      if (!canvas || typeof THREE === `undefined`) return;

      meetingScene = new THREE.Scene();
      meetingScene.background = new THREE.Color(0x060713);
      meetingScene.fog = new THREE.FogExp2(0x060713, 0.022);

      const w = canvas.clientWidth || 840;
      const h = canvas.clientHeight || 580;
      meetingCamera = new THREE.PerspectiveCamera(54, w / h, 0.1, 100);

      meetingRenderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: `high-performance` });
      meetingRenderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      meetingRenderer.setSize(w, h, false);

      // Room Lights
      meetingScene.add(new THREE.AmbientLight(0xc2c8eb, 0.78));
      const keyPurple = new THREE.PointLight(0xc084fc, 3.6, 35);
      keyPurple.position.set(-7, 6.5, 4);
      meetingScene.add(keyPurple);
      const keyCyan = new THREE.PointLight(0x22f3ff, 3.6, 35);
      keyCyan.position.set(7, 6.5, -4);
      meetingScene.add(keyCyan);

      // Futuristic Floor & Neon Grid
      const floor = new THREE.Mesh(
        new THREE.CircleGeometry(14, 48),
        new THREE.MeshStandardMaterial({ color: 0x0b0d1f, metalness: 0.7, roughness: 0.28 })
      );
      floor.rotation.x = -Math.PI / 2;
      meetingScene.add(floor);

      const grid = new THREE.GridHelper(24, 24, 0x22f3ff, 0x26244c);
      grid.position.y = 0.02;
      meetingScene.add(grid);

      // Glass Pillars & Overhead Neon Ring
      for (let i = 0; i < 8; i++) {
        const ang = (i / 8) * Math.PI * 2;
        const pillar = new THREE.Mesh(
          new THREE.BoxGeometry(0.35, 6.5, 0.35),
          new THREE.MeshStandardMaterial({
            color: 0x1d2248,
            emissive: i % 2 === 0 ? 0x22f3ff : 0xc084fc,
            emissiveIntensity: 0.45,
            transparent: true,
            opacity: 0.78
          })
        );
        pillar.position.set(Math.cos(ang) * 11.2, 3.25, Math.sin(ang) * 11.2);
        meetingScene.add(pillar);
      }

      const haloRing = new THREE.Mesh(
        new THREE.TorusGeometry(6.2, 0.08, 14, 64),
        new THREE.MeshBasicMaterial({ color: 0xc084fc })
      );
      haloRing.rotation.x = Math.PI / 2;
      haloRing.position.y = 5.8;
      meetingScene.add(haloRing);

      // Interactive Central Meeting Table
      const tableBase = new THREE.Mesh(
        new THREE.CylinderGeometry(1.1, 1.5, 0.75, 24),
        new THREE.MeshStandardMaterial({ color: 0x161a36, metalness: 0.65, roughness: 0.25 })
      );
      tableBase.position.y = 0.38;
      meetingScene.add(tableBase);

      const tableTop = new THREE.Mesh(
        new THREE.CylinderGeometry(3.2, 3.2, 0.14, 36),
        new THREE.MeshStandardMaterial({
          color: 0x1e264d,
          emissive: 0x22f3ff,
          emissiveIntensity: 0.18,
          transparent: true,
          opacity: 0.85,
          metalness: 0.5,
          roughness: 0.15
        })
      );
      tableTop.position.y = 0.82;
      meetingScene.add(tableTop);

      const tableRim = new THREE.Mesh(
        new THREE.TorusGeometry(3.22, 0.05, 12, 64),
        new THREE.MeshBasicMaterial({ color: 0x22f3ff })
      );
      tableRim.rotation.x = Math.PI / 2;
      tableRim.position.y = 0.84;
      meetingScene.add(tableRim);

      // Holographic Knowledge Core above Table
      meetingHolocore = new THREE.Mesh(
        new THREE.IcosahedronGeometry(0.62, 0),
        new THREE.MeshStandardMaterial({
          color: 0x22f3ff,
          emissive: 0xc084fc,
          emissiveIntensity: 0.75,
          wireframe: true
        })
      );
      meetingHolocore.position.set(0, 1.75, 0);
      meetingScene.add(meetingHolocore);

      // Holographic Chairs around the table
      for (let i = 0; i < 6; i++) {
        const ang = (i / 6) * Math.PI * 2;
        const chair = new THREE.Mesh(
          new THREE.BoxGeometry(0.7, 0.55, 0.65),
          new THREE.MeshStandardMaterial({ color: 0x191d3a, emissive: 0x7c3aed, emissiveIntensity: 0.2 })
        );
        chair.position.set(Math.cos(ang) * 4.0, 0.35, Math.sin(ang) * 4.0);
        chair.lookAt(0, 0.35, 0);
        meetingScene.add(chair);
      }

      // Digital Presentation Screen (Back-Left Wall)
      digitalScreenCanvas = document.createElement(`canvas`);
      digitalScreenCanvas.width = 1024;
      digitalScreenCanvas.height = 512;
      digitalScreenTexture = new THREE.CanvasTexture(digitalScreenCanvas);
      digitalScreenMesh = new THREE.Mesh(
        new THREE.PlaneGeometry(6.8, 3.4),
        new THREE.MeshBasicMaterial({ map: digitalScreenTexture })
      );
      digitalScreenMesh.position.set(-4.6, 2.7, -8.2);
      digitalScreenMesh.rotation.y = 0.28;
      meetingScene.add(digitalScreenMesh);

      // Frame around Digital Screen
      const screenFrame = new THREE.Mesh(
        new THREE.BoxGeometry(7.05, 3.65, 0.12),
        new THREE.MeshStandardMaterial({ color: 0x161936, emissive: 0x22f3ff, emissiveIntensity: 0.28 })
      );
      screenFrame.position.set(-4.62, 2.7, -8.28);
      screenFrame.rotation.y = 0.28;
      meetingScene.add(screenFrame);

      // Virtual Whiteboard Wall (Back-Right Wall, synced live from 2D Whiteboard Canvas)
      const wbCanvasEl = document.getElementById(`whiteboard-canvas`);
      if (wbCanvasEl) {
        whiteboard3DTexture = new THREE.CanvasTexture(wbCanvasEl);
        whiteboard3DMesh = new THREE.Mesh(
          new THREE.PlaneGeometry(6.8, 3.2),
          new THREE.MeshBasicMaterial({ map: whiteboard3DTexture })
        );
        whiteboard3DMesh.position.set(4.6, 2.7, -8.2);
        whiteboard3DMesh.rotation.y = -0.28;
        meetingScene.add(whiteboard3DMesh);

        const wbFrame = new THREE.Mesh(
          new THREE.BoxGeometry(7.05, 3.45, 0.12),
          new THREE.MeshStandardMaterial({ color: 0x161936, emissive: 0xc084fc, emissiveIntensity: 0.28 })
        );
        wbFrame.position.set(4.62, 2.7, -8.28);
        wbFrame.rotation.y = -0.28;
        meetingScene.add(wbFrame);
      }

      // Self Controllable Student Avatar
      selfAvatar = createStudentAvatarMesh(getAuraHex(appState.passport.avatarColor), `${appState.passport.name} (${appState.passport.university})`);
      selfAvatar.mesh.position.copy(avatarPos);
      selfAvatar.mesh.rotation.y = avatarYaw;
      meetingScene.add(selfAvatar.mesh);

      // 4 Peer Student Avatars seated/standing around the meeting table
      const peerConfigs = [
        { name: `Kavindi • UOC`, color: 0xc084fc, angle: 0.4 },
        { name: `Tharindu • UOP`, color: 0x22f3ff, angle: 1.7 },
        { name: `Nethmi • SLIIT`, color: 0x34d399, angle: 3.1 },
        { name: `Amaya • USJP`, color: 0xfde047, angle: 4.5 }
      ];
      peerAvatars = peerConfigs.map((cfg) => {
        const av = createStudentAvatarMesh(cfg.color, cfg.name);
        av.mesh.position.set(Math.cos(cfg.angle) * 4.0, 0, Math.sin(cfg.angle) * 4.0);
        av.mesh.lookAt(0, 0, 0);
        meetingScene.add(av.mesh);
        return { ...av, phase: cfg.angle };
      });

      // Mouse drag orbit in Meeting Room
      canvas.addEventListener(`mousedown`, (e) => {
        meetingOrbitDragging = true;
        meetingPrevMouse = { x: e.clientX, y: e.clientY };
      });
      window.addEventListener(`mousemove`, (e) => {
        if (!meetingOrbitDragging) return;
        const dx = e.clientX - meetingPrevMouse.x;
        const dy = e.clientY - meetingPrevMouse.y;
        meetingPrevMouse = { x: e.clientX, y: e.clientY };
        meetingOrbitYaw -= dx * 0.007;
        meetingOrbitPitch = Math.max(0.12, Math.min(0.95, meetingOrbitPitch + dy * 0.005));
      });
      window.addEventListener(`mouseup`, () => { meetingOrbitDragging = false; });

      updateDigitalScreenTexture();
      redrawWhiteboardFromState();
    }

    function createStudentAvatarMesh(accentHex, labelText) {
      const group = new THREE.Group();

      // Legs
      const legMat = new THREE.MeshStandardMaterial({ color: 0x1d2342, roughness: 0.5 });
      const leftLeg = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.72, 0.22), legMat);
      leftLeg.position.set(-0.16, 0.36, 0);
      const rightLeg = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.72, 0.22), legMat);
      rightLeg.position.set(0.16, 0.36, 0);
      group.add(leftLeg, rightLeg);

      // Torso
      const torso = new THREE.Mesh(
        new THREE.BoxGeometry(0.62, 0.78, 0.36),
        new THREE.MeshStandardMaterial({ color: 0x252b54, emissive: accentHex, emissiveIntensity: 0.22 })
      );
      torso.position.y = 1.12;
      group.add(torso);

      // Arms (pivoted around shoulder)
      const armMat = new THREE.MeshStandardMaterial({ color: 0x2c3466, emissive: accentHex, emissiveIntensity: 0.16 });
      const leftArm = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.68, 0.18), armMat);
      leftArm.position.set(-0.44, 1.12, 0);
      const rightArm = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.68, 0.18), armMat);
      rightArm.position.set(0.44, 1.12, 0);
      group.add(leftArm, rightArm);

      // Head + Glowing Visor
      const head = new THREE.Mesh(
        new THREE.SphereGeometry(0.27, 20, 20),
        new THREE.MeshStandardMaterial({ color: 0xdbe3ff, roughness: 0.35 })
      );
      head.position.y = 1.78;
      group.add(head);

      const visor = new THREE.Mesh(
        new THREE.BoxGeometry(0.38, 0.12, 0.2),
        new THREE.MeshBasicMaterial({ color: accentHex })
      );
      visor.position.set(0, 1.79, 0.2);
      group.add(visor);

      // Ground Ring
      const baseRing = new THREE.Mesh(
        new THREE.RingGeometry(0.38, 0.48, 24),
        new THREE.MeshBasicMaterial({ color: accentHex, side: THREE.DoubleSide, transparent: true, opacity: 0.7 })
      );
      baseRing.rotation.x = -Math.PI / 2;
      baseRing.position.y = 0.03;
      group.add(baseRing);

      // Floating Name Sprite
      const sprite = createTextSprite(labelText, `#eef2ff`);
      sprite.position.set(0, 2.45, 0);
      group.add(sprite);

      return { mesh: group, leftLeg, rightLeg, leftArm, rightArm, torso, visor, baseRing, sprite };
    }

    function createTextSprite(text, hexColor) {
      const c = document.createElement(`canvas`);
      c.width = 512;
      c.height = 96;
      const ctx = c.getContext(`2d`);
      if (ctx) {
        ctx.fillStyle = `rgba(12, 14, 30, 0.82)`;
        ctx.strokeStyle = hexColor;
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.roundRect(16, 16, 480, 64, 18);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = hexColor;
        ctx.font = `bold 26px "Space Mono", monospace`;
        ctx.textAlign = `center`;
        ctx.textBaseline = `middle`;
        ctx.fillText(text.slice(0, 28), 256, 48);
      }
      const tex = new THREE.CanvasTexture(c);
      const mat = new THREE.SpriteMaterial({ map: tex, transparent: true });
      const sprite = new THREE.Sprite(mat);
      sprite.scale.set(2.5, 0.47, 1);
      return sprite;
    }

    function getAuraHex(name) {
      if (name === `purple`) return 0xc084fc;
      if (name === `emerald`) return 0x34d399;
      if (name === `gold`) return 0xfde047;
      return 0x22f3ff;
    }

    function updateAvatarColor(colorName) {
      appState.passport.avatarColor = colorName;
      if (selfAvatar) {
        const hex = getAuraHex(colorName);
        selfAvatar.visor.material.color.setHex(hex);
        selfAvatar.baseRing.material.color.setHex(hex);
        selfAvatar.torso.material.emissive.setHex(hex);
      }
      persistState();
    }

    function updateSelfAvatarLabel() {
      if (!selfAvatar || !selfAvatar.mesh) return;
      selfAvatar.mesh.remove(selfAvatar.sprite);
      selfAvatar.sprite = createTextSprite(`${appState.passport.name} (${appState.passport.university})`, `#22f3ff`);
      selfAvatar.sprite.position.set(0, 2.45, 0);
      selfAvatar.mesh.add(selfAvatar.sprite);
    }

    function updateDigitalScreenTexture() {
      if (!digitalScreenCanvas || !digitalScreenTexture) return;
      const ctx = digitalScreenCanvas.getContext(`2d`);
      if (!ctx) return;
      const slide = DIGITAL_SLIDES[appState.meeting.slideIndex % DIGITAL_SLIDES.length];
      const ind = document.getElementById(`meeting-slide-indicator`);
      if (ind) ind.textContent = `Digital Screen: ${slide.title}`;

      ctx.fillStyle = `#0b0e24`;
      ctx.fillRect(0, 0, 1024, 512);
      ctx.strokeStyle = `#22f3ff`;
      ctx.lineWidth = 6;
      ctx.strokeRect(18, 18, 988, 476);

      ctx.fillStyle = `#c084fc`;
      ctx.font = `bold 24px "Space Mono", monospace`;
      ctx.fillText(`ROOM ${appState.meeting.roomCode} // ${appState.meeting.roomTitle.slice(0, 34)}`, 52, 72);

      ctx.fillStyle = `#22f3ff`;
      ctx.font = `bold 36px "Sora", sans-serif`;
      ctx.fillText(slide.heading, 52, 134);

      ctx.fillStyle = `#eef2ff`;
      ctx.font = `28px "Inter", sans-serif`;
      slide.lines.forEach((line, i) => {
        ctx.fillText(line, 52, 210 + i * 64);
      });

      digitalScreenTexture.needsUpdate = true;
    }

    function syncWhiteboardTo3DWall() {
      if (whiteboard3DTexture) {
        whiteboard3DTexture.needsUpdate = true;
      }
    }

    function setMoveKey(k, pressed) {
      moveKeys[k] = pressed;
      const btn = document.getElementById(`key-${k}`);
      if (btn) btn.classList.toggle(`is-pressed`, pressed);
      if (pressed && avatarSeated) {
        avatarSeated = false;
        const sitBtn = document.getElementById(`btn-sit-toggle`);
        if (sitBtn) sitBtn.textContent = `Sit at Table`;
      }
    }

    function triggerAvatarAction(type) {
      avatarActionType = type;
      avatarActionTimer = 2.6;
      const st = document.getElementById(`avatar-anim-status`);
      if (st) st.textContent = type === `wave` ? `Waving to Peers` : `Hand Raised`;
    }

    function toggleAvatarSeat() {
      avatarSeated = !avatarSeated;
      const btn = document.getElementById(`btn-sit-toggle`);
      const st = document.getElementById(`avatar-anim-status`);
      if (avatarSeated) {
        avatarPos.set(0, 0, 4.0);
        avatarYaw = Math.PI;
        if (btn) btn.textContent = `Stand Up`;
        if (st) st.textContent = `Seated at Holographic Table`;
      } else {
        avatarPos.set(0, 0, 5.1);
        if (btn) btn.textContent = `Sit at Table`;
        if (st) st.textContent = `Standing Ready`;
      }
    }

    function setMeetingCameraMode(mode) {
      meetingCamMode = mode;
    }

    function resizeMeetingRenderer() {
      const canvas = document.getElementById(`meeting-3d-stage`);
      if (!canvas || !meetingRenderer || !meetingCamera) return;
      const w = canvas.clientWidth || 840;
      const h = canvas.clientHeight || 580;
      meetingCamera.aspect = w / h;
      meetingCamera.updateProjectionMatrix();
      meetingRenderer.setSize(w, h, false);
    }

    /* Keyboard listeners for WASD (ignore when typing inside inputs/textareas) */
    function initKeyboardControls() {
      window.addEventListener(`keydown`, (e) => {
        const tag = document.activeElement ? document.activeElement.tagName : ``;
        if (tag === `INPUT` || tag === `TEXTAREA` || tag === `SELECT`) return;
        if (appState.activeView !== `meeting`) return;

        const key = e.key.toLowerCase();
        if (key === `w` || key === `arrowup`) { e.preventDefault(); setMoveKey(`w`, true); }
        else if (key === `s` || key === `arrowdown`) { e.preventDefault(); setMoveKey(`s`, true); }
        else if (key === `a` || key === `arrowleft`) { e.preventDefault(); setMoveKey(`a`, true); }
        else if (key === `d` || key === `arrowright`) { e.preventDefault(); setMoveKey(`d`, true); }
        else if (key === `e`) {
          const distWb = avatarPos.distanceTo(new THREE.Vector3(4.6, 0, -6.5));
          const distScr = avatarPos.distanceTo(new THREE.Vector3(-4.6, 0, -6.5));
          if (distWb < 4.5) toggleWhiteboardPanel();
          else if (distScr < 4.5) cycleDigitalScreenSlide();
          else toggleAvatarSeat();
        }
      });

      window.addEventListener(`keyup`, (e) => {
        const key = e.key.toLowerCase();
        if (key === `w` || key === `arrowup`) setMoveKey(`w`, false);
        else if (key === `s` || key === `arrowdown`) setMoveKey(`s`, false);
        else if (key === `a` || key === `arrowleft`) setMoveKey(`a`, false);
        else if (key === `d` || key === `arrowright`) setMoveKey(`d`, false);
      });
    }

    /* =====================================================================
       SINGLE ANIMATION LOOP OWNER
       ===================================================================== */
    let mainLoopId = null;
    let lastTime = performance.now();

    function startMain3DLoop() {
      if (mainLoopId) cancelAnimationFrame(mainLoopId);
      const clockTick = (now) => {
        const dt = Math.min(0.05, (now - lastTime) / 1000);
        lastTime = now;
        const t = now * 0.001;

        if (appState.activeView === `home` && campusRenderer && campusScene && campusCamera) {
          campusTarget.lerp(campusGoalTarget, 0.08);
          campusCamera.position.set(
            campusTarget.x + Math.sin(campusOrbitAngle) * Math.cos(campusOrbitPitch) * campusOrbitDist,
            campusTarget.y + Math.sin(campusOrbitPitch) * campusOrbitDist,
            campusTarget.z + Math.cos(campusOrbitAngle) * Math.cos(campusOrbitPitch) * campusOrbitDist
          );
          campusCamera.lookAt(campusTarget);

          campusNodes.forEach((n, idx) => {
            n.halo.rotation.z = t * (0.6 + idx * 0.1);
            if (n.key === `meeting`) n.building.rotation.y = t * 0.55;
          });

          campusStudents.forEach((s) => {
            s.angle += s.speed * dt;
            const nx = Math.cos(s.angle) * s.radius;
            const nz = Math.sin(s.angle) * s.radius;
            s.mesh.position.set(nx, Math.sin(t * 4 + s.angle) * 0.04, nz);
            s.mesh.rotation.y = -s.angle;
            s.leftLeg.rotation.x = Math.sin(t * 7 + s.angle) * 0.35;
            s.rightLeg.rotation.x = -Math.sin(t * 7 + s.angle) * 0.35;
          });

          campusRenderer.render(campusScene, campusCamera);
        }

        if (appState.activeView === `meeting` && meetingRenderer && meetingScene && meetingCamera && selfAvatar) {
          if (meetingHolocore) {
            meetingHolocore.rotation.y = t * 0.7;
            meetingHolocore.rotation.x = Math.sin(t * 0.8) * 0.25;
            meetingHolocore.position.y = 1.75 + Math.sin(t * 2.2) * 0.08;
          }

          // Peer idle animations
          peerAvatars.forEach((p) => {
            p.torso.position.y = 1.12 + Math.sin(t * 2.2 + p.phase) * 0.02;
            p.rightArm.rotation.x = -0.35 + Math.sin(t * 1.8 + p.phase) * 0.12;
          });

          // WASD Avatar Movement
          let dx = 0;
          let dz = 0;
          if (moveKeys.w) dz -= 1;
          if (moveKeys.s) dz += 1;
          if (moveKeys.a) dx -= 1;
          if (moveKeys.d) dx += 1;

          const isMoving = dx !== 0 || dz !== 0;
          if (isMoving) {
            const len = Math.hypot(dx, dz);
            dx /= len;
            dz /= len;
            const speed = 4.6;
            const nextX = avatarPos.x + dx * speed * dt;
            const nextZ = avatarPos.z + dz * speed * dt;

            // Keep inside room circle and outside central table
            const distCenter = Math.hypot(nextX, nextZ);
            if (distCenter < 9.8 && distCenter > 3.55) {
              avatarPos.x = nextX;
              avatarPos.z = nextZ;
            }
            avatarYaw = Math.atan2(dx, dz);
            const st = document.getElementById(`avatar-anim-status`);
            if (st) st.textContent = `Walking`;
          } else if (avatarActionTimer <= 0 && !avatarSeated) {
            const st = document.getElementById(`avatar-anim-status`);
            if (st) st.textContent = `Idle`;
          }

          selfAvatar.mesh.position.set(
            avatarPos.x,
            avatarSeated ? -0.22 : (isMoving ? Math.abs(Math.sin(t * 10)) * 0.05 : 0),
            avatarPos.z
          );
          selfAvatar.mesh.rotation.y = avatarYaw;

          // Limb animation
          if (isMoving) {
            const swing = Math.sin(t * 11) * 0.55;
            selfAvatar.leftLeg.rotation.x = swing;
            selfAvatar.rightLeg.rotation.x = -swing;
            selfAvatar.leftArm.rotation.x = -swing * 0.7;
            selfAvatar.rightArm.rotation.x = swing * 0.7;
          } else if (avatarSeated) {
            selfAvatar.leftLeg.rotation.x = -1.25;
            selfAvatar.rightLeg.rotation.x = -1.25;
            selfAvatar.leftArm.rotation.x = -0.3;
            selfAvatar.rightArm.rotation.x = -0.3;
          } else {
            selfAvatar.leftLeg.rotation.x = 0;
            selfAvatar.rightLeg.rotation.x = 0;
            selfAvatar.leftArm.rotation.x = Math.sin(t * 1.8) * 0.05;
            selfAvatar.rightArm.rotation.x = -Math.sin(t * 1.8) * 0.05;
          }

          // Interaction animations (wave / raise hand)
          if (avatarActionTimer > 0) {
            avatarActionTimer -= dt;
            if (avatarActionType === `wave`) {
              selfAvatar.rightArm.rotation.z = -2.4 + Math.sin(t * 14) * 0.35;
            } else if (avatarActionType === `raise`) {
              selfAvatar.rightArm.rotation.z = -2.75;
            }
          } else {
            selfAvatar.rightArm.rotation.z = 0;
          }

          // Proximity Hint
          const hintEl = document.getElementById(`meeting-proximity-hint`);
          if (hintEl) {
            const distWb = avatarPos.distanceTo(new THREE.Vector3(4.6, 0, -6.5));
            const distScr = avatarPos.distanceTo(new THREE.Vector3(-4.6, 0, -6.5));
            const distTable = Math.hypot(avatarPos.x, avatarPos.z);
            if (distWb < 4.5) hintEl.textContent = `Near Virtual Whiteboard — Press [E] or click Virtual Whiteboard to draw`;
            else if (distScr < 4.5) hintEl.textContent = `Near Digital Screen — Press [E] to advance presentation slide`;
            else if (distTable < 4.6) hintEl.textContent = `At Holographic Meeting Table — Press [E] to Sit / Stand`;
            else hintEl.textContent = `Use WASD to explore • Approach Table, Screen, or Whiteboard`;
          }

          // Camera Mode Positioning
          if (meetingCamMode === `follow`) {
            const camX = avatarPos.x + Math.sin(meetingOrbitYaw) * 6.2;
            const camY = 3.2 + meetingOrbitPitch * 3.0;
            const camZ = avatarPos.z + Math.cos(meetingOrbitYaw) * 6.2;
            meetingCamera.position.lerp(new THREE.Vector3(camX, camY, camZ), 0.12);
            meetingCamera.lookAt(avatarPos.x, 1.4, avatarPos.z);
          } else if (meetingCamMode === `table`) {
            meetingCamera.position.lerp(new THREE.Vector3(Math.sin(meetingOrbitYaw) * 8.5, 5.0, Math.cos(meetingOrbitYaw) * 8.5), 0.1);
            meetingCamera.lookAt(0, 1.3, 0);
          } else if (meetingCamMode === `whiteboard`) {
            meetingCamera.position.lerp(new THREE.Vector3(3.4, 2.7, -3.4), 0.12);
            meetingCamera.lookAt(4.6, 2.6, -8.2);
          } else if (meetingCamMode === `screen`) {
            meetingCamera.position.lerp(new THREE.Vector3(-3.4, 2.7, -3.4), 0.12);
            meetingCamera.lookAt(-4.6, 2.6, -8.2);
          }

          meetingRenderer.render(meetingScene, meetingCamera);
        }

        mainLoopId = requestAnimationFrame(clockTick);
      };
      mainLoopId = requestAnimationFrame(clockTick);
    }

    /* =====================================================================
       UTILITIES & APP BOOTSTRAP
       ===================================================================== */
    function escapeHtml(str) {
      return String(str)
        .replace(/&/g, `&amp;`)
        .replace(/</g, `&lt;`)
        .replace(/>/g, `&gt;`)
        .replace(/"/g, `&quot;`)
        .replace(/'/g, `&#39;`);
    }

    function renderAllViews() {
      renderHomeSections();
      renderAssignments();
      renderResearch();
      syncMeetingRoomHeader();
      renderMeetingChat();
      renderMeetingParticipants();
      renderLabProjects();
      renderCommunityMembers();
      renderSharedIdeas();
    }

    async function bootstrapCampusConnect() {
      if (window.notebookAppApi && typeof window.notebookAppApi.getAppState === `function`) {
        try {
          const saved = await window.notebookAppApi.getAppState();
          if (saved) restoreFromState(saved);
        } catch (err) {
          console.warn(`Could not restore state:`, err);
        }
      }

      syncInputsFromState();
      renderAllViews();
      initCampus3D();
      initMeeting3D();
      initWhiteboardEvents();
      initKeyboardControls();
      switchView(appState.activeView || `home`);
      startMain3DLoop();

      window.addEventListener(`resize`, () => {
        resizeCampusRenderer();
        resizeMeetingRenderer();
      });

      if (window.lucide && typeof window.lucide.createIcons === `function`) {
        window.lucide.createIcons();
      }

      if (window.notebookAppApi && typeof window.notebookAppApi.notifyAppReady === `function`) {
        window.notebookAppApi.notifyAppReady();
      }
    }

    document.addEventListener(`DOMContentLoaded`, bootstrapCampusConnect);