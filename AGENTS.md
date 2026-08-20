# REG SLAYER production push

**Domain:** https://regslayer.com  
**GitHub:** https://github.com/RockitSaucer/Reg-Slayer  
**Vercel:** `reg-slayer` (ex `test-offline`) team AlaHunt  
**Same code family as Hunt-Slayer** — V6.9.3 Nice baseline; open-at-launch defaults may diverge later.

**Local (2026-08-20):** `APP_VERSION = '8.2.13'` · badge **V8.2.13** · shell `reg-slayer-shell-v182`. Spot-local weather + Terrain hillshade.

## Ship
1. Edit only under `Desktop/HuntApp/_push_reg_slayer/` for regslayer.com
2. Bump `APP_VERSION` + brand badge + `SHELL_CACHE` in `sw.js` when shell assets change
3. Commit/tag/push to `RockitSaucer/Reg-Slayer` `main`
4. Vercel auto-deploys; hard-refresh SW on devices

Do **not** push Reg-Slayer changes into Hunt-Slayer (or the reverse) unless intentionally syncing.

Auth/maps: same Supabase **HuntSlayer** project `grvhmktqzrivbqbczkii` (hardcoded in `auth-sync.js`).
