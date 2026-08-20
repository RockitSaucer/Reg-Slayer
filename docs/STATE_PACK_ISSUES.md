# State pack accuracy log

Rockit: this is the honest list of what is **not 100% certain** in each pack.  
Work folder: `_push_reg_slayer/` only (not production-pushed). Date: 2026-08-19. Local app **V8.2.3** / shell **v172**.

**How to read status**
- **full** = official current-year dates + queryable hunt-unit GIS wired, Alabama click/overlay rules.
- **building** = public land + official links only, or GIS/dates not confirmed for 2026.
- Issues below are leftovers even on `full` packs. Confirm the agency before hunting.

**Accuracy rule:** if the official 2026 PDF/page was not opened and quoted, the pack is not `full`. Huntwise/OnX/GOHUNT were not used as date sources. When a split was missing, the pack uses the **overlap / shorter window** so closed land never shows open.

---

## Already full before this sitting

### Alabama — full (gold, in `index.html`)
- A–E rings are the in-app gold. WMA-specific dates live in the Alabama tables.

### Wyoming — full (`wy-pack.js`)
- Official WGFD 2026 hunt-area GIS (126 areas) + Chapter 6 2026.
- Some PDF limitation lines were image-only and marked “confirm Chapter 6.”

### Colorado — full (`co-pack.js`)
- Official 2026 brochure windows + Hunting Atlas GMU layer 81 (186 units).
- **Not 100%:** Encodes mountain vs plains **windows**, not every GMU hunt code. First rifle “select GMUs only” is applied to all mountain GMUs with a note.

---

## Full this sitting (A–M leftover + N–W wave)

### Arkansas — full (`ar-pack.js`)
- **Not 100%:** GIS leftover labels 1A/4B/5B/6A/8A have no 2026 seasons (show closed). WMA dates not in pack.

### California — full (`ca-pack.js`)
- **Not 100%:** GIS metadata 2014. Additional hunts (G, M, MA, J) not encoded. X-10 archery shorter than the common A-hunt window.

### Connecticut — full (`ct-pack.js`)
- **Not 100%:** Archery Sept 15–Dec 31 is private-land. State-land archery is shorter. Jan extra archery is Zones 11–12 private only.

### Delaware — full (`de-pack.js`)
- Overlay is TIGER counties (seasons statewide). WMZ 1A/1B January handgun omitted on purpose.

### Florida — full (`fl-pack.js`)
- **WMA dates excluded by FWC.** Antlerless-only sub-windows noted, not separately enforced.

### Georgia — full (`ga-pack.js`)
- Color-region either-sex days not encoded. Clayton/Cobb/DeKalb still get the statewide firearm window (should be archery-only).

### Iowa — full (`ia-pack.js`)
- Zone B is an 8-county name list. January antlerless omitted.

### Idaho — full (`id-pack.js`)
- Controlled hunts not encoded. Unit 53 short-range is a portion.

### Illinois — full (`il-pack.js`)
- Cook/DuPage/Lake/Kane-east should be firearm-closed; Kane split is a highway line.

### Indiana — full (`in-pack.js`)
- DRZ extra omitted. GIO county layer may miss Marion.

### Kansas — full (`ks-pack.js`)
- Printed 2026-27 digest not posted. Unit 19 urban is a separate layer.

### Kentucky — full (`ky-pack.js`)
- PDF guide 403 from this environment. Dates from live deer page. CWD extra omitted.

### Maine — full (`me-pack.js`)
- GIS ~40 polygons vs 29 WMDs. Sundays closed (not weekday-filtered). Expanded archery not drawn.

### Maryland — full, conservative (`md-pack.js`)
- Dates: official eRegulations June 12, 2026 (2026-27). Overlay: TIGER counties.
- **Not 100%:** Washington County highway split not drawn — whole county treated as **Region A**. East Washington (Region B) therefore misses winter firearms Jan 8–10. Sundays not weekday-filtered. Primitive Feb 1–3 omitted. Sika omitted.

### Massachusetts — full (`ma-pack.js`)
- Sundays closed. Winter island season omitted. Zone 4 is 4N/4S.

### Minnesota — full, conservative (`mn-pack.js`)
- Firearm A encoded Nov 7–15 for **all** DPAs (100-series actually through Nov 22).

### Missouri — full (`mo-pack.js`)
- Antlerless firearms (select counties) omitted.

### Montana — full, summary (`mt-pack.js`)
- Not per-HD mule vs whitetail. Shoulder seasons omitted.

### Texas — full, conservative (`tx-pack.js`)
- Gun is **North/South overlap only** (through Jan 3, 2027). South extra and special-late omitted.

---

## Full this continuation (alphabetical remaining)

### North Carolina — full (`nc-pack.js`)
- Dates: official eRegulations deer seasons, last updated **Aug 18, 2026**. Overlay: TIGER 100 counties.
- **Not 100%:**
  1. No official zone FeatureServer — zones are county lists from the table.
  2. Western **antlerless** is shorter than antlered in several county groups (noted, not separately enforced).
  3. Buncombe/Henderson highway-line antlerless exception not drawn.
  4. Urban archery Jan 9–Feb 14, 2027 omitted (municipalities only).
  5. Game-land dates can differ from the county table.

### North Dakota — full (`nd-pack.js`)
- Dates: official 2026-27 Deer Hunting Proclamation (finalized). GIS: official NDGISHUB Deer Units (38 `UNIT_ID` / 39 polygons).
- **Not 100%:** Regular **gun is lottery by unit + deer type**. Pack shows Nov 6–22 on every unit with that note. One extra GIS polygon vs 38 proclamation IDs. PLOTS walk-in (3631) not wired. Nonresident bow private-only first 9.5 days noted, not land-filtered. Muzzleloader is white-tailed only.

### Nebraska — full (`ne-pack.js`)
- Dates: official outdoornebraska.gov hunting-seasons 2026 bullets. Overlay: TIGER counties.
- **Not 100%:** November firearm is a **unit buck permit** shown statewide. 2026 unit maps are PDFs, not REST. River/late antlerless omitted.

### New Hampshire — full (`nh-pack.js`)
- Dates: official NHFG 2026 dates page. GIS: official deer WMU layer (20 units, field `WMU`).
- **Not 100%:** 2026-27 printed digest / either-sex-by-WMU table was **not posted** as of 2026-08-19 (eRegulations still 2025-26). Either-sex days inside muzzleloader/firearms are **not encoded**. Do not copy 2025. Town firearm restrictions omitted.

### New York — full (`ny-pack.js`)
- Dates: official DEC deer/bear seasons page. GIS: official DEC WMU layer (92, field `UNIT`).
- **Not 100%:**
  1. North vs South is inferred from unit prefix (5/6 except 6P = North). **6R and 6S treated as Northern — confirm the DEC zone map.**
  2. Early antlerless Sept 12–20 (listed Southern WMUs) omitted.
  3. GIS metadata says boundaries begin 2009/2010.
  4. Westchester / Suffolk / Nassau firearm-type restrictions not encoded.

### Ohio — full (`oh-pack.js`)
- Dates: official ODNR Wildlife Council May 4, 2026 release. Overlay: official ODNR 2026-27 deer-regs GIS (107 county/DSA polygons).
- **Not 100%:** CWD surveillance extra archery (from Sept 12) and early gun Oct 10-12 omitted. County bag limits are in GIS attributes, not a separate engine rule.

### Oklahoma — full (`ok-pack.js`)
- Dates: official ODWC hunting-seasons / deer-big-game-season 2026-27. Overlay: TIGER counties.
- **Not 100%:** Holiday antlerless gun Dec 18–31 is zone-listed — omitted. Antlerless days inside regular gun/muzzleloader vary by zone.

### Pennsylvania — full (`pa-pack.js`)
- Dates: official PGC Seasons and Bag Limits 2026-27. GIS: PASDA PGC WMU 2021 (23 units, `WMU_ID`).
- **Not 100%:**
  1. WMU layer year is **2021** — confirm no 2026 boundary change.
  2. WMUs 4A/4C/4D/5A extended antlerless firearms listed as Dec 26–Jan 18, **2026** (year looks like a site typo). **Omitted** until confirmed as 2027.
  3. Special antlerless firearms Oct 22–25 (junior/senior/disabled/military) omitted.

### South Carolina — full (`sc-pack.js`)
- Dates: official eRegulations private-land page, last updated **Aug 7, 2026**. Overlay: **official SCDNR Game Zones FeatureServer (4 polygons)** — draws the Norfolk Southern / SC 183 split.
- **Not 100%:** WMA dates differ and are not encoded. Named-property WMA calendars omitted.

### Michigan — full (`mi-pack.js`)
- Dates: official DNR 2026 deer calendar. Overlay: TIGER counties (UP vs LP).
- **Not 100%:** Statewide DMU FeatureServer is **token-gated**. Antlerless extras (LP Sept 12-13 and Dec 7-Jan 1) omitted. Island DMUs 145/245 omitted.

### Rhode Island — full (`ri-pack.js`)
- Dates: official **250-RICR-60-00-9** effective July 28, 2026 (not stale eReg HTML). Overlay: TIGER 5 counties.
- **Not 100%:** Zones are towns; Zone 1 and 2 share the mainland calendar so counties work. Zone 3 (Patience/Prudence) and Zone 4 (Block Island date list) omitted.

### South Dakota — full, conservative (`sd-pack.js`)
- Archery: official GFP key dates Sept 1, 2026–Jan 1, 2027. Firearm: official East River Nov 21–Dec 6 and West River Nov 14–29.
- **Not 100%:** Firearm encoded as **overlap only (Nov 21–29)**. East/West/Black Hills unit GIS not wired. Black Hills/Custer Nov 1–30 omitted. **Muzzleloader not encoded** (official table not quoted this pass). Firearm is lottery by unit.

### Tennessee — full (`tn-pack.js`)
- Dates: official TWRA deer page 2026-27. Overlay: TIGER counties mapped to Units 1–6 county lists.
- **Not 100%:** August velvet hunt is private + listed Unit 1 WMAs only (encoded Private). WMA dates can differ. No official DMU FeatureServer used.

### Virginia — full (`va-pack.js`)
- Dates: official DWR deer page 2026-27. Overlay: TIGER counties/cities.
- **Not 100% — important:**
  1. **Late archery and late muzzleloader omitted** (too many private-land exceptions).
  2. Rockingham treated as short-gun (west of Rts 613/731). East Rockingham actually has firearms through Jan 2.
  3. **National Forest firearms are typically Nov 14–28** — pack uses private-land windows, so a USFS click in December can over-show gun.
  4. Suffolk is one polygon (Dismal Swamp split not drawn).
  5. Early muzzleloader is encoded statewide including Chesapeake / VA Beach (those cities are already in firearms).
  6. Urban / NOVA extra seasons omitted.

### Vermont — full (`vt-pack.js`)
- Dates: official VTFW 2026 seasons pages. GIS: official ANR WMU layer (21 units, field BOUNDARY).
- **Not 100%:** Expanded archery Sept 15-30 (designated town zones) omitted. October muzzleloader is **antlerless-permit-only**. Regular-season antlerless also needs a 2026 permit.

### West Virginia — full (`wv-pack.js`)
- Dates: official WVDNR hunting-seasons 2026-27 table. Overlay: TIGER counties.
- **Not 100%:** Antlerless split is **selected counties** — omitted as extra gun. Buck firearms encoded statewide as antlered. Digest pp. 13–18 county lists not transcribed. Mountaineer Heritage Jan 14–17 omitted.

### Wisconsin — full (`wi-pack.js`)
- Dates: official DNR hunt/dates 2026 table. GIS: official DMU layer (111 polygons).
- **Not 100%:** Extended archery to Jan 31 (metro + select farmland) omitted. Metro extra gun to Dec 9 omitted. Holiday antlerless Dec 24–Jan 1 omitted (not confirmed statewide).

### Utah — full, general only (`ut-pack.js`)
- Dates: official Field Regulations Guidebook 2026.1.2 p.8. GIS: official **2026 Mule Deer General Season** layer (31 units).
- **Not 100%:** Permit is still unit-based. Extended archery, early rifle (select units Oct 7–11), limited-entry, HAMSS omitted.

### Washington — full, conservative (`wa-pack.js`)
- Dates: official eRegulations general seasons May 1, 2026. GIS: official WDFW 2026 GMU polygons (152, Apr 1 2026-Mar 31 2027).
- **Not 100%:**
  1. Archery encoded **Sept 1–20** (shortest early window). Most GMUs actually run through Sept 25.
  2. Modern firearm encoded **Oct 17–27** (shortest mule/WT). Blacktail western GMUs actually run through Nov 1 — extra days omitted.
  3. Late archery / late muzzleloader / late modern / high-buck wilderness omitted.
  4. Species (blacktail vs mule vs whitetail) is not a picker.
  5. Closed/permit-only GMUs filtered out of the overlay.

---

## This pass (leftover states + zone colors + WMA)

Hunt-unit overlay: if a pack has more than one zone type, those types get Alabama-style distinct colors. Statewide single-calendar packs still hash per unit so neighboring units do not all paint the same.

WMA / Game Lands / SGL / Wildlife Area / state hunt land: official agency layer when the pack has one; otherwise PAD-US open-access state fish-and-wildlife / hunt land. WMA dates still differ from the county/GMU table unless noted.

### Arizona — full, OTC archery only (`az-pack.js`)
- Dates: official 2026-27 AZGFD PDF Commission Order 2 OTC archery tables.
- GIS: AGFD Management Unit Boundaries (80 `GMUNAME`). 15BE/15BW-style splits may be combined.
- **Not 100%:** Draw general/muzzleloader/youth hunt numbers omitted (those days stay closed). Harvest limits can close a unit before the printed end date (live harvest-tracking not in the engine). January needs a new calendar-year nonpermit-tag.

### Louisiana — full, conservative (`la-pack.js`)
- Dates: official LDWF 2026-27 deer hunting schedule. Overlay: TIGER parishes.
- Whole-parish cores (listed in only one Area) get that Area’s calendar and color (1, 2, 4, 6, 9, 10).
- **Not 100%:** No official Area 1–10 polygon REST. Split parishes (Areas 3/5/7/8 live only as splits) use overlap Oct 16 archery / Nov 14 primitive / Nov 21 gun. Kisatchie still-hunt-only leftover.

### Mississippi — full, conservative (`ms-pack.js`)
- Dates: official eRegulations 2026-27 column (updated Aug 14, 2026). Overlay: TIGER counties.
- North Central = 6 whole counties. Southeast-core = coastal whole counties. Rest = Hills/Delta/split with Oct 15 archery start.
- **Not 100%:** Highway splits (I-55/I-20/US 61/US 84/MS 35) not drawn. Hills extra Oct 1–14 omitted on split counties. WMA is not Open Public Land.

### Nevada — full, conservative draw (`nv-pack.js`)
- Dates: official NDOW 2026-27 eRegulations mule-deer tables (updated May 27, 2026). GIS: 129 hunt units + 17 WMAs.
- **Not 100%:** Every hunt is a draw quota. Rifle is Oct 5–16 overlap on October units only. Muzzleloader Sep 10–30 (short). Nov/Dec-only rifle units have no gun row.

### New Mexico — full, bow only (`nm-pack.js`)
- Dates: official 2026-27 NMDOW deer PDF. GIS: BLM/NMDGF GMU layer (field `GMU`).
- **Not 100%:** Rifle/muzzleloader hunt codes omitted. January bow on many GMUs omitted. GIS shapefile year on the NMDOW site is 2017. Draw license required.

### Oregon — full, western general (`or-pack.js`)
- Dates: official ODFW 2026 seasons + eRegulations (Mar 31, 2026). GIS: official WMU layer (69, `UNIT_NUM` / `REGION`).
- **Not 100%:** Eastern 2026 Deer Hunt Areas are new controlled polygons — east WMUs have no general rows. Late western archery omitted.

### New Jersey — full, Game Code formulas (`nj-pack.js`)
- Fall bow / winter bow / six-day firearm computed from official **N.J.A.C. 7:25-5** calendar formulas for 2026-27.
- Youth archery **Sep 26, 2026** and youth firearm **Nov 21, 2026** match the official NJFW 2026-27 Take a Kid Hunting page.
- Overlay: official DMZ GIS (88 polygons) colored by regulation set, plus NJDEP WMA polygons.
- **Not 100%:** Printed 2026-27 digest not posted. Permit-bow end dates for sets 0/2/3 follow the 2025-26 digest pattern. Special-area zones (37, 38, 39, 53, 54, 61, 64, 66, 67, 68) have no season rows. Permit shotgun omitted. Permit muzzleloader later days omitted. April 2026 proposal to collapse regulation sets was not used.

---

## Remaining lower-48 (still building)

None. Lower-48 packs are in. New Jersey is the newest; confirm the digest when NJFW posts it.


---

## Smoke tests run this sitting

Node `matchRules` checks (PASS): NC Wake gun Oct 20 / archery Sept 20; OH Franklin gun Dec 3 vs closed Dec 10; PA WMU 2B early archery vs 2A closed; SC Charleston gun Aug 20 vs Spartanburg closed; NY 5A northern gun Oct 30 vs 3A closed, 1C bow-only closed Nov 25; VA Fairfax gun Dec 20 vs Buchanan closed; SD overlap gun Nov 25 vs closed Nov 16; WI/TN/WV/NH conservative close.

VA pack had a syntax extra `]` after accuracyNotes — **fixed**.

---

## What Rockit should eyeball first

Highest leftover risk (can show open when it should be shorter, or missing a later window):

1. **New Jersey** — Game Code formulas used; printed digest not posted. Special-area zones closed in pack.
2. **Arizona** — OTC archery only; live harvest-limit closures not in the engine; draw rifle omitted.
3. **Oregon** — eastern Deer Hunt Areas are not the WMU layer (east stays closed on a general tag).
4. **Louisiana / Mississippi** — highway/parish splits are conservative overlap, not legal lines.
5. **Nevada / New Mexico** — draw tags; rifle hunt codes omitted or overlap-only.
6. **Virginia** — private vs National Forest firearms length; late seasons omitted.
7. **New Hampshire** — either-sex days by WMU are not in the 2026 digest yet.

Not production-pushed.
