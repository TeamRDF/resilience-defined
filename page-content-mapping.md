# Page Content Mapping Report

**Analysis Goal**: Determine the correct location for the content currently housed on `pages/longevity-training.html` and `pages/longevity-library.html`.

## Page Definitions (Based on User Criteria)
1. **Resilience Training (`longevity-training.html`)**: The "methodology page". This should explain *how* Resilience Defined trains, the philosophy behind it, the scientific framework, and the overarching approach to building a resilient body.
2. **Longevity Library (`longevity-library.html`)**: The "knowledge hub". This should be the functional directory where users browse specific articles, protocols, guides, and categorized research (by body part, training goal, etc.).

---

## Current State Analysis

### 1. `pages/longevity-training.html` (Currently misplaced)
**Current Content Overview:**
Despite its filename (`longevity-training.html`) and URL path suggesting it should be the methodology page, the *actual content* inside this file is entirely structured as a library/knowledge hub. 

**Misplaced Sections in this file:**
*   **Hero Section**: The headline literally says "Longevity Library" and the subheadline talks about exploring a "curated archive of resources."
*   **Topic Navigation**: A filter bar (Joint & Tendon Health, Mobility Systems, etc.) meant for exploring content.
*   **Featured Longevity Guides**: A grid of specific educational articles (Rebuilding the Patellar Tendon, etc.).
*   **Browse by Body Region**: A directory grid to find guides for Knees, Shoulders, Hips, etc.
*   **Browse by Training Goal**: A directory grid to find guides for Building Strength, Improving Mobility, preventing injury, etc.
*   **Latest Articles**: A blog-style grid of recent research posts.

**Conclusion for this file**: *Every single content section* currently inside `longevity-training.html` actually belongs on the `longevity-library.html` page. 

---

### 2. `pages/longevity-library.html` (Currently empty)
**Current Content Overview:**
This file currently contains a hero section that says "Longevity Library", but absolutely no grid content, navigation filters, or articles below it. It is essentially an empty shell.

**Conclusion for this file**: This file is missing all of its intended knowledge hub content, which is currently sitting inside the `longevity-training.html` file.

---

## Action Plan (To Execute Later)

1.  **Move the Library**: Cut the `<section class="topic-navigation">` all the way down through the `<section class="lead-magnet">` from `longevity-training.html` and paste it into `longevity-library.html`.
2.  **Rebuild the Methodology**: Now that `longevity-training.html` is empty (aside from its nav/footer), it needs to be rebuilt from scratch with true "Resilience Training Methodology" content (e.g., explaining the philosophy of isometric loading, the 3 foundational pillars of joint health, how the programming works, etc.).
