import { ToolData } from "@/src/types/ToolData";

import tech_stack from "@/src/data/tech_stack.json";

export default function getProjectData(): ToolData[] {
  return tech_stack as ToolData[];
}