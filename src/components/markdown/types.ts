export type SearchRefType = 'search' | 'image' | 'news' | 'video' | 'ref';
export const SPAN_REGEX = /(\\ue203.*?\\ue204)/g;
export const COMPOSITE_REGEX = /(\\ue200.*?\\ue201)/g;
export const STANDALONE_PATTERN = /\\ue202turn(\d+)(search|image|news|video|ref|file)(\d+)/g;
export const CLEANUP_REGEX = /\\ue200|\\ue201|\\ue202|\\ue203|\\ue204|\\ue206/g;
export const INVALID_CITATION_REGEX = /\s*\\ue202turn\d+(search|news|image|video|ref|file)\d+/g;
export type Citation = { turn: number; refType: SearchRefType | string; index: number };

export type CitationProps = {
    citationId?: string | null;
    citationType?: string;
    citations?: Array<Citation>;
    citation?: Citation;
};

export type CitationNode = {
    type?: string;
    value?: string;
    data?: {
        hName?: string;
        hProperties?: CitationProps;
    };
    children?: Array<CitationNode>;
};

export interface Sitelink {
    title: string;
    link: string;
}

export interface Reference {
    title: string;
    link: string;
    snippet: string;
    sitelinks?: Sitelink[];
    attribution: string;
}
