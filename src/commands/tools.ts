import type { ArgumentsCamelCase, Argv } from "yargs";
import { getTools } from "../tools/getTools.js";
import type { JsonSchema7Type } from "zod-to-json-schema";

interface ListToolsOptions {
  [key: string]: unknown;
}

export const describe = "List all available tools and their capabilities";

export const builder = (yargs: Argv<ListToolsOptions>) => {
  return yargs;
};

function formatSchema(schema: {
  properties?: Record<string, JsonSchema7Type>;
  required?: string[];
}) {
  let output = "";

  if (schema.properties) {
    for (const [paramName, param] of Object.entries(schema.properties)) {
      const required = schema.required?.includes(paramName)
        ? " (required)"
        : " (optional)";
      const description =
        (param as any).description || "No description available";
      output += `${paramName}${required}: ${description}\n`;

      if ((param as any).type) {
        output += `    Type: ${(param as any).type}\n`;
      }
      if ((param as any).maxLength) {
        output += `    Max Length: ${(param as any).maxLength}\n`;
      }
      if ((param as any).additionalProperties) {
        output += `    Additional Properties: ${JSON.stringify((param as any).additionalProperties)}\n`;
      }
    }
  }

  return output;
}

export const handler = async (_argv: ArgumentsCamelCase<ListToolsOptions>) => {
  try {
    const tools = await getTools();

    console.log("Available Tools:\\n");

    for (const tool of tools) {
      // Tool name and description
      console.log(`${tool.name}`);
      console.log("-".repeat(tool.name.length));
      console.log(`Description: ${tool.description}\\n`);

      // Parameters section
      console.log("Parameters:");
      console.log(
        formatSchema(
          tool.parameters as {
            properties?: Record<string, JsonSchema7Type>;
            required?: string[];
          },
        ),
      );

      // Returns section
      console.log("Returns:");
      if (tool.returns) {
        console.log(
          formatSchema(
            tool.returns as {
              properties?: Record<string, JsonSchema7Type>;
              required?: string[];
            },
          ),
        );
      } else {
        console.log("    Type: any");
        console.log("    Description: Tool execution result or error\\n");
      }

      console.log(); // Add spacing between tools
    }
  } catch (error) {
    console.error("Error listing tools:", error);
    process.exit(1);
  }
};
