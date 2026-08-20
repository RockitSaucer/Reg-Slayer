const fs = require('fs');
const vm = require('vm');
const dir = __dirname;
function load(f) {
  const g = { window: { RS_PACKS: {}, registerStatePack: function () {} } };
  vm.createContext(g);
  vm.runInContext(fs.readFileSync(dir + '/pack-host.js', 'utf8'), g);
  vm.runInContext(fs.readFileSync(dir + '/pack-lib.js', 'utf8'), g);
  vm.runInContext(fs.readFileSync(dir + '/' + f, 'utf8'), g);
  return Object.values(g.window.RS_PACKS)[0];
}
function any(p, a, d, w) {
  return (p.matchRules(a, d, w, 'Either') || []).length > 0;
}
const wa = load('wa-pack.js');
const ut = load('ut-pack.js');
const md = load('md-pack.js');
const checks = [
  ['WA 407 archery Sep 10', any(wa, 407, '2026-09-10', 'Archery'), true],
  ['WA 407 archery Sep 22 conservative closed', any(wa, 407, '2026-09-22', 'Archery'), false],
  ['WA 407 gun Oct 20', any(wa, 407, '2026-10-20', 'Gun'), true],
  ['WA 407 gun Oct 30 omitted extra', any(wa, 407, '2026-10-30', 'Gun'), false],
  ['WA 407 muz Oct 1', any(wa, 407, '2026-10-01', 'Primitive'), true],
  ['WA 124 WT extra Oct 29', any(wa, 124, '2026-10-29', 'Gun'), true],
  ['UT Cache archery Aug 20', any(ut, 'Cache', '2026-08-20', 'Archery'), true],
  ['UT Cache gun Oct 20', any(ut, 'Cache', '2026-10-20', 'Gun'), true],
  ['UT Cache gun Oct 26 closed', any(ut, 'Cache', '2026-10-26', 'Gun'), false],
  ['VT A gun Nov 20', any(load('vt-pack.js'), 'A', '2026-11-20', 'Gun'), true],
  ['VT A gun Dec 1 closed', any(load('vt-pack.js'), 'A', '2026-12-01', 'Gun'), false],
  ['MD Allegany gun Dec 1', any(md, 'ALLEGANY', '2026-12-01', 'Gun'), true],
  ['MD Allegany gun Jan 9 no extra', any(md, 'ALLEGANY', '2027-01-09', 'Gun'), false],
  ['MD Montgomery gun Jan 9 B extra', any(md, 'MONTGOMERY', '2027-01-09', 'Gun'), true],
  ['MD Washington conservative A', any(md, 'WASHINGTON', '2027-01-09', 'Gun'), false],
  ['MD Howard archery Sep 15', any(md, 'HOWARD', '2026-09-15', 'Archery'), true],
  ['NH A archery Dec 10 closed', any(load('nh-pack.js'), 'A', '2026-12-10', 'Archery'), false],
  ['NH B archery Dec 10 open', any(load('nh-pack.js'), 'B', '2026-12-10', 'Archery'), true],
  ['NH A gun Dec 1 closed', any(load('nh-pack.js'), 'A', '2026-12-01', 'Gun'), false],
  ['NH B gun Dec 1 open', any(load('nh-pack.js'), 'B', '2026-12-01', 'Gun'), true],
  ['NY 1C bow Jan 15', any(load('ny-pack.js'), '1C', '2027-01-15', 'Archery'), true],
  ['NY 3A bow Jan 15 closed', any(load('ny-pack.js'), '3A', '2027-01-15', 'Archery'), false],
  ['MI Kent gun Nov 20', any(load('mi-pack.js'), 'KENT', '2026-11-20', 'Gun'), true],
  ['MI Marquette gun Dec 5 closed', any(load('mi-pack.js'), 'MARQUETTE', '2026-12-05', 'Gun'), false],
  ['MI Marquette muz Dec 5', any(load('mi-pack.js'), 'MARQUETTE', '2026-12-05', 'Primitive'), true],
  ['MI Kent gun Dec 5', any(load('mi-pack.js'), 'KENT', '2026-12-05', 'Gun'), true],
  ['RI Providence gun Dec 10', any(load('ri-pack.js'), 'PROVIDENCE', '2026-12-10', 'Gun'), true],
  ['RI Providence gun Nov 20 closed', any(load('ri-pack.js'), 'PROVIDENCE', '2026-11-20', 'Gun'), false],
  ['SC zone 3 gun Aug 20', any(load('sc-pack.js'), '3', '2026-08-20', 'Gun'), true],
  ['SC zone 1 gun Aug 20 closed', any(load('sc-pack.js'), '1', '2026-08-20', 'Gun'), false],
  ['AZ 6A archery Aug 25', any(load('az-pack.js'), '6A', '2026-08-25', 'Archery'), true],
  ['AZ 6A gun Oct 25 closed (draw omitted)', any(load('az-pack.js'), '6A', '2026-10-25', 'Gun'), false],
  ['AZ 45A archery Dec 15 closed (Jan only)', any(load('az-pack.js'), '45A', '2026-12-15', 'Archery'), false],
  ['AZ 45A archery Jan 10', any(load('az-pack.js'), '45A', '2027-01-10', 'Archery'), true],
  ['OR 16 gun Oct 20', any(load('or-pack.js'), 16, '2026-10-20', 'Gun'), true],
  ['OR 40 gun Oct 20 east closed', any(load('or-pack.js'), 40, '2026-10-20', 'Gun'), false],
  ['OR 16 archery Sep 1', any(load('or-pack.js'), 16, '2026-09-01', 'Archery'), true],
  ['NV 051 archery Aug 15', any(load('nv-pack.js'), '051', '2026-08-15', 'Archery'), true],
  ['NV 021 archery Aug 15 closed', any(load('nv-pack.js'), '021', '2026-08-15', 'Archery'), false],
  ['NV 021 archery Dec 5', any(load('nv-pack.js'), '021', '2026-12-05', 'Archery'), true],
  ['NV 051 gun Oct 10', any(load('nv-pack.js'), '051', '2026-10-10', 'Gun'), true],
  ['NV 192 gun Oct 10 closed (Nov rifle)', any(load('nv-pack.js'), '192', '2026-10-10', 'Gun'), false],
  ['NM 10 bow Sep 10', any(load('nm-pack.js'), '10', '2026-09-10', 'Archery'), true],
  ['NM 2C bow Sep 10 closed', any(load('nm-pack.js'), '2C', '2026-09-10', 'Archery'), false],
  ['NM 10 gun Nov 8 closed (draw omitted)', any(load('nm-pack.js'), '10', '2026-11-08', 'Gun'), false],
  ['MS MARSHALL archery Oct 5', any(load('ms-pack.js'), 'MARSHALL', '2026-10-05', 'Archery'), true],
  ['MS HANCOCK archery Oct 5 closed', any(load('ms-pack.js'), 'HANCOCK', '2026-10-05', 'Archery'), false],
  ['MS HANCOCK archery Oct 20', any(load('ms-pack.js'), 'HANCOCK', '2026-10-20', 'Archery'), true],
  ['MS HANCOCK Feb archery', any(load('ms-pack.js'), 'HANCOCK', '2027-02-10', 'Archery'), true],
  ['MS MARSHALL Feb archery closed', any(load('ms-pack.js'), 'MARSHALL', '2027-02-10', 'Archery'), false],
  ['LA CONCORDIA gun Dec 1', any(load('la-pack.js'), 'CONCORDIA', '2026-12-01', 'Gun'), true],
  ['LA CONCORDIA gun Oct 20 closed', any(load('la-pack.js'), 'CONCORDIA', '2026-10-20', 'Gun'), false],
  ['LA CAMERON archery Sep 25', any(load('la-pack.js'), 'CAMERON', '2026-09-25', 'Archery'), true],
  ['NJ 10 fall bow Sep 20', any(load('nj-pack.js'), 10, '2026-09-20', 'Archery'), true],
  ['NJ 21 fall bow Sep 20 closed (set 0)', any(load('nj-pack.js'), 21, '2026-09-20', 'Archery'), false],
  ['NJ 21 fall bow Oct 10', any(load('nj-pack.js'), 21, '2026-10-10', 'Archery'), true],
  ['NJ 10 six-day Dec 8', any(load('nj-pack.js'), 10, '2026-12-08', 'Gun'), true],
  ['NJ 10 winter bow Feb 10 set 8', any(load('nj-pack.js'), 10, '2027-02-10', 'Archery'), true],
  ['NJ 21 winter bow Feb 10 closed', any(load('nj-pack.js'), 21, '2027-02-10', 'Archery'), false],
  ['NJ youth archery Sep 26', any(load('nj-pack.js'), 10, '2026-09-26', 'Youth'), true],
  ['NJ special 37 closed', any(load('nj-pack.js'), 37, '2026-12-08', 'Gun'), false]
];
let fail = 0;
for (const [n, g, e] of checks) {
  const ok = g === e;
  if (!ok) fail++;
  console.log(ok ? 'PASS' : 'FAIL', n, 'got', g);
}
const cat = fs.readFileSync(dir + '/catalog.js', 'utf8');
const full = (cat.match(/status:"full"/g) || []).length;
const bld = (cat.match(/status:"building"/g) || []).length;
console.log('catalog full', full, 'building', bld);
process.exit(fail ? 1 : 0);
