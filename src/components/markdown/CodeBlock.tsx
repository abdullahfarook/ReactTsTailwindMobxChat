import React, { useRef, useState, useMemo, useEffect, RefObject } from 'react';
import copy from 'copy-to-clipboard';
import { InfoIcon } from 'lucide-react';
import cn from '@/core/utils';
import CheckMark from './CheckMark';
import Clipboard from './Clipboard';
export type CodeBarProps = {
  lang: string;
  error?: boolean;
  plugin?: boolean;
  blockIndex?: number;
  allowExecution?: boolean;
  codeRef: RefObject<HTMLElement>;
};
type CodeBlockProps = Pick<
  CodeBarProps,
  'lang' | 'plugin' | 'error' | 'allowExecution' | 'blockIndex'
> & {
  codeChildren: React.ReactNode;
  classProp?: string;
};

const CodeBar: React.FC<CodeBarProps> = React.memo(
  ({ lang, error, codeRef, blockIndex, plugin = null}) => {
    const [isCopied, setIsCopied] = useState(false);
    return (
      <div className="relative flex items-center justify-between rounded-tl-md rounded-tr-md bg-gray-700 px-4 py-2 font-sans text-xs text-gray-200 dark:bg-gray-700">
        <span className="">{lang}</span>
        {plugin === true ? (
          <InfoIcon className="ml-auto flex h-4 w-4 gap-2 text-white/50" />
        ) : (
          <div className="flex items-center justify-center gap-4">
            <button
              type="button"
              className={cn(
                'ml-auto flex gap-2',
                error === true ? 'h-4 w-4 items-start text-white/50' : '',
              )}
              onClick={async () => {
                const codeString = codeRef.current?.textContent;
                if (codeString != null) {
                  setIsCopied(true);
                  copy(codeString.trim(), { format: 'text/plain' });

                  setTimeout(() => {
                    setIsCopied(false);
                  }, 3000);
                }
              }}
            >
              {isCopied ? (
                <>
                  <CheckMark className="h-[18px] w-[18px]" />
                  {error === true ? '' : 'Copied!'}
                </>
              ) : (
                <>
                  <Clipboard />
                  {error === true ? '' : 'Copy Code'}
                </>
              )}
            </button>
          </div>
        )}
      </div>
    );
  },
);

const CodeBlock: React.FC<CodeBlockProps> = ({
  lang,
  blockIndex,
  codeChildren,
  classProp = '',
  allowExecution = true,
  plugin = null,
  error,
}) => {
  const codeRef = useRef<HTMLElement>(null);

  const [currentIndex, setCurrentIndex] = useState(0);


  const previous = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const isNonCode = !!(error === true);
  const language = isNonCode ? 'json' : lang;

  return (
    <div className="w-full rounded-md bg-gray-900 text-xs text-white/80">
      <CodeBar
        lang={lang}
        error={error}
        codeRef={codeRef}
        blockIndex={blockIndex}
        plugin={plugin === true}
        allowExecution={allowExecution}
      />
      <div className={cn(classProp, 'overflow-y-auto p-4')}>
        <code
          ref={codeRef}
          className={cn(
            isNonCode ? '!whitespace-pre-wrap' : `hljs language-${language} !whitespace-pre`,
          )}
        >
          {codeChildren}
        </code>
      </div>
    </div>
  );
};

export default CodeBlock;
