// mycoder.config.js
export default {
  // GitHub integration
  githubMode: true,

  // Browser settings
  headless: true,
  userSession: false,
  pageFilter: 'none', // 'simple', 'none', or 'readability'

  // Model settings
  //provider: 'anthropic',
  //model: 'claude-3-7-sonnet-20250219',
  //provider: 'openai',
  //model: 'gpt-4o',
  //provider: 'ollama',
  //model: 'medragondot/Sky-T1-32B-Preview:latest',
  //model: 'llama3.2:3b',
  maxTokens: 4096,
  temperature: 0.7,

  // Custom settings
  customPrompt: '',
  profile: false,
  tokenCache: true,

  // Custom commands
  // Uncomment and modify to add your own commands
  /*
  commands: {
    // Function-based command example
    "search": {
      description: "Search for a term in the codebase",
      args: [
        { name: "term", description: "Search term", required: true }
      ],
      execute: (args) => {
        return `Find all instances of ${args.term} in the codebase and suggest improvements`;
      }
    },
    
    // Another example with multiple arguments
    "fix-issue": {
      description: "Fix a GitHub issue",
      args: [
        { name: "issue", description: "Issue number", required: true },
        { name: "scope", description: "Scope of the fix", default: "full" }
      ],
      execute: (args) => {
        return `Analyze GitHub issue #${args.issue} and implement a ${args.scope} fix`;
      }
    }
  }
  */
};
