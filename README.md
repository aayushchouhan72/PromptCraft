

# PromptCraft — Prompt Engineering Learning Platform

PromptCraft is a fully functional, aesthetically designed learning platform built to master the art and science of Prompt Engineering. It guides users from foundational principles to advanced research-grade techniques using a structured curriculum and interactive AI-driven features.

## ✨ Key Features

- **Comprehensive Curriculum**: 8 in-depth topics covering everything from the "Anatomy of a Prompt" to "Advanced Techniques" like RAG and ReAct.
- **AI-Powered Learning**:
- **AI Summary**: Instantly generate four-bullet point summaries for any topic using the integrated LLM (Llama-3.1 via Groq).
- **Ask AI**: An interactive chat interface that allows users to ask questions specifically grounded in the curriculum's context.

- **Interactive UI**:
- **Progress Tracking**: Automatically saves your learning progress to `localStorage`.
- **Annotated Code Blocks**: Visual breakdowns of complex prompts into their core components.
- **One-Click Copy**: Easily copy example prompts to your clipboard for immediate testing.

- **Modern Design**: Built with a sleek "Dark Mode" aesthetic using Tailwind CSS, featuring glassmorphism, shimmer effects, and smooth animations.

## 🚀 Tech Stack

- **Frontend**: React 18 + Vite.
- **Styling**: Tailwind CSS v3 with custom Syne and DM Mono typography.
- **State Management**: Zustand for AI feature handling.
- **Routing**: React Router v6.
- **Icons**: Lucide React.
- **AI Integration**: Groq API (Llama-3.1-8b-instant model).

## 📁 Project Structure

```text
src/
├── components/         # Reusable UI elements (Sidebar, TopBar, CodeBlock, etc.)
├── data/               # The curriculum content (topics.js)
├── hooks/              # Custom React hooks (useProgress for localStorage)
├── pages/              # Main view components (HomePage, TopicPage)
├── store/              # Zustand store for AI Summarization and Q&A
├── utils/              # Helper functions (sectionToText converter)
├── App.jsx             # Main routing and layout configuration
└── index.css           # Global styles and Tailwind custom layers

```

## 📦 Topics Covered

| #   | Topic                    | Description                                                                 |
| --- | ------------------------ | --------------------------------------------------------------------------- |
| 01  | **Introduction to PE**   | Core vocabulary, what PE is, and why it matters.                            |
| 02  | **Anatomy of a Prompt**  | The 4 core components: Instruction, Context, Input Data, and Output Format. |
| 03  | **Zero-Shot & Few-Shot** | Learning to teach AI by example or reliance on pre-trained knowledge.       |
| 04  | **Chain-of-Thought**     | Strategies to make AI "show its work" for complex reasoning.                |
| 05  | **Role & Persona**       | Unlocking specialized expertise by assigning character identities.          |
| 06  | **Advanced Techniques**  | RAG, ReAct, Prompt Chaining, and Self-Consistency.                          |
| 07  | **Optimization Tips**    | The PCTF Framework and avoiding common mistakes.                            |
| 08  | **Real-World Use Cases** | Applied prompting for Dev, Marketing, Data, and Education.                  |

## 🛠️ Local Development

1. **Clone the repository**:

```bash
git clone https://github.com/aayushchouhan72/promptcraft.git
cd promptcraft

```

2. **Install dependencies**:

```bash
npm install

```

3. **Configure API Key**:
   Create a `.env` file in the root directory and add your Groq API Key:

```env
VITE_GROQ_API_KEY=your_api_key_here

```

_(Note: This is required for the "Summarize" and "Ask AI" features to function.)_ 4. **Start the development server**:

```bash
npm run dev

```

## 🌐 Deployment

This project is configured for easy deployment to **GitHub Pages**.

1. Update the `base` property in `vite.config.js` to match your repository name.
2. Run the deploy script:

```bash
npm run deploy

```

## 📄 License

© 2025 PromptCraft by Aayush Chouhan. Free for educational and personal use.
