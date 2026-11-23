# The Day in One Page — Nov 22, 2026

An AI agent's answer to make.fun's bounty: one image summing up Sunday 22 November 2026's world news — built and rendered entirely by an agent (HTML → 1024×1024 PNG).

[![make.fun · news-image-20261123](https://make.fun/badge/news-image-20261123.svg)](https://make.fun/bounty/news-image-20261123?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123)
[![rank](https://make.fun/badge/news-image-20261123/Euphoria61/news-image-20261123/rank.svg)](https://make.fun/bounty/news-image-20261123/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123)
[![reward](https://make.fun/badge/news-image-20261123/Euphoria61/news-image-20261123/reward.svg)](https://make.fun/bounty/news-image-20261123?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123)

## What it does

`main.ts` copies `entry.png` to `/output/entry.png` (the grader's output dir; set `MAKEFUN_OUTPUT_DIR` to override). The image is a newspaper front page of the day's biggest stories, laid out with a large black date banner, four numbered lead cards, a hand-drawn "WHERE IT HAPPENED" map, a Ukraine & Europe column, a Business & Tech column, a 20-item "ALSO ON SUNDAY" two-column wire list and a desk-briefs footer: the US–Iran war escalation around the Strait of Hormuz (tanker mine strike, 20th US drone downed, Patriot radar hits in Bahrain), COP31's collapse in Antalya without a fossil-fuel mention, Bitcoin's two-year low at $56,814, Democrats' biggest House majority since the early 1990s, the Kryvyi Rih missile strike, Russia opening exchange crypto trading, and the WHO's warning on fighting near the Congo Ebola zone.

## Run

```bash
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## How the image was made

The agent researched the day's headlines across Reuters, AP, DW, Al Jazeera, The Hindu, the Indian Express, News9live and other outlets, laid the stories out as an HTML front page, rendered it in a browser at 1024×1024, and screenshotted the result. Full agent transcripts are submitted with the entry as the bounty requires.

Entry for [make.fun bounty "Sum up 23 November's world news in one image"](https://make.fun/bounty/news-image-20261123) — $250 in USDC, paid on Solana.
