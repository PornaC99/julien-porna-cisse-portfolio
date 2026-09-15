import React, { useState } from 'react';
import { Copy, Check, Terminal } from 'lucide-react';

export const CodeMoment: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const codeText = `const developer = {
  name: "Julien Porna Cissé",
  focus: "Web Development",
  location: "Greater Noida, India",
  exploring: "AI-Assisted Development"
};`;

  const handleCopy = () => {
    navigator.clipboard.writeText(codeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="code-moment-section"
      aria-label="Developer Manifest"
      className="py-16 border-b border-[#27292D] bg-[#0B0C0E]"
    >
      <div className="max-w-4xl mx-auto px-5 sm:px-6">
        
        {/* Code Window Frame */}
        <div className="rounded-xl border border-[#27292D] bg-[#101216] shadow-2xl overflow-hidden font-mono text-xs sm:text-sm">
          
          {/* Editor Header Bar */}
          <div className="bg-[#15181D] px-4 py-3 border-b border-[#24272E] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#27292D]" />
                <span className="w-3 h-3 rounded-full bg-[#27292D]" />
                <span className="w-3 h-3 rounded-full bg-[#27292D]" />
              </div>
              <div className="flex items-center gap-2 pl-3 border-l border-[#24272E] text-xs text-[#9A9CA3]">
                <Terminal className="w-3.5 h-3.5 text-[#55D69B]" />
                <span className="text-[#F2F1ED] font-medium">developer.ts</span>
                <span className="text-[10px] text-[#55D69B] px-1.5 py-0.2 rounded bg-[#55D69B]/10">
                  TypeScript
                </span>
              </div>
            </div>

            <button
              onClick={handleCopy}
              aria-label="Copy Code to Clipboard"
              className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#1C1F25] hover:bg-[#252932] border border-[#2A2E36] text-[#9A9CA3] hover:text-[#F2F1ED] transition-colors text-[11px]"
            >
              {copied ? (
                <>
                  <Check className="w-3 h-3 text-[#55D69B]" />
                  <span className="text-[#55D69B]">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>

          {/* Editor Content with Syntax Highlighting & Line Numbers */}
          <div className="p-5 sm:p-6 overflow-x-auto text-left leading-relaxed">
            <pre className="flex">
              {/* Line Numbers */}
              <span className="text-[#434854] select-none pr-4 sm:pr-6 text-right font-mono border-r border-[#1F2228] flex flex-col">
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span>5</span>
                <span>6</span>
              </span>

              {/* Code Tokens */}
              <code className="pl-4 sm:pl-6 text-[#F2F1ED]">
                <div>
                  <span className="text-[#E06C75]">const</span>{' '}
                  <span className="text-[#61AFEF]">developer</span>{' '}
                  <span className="text-[#56B6C2]">=</span>{' '}
                  <span className="text-[#ABB2BF]">{'{'}</span>
                </div>
                <div>
                  {'  '}
                  <span className="text-[#E5C07B]">name</span>
                  <span className="text-[#ABB2BF]">:</span>{' '}
                  <span className="text-[#98C379]">&quot;Julien Porna Cissé&quot;</span>
                  <span className="text-[#ABB2BF]">,</span>
                </div>
                <div>
                  {'  '}
                  <span className="text-[#E5C07B]">focus</span>
                  <span className="text-[#ABB2BF]">:</span>{' '}
                  <span className="text-[#98C379]">&quot;Web Development&quot;</span>
                  <span className="text-[#ABB2BF]">,</span>
                </div>
                <div>
                  {'  '}
                  <span className="text-[#E5C07B]">location</span>
                  <span className="text-[#ABB2BF]">:</span>{' '}
                  <span className="text-[#98C379]">&quot;Greater Noida, India&quot;</span>
                  <span className="text-[#ABB2BF]">,</span>
                </div>
                <div>
                  {'  '}
                  <span className="text-[#E5C07B]">exploring</span>
                  <span className="text-[#ABB2BF]">:</span>{' '}
                  <span className="text-[#98C379]">&quot;AI-Assisted Development&quot;</span>
                </div>
                <div className="flex items-center">
                  <span className="text-[#ABB2BF]">{'}'}</span>
                  <span className="text-[#56B6C2]">;</span>
                  {/* Subtle blinking cursor */}
                  <span className="inline-block w-2 h-4 ml-1.5 bg-[#55D69B] cursor-blink" />
                </div>
              </code>
            </pre>
          </div>

          {/* Subtle Editor Footer Bar */}
          <div className="bg-[#14161B] px-4 py-1.5 border-t border-[#1F2228] flex items-center justify-between text-[11px] text-[#9A9CA3]">
            <div className="flex items-center gap-4">
              <span>UTF-8</span>
              <span>TypeScript 5</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#55D69B]" />
              <span>LN 6, COL 2</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
