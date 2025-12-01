# 阿里云OSS使用说明

## 当前配置

- **Bucket名称**: moxing12311
- **区域**: 华北2（北京）
- **访问域名**: https://moxing12311.oss-cn-beijing.aliyuncs.com

## 使用方法

### 1. 在组件中使用OSS图片

```typescript
import { getOssImageUrl } from '@/lib/ossConfig';

// 单张图片
const imageUrl = getOssImageUrl('华北2/01.jpg');
// 结果: https://moxing12311.oss-cn-beijing.aliyuncs.com/华北2/01.jpg

// 在组件中使用
<img src={getOssImageUrl('华北2/01.jpg')} alt="图片" />
```

### 2. 批量图片

```typescript
import { getOssImageUrls } from '@/lib/ossConfig';

const imagePaths = [
  '华北2/01.jpg',
  '华北2/02.jpg',
  '华北2/03.jpg',
];

const imageUrls = getOssImageUrls(imagePaths);
```

### 3. 创建新版块的图片配置

例如创建一个模型作品版块：

```typescript
// src/lib/modelImages.ts
import { getOssImageUrl } from './ossConfig';

export const modelImages = {
  '高达模型': [
    getOssImageUrl('华北2/01.jpg'),
    getOssImageUrl('华北2/02.jpg'),
    getOssImageUrl('华北2/03.jpg'),
  ],
  '其他模型': [
    getOssImageUrl('华北2/04.jpg'),
    getOssImageUrl('华北2/05.jpg'),
  ],
};
```

## 上传文件到OSS

### 方式1：网页控制台上传
1. 登录阿里云OSS控制台
2. 选择bucket: moxing12311
3. 点击"上传文件"或直接拖拽文件夹

### 方式2：使用ossutil工具批量上传
```bash
# 下载ossutil
# Windows: https://gosspublic.alicdn.com/ossutil/ossutil64.exe

# 配置
ossutil config

# 批量上传文件夹
ossutil cp -r 本地文件夹路径 oss://moxing12311/目标路径
```

## 注意事项

1. **文件路径**: OSS中的文件路径要和代码中的路径一致
2. **中文路径**: 支持中文，但建议URL编码
3. **权限设置**: Bucket已设置为"公共读"，图片可以直接访问
4. **费用**:
   - 存储费用：约0.12元/GB/月
   - 流量费用：约0.5元/GB（外网下行）
   - 7GB存储 + 适量流量，预计每月10-30元

## 下一步

上传完成后，告诉我：
1. 你上传的文件夹结构是什么样的？
2. 新版块要展示什么内容？

我会帮你创建对应的组件和配置。
