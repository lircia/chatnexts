<div align="center">
<img src="./docs/images/icon.svg" alt="预览"/>

<h1 align="center">ChatGPT Next Web</h1>

一键免费部署你的私人 ChatGPT 网页应用。

## 这是关于CloudFlare pages部署的教程

<div align="left">
  
### 1.复刻本仓库              


### 2.部署到 Pages
登录 Cloudflare，左侧菜单栏点击 Workers 和 Pages，选择 Pages 标签，点击连接到 Git，选择 chatnext 仓库,点击开始设置，框架预设选 Next.js，构建命令替换为
```
npx @cloudflare/next-on-pages@1.5.0
```
接着点击展开环境变量，添加以下内容

<table>
  <tr><th>变量<th>值<th>重要性<tr>
  <tr><td>NODE_VERSION<td>20.18.1<td>必须</tr>
  <tr><td>NEXT_TELEMETRY_DISABLE<td>1<td>必须</tr>
  <tr><td>OPENAI_API_KEY<td>你的API KEY<td>必须</tr>
  <tr><td>PHP_VERSION<td>7.1<td>必须</tr>
  <tr><td>YARN_VERSION<td>1.22.19<td>必须<tr>
  <tr><td>BASE_URL<td>https://api.openai.com<td>可选,OPENAI API地址、第三方API OPENAI兼容地址<tr>
  <tr><td>CUSTOM_MODELS<td>gpt-4,gpt-3.5-turbo<td>可选，自定义可用模型<tr>
  <tr><td>CODE<td> <td>可选，站点密码（默认为空，无密码）,可以使用逗号隔开填入多个密码<tr>
  <tr><td>HIDE_USER_API_KEY<td>1<td>可选，禁止用户自行填入api key<tr>
</table>

设置完毕点击 保存并部署，然后下滑依次点击 取消部署 - 取消构建 - 继续处理项目 - 继续，点击 设置 标签，点击 运行时 标签，找到 兼容性标志，添加 nodejs_compat

添加标签后，点击 部署，点击列表项最右侧的三个点，点击重试部署

等待几分钟构建完毕后即可使用
> ## 注意事项
官方仓库及其他拉取部署时，需检查根目录中 package.json 内，第28行的next的值 若小于 14.2.35 需改为 14.2.35 或以上更高的版本 方可正常部署运行
