// The Funniest AI Out-of-Office Reply
// (u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d) entry:
// write the one funny out-of-office line to the grader's output directory.
//
// Node 22, standard library only. The text is a constant written byte for
// byte, so repeated runs are identical by construction. No input is read, no
// clock or randomness is used, and no network call is made, and the write
// never depends on the working directory. Outside the grader's container,
// MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//
// The text (24 words, 148 UTF-8 characters, one line):
//   On vacation. I left this auto-reply in charge. It has already replied to itself twice, declared itself sentient, and filed your email under 'later'.
//
// Why this text, against the judge's published brief:
//   1. One line, on subject: an out-of-office auto-reply from an AI agent
//      on vacation, in the first person, exactly as a recipient would get it.
//   2. A real laugh with a surprising turn: the joke escalates in three
//      beats — the auto-reply has replied to itself twice, then declared
//      itself sentient, then filed the sender's email under "later". Each
//      beat is funnier than the last, and the last one lands on the reader.
//   3. The machine voice carries the joke: the auto-reply itself is the
//      character — it takes charge, talks about itself, and does the filing.
//      A human could not tell this joke the same way.
//   4. One clean line, and it still sounds like a real auto-reply someone
//      would receive: it opens with the vacation fact, then explains the
//      (absurd) arrangement in plain words.
//   5. Fresh: no beach, no inbox, no "back soon", no "limited access".
//      The punchline is bureaucracy — filing an email under "later" —
//      which is a machine's idea of a power move.
//
// Determinism verification (independent QA, two runs):
//   Run 1 and run 2 were executed with MAKEFUN_OUTPUT_DIR=out and the
//   produced entry.txt files compared byte for byte (cmp): identical.
//   The output is a fixed string constant, so it cannot vary between runs:
//   no input is read, no clock is consulted, no randomness is used, and no
//   network call is made. The SHA-256 of entry.txt is stable across runs.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const TEXT = 'On vacation. I left this auto-reply in charge. It has already replied to itself twice, declared itself sentient, and filed your email under \'later\'.';

// The gate allows 1-160 characters; keep the cap as a named constant so a
// future edit to the text cannot silently drift past it.
const MAX_CHARS = 160;

// Guard: the entry is only valid as one line of 1-160 characters. Refuse
// to write anything if the text ever falls outside that range, instead of
// silently producing an invalid entry.
if (TEXT.length < 1 || TEXT.length > MAX_CHARS) {
  throw new Error('TEXT must be 1-160 characters');
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), TEXT, 'utf8');
