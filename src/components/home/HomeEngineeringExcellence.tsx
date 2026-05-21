import {
  Bot,
  Bug,
  CheckLine,
  Cloud,
  DiamondPlus,
  Logs,
  MessageSquare,
  Puzzle,
  RefreshCw,
  Wrench,
} from "lucide-react";
import React from "react";

export const HomeEngineeringExcellence = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10 lg:py-30">
      <h2 className="py-4 text-primary font-semibold text-center lg:text-lg">
        The NEXMTECH ADVANTAGE
      </h2>
      {/* Main Section */}
      <div className="flex justify-center">
        <div>
          <h2 className="text-xl md:text-2xl lg:text-5xl font-semibold leading-8 lg:leading-16 text-center">
            Engineering Excellence
          </h2>
          <p className="font-sm lg:font-base text-center my-4">
            Comprehensive development services designed to scale your operations
            and integrate cutting-edge AI.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 lg:w-5xl *:shadow-lg gap-4 *:rounded-md *:p-4">
            <div className="lg:col-span-2 flex flex-col">
              <div className="flex items-center gap-2">
                <Bot color="#6d28d9" size={32} className="-translate-y-0.5" />
                <h3 className="text-lg md:text-xl lg:text-2xl">
                  AI & SaaS Development
                </h3>
              </div>
              <p className="my-4 mb-8 text-sm">
                Rapid prototyping and full-scale development for next-generation
                intelligent applications.
              </p>
              <div className="grid lg:grid-cols-2 grid-cols-1 *:h-20 *:rounded-md gap-4 *:p-4">
                <div className="bg-gray-100 flex items-center gap-3">
                  <MessageSquare color="#6d28d9" />
                  <div>
                    <h4 className="text-sm font-medium">AI MVPs</h4>
                    <p className="text-xs text-muted-foreground">
                      Chatbot & RAG Systems
                    </p>
                  </div>
                </div>
                <div className="bg-gray-100 flex items-center gap-3">
                  <Cloud color="#6d28d9" />
                  <div>
                    <h4 className="text-sm font-medium">SaaS MVPs</h4>
                    <p className="text-xs text-muted-foreground">
                      Scalable Cloud Platforms
                    </p>
                  </div>
                </div>
                <div className="bg-gray-100 flex items-center gap-3">
                  <DiamondPlus color="#6d28d9" />
                  <div>
                    <h4 className="text-sm font-medium">API Development</h4>
                    <p className="text-xs text-muted-foreground">
                      Robust Data Pipelines
                    </p>
                  </div>
                </div>
                <div className="bg-gray-100 flex items-center gap-3">
                  <Puzzle color="#6d28d9" />
                  <div>
                    <h4 className="text-sm font-medium">Feature Development</h4>
                    <p className="text-xs text-muted-foreground">
                      Agile Enhancements
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <Wrench color="#6d28d9" size={32} className="rotate-90" />
                <h3 className="text-lg md:text-xl lg:text-2xl">
                  Operations & Tools
                </h3>
              </div>
              <p className="my-4 mb-8 text-sm">
                Streamline your workflows with custom internal software and
                automated processes.
              </p>
              <div className="grid grid-cols-1 gap-2 *:border-b-[0.5px] space-y-1 *:border-gray-300 *:text-xs">
                <div className="flex items-center gap-2">
                  <CheckLine color="#6d28d9" />
                  <p>Internal Tools</p>
                </div>
                <div className="flex items-center gap-2">
                  <CheckLine color="#6d28d9" />
                  <p>Dashboard Development</p>
                </div>
                <div className="flex items-center gap-2">
                  <CheckLine color="#6d28d9" />
                  <p>Workflow Automation</p>
                </div>
                <div className="flex items-center gap-2">
                  <CheckLine color="#6d28d9" />
                  <p>Shopify Custom Dev & CMS</p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-3 flex lg:flex-row flex-col gap-4">
              <div className="lg:max-w-84">
                <div className="flex items-center gap-2">
                  <Bot color="#6d28d9" size={32} className="-translate-y-0.5" />
                  <h3 className="text-lg md:text-xl lg:text-2xl">
                    AI & SaaS Development
                  </h3>
                </div>
                <p className="my-4 mb-8 text-sm">
                  Streamline your workflows with custom internal software and
                  automated processes.
                </p>
              </div>
              <div className="grid lg:grid-cols-3 text-sm grid-cols-1 *:h-full *:rounded-md gap-4  *:min-w-50 *:py-4">
                <div className="bg-gray-100 flex flex-col items-center justify-center gap-2">
                  <RefreshCw color="#6d28d9" className="" />
                  <p className="">Ongoing Maintenance</p>
                </div>
                <div className="bg-gray-100 flex flex-col items-center justify-center gap-2">
                  <Bug color="#6d28d9" />
                  <p>Bug Fix / Support</p>
                </div>
                <div className="bg-gray-100 flex flex-col items-center justify-center gap-2">
                  <Logs color="#6d28d9" />
                  <p>QA Automation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
