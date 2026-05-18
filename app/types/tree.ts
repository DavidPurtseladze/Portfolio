export interface TreeNode {
    name: string
    fileType?: string
    path: string
    url?: string
    children?: TreeNode[]
}
