
const CodeWallpaper = () => {
  const codeText = `function createPortfolio() {
  const developer = {
    name: "Javier A. Carbone",
    skills: ["React", "TypeScript", "Node.js", "Python"],
    passion: "solving problems and creating solutions",
    getCurrentFocus: () => "backend development",
    getTools: () => ["Git", "Linux/WSL", "Docker"],
    createProject: (idea) => {
      return idea.transform().intoReality();
    }
  };
  
  return developer.buildAmazingThings();
}

class FullStackDeveloper {
  constructor() {
    this.languages = ["JavaScript", "TypeScript", "Python"];
    this.frontend = ["React", "Tailwind CSS", "HTML5", "CSS3"];
    this.backend = ["Node.js", "Express", "MongoDB"];
    this.tools = ["Git", "Docker", "Linux", "WSL"];
  }
  
  async solveProblems(challenge) {
    const solution = await this.analyze(challenge);
    return this.implement(solution);
  }
  
  automateProcesses() {
    return this.efficiency.maximize();
  }
}

const portfolio = new FullStackDeveloper();
portfolio.displaySkills();
portfolio.showcase.projects();

// Building the future, one line at a time
while (learning.continues()) {
  skills.expand();
  projects.create();
  solutions.implement();
}

export default createPortfolio;`.repeat(50);

  return (
    <div className="fixed inset-0 z-0 opacity-5">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <div className="absolute inset-0 text-cyan-300/20 font-mono text-xs leading-4 p-4 overflow-hidden whitespace-pre-wrap">
        {codeText}
      </div>
    </div>
  );
};

export default CodeWallpaper;
