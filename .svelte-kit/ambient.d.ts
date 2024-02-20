
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const npm_package_devDependencies__sveltejs_enhanced_img: string;
	export const MANPATH: string;
	export const COREPACK_ROOT: string;
	export const TERM_PROGRAM: string;
	export const rvm_bin_path: string;
	export const FNM_LOGLEVEL: string;
	export const NODE: string;
	export const _P9K_TTY: string;
	export const PYENV_ROOT: string;
	export const npm_package_devDependencies_typescript: string;
	export const INIT_CWD: string;
	export const SHELL: string;
	export const TERM: string;
	export const npm_package_devDependencies_vite: string;
	export const FNM_NODE_DIST_MIRROR: string;
	export const TMPDIR: string;
	export const HOMEBREW_REPOSITORY: string;
	export const TERM_PROGRAM_VERSION: string;
	export const npm_package_scripts_dev: string;
	export const TERM_SESSION_ID: string;
	export const npm_package_private: string;
	export const npm_package_devDependencies__sveltejs_kit: string;
	export const npm_config_registry: string;
	export const ZSH: string;
	export const PNPM_HOME: string;
	export const FNM_COREPACK_ENABLED: string;
	export const USER: string;
	export const rvm_stored_umask: string;
	export const LS_COLORS: string;
	export const npm_package_scripts_check_watch: string;
	export const COMMAND_MODE: string;
	export const PNPM_SCRIPT_SRC_DIR: string;
	export const rvm_path: string;
	export const SSH_AUTH_SOCK: string;
	export const __CF_USER_TEXT_ENCODING: string;
	export const PYENV_VIRTUALENV_INIT: string;
	export const npm_package_devDependencies_tslib: string;
	export const npm_execpath: string;
	export const PAGER: string;
	export const npm_package_devDependencies_svelte: string;
	export const LSCOLORS: string;
	export const FNM_VERSION_FILE_STRATEGY: string;
	export const npm_config_frozen_lockfile: string;
	export const FNM_ARCH: string;
	export const rvm_prefix: string;
	export const PATH: string;
	export const LaunchInstanceID: string;
	export const npm_config_engine_strict: string;
	export const __CFBundleIdentifier: string;
	export const rvm_loaded_flag: string;
	export const PWD: string;
	export const npm_command: string;
	export const npm_package_scripts_preview: string;
	export const P9K_SSH: string;
	export const EDITOR: string;
	export const npm_lifecycle_event: string;
	export const LANG: string;
	export const P9K_TTY: string;
	export const npm_package_name: string;
	export const npm_package_devDependencies__sveltejs_vite_plugin_svelte: string;
	export const ITERM_PROFILE: string;
	export const NODE_PATH: string;
	export const npm_package_scripts_build: string;
	export const XPC_FLAGS: string;
	export const FNM_MULTISHELL_PATH: string;
	export const npm_config_node_gyp: string;
	export const XPC_SERVICE_NAME: string;
	export const npm_package_version: string;
	export const npm_package_devDependencies__sveltejs_adapter_auto: string;
	export const GPG_TTY: string;
	export const rvm_version: string;
	export const npm_package_devDependencies_svelte_check: string;
	export const COLORFGBG: string;
	export const HOME: string;
	export const SHLVL: string;
	export const PYENV_SHELL: string;
	export const npm_package_type: string;
	export const LC_TERMINAL_VERSION: string;
	export const HOMEBREW_PREFIX: string;
	export const FNM_DIR: string;
	export const ITERM_SESSION_ID: string;
	export const LOGNAME: string;
	export const LESS: string;
	export const npm_lifecycle_script: string;
	export const FZF_DEFAULT_COMMAND: string;
	export const FNM_RESOLVE_ENGINES: string;
	export const npm_config_user_agent: string;
	export const HOMEBREW_CELLAR: string;
	export const INFOPATH: string;
	export const LC_TERMINAL: string;
	export const _P9K_SSH_TTY: string;
	export const GITHUB_AUTH: string;
	export const SECURITYSESSIONID: string;
	export const rvm_user_install_flag: string;
	export const npm_package_scripts_check: string;
	export const COLORTERM: string;
	export const npm_node_execpath: string;
	export const NODE_ENV: string;
	export const VIPSHOME: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		npm_package_devDependencies__sveltejs_enhanced_img: string;
		MANPATH: string;
		COREPACK_ROOT: string;
		TERM_PROGRAM: string;
		rvm_bin_path: string;
		FNM_LOGLEVEL: string;
		NODE: string;
		_P9K_TTY: string;
		PYENV_ROOT: string;
		npm_package_devDependencies_typescript: string;
		INIT_CWD: string;
		SHELL: string;
		TERM: string;
		npm_package_devDependencies_vite: string;
		FNM_NODE_DIST_MIRROR: string;
		TMPDIR: string;
		HOMEBREW_REPOSITORY: string;
		TERM_PROGRAM_VERSION: string;
		npm_package_scripts_dev: string;
		TERM_SESSION_ID: string;
		npm_package_private: string;
		npm_package_devDependencies__sveltejs_kit: string;
		npm_config_registry: string;
		ZSH: string;
		PNPM_HOME: string;
		FNM_COREPACK_ENABLED: string;
		USER: string;
		rvm_stored_umask: string;
		LS_COLORS: string;
		npm_package_scripts_check_watch: string;
		COMMAND_MODE: string;
		PNPM_SCRIPT_SRC_DIR: string;
		rvm_path: string;
		SSH_AUTH_SOCK: string;
		__CF_USER_TEXT_ENCODING: string;
		PYENV_VIRTUALENV_INIT: string;
		npm_package_devDependencies_tslib: string;
		npm_execpath: string;
		PAGER: string;
		npm_package_devDependencies_svelte: string;
		LSCOLORS: string;
		FNM_VERSION_FILE_STRATEGY: string;
		npm_config_frozen_lockfile: string;
		FNM_ARCH: string;
		rvm_prefix: string;
		PATH: string;
		LaunchInstanceID: string;
		npm_config_engine_strict: string;
		__CFBundleIdentifier: string;
		rvm_loaded_flag: string;
		PWD: string;
		npm_command: string;
		npm_package_scripts_preview: string;
		P9K_SSH: string;
		EDITOR: string;
		npm_lifecycle_event: string;
		LANG: string;
		P9K_TTY: string;
		npm_package_name: string;
		npm_package_devDependencies__sveltejs_vite_plugin_svelte: string;
		ITERM_PROFILE: string;
		NODE_PATH: string;
		npm_package_scripts_build: string;
		XPC_FLAGS: string;
		FNM_MULTISHELL_PATH: string;
		npm_config_node_gyp: string;
		XPC_SERVICE_NAME: string;
		npm_package_version: string;
		npm_package_devDependencies__sveltejs_adapter_auto: string;
		GPG_TTY: string;
		rvm_version: string;
		npm_package_devDependencies_svelte_check: string;
		COLORFGBG: string;
		HOME: string;
		SHLVL: string;
		PYENV_SHELL: string;
		npm_package_type: string;
		LC_TERMINAL_VERSION: string;
		HOMEBREW_PREFIX: string;
		FNM_DIR: string;
		ITERM_SESSION_ID: string;
		LOGNAME: string;
		LESS: string;
		npm_lifecycle_script: string;
		FZF_DEFAULT_COMMAND: string;
		FNM_RESOLVE_ENGINES: string;
		npm_config_user_agent: string;
		HOMEBREW_CELLAR: string;
		INFOPATH: string;
		LC_TERMINAL: string;
		_P9K_SSH_TTY: string;
		GITHUB_AUTH: string;
		SECURITYSESSIONID: string;
		rvm_user_install_flag: string;
		npm_package_scripts_check: string;
		COLORTERM: string;
		npm_node_execpath: string;
		NODE_ENV: string;
		VIPSHOME: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
