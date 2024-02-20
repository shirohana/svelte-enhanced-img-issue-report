

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.Rv_zov3a.js","_app/immutable/chunks/scheduler.GQjQWUNk.js","_app/immutable/chunks/index.DJhhrnOK.js","_app/immutable/chunks/entry.n7n88sdh.js"];
export const stylesheets = [];
export const fonts = [];
