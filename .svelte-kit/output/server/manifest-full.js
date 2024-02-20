export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","apple.jpg","favicon.png","りんご.jpg","蘋果.jpg"]),
	mimeTypes: {".jpg":"image/jpeg",".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.oKaoEhOG.js","app":"_app/immutable/entry/app.B64DTJUM.js","imports":["_app/immutable/entry/start.oKaoEhOG.js","_app/immutable/chunks/entry.n7n88sdh.js","_app/immutable/chunks/scheduler.GQjQWUNk.js","_app/immutable/entry/app.B64DTJUM.js","_app/immutable/chunks/scheduler.GQjQWUNk.js","_app/immutable/chunks/index.DJhhrnOK.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
