# [mycoder-agent-v1.7.0](https://github.com/drivecore/mycoder/compare/mycoder-agent-v1.6.0...mycoder-agent-v1.7.0) (2025-03-21)

### Bug Fixes

- Fix TypeScript errors and tests for message compaction feature ([d4f1fb5](https://github.com/drivecore/mycoder/commit/d4f1fb5d197e623bf98f2221352f9132dcb3e5de))

### Features

- Add automatic compaction of historical messages for agents ([a5caf46](https://github.com/drivecore/mycoder/commit/a5caf464a0a8dca925c7b46023ebde4727e211f8)), closes [#338](https://github.com/drivecore/mycoder/issues/338)
- Improve message compaction with proactive suggestions ([6276bc0](https://github.com/drivecore/mycoder/commit/6276bc0bc5fa27c4f1e9be61ff4375690ad04c62))

# [mycoder-agent-v1.6.0](https://github.com/drivecore/mycoder/compare/mycoder-agent-v1.5.0...mycoder-agent-v1.6.0) (2025-03-21)

### Features

- **browser:** add system browser detection for Playwright ([00bd879](https://github.com/drivecore/mycoder/commit/00bd879443c9de51c6ee5e227d4838905506382a)), closes [#333](https://github.com/drivecore/mycoder/issues/333)

# [mycoder-agent-v1.5.0](https://github.com/drivecore/mycoder/compare/mycoder-agent-v1.4.2...mycoder-agent-v1.5.0) (2025-03-20)

### Bug Fixes

- improve resource trackers and fix tests ([c31546e](https://github.com/drivecore/mycoder/commit/c31546ea0375ce7fa477d7e0e4f11ea1e2b6d65e))
- properly format agentDone tool completion message ([8d19c41](https://github.com/drivecore/mycoder/commit/8d19c410db52190cc871c201b133bee127757599))
- resolve build and test issues ([549f0c7](https://github.com/drivecore/mycoder/commit/549f0c7184e48d2bd3221bf063f74255799da275))
- resolve TypeError in interactive mode ([6e5e191](https://github.com/drivecore/mycoder/commit/6e5e1912d69906674f5c7fec9b79495de79b63c6))
- restore visibility of tool execution output ([0809694](https://github.com/drivecore/mycoder/commit/0809694538d8bc7d808de4f1b9b97cd3a718941c)), closes [#328](https://github.com/drivecore/mycoder/issues/328)
- shell message should reset output on each read ([670a10b](https://github.com/drivecore/mycoder/commit/670a10bd841307750c95796d621b7d099d0e83c1))
- update CLI cleanup to use ShellTracker instead of processStates ([3dca767](https://github.com/drivecore/mycoder/commit/3dca7670bed4884650b43d431c09a14d2673eb58))

### Features

- add colored console output for agent logs ([5f38b2d](https://github.com/drivecore/mycoder/commit/5f38b2dc4a7f952f3c484367ef5576172f1ae321))
- Add interactive correction feature to CLI mode ([de2861f](https://github.com/drivecore/mycoder/commit/de2861f436d35db44653dc5a0c449f4f4068ca13)), closes [#326](https://github.com/drivecore/mycoder/issues/326)
- add parent-to-subagent communication in agentMessage tool ([3b11db1](https://github.com/drivecore/mycoder/commit/3b11db1063496d9fe1f8efc362257d9ea8287603))
- add stdinContent parameter to shell commands ([5342a0f](https://github.com/drivecore/mycoder/commit/5342a0fa98424282c75ca50c93b380c85ea58a20)), closes [#301](https://github.com/drivecore/mycoder/issues/301)
- implement ShellTracker to decouple from backgroundTools ([65378e3](https://github.com/drivecore/mycoder/commit/65378e34b035699f61b701679742ba9a7e667215))
- remove respawn capability, it wasn't being used anyhow. ([8e086b4](https://github.com/drivecore/mycoder/commit/8e086b46bd0836dfce39331aa8e6b0d5de81b275))

# [mycoder-agent-v1.4.2](https://github.com/drivecore/mycoder/compare/mycoder-agent-v1.4.1...mycoder-agent-v1.4.2) (2025-03-14)

### Bug Fixes

- improve profiling ([79a3df2](https://github.com/drivecore/mycoder/commit/79a3df2db13b8372666c6604ebe1666d33663be9))

# [mycoder-agent-v1.4.1](https://github.com/drivecore/mycoder/compare/mycoder-agent-v1.4.0...mycoder-agent-v1.4.1) (2025-03-14)

### Bug Fixes

- typescript compile error, unsure how it got past CI. ([ed9960a](https://github.com/drivecore/mycoder/commit/ed9960a35905ef41790e33ae28fb47c00b561603))

# [mycoder-agent-v1.4.0](https://github.com/drivecore/mycoder/compare/mycoder-agent-v1.3.1...mycoder-agent-v1.4.0) (2025-03-14)

### Bug Fixes

- disable respawn as it can confuse some LLMs ([c04ee43](https://github.com/drivecore/mycoder/commit/c04ee436b02a37d94688803b406cfb0b1e52c281))
- perfect gpustack compatibility, fix openai edge case ([9359f62](https://github.com/drivecore/mycoder/commit/9359f62e5b2f66c0db76bf9bb00161eb6964a888))

### Features

- support multiple line custom prompts in mycoder.config.js ([fa7f45e](https://github.com/drivecore/mycoder/commit/fa7f45ea9e81fa73fba0afa099e127fbdeaf5281)), closes [#249](https://github.com/drivecore/mycoder/issues/249)

# [mycoder-agent-v1.3.1](https://github.com/drivecore/mycoder/compare/mycoder-agent-v1.3.0...mycoder-agent-v1.3.1) (2025-03-13)

### Bug Fixes

- redo ollama llm provider using ollama sdk ([586fe82](https://github.com/drivecore/mycoder/commit/586fe827d048aa6c13675ba838bd50309b3980e2))
- update Ollama provider to use official npm package API correctly ([738a84a](https://github.com/drivecore/mycoder/commit/738a84aff560076e4ad24129f5dc9bf09d304ffa))

# [mycoder-agent-v1.3.0](https://github.com/drivecore/mycoder/compare/mycoder-agent-v1.2.0...mycoder-agent-v1.3.0) (2025-03-12)

### Features

- implement MCP tools support ([2d99ac8](https://github.com/drivecore/mycoder/commit/2d99ac8cefaa770e368d469355a509739aafe6a3))

# [mycoder-agent-v1.2.0](https://github.com/drivecore/mycoder/compare/mycoder-agent-v1.1.0...mycoder-agent-v1.2.0) (2025-03-12)

### Bug Fixes

- Fix TypeScript errors in MCP implementation ([f5837d3](https://github.com/drivecore/mycoder/commit/f5837d3a5dd219efc8e1d811e467f4bb695a1d94))

### Features

- Add basic Model Context Protocol (MCP) support ([8ec9619](https://github.com/drivecore/mycoder/commit/8ec9619c3cc63df8f14222762f5da0bcabe273a5))
- **agent:** implement incremental resource cleanup for agent lifecycle ([576436e](https://github.com/drivecore/mycoder/commit/576436ef2c7c5f234f088b7dba2e7fd65590738f)), closes [#236](https://github.com/drivecore/mycoder/issues/236)
- background tools is now scope to agents ([e55817f](https://github.com/drivecore/mycoder/commit/e55817f32b373fdbff8bb1ac90105b272044d33f))

# [mycoder-agent-v1.1.0](https://github.com/drivecore/mycoder/compare/mycoder-agent-v1.0.0...mycoder-agent-v1.1.0) (2025-03-12)

### Bug Fixes

- convert absolute paths to relative paths in textEditor log output ([a5ea845](https://github.com/drivecore/mycoder/commit/a5ea845c32bc569cda4330f59f1bf1553a236aea))
- implement resource cleanup to prevent CLI hanging issue ([d33e729](https://github.com/drivecore/mycoder/commit/d33e7298686a30661ee8b36f2fdffb16f5f3da71)), closes [#141](https://github.com/drivecore/mycoder/issues/141)
- llm choice working well for openai, anthropic and ollama ([68d34ab](https://github.com/drivecore/mycoder/commit/68d34abf8a73ed533a072359ce334a9364753425))
- **openai:** add OpenAI dependency to agent package and enable provider in config ([30b0807](https://github.com/drivecore/mycoder/commit/30b0807d4f3ecdd24f53b7ee4160645a4ed10444))
- replace @semantic-release/npm with @anolilab/semantic-release-pnpm to properly resolve workspace references ([bacb51f](https://github.com/drivecore/mycoder/commit/bacb51f637f2b2d3b1039bdfdbd33e3d704b6cde))
- up subagent iterations to 200 from 50 ([b405f1e](https://github.com/drivecore/mycoder/commit/b405f1e6d62eb5304dc1aa6c0ff28dc49dc67dce))

### Features

- add agent tracking to background tools ([4a3bcc7](https://github.com/drivecore/mycoder/commit/4a3bcc72f27af5fdbeeb407a748d5ecf3b7faed5))
- add Ollama configuration options ([d5c3a96](https://github.com/drivecore/mycoder/commit/d5c3a96ce9463c98504c2a346796400df36bf3b0))
- **agent:** implement agentStart and agentMessage tools ([62f8df3](https://github.com/drivecore/mycoder/commit/62f8df3dd083e2838c97ce89112f390461550ee6)), closes [#111](https://github.com/drivecore/mycoder/issues/111) [#111](https://github.com/drivecore/mycoder/issues/111)
- allow textEditor to overwrite existing files with create command ([d1cde65](https://github.com/drivecore/mycoder/commit/d1cde65df65bfcca288a47f14eedf5ad5939ed37)), closes [#192](https://github.com/drivecore/mycoder/issues/192)
- implement background tool tracking (issue [#112](https://github.com/drivecore/mycoder/issues/112)) ([b5bb489](https://github.com/drivecore/mycoder/commit/b5bb48981791acda74ee46b93d2d85e27e93a538))
- implement Ollama provider for LLM abstraction ([597211b](https://github.com/drivecore/mycoder/commit/597211b90e43c4d52969eb5994d393c15d85ec97))
- **llm:** add OpenAI support to LLM abstraction ([7bda811](https://github.com/drivecore/mycoder/commit/7bda811658e15b8dd41135cd9b2b90e9ea925e15))
- **refactor:** agent ([a2f59c2](https://github.com/drivecore/mycoder/commit/a2f59c2f51643a44d6e1ff0c16b319deb1adc3f2))

# mycoder-agent-v1.0.0 (2025-03-11)

### Bug Fixes

- **monorepo:** implement semantic-release-monorepo for proper versioning of sub-packages ([96c6284](https://github.com/drivecore/mycoder/commit/96c62848fbc3a4c1c591f3fd6202486e6461c4f2))
- only consider response empty if no text AND no tool calls ([#127](https://github.com/drivecore/mycoder/issues/127)) ([af20ec5](https://github.com/drivecore/mycoder/commit/af20ec54468afed49632306fe553b307ab3c4ba5))
- Replace shell commands with Node.js APIs for cross-platform compatibility ([07b4c24](https://github.com/drivecore/mycoder/commit/07b4c24fa17d19c468a76404a367f6afc0005517))
- token caching ([5972e59](https://github.com/drivecore/mycoder/commit/5972e59ab572040e564d1756ab8a5625215e14dc))
- use maxTokens in generateTextProps ([bfb9da9](https://github.com/drivecore/mycoder/commit/bfb9da9804d61840344e93cc5bea809e8e16f2ec))

### Features

- add back token tracking, system prompt caching. ([ddc04ab](https://github.com/drivecore/mycoder/commit/ddc04ab0778eb2f571897e825c8d8ba17651db09))
- add showStdIn and showStdout options to shellMessage and shellStart ([aed1b9f](https://github.com/drivecore/mycoder/commit/aed1b9f6ba489da19f2170c136861a7c80ad6e33)), closes [#167](https://github.com/drivecore/mycoder/issues/167)
- add token caching. issue 145 ([d78723b](https://github.com/drivecore/mycoder/commit/d78723bb6d0514110088caf7009e196e3f79769e))
- remove modelProvider and modelName - instant decrepation ([59834dc](https://github.com/drivecore/mycoder/commit/59834dcf932051a5c75624bd6f6ab12254f43769))

# mycoder-agent

## [0.7.0](https://github.com/drivecore/mycoder/compare/v0.6.1...v0.7.0) (2025-03-10)

### Bug Fixes

- change where anthropic key is declared ([f6f72d3](https://github.com/drivecore/mycoder/commit/f6f72d3bc18a65fc775151cd375398aba230a06f))
- ensure npm publish only happens on release branch ([ec352d6](https://github.com/drivecore/mycoder/commit/ec352d6956c717726ef388a07d88372c12b634a6))

### Features

- add GitHub Action for issue comment commands ([136950f](https://github.com/drivecore/mycoder/commit/136950f4bd6d14e544bbd415ed313f7842a9b9a2)), closes [#162](https://github.com/drivecore/mycoder/issues/162)
- allow for generic /mycoder commands ([4b6608e](https://github.com/drivecore/mycoder/commit/4b6608e0b8e5f408eb5f12fe891657a5fb25bdb4))
- **release:** implement conventional commits approach ([5878dd1](https://github.com/drivecore/mycoder/commit/5878dd1a56004eb8a994d40416d759553b022eb8)), closes [#140](https://github.com/drivecore/mycoder/issues/140)

## 0.6.1

### Patch Changes

- 5f43eeb: Improve check for API keys with better help messages.

## 0.6.0

### Minor Changes

- Simplify browser message tool parameter schema to make it easier for AI to call.

## 0.5.0

### Minor Changes

- a51b970: Convert from JsonSchema7Type to ZodSchema for tool parameters and returns, required for Vercel AI SDK integration.
- 27f73e3: Add GitHub mode to MyCoder for working with issues and PRs
- 66ff39e: Add support for OpenAI models (o3 mini and GPT-4o) via Vercel AI SDK
- 9b9d953: Add performance profiler via --profile to diagnose slow start-up times on some OSes.
- 27c2ba5: Refactored toolAgent.ts into modular components for improved maintainability and testability. Split into config.ts, messageUtils.ts, toolExecutor.ts, tokenTracking.ts, and types.ts modules.
- a4331b8: Add textEditor tool that combines readFile and updateFile functionality
- 9b9d953: Use cross platform compatibility tooling to build up context, rather than Linux/MacOS specific tools.

### Patch Changes

- 870cbee: Re-implemented token caching for Vercel AI SDK usage with Anthropic provider to reduce token consumption during repeated API calls.

## 0.4.0

### Minor Changes

- Adds sentry error reporting for quality monitoring.

## 0.3.0

### Minor Changes

- Better browser experience: show browser, take over user session, content filter, robustness improvements to browsing.

## 0.2.1

### Patch Changes

- Removed debug logging, fixed package.json urls for git repo.

## 0.2.0

### Minor Changes

- Add token caching, better user input handling, token usage logging (--tokenUsage), the ability to see the browser (--headless=false), and log prefixes with emojis.

## 0.1.3

### Patch Changes

- Improved sub-agent directions, do not assume a lack of a response is an agent being done, rather look for explicit confirmation, allow for sub-agents to have optional custom working directorires, break agent framework into the mycoder-agent package
