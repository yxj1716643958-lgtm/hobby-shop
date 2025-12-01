// 阿里云OSS配置
export const OSS_CONFIG = {
  // 你的bucket名称
  bucket: 'moxing12311',
  // 区域
  region: 'oss-cn-beijing',
  // 基础URL
  baseUrl: 'https://moxing12311.oss-cn-beijing.aliyuncs.com',
};

/**
 * 获取OSS图片完整URL
 * @param path 图片在OSS中的路径，例如: 'magazines/gundam-ace/cover.jpg'
 * @returns 完整的图片URL
 */
export function getOssImageUrl(path: string): string {
  // 移除开头的斜杠（如果有）
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${OSS_CONFIG.baseUrl}/${cleanPath}`;
}

/**
 * 批量获取OSS图片URL
 * @param paths 图片路径数组
 * @returns 完整URL数组
 */
export function getOssImageUrls(paths: string[]): string[] {
  return paths.map(path => getOssImageUrl(path));
}
