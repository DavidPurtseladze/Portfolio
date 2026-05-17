const iconMap: Record<string, string> = {
    vue: 'mdi:vuejs',
    ts: 'mdi:language-typescript',
    js: 'mdi:language-javascript',
    json: 'mdi:code-json',
    md: 'mdi:language-markdown',
    lua: 'mdi:language-lua',
    css: 'mdi:language-css3',
    html: 'mdi:language-html5',
    py: 'mdi:language-python',
    go: 'mdi:language-go',
    sh: 'mdi:console',
    yaml: 'mdi:file-code-outline',
    toml: 'mdi:file-code-outline',
    dockerfile: 'mdi:docker',
    rs: 'vscode-icons:file-type-rust',
}

export function mapFileIcon(type: string | undefined): string {
    if (!type) return 'mdi:file-outline'
    return iconMap[type.toLowerCase()] ?? 'mdi:file-outline'
}
