# iOS devices

> 下面所有的截图均来自 [Terminus 终点站 WIKI](https://embywiki.911997.xyz/)

- **iOS 上使用官方客户端**
  
  
    ### **下载并安装**
    
    从 [**App Store**](https://apps.apple.com/us/app/emby/id992180193) 下载并安装 Emby 官方客户端
    
    ### **连接 Emby 公益服务器**
    
    ![](https://cdn.jsdmirror.com/gh/BsBlog/Levilde-Luminia-Wiki-dist@images/Use-and-Play/iOS/img.2043d578.png)
    
    启动 App ，欢迎页面点 **下一个**
    
    ![](https://cdn.jsdmirror.com/gh/BsBlog/Levilde-Luminia-Wiki-dist@images/Use-and-Play/iOS/img_1.67d7007e.png)
    
    点击 **跳过** 按钮，我们手动连接服务器（因为 **公益服账号不是 Emby Connect 账号**，这是两个不同的东西）
    
    ![](https://cdn.jsdmirror.com/gh/BsBlog/Levilde-Luminia-Wiki-dist@images/Use-and-Play/iOS/img_2.db8b881c.png)
    
    填写机器人给你的公益服地址和端口号（**注意**: 机器人提供的地址和端口是写一起的，而这里要分开填写），然后点击 **连接** 按钮
    
    ![](https://cdn.jsdmirror.com/gh/BsBlog/Levilde-Luminia-Wiki-dist@images/Use-and-Play/iOS/img_3.3454a93a.png)
    
    点击 **手动登录** 按钮
    
    ![](https://cdn.jsdmirror.com/gh/BsBlog/Levilde-Luminia-Wiki-dist@images/Use-and-Play/iOS/img_4.4cd06e9f.png)
    
    填写自己的账号密码点击 **登录** 按钮
    
    ### **正版 或者 破解**
    
    ![](https://cdn.jsdmirror.com/gh/BsBlog/Levilde-Luminia-Wiki-dist@images/Use-and-Play/iOS/img_7.bad919a3.png)
    
    可以直接点击 **解锁 $4.99，这钱是付给 Emby 官方的。**
    
    ### **使用 Shadowrocket 破解**
    
    如果你有著名的翻墙软件 [Shadowrocket](https://web.archive.org/web/20220524092827mp_/https://apps.apple.com/app/shadowrocket/id932747118) ( 小火箭 ) 且版本号大于 v2.1.62 ，那就可以用来破解 Emby 的 iOS 官方客户端。
    
    下面我使用**全新安装** ( 也就是**默认配置** ) 的 Shadowrocket 来教大家如何破解 Emby。
    
    **配置 Shadowrocket**
    
    ![](https://cdn.jsdmirror.com/gh/BsBlog/Levilde-Luminia-Wiki-dist@images/Use-and-Play/iOS/ishot2020-12-07-01.29.18.png)
    
    打开 Shadowrocket ，选择下面的 **配置** ，再点击中间的本地配置文件 **default.conf**
    
    ![](https://cdn.jsdmirror.com/gh/BsBlog/Levilde-Luminia-Wiki-dist@images/Use-and-Play/iOS/img_3398.png)
    
    在弹出菜单中选择 **编辑纯文本**
    
    ![](https://cdn.jsdmirror.com/gh/BsBlog/Levilde-Luminia-Wiki-dist@images/Use-and-Play/iOS/ishot2020-12-07-01.32.50.png)
    
    把配置文件拖到最底部
    
    ```bash
    [Script]
    EmbyPremiere = type=http-response,script-path=https://raw.githubusercontent.com/rartv/SurgeScript/main/EmbyPremiere/EmbyPremiere.js,pattern=^https?:\/\/mb3admin.com\/admin\/service\/registration\/validateDevice,max-size=131072,requires-body=true,timeout=10,enable=true
    
    [MITM]
    hostname = mb3admin.com
    ```
    
    复制上面的代码，粘贴到最底部，然后点击右上角的 **保存**
    
    <aside>
    ⚠️ 注意：由于破解脚本托管在 GitHub 上，如果您的网络连接不稳定或 GitHub 访问受限，可能无法获取脚本导致破解失败。
    
    </aside>
    
    **这时请使用下面的备用脚本**
    
    ```bash
    
    [Script]
    EmbyPremiere = type=http-response,script-path=https://gitlab.com/iptv-org/embypublic/-/raw/master/Script/EmbyPremiere.js,pattern=^https?:\/\/mb3admin.com\/admin\/service\/registration\/validateDevice,max-size=131072,requires-body=true,timeout=10,enable=true
    
    [MITM]
    hostname = mb3admin.com
    ```
    
    ![](https://cdn.jsdmirror.com/gh/BsBlog/Levilde-Luminia-Wiki-dist@images/Use-and-Play/iOS/ishot2020-12-07-01.42.21.png)
    
    再点击中间的本地配置文件 **default.conf，**选择 **编辑配置**
    
    ![](https://cdn.jsdmirror.com/gh/BsBlog/Levilde-Luminia-Wiki-dist@images/Use-and-Play/iOS/ishot2020-12-07-01.44.26.png)
    
    点击 HTTPS 解密
    
    ![](https://cdn.jsdmirror.com/gh/BsBlog/Levilde-Luminia-Wiki-dist@images/Use-and-Play/iOS/ishot2020-12-07-01.48.13.png)
    
    打开 **HTTPS 解密** 的开关
    
    ![](https://cdn.jsdmirror.com/gh/BsBlog/Levilde-Luminia-Wiki-dist@images/Use-and-Play/iOS/ishot2020-12-07-01.50.13.png)
    
    点击 **生成新的 CA 证书**
    
    ![](https://cdn.jsdmirror.com/gh/BsBlog/Levilde-Luminia-Wiki-dist@images/Use-and-Play/iOS/ishot2020-12-07-01.51.59.png)
    
    证书生成后还需要 **安装证书**
    
    ![](https://cdn.jsdmirror.com/gh/BsBlog/Levilde-Luminia-Wiki-dist@images/Use-and-Play/iOS/ishot2020-12-07-01.55.25.png)
    
    证书下载到设置里后点击 **已下载描述文件**
    
    ![](https://cdn.jsdmirror.com/gh/BsBlog/Levilde-Luminia-Wiki-dist@images/Use-and-Play/iOS/img_c6f10bb114f9-1.jpeg)
    
    点击右上角 **安装**
    
    ![](https://cdn.jsdmirror.com/gh/BsBlog/Levilde-Luminia-Wiki-dist@images/Use-and-Play/iOS/ishot2020-12-07-02.00.45.png)
    
    在手机 **设置 -> 通用 -> 关于本机 -> 证书信任设置**，找到刚才安装的 Shadowrocket 证书，将其开关打开
    
    ![](https://cdn.jsdmirror.com/gh/BsBlog/Levilde-Luminia-Wiki-dist@images/Use-and-Play/iOS/ishot2020-12-07-02.02.55.png)
    
    回到 Shadowrocket ，上面显示 **系统已信任** ，说明我们正确安装并让系统信任我们的了证书，点右上角的**√** 保存即可完成破解