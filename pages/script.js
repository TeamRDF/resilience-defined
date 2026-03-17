document.addEventListener('DOMContentLoaded', () => {
  console.log('Resilience Defined: Initialized Protocol Generator');

  // Target Form Elements
  const protocolForm = document.getElementById('protocol-form');
  const generateBtn = document.getElementById('generate-btn');
  const resultsContainer = document.getElementById('protocol-results-container');
  
  // Specific Form Inputs
  const inputPrimaryGoal = document.getElementById('primary-goal');
  const inputProblemArea = document.getElementById('problem-area');
  const inputExperience = document.getElementById('training-experience');
  const inputEquipment = document.getElementById('available-equipment');
  const inputTime = document.getElementById('time-available');

  // Hardcoded Sample Protocol Database
  const protocolsDB = [
    {
      title: "Patellar Fortification Routine",
      goal: "Rehabilitate Existing Pain",
      painArea: "Knees",
      experience: "Intermediate",
      equipment: "Bodyweight Only",
      time: "10 Minutes",
      whoItsFor: "Designed to reduce anterior knee sensitivity and build load tolerance for athletes returning to training.",
      warmupFocus: "Ankle dorsiflexion and terminal knee extension.",
      movementFocus: "Tibialis anterior activation and slow, controlled eccentric step-downs.",
      strengthFocus: "Heavy, 45-second isometric Spanish Squats holds to induce analgesia.",
      recoveryFocus: "Track morning joint stiffness to titrate daily volume."
    },
    {
      title: "Tendon Hypertrophy Base",
      goal: "Build Strength",
      painArea: "Knees",
      experience: "Advanced",
      equipment: "Full Gym",
      time: "45+ Minutes",
      whoItsFor: "Heavily loaded protocol for increasing tendon cross-sectional area and force transfer capabilities.",
      warmupFocus: "Blood flow restriction (BFR) light leg extensions.",
      movementFocus: "Explosive concentric, heavily loaded slow eccentric movements.",
      strengthFocus: "Heavy loaded isometrics (80%+ 1RM) yielding holds.",
      recoveryFocus: "Strict adherence to 48-72 hours between specific tendon-loading sessions."
    },
    {
      title: "Glenohumeral Bulletproofing",
      goal: "Preventative Maintenance",
      painArea: "Shoulders",
      experience: "Beginner",
      equipment: "Bands",
      time: "15-20+ Minutes",
      whoItsFor: "Overhead athletes aiming to establish structural balance around the scapula and rotator cuff.",
      warmupFocus: "Thoracic spine extension and rotation.",
      movementFocus: "Band pull-aparts and external rotation variations.",
      strengthFocus: "Serratus anterior activation (e.g., push-up plus) and isometric Y-holds.",
      recoveryFocus: "Soft tissue rolling of the latissimus dorsi and pecs post-training."
    },
    {
      title: "Active Lumbar Resilience",
      goal: "Improve Active Range of Motion",
      painArea: "Lower Back",
      experience: "Intermediate",
      equipment: "No Equipment",
      time: "20 Minutes",
      whoItsFor: "Individuals experiencing non-specific mechanical low back stiffness wanting to restore deep mobility.",
      warmupFocus: "Diaphragmatic breathing and pelvic tilts.",
      movementFocus: "Segmental cat-cow and prone spine extensions.",
      strengthFocus: "McGill Big 3 (Bird-dog, side plank, modified curl-up) endurance holds.",
      recoveryFocus: "Daily low-intensity walking to promote passive fluid exchange in discs."
    },
    {
      title: "Deep Hip Capsule Unlock",
      goal: "Improve Mobility",
      painArea: "Hips",
      experience: "Beginner",
      equipment: "No Equipment",
      time: "10-15 Minutes",
      whoItsFor: "Desk workers and athletes suffering from chronic hip flexor tightness and poor internal rotation.",
      warmupFocus: "Active 90/90 controlled articular rotations (CARs).",
      movementFocus: "Couch stretch variations and deep glute bridges.",
      strengthFocus: "Isometric end-range liftoffs targeting the glute medius.",
      recoveryFocus: "Limit static sitting blocks to 45 minutes maximum throughout the day."
    },
    {
      title: "Achilles Spring Rebuild",
      goal: "Recover Durability",
      painArea: "Ankles",
      experience: "Returning",
      equipment: "Dumbbells",
      time: "20 Minutes",
      whoItsFor: "Runners and court athletes returning from acute stress managing achilles tendinopathy.",
      warmupFocus: "Plantar fascia release and soleus activation.",
      movementFocus: "Heavy, slow calf raises off a deficit (straight and bent knee).",
      strengthFocus: "Long duration (30-45s) single-leg isometric holds at mid-range.",
      recoveryFocus: "Elevated leg rest post-session to reduce acute inflammation."
    },
    {
      title: "Systemic Tissue Readiness",
      goal: "Train Pain-Free",
      painArea: "Full Body",
      experience: "Advanced",
      equipment: "Home Gym",
      time: "30 Minutes",
      whoItsFor: "Aging athletes looking for a high-leverage daily routine to mitigate joint wear and tear.",
      warmupFocus: "Full body CARs (Controlled Articular Rotations).",
      movementFocus: "Loaded mobility work (e.g., Jefferson Curls, light goblet squats).",
      strengthFocus: "Time under tension (TUT) focus, avoiding true 1RM loads in favor of muscle exhaustion.",
      recoveryFocus: "Incorporate regular sauna or heat exposure protocols weekly."
    },
    {
      title: "Post-Surgical Reentry",
      goal: "Return to Training",
      painArea: "Knees",
      experience: "Returning",
      equipment: "Bands",
      time: "15-20+ Minutes",
      whoItsFor: "Post-rehab individuals transitioning back into independent training needing strict progression gates.",
      warmupFocus: "Biking or non-impact monostructural work for 10 minutes.",
      movementFocus: "Terminal knee extensions (TKEs) and banded hamstring curls.",
      strengthFocus: "Double leg yielding to single leg catching progressions.",
      recoveryFocus: "Extremely strict symptom tracking: Pain must return to baseline within 24 hours."
    }
  ];

  if (protocolForm && generateBtn) {
    generateBtn.addEventListener('click', (e) => {
      e.preventDefault();

      const userProfile = {
        primaryGoal: inputPrimaryGoal.value,
        problemArea: inputProblemArea.value,
        trainingExperience: inputExperience.value,
        availableEquipment: inputEquipment.value,
        timeAvailableDaily: inputTime.value
      };

      // Simple Scoring System for best match
      let bestMatch = protocolsDB[0];
      let highestScore = -1;

      protocolsDB.forEach(protocol => {
        let score = 0;
        if (protocol.painArea === userProfile.problemArea) score += 3; // Heaviest weight on area
        if (protocol.goal === userProfile.primaryGoal) score += 2;
        if (protocol.experience === userProfile.trainingExperience) score += 1;
        if (protocol.equipment === userProfile.availableEquipment) score += 1;
        
        // Exact time matches get a point, but we aren't strict to avoid zero-matches
        if (protocol.time === userProfile.timeAvailableDaily) score += 1;

        if (score > highestScore) {
          highestScore = score;
          bestMatch = protocol;
        }
      });

      // Render the result to the DOM
      const htmlMarkup = `
        <div class="highlight-container" style="max-width: 900px; margin: 0 auto;">
          <div style="background-color: var(--bg-card); border: 1px solid var(--accent-gold); border-radius: 8px; padding: 40px; width: 100%; box-shadow: 0 10px 30px rgba(0,0,0,0.4);">
            <div style="text-align: center; margin-bottom: 30px;">
              <div class="highlight-label" style="color: var(--accent-gold); border: 1px dashed var(--accent-gold); padding: 5px 15px; margin-bottom: 15px; display: inline-block;">YOUR PERSONALIZED PROTOCOL</div>
              <h3 class="highlight-title" style="font-size: 2.2rem; margin-bottom: 10px; color: var(--text-main);">${bestMatch.title}</h3>
              <p class="highlight-desc" style="margin: 0 auto; max-width: 600px; color: var(--text-sub);">${bestMatch.whoItsFor}</p>
            </div>

            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin-bottom: 40px;">
              <div style="background: rgba(0,0,0,0.3); padding: 20px; border-radius: 4px; border-left: 3px solid var(--accent-red);">
                <h4 style="font-size: 1rem; color: var(--text-main); margin-bottom: 5px; text-transform: uppercase;">Warm-Up Focus</h4>
                <p style="font-size: 0.9rem; color: var(--text-muted);">${bestMatch.warmupFocus}</p>
              </div>
              <div style="background: rgba(0,0,0,0.3); padding: 20px; border-radius: 4px; border-left: 3px solid var(--accent-gold);">
                <h4 style="font-size: 1rem; color: var(--text-main); margin-bottom: 5px; text-transform: uppercase;">Movement Prep</h4>
                <p style="font-size: 0.9rem; color: var(--text-muted);">${bestMatch.movementFocus}</p>
              </div>
              <div style="background: rgba(0,0,0,0.3); padding: 20px; border-radius: 4px; border-left: 3px solid var(--text-sub);">
                <h4 style="font-size: 1rem; color: var(--text-main); margin-bottom: 5px; text-transform: uppercase;">Strength Focus</h4>
                <p style="font-size: 0.9rem; color: var(--text-muted);">${bestMatch.strengthFocus}</p>
              </div>
              <div style="background: rgba(0,0,0,0.3); padding: 20px; border-radius: 4px; border-left: 3px solid #444;">
                <h4 style="font-size: 1rem; color: var(--text-main); margin-bottom: 5px; text-transform: uppercase;">Recovery Check</h4>
                <p style="font-size: 0.9rem; color: var(--text-muted);">${bestMatch.recoveryFocus}</p>
              </div>
            </div>

            <div style="text-align: center;">
              <a href="#" class="btn btn-primary" style="padding: 15px 40px;">Download ${bestMatch.title} PDF</a>
            </div>
          </div>
        </div>
      `;

      // Clear the static mock and inject the dynamic one
      const sampleContainer = document.getElementById('sample-protocol-container');
      if (sampleContainer) {
        sampleContainer.style.display = 'none'; // Hide the initial static card
      }
      
      resultsContainer.innerHTML = htmlMarkup;
      
      // Smooth scroll to results
      resultsContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }
});
