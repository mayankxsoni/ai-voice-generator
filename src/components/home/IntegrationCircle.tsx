import chatgptIcon from '@public/images/icons/chatgpt-ai.svg';
import claudeIcon from '@public/images/icons/claude-ai.svg';
import deepseekIcon from '@public/images/icons/deepseek.svg';
import geminiIcon from '@public/images/icons/gemini.svg';
import githubIcon from '@public/images/icons/github.svg';
import grokIcon from '@public/images/icons/grok-ai.svg';
import lovableIcon from '@public/images/icons/lovable.svg';
import mistralIcon from '@public/images/icons/mistral-ai.svg';
import mochaIcon from '@public/images/icons/mocha-ai.svg';
import perplexityIcon from '@public/images/icons/perplexity-ai.svg';
import qwenIcon from '@public/images/icons/qwen-ai.svg';
import runwayIcon from '@public/images/icons/runway.svg';

const IntegrationCircle = () => {
  return (
    <svg
      className="ai-voice-generator-integration-circle"
      viewBox="0 0 1484 1484"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <circle cx="740" cy="744" r="699.5" stroke="#F4EFE7" />
      {/* gemini - top (0°) */}
      <foreignObject x="704" y="4" width="72" height="72">
        <div className="bg-secondary border-ns-ivory flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-full border-8 shadow-none">
          <img src={geminiIcon.src} alt="Gemini" className="h-[38px] w-[38px]" />
        </div>
      </foreignObject>

      {/* lovable - top-right */}
      <foreignObject x="884.547" y="32.0527" width="72" height="72">
        <div className="bg-secondary border-ns-ivory flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-full border-8 shadow-none">
          <img src={lovableIcon.src} alt="Lovable" className="h-9 w-9" />
        </div>
      </foreignObject>

      {/* claude ai - right */}
      <foreignObject x="1054.55" y="102.053" width="72" height="72">
        <div className="bg-secondary border-ns-ivory flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-full border-8 shadow-none">
          <img src={claudeIcon.src} alt="Claude AI" className="h-[38px] w-[37px]" />
        </div>
      </foreignObject>

      {/* qwen - right-bottom */}
      <foreignObject x="1200.55" y="213.053" width="72" height="72">
        <div className="bg-secondary border-ns-ivory flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-full border-8 shadow-none">
          <img src={qwenIcon.src} alt="Qwen" className="h-[29px] w-8" />
        </div>
      </foreignObject>

      {/* deepseek - bottom-right */}
      <foreignObject x="1314.55" y="358.053" width="72" height="72">
        <div className="bg-secondary border-ns-ivory flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-full border-8 shadow-none">
          <img src={deepseekIcon.src} alt="Deepseek" className="h-[38px] w-[38px]" />
        </div>
      </foreignObject>

      {/* runway - bottom-right */}
      <foreignObject x="1378.55" y="528.053" width="72" height="72">
        <div className="bg-secondary border-ns-ivory flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-full border-8 shadow-none">
          <img src={runwayIcon.src} alt="Runway" className="h-[21px] w-[38px]" />
        </div>
      </foreignObject>

      {/* chatgpt - bottom */}
      <foreignObject x="1408" y="708" width="72" height="72">
        <div className="bg-secondary border-ns-ivory flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-full border-8 shadow-none">
          <img src={chatgptIcon.src} alt="ChatGPT" className="h-[38px] w-[38px]" />
        </div>
      </foreignObject>

      {/* mistral ai - bottom */}
      <foreignObject x="1378.55" y="887.947" width="72" height="72">
        <div className="bg-secondary border-ns-ivory flex h-[72px] w-[72px] shrink-0 rotate-180 items-center justify-center rounded-full border-8 shadow-none">
          <img src={mistralIcon.src} alt="Mistral AI" className="h-[38px] w-[38px]" />
        </div>
      </foreignObject>

      {/* grok - bottom-left */}
      <foreignObject x="1314.55" y="1060.05" width="72" height="72">
        <div className="bg-secondary border-ns-ivory flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-full border-8 shadow-none">
          <img src={grokIcon.src} alt="Grok AI" style={{ width: '31px', height: '31px' }} />
        </div>
      </foreignObject>

      {/* perplexity - left-bottom */}
      <foreignObject x="1196.55" y="1203.05" width="72" height="72">
        <div className="bg-secondary border-ns-ivory flex h-[72px] w-[72px] shrink-0 rotate-180 items-center justify-center rounded-full border-8 shadow-none">
          <img src={perplexityIcon.src} alt="Perplexity AI" className="h-7 w-7" />
        </div>
      </foreignObject>

      {/* mocha - right bottom */}
      <foreignObject x="1052.55" y="1312.05" width="72" height="72">
        <div className="bg-secondary border-ns-ivory flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-full border-8 shadow-none">
          <img src={mochaIcon.src} alt="Mocha AI" style={{ width: '34.83px', height: '34.83px' }} />
        </div>
      </foreignObject>

      {/* github - bottom */}
      <foreignObject x="886.547" y="1387.05" width="72" height="72">
        <div className="bg-secondary border-ns-ivory flex h-[72px] w-[72px] shrink-0 rotate-180 items-center justify-center rounded-full border-8 shadow-none">
          <img src={githubIcon.src} alt="Github" className="h-9 w-[38px]" />
        </div>
      </foreignObject>

      {/* gemini - bottom */}
      <foreignObject x="704" y="1408" width="72" height="72">
        <div className="bg-secondary border-ns-ivory flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-full border-8 shadow-none">
          <img src={geminiIcon.src} alt="Gemini" className="h-[38px] w-[38px]" />
        </div>
      </foreignObject>

      {/* lovable - left-bottom */}
      <foreignObject x="521.453" y="1380.32" width="72" height="72">
        <div className="bg-secondary border-ns-ivory flex h-[72px] w-[72px] shrink-0 rotate-180 items-center justify-center rounded-full border-8 shadow-none">
          <img src={lovableIcon.src} alt="Lovable" className="h-9 w-9" />
        </div>
      </foreignObject>

      {/* claude ai - left bottom */}
      <foreignObject x="354.547" y="1314.05" width="72" height="72">
        <div className="bg-secondary border-ns-ivory flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-full border-8 shadow-none">
          <img src={claudeIcon.src} alt="Claude AI" className="h-[38px] w-[37px]" />
        </div>
      </foreignObject>

      {/* qwen - left-bottom */}
      <foreignObject x="208.547" y="1203.05" width="72" height="72">
        <div className="bg-secondary border-ns-ivory flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-full border-8 shadow-none">
          <img src={qwenIcon.src} alt="Qwen" className="h-[29px] w-8" />
        </div>
      </foreignObject>

      {/* deepseek - left bottom */}
      <foreignObject x="96.5469" y="1058.05" width="72" height="72">
        <div className="bg-secondary border-ns-ivory flex h-[72px] w-[72px] shrink-0 rotate-180 items-center justify-center rounded-full border-8 shadow-none">
          <img src={deepseekIcon.src} alt="Deepseek" className="h-[38px] w-[38px]" />
        </div>
      </foreignObject>

      {/* runway - left bottom */}
      <foreignObject x="32.5469" y="890" width="72" height="72">
        <div className="bg-secondary border-ns-ivory flex h-[72px] w-[72px] shrink-0 rotate-180 items-center justify-center rounded-full border-8 shadow-none">
          <img src={runwayIcon.src} alt="Runway" className="h-[21px] w-[38px]" />
        </div>
      </foreignObject>

      {/* chatgpt - top */}
      <foreignObject x="4" y="702" width="72" height="72">
        <div className="bg-secondary border-ns-ivory flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-full border-8 shadow-none">
          <img src={chatgptIcon.src} alt="ChatGPT" className="h-[38px] w-[38px]" />
        </div>
      </foreignObject>

      {/* mistral ai - top */}
      <foreignObject x="32.5469" y="528.053" width="72" height="72">
        <div className="bg-secondary border-ns-ivory flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-full border-8 shadow-none">
          <img src={mistralIcon.src} alt="Mistral AI" className="h-[38px] w-[38px]" />
        </div>
      </foreignObject>

      {/* grok - top-left */}
      <foreignObject x="96.5469" y="358.053" width="72" height="72">
        <div className="bg-secondary border-ns-ivory flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-full border-8 shadow-none">
          <img src={grokIcon.src} alt="Grok AI" style={{ width: '31px', height: '31px' }} />
        </div>
      </foreignObject>

      {/* perplexity - top-left */}
      <foreignObject x="208.547" y="213.391" width="72" height="72">
        <div className="bg-secondary border-ns-ivory flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-full border-8 shadow-none">
          <img src={perplexityIcon.src} alt="Perplexity AI" className="h-7 w-7" />
        </div>
      </foreignObject>

      {/* mocha - top-left */}
      <foreignObject x="354.547" y="101.391" width="72" height="72">
        <div className="bg-secondary border-ns-ivory flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-full border-8 shadow-none">
          <img src={mochaIcon.src} alt="Mocha AI" style={{ width: '34.83px', height: '34.83px' }} />
        </div>
      </foreignObject>

      {/* github - top-right */}
      <foreignObject x="523.453" y="36" width="72" height="72">
        <div className="bg-secondary border-ns-ivory flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-full border-8 shadow-none">
          <img src={githubIcon.src} alt="Github" className="h-9 w-[38px]" />
        </div>
      </foreignObject>
    </svg>
  );
};

export default IntegrationCircle;
