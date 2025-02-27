import { describe, it, expect } from 'vitest';

import { TokenTracker } from '../../core/tokens.js';
import { MockLogger } from '../../utils/mockLogger.js';

import { shellExecuteTool } from './shellExecute.js';

const toolContext = {
  logger: new MockLogger(),
  headless: true,
  workingDirectory: '.',
  tokenTracker: new TokenTracker(),
};

describe('shellExecute', () => {
  it('should execute shell commands', async () => {
    const { stdout } = await shellExecuteTool.execute(
      { command: "echo 'test'", description: 'test' },
      toolContext,
    );
    expect(stdout).toContain('test');
  });

  it('should handle command errors', async () => {
    const { error } = await shellExecuteTool.execute(
      { command: 'nonexistentcommand', description: 'test' },
      toolContext,
    );
    expect(error).toContain('Command failed:');
  });
});
