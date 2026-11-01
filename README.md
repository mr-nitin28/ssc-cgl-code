# ssc-cgl-code

A modern, high-performance SSC CGL Tier 1 Computer-Based Test (CBT) Mock Examination Platform & Comprehensive Preparation Portal built with **Next.js 16 (Turbopack)**, **React 19**, **TypeScript**, and **Tailwind CSS**.

---

## 🚀 Key Features

### 1. Realistic CBT Mock Exam Simulator
- **Authentic Exam Interface**: Modeled after standard TCS iON SSC CGL Tier 1 examination patterns.
- **Full 100-Question Test Suite**: Real mock tests covering all 4 sections (Reasoning, General Awareness, Quantitative Aptitude, English Comprehension).
- **Dynamic Timer Header**: Section-wise 15-minute countdown timers (60 minutes total) with pause/resume modal protection and automatic sectional submission.
- **Practice Mode Quick Check**: Real-time answer validation and instant explanations for practice sessions.

### 2. Subject-Scoped Question Palette
- **Scoped Completion Metrics**: Automatically filters and renders progress stats (Answered, Unanswered, Marked for Review, Not Visited) strictly for the currently active subject.
- **Synchronized 1–25 Numbering**: 5×5 question grid with inset border styling that prevents UI bleed or border overlap.
- **Seamless Navigation**: Instant jumping between questions and sections.

### 3. Detailed Scorecards & Performance Analytics
- **Instant Result Evaluation**: Comprehensive score calculation (+2 for correct, -0.50 negative marking).
- **Accuracy & Speed Metrics**: Section-by-section breakdown of accuracy percentages, attempt rates, and time spent.
- **Complete Answer Keys & Explanations**: In-depth step-by-step solutions with strategic tips from top rankers.

### 4. Interactive Syllabus & Master Study Materials
- **Topic-by-Topic Breakdown**: Detailed curriculum coverage for Tier 1 and Tier 2.
- **Downloadable Master PDFs**: High-yield syllabus guides and formula sheets available directly within the portal.

### 5. Pattern Lab & Preparation Utilities
- **Cut-Off Analyzer**: Historical cut-off trends (2018–2024) across UR, OBC, EWS, SC, and ST categories.
- **Safe Score Target Calculator**: Dynamic scoring benchmarks based on difficulty level and target department.
- **Topper Strategy Playbook**: Actionable advice on question selection, skipping strategy, and exam-day pacing.

---

## 🛠️ Technology Stack

- **Framework**: [Next.js 16.4](https://nextjs.org/) (App Router, Turbopack, Partial Prerendering)
- **UI & Components**: [React 19](https://react.dev/), [Tailwind CSS v4](https://tailwindcss.com/)
- **Language**: [TypeScript 5](https://www.typescriptlang.org/) (Strict Mode)
- **Icons**: Custom SVG & Lucide-style Icon System
- **Persistence**: Safe client-side `localStorage` state management for active exams

---

## 🏁 Getting Started

### Prerequisites
- Node.js 18.18+ or later
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**:
   ```bash
   git clone git@github.com:mr-nitin28/ssc-cgl-code.git
   cd ssc-cgl-code
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to explore the portal.

### Production Build

To build the project for production deployment:

```bash
npm run build
npm run start
```

---

## 📂 Project Structure

```text
├── app/
│   ├── globals.css              # Global design tokens, theme variables, and Tailwind imports
│   ├── layout.tsx               # Root layout with ThemeProvider and smooth-scroll configuration
│   ├── page.tsx                 # Portal dashboard, mock test directory, and quick stats
│   ├── mock/[id]/               # CBT Exam Simulator route with dynamic suspense boundary
│   │   └── key/                 # Answer Key & Solutions viewer route
│   ├── pattern-lab/             # Historical cut-offs and pattern analysis
│   ├── syllabus/[subject]/      # Interactive syllabus pages with embedded PDF materials
│   ├── tips/[subject]/          # Subject-specific strategy and topper guides
│   └── tools/                   # Safe score target calculator and prep tools
├── components/
│   ├── ExamSimulator.tsx        # Core CBT exam interface and lifecycle manager
│   ├── QuestionPalette.tsx      # Subject-scoped question palette with inset ring containment
│   ├── Scorecard.tsx            # Post-exam analytics, section cards, and accuracy metrics
│   ├── AnswerKeyViewer.tsx      # Solution viewer with filters and bookmarking
│   ├── TimerHeader.tsx          # Timer bar with pause, submit, and palette drawer triggers
│   └── icons.tsx                # Lightweight, tree-shaken SVG icon collection
├── data/                        # Mock test JSON datasets, syllabus data, and question banks
├── lib/                         # Type definitions, score calculator, and storage adapters
└── public/pdfs/                 # Master syllabus PDFs for all 4 exam sections
```

---

## 📄 License

This project is licensed under the MIT License.
