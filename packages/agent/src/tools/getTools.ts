import { Tool } from '../core/types.js';

// Import tools
import { browseMessageTool } from './browser/browseMessage.js';
import { browseStartTool } from './browser/browseStart.js';
import { agentMessageTool } from './interaction/agentMessage.js';
import { agentStartTool } from './interaction/agentStart.js';
import { userPromptTool } from './interaction/userPrompt.js';
import { fetchTool } from './io/fetch.js';
import { textEditorTool } from './io/textEditor.js';
import { listBackgroundToolsTool } from './system/listBackgroundTools.js';
import { respawnTool } from './system/respawn.js';
import { sequenceCompleteTool } from './system/sequenceComplete.js';
import { shellMessageTool } from './system/shellMessage.js';
import { shellStartTool } from './system/shellStart.js';
import { sleepTool } from './system/sleep.js';
import { McpTool } from './mcp.js';

// Import these separately to avoid circular dependencies

import { McpConfig } from '../core/mcp/types.js';

interface GetToolsOptions {
  userPrompt?: boolean;
  mcpConfig?: McpConfig;
}

export function getTools(options?: GetToolsOptions): Tool[] {
  const userPrompt = options?.userPrompt !== false; // Default to true if not specified
  const mcpConfig = options?.mcpConfig || { servers: [], defaultResources: [] };

  // Force cast to Tool type to avoid TypeScript issues
  const tools: Tool[] = [
    textEditorTool as unknown as Tool,
    agentStartTool as unknown as Tool,
    agentMessageTool as unknown as Tool,
    sequenceCompleteTool as unknown as Tool,
    fetchTool as unknown as Tool,
    shellStartTool as unknown as Tool,
    shellMessageTool as unknown as Tool,
    browseStartTool as unknown as Tool,
    browseMessageTool as unknown as Tool,
    respawnTool as unknown as Tool,
    sleepTool as unknown as Tool,
    listBackgroundToolsTool as unknown as Tool,
  ];

  // Only include userPrompt tool if enabled
  if (userPrompt) {
    tools.push(userPromptTool as unknown as Tool);
  }

  // Add MCP tool if we have any servers configured
  if (mcpConfig.servers && mcpConfig.servers.length > 0) {
    const mcpTool = new McpTool(mcpConfig);
    tools.push(mcpTool as unknown as Tool);
  }

  return tools;
}
