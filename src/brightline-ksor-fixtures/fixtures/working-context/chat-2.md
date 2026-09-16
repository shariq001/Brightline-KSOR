---
type: chat
channel: "#eng-oncall"
participants: [ravi.chandran, priya.nair]
date: 2026-09-05
---

**ravi.chandran** (2:41 PM): saw a brief spike in 500s on the reporting service around 2:30, looked like a deploy overlap, seems to have settled on its own now

**priya.nair** (2:44 PM): thanks for the heads up — did it cross the threshold for a SEV3 declare or was it under a couple minutes?

**ravi.chandran** (2:45 PM): under 3 min, error rate back to baseline, don't think it needs a formal incident, but I'll drop a note in the postmortem doc for the deploy process review anyway

**priya.nair** (2:46 PM): sounds good, appreciate you keeping an eye on it
