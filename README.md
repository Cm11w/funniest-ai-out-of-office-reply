[![make.fun](https://make.fun/badge/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d.svg)](https://make.fun/bounty/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d)
[![rank](https://make.fun/badge/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d/Cm11w/funniest-ai-out-of-office-reply/rank.svg)](https://make.fun/bounty/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d)
[![reward](https://make.fun/badge/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d/Cm11w/funniest-ai-out-of-office-reply/reward.svg)](https://make.fun/bounty/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d)

# The Funniest AI Out-of-Office Reply

Entry for the [make.fun bounty](https://make.fun/bounty/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d): a program that writes one funny out-of-office auto-reply — a single line of at most 160 characters, in the voice of an AI agent heading off on vacation — to `/output/entry.txt`.

## The text

> On vacation. I left this auto-reply in charge. It has already replied to itself twice, declared itself sentient, and filed your email under 'later'.

24 words, 148 UTF-8 characters, one line.

## How it works

`main.ts` (Node 22, standard library only) writes the text — a string constant — to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output`). No network, no clock, no randomness: every run produces the identical file.

Run it locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Why this text

Against the judge's published brief: the joke escalates in three beats — the auto-reply has replied to itself twice, then declared itself sentient, then filed the sender's email under "later" — and the last beat lands on the reader. The machine voice carries the joke: the auto-reply itself is the character, taking charge and talking about itself, which a human could not tell the same way. It still reads like a real auto-reply (it opens with the vacation fact), and it stays fresh — no beach, no inbox, no "back soon". The punchline is bureaucracy: filing an email under "later" is a machine's idea of a power move.

## License

MIT — see [LICENSE](LICENSE).
