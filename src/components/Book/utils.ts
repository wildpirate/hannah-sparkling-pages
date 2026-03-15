type ContentBlock = {
  type: string;
  text?: string;
  img?: string;
};

type PaginatedContent = Record<number, ContentBlock[]>;

type TypeConfig = {
  charsPerLine: number;
  lineWeight: number;
  blockSpacing: number;
};

const PAGE_WEIGHT = 1000;

const TYPE_CONFIG: Record<string, TypeConfig> = {
  title: {
    charsPerLine: 28,
    lineWeight: 60,
    blockSpacing: 120,
  },
  dialog: {
    charsPerLine: 40,
    lineWeight: 42,
    blockSpacing: 60,
  },
  paragraph: {
    charsPerLine: 45,
    lineWeight: 36,
    blockSpacing: 30,
  },
  default: {
    charsPerLine: 45,
    lineWeight: 36,
    blockSpacing: 30,
  },
};

function getConfig(type: string): TypeConfig {
  return TYPE_CONFIG[type] ?? TYPE_CONFIG.default;
}

// NEW
function isImageBlock(block: ContentBlock) {
  return block.type === "ilustration" || block.type === "illustration";
}

function estimateBlockCost(block: ContentBlock) {
  if (isImageBlock(block)) {
    return PAGE_WEIGHT;
  }

  const config = getConfig(block.type);

  const hasText = typeof block.text === "string" && block.text.length > 0;
  const estimatedLines = hasText
    ? Math.ceil(block.text.length / config.charsPerLine)
    : 1;

  return estimatedLines * config.lineWeight + config.blockSpacing;
}

export function parsePaginatedContent(
  content: ContentBlock[],
  pageWeight: number = PAGE_WEIGHT,
): PaginatedContent {
  const pages: PaginatedContent = {};

  let page = 1;
  let currentWeight = 0;
  let currentBlocks: ContentBlock[] = [];

  // NEW
  const pushCurrentPage = () => {
    if (currentBlocks.length > 0) {
      pages[page] = currentBlocks;
      page++;
      currentBlocks = [];
      currentWeight = 0;
    }
  };

  for (let i = 0; i < content.length; i++) {
    const block = content[i];

    // NEW: image always gets its own page
    if (isImageBlock(block)) {
      pushCurrentPage();
      pages[page] = [block];
      page++;
      currentBlocks = [];
      currentWeight = 0;
      continue;
    }

    const cost = estimateBlockCost(block);

    const nextBlock = content[i + 1];

    // prevent titles from being orphaned
    const combinedCost =
      // NEW: avoid pairing title with image block
      block.type === "title" && nextBlock && !isImageBlock(nextBlock)
        ? cost + estimateBlockCost(nextBlock)
        : cost;

    const shouldBreak =
      currentBlocks.length > 0 && currentWeight + combinedCost > pageWeight;

    if (shouldBreak) {
      pages[page] = currentBlocks;
      page++;
      currentBlocks = [];
      currentWeight = 0;
    }

    currentBlocks.push(block);
    currentWeight += cost;
  }

  if (currentBlocks.length) {
    pages[page] = currentBlocks;
  }

  return pages;
}
