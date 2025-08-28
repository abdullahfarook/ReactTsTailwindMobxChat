import langSubset from "@/components/markdown/langSubset";
import { memo,  useMemo } from "react";
import ReactMarkdown from "react-markdown";
import type { Pluggable } from 'unified';
import { a, artifactPlugin, code, HighlightedText, p } from "./markdown/MarkdownComponents";
import rehypeHighlight from "rehype-highlight";
import rehypeKatex from "rehype-katex";
import remarkDirective from "remark-directive";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import supersub from "remark-supersub";
import { unicodeCitation } from "./markdown/plugin";
import cn from "@/core/utils";

const Markdown = ({ children, isStreaming }: { children?: string, isStreaming?: boolean }) => {
 const remarkPlugins: Pluggable[] = [
  supersub,
  remarkGfm,
  remarkDirective,
  artifactPlugin,
  [remarkMath, { singleDollarTextMath: false }],
  unicodeCitation,
];
 const rehypePlugins = useMemo(
  () => [
    [rehypeKatex],
    [
      rehypeHighlight,
      {
        detect: true,
        ignoreMissing: true,
        subset: langSubset,
      },
    ],
  ],
  [],
);
    return <>
        <div className="flex flex-col gap-1">
            <div className="flex max-w-full flex-grow flex-col gap-0"></div>
            <div
                className="text-message flex min-h-[20px] flex-col items-start gap-3 overflow-visible [.text-message+&]:mt-5"
                dir="auto"
            >
                <div className={cn("markdown prose message-content dark:prose-invert light w-full break-words dark:text-gray-100",
                    isStreaming && "result-streaming"
                )}>
                <ReactMarkdown
                    /* @ts-ignore */
                    rehypePlugins={rehypePlugins}
                    remarkPlugins={remarkPlugins}
                    components={
                        {
                            code,
                            a,
                            p,
                            'highlighted-text': HighlightedText,
                        } as {
                            [nodeType: string]: React.ElementType;
                        }
                    }
                >
                    {children ?? "&#8232;"}
                </ReactMarkdown>
                </div>

            </div>
        </div>
    </>
};
export default memo(Markdown);








