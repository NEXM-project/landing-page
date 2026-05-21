import { Bot, MessageSquare } from "lucide-react";
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
          <p className="font-sm lg:font-base text-justify mt-4">
            Comprehensive development services designed to scale your operations
            and integrate cutting-edge AI.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3  *:shadow-lg gap-4 *:rounded-md *:p-4">
            <div className="md:col-span-2 flex flex-col gap-4">
              <div className="flex items-center gap-2 mb-4">
                <Bot color="#6d28d9" size={32} className="-translate-y-0.5" />
                <h3 className="text-lg md:text-xl lg:text-2xl">
                  AI & SaaS Development
                </h3>
              </div>
              <div className="grid md:grid-cols-2 grid-cols-1 *:h-32 *:rounded-md gap-4 *:p-4">
                <div className="bg-gray-100 flex items-center gap-3">
                  <MessageSquare color="#6d28d9" />
                  <div>
                    <h4 className="text-sm font-medium">AI MVPs</h4>
                    <p className="text-xs text-muted-foreground">
                      Chatbot & RAG Systems
                    </p>
                  </div>
                </div>
                <div className="bg-gray-100"></div>
                <div className="bg-gray-100"></div>
                <div className="bg-gray-100"></div>
              </div>
            </div>
            <div></div>
            <div className="md:col-span-3"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
