# ossutil 快速上传配置

## 1. 下载ossutil
Windows 64位：https://gosspublic.alicdn.com/ossutil/ossutil64.exe

下载后放到一个文件夹，比如 `C:\ossutil\`

## 2. 配置ossutil

打开命令行（CMD），进入ossutil所在文件夹：
```cmd
cd C:\ossutil
ossutil64.exe config
```

按提示输入：
- **endpoint**: oss-cn-beijing.aliyuncs.com
- **accessKeyId**: 你的AccessKey ID（在阿里云控制台获取）
- **accessKeySecret**: 你的AccessKey Secret

### 获取AccessKey的方法：
1. 登录阿里云控制台
2. 鼠标悬停右上角头像
3. 点击"AccessKey管理"
4. 创建AccessKey（会显示ID和Secret，记得保存Secret，只显示一次）

## 3. 批量上传（多线程，超快）

```cmd
# 上传整个文件夹，使用多线程
ossutil64.exe cp -r "你的本地文件夹路径" oss://moxing12311/华北2/ --jobs 10

# 例如：
ossutil64.exe cp -r "D:\模型图片" oss://moxing12311/华北2/ --jobs 10
```

参数说明：
- `-r`: 递归上传文件夹
- `--jobs 10`: 使用10个线程并发上传（可以改成20、30更快）
- 会保持原有的文件夹结构

## 4. 查看上传进度

ossutil会实时显示：
- 已上传文件数
- 上传速度
- 预计剩余时间

## 速度对比

- 网页上传：单线程，约 1-5 MB/s
- ossutil上传：多线程，约 10-50 MB/s（取决于网速）

7GB文件：
- 网页：约 2-3 小时
- ossutil：约 20-40 分钟
