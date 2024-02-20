

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.DfV-SBf-.js","_app/immutable/chunks/scheduler.GQjQWUNk.js","_app/immutable/chunks/index.DJhhrnOK.js"];
export const stylesheets = [];
export const fonts = [];
