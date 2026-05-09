import getWebToolData from "@/src/lib/getWebToolData";
import { Tool, ToolData } from "@/src/types/ToolData";

const AboutTechStack = () => {
  const tech_stack = getWebToolData();

  return (
    <div className='about_tech_stack'>
      <h2 className='mb-3'>
        My Skills
      </h2>

      {/*Dynamically populate tech stack with data from json file*/}
      <ul className='list overflow-scroll'>
        {tech_stack.map((tool_data: ToolData) => { return (
          <div>
            <p className="text-xs">{tool_data.tool_type}</p>
            <li className="list-row">
              <div className="space-x-1 space-y-1">
                {tool_data.tools.map((tool: Tool) => { return (
                    <div className="badge badge-primary">{tool.name}</div>
                );})}
                <div/> {/* ! Load bearing div, do not remove*/}
              </div>
            </li>
          </div>
        ); })}
      </ul>
    </div>
  )
}

export default AboutTechStack